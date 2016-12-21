import Backbone from 'backbone'
import {PetitionModel} from './models/models'
import _ from 'underscore'

const STORE = _.extend(Backbone.Events, {

    data: {
        petitionModel: new PetitionModel()
    },

    _getData: function() {
        return _.clone(this.data)
    },

    _broadcastChange: function() {
        this.trigger('updateData')
    },

    _initialize: function() {
        this.data.petitionModel.on('sync update', this._broadcastChange.bind(this))
    }
})

STORE_initialize()

export default STORE
