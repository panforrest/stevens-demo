const pkg_json = require('../package.json')
const turbo = require('turbo360')({site_id:pkg_json.app})
const vertex = require('vertex360')({site_id:pkg_json.app})
const router = vertex.router()
const twilio = require('twilio')

/*  This is a sample API route. */
router.get('/:sms', function(req, res){
	res.json({
		confirmation: 'success',
		message: 'this is the sms route'
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
