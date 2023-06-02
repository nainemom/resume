import { cx } from "@/utils/cx";
import { useQuery } from "react-query";
import LoaderSvg from '@/assets/icons/loader.svg?raw';

type IconType = 'logo' | 'regular' | 'solid'

type IconTypeConfig = Record<IconType, string>

export type BoxIconProps = {
  name: string
  type: IconType
  className?: string
}

const TYPES_PREFIX: IconTypeConfig = {
  logo: 'bxl',
  regular: 'bx',
  solid: 'bxs',
};

const TYPES_FOLDER: IconTypeConfig = {
  logo: 'logos',
  regular: 'regular',
  solid: 'solid',
};

export default function BoxIcon(props: BoxIconProps) {
  const { isLoading, data, isError } = useQuery(
    `boxicon-${props.type}-${props.name}`,
    () => fetch(
      `https://unpkg.com/boxicons@2.1.4/svg/${TYPES_FOLDER[props.type]}/${TYPES_PREFIX[props.type]}-${props.name}.svg`,
    )
    .then((x) => x.text())
    .then((iconData) => {
      const iconDataModified = iconData.replace('<svg ', '<svg style="width: 100%; height: 100%;" ');
      return iconDataModified;
    })
  );
  const isLoaded = !isError && !isLoading && typeof data === 'string';
  const content = !isLoaded ? LoaderSvg : data;
  return (
    <i
      dangerouslySetInnerHTML={{
        __html: content,
      }}
      className={cx('inline-block', !isLoaded && 'animate-spin',props.className)}
    />
  )
}
