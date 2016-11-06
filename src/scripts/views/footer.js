import React from 'react'

var Footer = React.createClass({
	render: function(){
		return (
			<footer>
				<h6>Links</h6>
				<a href="#glossary"><p>Glossary</p></a>
				<a href="#privacyPolicy"><p>Privacy Policy</p></a>
				<a href="#disclaimer"><p>Disclaimer</p></a>
			</footer>
		)
	}
})

export default Footer