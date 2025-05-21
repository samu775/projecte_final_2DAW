let JwtStrategy = require('passport-jwt').Strategy;
let ExtractJwt = require('passport-jwt').ExtractJwt;
let User = require('../models/User');
let passport = require('passport');
const debug = require('debug')('flightchatDB:config:jwt-passport');

require('dotenv').config();

// Setup work and export for the JWT passport strategy
module.exports = function(app) {

  let opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    secretOrKey: process.env.JWT_SECRET
  };

  passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
    debug("Payload: ", jwt_payload);
    const user = await User.findById(jwt_payload.user_id);
    if (user && user.jwt_version === jwt_payload.jwt_version) {
      done(null, user);
    } else {
      done(null, false);
    }
  }));

  app.use(passport.initialize());
};
