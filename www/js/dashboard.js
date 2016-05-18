$(document).on('pageshow', '#dashboard', function(){  

//alert("dashboard");

regionArray_array =  JSON.parse(sessionStorage.getItem("regionArray"));
//usernamearray =  JSON.parse(sessionStorage.getItem("usernamearray"));
//alert(regionArray_array.region);
//alert(regionArray_array.username); 
new_verification_count_array =  JSON.parse(sessionStorage.getItem("new_verification_count_array"));
/*superArray =  JSON.parse(sessionStorage.getItem("new_verification_count_array"));
supervisor_new_array= JSON.parse(sessionStorage.getItem("supervisor_new_array"));*/

/*new_verification_count_array =  JSON.parse(sessionStorage.getItem("new_verification_count_array"));*/
supervisor_inprogress_count_array =  JSON.parse(sessionStorage.getItem("supervisor_inprogress_count_array"));
supervisor_verified_count_array =  JSON.parse(sessionStorage.getItem("supervisor_verified_count_array"));
supervisor_not_verified_count_array =  JSON.parse(sessionStorage.getItem("supervisor_not_verified_count_array"));
supervisor_completed_count_array =  JSON.parse(sessionStorage.getItem("supervisor_completed_count_array"));

gcm_reg_id_array =  JSON.parse(sessionStorage.getItem("gcm_reg_id_array"));

//alert(supervisor_not_verified_count_array.not_verified_count); 

/*supervisor_inprogress_count_array =  JSON.parse(sessionStorage.getItem("supervisor_inprogress_count_array"));
supervisor_verified_count_array =  JSON.parse(sessionStorage.getItem("supervisor_verified_count_array"));*/
not_veri_count_array =  JSON.parse(sessionStorage.getItem("not_veri_count_array"));

//alert(regionArray_array);

if(regionArray_array == null){
//alert('ppp');
 $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
  return false;
}

document.getElementById('filterBasic-input').value = "";
document.getElementById('filterBasic-inputveri').value = "";
document.getElementById('filterBasic-inputcompleted').value = "";
document.getElementById('filterBasic-inputlistnot').value = "";

regionArray_array =  JSON.parse(sessionStorage.getItem("regionArray"));
username=regionArray_array.username;
$("#user").html(username);
region=regionArray_array.region;
user_id=regionArray_array.user_id;
E_Mail=regionArray_array.E_Mail;
state=regionArray_array.state;

//alert(region+'regionArray_array');
//alert(user_id+'user_id');

//user table code hide start
/*for(a=0;a<gcm_reg_id_array.length;a++){
  gcm_id = gcm_reg_id_array[a];
  gg = gcm_id.user_id;
 gcm_regidexi = gcm_id.gcm_regid;
  if(user_id == gg ){
 
 gcm_idpass = gcm_reg_id_array[a];
 gcm_idpass = gcm_idpass.user_id;
 
}

}*/

for(a=0;a<gcm_reg_id_array.length;a++){
  gcm_id = gcm_reg_id_array[a];
  gg = gcm_id.User_Id;
 
  if(user_id == gg ){
 //alert(user_id+'user_id'+gg+'gg');
 gcm_idpass = gcm_reg_id_array[a];
 gcm_idpass = gcm_idpass.User_Id;

 // alert(gcm_idpass+'user_id thiru');

}
}

////user table code hide end




//alert(region+'region');
//alert(user_id+'user_id');

/*for(a=0;a<new_verification_count_array.length;a++){
  new_count = new_verification_count_array[a];
// alert(new_count.new_verification_count+'new_verification_count');
$("#new_veri_count").html(new_count.new_verification_count);
}
*/

for(a=0;a<supervisor_inprogress_count_array.length;a++){
  inprogress_count = supervisor_inprogress_count_array[a];
//alert(inprogress_count.supervisor_inprogress_count+'supervisor_inprogress_count');
$("#inprogress_count").html(inprogress_count.inprogress_count);
//alert(inprogress_count.inprogress_count);

}

for(a=0;a<supervisor_verified_count_array.length;a++){
  verified_count = supervisor_verified_count_array[a];

 //alert(verified_count.super_verified_count+'new_verification_count');
$("#verified_count").html(verified_count.super_verified_count);
//alert(verified_count.super_verified_count);

}

for(a=0;a<supervisor_not_verified_count_array.length;a++){
  not_verified_count = supervisor_not_verified_count_array[a];
// alert(not_verified_count.not_verified_count+'new_verification_count');
$("#not_verified_count").html(not_verified_count.supervisor_not_verified_count_array);
//alert(not_verified_count.supervisor_not_verified_count_array);
}

for(a=0;a<supervisor_completed_count_array.length;a++){
  not_verified_counta = supervisor_completed_count_array[a];
 //alert(not_verified_counta.completed_count+'new_verification_count');
$("#completed_count").html(not_verified_counta.completed_count);
//alert(not_verified_counta.completed_count);

}

$(document).off('click', '#verified').on('click', '#verified', function() {

$.mobile.changePage($('#supervisor_verified_list'), { transition: "none", changeHash: true, reverse: false });
  return false;
})

$(document).off('click', '#not_verified').on('click', '#not_verified', function() {

$.mobile.changePage($('#supervisor_list_notveri'), { transition: "none", changeHash: true, reverse: false });
  return false;
})


$(document).off('click', '#completed').on('click', '#completed', function() {

$.mobile.changePage($('#supervisor_completed_list'), { transition: "none", changeHash: true, reverse: false });
  return false;
})


$(document).off('click', '#inprogress').on('click', '#inprogress', function() {

$.mobile.changePage($('#supervisor_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
  return false;
})

/*$(document).off('click', '#completed').on('click', '#completed', function() {
//alert(region+'inprogress');
//alert(region+'region');
$.ajax({url: 'http://staging.eimpressive.com/slim/slim_four_ripsssjs/dash_completeda.php?',
  data:$('#new').serialize(),
  type: 'post',                   
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  beforeSend: function() {
  },
  complete: function() {
  },
  success: function (result) {
    console.log('searchlpa ' +result);
    if(result[0]){
      $("#popupsearchmade").popup("open");
//alert('Data available for the search made');

sessionStorage.setItem("coordinator_final_comment_array",JSON.stringify(result[0]));


// alert(region+'refresh new regionArray_array');
$.mobile.loading().hide();
$.mobile.changePage($('#supervisor_completed_list'), { transition: "none", changeHash: true, reverse: false });
}else {
  alert('No Data Found for the search record'); 
}

return false;
},
error: function (request,error) {
// This callback function will trigger on unsuccessful action     
console.log(request);
console.log(error);  

alert('Network error has occurred please try again!');
}
});

});*/

/*$(document).off('click', '#verified').on('click', '#verified', function() {
//alert(region+'inprogress');
//alert(region+'region');
$.ajax({url: 'http://staging.eimpressive.com/slim/slim_four_ripsssjs/dash_await.php?',
  data:$('#new').serialize(),
  type: 'post',                   
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  beforeSend: function() {
  },
  complete: function() {
  },
  success: function (result) {
    console.log('searchlpa ' +result);
    if(result[0]){
      $("#popupsearchmade").popup("open");
//alert('Data available for the search made');

sessionStorage.setItem("supervisor_final_command_array",JSON.stringify(result[0]));


// alert(region+'refresh new regionArray_array');
$.mobile.loading().hide();
$.mobile.changePage($('#supervisor_verified_list'), { transition: "none", changeHash: true, reverse: false });
}else {
  alert('No Data Found for the search record'); 
}

return false;
},
error: function (request,error) {
// This callback function will trigger on unsuccessful action     
console.log(request);
console.log(error);  

alert('Network error has occurred please try again!');
}
});

});*/

/*$(document).off('click', '#inprogress').on('click', '#inprogress', function() {
//alert(region+'inprogress');
//alert(region+'region');
$.ajax({url: 'http://staging.eimpressive.com/slim/slim_four_ripsssjs/dashinprogressa.php?region='+region+"&user_id="+user_id+"&state="+state,
  data:$('#new').serialize(),
  type: 'post',                   
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  beforeSend: function() {
  },
  complete: function() {
  },
  success: function (result) {
    console.log('searchlpa ' +result);
    if(result[0]){
      $("#popupsearchmade").popup("open");
//alert('Data available for the search made');

sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(result[0]));
sessionStorage.setItem("coordinator_final_comment_array",JSON.stringify(result[1]));


// alert(region+'refresh new regionArray_array');
$.mobile.loading().hide();
$.mobile.changePage($('#supervisor_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
}else {
  alert('No Data Found for the search record'); 
}

return false;
},
error: function (request,error) {
// This callback function will trigger on unsuccessful action     
console.log(request);
console.log(error);  

alert('Network error has occurred please try again!');
}
});

});*/

$(document).off('click', '#dashlogout').on('click', '#dashlogout', function() {
  sessionStorage.clear(); 

  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
  return false;
})


//alert(E_Mail);
//alert(username);
//alert(user_id);
var gcm_idpass=gcm_idpass;
var user_id=gcm_idpass;
//alert(user_id);
//alert(gcm_idpass);
//alert(gcm_idpass);
//alert(gcm_regidexi);
//alert('inside ganesan');
if (typeof PushNotification != 'undefined'){

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        var push = PushNotification.init({
            "android": {
                "senderID": "728597627187"
            },
            "ios": {"alert": "true", "badge": "true", "sound": "true"}, 
            "windows": {} 
        });

        
        push.on('registration', function(data) {
            console.log("registration event");
            document.getElementById("regId").innerHTML = data.registrationId;
            console.log(JSON.stringify(data));
        });

    push.on('registration', function(data) {
        console.log("registration event");
        var gcm_regid = data.registrationId;
        //alert(gcm_regid+'dashboard js    check whether key stores');


	//alert(gcm_regid+'gcm_regid');
	//alert(E_Mail+'E_Mail');
	//alert(username+'username');
	//alert(region+'region');
		//alert(user_id+'user_id');
 $.ajax({url: 'http://staging.eimpressive.com/slim/slim_four_ripsssjs/gcm_id_user.php?gcm_regid='+gcm_regid+"&E_Mail="+E_Mail+"&username="+username+"&region="+region+"&user_id="+user_id,
  data:$('#new').serialize(),
  type: 'post',                   
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  beforeSend: function() {
  },
  complete: function() {
  },
  success: function (result) {
    console.log('searchlpa ' +result);
    if(result[0]){
      $("#popupsearchmade").popup("open");
//alert('Data available for the search made');
sessionStorage.setItem("collectionArray",JSON.stringify(result[0]));
// alert(region+'refresh new regionArray_array');
$.mobile.loading().hide();
//alert('dashboard success');
//$.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
}else {
  alert('No Data Found for the search record'); 
}

return false;
},
error: function (request,error) {
// This callback function will trigger on unsuccessful action     
console.log(request);
console.log(error);  

alert('Network error has occurred please try again!');
}
}); 

    });

    push.on('notification', function(data) {
          console.log("notification event");
            console.log(JSON.stringify(data));
            var cards = document.getElementById("cards");


           alert(data.title + data.message);

           $.ajax({url: 'http://staging.eimpressive.com/slim/slim_four_ripsssjs/count.php?region='+region+"&user_id="+user_id+"&state="+state,
  data:$('#update_to_inprogressw').serialize(),
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
      $("#popupsearchmade").popup("open");
		sessionStorage.setItem("supervisor_inprogress_count_array",JSON.stringify(result[0]));
     	sessionStorage.setItem("supervisor_verified_count_array",JSON.stringify(result[1]));
       	sessionStorage.setItem("supervisor_completed_count_array",JSON.stringify(result[2]));
 		sessionStorage.setItem("supervisor_not_verified_count_array",JSON.stringify(result[3]));
 
 sessionStorage.setItem("supervisor_inprogress_array",JSON.stringify(result[4]));
      sessionStorage.setItem("supervisor_verified_array",JSON.stringify(result[5]));
        sessionStorage.setItem("supervisor_completed_array",JSON.stringify(result[6]));
    sessionStorage.setItem("supervisor_not_verified_array",JSON.stringify(result[7]));

         sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(result[8]));
    sessionStorage.setItem("supervisor_final_command_array",JSON.stringify(result[9]));

      $.mobile.loading().hide();
      //$.mobile.changePage($('#supervisor_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
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
           /* var card = '<div class="row">' +
            '<div class="col s12 m6">' +
          '  <div class="card darken-1">' +
          '    <div class="card-content black-text">' +
          '      <span class="card-title black-text">' + data.title + '</span>' +
          '      <p>' + data.message + '</p>' +
          '    </div>' +
          '  </div>' +
          ' </div>' +
          '</div>';
            cards.innerHTML += card;*/
            
            push.finish(function () {
                console.log('finish successfully called');
            });
        });

        push.on('error', function(e) {
            console.log("push error");
        });
    }
    };

    app.initialize();
}

/*$(document).on("pagebeforeshow","#dashboard",function(){

  alert("pagebeforeshow event fired - pagetwo is about to be shown");
alert(sessionStorage.length);
if (sessionStorage.length == 0) {
alert('sessionStorage zero go out');
  $.mobile.changePage($('#supervisor_completed_list'), { transition: "none", changeHash: true, reverse: false });
  return false;
  }else
  {
    alert('no empty');
  }
});*/



});
