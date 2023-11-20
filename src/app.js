import express  from 'express';
import { routes } from './routes/index.js';
import { homeRoutes } from './routes/home.routes.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);
app.use(homeRoutes);

app.set('views', './src/views');
app.set('view engine', 'ejs')

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado')
})

export {app}
 