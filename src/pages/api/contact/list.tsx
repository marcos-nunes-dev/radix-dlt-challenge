import { handlePassFromRoute, createEncryptDataFile } from 'utils/crypto';
import fs from 'graceful-fs';

const emptyProfile = [
    {
        name: 'Jhon Doe',
        phone: '+55 24 98822-1455',
        email: 'test@radix.dlt',
        address: 'askdoadkoas',
    },
];

export default function contactsHandler(req, res) {
    const { method, body } = req;
    const password = handlePassFromRoute(body.password);
    const path = `./public/contacts/${body.id}-ctc.txt`;

    switch (method) {
        case 'POST':
            if (fs.existsSync(path)) {
                try {
                    const data = fs.readFileSync(path, 'utf8');
                    res.status(200).json(data.toString());
                } catch (err) {
                    res.status(500).json(err);
                }
            } else {
                try {
                    fs.writeFileSync(
                        path,
                        createEncryptDataFile(emptyProfile, password)
                    );
                    res.status(201).json(emptyProfile);
                } catch (err) {
                    res.status(500).json(err);
                }
            }
            break;
        default:
            res.setHeader('Allow', ['POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
