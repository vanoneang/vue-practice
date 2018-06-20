const sha1 = require('sha1')
const axios = require('axios')

const className = 'todo'

const request = axios.create({
  baseURL: 'https://d.apicloud.com/mcm/api'
})

module.exports = (appId, appKey) => {
  const getHeaders = () => {
    const now = Date()
  }
}
