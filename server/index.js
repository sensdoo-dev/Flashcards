const express = require('express');
const app = express();
const serverConfig = require('./src/config/serverConfig');
const mainRouter = require('./src/routes/main.routes');

const PORT = process.env.PORT ?? 3000;

serverConfig(app);

app.use('/', mainRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
