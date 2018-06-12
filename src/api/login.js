import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

// export function getRouter() {
//   return request({
//     url: '@/json.json',
//     method: 'get',
//     params: { }
//   })
// }
// export function test(phoneNo) {
//   console.log(phoneNo)
//   return request({
//     url: '/shinywayqct-web-site/ym/appUser/sendSms/login',
//     method: 'get',
//     params: { phoneNo }
//   })
// }
