
document.addEventListener('DOMContentLoaded', function() {
    var webAuth = new auth0.WebAuth({
        domain: 'YOUR_AUTH0_DOMAIN',
        clientID: 'YOUR_AUTH0_CLIENT_ID'
    });

    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        var email = document.getElementById('email').value;
        var password = document.getElementById('passwordIn').value;

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

