/*------SignUp---------------------------------------------*/

document.addEventListener('DOMContentLoaded', function() {
    var webAuth = new auth0.WebAuth({
        domain: 'dev-sbc5r8exf2mefu6u.us.auth0.com',
        clientID: 'n8iLnlRGG5CvJcBFB3UiDtRo1rvUXOd9'
    });

    document.getElementById('form-sign').addEventListener('submit', function(event) {
        event.preventDefault();
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        webAuth.signup({
            connection: 'Username-Password-Authentication',
            email: email,
            password: password
        }, function(err) {
            if (err) {
                console.error('Error signing up:', err);
                alert("Failed to sigup. Password MUST be 8 characters contain a special character");
            } else {
                console.log('User signed up successfully');
                alert("Signup Successful. Proceed to Login");
            }
        });
    });
});


/*------Login---------------------------------------------*/





document.addEventListener('DOMContentLoaded', function() {
    var webAuth = new auth0.WebAuth({
        domain: 'YOUR_AUTH0_DOMAIN',
        clientID: 'YOUR_AUTH0_CLIENT_ID'
    });

    document.getElementById('form-login').addEventListener('submit', function(event) {
        event.preventDefault();
        var email = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        var url = webAuth.client.buildAuthorizeUrl({
            clientID: 'n8iLnlRGG5CvJcBFB3UiDtRo1rvUXOd9',
            responseType: 'token id_token',
            redirectUri: 'https://www.bing.com',
            state: 'yourState',
            nonce: 'yourNonce'
        });

        // Redirect the user to the constructed authorization URL
        window.location.href = ("https://trackmateai.github.io/ai/appNewAppMain.html");
    });
});

















