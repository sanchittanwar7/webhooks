import { Meteor } from 'meteor/meteor'
import { WebApp } from 'meteor/webapp'
import url from 'url'



Meteor.startup(() => {
	WebApp.connectHandlers.use('/callback_url', (req, res, next) => {
	  var body = "";
	  req.on('data', Meteor.bindEnvironment(function (data) {
	    body += data;
	  }));

	 //  	  var sha1 = require('sha1');
	 //  	  console.log(req.headers)
 
		// console.log(sha1(body + '238388330259178'));

	  req.on('end', Meteor.bindEnvironment(function () {
	    console.log(JSON.parse(body).entry[0].time);
	    res.writeHead(200);
	    res.end("Hello world from: " + Meteor.release);
	  }));



		next();
	})

	WebApp.connectHandlers.use('/webhook', (req, res, next) => {
		console.log('woho')
	})

})