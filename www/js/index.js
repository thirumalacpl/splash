$(document).on('pageshow', '#pageone', function(){ 
  //  alert("hidash");
/*    if(sessionStorage.getItem("logged_in")=="1"){
           $.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false }); 
    }*/

/*$(document).on("pageload",function(){
  alert("pageload event fired - the external page has been successfully loaded and inserted into the DOM!");
});*/

/*$(document).on("pagebeforeshow","#dashboard",function(){

  });*/
if(sessionStorage.getItem("logged_in")=="1"){

//alert('hari login');
  $.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
  return false;
}
if(sessionStorage.getItem("logged_in")=="2"){

//alert('sudeep login');
  $.mobile.changePage($('#dashboard_sh'), { transition: "none", changeHash: true, reverse: false });
  return false;
}


$(document).off('click', '#submit').on('click', '#submit', function() { 
    var enteruser=document.getElementById('username').value;
    var enterpass=document.getElementById('password').value;
    //alert(enteruser+'enteruser'+enterpass+'enterpass');
    if(enteruser == "" && enterpass == "" ){
      alert('Enter Valid Username & Password');
    }else{
    if($('#username').val().length > 0 && $('#password').val().length > 0){
        console.log($('#check-watchuser').serialize());
        $.ajax({url: 'http://staging.eimpressive.com/slim/slim_four_ripsssjs/index.php',
            data:$('#check-watchuser').serialize(),
            type: 'post',                   
            async: 'true',
            crossDomain: true,
            dataType: 'json',
            beforeSend: function() {
$('body').addClass('ui-loading');
},
complete: function() {
},
success: function (result) {
    console.log(result);
    var pas=result[0];
   
   // alert(pas+'pas'); 
       //alert(pass+'pass');
          if(pas == '' ){
    alert('username or password entered is invalid');
    $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
    return false; 
      $(".ui-icon-loading").hide();
}
    if(pas != ''){
     //alert(pas+'sup');
        sessionStorage.setItem("logged_in","1");
        sessionStorage.setItem("regionArray",JSON.stringify(result[0]));
     /*   sessionStorage.setItem("supervisor_new_array",JSON.stringify(result[1]));
        sessionStorage.setItem("new_verification_count_array",JSON.stringify(result[2]));*/
        sessionStorage.setItem("supervisor_inprogress_array",JSON.stringify(result[1]));
        sessionStorage.setItem("supervisor_inprogress_count_array",JSON.stringify(result[2]));
        sessionStorage.setItem("supervisor_verified_array",JSON.stringify(result[3]));

        sessionStorage.setItem("supervisor_verified_count_array",JSON.stringify(result[4]));
        sessionStorage.setItem("supervisor_not_verified_array",JSON.stringify(result[5]));
        sessionStorage.setItem("supervisor_not_verified_count_array",JSON.stringify(result[6]));
        sessionStorage.setItem("supervisor_completed_array",JSON.stringify(result[7]));
        sessionStorage.setItem("supervisor_completed_count_array",JSON.stringify(result[8]));
        sessionStorage.setItem("multiple_documents_array",JSON.stringify(result[9]));

        sessionStorage.setItem("addressid_records_array",JSON.stringify(result[10]));
        sessionStorage.setItem("educational_records_array",JSON.stringify(result[11]));
        sessionStorage.setItem("employment_records_array",JSON.stringify(result[12]));
      /*  sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(result[13]));*/

        /*sessionStorage.setItem("gcm_reg_id_array",JSON.stringify(result[16]));*/

        /*sessionStorage.setItem("activity_log_supervisor_details_array",JSON.stringify(result[16]));*/

        sessionStorage.setItem("image_log_array",JSON.stringify(result[13]));
        sessionStorage.setItem("assests_verification_array",JSON.stringify(result[14]));
        sessionStorage.setItem("bankguarantee_verification_array",JSON.stringify(result[15]));
        sessionStorage.setItem("address_verification_array",JSON.stringify(result[16]));
        sessionStorage.setItem("reference_verification_array",JSON.stringify(result[17]));

        sessionStorage.setItem("distributor_verification_array",JSON.stringify(result[18]));
        sessionStorage.setItem("distributor_details_array",JSON.stringify(result[19]));
        sessionStorage.setItem("web_verification_array",JSON.stringify(result[20]));
        sessionStorage.setItem("supplier_details_array",JSON.stringify(result[21]));
        sessionStorage.setItem("warehouse_verification_array",JSON.stringify(result[22]));

        sessionStorage.setItem("verification_master_array",JSON.stringify(result[23]));
        sessionStorage.setItem("emp_verification_cumulative_array",JSON.stringify(result[24]));
        sessionStorage.setItem("driving_details_array",JSON.stringify(result[25]));
        sessionStorage.setItem("credential_verification_array",JSON.stringify(result[26]));
        sessionStorage.setItem("identity_verification_array",JSON.stringify(result[27]));
        sessionStorage.setItem("bankruptcy_verification_array",JSON.stringify(result[28]));

                /*   sessionStorage.setItem("professional_details_array",JSON.stringify(result[34]));*/

        sessionStorage.setItem("employmentgap_verification_array",JSON.stringify(result[29]));
        sessionStorage.setItem("delinquent_verification_array",JSON.stringify(result[30]));
        sessionStorage.setItem("servant_verification_array",JSON.stringify(result[31]));
        sessionStorage.setItem("integrity_lifestyle_verification_array",JSON.stringify(result[32]));
        sessionStorage.setItem("edusalary_office_array",JSON.stringify(result[33]));

        sessionStorage.setItem("edusalary_education_array",JSON.stringify(result[34]));
        sessionStorage.setItem("integrity_lifestyle_permanent_array",JSON.stringify(result[35]));
        sessionStorage.setItem("servant_education_array",JSON.stringify(result[36]));

        sessionStorage.setItem("sh_eeem_array",JSON.stringify(result[37]));
      
        sessionStorage.setItem("criminal_verification_array",JSON.stringify(result[38]));
        sessionStorage.setItem("professional_details_array",JSON.stringify(result[39]));
              
                 
                   

        sessionStorage.setItem("personal_details_array",JSON.stringify(result[40]));
                  
 

 
        sessionStorage.setItem("gcm_reg_id_array",JSON.stringify(result[41]));

 sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(result[42]));
  sessionStorage.setItem("supervisor_final_command_array",JSON.stringify(result[43]));
        sessionStorage.setItem("coordinator_final_comment_array",JSON.stringify(result[44]));

        $.mobile.loading().hide();
        $(".ui-icon-loading").hide();
         $.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false }); 


    }

    
},
error: function (request,error) {
    console.log(error);
    console.log(request);              
alert('Network error has occurred please try again!');
}
}); 
 
  
}
}
});

$(document).off('click', '#chngpass').on('click', '#chngpass', function() { 
//alert('chngpass');
  });
$(document).off('click', '#resetonepage').on('click', '#resetonepage', function() { 
 $.mobile.changePage($('#changepass'), { transition: "none", changeHash: true, reverse: false }); 
   return false;
});
$(document).off('click', '#chngpass').on('click', '#chngpass', function() { 
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
                         
    sessionStorage.setItem("logged_in","1");
        sessionStorage.setItem("regionArray",JSON.stringify(result[0]));
              $.mobile.loading().hide();

                $.mobile.changePage("two.html", { transition: "slide", changeHash: true, reverse: false }); 
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
});

