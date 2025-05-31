const { v4: uuidv4 } = require('uuid');
const Account = require('../models/Account');

exports.createAccount = async (req, res) => {
  try {
    const { email, accountName, website } = req.body;
    const accountId = uuidv4();
    const appSecretToken = uuidv4();
    const account = await Account.create({ email, accountId, accountName, appSecretToken, website });
    res.status(201).json(account);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAccounts = async (req, res) => {
  const accounts = await Account.findAll();
  res.json(accounts);
};

exports.getAccountById = async (req, res) => {
  const account = await Account.findByPk(req.params.id);
  if (!account) return res.status(404).json({ error: 'Account not found' });
  res.json(account);
};

exports.updateAccount = async (req, res) => {
  const account = await Account.findByPk(req.params.id);
  if (!account) return res.status(404).json({ error: 'Account not found' });
  await account.update(req.body);
  res.json(account);
};

exports.deleteAccount = async (req, res) => {
  const account = await Account.findByPk(req.params.id);
  if (!account) return res.status(404).json({ error: 'Account not found' });
  await account.destroy();
  res.json({ message: 'Account deleted' });
};
