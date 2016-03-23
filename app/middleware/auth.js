
module.exports = {

    verifyToken: function(req, res, next) {
        var token = req.body.token || req.query.token || req.headers['x-access-token'];

        if (!token) {
            res.status(403).send({
                success: false,
                message: 'No token provided'
            });

            return;
        }

        jwt.verify(token, req.app.get('superSecret'), function(err, decoded) {
            if (err) {
                return res.json({success: false, message: 'Failed to authenticate token'});
            }

            req.decoded = decoded;

            console.log(decoded);

            next();
        });
    }

};

