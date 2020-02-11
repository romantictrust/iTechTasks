exports.PORT = process.env.PORT || 8000;
exports.ADRESS = process.env.ADRESS || 'localhost';
exports.dbName = 'online-market';
exports.dbUrl = 'mongodb://admin:admin1@ds255403.mlab.com:55403/online-market';

exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production'
  ? process.env.CLIENT_ORIGIN
  : 'http://localhost:8000';
