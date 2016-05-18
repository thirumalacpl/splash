function capturePhoto() {
	// Take picture using device camera and retrieve image as base64-encoded string
    /*
	navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
		quality: 50,
		targetWidth: 720,
		targetHeight: 540,
		correctOrientation: true,
		destinationType: Camera.destinationType.FILE_URI
	});
	*/
	navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50, destinationType: Camera.DestinationType.FILE_URI });
}

//Callback function when the picture has been successfully taken
function onPhotoDataSuccess(imageURI) {                
    // Get image handle
    var smallImage = document.getElementById('smallImage');

    // Unhide image elements
    smallImage.style.display = 'block';
    smallImage.src = imageURI;
	
	//trigger movePic
	movePic(imageURI);
}

//Callback function when the picture has not been successfully taken
function onFail(message) {
    alert('Failed to load picture because: ' + message);
}

//SAVE FILES TO LOCAL STORAGE
/////////////////////////////

function movePic(file){ 
    window.resolveLocalFileSystemURI(file, resolveOnSuccess, resOnError); 
} 

//Callback function when the file system uri has been resolved
function resolveOnSuccess(entry){ 
    var d = new Date();
    var n = d.getTime();
    //new file name
    var newFileName = n + ".jpg";
    var myFolderApp = "ABCapp";
	var mySubFolderApp = "ABCapp/ABCsub";
	
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) { fileSys.root.getDirectory( myFolderApp, {create:true, exclusive: false}, null, resOnError); }, resOnError );
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) { fileSys.root.getDirectory( mySubFolderApp, {create:true, exclusive: false}, function(directory) { entry.moveTo(directory, newFileName,  successMove, resOnError); }, resOnError); }, resOnError);
}

//Callback function when the file has been moved successfully - inserting the complete path
function successMove(entry) {
    //I do my insert with "entry.fullPath" as for the path
	alert("Save success");
}

function resOnError(error) {
    alert(error.code);
}