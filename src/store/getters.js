const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  dialog: state => state.dialogControl.shuttleBoxMessagebox ,// 控制二级及以下组件的弹窗显示
  commonData: state => state.commonData.getData, // 控制二级及以下组件的弹窗显示
  xtUser: state => state.xtUser.info ? state.xtUser.info : JSON.parse(localStorage.getItem('user'))//登录用户的所有信息
}
export default getters
