import express from 'express';
import bootServices from './services/index.bs';

const PORT =  3000;
const app = express();

bootServices(app)

app.listen(PORT, () => {
    console.log('server started at http://localhost:' + PORT);
});