class RequestHandler {
  requestTypes = ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'OPTIONS']
  requestType = ''
  route = ''

  constructor(reqType, route) {
    this.requestType = this.requestTypes.includes(reqType) ? reqType : ''
    this.route = route
  }

  get route() {
    return this.route
  }

  get requestType() {
    return this.route
  }

  resolve () {
    
  }
}
