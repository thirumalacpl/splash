jQuery(document).ready(function(){
		var btnUpload=jQuery('#upload_pic');
		var status=jQuery('#statuss');
		new AjaxUpload(btnUpload, {
			action: 'upload.php',
			name: 'uploadfile',
			onSubmit: function(file, ext){
				 if (! (ext && /^(jpg|jpeg|gif|png)$/.test(ext))){
                    // extension is not allowed
					status.text('Only JPG or GIF or PNG files are allowed');
					return false;
				}
				status.text('Uploading...');
			},
			onComplete: function(file, response){
				//On completion clear the status
				status.text('');
				//split the response
				var resp = response.split('-');
				//Add uploaded file to list
				if(resp[0] == 1){
					//store image
					var img = resp[1];
					var apic = jQuery('#imgs').val();
                                        //uploaded images are stored in hidden text box for future reference
					jQuery('#imgs').val(img+','+apic);
					jQuery('#files').append('<img src="'+img+'" height="150" width="150">');
				} else {
					jQuery('#files').text(resp[1]).addClass('error');
				}
			}
		});
});