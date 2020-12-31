import {createRequest} from "./createRequest";
import {requestURL} from "./apiConfig";



export default class Entity {
  constructor() {
    this.url = '';
  }

  /**
   * Метод получает информацию согласно переданным параметрам. Это могут быть все задачи или какая то конкретная задача.
   * @param data
   * @param params
   * @param callback
   * @return {Promise<void>}
   */
  async list(data, callback, params = '') {
    await createRequest({
      url: requestURL + this.url,
      method: 'get',
      data,
      callback,
      params
    })
  }

  /**
   * Метод добавляет информацию в БД согласно переданных параметров.
   * @param data
   * @param callback
   * @return {Promise<void>}
   */
  async post(data, callback) {
    await createRequest({
      url: requestURL + this.url,
      method: 'post',
      data,
      callback
    })
  }

  /**
   * Метод изменяет данные в БД.
   * @param data
   * @param callback
   * @param params
   * @return {Promise<void>}
   */
  async put(data, callback, params = '') {
    await createRequest({
      url: requestURL + this.url,
      method: 'put',
      data,
      callback,
      params
    })
  }

  /**
   * Метод удаляет информацию из БД согласно переданных параметров.
   * @param data
   * @param callback
   * @param params
   * @return {Promise<void>}
   */
  async delete(data, callback, params = '') {
    await createRequest({
      url: requestURL + this.url,
      method: 'delete',
      data,
      callback,
      params
    })
  }
}
