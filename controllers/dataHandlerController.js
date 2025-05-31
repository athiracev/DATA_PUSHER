const Account = require('../models/Account');
const Destination = require('../models/Destination');
const axios = require('axios');

exports.receiveData = async (req, res) => {
  const token = req.headers['cl-x-token'];
  if (!token) return res.status(401).json({ error: 'Un Authenticate' });

  const account = await Account.findOne({ where: { appSecretToken: token }, include: Destination });
  if (!account) return res.status(401).json({ error: 'Un Authenticate' });

  if (req.method === 'GET' && !req.is('application/json')) {
    return res.status(400).json({ error: 'Invalid Data' });
  }

  for (const dest of account.Destinations) {
    try {
      const config = {
        method: dest.httpMethod.toLowerCase(),
        url: dest.url,
        headers: dest.headers
      };

      if (dest.httpMethod === 'GET') {
        config.params = req.body;
      } else {
        config.data = req.body;
      }

      await axios(config);
    } catch (err) {
      console.error(`Error pushing to ${dest.url}:`, err.message);
    }
  }

  res.json({ message: 'Data pushed to all destinations' });
};
