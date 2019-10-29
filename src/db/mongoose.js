const mongoose = require('mongoose')

if(process.env.NODE_ENV === 'production'){
	var connectionURL = process.env.connectionURL
} else {
	const secret = require('../config.js')
	var connectionURL = secret.connectionURL
}

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})
