import React from 'react'

var Footer = React.createClass({
	render: function(){
		return (
			<footer>

				<ul className ="centered">
					<li><a className = 'footerLinks' href="#glossary"><p>Glossary</p></a></li>
					<li><a className = 'footerLinks' href="#privacyPolicy"><p>Privacy Policy</p></a></li>
					<li><a className = 'footerLinks' href="#disclaimer"><p>Disclaimer</p></a></li>
				</ul>
			</footer>
		)
	}
})

export default Footer
