import request from '@/util/request'

export function login(name, password) {
  return request({
    url: `/adminLogin?userName=${name}&password=${password}`,
    method: 'post'
  })
}