function createDir(){
	
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
		fileSystem.root.getDirectory("lightning",{create: true, exclusive: false}, function(dir){alert("Created dir "+dir.name);},function(error){alert("Error creating directory "+ fileErrorCode(error.code));})
	});
	
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
		fileSystem.root.getDirectory("lightning/attachments",{create: true, exclusive: false}, function(dir){alert("Created dir "+dir.name);},function(error){alert("Error creating directory "+fileErrorCode(error.code));})
	});
	
}