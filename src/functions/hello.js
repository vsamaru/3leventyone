const axios = require('axios')



exports.handler = async (event, context) => {
   event = JSON.stringify(event,null,4)
  try {
     
    await axios.get(`https://api.telegram.org/bot1010971485:AAG2_V2CFtcdqV3C9EV3d1_vwi4N3wf3GCo/sendMessage?chat_id=986940575&text=${event}`)
      .then(function (response) {
        console.log(response.body)
      })
    return { statusCode: 200, body: `Hello from a serverless function!` };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
