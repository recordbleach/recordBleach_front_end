import STORE from './store'
import {User} from './models/models'

const ACTIONS = {

    _registerUser: function(newUserObj) {
        console.log(newUserObj)
        var userObj =  {
            user: newUserObj
        }

        console.log(userObj)
        User.register(userObj)
    }
}

export default ACTIONS