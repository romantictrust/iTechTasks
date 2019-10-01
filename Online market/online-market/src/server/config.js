exports.PORT = process.env.PORT || 8000
exports.ADRESS = process.env.ADRESS || 'localhost'

exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production' 
  ? process.env.CLIENT_ORIGIN
  : 'http://localhost:8000'
