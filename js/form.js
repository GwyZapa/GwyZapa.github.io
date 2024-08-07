const { google } = require('googleapis');
const { OAuth2 } = google.auth;
require('dotenv').config();

const oAuth2Client = new OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET
);

oAuth2Client.setCredentials({
  refresh_token: process.env.GMAIL_REFRESH_TOKEN,
});

async function sendMail() {
  const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

  const email = "guizapa368@gmail.com";
  const subject = "Subject";
  const body = "Email body text";

  const message = [
    'To: ' + email,
    'Subject: ' + subject,
    '',
    body
  ].join('\n');

  const encodedMessage = Buffer.from(message).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

  try {
    const response = await gmail.users.messages.send({
      userId: 'me',
      resource: {
        raw: encodedMessage,
      },
    });
    console.log('Email sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

sendMail();
