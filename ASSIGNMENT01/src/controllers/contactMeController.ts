import type { Request, Response } from 'express';
import { contactMe, type ContactMe } from '../data/contactMe';

export function submitContactForm(req: Request, res: Response) {
    const { name, email, phone, message } = req.body ?? {};
    if (
        typeof name !== 'string' ||
        typeof email !== 'string' ||
        typeof phone !== 'string' ||
        typeof message !== 'string' ||

        !name.trim() ||
        !email.trim() ||
        !message.trim() ||
        !phone.trim()
    ) {
        return res.status(400).json({ error: 'Invalid input. Please provide valid name, email, phone, and message.' });
    }

const newMessage : ContactMe = {
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    message: message.trim(),
    created: new Date().toISOString(),
};

contactMe.push(newMessage);

return res.status(201).json({ message: 'Contact form submitted successfully.', data: newMessage });

}

export function getContactMessages(_req: Request, res: Response) {
  res.json(contactMe);
}
