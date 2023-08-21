export type Url = string;

export type DateString = string;

export interface Constructor<TType, TParams extends [] = []> {
  new (...args: TParams): TType;
}
