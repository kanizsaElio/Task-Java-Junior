import * as express from 'express';
import { makeVisualizable } from './frontend/visualizer';
import { Contact } from './models/Contact';
import ContactRepository from './repositories/ContactRepository';


const repo = new ContactRepository();

const testContact = new Contact();

testContact.firstName = 'Mario';
testContact.lastName = 'Rossi';
testContact.email = 'mariorossi@wowemail.it';
testContact.notes = 'blablablabla';
testContact.phone = 423424242;
testContact.website = 'www.dioca.ne';
testContact.createdAt = '17/01/2021';

repo.addContact(testContact)


const app = express();
app.use(express.json());
const servlet = {
    start: () => app.listen(8001)
}

app.post('/addcontatto', (req: express.Request, res: express.Response) => {
    repo.addContact(JSON.parse(req.body));
});

app.get('/deletecontatto/:index', (req: express.Request, res: express.Response) => {
    //@ts-ignore
    repo.removeContact(repo.getContact(req.params['index']));
});

app.get('/getcontatto/:index', (req: express.Request, res: express.Response) => {
    //@ts-ignore
    res.send(makeVisualizable(repo.getContact(req.params['index'])));
});
servlet.start();