import { request } from '@uiw-admin/utils'

function selectById(params: { id: string }) {
  return request('/api/demo/selectById', {
    method: 'POST',
    body: { ...params },
  })
}

const update = '/api/demo/update'

const insert = '/api/demo/insert'

export { selectById, update, insert }
