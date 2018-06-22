/*
 * @Author: evan
 * @Date: 2018-06-22 09:49:19
 * @Last Modified by: evan
 * @Last Modified time: 2018-06-22 09:51:46
 */

export const createError = (code, msg) => {
  const err = new Error(msg)
  err.code = code
  return err
}
