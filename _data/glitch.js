var request = require("sync-request");
// make the request
var res = request(
  "GET",
  "https://api.glitch.com/v1/users/by/login?login=Remiix",
  {
    headers: {
      "user-agent": "RemiixInc"
    }
  }
);

// parse response
res = JSON.parse(res.getBody());
module.exports = res;
