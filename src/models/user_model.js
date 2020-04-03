const User = Backbone.Model.extend({
    defaults: {
        name: '',
        email: '',
        password: '',
        isLoggedIn: false
    }
});

const user = new User();
