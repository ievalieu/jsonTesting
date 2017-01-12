const path = require("path");

var tableQueue = [];

module.exports = (app)=>{

    app.get("/api/waiting", (req, res)=>{
        res.send(tableQueue);
    });

    app.get("/api/current", (req, res)=>{
        res.send("current!");
    });
    
    app.get("/json", function(req, res) {
        res.sendFile(path.join(__dirname, "test.json"));
    });
    
       app.get("/api/clear", (req, res)=>{
        res.send("clearing!");
    });
    app.post("/api/waiting", (req, res)=>{
        var newTable = req.body;
		tableQueue.push(newTable);
		res.json(newTable);
    })

};
