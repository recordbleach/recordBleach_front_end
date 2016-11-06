import React from 'react'
import Header from './header'

const LoginView = React.createClass({
    render: function() {
        return (
            <div className = 'LoginView'>
                <Header />
                <Login />
            </div>
        )
    }
})

const Login = React.createClass({
    render: function() {
        return(
            <div className = 'login'>
                <div className = 'newUser user'>
                    <div className = 'email'>Enter a valid email address (this is how you will receive your files)
                        <input type = 'text' placeholder = 'email address' />
                        <input type = 'text' placeholder = 'password' />
                        <input type = 'text' placeholder = 'confirm password' />
                </div>
                <div className = 'returningUser user'></div>
            </div>
        )
    }
})

export default LoginView