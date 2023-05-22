const express = require("express");
// const cors = require('cors');
// const authMiddleware = require("./auth-middleware");
const app = express();
app.use(express.json());
// const admin = require("firebase-admin");
// const credentials = require("./credentials.json");

admin.initializeApp({
    credential: admin.credential.cert(credentials),
    databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});

//router
const userRoute = require("./Router/users");
const authRoute = require("./Router/auth");
const predictRoute = require("./Router/predict");
const recipeRoute = require("./Router/recipes")

//db Connect

connect(`${process.env.MONGO_DB}`)
  .then(() => console.log("DB Connected!!"))
  .catch((error) => console.log(error));

app.listen(process.env.PORT || 5000, () => {
  console.log("tess");
});

//API endpoint
app.use("/users", userRoute);
app.use("/auth", authRoute);
app.use("/predict", predictRoute);
app.use("/recipe", recipeRoute)









// // app.use("/", authMiddleware);

// app.post('signup', async (req, res) =>{
//     const user = {
//         email = req.body.email,
//         password = req.body.password
//     }
//     const userResponse = await admin.auth().createUser({
//         email: req.body.email,
//         password: req.body.password,
//         emailVerified: false,
//         disabled: false
//     })
//     res.json(userResponse);
// })


// app.listen(4000, () => console.log("The server is running at PORT 4000"));