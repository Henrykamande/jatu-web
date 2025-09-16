const middleware = {}

middleware['check-auth'] = require('..\\middleware\\check-auth.js')
middleware['check-auth'] = middleware['check-auth'].default || middleware['check-auth']

export default middleware
