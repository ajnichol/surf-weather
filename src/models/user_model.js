const User = Backbone.Model.extend({
    urlRoot: 'php/login_sign_up/login_sign_up.php',

    idAttribute: 'user_id',

    defaults: {
        user_id: '',
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
