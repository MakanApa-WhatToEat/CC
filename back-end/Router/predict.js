const router = require("express").Router();

//detect ingredient
rounter.post('/ingredient', function(req, res) {
    request('http://127.0.0.1:8000/detectIngredient', function (error, response, body) {
        console.error('error:', error); // Print the error
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the data received
        res.send(body); //Display the response on the website
      });      
});

//recommend recipe
router.get

module.exports = router;