/*experimentalDecorators: true*/

import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as logger from 'morgan'
import * as methodOverride from 'method-override'
import * as cors from 'cors'

import Paths from './enums/paths'
import router from './controllers/users'
import rootRouter from './controllers/root'

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());
app.use(router)

app.use(rootRouter)


app.listen(process.env.PORT || 8080);