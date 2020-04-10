import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 8000,
})

api.interceptors.request.use(config => {
  const reqConfig = config
  reqConfig.metadata = { startTime: new Date() }

  return reqConfig
}, error => Promise.reject(error))

api.interceptors.response.use(response => {
  const res = response
  res.config.metadata.endTime = new Date()
  res.duration = (res.config.metadata.endTime - response.config.metadata.startTime) / 1000

  return res
}, error => {
  const err = error
  err.config.metadata.endTime = new Date()
  err.duration = (err.config.metadata.endTime - error.config.metadata.startTime) / 1000

  return Promise.reject(err)
})

export default api
