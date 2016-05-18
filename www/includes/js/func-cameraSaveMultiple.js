function onPrevClick(element){
	capturePhoto(element);
}

function capturePhoto(element) {
	navigator.camera.getPicture(
		function(imageURI){
			return onPhotoDataSuccess(imageURI, element);
		},
		onFail,
		{
			quality: 50,
			destinationType: Camera.DestinationType.FILE_URI
		}
	);
}

function onPhotoDataSuccess(imageURI, element) {
    element.src = imageURI;
	alert("success");
}

function onFail(message) {
    alert('Failed to load picture because: ' + message);
}