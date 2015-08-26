var db = require('./pghelper'),
    winston = require('winston');

/**
 * Get user profile
 * @param req
 * @param res
 * @param next
 */
function getUser(req, res, next) {
    db.query(
        'SELECT id, name FROM users WHERE id=1',
        [], true)
    .then(function (user) {
        res.send(JSON.stringify(user));
    })
    .catch(next);
}

exports.getUser = getUser;
