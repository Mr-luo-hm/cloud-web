import * as CryptoJS from 'crypto-js'

export const encryption = (pass) => {
  // 密码加密
  const key = CryptoJS.enc.Latin1.parse('618e8fe93b3e79b8')
  return CryptoJS.AES.encrypt(
    pass,
    key, {
      iv: key,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }).toString()
}
