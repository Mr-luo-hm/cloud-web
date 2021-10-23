import request from '@/utils/request'

export function menu() {
  return request({
    url:'/foo/menu',
    method:'get',
  })
}
