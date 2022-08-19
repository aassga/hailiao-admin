import request from '@/utils/request'

export function getRoutes() {
  return request({
    url: '/vue-element-admin/routes',
    method: 'get'
  })
}

export function getRoles(params) {
  return request({
    url: '/vue-element-admin/roles',
    method: 'get',
    params
  })
}

export function getAccountInfo(params) {
  return request({
    url: '/vue-element-admin/accountInfo',
    method: 'get',
    params
  })
}
export function getCertification(data) {
  return request({
    url: '/vue-element-admin/certification',
    method: 'post',
    data
  })
}


export function getCertificationMemberList(data) {
  return request({
    url: '/vue-element-admin/certificationMemberList',
    method: 'get',
    data
  })
}

export function updateRole(id, data) {
  return request({
    url: `/vue-element-admin/role/${id}`,
    method: 'put',
    data
  })
}

export function deleteRole(id) {
  return request({
    url: `/vue-element-admin/role/${id}`,
    method: 'delete'
  })
}
