const User = Backbone.Model.extend({
    defaults: {
        email: '',
        isLoggedIn: false
    }
});

const user = new User();
