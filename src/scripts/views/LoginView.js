import React from 'react'
import Header from './header'
<<<<<<< HEAD
import ACTIONS from '../actions'
=======
import Footer from './footer'
>>>>>>> master

const LoginView = React.createClass({
    render: function() {
        return (
            <div className = 'LoginView'>
                <Header />
                <Login />
                <Footer />
            </div>
        )
    }
})

const Login = React.createClass({

    _handleRegister: function(evt) {
        evt.preventDefault()

        if(evt.target.registerPassword.value === evt.target.registerConfirmPassword.value) {
            console.log(evt.target.registerEmail.value, evt.target.registerPassword.value)
            ACTIONS._registerUser({
                email: evt.target.registerEmail.value,
                password: evt.target.registerPassword.value
            })
        }
        else {
            alert('Error. Please check to make sure passwords match')
        }
    },

    render: function() {
        return (
            <div className = 'signinForm'>
                <form className = 'signin' id = 'register' onSubmit = {this._handleRegister}>
                    <h3>Register New User</h3>
                    <input type = 'text' name = 'registerEmail' placeholder = 'email' />
                    <input type = 'password' name = 'registerPassword' placeholder = 'password' />
                    <input type = 'password' name = 'registerConfirmPassword' placeholder = 'confirm password' />
                    <button type = 'submit'>Register</button>
                </form>
            </div>
        )
    }
})

export default LoginView