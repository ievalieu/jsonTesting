const path = require("path");


module.exports =(app)=>{

	// app.get('/', (req, res)=>{
	// 	res.sendFile(path.join(__dirname, '../public/test.html'))
	// });

	app.get("/", (req, res)=>{
	    res.sendFile(path.join(__dirname, "../views/questionnaire.html"));
	});

	//Use res.render to load up an ejs view file
	app.get("/", (req,res)=>{
		res.render("")
	});
};
