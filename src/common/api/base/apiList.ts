import { Url } from '../../utils';
import { BASE_URL } from './apiConst.ts';
import { fetchJson, IApiResponse } from './apiRequest.ts';

export interface IApiList<T> {
  count?: number;
  next?: Url | null;
  previous?: Url | null;
  results?: T[];
}

export class ListApi<T> {
  constructor(private route: string) {}

  async fetchFirstPage(abortSignal?: AbortSignal): Promise<IApiResponse<T>> {
    return fetchJson<T>(`${BASE_URL}/${this.route}/`, abortSignal);
  }

  async fetchPage(
    pageUrl: Url,
    abortSignal?: AbortSignal,
  ): Promise<IApiResponse<T>> {
    return fetchJson<T>(pageUrl, abortSignal);
  }

  getItemId(itemUrl: string): string {
    const regexp = new RegExp(`${BASE_URL}/${this.route}/(\\d+)`, 'ig');
    const result = regexp.exec(itemUrl);
    return result?.[1] || '';
  }
}
