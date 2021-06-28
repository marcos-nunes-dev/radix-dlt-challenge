import {
    handlePassFromRoute,
    createEncryptDataFile,
    decryptDataConvertJSON,
} from 'utils/crypto';
import fs from 'graceful-fs';
import { findWithAttr } from 'utils/basics';

export default function contactsHandler(req, res) {
    const { method, body } = req;
    const password = handlePassFromRoute(body.password);
    const path = `./public/contacts/${body.id}-ctc.txt`;
    const data = body?.data;

    switch (method) {
        case 'POST':
            if (fs.existsSync(path)) {
                try {
                    const cdata = fs.readFileSync(path, 'utf8');
                    let convertedData = decryptDataConvertJSON(
                        cdata,
                        body.password
                    );
                    const idx = findWithAttr(convertedData, 'name', data.name);
                    if (idx !== -1) {
                        convertedData = convertedData.filter(
                            (ctc) => ctc.name !== data.name
                        );
                    } else {
                        res.status(500).json({
                            error: 'this user has no contact list',
                        });
                    }
                    fs.writeFileSync(
                        path,
                        createEncryptDataFile(convertedData, password)
                    );
                    res.status(201).json(data);
                } catch (err) {
                    res.status(500).json(err);
                }
            } else {
                res.status(500).json({
                    error: 'this user has no contact list',
                });
            }
            break;
        default:
            res.setHeader('Allow', ['POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
