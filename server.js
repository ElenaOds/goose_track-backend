const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require("mongoose");


dotenv.config({ path: './.env' })

const { MONGO_URL, PORT = 3000 } = process.env;


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

