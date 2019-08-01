import request from '../util/request';
import { * as menuList } from './api'
console.log(menuList)
export const getMenuList = async (req) => {
  return await request({ url: menuList, ...req })
}
