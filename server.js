const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require("mongoose");


dotenv.config({ path: './.env' })

const { MONGO_URL, PORT = 3001 } = process.env;


// const port = process.env.PORT || 4000;

// app.listen(port, () => {
//   console.log(`Server running. Use our API on port: ${port}`)
// })


mongoose
  .connect(MONGO_URL,{
      dbName: 'db-users',
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Database connection successful at port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

