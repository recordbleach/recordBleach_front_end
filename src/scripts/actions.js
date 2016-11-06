import STORE from './store'
import {User} from './models/models'

const ACTIONS = {

    _registerUser: function(newUserObj) {
        console.log(newUserObj)
        User.register(newUserObj)
    }
}

export default ACTIONS