const Destination = require('../models/Destination');
const Account = require('../models/Account');

exports.createDestination = async (req, res) => {
  const { accountId } = req.params;
  const { url, httpMethod, headers } = req.body;

  const account = await Account.findOne({ where: { accountId } });
  if (!account) return res.status(404).json({ error: 'Account not found' });

  const destination = await Destination.create({ url, httpMethod, headers, AccountId: account.id });
  res.status(201).json(destination);
};

exports.getDestinationsByAccount = async (req, res) => {
  const { accountId } = req.params;
  const account = await Account.findOne({ where: { accountId }, include: Destination });
  if (!account) return res.status(404).json({ error: 'Account not found' });
  res.json(account.Destinations);
};
