type VariableType = 'string' | 'number' | 'array' | 'object' | 'function' | 'date' | 'null' | 'undefined';

export default (x: unknown): VariableType => toString?.call?.(x)?.match?.(/\s([a-zA-Z]+)/)?.[1]?.toLowerCase() as VariableType || 'undefined';
