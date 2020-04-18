const User = Backbone.Model.extend({
    urlRoot: 'php/login_sign_up/login_sign_up.php',

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
