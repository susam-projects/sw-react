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

  async fetchPage(page: number, search?: string, abortSignal?: AbortSignal) {
    const params = new URLSearchParams();
    page && params.append('page', String(page));
    search && params.append('search', search);
    const url = `${BASE_URL}/${this.route}/?${params.toString()}`;
    return fetchJson<IApiList<T>>(url, abortSignal);
  }

  async fetchItem(
    id: string,
    abortSignal?: AbortSignal,
  ): Promise<IApiResponse<T>> {
    return fetchJson<T>(`${BASE_URL}/${this.route}/${id}/`, abortSignal);
  }

  // put it here because it depends on the url content
  getItemId(itemUrl: string): string {
    const regexp = new RegExp(`${BASE_URL}/${this.route}/(?<id>\\d+)`, 'i');
    const result = regexp.exec(itemUrl);
    return result?.groups?.id || '';
  }

  getPageNumber(pageUrl: string): number {
    const pattern = `[&?]page=(?<page>\\d+)`;
    const regexp = new RegExp(pattern, 'i');
    const result = regexp.exec(pageUrl);
    return Number.parseInt(result?.groups?.page || '', 10);
  }

  getPageSize(): number {
    return 10;
  }
}
