import request from '@/util/request'

export function add(data) {
  return request({
    url: `/admin/banner/add?url=${data}`,
    method: 'post'
  })
}

export function info() {
  return request({
    url: '/page/info',
    method: 'get'
  })
}
