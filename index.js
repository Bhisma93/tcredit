const express = require('express');
const app = express();
const port = 3000;
const config = require('./config');
const twilioNumber = '+18124962226';
const twilio = require('twilio');

const client = twilio(config.accountSID, config.authToken);

client.messages.create({
    body: 'Reply to begin chat.',
    to: '+14049837112', 
    from: twilioNumber
})
.then((message) => console.log(message.sid))
.catch((err) => console.log(error));

// app.post('/Executions', (req, res) =>{
//     client
//     .studio
//     .flows('FW9d816f0b90d2a10b913868462e339d29')
//     .executions.create({ 
//         to: '+14049837112', 
//         from: twilioNumber, 
//         parameters: JSON.stringify({name: "Clément"}
//         )})
//         .then((execution) => { 
//             console.log(execution.sid); 
//         });
// });

// app.post('/Executions', (req, res) =>{
//     user = service.users.create(identity = redacted_number, friendly_name = redacted_number)
//     channel = service.channels.create(friendly_name = redacted_number, unique_name = from_number)
//     member1 = channel.members.create(identity = user.identity)
//     member2 = channel.members.create(identity = "BrowserUser")
//     .then((execution) => { 
//             console.log(execution.sid); 
//         });
// });

// app.get('/route', (req, res) => {
//     message = request.form.get('message')
//     twilioNumber = request.form.get("phone_number")
//     client = twilio(config.accountSID, config.authToken)
//     messages = client.messages.create(from_=twilioNumber, to=+14049837112, body=message)
// });
















// curl -X POST "https://ee1c4819c9403239d21f1/Executions" --data-urlencode "To=+14049837112" --data-urlencode "From=+12054481977" -u AC667f2cc9919e5e551fbf63930623798a:a97d2abf9ba04f6ca0c64cc945139711

app.listen(port, ()=> {
    console.log('Server is running on Port 3000')
});