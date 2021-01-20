import { Contact } from "../models/Contact";
import * as fs from 'fs';

export function makeVisualizable(contact: Contact) {
    if (!contact) {
        return fs.readFileSync('src/frontend/visualizer.html', 'utf8')
            .replace('${contact.firstName}', '')
            .replace('${contact.lastName}', '')
            .replace('${contact.email}', '')
            .replace('${contact.website}', '')
            .replace('${contact.phone}', '')
            .replace('${contact.notes}', '')
            .replace('${contact.createdAt}', '');
    }
    return fs.readFileSync('src/frontend/visualizer.html', 'utf8')
        .replace('${contact.firstName}', contact.firstName)
        .replace('${contact.lastName}', contact.lastName)
        .replace('${contact.email}', contact.email)
        .replace('${contact.website}', contact.website)
        .replace('${contact.phone}', contact.phone.toString())
        .replace('${contact.notes}', contact.notes)
        .replace('${contact.createdAt}', contact.createdAt);
}