const {app, start} = require('./server');

const productController = require('./controller/product.controller');
// const searchcontroller = require('./controllers/search.controller');
// const dataRcontroller = require('./controllers/data_R.controller');
// const dataScontroller = require('./controllers/data_S.controller');



app.use("",productController);
// app.use("/search",searchcontroller);
// app.use("/data_R",dataRcontroller);
// app.use("/data_S",dataScontroller);


start();