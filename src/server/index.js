import request from '../util/request';
import { menuList } from './api'

export const getMenuList = async (req) => {
  return await request({ url: menuList, ...req })
}
