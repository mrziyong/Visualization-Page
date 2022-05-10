import request from '@/util/request'

export function add(data) {
  return request({
    url: '/admin/upload/file',
    method: 'post', data
  })
}