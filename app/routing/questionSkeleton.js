{
	question1: "",
	question2a: "",
	question2b: "",
	question3aa: "",
	question3ba: "",
}current

// Attorney Questions



{
	question1: "<div class=\"form-group\"><label for=\"propertyType\">I am a/an <\/label><button class=\"btn btn-primary plantiff\" id=\"YYYYYYYY\">Individual<\/button><button class=\"btn btn-primary plantiff\" id=\"YYYYYYYY\">Property Management<\/button><button class=\"btn btn-primary plantiff\" id=\"INPUT ID\">Related Person<\/button><button class=\"btn btn-primary plantiff\" id=\"INPUT ID\">Business<\/button><button class=\"btn btn-primary plantiff\" id=\"INPUT ID\">Attorney<\/button></div>",
	question2: "<div class=\"form-group\"><label for=\"attorneyName\">My name is <\/label><input type=\"text\" class=\"form-control\" id=\"YYYYYYYY\" placeholder=\"First Name\"><\/div><input type=\"text\" class=\"form-control\" id=\"YYYYYYYY\" placeholder=\"Last Name\"><\/div>",
	question3: "<div class=\"form-group\"><label for=\"plantiffName\">The plantiff's name is <\/label><input type=\"text\" class=\"form-control\" id=\"YYYYYYYY\" placeholder=\"First Name\"><\/div><input type=\"text\" class=\"form-control\" id=\"YYYYYYYY\" placeholder=\"Last Name\"><\/div>",,
	question4: "<div class=\"form-group\"><label for=\"XXXXXXXXXX\">The plantiff's relationship to the property in question is as the<\/label><button class=\"btn btn-primary plantiff\" id=\"YYYYYYYY\">Owner<\/button><button class=\"btn btn-primary plantiff\" id=\"INPUT ID\">Other<\/button>", 
	question5: "<div class=\"form-group\"><label for=\"XXXXXXXXXX\">and I need to process and deliver eviction paperwork to evict a/an <\/label><button class=\"btn btn-primary defendant\" id=\"YYYYYYYY\">Individual<\/button><button class=\"btn btn-primary plantiff\" id=\"INPUT ID\">Business<\/button>",
	question6a: "<div class=\"form-group\"><label for=\"defendantName\">and the defendant's name: <\/label><input type=\"text\" class=\"form-control defendant\" id=\"YYYYYYYY\" placeholder=\"First Name\"><\/div><input type=\"text\" class=\"form-control\" id=\"YYYYYYYY\" placeholder=\"Last Name\"><\/div>",
	question6b: "<div class=\"form-group\"><label for=\"defendantName\">and the business's name: <\/label><input type=\"text\" class=\"form-control defendant\" id=\"YYYYYYYY\" placeholder=\"First Name\"><\/div><input type=\"text\" class=\"form-control\" id=\"YYYYYYYY\" placeholder=\"Last Name\"><\/div>",
	question6c: "<div class=\"form-group\"><label for=\"XXXXXXXXXX\">and what type of property? <\/label><button class=\"btn btn-primary defendant\" id=\"YYYYYYYY\">Residential<\/button><button class=\"btn btn-primary defendant\" id=\"YYYYYYYY\">Commercial<\/button>",
	question7: "They owe me rent in the amount of: ",
	question8: "from the period that start on: ",
	question9: "and ends on: ",
	question10: "Would the plantiff like to file for punitive damages?",
	question11: "Does this eviction have to do with drugs?"
}




// Non-Attorney Questions
{
	question1: "I am a/an: ",
	question2: "My name is: ",
	question3: "My relationship to the property in question is as the: ",
	question4: "and I would like to evict a/an: ", // need Defendent First/Last Name
	question5: "from a Residential or Commercial property at: ",
	question6: "They owe me rent in the amount of: ",
	question7: "from the period that start on: ",
	question8: "and ends on: ",
	question9: "Would you like to file for punitive damages?",
	question10: "Does this eviction have to do with drugs?"
}


<div class=\"form-group\"><label for=\"XXXXXXXXXX\"><\/label>
<input type=\"text\" class=\"form-control\" id=\"YYYYYYYY\" placeholder=\"\"><\/div>

<div class=\"form-group\"><label for=\"XXXXXXXXXX\"><\/label>
<button class=\"btn btn-primary defendant\" id=\"YYYYYYYY\"><\/button>


// <div class="form-group">
// 	<label for="">Name:</label>
// 	<input type="button" class="form-control" id="" placeholder="">
// </div>

// address



	



// JSON / Object Creation

function attorneyProfile (){
	this.plantiffType = plantiffType;
	this.preparerFirstName = preparerFirstName;
	this.preparerLastName = preparerLastName;
	this.plantiffFirstName = plantiffFirstName;
	this.plantiffLastName = plantiffLastName;
	this.propertyRelationship = propertyRelationship;
	this.defendentType = defendentType;
	this.defendentFirstName = defendentFirstName;
	this.defendentLastName = defendentLastName;
	this.defendentBusinessName = defendentBusinessName;
	this.evictionPropertyType = evictionPropertyType;

}


function submitBtn(){

	// Question 1 -- Have you started an eviction??
	if(submitVal == A){
		show(#question2a);
	}
	else{
		show(#question2b);
	}

	// Question 2a -- Let us know the date and upload document
	if(dateValueExists){
		show(documentUploadButton);
	}

	// Question 2b
	if()




};




