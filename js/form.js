// Carregar a biblioteca cliente do Google
gapi.load('client:auth2', function() {
    gapi.client.init({
        // apiKey: 'AIzaSyB_fAow_xQWvFGi3UMwgj4PMJrW32o6PTI',
        clientId: '265372675207-aldhj3tdu0v8j083djcnfat1j2moddv4.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/gmail.send'
    }).then(function () {
        gapi.auth2.getAuthInstance().signIn().then(function () {
            var email = "guizapa368@gmail.com";
            var subject = "Subject";
            var body = "Email body text";

            var message = [
                'To: ' + email,
                'Subject: ' + subject,
                '',
                body
            ].join('\n');

            var encodedMessage = btoa(message).replace(/\+/g, '-').replace(/\//g, '_');

            gapi.client.request({
                path: 'https://www.googleapis.com/gmail/v1/users/me/messages/send',
                method: 'POST',
                body: {
                    raw: encodedMessage
                }
            }).then(function(response) {
                console.log('Email sent successfully:', response);
            }, function(error) {
                console.error('Error sending email:', error);
            });
        });
    });
});
