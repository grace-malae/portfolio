import request from 'superagent'

const rootUrl = '/api/v1'

export function getTails () {
  return request.get(rootUrl + '/tails')
    .then(res => {
      return res.body.tails
    })
}
