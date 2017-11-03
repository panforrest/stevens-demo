const pkg_json = require('../package.json')
const turbo = require('turbo360')({site_id:pkg_json.app})
const vertex = require('vertex360')({site_id:pkg_json.app})
const router = vertex.router()
const twilio = require('twilio')

/*  This is a sample API route. */
router.get('/:sms', function(req, res){
	// res.json({
	// 	confirmation: 'success',
	// 	message: 'this is the sms route'
	// })
	var accountSid = 'AC4b99f76eaaec3adff9b44c733bdc00b6' // Your Account SID from www.twilio.com/console
	var authToken = 'abdedad29ab5a58bc45cb068386abaab' // Your Auth Token from www.twilio.com/console

	var twilio = require('twilio')
	var client = new twilio(accountSid, authToken)

	let payload = null
	client.messages.create({
	    body: 'This is a TEST message!',
	    to: '+19089061042',  // Text this number
	    from: '+19085164650' // From a valid Twilio number
	})
	.then((message) => {
		payload = {
			confirmation: 'success',
			data: message.sid
		}

		res.json(payload)
		return
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})

})

router.get('/:resource', function(req, res){
	res.json({
		confirmation: 'success',
		resource: req.params.resource,
		query: req.query // from the url query string
	})
})

router.get('/:resource/:id', function(req, res){
	res.json({
		confirmation: 'success',
		resource: req.params.resource,
		id: req.params.id,
		query: req.query // from the url query string
	})
})



module.exports = router
