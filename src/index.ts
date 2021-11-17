import * as cors from 'cors';
import * as express from 'express';
import * as mongoose from 'mongoose';

import * as swaggerUI from 'swagger-ui-express';
import docs from './docs';

import todoRoute from './routes/route';
const router = express();

import swaggerCss from './swaggerCss/swagger-css'

// database connections
var db:string = "mongodb://localhost:27017/todo";
mongoose.connect(db);
const conSuccess = mongoose.connection
conSuccess.once('open', _ => {
  console.log('Database connected:', db)
})
conSuccess.on('error', err => {
  console.error('connection error:', err)
})

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

/** Routes go here */
app.use('/api/',[todoRoute]);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs, { 
    customCss: swaggerCss,
    customSiteTitle: "Pickcel Digital Signage",
    customfavIcon: "https://pickcel.com/assets/img/favicon/favicon-32x32.png"
}));

const hostname = '127.0.0.1';

app.listen(8080, () => {
    console.log(`Server running at http://localhost:${8080}/`);
});