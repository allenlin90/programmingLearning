import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number;
}

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    // only return a promise rather than set the data
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      // put
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      // post
      return axios.post(this.rootUrl, data);
    }
  }
}
