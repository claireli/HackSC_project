MessageTest = (function() {

	function MessageTest(){

		var x = {};
		x.$={
			prefs:{
				file1 : "spell1.png",
				file2 : "spell2.png",
				message : "Hi there! I thought you'd want to check this out!",
				timestamp : "Thursday, 12:53 AM"
				},

				parent:x,

				changeFile1:function(y){
					this.file1 = x;
				},

				clearFile1:function(){
					this.file1 = "";
				},

				getFile1:function(){
					return this.file1;
				},

				changeFile2:function(y){
					this.file2 = x;
				},

				clearFile2:function(){
					this.file2 = "";
				},

				getFile2:function(){
					return this.file2;
				},

				changeMessage:function(y){
					this.message = y;
				},

				clearMessage:function(){
					this.message = "";
				},

				getMessage:function(){
					return message;
					alert('It works');
				},

				retrieveTimestamp:function(){
					this.timestamp = dateObject.getDateNow();
				},

				getTimestamp:function(){
					return this.timestamp;
				}
			}
	}

})();
