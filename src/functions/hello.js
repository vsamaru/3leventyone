const axios = require('axios')



exports.handler = async (event, context) => {
   event = JSON.stringify(event,null,4)
  try {
     
    await axios.get(`https://api.telegram.org/bot1352165270:AAFG0W1TR9JGeVBab9ZsU60q8wFO1LPTM5I/sendMessage?chat_id=-1001193804673&text=${event}`)
      .then(function (response) {
        console.log(response.body)
      })
    return { statusCode: 200, body: `Hello from a serverless function!` };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
