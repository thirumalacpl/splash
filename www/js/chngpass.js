$(document).on('pageshow', '#changepass', function(){ 
  
   //alert("chngpass1");



$(document).off('click', '#next').on('click', '#next', function() { 
  //alert('chngpass');
            if($('#userchn').val().length > 0 && $('#chngpassword').val().length > 0){
        console.log($('#check_userpass').serialize());
                    $.ajax({url: 'http://staging.eimpressive.com/slim/slim_four_ripsssjs/chngpass.php',
                        data:$('#check_userpass').serialize(),
                        type: 'post',                   
                        async: 'true',
            crossDomain: true,
                        dataType: 'json',
                        beforeSend: function() {
                            // This callback function will trigger before data is sent
                            //$.mobile.showPageLoadingMsg(true); // This will show ajax spinner
              $('body').addClass('ui-loading');
              //$.mobile.loading('show', {theme:"a",text: "Verifying..",textonly: true,textVisible: true});
                        },
                        complete: function() {
                            // This callback function will trigger on data sent/received complete
                           // $.mobile.hidePageLoadingMsg(); // This will hide ajax spinner
             //  $.mobile.loading('hide', {theme:"a",text: "Verifying..",textonly: true,textVisible: false});

                        },
                        success: function (result) {
              console.log(result);
              //console.log(result[1].firstname);

              if(result[0]){
                var pas=result[0];
                         //alert(pas+'length');
    //sessionStorage.setItem("logged_in","1");
         if(pas == ''){
          $.mobile.loading().hide();

    alert('username or password entered is invalid');
    /*$.mobile.changePage($('#changepass'), { transition: "none", changeHash: true, reverse: false });
    return false;*/ 
}else{
   document.getElementById('userchn').value = "";
document.getElementById('chngpassword').value = "";
        sessionStorage.setItem("regionArray",JSON.stringify(result[0]));
        sessionStorage.setItem("uusernameArray",JSON.stringify(result[1]));
              $.mobile.loading().hide();

       $.mobile.changePage($('#changepasstwo'), { transition: "none", changeHash: true, reverse: false }); 
   return false;
 }
  
              }else {
                              $.mobile.loading().hide();

                alert("username or password entered is invalid"); 
              }
              //$.mobile.loadPage( "three.html");

              //$( "body" ).pagecontainer( "load", "three.html", { transition: "slide" });

              return false;
                        },
                        error: function (request,error) {
        console.log(error);
        console.log(request);
                            // This callback function will trigger on unsuccessful action                
                            alert('Network error has occurred please try again!');
                        }
                    });                  
            } else {
                alert('Please fill all necessary fields');
            }           
            return false; // cancel original event to prevent form submitting
        }); 

$(document).off('click', '#backtopageone').on('click', '#backtopageone', function() { 
 $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false }); 
   return false;
});

});

