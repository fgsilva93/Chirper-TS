import * as express from 'express';
import * as path from 'path';
import apiRouter from './routes';

const app = express();

app.use(express.static('public'));
app.use(express.json()); //having the body parse catching  our post rquest that has json data and creats the req body, lead to the post code innchirp.ts
app.use('/api', apiRouter);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html')); // tell to send components to the right way
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
