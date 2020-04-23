const User = Backbone.Model.extend({
    urlRoot: 'php/login_sign_up/login_sign_up.php',

    idAttribute: 'user_id',

    defaults: {
        user_id: localStorage.getItem('user_id'),
        name: localStorage.getItem('name'),
        email: '',
        password: '',
        confirm_password: '',
        success: '',
        error: '',
        isLoggedIn: (localStorage.getItem('isLoggedIn') === 'true')
    }
});

const user = new User();
