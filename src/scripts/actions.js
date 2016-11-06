import STORE from './store'
import {User} from './models/models'

const ACTIONS = {

    _registerUser: function(newUserObj) {
        var userObj =  {
            user: newUserObj
        }
        User.register(userObj)
    }
}

export default ACTIONS