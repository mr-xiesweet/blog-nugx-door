import http from './http'

const baseUrl = 'http://localhost:2020';
const baseUrl_taobao = 'https://api.sunofbeach.net'
export const success_code = 20000;
export const getAdminInfo = () => {
  return http.requestGet(baseUrl + '/user/user_info/781134989134659584')
};

export const getCategories = () => {
  return http.requestGet(baseUrl + '/portal/web_size_info/categories')

};
export const getLoops = () => {
  return http.requestGet(baseUrl + '/portal/web_size_info/looper')
};
export const getTopArticle = () => {
  return http.requestGet(baseUrl + '/portal/article/top')
};
// export const listArticle = (categoryId, page, size) => {
//   if (categoryId !== '') {
//     return http.requestGet('/portal/article/list/' + categoryId + '/' + page + '/' + size)
//   } else {
//     return http.requestGet(baseUrl + '/portal/article/list/' + page + '/' + size)
//   }
// };
export const listArticle = (page, size) => {
  if (process.client) {
    //客户端
    return http.requestGet('/portal/article/list/' + page + '/' + size)
  } else {
    //服务端
    return http.requestGet(baseUrl + '/portal/article/list/' + page + '/' + size)
  }

};
export const listLabel = (size) => {
  return http.requestGet(baseUrl + '/portal/article/label/' + size)
};
export const getTaobaoLoop = (size) => {
  return http.requestGet(baseUrl_taobao + '/shop/recommend/random/10')

};
export const getfriendLink = (size) => {
  return http.requestGet(baseUrl_taobao + '/portal/web_size_info/friend_link')
};
//登录
export const doLogin = (verifyCode, captcha_key, sobUser) => {
  return http.requestPost(baseUrl + '/user/login/' + verifyCode + '/' + captcha_key, sobUser)

}

//注册
export const doRegister = (captcha_code, captcha_key, email_code, sobUser) => {

  return http.requestPost(baseUrl + '/user/join_in?captcha_code=' + captcha_code + '&captcha_key=' + captcha_key +
    '&email_code=' + email_code, sobUser)

}
//找回密码
export const doForgetPw = (email_code, sobUser) => {

  return http.requestPut(baseUrl + '/user/password/' + email_code, sobUser)

}
export const getEmailCaptcha = (email, type) => {

  return http.requestGet(baseUrl_taobao + '/user/verify_code?email=' + email + '&type=' + type)

};
export const textLogin = () => {
  if (process.client) {
    return http.requestGet('/user/check-token')
    //客户端
  } else {
    return http.requestGet(baseUrl + '/user/check-token')

  }

};
export const doLogout = () => {

  return http.requestGet(baseUrl + '/user/logout')

};
export const getArticleById = (articleId) => {

  return http.requestGet(baseUrl + '/portal/article/' + articleId)

};
export const getUserInfo = (userId) => {

  return http.requestGet(baseUrl + '/user/user_info/' + userId)

};
export const updateUserInfoById = (userId, userInfo) => {


  return http.requestPut(baseUrl_taobao + '/user/usr_info/' + userId, userInfo)

};
export const updateEmail = (email, emailCode) => {
  return http.requestPut(baseUrl_taobao + '/user/email?email=' + email + '&verify_code=' + emailCode)
};
