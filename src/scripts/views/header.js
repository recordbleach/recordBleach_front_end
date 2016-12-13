import React from 'react'

var Header = React.createClass({
	render: function(){
		return (
			<header>
				<h1 className= "boxed">RECORD BLEACH</h1>
                <nav>
									<ul className="centered">
										<li><a className = 'headerLinks'href = '#home'>Home</a></li>
											<li>  <a className = 'headerLinks'href = '#qualifyForm'>Do I Qualify?</a></li>
											<li>  <a className = 'headerLinks'href = '#login'>Login</a></li>
									</ul>
                </nav>
			</header>
		)
	}
})

export default Header
