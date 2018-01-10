var router = require('express').Router();

var users = [{
  name: 'jason',
  password: 'hunter2'
}, {
  name: 'jon',
  password: 'justinbieber'
}, {
  name: 'aaron',
  password: 'password'
}, {
  name: 'adi',
  password: 'SometimesYouJustNeedToBelieveInYourself2018'
}]

router.get('/', function (req, res, next) {
  res.json(users);
});

router.post('/', function (req, res, next) {
  // assuming req.body is well formed
  users.push(req.body);
  res.status(201).json(users);
});

module.exports = router;
