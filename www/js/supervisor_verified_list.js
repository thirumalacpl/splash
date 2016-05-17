$(document).on('pageshow', '#supervisor_verified_list', function(){  
//alert("supervisor_verified_list one");
$('#list_align_verified').empty();
//alert("supervisor_list_view");

$(document).off('click', '#dashinv').on('click', '#dashinv', function() {

$.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#inprogressinv').on('click', '#inprogressinv', function() {

$.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});

/*$(document).off('click', '#verifiedinv').on('click', '#verifiedinv', function() {

$.mobile.changePage($('#supervisor_verified_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});*/

$(document).off('click', '#verifiedinv').on('click', '#verifiedinv', function() {

$.mobile.changePage($('#supervisor_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#not_verifiedinv').on('click', '#not_verifiedinv', function() {

$.mobile.changePage($('#supervisor_list_notveri'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#completedinv').on('click', '#completedinv', function() {

  $.mobile.changePage($('#supervisor_completed_list'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

$(document).off('click', '#signoutinv').on('click', '#signoutinv', function() {
  sessionStorage.clear(); 

  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

superArray_array =  JSON.parse(sessionStorage.getItem("supervisor_view_new_veri_array"));
sup_verified_array =  JSON.parse(sessionStorage.getItem("supervisor_verified_array"));
employment_records_array =  JSON.parse(sessionStorage.getItem("emp_verification_cumulative_array"));
addressid_records_array =  JSON.parse(sessionStorage.getItem("addressid_records_array"));
educational_records_array =  JSON.parse(sessionStorage.getItem("educational_records_array"));
/*  view_assigned_address_download_array =  JSON.parse(sessionStorage.getItem("view_assigned_address_download_array"));*/
assests_verification_array =  JSON.parse(sessionStorage.getItem("assests_verification_array"));
bankguarantee_verification_array =  JSON.parse(sessionStorage.getItem("bankguarantee_verification_array"));
address_verification_array =  JSON.parse(sessionStorage.getItem("address_verification_array"));
reference_verification_array =  JSON.parse(sessionStorage.getItem("reference_verification_array"));
supervisor_final_command_array =  JSON.parse(sessionStorage.getItem("supervisor_final_command_array"));
distributor_verification_array =  JSON.parse(sessionStorage.getItem("distributor_verification_array"));
distributor_details_array =  JSON.parse(sessionStorage.getItem("distributor_details_array"));

web_verification_array =  JSON.parse(sessionStorage.getItem("web_verification_array"));
supplier_details_array =  JSON.parse(sessionStorage.getItem("supplier_details_array"));
warehouse_verification_array =  JSON.parse(sessionStorage.getItem("warehouse_verification_array"));
verification_master_array =  JSON.parse(sessionStorage.getItem("verification_master_array"));

driving_details_array =  JSON.parse(sessionStorage.getItem("driving_details_array"));
credential_verification_array =  JSON.parse(sessionStorage.getItem("credential_verification_array"));
identity_verification_array =  JSON.parse(sessionStorage.getItem("identity_verification_array"));
bankruptcy_verification_array =  JSON.parse(sessionStorage.getItem("bankruptcy_verification_array"));
professional_details_array =  JSON.parse(sessionStorage.getItem("professional_details_array"));

employmentgap_verification_array =  JSON.parse(sessionStorage.getItem("employmentgap_verification_array"));
delinquent_verification_array =  JSON.parse(sessionStorage.getItem("delinquent_verification_array"));
servant_verification_array =  JSON.parse(sessionStorage.getItem("servant_verification_array"));
integrity_lifestyle_verification_array =  JSON.parse(sessionStorage.getItem("integrity_lifestyle_verification_array"));
edusalary_office_array =  JSON.parse(sessionStorage.getItem("edusalary_office_array"));
criminal_verification_array =  JSON.parse(sessionStorage.getItem("criminal_verification_array"));
edusalary_education_array =  JSON.parse(sessionStorage.getItem("edusalary_education_array"));
integrity_lifestyle_permanent_array =  JSON.parse(sessionStorage.getItem("integrity_lifestyle_permanent_array"));
servant_education_array =  JSON.parse(sessionStorage.getItem("servant_education_array"));

regionArray_array =  JSON.parse(sessionStorage.getItem("regionArray"));
personal_details_array =  JSON.parse(sessionStorage.getItem("personal_details_array"));
//alert(regionArray_array);

if(regionArray_array == null){
//alert('ppp');
 $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
  return false;
}

$("#userlistinv").text(username);

var superempty=sup_verified_array;

if(superempty == ""){
  alert('No record Found');
  $.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
}

document.getElementById('filterBasic-input').value = "";
/*document.getElementById('filterBasic-inputveri').value = "";*/
document.getElementById('filterBasic-inputcompleted').value = "";
document.getElementById('filterBasic-inputlistnot').value = "";

for(a=0;a<sup_verified_array.length;a++){
  superr_objj = sup_verified_array[a];
// alert(superr_objj.verification_user_id+'superArray'+superr_objj.type);
var sup=superr_objj.name;
qualification_id=superr_objj.type;

var date_new=superr_objj.assigned_on;
//alert(date_new);
var s = date_new;
var bits = s.split(/\D/);
var date = new Date(bits[0], --bits[1], bits[2], bits[3], bits[4]);

var date=date.getDate()+'/'+parseInt(date.getMonth() + 1)+'/'+date.getFullYear();

var date_newa=superr_objj.verified_on;

var sa = date_newa;
var bitsa = sa.split(/\D/);

var subco_status = new Date(bitsa[0], --bitsa[1], bitsa[2], bitsa[3], bitsa[4]);

var subco_status=subco_status.getDate()+'/'+parseInt(subco_status.getMonth() + 1)+'/'+subco_status.getFullYear();
//alert(subco_status);

if( typeof sup !== 'undefined'){

if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'  || qualification_id == '6'){
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/education-icon.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.taskname+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/education-icon.png" class="li_imgs_1"><h2 class="li_h2">Subject Name : '+superr_objj.name+'  '+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">Type : '+superr_objj.verification_for+'</p><p class="li_p">Taskname : '+superr_objj.qualification_name+'</p><p class="li_p ">Tvo Verified On : <span class="listrejectcolora">'+subco_status+'</span></p><span class="li_span">SH Assigned Date : '+date+'</span><b class="li_b_1">Ref.No:'+superr_objj.Ref_no+'</b></a></li>'

$('#list_align_verified').append(lis);

}
if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/employment-new.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.taskname+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/employment-new.png" class="li_imgs_1"><h2 class="li_h2">Subject Name : '+superr_objj.name+'  '+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">Type : '+superr_objj.verification_for+'</p><p class="li_p">Taskname : '+superr_objj.qualification_name+'</p><p class="li_p ">Tvo Verified On : <span class="listrejectcolora">'+subco_status+'</span></p><span class="li_span">SH Assigned Date : '+date+'</span><b class="li_b_1">Ref.No:'+superr_objj.Ref_no+'</b></a></li>'

$('#list_align_verified').append(lis);
}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/id-icon.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.taskname+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/id-icon.png" class="li_imgs_1"><h2 class="li_h2">Subject Name : '+superr_objj.name+'  '+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">Type : '+superr_objj.verification_for+'</p><p class="li_p">Taskname : '+superr_objj.qualification_name+'</p><p class="li_p ">Tvo Verified On : <span class="listrejectcolora">'+subco_status+'</span></p><span class="li_span">SH Assigned Date : '+date+'</span><b class="li_b_1">Ref.No:'+superr_objj.Ref_no+'</b></a></li>'

$('#list_align_verified').append(lis);
}


/*asset*/
if(qualification_id == '63' ){
  
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/asset-verification.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.First_Name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.taskname+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/asset-verification.png" class="li_imgs_1"><h2 class="li_h2">Subject Name : '+superr_objj.name+'  '+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">Type : '+superr_objj.verification_for+'</p><p class="li_p">Taskname : '+superr_objj.qualification_name+'</p><p class="li_p ">Tvo Verified On : <span class="listrejectcolora">'+subco_status+'</span></p><span class="li_span">SH Assigned Date : '+date+'</span><b class="li_b_1">Ref.No:'+superr_objj.Ref_no+'</b></a></li>'

$('#list_align_verified').append(lis);
}



/*address*/
if(qualification_id == '29' || qualification_id == '31' ){
  //alert('address');
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/address-icon.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.First_Name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/address-icon.png" class="li_imgs_1"><h2 class="li_h2">Subject Name : '+superr_objj.name+'  '+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">Type : '+superr_objj.verification_for+'</p><p class="li_p">Taskname : '+superr_objj.qualification_name+'</p><p class="li_p ">Tvo Verified On : <span class="listrejectcolora">'+subco_status+'</span></p><span class="li_span">SH Assigned Date : '+date+'</span><b class="li_b_1">Ref.No:'+superr_objj.Ref_no+'</b></a></li>'

$('#list_align_verified').append(lis);

}

/*reference*/
if(qualification_id == '32' || qualification_id == '33' || qualification_id == '34' || qualification_id == '35' ){
  //alert('referencre');
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/REFFERENCE-ICON.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.First_Name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.taskname+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/REFFERENCE-ICON.png" class="li_imgs_1"><h2 class="li_h2">Subject Name : '+superr_objj.name+'  '+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">Type : '+superr_objj.verification_for+'</p><p class="li_p">Taskname : '+superr_objj.qualification_name+'</p><p class="li_p ">Tvo Verified On : <span class="listrejectcolora">'+subco_status+'</span></p><span class="li_span">SH Assigned Date : '+date+'</span><b class="li_b_1">Ref.No:'+superr_objj.Ref_no+'</b></a></li>'

$('#list_align_verified').append(lis);
}

/*distributor residential address verification*/
/*if(qualification_id == '40' ){
  //alert('distributor residentisl address');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/BANK.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.First_Name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.task_name+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'

$('#lis_align_inpro').append(lis);

}*/

/*distributor details*/
if(qualification_id == '41' ){
  //alert('distributor details');
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/Distributor-icon.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.First_Name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.taskname+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/Distributor-icon.png" class="li_imgs_1"><h2 class="li_h2">Subject Name : '+superr_objj.name+'  '+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">Type : '+superr_objj.verification_for+'</p><p class="li_p">Taskname : '+superr_objj.qualification_name+'</p><p class="li_p ">Tvo Verified On : <span class="listrejectcolora">'+subco_status+'</span></p><span class="li_span">SH Assigned Date : '+date+'</span><b class="li_b_1">Ref.No:'+superr_objj.Ref_no+'</b></a></li>'

$('#list_align_verified').append(lis);

}

/*address details*/
if(qualification_id == '42' || qualification_id == '46' || qualification_id == '44' || qualification_id == '48' || qualification_id == '30' || qualification_id == '40' || qualification_id == '70' || qualification_id == '84'){
 //alert('common web ware supplier');
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/address-icon.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.First_Name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.taskname+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/address-icon.png" class="li_imgs_1"><h2 class="li_h2">Subject Name : '+superr_objj.name+'  '+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">Type : '+superr_objj.verification_for+'</p><p class="li_p">Taskname : '+superr_objj.qualification_name+'</p><p class="li_p ">Tvo Verified On : <span class="listrejectcolora">'+subco_status+'</span></p><span class="li_span">SH Assigned Date : '+date+'</span><b class="li_b_1">Ref.No:'+superr_objj.Ref_no+'</b></a></li>'

$('#list_align_verified').append(lis);

}

/*web verification of antecedents*/
if(qualification_id == '43' ){
 // alert('web verification');
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/web-verification_icon.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.First_Name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.taskname+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/web-verification_icon.png" class="li_imgs_1"><h2 class="li_h2">Subject Name : '+superr_objj.name+'  '+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">Type : '+superr_objj.verification_for+'</p><p class="li_p">Taskname : '+superr_objj.qualification_name+'</p><p class="li_p ">Tvo Verified On : <span class="listrejectcolora">'+subco_status+'</span></p><span class="li_span">SH Assigned Date : '+date+'</span><b class="li_b_1">Ref.No:'+superr_objj.Ref_no+'</b></a></li>'

$('#list_align_verified').append(lis);

}
/*supplier vendor details*/
if(qualification_id == '47' ){
 // alert('supplier vendor');
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/supplier-verification-icon.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.First_Name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.taskname+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/supplier-verification-icon.png" class="li_imgs_1"><h2 class="li_h2">Subject Name : '+superr_objj.name+'  '+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">Type : '+superr_objj.verification_for+'</p><p class="li_p">Taskname : '+superr_objj.qualification_name+'</p><p class="li_p ">Tvo Verified On : <span class="listrejectcolora">'+subco_status+'</span></p><span class="li_span">SH Assigned Date : '+date+'</span><b class="li_b_1">Ref.No:'+superr_objj.Ref_no+'</b></a></li>'

$('#list_align_verified').append(lis);

}
/*ware house leasing*/
if(qualification_id == '45' ){
  //alert('ware housing');
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/Warehouseverification_icon.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.First_Name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.taskname+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/Warehouseverification_icon.png" class="li_imgs_1"><h2 class="li_h2">Subject Name : '+superr_objj.name+'  '+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">Type : '+superr_objj.verification_for+'</p><p class="li_p">Taskname : '+superr_objj.qualification_name+'</p><p class="li_p ">Tvo Verified On : <span class="listrejectcolora">'+subco_status+'</span></p><span class="li_span">SH Assigned Date : '+date+'</span><b class="li_b_1">Ref.No:'+superr_objj.Ref_no+'</b></a></li>'

$('#list_align_verified').append(lis);

}

/*bank*/
if(qualification_id == '64' ){
 // alert('bank 64');
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/BANK.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.First_Name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.taskname+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/BANK.png" class="li_imgs_1"><h2 class="li_h2">Subject Name : '+superr_objj.name+'  '+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">Type : '+superr_objj.verification_for+'</p><p class="li_p">Taskname : '+superr_objj.qualification_name+'</p><p class="li_p ">Tvo Verified On : <span class="listrejectcolora">'+subco_status+'</span></p><span class="li_span">SH Assigned Date : '+date+'</span><b class="li_b_1">Ref.No:'+superr_objj.Ref_no+'</b></a></li>'

$('#list_align_verified').append(lis);

}

/*driving licence*/
if(qualification_id == '56' ){
  //alert('driving licence 56');
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/DrivingLicence-verification_icon.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.First_Name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.taskname+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/DrivingLicence-verification_icon.png" class="li_imgs_1"><h2 class="li_h2">Subject Name : '+superr_objj.name+'  '+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">Type : '+superr_objj.verification_for+'</p><p class="li_p">Taskname : '+superr_objj.qualification_name+'</p><p class="li_p ">Tvo Verified On : <span class="listrejectcolora">'+subco_status+'</span></p><span class="li_span">SH Assigned Date : '+date+'</span><b class="li_b_1">Ref.No:'+superr_objj.Ref_no+'</b></a></li>'

$('#list_align_verified').append(lis);

}

/*identity */
if(qualification_id == '65' ){
  //alert('identity 65');
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/identity-icon.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.First_Name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.taskname+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/identity-icon.png" class="li_imgs_1"><h2 class="li_h2">Subject Name : '+superr_objj.name+'  '+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">Type : '+superr_objj.verification_for+'</p><p class="li_p">Taskname : '+superr_objj.qualification_name+'</p><p class="li_p ">Tvo Verified On : <span class="listrejectcolora">'+subco_status+'</span></p><span class="li_span">SH Assigned Date : '+date+'</span><b class="li_b_1">Ref.No:'+superr_objj.Ref_no+'</b></a></li>'

$('#list_align_verified').append(lis);

}
/*credential */
if(qualification_id == '39' ){
  //alert('credential  39');
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/Credential-icon.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.First_Name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.taskname+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/Credential-icon.png" class="li_imgs_1"><h2 class="li_h2">Subject Name : '+superr_objj.name+'  '+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">Type : '+superr_objj.verification_for+'</p><p class="li_p">Taskname : '+superr_objj.qualification_name+'</p><p class="li_p ">Tvo Verified On : <span class="listrejectcolora">'+subco_status+'</span></p><span class="li_span">SH Assigned Date : '+date+'</span><b class="li_b_1">Ref.No:'+superr_objj.Ref_no+'</b></a></li>'

$('#list_align_verified').append(lis);

}
/*bankrupcy */
if(qualification_id == '66' ){
  //alert('bankrupcy 66');
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/bankkruptcy-icon.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.First_Name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.taskname+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/bankkruptcy-icon.png" class="li_imgs_1"><h2 class="li_h2">Subject Name : '+superr_objj.name+'  '+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">Type : '+superr_objj.verification_for+'</p><p class="li_p">Taskname : '+superr_objj.qualification_name+'</p><p class="li_p ">Tvo Verified On : <span class="listrejectcolora">'+subco_status+'</span></p><span class="li_span">SH Assigned Date : '+date+'</span><b class="li_b_1">Ref.No:'+superr_objj.Ref_no+'</b></a></li>'

$('#list_align_verified').append(lis);

}

/*professional licence*/
if(qualification_id == '69' ){
  //alert('professional licence 69');
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/Proffessinoal-icon.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.First_Name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.taskname+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/Proffessinoal-icon.png" class="li_imgs_1"><h2 class="li_h2">Subject Name : '+superr_objj.name+'  '+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">Type : '+superr_objj.verification_for+'</p><p class="li_p">Taskname : '+superr_objj.qualification_name+'</p><p class="li_p ">Tvo Verified On : <span class="listrejectcolora">'+subco_status+'</span></p><span class="li_span">SH Assigned Date : '+date+'</span><b class="li_b_1">Ref.No:'+superr_objj.Ref_no+'</b></a></li>'

$('#list_align_verified').append(lis);

}

/* 6verifi */
/* servant  */
if(qualification_id == '49' || qualification_id == '50' || qualification_id == '51' || qualification_id == '77' || qualification_id == '78' || qualification_id == '79'){
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/servant.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.First_Name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.taskname+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'

var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/servant.png" class="li_imgs_1"><h2 class="li_h2">Subject Name : '+superr_objj.name+'  '+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">Type : '+superr_objj.verification_for+'</p><p class="li_p">Taskname : '+superr_objj.qualification_name+'</p><p class="li_p ">Tvo Verified On : <span class="listrejectcolora">'+subco_status+'</span></p><span class="li_span">SH Assigned Date : '+date+'</span><b class="li_b_1">Ref.No:'+superr_objj.Ref_no+'</b></a></li>'

$('#list_align_verified').append(lis);

}
/* servant education qualification 2*/
if(qualification_id == '80' ){
 
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/servant.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.First_Name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.taskname+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/servant.png" class="li_imgs_1"><h2 class="li_h2">Subject Name : '+superr_objj.name+'  '+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">Type : '+superr_objj.verification_for+'</p><p class="li_p">Taskname : '+superr_objj.qualification_name+'</p><p class="li_p ">Tvo Verified On : <span class="listrejectcolora">'+subco_status+'</span></p><span class="li_span">SH Assigned Date : '+date+'</span><b class="li_b_1">Ref.No:'+superr_objj.Ref_no+'</b></a></li>'

$('#list_align_verified').append(lis);

}
/* education salary 1*/
if(qualification_id == '75' ){
 
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/education-&-salary.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.First_Name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.taskname+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/education-&-salary.png" class="li_imgs_1"><h2 class="li_h2">Subject Name : '+superr_objj.name+'  '+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">Type : '+superr_objj.verification_for+'</p><p class="li_p">Taskname : '+superr_objj.qualification_name+'</p><p class="li_p ">Tvo Verified On : <span class="listrejectcolora">'+subco_status+'</span></p><span class="li_span">SH Assigned Date : '+date+'</span><b class="li_b_1">Ref.No:'+superr_objj.Ref_no+'</b></a></li>'

$('#list_align_verified').append(lis);

}
/* education salary 2*/
if(qualification_id == '76' ){
 
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/education-&-salary.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.First_Name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.taskname+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/education-&-salary.png" class="li_imgs_1"><h2 class="li_h2">Subject Name : '+superr_objj.name+'  '+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">Type : '+superr_objj.verification_for+'</p><p class="li_p">Taskname : '+superr_objj.qualification_name+'</p><p class="li_p ">Tvo Verified On : <span class="listrejectcolora">'+subco_status+'</span></p><span class="li_span">SH Assigned Date : '+date+'</span><b class="li_b_1">Ref.No:'+superr_objj.Ref_no+'</b></a></li>'

$('#list_align_verified').append(lis);

}
/* criminal 1*/
if(qualification_id == '71' || qualification_id == '72' || qualification_id == '73' || qualification_id == '74' ){
 
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/criminal.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.First_Name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.taskname+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/criminal.png" class="li_imgs_1"><h2 class="li_h2">Subject Name : '+superr_objj.name+'  '+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">Type : '+superr_objj.verification_for+'</p><p class="li_p">Taskname : '+superr_objj.qualification_name+'</p><p class="li_p ">Tvo Verified On : <span class="listrejectcolora">'+subco_status+'</span></p><span class="li_span">SH Assigned Date : '+date+'</span><b class="li_b_1">Ref.No:'+superr_objj.Ref_no+'</b></a></li>'

$('#list_align_verified').append(lis);

}
/* employmnet gap 1 and criminal 2-->74*/
if(qualification_id == '81' || qualification_id == '82' || qualification_id == '83'  ){
 
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/employment-gap.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.First_Name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.taskname+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/employment-gap.png" class="li_imgs_1"><h2 class="li_h2">Subject Name : '+superr_objj.name+'  '+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">Type : '+superr_objj.verification_for+'</p><p class="li_p">Taskname : '+superr_objj.qualification_name+'</p><p class="li_p ">Tvo Verified On : <span class="listrejectcolora">'+subco_status+'</span></p><span class="li_span">SH Assigned Date : '+date+'</span><b class="li_b_1">Ref.No:'+superr_objj.Ref_no+'</b></a></li>'

$('#list_align_verified').append(lis);

}
/* delinquent 1*/
if(qualification_id == '89' || qualification_id == '90' || qualification_id == '91' || qualification_id == '92' || qualification_id == '93'){
 
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/delinquent.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.First_Name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.taskname+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/delinquent.png" class="li_imgs_1"><h2 class="li_h2">Subject Name : '+superr_objj.name+'  '+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">Type : '+superr_objj.verification_for+'</p><p class="li_p">Taskname : '+superr_objj.qualification_name+'</p><p class="li_p ">Tvo Verified On : <span class="listrejectcolora">'+subco_status+'</span></p><span class="li_span">SH Assigned Date : '+date+'</span><b class="li_b_1">Ref.No:'+superr_objj.Ref_no+'</b></a></li>'

$('#list_align_verified').append(lis);

}
/* integrity & lifestyle 1*/
if(qualification_id == '85' ){
 
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/Proffessinoal-icon.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.First_Name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.taskname+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/lifestyle.png" class="li_imgs_1"><h2 class="li_h2">Subject Name : '+superr_objj.name+'  '+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">Type : '+superr_objj.verification_for+'</p><p class="li_p">Taskname : '+superr_objj.qualification_name+'</p><p class="li_p ">Tvo Verified On : <span class="listrejectcolora">'+subco_status+'</span></p><span class="li_span">SH Assigned Date : '+date+'</span><b class="li_b_1">Ref.No:'+superr_objj.Ref_no+'</b></a></li>'

$('#list_align_verified').append(lis);

}
/* integrity & life style 2*/
if(qualification_id == '86' || qualification_id == '87' || qualification_id == '88' ){
 
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/Proffessinoal-icon.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.First_Name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.taskname+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/lifestyle.png" class="li_imgs_1"><h2 class="li_h2">Subject Name : '+superr_objj.name+'  '+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">Type : '+superr_objj.verification_for+'</p><p class="li_p">Taskname : '+superr_objj.qualification_name+'</p><p class="li_p ">Tvo Verified On : <span class="listrejectcolora">'+subco_status+'</span></p><span class="li_span">SH Assigned Date : '+date+'</span><b class="li_b_1">Ref.No:'+superr_objj.Ref_no+'</b></a></li>'

$('#list_align_verified').append(lis);

}
/* security*/
if(qualification_id == '94'  ){
 
// var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/Proffessinoal-icon.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.First_Name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.taskname+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/qualification.png" class="li_imgs_1"><h2 class="li_h2">Subject Name : '+superr_objj.name+'  '+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">Type : '+superr_objj.verification_for+'</p><p class="li_p">Taskname : '+superr_objj.qualification_name+'</p><p class="li_p ">Tvo Verified On : <span class="listrejectcolora">'+subco_status+'</span></p><span class="li_span">SH Assigned Date : '+date+'</span><b class="li_b_1">Ref.No:'+superr_objj.Ref_no+'</b></a></li>'

$('#list_align_verified').append(lis);

}


}
}

superArray_array =  JSON.parse(sessionStorage.getItem("supervisor_view_new_veri_array"));
/*for(a=0;a<superArray_array.length;a++){
  super_obja = superArray_array[a];

  $("#supervisor_name_verilist").text(super_obja.First_Name);
  $("#city_name_verilist").text(super_obja.city_name);
}
*/


});



function callnextpv(index){

  superr_objj = sup_verified_array[index];
  qualification_id =superr_objj.type;
//alert(qualification_id);


for(a=0;a<personal_details_array.length;a++){
personal_det = personal_details_array[a];

  superr_objj = sup_verified_array[index];
  hj =personal_det.user_id;
  

gj =superr_objj.verification_user_id;
//alert(hj+'hj'+gj+'gj');
if( hj == gj ){
  //alert(hj+'hj'+gj+'gj');
  personal_deta = personal_details_array[a];
//alert(personal_deta.user_id+'personal_det');
}
}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
//alert('function address id 12 to 15');
for(a=0;a<addressid_records_array.length;a++){
  address_obj = addressid_records_array[a];

  superr_objj = sup_verified_array[index];
  h =address_obj.user_id;
  hadd=address_obj.proof_type_id;

  g =superr_objj.verification_user_id;

  if( h == g && hadd == qualification_id ){
    address_obja = addressid_records_array[a];

  }

}
}
if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5' || qualification_id == '6'){
//alert('function eduction id 1 to 5');
for(a=0;a<educational_records_array.length;a++){
  eductional_obj = educational_records_array[a];

  superr_objj = sup_verified_array[index];
  h =eductional_obj.user_id;
  hedu=eductional_obj.education_type;
//alert(h+'hh');
g =superr_objj.verification_user_id;
//alert(g+'gg');
if( h == g && hedu == qualification_id){
  eductional_objq = educational_records_array[a];
//alert(eductional_objq.user_id+'educational_records_arrayeducational_records_array'+g);
}

}
}

if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//alert('function employmen id 7 to 11');
for(a=0;a<employment_records_array.length;a++){
  employment_obj = employment_records_array[a];


  superr_objj = sup_verified_array[index];
  hu =employment_obj.user_id;
  huemploy=employment_obj.employment_type;
  gu =superr_objj.verification_user_id;
//alert(g+'gg');
if( hu == gu && huemploy == qualification_id ){
//alert(hu+'iiiiiiiiiiin');
employment_objad = employment_records_array[a];

//alert(employment_objad.user_id+"emp----o"+employment_objad.employment_type)
//alert(employment_obja.user_id+'employment_records_array'+g);
}
}
}




var final = supervisor_final_command_array;
//alert(final);
if( final !== null){
for(a=0;a<supervisor_final_command_array.length;a++){
  supervisor_final_command = supervisor_final_command_array[a];
  superr_objj = sup_verified_array[index];

  hj =supervisor_final_command.verification_id;
  huemploy=supervisor_final_command.type;
  gj =superr_objj.verification_user_id;
  if( hj == gj && huemploy == qualification_id){
  // alert("if log");
  supervisor_final_commanda = supervisor_final_command_array[a];
 //alert(supervisor_final_commanda.verification_id);
}

}
}

/*servant education 80 75*/
if(qualification_id == '80' ){
  //alert('80 ');
 for(a=0;a<servant_education_array.length;a++){
servant_educ = servant_education_array[a];

  superr_objj = sup_verified_array[index];
  hj =servant_educ.user_id;
  huemploy=servant_educ.address_group;
//alert(h+'hh');
gj =superr_objj.verification_user_id;
//alert(hj+'gg'+gj+''+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  servant_educa = servant_education_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

  }

/*edusalary_office 75*/
if(qualification_id == '85' ){
 // alert('85 ');
 for(a=0;a<integrity_lifestyle_permanent_array.length;a++){
integrity_lifestyle_per = integrity_lifestyle_permanent_array[a];

  superr_objj = sup_verified_array[index];
  hj =integrity_lifestyle_per.user_id;
  huemploy=integrity_lifestyle_per.address_group;
//alert(h+'hh');
gj =superr_objj.verification_user_id;
//alert(hj+'gg'+gj+''+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  integrity_lifestyle_pera = integrity_lifestyle_permanent_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

  }

/*edusalary_office 75*/
if(qualification_id == '76' ){
  //alert('76 ');
 for(a=0;a<edusalary_education_array.length;a++){
edusalary_edu = edusalary_education_array[a];

  superr_objj = sup_verified_array[index];
  hj =edusalary_edu.user_id;
  huemploy=edusalary_edu.address_group;
//alert(h+'hh');
gj =superr_objj.verification_user_id;
//alert(hj+'gg'+gj+''+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  edusalary_edua = edusalary_education_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}
}

/*edusalary_office 75*/
if(qualification_id == '75' ){
 // alert('75 ');
 for(a=0;a<edusalary_office_array.length;a++){
edusalary_off = edusalary_office_array[a];

  superr_objj = sup_verified_array[index];
  hj =edusalary_off.user_id;
  huemploy=edusalary_off.address_group;
//alert(h+'hh');
gj =superr_objj.verification_user_id;
//alert(hj+'gg'+gj+''+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  edusalary_offa = edusalary_office_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

  }

if(qualification_id == '89' || qualification_id == '90' || qualification_id == '91' || qualification_id == '92' || qualification_id == '93'){
 for(a=0;a<delinquent_verification_array.length;a++){
delinquent_veri = delinquent_verification_array[a];

  superr_objj = sup_verified_array[index];
  hj =delinquent_veri.Verification_Master_Id;
  huemploy=delinquent_veri.address_group;
//alert(h+'hh');
gj =superr_objj.verification_user_id;
//alert(hj+'gg'+gj+''+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  delinquent_veria = delinquent_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}
}


if(qualification_id == '86' || qualification_id == '87' || qualification_id == '88' ){
 for(a=0;a<integrity_lifestyle_verification_array.length;a++){
integrity_lifestyle = integrity_lifestyle_verification_array[a];

  superr_objj = sup_verified_array[index];
  hj =integrity_lifestyle.user_id;
  huemploy=integrity_lifestyle.address_group;
//alert(h+'hh');
gj =superr_objj.verification_user_id;
//alert(hj+'gg'+gj+''+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  integrity_lifestylea = integrity_lifestyle_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}
}

if(qualification_id == '81' || qualification_id == '82' || qualification_id == '83'  ){
 for(a=0;a<employmentgap_verification_array.length;a++){
  employgap_veri = employmentgap_verification_array[a];

  superr_objj = sup_verified_array[index];
  hj =employgap_veri.user_id;
  huemploy=employgap_veri.address_group;
//alert(h+'hh');
gj =superr_objj.verification_user_id;
//alert(hj+'gg'+gj+''+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  employgap_veria = employmentgap_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}
}

if(qualification_id == '71' || qualification_id == '72' || qualification_id == '73' || qualification_id == '74' ){
 for(a=0;a<criminal_verification_array.length;a++){
  criminal_veri = criminal_verification_array[a];

  superr_objj = sup_verified_array[index];
  hj =criminal_veri.user_id;
  huemploy=criminal_veri.address_group;
//alert(h+'hh');
gj =superr_objj.verification_user_id;
//alert(hj+'gg'+gj+''+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  criminal_veria = criminal_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}
 }

if(qualification_id == '49' || qualification_id == '50' || qualification_id == '51' || qualification_id == '77' || qualification_id == '78' || qualification_id == '79'){

for(a=0;a<servant_verification_array.length;a++){
  servant_veri = servant_verification_array[a];

  superr_objj = sup_verified_array[index];
  hj =servant_veri.user_id;
  huemploy=servant_veri.address_group;
//alert(h+'hh');
gj =superr_objj.verification_user_id;
//alert(hj+'gg'+gj+''+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  servant_veria = servant_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}
if(qualification_id == '64' ){
//alert('function bank id 64');
for(a=0;a<bankguarantee_verification_array.length;a++){
  bank_guar = bankguarantee_verification_array[a];

  superr_objj = sup_verified_array[index];
  hj =bank_guar.user_id;
  huemploy=bank_guar.address_group;
//alert(h+'hh');
gj =superr_objj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  bank_inproa = bankguarantee_verification_array[a];
//alert(bank_inproa.user_id);
}
}

}

if(qualification_id == '29' || qualification_id == '31'){
//alert('function address id 29 to 31');
for(a=0;a<address_verification_array.length;a++){
  address_verii = address_verification_array[a];

  superr_objj = sup_verified_array[index];
  hj =address_verii.user_id;
  huemploy=address_verii.address_group;
//alert(h+'hh');
gj =superr_objj.verification_user_id;
//alert(g+'gg');
if( hj == gj && huemploy == qualification_id){
  address_veriia = address_verification_array[a];
  //alert(address_veriia);
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '63' ){
//alert('function assest id 16 to 26');

for(a=0;a<assests_verification_array.length;a++){
  assest_ver = assests_verification_array[a];

  superr_objj = sup_verified_array[index];
  hj =assest_ver.user_id;
  huemploy=assest_ver.address_group;
//alert(h+'hh');
gj =superr_objj.verification_user_id;
//alert(hj+'gg'+gj+''+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  assest_inpro = assests_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '32' || qualification_id == '33' || qualification_id == '34' || qualification_id == '35'){
//alert('function reference id 32 to 35');
for(a=0;a<reference_verification_array.length;a++){
  reference = reference_verification_array[a];

  superr_objj = sup_verified_array[index];
  hj =reference.user_id;
  huemploy=reference.address_group;
//alert(h+'hh');
gj =superr_objj.verification_user_id;
//alert(g+'gg');
if( hj == gj && huemploy == qualification_id){
  referencea = reference_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '27' ){
//alert('function bank id 27 to 28');
for(a=0;a<bankguarantee_verification_array.length;a++){
  bank_guar = bankguarantee_verification_array[a];

  superr_objj = sup_verified_array[index];
  hj =bank_guar.user_id;
  huemploy=bank_guar.acc_mode;
//alert(h+'hh');
gj =superr_objj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  bank_inproa = bankguarantee_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '40' ){
//alert('function distributor residential id 40');
for(a=0;a<distributor_verification_array.length;a++){
  distr_residential = distributor_verification_array[a];

  superr_objj = sup_verified_array[index];
  hj =distr_residential.user_id;
  huemploy=distr_residential.address_group;
//alert(h+'hh');
gj =superr_objj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  distr_residentiala = distributor_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '41' ){
//alert('function distributor residential id 40');
for(a=0;a<distributor_details_array.length;a++){
  dist_details = distributor_details_array[a];

  superr_objj = sup_verified_array[index];
  hj =dist_details.user_id;
  huemploy=dist_details.address_group;
//alert(h+'hh');
gj =superr_objj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  dist_detailsa = distributor_details_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

/*if(qualification_id == '16' || qualification_id == '17' || qualification_id == '18' || qualification_id == '19' || qualification_id == '20' || qualification_id == '21' ||qualification_id == '22' || qualification_id == '23' || qualification_id == '24' || qualification_id == '25' || qualification_id == '26'){
//alert('function assest id 16 to 26');

for(a=0;a<assests_verification_array.length;a++){
  assest_ver = assests_verification_array[a];

  superr_objj = sup_verified_array[index];
  hj =assest_ver.user_id;
  huemploy=assest_ver.propert_type;
//alert(h+'hh');
gj =superr_objj.verification_user_id;
//alert(hj+'gg'+gj+''+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  assest_inproa = assests_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}*/

if(qualification_id == '43' ){
//alert('function web verifi  id 43');
for(a=0;a<web_verification_array.length;a++){
  web_veri = web_verification_array[a];

  superr_objj = sup_verified_array[index];
  hj =web_veri.user_id;
  huemploy=web_veri.address_group;
//alert(h+'hh');
gj =superr_objj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  web_veria = web_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '47' ){
//alert('function supplier details id 47');
for(a=0;a<supplier_details_array.length;a++){
  supplier_vend = supplier_details_array[a];

  superr_objj = sup_verified_array[index];
  hj =supplier_vend.user_id;
  huemploy=supplier_vend.address_group;
//alert(h+'hh');
gj =superr_objj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  supplier_venda = supplier_details_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '45' ){
//alert('function ware housing 45');
for(a=0;a<warehouse_verification_array.length;a++){
  ware_hous = warehouse_verification_array[a];

  superr_objj = sup_verified_array[index];
  hj =ware_hous.user_id;
  huemploy=ware_hous.address_group;
//alert(h+'hh');
gj =superr_objj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  ware_housa = warehouse_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '42' || qualification_id == '46' || qualification_id == '44' || qualification_id == '48' || qualification_id == '30' || qualification_id == '40' || qualification_id == '70' || qualification_id == '84' || qualification_id == '94'){
//alert('function distributor residential id 40');
for(a=0;a<verification_master_array.length;a++){
  common_address = verification_master_array[a];

  superr_objj = sup_verified_array[index];
  hj =common_address.Verification_Master_Id;
  huemploy=common_address.address_group;
//alert(h+'hh');
gj =superr_objj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  common_addressa = verification_master_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '56' ){
//alert('function driving id 56');
for(a=0;a<driving_details_array.length;a++){
  driving_lic = driving_details_array[a];

  superr_objj = sup_verified_array[index];
  hj =driving_lic.user_id;
  huemploy=driving_lic.address_group;
//alert(h+'hh');
gj =superr_objj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  driving_lica = driving_details_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}
}


if(qualification_id == '39' ){
//alert('function driving id 39');
for(a=0;a<credential_verification_array.length;a++){
  credential_det = credential_verification_array[a];

  superr_objj = sup_verified_array[index];
  hj =credential_det.user_id;
  huemploy=credential_det.address_group;
//alert(h+'hh');
gj =superr_objj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  credential_deta = credential_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}
}



if(qualification_id == '65' ){
//alert('function driving id 56');
for(a=0;a<identity_verification_array.length;a++){
  identity_det = identity_verification_array[a];

  superr_objj = sup_verified_array[index];
  hj =identity_det.user_id;
  huemploy=identity_det.address_group;
//alert(h+'hh');
gj =superr_objj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  identity_deta = identity_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}
}

if(qualification_id == '66' ){
//alert('function driving id 56');
for(a=0;a<bankruptcy_verification_array.length;a++){
  bankruptcy_det = bankruptcy_verification_array[a];

  superr_objj = sup_verified_array[index];
  hj =bankruptcy_det.user_id;
  huemploy=bankruptcy_det.address_group;
//alert(h+'hh');
gj =superr_objj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  bankruptcy_deta = bankruptcy_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}
}

if(qualification_id == '69' ){
//alert('function driving id 56');
for(a=0;a<professional_details_array.length;a++){
  professional_det = professional_details_array[a];

  superr_objj = sup_verified_array[index];
  hj =professional_det.user_id;
  huemploy=professional_det.address_group;
//alert(h+'hh');
gj =superr_objj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  professional_deta = professional_details_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}
}

var delinquent_veria=delinquent_veria;
var integrity_lifestyle_pera=integrity_lifestyle_pera;
var integrity_lifestylea=integrity_lifestylea;
var servant_veria=servant_veria;
var servant_educa=servant_educa;
var edusalary_edua=edusalary_edua;
var edusalary_offa=edusalary_offa;
var employgap_veria=employgap_veria;
var criminal_veria=criminal_veria;

var bankruptcy_deta=bankruptcy_deta;
var identity_deta=identity_deta;
var professional_deta=professional_deta;
var credential_deta=credential_deta;
var driving_lic=driving_lic;


var bank_inproa=bank_inproa;
var assest_inproa=assest_inproa;
var address_veriia=address_veriia;
var referencea=referencea;
var distr_residentiala=distr_residentiala;
var dist_detailsa=dist_detailsa;

var bank_inpro=bank_inpro;
var assest_inpro=assest_inpro;

var web_veria=web_veria;
var supplier_venda=supplier_venda;
var ware_housa=ware_housa;
var common_addressa=common_addressa;

var supervisor_final_commanda=supervisor_final_commanda;
var eductional_objq=eductional_objq;
var employment_objad=employment_objad;
var address_obja=address_obja;
var personal_deta=personal_deta;

if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5' || qualification_id == '6'){
//alert('currentob education succes');
  if(eductional_objq !== undefined){
if(supervisor_final_commanda !== undefined){
  //alert('supervisor_final_commanda education succes');
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("currentobj_educational_records_veri",JSON.stringify(eductional_objq));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));


    if(personal_deta !== undefined ){
  // alert(personal_deta+'sessionStorage edu');
       sessionStorage.setItem("personal_deta",JSON.stringify(personal_deta)); 
sessionStorage.setItem("currentobj_educational_records_veri",JSON.stringify(eductional_objq));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
    }
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("currentobj_educational_records_veri",JSON.stringify(eductional_objq));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
//alert('currentob address succes');
  if(address_obja !== undefined){
if(supervisor_final_commanda !== undefined){
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("currentobja_addressid_veri",JSON.stringify(address_obja ));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));

    if(personal_deta !== undefined ){
   //alert(personal_deta+'sessionStorage');
       sessionStorage.setItem("personal_deta",JSON.stringify(personal_deta)); 
sessionStorage.setItem("currentobja_addressid_veri",JSON.stringify(address_obja));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
    }
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("currentobja_addressid_veri",JSON.stringify(address_obja ));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
}
if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//alert('currentob employment succes');
 if(employment_objad !== undefined){
if(supervisor_final_commanda !== undefined){
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("currentobja_emnployment_veri",JSON.stringify(employment_objad ));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));

if(personal_deta !== undefined ){
   //alert(personal_deta+'sessionStorage');
       sessionStorage.setItem("personal_deta",JSON.stringify(personal_deta)); 
sessionStorage.setItem("currentobja_emnployment_veri",JSON.stringify(employment_objad));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
    }
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("currentobja_emnployment_veri",JSON.stringify(employment_objad ));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
}


if(qualification_id == '32' || qualification_id == '33' || qualification_id == '34' || qualification_id == '35'){
 if(referencea !== undefined){
if(supervisor_final_commanda !== undefined){
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("referencea",JSON.stringify(referencea));

sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));

if(personal_deta !== undefined ){
   //alert(personal_deta+'sessionStorage');
       sessionStorage.setItem("personal_deta",JSON.stringify(personal_deta)); 
sessionStorage.setItem("referencea",JSON.stringify(referencea));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
    }
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("referencea",JSON.stringify(referencea));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
}

if(qualification_id == '29'  || qualification_id == '31'){
   if(address_veriia !== undefined){
if(supervisor_final_commanda !== undefined){
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("address_veriia",JSON.stringify(address_veriia));
  sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));

if(personal_deta !== undefined ){
   //alert(personal_deta+'sessionStorage');
       sessionStorage.setItem("personal_deta",JSON.stringify(personal_deta)); 
sessionStorage.setItem("address_veriia",JSON.stringify(address_veriia));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
    }
sessionStorage.setItem("address_veriia",JSON.stringify(address_veriia));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
}

if(qualification_id == '27' ){
     if(bank_inproa !== undefined){
if(supervisor_final_commanda !== undefined){
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("bank_inpro",JSON.stringify(bank_inproa));
  sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));

if(personal_deta !== undefined ){
   //alert(personal_deta+'sessionStorage');
       sessionStorage.setItem("personal_deta",JSON.stringify(personal_deta)); 
sessionStorage.setItem("bank_inpro",JSON.stringify(bank_inproa));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
    }
//alert('currentob bank succes');
sessionStorage.setItem("bank_inpro",JSON.stringify(bank_inproa));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(superr_objj));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
}

/*if(qualification_id == '16' || qualification_id == '17' || qualification_id == '18' || qualification_id == '19' || qualification_id == '20' || qualification_id == '21' ||qualification_id == '22' || qualification_id == '23' || qualification_id == '24' || qualification_id == '25' || qualification_id == '26'){
   if(assest_inproa !== undefined){
if(supervisor_final_commanda !== undefined){
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("assest_inpro",JSON.stringify(assest_inproa));

  sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
//alert('currentob assest succes');
sessionStorage.setItem("assest_inpro",JSON.stringify(assest_inproa));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
*/
if(qualification_id == '40' ){
   if(distr_residentiala !== undefined){
if(supervisor_final_commanda !== undefined){
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("distr_residentiala",JSON.stringify(distr_residentiala));

  sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));

if(personal_deta !== undefined ){
   //alert(personal_deta+'sessionStorage');
       sessionStorage.setItem("personal_deta",JSON.stringify(personal_deta)); 
sessionStorage.setItem("distr_residentiala",JSON.stringify(distr_residentiala));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
    }
//alert('currentob bank succes');
sessionStorage.setItem("distr_residentiala",JSON.stringify(distr_residentiala));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
}


if(qualification_id == '41' ){
    if(dist_detailsa !== undefined){
if(supervisor_final_commanda !== undefined){

sessionStorage.setItem("dist_detailsa",JSON.stringify(dist_detailsa));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));

if(personal_deta !== undefined ){
   //alert(personal_deta+'sessionStorage');
       sessionStorage.setItem("personal_deta",JSON.stringify(personal_deta)); 
sessionStorage.setItem("dist_detailsa",JSON.stringify(dist_detailsa));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
    }
//alert('currentob bank succes');
sessionStorage.setItem("dist_detailsa",JSON.stringify(dist_detailsa));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
}

if(qualification_id == '43' ){
   if(web_veria !== undefined){
if(supervisor_final_commanda !== undefined){

sessionStorage.setItem("web_veria",JSON.stringify(web_veria));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
  sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));

if(personal_deta !== undefined ){
   //alert(personal_deta+'sessionStorage');
       sessionStorage.setItem("personal_deta",JSON.stringify(personal_deta)); 
sessionStorage.setItem("web_veria",JSON.stringify(web_veria));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
    }
//alert('currentob bank succes');
sessionStorage.setItem("web_veria",JSON.stringify(web_veria));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
}

if(qualification_id == '47' ){
  if(supplier_venda !== undefined){
 if(supervisor_final_commanda !== undefined){

sessionStorage.setItem("supplier_venda",JSON.stringify(supplier_venda));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
  sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));

if(personal_deta !== undefined ){
   //alert(personal_deta+'sessionStorage');
       sessionStorage.setItem("personal_deta",JSON.stringify(personal_deta)); 
sessionStorage.setItem("supplier_venda",JSON.stringify(supplier_venda));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
    }
//alert('currentob bank succes');
sessionStorage.setItem("supplier_venda",JSON.stringify(supplier_venda));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
}

if(qualification_id == '45' ){
    if(ware_housa !== undefined){
if(supervisor_final_commanda !== undefined){

sessionStorage.setItem("ware_housa",JSON.stringify(ware_housa));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));

if(personal_deta !== undefined ){
   //alert(personal_deta+'sessionStorage');
       sessionStorage.setItem("personal_deta",JSON.stringify(personal_deta)); 
sessionStorage.setItem("ware_housa",JSON.stringify(ware_housa));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
    }
//alert('currentob bank succes');
sessionStorage.setItem("ware_housa",JSON.stringify(ware_housa));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
}

if(qualification_id == '42' || qualification_id == '46' || qualification_id == '44' || qualification_id == '48' || qualification_id == '30' || qualification_id == '40' || qualification_id == '70' || qualification_id == '84' || qualification_id == '94'){
     if(common_addressa !== undefined){
if(supervisor_final_commanda !== undefined){

sessionStorage.setItem("common_addressa",JSON.stringify(common_addressa));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
  sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));

if(personal_deta !== undefined ){
   //alert(personal_deta+'sessionStorage');
       sessionStorage.setItem("personal_deta",JSON.stringify(personal_deta)); 
sessionStorage.setItem("common_addressa",JSON.stringify(common_addressa));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
    }
//alert('currentob bank succes');
sessionStorage.setItem("common_addressa",JSON.stringify(common_addressa));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
}

if(qualification_id == '56' ){
      if(driving_lica !== undefined){
  if(supervisor_final_commanda !== undefined){
sessionStorage.setItem("driving_lica",JSON.stringify(driving_lica));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
  sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));

if(personal_deta !== undefined ){
   //alert(personal_deta+'sessionStorage');
       sessionStorage.setItem("personal_deta",JSON.stringify(personal_deta)); 
sessionStorage.setItem("driving_lica",JSON.stringify(driving_lica));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
    }
//alert('currentob bank succes');
sessionStorage.setItem("driving_lica",JSON.stringify(driving_lica));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
}

if(qualification_id == '39' ){
      if(credential_deta !== undefined){
  if(supervisor_final_commanda !== undefined){
sessionStorage.setItem("credential_deta",JSON.stringify(credential_deta));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));

if(personal_deta !== undefined ){
   //alert(personal_deta+'sessionStorage');
       sessionStorage.setItem("personal_deta",JSON.stringify(personal_deta)); 
sessionStorage.setItem("credential_deta",JSON.stringify(credential_deta));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
    }
//alert('currentob bank succes');
sessionStorage.setItem("credential_deta",JSON.stringify(credential_deta));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
}

if(qualification_id == '65' ){
      if(identity_deta !== undefined){
  if(supervisor_final_commanda !== undefined){
sessionStorage.setItem("identity_deta",JSON.stringify(identity_deta));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));

if(personal_deta !== undefined ){
   //alert(personal_deta+'sessionStorage');
       sessionStorage.setItem("personal_deta",JSON.stringify(personal_deta)); 
sessionStorage.setItem("identity_deta",JSON.stringify(identity_deta));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
    }
//alert('currentob bank succes');
sessionStorage.setItem("identity_deta",JSON.stringify(identity_deta));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
}

if(qualification_id == '69' ){
      if(professional_deta !== undefined){
  if(supervisor_final_commanda !== undefined){
sessionStorage.setItem("professional_deta",JSON.stringify(professional_deta));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));

if(personal_deta !== undefined ){
   //alert(personal_deta+'sessionStorage');
       sessionStorage.setItem("personal_deta",JSON.stringify(personal_deta)); 
sessionStorage.setItem("professional_deta",JSON.stringify(professional_deta));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
    }
//alert('currentob bank succes');
sessionStorage.setItem("professional_deta",JSON.stringify(professional_deta));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
}

if(qualification_id == '66' ){
      if(bankruptcy_deta !== undefined){
  if(supervisor_final_commanda !== undefined){
sessionStorage.setItem("bankruptcy_deta",JSON.stringify(bankruptcy_deta));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));

if(personal_deta !== undefined ){
   //alert(personal_deta+'sessionStorage');
       sessionStorage.setItem("personal_deta",JSON.stringify(personal_deta)); 
sessionStorage.setItem("bankruptcy_deta",JSON.stringify(bankruptcy_deta));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
    }
//alert('currentob bank succes');
sessionStorage.setItem("bankruptcy_deta",JSON.stringify(bankruptcy_deta));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
}

if(qualification_id == '63' ){
      if(assest_inpro !== undefined){
  if(supervisor_final_commanda !== undefined){
sessionStorage.setItem("assest_inpro",JSON.stringify(assest_inpro));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));

if(personal_deta !== undefined ){
   //alert(personal_deta+'sessionStorage');
       sessionStorage.setItem("personal_deta",JSON.stringify(personal_deta)); 
sessionStorage.setItem("assest_inpro",JSON.stringify(assest_inpro));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
    }
//alert('currentob bank succes');
sessionStorage.setItem("assest_inpro",JSON.stringify(assest_inpro));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
}

if(qualification_id == '64' ){
      if(bank_inproa !== undefined){
  if(supervisor_final_commanda !== undefined){
sessionStorage.setItem("bank_inproa",JSON.stringify(bank_inproa));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));

if(personal_deta !== undefined ){
   //alert(personal_deta+'sessionStorage');
       sessionStorage.setItem("personal_deta",JSON.stringify(personal_deta)); 
sessionStorage.setItem("bank_inproa",JSON.stringify(bank_inproa));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
    }
//alert('currentob bank succes');
sessionStorage.setItem("bank_inproa",JSON.stringify(bank_inproa));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
}

if(qualification_id == '49' || qualification_id == '50' || qualification_id == '51' || qualification_id == '77' || qualification_id == '78' || qualification_id == '79'){
      if(servant_veria !== undefined){
  if(supervisor_final_commanda !== undefined){
sessionStorage.setItem("servant_veria",JSON.stringify(servant_veria));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));

if(personal_deta !== undefined ){
   //alert(personal_deta+'sessionStorage');
       sessionStorage.setItem("personal_deta",JSON.stringify(personal_deta)); 
sessionStorage.setItem("servant_veria",JSON.stringify(servant_veria));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
    }
//alert('currentob bank succes');
sessionStorage.setItem("servant_veria",JSON.stringify(servant_veria));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
}

if(qualification_id == '71' || qualification_id == '72' || qualification_id == '73' || qualification_id == '74' ){
      if(criminal_veria !== undefined){
  if(supervisor_final_commanda !== undefined){
sessionStorage.setItem("criminal_veria",JSON.stringify(criminal_veria));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));

if(personal_deta !== undefined ){
   //alert(personal_deta+'sessionStorage');
       sessionStorage.setItem("personal_deta",JSON.stringify(personal_deta)); 
sessionStorage.setItem("criminal_veria",JSON.stringify(criminal_veria));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
    }
//alert('currentob bank succes');
sessionStorage.setItem("criminal_veria",JSON.stringify(criminal_veria));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
}

if(qualification_id == '81' || qualification_id == '82' || qualification_id == '83' ){
      if(employgap_veria !== undefined){
  if(supervisor_final_commanda !== undefined){
sessionStorage.setItem("employgap_veria",JSON.stringify(employgap_veria));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));

if(personal_deta !== undefined ){
   //alert(personal_deta+'sessionStorage');
       sessionStorage.setItem("personal_deta",JSON.stringify(personal_deta)); 
sessionStorage.setItem("employgap_veria",JSON.stringify(employgap_veria));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
    }
//alert('currentob bank succes');
sessionStorage.setItem("employgap_veria",JSON.stringify(employgap_veria));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
}

if(qualification_id == '86' || qualification_id == '87' || qualification_id == '88' ){
      if(integrity_lifestylea !== undefined){
  if(supervisor_final_commanda !== undefined){
sessionStorage.setItem("integrity_lifestylea",JSON.stringify(integrity_lifestylea));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));

if(personal_deta !== undefined ){
   //alert(personal_deta+'sessionStorage');
       sessionStorage.setItem("personal_deta",JSON.stringify(personal_deta)); 
sessionStorage.setItem("integrity_lifestylea",JSON.stringify(integrity_lifestylea));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
    }
//alert('currentob bank succes');
sessionStorage.setItem("integrity_lifestylea",JSON.stringify(integrity_lifestylea));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
}

if(qualification_id == '89' || qualification_id == '90' || qualification_id == '91' || qualification_id == '92' || qualification_id == '93'){
      if(delinquent_veria !== undefined){
  if(supervisor_final_commanda !== undefined){
sessionStorage.setItem("delinquent_veria",JSON.stringify(delinquent_veria));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));

if(personal_deta !== undefined ){
   //alert(personal_deta+'sessionStorage');
       sessionStorage.setItem("personal_deta",JSON.stringify(personal_deta)); 
sessionStorage.setItem("delinquent_veria",JSON.stringify(delinquent_veria));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
    }
//alert('currentob bank succes');
sessionStorage.setItem("delinquent_veria",JSON.stringify(delinquent_veria));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
}

if(qualification_id == '75' ){
      if(edusalary_offa !== undefined){
  if(supervisor_final_commanda !== undefined){
sessionStorage.setItem("edusalary_offa",JSON.stringify(edusalary_offa));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));

if(personal_deta !== undefined ){
   //alert(personal_deta+'sessionStorage');
       sessionStorage.setItem("personal_deta",JSON.stringify(personal_deta)); 
sessionStorage.setItem("edusalary_offa",JSON.stringify(edusalary_offa));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
    }
//alert('currentob bank succes');
sessionStorage.setItem("edusalary_offa",JSON.stringify(edusalary_offa));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
}

if(qualification_id == '76' ){
      if(edusalary_edua !== undefined){
  if(supervisor_final_commanda !== undefined){
sessionStorage.setItem("edusalary_edua",JSON.stringify(edusalary_edua));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));

if(personal_deta !== undefined ){
   //alert(personal_deta+'sessionStorage');
       sessionStorage.setItem("personal_deta",JSON.stringify(personal_deta)); 
sessionStorage.setItem("edusalary_edua",JSON.stringify(edusalary_edua));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
    }
//alert('currentob bank succes');
sessionStorage.setItem("edusalary_edua",JSON.stringify(edusalary_edua));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
}

if(qualification_id == '85' ){
      if(integrity_lifestyle_pera !== undefined){
  if(supervisor_final_commanda !== undefined){
sessionStorage.setItem("integrity_lifestyle_pera",JSON.stringify(integrity_lifestyle_pera));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));

if(personal_deta !== undefined ){
   //alert(personal_deta+'sessionStorage');
       sessionStorage.setItem("personal_deta",JSON.stringify(personal_deta)); 
sessionStorage.setItem("integrity_lifestyle_pera",JSON.stringify(integrity_lifestyle_pera));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
    }
//alert('currentob bank succes');
sessionStorage.setItem("integrity_lifestyle_pera",JSON.stringify(integrity_lifestyle_pera));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
}

if(qualification_id == '80' ){
      if(servant_educa !== undefined){
  if(supervisor_final_commanda !== undefined){
sessionStorage.setItem("servant_educa",JSON.stringify(servant_educa));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));

if(personal_deta !== undefined ){
   //alert(personal_deta+'sessionStorage');
       sessionStorage.setItem("personal_deta",JSON.stringify(personal_deta)); 
sessionStorage.setItem("servant_educa",JSON.stringify(servant_educa));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
    }
//alert('currentob bank succes');
sessionStorage.setItem("servant_educa",JSON.stringify(servant_educa));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
}


}