import { Url } from '../../utils';

export type IApiResponse<T> =
  | {
      type: 'response';
      data: T;
    }
  | {
      type: 'error';
      code: string | number;
      message: string;
    };

export async function fetchJson<T>(
  url: Url,
  abortSignal?: AbortSignal,
): Promise<IApiResponse<T>> {
  const response = await fetch(url, { method: 'get', signal: abortSignal });
  if (response.ok) {
    const data: T = await response.json();
    return { type: 'response', data };
  }
  return {
    type: 'error',
    code: response.status,
    message: response.statusText,
  };
}

// TODO: postJson()
