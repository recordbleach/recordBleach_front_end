import React from 'react'

var Header = React.createClass({
	render: function(){
		return (
			<header>
				<h1>Record Bleach</h1>
                <nav>
                    <a className = 'headerLinks'href = '#home'>Home</a>
                    <a className = 'headerLinks'href = '#qualifyForm'>Do I Qualify?</a>
                    <a className = 'headerLinks'href = '#login'>Login</a>
                </nav>
			</header>
		)
	}
})

export default Header