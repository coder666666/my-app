import request from '../util/request';
import { loginApi } from './api'

export const login = async req => {
  return await request({ url: loginApi, ...req })
}