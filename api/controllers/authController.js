exports.signin = function signin(req, res, next) {
    res.json({ status: 'signin' });
};

exports.signup = function signup(req, res, next) {
    res.json({ status: 'signup' });
};

exports.me = function me(req, res, next) {
    res.json({ status: 'me' });
};

exports.authenticated = function authenticated(req, res, next) {
    next();
    //res.status(500).json({ status: 'not authenticated' });
};

