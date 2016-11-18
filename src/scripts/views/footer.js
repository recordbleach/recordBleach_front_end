import React from 'react'

var Footer = React.createClass({
	render: function(){
		return (
			<footer>
				<h6>Links</h6>
				<a className = 'footerLinks' href="#glossary"><p>Glossary</p></a>
				<a className = 'footerLinks' href="#privacyPolicy"><p>Privacy Policy</p></a>
				<a className = 'footerLinks' href="#disclaimer"><p>Disclaimer</p></a>
			</footer>
		)
	}
})

export default Footer