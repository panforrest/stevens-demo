import React, { Component } from 'react'
import superagent from 'superagent'

class Register extends Component {

  constructor(){
	super()
	this.state = {
		name: '',
		email: '',
		message: ''
	}
  }

  updateVisitor(field, event){
    console.log(field + " == " + event.target.value)
    // const visitor = Object.assign({}, this.state)
    // visitor[event.target.id] = event.target.value

    if (field == 'name'){
    	this.setState({
    	    name: event.target.value
    	})
    } 

    if (field == 'email'){
    	this.setState({
    	    email: event.target.value
    	})
    } 

    if (field == 'message'){
    	this.setState({
    	    message: event.target.value
    	})
    } 
  }

  sendMessage(event){
  	event.preventDefault()
  	console.log('sendMessage: '+JSON.stringify(this.state))
  	superagent.get('/api/sms')
  	.query(null)
  	.set('Accept', 'application/json')
  	.end((err, response) => {
  		// if (err){
  			if (err) {
  				alert('Oops: ' + err.message)
  				return
  			}

  			alert('Message Sent!')
  		// }
  	})
  }

  render(){
    return(

        <div id="wrapper">			
			<section id="three" className="wrapper style1 fade-up">
				<div className="inner">
					<h2>Get in touch</h2>
					<p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
					<div className="split style1">
						<section>
							<form method="post" action="#">
								<div className="field half first">
									<label htmlfor="name">Name</label>
									<input onChange={this.updateVisitor.bind(this, 'name')} type="text" name="name" id="name" />
								</div>
								<div className="field half">
									<label htmlfor="email">Email</label>
									<input onChange={this.updateVisitor.bind(this, 'email')}  type="text" name="email" id="email" />
								</div>
								<div className="field">
									<label htmlfor="message">Message</label>
									<textarea  onChange={this.updateVisitor.bind(this, 'message')} name="message" id="message" rows="5"></textarea>
								</div>
								<ul className="actions">
									<li><a onClick={this.sendMessage.bind(this)} href="#" className="button submit">Send Message</a></li>
								</ul>
							</form>
						</section>
						<section>
							<ul className="contact">
								<li>
									<h3>Address</h3>
									<span>12345 Somewhere Road #654<br />
									Nashville, TN 00000-0000<br />
									USA</span>
								</li>
								<li>
									<h3>Email</h3>
									<a href="#">user@untitled.tld</a>
								</li>
								<li>
									<h3>Phone</h3>
									<span>(000) 000-0000</span>
								</li>
								<li>
									<h3>Social</h3>
									<ul className="icons">
										<li><a href="#" className="fa-twitter"><span className="label">Twitter</span></a></li>
										<li><a href="#" className="fa-facebook"><span className="label">Facebook</span></a></li>
										<li><a href="#" className="fa-github"><span className="label">GitHub</span></a></li>
										<li><a href="#" className="fa-instagram"><span className="label">Instagram</span></a></li>
										<li><a href="#" className="fa-linkedin"><span className="label">LinkedIn</span></a></li>
									</ul>
								</li>
							</ul>
						</section>
					</div>
				</div>
			</section>
		</div>
    )
  }
}

export default Register