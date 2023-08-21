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

  async fetchFirstPage(abortSignal?: AbortSignal) {
    return fetchJson<IApiList<T>>(`${BASE_URL}/${this.route}/`, abortSignal);
  }

  async fetchPage(pageUrl: Url, abortSignal?: AbortSignal) {
    return fetchJson<IApiList<T>>(pageUrl, abortSignal);
  }

  async fetchItem(
    id: string,
    abortSignal?: AbortSignal,
  ): Promise<IApiResponse<T>> {
    return fetchJson<T>(`${BASE_URL}/${this.route}/${id}/`, abortSignal);
  }

  // put it here because it depends on the url content
  getItemId(itemUrl: string): string {
    const regexp = new RegExp(`${BASE_URL}/${this.route}/(\\d+)`, 'i');
    const result = regexp.exec(itemUrl);
    return result?.[1] || '';
  }
}
