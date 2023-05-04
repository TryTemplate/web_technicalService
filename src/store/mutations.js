import * as types from './mutation-types'
import roleTokencate from "../caches/roleTokencate";

const mutations = {
  /*
  * 登录
   */
  [types.SET_USERINFO](state, userInfo) {
    console.log(types.SET_USERINFO, userInfo)
    roleTokencate(userInfo); //存入缓存

    state.userInfo = userInfo
  },
   /*
  * 获取菜单列表
   */
  [types.SET_MENULIST](state, data={}) {
    state.MenuList = data
  }
}

export default mutations