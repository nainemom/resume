import { useEffect, useRef, useState } from "react";

type UseFetchOptions<R, A> = {
  request: (arg: A) => Promise<R>,
  onError?: (err: unknown) => void,
  onSuccess?: (data: R) => void,
  dependencies?: (string | boolean | number | undefined | null | Date)[],
  manual?: boolean,
  enabled?: boolean,
};

type UseFetchRequestState<R> = {
  status: 'fetching' | 'pending' | 'done',
  data: R | undefined,
  error: unknown,
};

export const useFetch = <R = unknown, A = unknown>(userOptions: UseFetchOptions<R, A>) => {
  const { current: options } = useRef({
    isManual: userOptions.manual,
    onError: userOptions.onError,
    onSuccess: userOptions.onSuccess,
  });
  const isEnabled = typeof userOptions.enabled === 'boolean' ? userOptions.enabled : true;
  const changesKey = (userOptions.dependencies || []).map((x) => x?.toString() || '').join('-');
  const activeRequest = useRef<ReturnType<typeof userOptions.request> | null>(null);
  const [currentState, setCurrentState] = useState<UseFetchRequestState<R>>({
    status: 'pending',
    data: undefined,
    error: undefined,
  });

  const sendRequest = (isManualCall: boolean, arg?: A) => {
    if ((!isManualCall && activeRequest.current) || !isEnabled) {
      return null;
    }
    if (!isEnabled || (activeRequest.current && !isManualCall)) return null;
    setCurrentState((p) => ({
      ...p,
      status: 'fetching',
    }));
    activeRequest.current = userOptions.request(arg as A).then((data) => {
      setCurrentState((p) => ({
        ...p,
        data,
        error: undefined,
      }));
      options.onSuccess?.(data);
      return data;
    }).catch((error) => {
      setCurrentState((p) => ({
        ...p,
        data: undefined,
        error,
      }));
      options.onError?.(error);
      return error;
    }).finally(() => {
      activeRequest.current = null;
      setTimeout(() => {
        setCurrentState((p) => ({
          ...p,
          status: 'done',
        }));
      });
    });
  };

  useEffect(() => {
    if (!options.isManual) {
      sendRequest(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changesKey, isEnabled, options.isManual])

  return {
    ...currentState,
    isLoading: !options.isManual ? currentState.status !== 'done' : currentState.status === 'fetching',
    isError: currentState.status === 'done' && !!currentState.error,
    isFetched: currentState.status === 'done' && !!currentState.data,
    run: (requestArg?: A) => sendRequest(true, requestArg),
  };
}
