const User = Backbone.Model.extend({
    urlRoot: 'php/sign_up/sign_up.php',

    idAttribute: 'id',

    defaults: {
        name: '',
        email: '',
        password: '',
        confirm_password: '',
        success: '',
        error: '',
        isLoggedIn: false
    }
});

const user = new User();
