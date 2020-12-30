import {createRequest} from "./createRequest";


export default class Entity {
  constructor() {
    this.url = '';
  }

  /**
   * Метод получает информацию согласно переданным параметрам. Это могут быть все задачи или пользователь.
   * @param data
   * @param callback
   * @return {Promise<void>}
   */
  async list(data, callback) {
    await createRequest()
  }

  /**
   * Метод изменяет данные в БД.
   * @param data
   * @param callback
   * @return {Promise<void>}
   */
  async put(data, callback) {
    await createRequest()
  }

  /**
   * Метод добавляет информацию в БД согласно переданных параметров.
   * @param data
   * @param callback
   * @return {Promise<void>}
   */
  async post(data, callback) {
    await createRequest()
  }

  /**
   * Метод удаляет информацию из БД согласно переданных параметров.
   * @param data
   * @param callback
   * @return {Promise<void>}
   */
  async remove(data, callback) {
    await createRequest()
  }
}
