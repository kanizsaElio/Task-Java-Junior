import { Contact } from "../models/Contact";

export default class ContactRepository {

    private contacts: Contact[] = [];


    addContact(contact: Contact) {
        this.contacts.push(contact);
    }

    getContact(index: number) {
        return this.contacts[index];
    }


    removeContact(contact: Contact) {
        this.contacts.splice(this.contacts.indexOf(contact), 1);
    }

}

//* repo di memoria