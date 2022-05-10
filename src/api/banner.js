import request from '@/util/request'

export function list(name, password) {
  return request({
    url: '/banner/list',
    method: 'get'
  })
}