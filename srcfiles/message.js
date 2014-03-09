// Define a class like this
function MessageArray(file1, file2, messageTag, timestamp){
  	// Add object properties like this
   	this.file1 = "spell1.png",
   	this.file2 = "spell2.png",
   	this.message = "Hi there! I thought you'd want to check this out!",
	this.timestamp = "Thursday, 12:53 AM"
}

// Add methods like this.  All Person objects will be able to invoke this
MessageArray.prototype.changeFile1 = function(y){    
	this.file1 = y;
}

MessageArray.prototype.clearFile1 = function(){
    this.file1 = "";
}

MessageArray.prototype.getFile1 = function(){
    return this.file1;
}

MessageArray.prototype.changeFile2 = function(y){
    this.file2 = y;
}

MessageArray.prototype.clearFile2 = function(){
    this.file2 = "";
}

MessageArray.prototype.clearFile2 = function(){
    this.file2 = "";
}

MessageArray.prototype.getFile2 = function(){
    return this.file2;
}

MessageArray.prototype.changeMessage = function(y){
    this.message = y;
}

MessageArray.prototype.clearMessage = function(){
    this.message = "";
}

MessageArray.prototype.getMessage = function(){
    return this.message;
	alert('It works');
}

MessageArray.prototype.retrieveTimestamp = function(){
    this.timestamp = dateobject.getDateNow();
}

MessageArray.prototype.getTimestamp = function(){
    return this.timestamp;
}

// Instantiate new objects with 'new'
var messageArray = new MessageArray();
// Invoke methods like this
//messageArray.changeFile1(filename1); // changes file1 with to the passed in variable