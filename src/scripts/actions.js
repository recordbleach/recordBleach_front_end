import STORE from './store'
import {User, PetitionModel} from './models/models'

const ACTIONS = {

    _registerUser: function(newUserObj) {
        var userObj =  {
            user: newUserObj
        }
        console.log(User.register(userObj))
        console.log(User.getToken(newUserObj))
    },

    _submitPetition: function(newPetitionObj) {
        console.log('new object', newPetitionObj)
        var petitionObj = {
            petition: newPetitionObj
        }

        var petition = new PetitionModel(petitionObj)
        petition.save()
    }
}

export default ACTIONS