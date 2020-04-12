const User = Backbone.Model.extend({
    idAttribute: 'id',

    defaults: {
        name: '',
        email: '',
        isLoggedIn: false
    }
});

const user = new User();
