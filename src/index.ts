import express from 'express';
import bootServices from './services/index.bs';

const PORT =  3000;
const app = express();

bootServices(app)




const pippo:string = 'Funziona';

function prova (a:string){
    console.log(a)

}

prova(pippo);

app.listen(PORT, () => {
    console.log('server started at http://localhost:' + PORT);
  });