/*
 * @Author: evan
 * @Date: 2018-06-22 09:44:46
 * @Last Modified by: evan
 * @Last Modified time: 2018-06-22 16:19:16
 */

import axios from 'axios'
import {createError} from './util'

const request = axios.create({
  baseURL: '/'
})

const handelRequest = () => {
  return new Promise((resolve, reject) => {
    request
      .then(resp => {
        console.log(resp)
        const data = resp.data

        if (!data) {
          reject(createError(400, 'no data'))
        }
        if (!data.success) {
          reject(createError(400, data.message))
        }
        resolve(data.data)
      })
      .catch(err => {
        console.log(err)
        const resp = err.response
        if (resp.status === 401) {
          reject(createError(401, 'need auth'))
        }
      })
  })
}

export default {
  getAllTodos () {
    return handelRequest(request.get('/api/todos'))
  }
}
