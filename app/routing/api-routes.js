const path = require("path");

var tableQueue = [];

module.exports = (app)=>{

    app.get("/json", function(req, res) {
        res.sendFile(path.join(__dirname, "test.json"));
    });
};
