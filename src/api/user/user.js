import axios from '@/utils/request'

export  function login(data) {
    return axios({
      url: '/login?username='+data.username+'&password='+data.password,
      method: 'post',
      data : data
    })
}
export function loginOut() {
    return axios({
      url:'/logout',
      method:'get',
    })
}
