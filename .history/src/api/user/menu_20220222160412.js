import request from '@/utils/request'

export function menu() {
  return request({
    url:'/menu/',
    method:'get',
  })
}
