$(document).on('pageshow', '#changepasstwo', function(){ 
  
   //alert("chngpass22");

uusernameArray =  JSON.parse(sessionStorage.getItem("uusernameArray"));

if(uusernameArray == null){
//alert('ppp');
 $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
  return false;
}

uusername=uusernameArray.Username;



   $(document).off('click', '#chngpassfinal').on('click', '#chngpassfinal', function() { 

var ppassword=document.getElementById('ppassword').value;
var reppassword=document.getElementById('reppassword').value;

//alert(ppassword+'ppassword');

var str = ppassword;
    var n = str.length;
    //alert(n);
if(n < 8){
  alert('Password length is too short');
}
if(reppassword == '' ){
  alert('Fill up all the field');
}
if(ppassword == ''  ){
  alert('Fill up all the field');
   // $.mobile.changePage($('#Volunteer'), { transition: "none", changeHash: true, reverse: false });
}else if((ppassword == reppassword) && (n >= 8) ){

$.ajax({url: "http://staging.eimpressive.com/slim/slim_four_ripsssjs/chngpass_final.php?PPassword="+ppassword+"&uusername="+uusername,
    data:$('#check_finalchange').serialize(),
    type: 'post',                   
    async: 'true',
    crossDomain: true,
    dataType: 'json',
    beforeSend: function() {
    },
    complete: function() {
    },
    success: function (result) {
      console.log('searchlpa' +result);
      if(result[0]){
       document.getElementById('ppassword').value = "";
document.getElementById('reppassword').value = "";
         sessionStorage.clear(); 
/*document.getElementById('ccnumber').value = "";*/

        alert('Your Password Has Been Reset Successfully ');
        $("#popupsearchmade").popup("open");
       /* sessionStorage.setItem("sh_new_veri_list_countq",JSON.stringify(result[0]));*/

        $.mobile.loading().hide();
       $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
        //$.mobile.changePage("dashboard",{ transition: "none", changeHash: true, reverse: false }); 
      }else {
        alert('No Data Found for the search record'); 
      }

      return false;
    },
    error: function (request,error) {    
      console.log(request);
      console.log(error);  
      $("#Network").popup("open");         
      alert('Network error has occurred please try again!');
    }
  });
}
else if(ppassword !== reppassword ){
  alert('Password Does Not Match');
   // $.mobile.changePage($('#Volunteer'), { transition: "none", changeHash: true, reverse: false });
}
});

 $(document).off('click', '#sescan').on('click', '#sescan', function() { 
         document.getElementById('ppassword').value = "";
document.getElementById('reppassword').value = "";
 sessionStorage.clear(); 
  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });

  });

});