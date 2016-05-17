$(document).on('pageshow', '#primarymessage', function(){  
//alert('updateactivitya 222');
$('#chatr').empty();



$('.upload-statusbar').remove();
$('.ajax-upload-dragdrop').remove();

$('#intlife').hide();
$('.uii').hide();
$.mobile.loading("hide");
/*var status_val_inpro = $('input:radio[name=radio-choice-a]:checked').val();
alert(status_val_inpro);

if(status_val_inpro == 'Verified'){

$("#radio-choice-ab").attr('checked', 'checked');
}*/


assignValues();


$(document).off('click', '#dashinsy').on('click', '#dashinsy', function() {

  $.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

$(document).off('click', '#inprogressinsy').on('click', '#inprogressinsy', function() {

  $.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

$(document).off('click', '#verifiedinsy').on('click', '#verifiedinsy', function() {

  $.mobile.changePage($('#supervisor_verified_list'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

$(document).off('click', '#not_verifiedinsy').on('click', '#not_verifiedinsy', function() {

  $.mobile.changePage($('#supervisor_list_notveri'), { transition: "none", changeHash: true, reverse: false });
  return false;
});


$(document).off('click', '#completedinsy').on('click', '#completedinsy', function() {

  $.mobile.changePage($('#supervisor_completed_list'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

$(document).off('click', '#signoutinsy').on('click', '#signoutinsy', function() {
  sessionStorage.clear(); 
  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

$(document).off('click', '#before_new_listupa').on('click', '#before_new_listupa', function() {
  $.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

$(document).off('click', '#inprobj').on('click', '#inprobj', function() {
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#chatSendButtoncancel').on('click', '#chatSendButtoncancel', function() {

$.mobile.changePage($('#primarymessage'), { transition: "none", changeHash: true, reverse: false });
return false;

});

});






function assignValues(){

  region_array = JSON.parse(sessionStorage.getItem("regionArray"));
  superArray_array =  JSON.parse(sessionStorage.getItem("supervisor_view_new_veri_array"));
  user_obja = JSON.parse(sessionStorage.getItem("currentobj_inpro"));
  supervisor_activity_log_array = JSON.parse(sessionStorage.getItem("supervisor_activity_log_array"));
    sh_eeem_array = JSON.parse(sessionStorage.getItem("sh_eeem_array"));

  var coordinator_id = user_obja.coordinator_id;

  var verification_user_id = user_obja.verification_user_id;

  var qualification_id=user_obja.qualification_id;

//alert(qualification_id+'for int');

  regionArray_array =  JSON.parse(sessionStorage.getItem("regionArray"));
  var region=regionArray_array.region;
  var user_id=regionArray_array.user_id;
  var state=regionArray_array.state;
//alert(region_num);
username=regionArray_array.username;
//alert(username);

for(a=0;a<sh_eeem_array.length;a++){
 sh_eeem_array = sh_eeem_array[a];
 eeemail=sh_eeem_array.E_Mail;
  Username_state_head=sh_eeem_array.Username
  }
username=regionArray_array.username;
username_tvo=regionArray_array.username;

//alert(eeemail+'eeemailcdds');
typofver=user_obja.taskname;
pertobever=user_obja.First_Name;
pertobeverlast=user_obja.Last_Name;
task=user_obja.qualification_name
//alert(username+'username');
//alert(typofver+'typofver');
//alert(pertobever+'pertobever');
//alert(pertobeverlast+'pertobeverlast');
//alert(task+'task');
//alert(eeemail+'eeemail');

$("#userlistinsohh").text(username);

$('#named').text(user_obja.First_Name+user_obja.Last_Name );
$('#locv').text(user_obja.state);

var status_val_inpro = $('input:radio[name=radio-choice-a]:checked').val();
//alert(status_val_inpro+'status_val_inpro');

if(qualification_id == '84' || qualification_id == '85'|| qualification_id == '86' || qualification_id == '87' || qualification_id == '88' ){
//alert('84 85 86 87 88');
if(status_val_inpro != 'Inprogress' ){
  //alert('Inprogress not');
  //alert(qualification_id+'for int inside tru');
  $('#intlife').show();

}else{
   $('#intlife').hide();
}
}


//radio button show int start
var status_val_inpro = $('input:radio[name=radio-choice-a]:checked').val();
//alert(status_val_inpro);
if(status_val_inpro == 'Inprogress'){
$('.verinot').hide(); 
$('.chatshowhide').show();
}
if(status_val_inpro == 'Verified' || status_val_inpro == 'Notverified' ){
$('.verinot').show();
$('.chatshowhide').hide();

}
/*$(document).off('click', '#veriu').on('click', '#veriu', function() {
  alert('1');
$('.verinot').show();
});

$(document).off('click', '#veriunot').on('click', '#veriunot', function() {
$('.verinot').show();
});*/
$( '#radio-choice-ab' ).click(function() {
$('.verinot').hide();
$('.chatshowhide').show();
$('#intlife').hide();
});

$( '#radio-choice-bb' ).click(function() {
  //alert('clicked verify true bbbbbbb'+qualification_id);

if(qualification_id == '84' || qualification_id == '85' || qualification_id == '86' || qualification_id == '87' || qualification_id == '88' ){
  //alert(qualification_id+'clcik verify true button');
  $('#intlife').show();
}else{
$('#intlife').hide();
}
$('.verinot').show();
$('.chatshowhide').hide();
});

$( '#radio-choice-cb' ).click(function() {
  //alert('clicked verify false cccccccc'+qualification_id);
if(qualification_id == '84' || qualification_id == '85' || qualification_id == '86' || qualification_id == '87' || qualification_id == '88' ){
  //alert(qualification_id+'clcik verify false button');
  $('#intlife').show();
}else{
$('#intlife').hide();
}
$('.verinot').show();
$('.chatshowhide').hide();
});
//radio button show int end

//alert(supervisor_activity_log_array+'super log');

//alert(qualification_id+'qualification_id');
//alert(verification_user_id+'verification_user_id');

for(a=0;a<supervisor_activity_log_array.length;a++){

  activity_lok_obj = supervisor_activity_log_array[a];

  idf=activity_lok_obj.verification_id;
  text=activity_lok_obj.activity_log;
  image=activity_lok_obj.document;
  status=activity_lok_obj.status;
  type=activity_lok_obj.type;
  date_new=activity_lok_obj.log_date;

    First_Name=activity_lok_obj.First_Name;

  var s = date_new;
  var bits = s.split(/\D/);
  var datea = new Date(bits[0], --bits[1], bits[2], bits[3], bits[4]);
//alert(date);
var date=datea.getDate()+'/'+parseInt(datea.getMonth() + 1)+'/'+datea.getFullYear();
var time=datea.getHours()+':'+datea.getMinutes();


if(idf == verification_user_id && type == qualification_id ){
/*
alert(qualification_id+'qualification_id iiiiiiiiiiiiinnnnnnnnn'+type+'type');
alert(verification_user_id+'verification_user_id iiiiiinnnn'+idf+'idf');*/

//alert(date+'2');
if(status == 'supervisor' && text !==''){
//alert('supervisor');

//var chatr='<div class="ui-grid-b" style="padding-top:5%;"><div class="ui-block-a msg_grid_3"><span class="msg_span_3">'+date+'</span> <br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;    padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3">'+time+'</span></div><div class="ui-block-b msg_grid_4">  <p class="msg_box msg_mid_bg">'+activity_lok_obj.activity_log+'</p></div><div class="ui-block-c msg_grid_5"><img src="images/primary/chat-icon.png" alt="" style="padding: 0px 2px 1px 18px;"><p style="float: right;margin-right: 25px;margin-top: -5px;color:#54566B">hari</p></div></div> '
//var chatr='<div class="ui-grid-b" style="padding-top:5%;"><div class="ui-block-a msg_grid_3"><span class="msg_span_3">'+date+'</span> <br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;    padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3 msg_span_3_new">'+time+'</span></div><div class="ui-block-b msg_grid_4">  <p class="msg_box msg_mid_bg">'+activity_lok_obj.activity_log+'</p></div><div class="ui-block-c msg_grid_5 msg_grid_5_c"><img src="images/primary/chat-icon.png" alt="" class="msg_img_new" ><p style="" class="">TVO</p></div></div>'
//var chatr=' <div class="ui-grid-b" style="padding-top:5%;"><div class="ui-block-a msg_grid_3"><span class="msg_span_3">'+date+'</span> <br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;    padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3">'+time+'</span><a href="#"  class="delete" id="'+activity_lok_obj.activity_log_id+'"><img src="images/primary/delete_icon1.png"  class="msgg_delete_icon" alt="" ></a></div><div class="ui-block-b msg_grid_4">  <p class="msg_box msg_mid_bg">'+activity_lok_obj.activity_log+' </p></div><div class="ui-block-c msg_grid_5"><img src="images/primary/chat-icon.png" alt="" class="p_img_grid" style="width:80px;"><br><p class="p_msg_grid">'+username_tvo+'</p></div></div> '
var chatr=' <div class="ui-grid-b" style="padding-top:5%;"><div class="ui-block-a msg_grid_3" style="margin-top:-12px;padding:5px"><span class="msg_span_3">'+date+'</span> <br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;    padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3">'+time+'</span><a href="#"  class="delete" id="'+activity_lok_obj.activity_log_id+'"><img src="images/primary/delete_icon1.png"  class="msgg_delete_icon" alt="" ></a></div><div class="ui-block-b msg_grid_4">  <p class="msg_box msg_mid_bga">'+activity_lok_obj.activity_log+' </p></div><div class="ui-block-c msg_grid_5"><img src="images/primary/chat-icona.png" alt="" class="p_img_grid" style="width:80px;"><br><p class="p_msg_grid">'+username_tvo+'</p></div></div> '

$('#chatr').append(chatr);
}
if(status == 'doc' && image !==''){
//alert('doc');

//var chatr='<div class="ui-grid-b" style="padding-top:5%;padding-bottom:5%"><div class="ui-block-a msg_grid_3"><span class="msg_span_3">'+date+'</span> <br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;    padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3">'+time+'</span></div><div class="ui-block-b msg_grid_4">  <p class="msg_box msg_mid_bgg"><img src="http://staging.eimpressive.com/fourthforce/super/'+activity_lok_obj.document+'" style="width:100px;height:80px;margin-left:25%" alt="Band"></p></div><div class="ui-block-c msg_grid_5"><img src="images/primary/chat-icon.png" alt="" style="padding: 0px 2px 1px 18px;"><p style="float: right;margin-right: 25px;margin-top: -5px;color:#54566B">hari</p></div></div>  '
//var chatr='<div class="ui-grid-b" style="padding-top:5%;padding-bottom:5%"><div class="ui-block-a msg_grid_3"><span class="msg_span_3">'+date+'</span> <br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;    padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3 msg_span_3_new">'+time+'</span></div><div class="ui-block-b msg_grid_4">  <p class="msg_box msg_mid_bgg"><img src="http://staging.eimpressive.com/fourthforce/super/'+activity_lok_obj.document+'" style="width:100px;height:80px;margin-left:25%" alt="Band"></p></div><div class="ui-block-c msg_grid_5 msg_grid_5_c"><img src="images/primary/chat-icon.png" alt="" class=""><p class="">TVO</p></div></div>'
var chatr='<br><div class="ui-grid-b"  id="image"><div class="ui-block-a msg_grid_3" style="margin-top: 6%;"> <i class="zmdi zmdi-time zmd-fw" style="    opacity: 0.5; padding-left:7%;"></i><span class="msg_span_3">'+time+'</span><br><span class="msg_span_3">'+date+'</span><a href="#"  class="delete" id="'+activity_lok_obj.activity_log_id+'"><img src="images/primary/delete_icon1.png"  class="img_delete_icon" alt="" ></a>  </div><div class="ui-block-b msg_box msg_grid_4 msg_mid_bgg"><p class="msg_grid_p_1 "><a href="#popupPhotoPortrait" data-rel="popup" data-position-to="window" class="ui-btn ui-corner-all ui-shadow ui-btn-inline im" data-transition="fade" id="'+activity_lok_obj.document+'"><img src="http://staging.eimpressive.com/fourthforce/super/'+activity_lok_obj.document+'"  class="imgsize imguirot" alt="" ></a></p></div><div class="ui-block-c msg_grid_5 msg_grid_5_1"><img src="images/primary/chat-icona.png" alt="" class="p_img_grid" style="width:80px;"><br><p class="p_msg_grid">'+username_tvo+'</p></div></div> '

$('#chatr').append(chatr);
}

if(status == 'cor'){

//var chatr='<div class="ui-grid-b" style="padding-top:4%;"><div class="ui-block-a msg_grid_3"><img src="images/primary/chat-icon.png" alt="" style="    padding: 10px 2px 1px 18px;"><p style=" margin-left: 15px;margin-top: -5px;color:#54566B">STATE HEAD</p></div><div class="ui-block-b msg_grid_4"> <p class="msg_box  tip">'+activity_lok_obj.activity_log+' </p><br> </div><div class="ui-block-c msg_grid_5 msg_grid_sudeep"> <span class="msg_span_3 ">'+date+'</span><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:17%;padding-top: 7%;margin-top:-10px"></i><span class="msg_sudeep">'+time+'</span></div></div>'
var chatr='<br><div class="ui-grid-b" style="padding-top:1%;"><div class="ui-block-a msg_grid_3"><img src="images/primary/chat-icon.png" alt="" style="width:80px;"   padding: 10px 2px 1px 18px;"><p style=" margin-left: 15px;margin-top: -5px;color:#1259BF">'+First_Name+'</p></div><div class="ui-block-b msg_grid_4"> <p class="msg_box  tip">'+activity_lok_obj.activity_log+'   </p><br> </div><div class="ui-block-c msg_grid_5 ms55"> <span class="msg_span_33">'+date+'</span><br><i class="zmdi zmdi-time zmd-fw ii" ></i><span class="msg_span_3">'+time+'</span></div></div>'

$('#chatr').append(chatr);
}

if(status == 'rh'){
var chatr='<br><div class="ui-grid-b" style="padding-top:1%;"><div class="ui-block-a msg_grid_3"><img src="images/primary/chat-iconb.png" alt="" style="width:80px;"   padding: 10px 2px 1px 18px;"><p style=" margin-left: 15px;margin-top: -5px;color:#6A7D1B">'+First_Name+'</p></div><div class="ui-block-b msg_grid_4"> <p class="msg_box  tippo">'+activity_lok_obj.activity_log+'   </p><br> </div><div class="ui-block-c msg_grid_5 ms55"> <span class="msg_span_33">'+date+'</span><br><i class="zmdi zmdi-time zmd-fw ii" ></i><span class="msg_span_3">'+time+'</span></div></div>'

$('#chatr').append(chatr);
}

}



}

$(".im").click(function(){
  $('.imj').empty();
var element = $(this);
var img_id = element.attr("id");
//alert(img_id+'asdasdw');
var imz='<a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right" style="background-color:#BC3217;width:50px;height: 50px;">Close</a><img src="http://staging.eimpressive.com/fourthforce/super/'+img_id+'" alt="Photo portrait" class="imgzz imguirot">'
$('.imj').append(imz);
});

$(".delete").click(function(){
var element = $(this);
var del_id = element.attr("id");
//alert(del_id+'del_id');
if(confirm("Are you sure you want to delete this?")){
$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});

var formData = $("#callAjaxForm").serialize();
//alert('drop button value insert 84 85');
$.ajax({
  type: "POST",
  url: "http://staging.eimpressive.com/slim/slim_four_ripsssjs/delete.php?del_id="+del_id,

  data: formData,
  success: onSuccess,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onError
});
}

});




//upload a file to server once onchange is detected
$('#pgAddBookBookImage').on('change', function () {
  $('#chatSendButton').hide();
  $('.uii').show();
  $(".ui-icon-loading").show();
$.mobile.loading("show", {
text: "Loading file...",
textVisible: true
});

//check to see if we have a file
var fName = document.getElementById('pgAddBookBookImage').files[0];

if (typeof (fName) === 'undefined') fName = '';

//get the file name
var ofName = fName.name;
//get the file extension
//alert(ofName+'fname');
//var ofExt = Mid(ofName, InStrRev(ofName, '.'));
// open a file reader to upload the file to the server
var reader = new FileReader();
// once the file reader has loaded the file contents
reader.onload = function() {
// get the dataURL of the file, a base 64 decoded string
var dataURL = reader.result;
//save the file to the server
var req = Ajax("http://staging.eimpressive.com/watchguardlive/savepng.php", "POST", "file=" + ofName + "&content=" + dataURL);

if (req.status == 200) {
// return the full path of the saved file
//alert('200');
  $('.uii').show();
  $(".ui-icon-loading").show();
$.mobile.loading("show", {
text: "Loading file...",
textVisible: true
});
fName = req.responseText;
//alert(fName+'fname');
$('#pgAddBookImagePreview').attr('src', dataURL);
//show a toast message that the file has been uploaded
/*$(".ui-icon-loading").show();
$.mobile.loading("show", {
text: "Loading file...",
textVisible: true
});*/
//alert('file has been uploaded');
//toastr.success(ofName + ' file uploaded.', 'Library');
}else {
// return a blank file name
fName = req.responseText;
  $('.uii').show();
  $(".ui-icon-loading").show();
$.mobile.loading("show", {
text: "Loading file...",
textVisible: true
});
//alert(fName+'fname not uploaded');
/*$(".ui-icon-loading").show();
$.mobile.loading("show", {
text: "Loading file...",
textVisible: true
});*/
//alert('file has been uploaded');
//alert(fName+'fname not been upload');
//show a toast message that the file has not been uploaded
//alert('show a toast message that the file has not been uploaded');
//toastr.error(ofName + ' file NOT uploaded.', 'Library');
}
//set the file name to store later
$('#pgAddBookBookImage').data('file', fName);
$(".ui-icon-loading").hide();
$.mobile.loading("hide");
$('.uii').hide();
$('#chatSendButton').show();

};
// start reading the file contents
reader.readAsDataURL(fName);

/*$.mobile.loading("hide");*/
});

function Ajax(URL, method, data, callback) {
  if (typeof(method) !== 'object') {
    var settings = new Object;
    if(!method || method === null || typeof(method) === 'undefined') method = "GET";
    settings.type = method.toUpperCase()
    if(!data || data === null || typeof(data) === 'undefined') data = "";
    settings.data = data;
    if (!callback) {
      settings.async = false;
      } else {
      settings.success = callback;
    settings.fail = callback}
  }
  return $.ajax(URL, settings);
}

function onSuccess(data, status)
{
  //alert(data);

  //var sdocument=$('input[type=file]').val('');
  //alert(sdocument);
  sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(data));

  currentobj_log_inpro =  JSON.parse(sessionStorage.getItem("supervisor_activity_log_array"));

  $('#chatr').empty();

  for(a=0;a<currentobj_log_inpro.length;a++){

    activity_lok_obj = currentobj_log_inpro[a];

    text=activity_lok_obj.activity_log;
    image=activity_lok_obj.document;
    status=activity_lok_obj.status;
    date_new=activity_lok_obj.log_date;

      type=activity_lok_obj.type;
  idf=activity_lok_obj.verification_id;


    First_Name=activity_lok_obj.First_Name;
    
    var s = date_new;
    var bits = s.split(/\D/);
    var datea = new Date(bits[0], --bits[1], bits[2], bits[3], bits[4]);
//alert(date);
var date=datea.getDate()+'/'+parseInt(datea.getMonth() + 1)+'/'+datea.getFullYear();
var time=datea.getHours()+':'+datea.getMinutes();
//alert(date+'2');
//alert(verification_user_id+'verification_user_id'+'qualification_id'+qualification_id);
if(idf == verification_user_id && type == qualification_id ){
if(status == 'supervisor' && text !==''){
//alert('supervisor');

//var chatr=' <div class="ui-grid-b" style="padding-top:5%;"><div class="ui-block-a msg_grid_3"><span class="msg_span_3">'+date+'</span> <br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;    padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3">'+time+'</span></div><div class="ui-block-b msg_grid_4">  <p class="msg_box msg_mid_bg">'+activity_lok_obj.activity_log+' </p></div><div class="ui-block-c msg_grid_5"><img src="images/primary/chat-icon.png" alt="" class="p_img_grid" style="width:80px;"><br><p class="p_msg_grid">Tvo</p></div></div> '
var chatr=' <div class="ui-grid-b" style="padding-top:5%;"><div class="ui-block-a msg_grid_3" style="margin-top:-12px;padding:5px"><span class="msg_span_3">'+date+'</span> <br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;    padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3">'+time+'</span><a href="#"  class="delete" id="'+activity_lok_obj.activity_log_id+'"><img src="images/primary/delete_icon1.png"  class="msgg_delete_icon" alt="" ></a></div><div class="ui-block-b msg_grid_4">  <p class="msg_box msg_mid_bga">'+activity_lok_obj.activity_log+' </p></div><div class="ui-block-c msg_grid_5"><img src="images/primary/chat-icona.png" alt="" class="p_img_grid" style="width:80px;"><br><p class="p_msg_grid">'+username_tvo+'</p></div></div> '

$('#chatr').append(chatr);
}

if(status == 'doc' && image !==''){
//alert('doc');
//var chatr='<div class="ui-grid-b"  id="image"><div class="ui-block-a msg_grid_3" style="margin-top: 6%;"> <i class="zmdi zmdi-time zmd-fw" style="    opacity: 0.5; padding-left:7%;"></i><span class="msg_span_3">'+time+'</span><br><span class="msg_span_3">'+date+'</span>  </div><div class="ui-block-b msg_box msg_grid_4 msg_mid_bgg"><p class="msg_grid_p_1 "><a href="#"  class=""><img src="http://staging.eimpressive.com/fourthforce/super/'+activity_lok_obj.document+'" style="width:100px;height:80px;margin-left:25%" alt="Band"></a></p></div><div class="ui-block-c msg_grid_5 msg_grid_5_1"><img src="images/use.png" alt="" class="p_img_grid" style="width:80px;"><br><p class="p_msg_grid">Tvo</p></div></div> '
//var chatr='<br><div class="ui-grid-b"  id="image"><div class="ui-block-a msg_grid_3" style="margin-top: 6%;"> <i class="zmdi zmdi-time zmd-fw" style="    opacity: 0.5; padding-left:7%;"></i><span class="msg_span_3">'+time+'</span><br><span class="msg_span_3">'+date+'</span><a href="#"  class="delete" id="'+activity_lok_obj.activity_log_id+'"><img src="images/primary/delete_icon1.png"  class="img_delete_icon" alt="" ></a>  </div><div class="ui-block-b msg_box msg_grid_4 msg_mid_bgg"><p class="msg_grid_p_1 "><a href="#popupPhotoPortrait" data-rel="popup" data-position-to="window" class="ui-btn ui-corner-all ui-shadow ui-btn-inline im" data-transition="fade" id="'+activity_lok_obj.activity_log_id+'"><img src="http://staging.eimpressive.com/fourthforce/super/'+activity_lok_obj.document+'"  class="imgsize" alt="" ></a></p></div><div class="ui-block-c msg_grid_5 msg_grid_5_1"><img src="images/primary/chat-icon.png" alt="" class="p_img_grid" style="width:80px;"><br><p class="p_msg_grid">'+username_tvo+'</p></div></div> '
var chatr='<br><div class="ui-grid-b"  id="image"><div class="ui-block-a msg_grid_3" style="margin-top: 6%;"> <i class="zmdi zmdi-time zmd-fw" style="    opacity: 0.5; padding-left:7%;"></i><span class="msg_span_3">'+time+'</span><br><span class="msg_span_3">'+date+'</span><a href="#"  class="delete" id="'+activity_lok_obj.activity_log_id+'"><img src="images/primary/delete_icon1.png"  class="img_delete_icon" alt="" ></a>  </div><div class="ui-block-b msg_box msg_grid_4 msg_mid_bgg"><p class="msg_grid_p_1 "><a href="#popupPhotoPortrait" data-rel="popup" data-position-to="window" class="ui-btn ui-corner-all ui-shadow ui-btn-inline im" data-transition="fade" id="'+activity_lok_obj.document+'"><img src="http://staging.eimpressive.com/fourthforce/super/'+activity_lok_obj.document+'"  class="imgsize imguirot" alt="" ></a></p></div><div class="ui-block-c msg_grid_5 msg_grid_5_1"><img src="images/primary/chat-icona.png" alt="" class="p_img_grid" style="width:80px;"><br><p class="p_msg_grid">'+username_tvo+'</p></div></div> '

$('#chatr').append(chatr);
}

if(status == 'cor'){
//alert(activity_lok_obj.activity_log);
//var chatr='<div class="ui-grid-b" style="padding-top:1%;"><div class="ui-block-a msg_grid_3"><img src="images/primary/chat-icon-state.png" alt="" style="width:80px;"   padding: 10px 2px 1px 18px;"><p style=" margin-left: 15px;margin-top: -5px;color:#54566B">State Head</p></div><div class="ui-block-b msg_grid_4"> <p class="msg_box  tip">'+activity_lok_obj.activity_log+'   </p><br> </div><div class="ui-block-c msg_grid_5"> <span class="msg_span_3">'+date+'</span><br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3">'+time+'</span></div></div>'
var chatr='<br><div class="ui-grid-b" style="padding-top:1%;"><div class="ui-block-a msg_grid_3"><img src="images/primary/chat-icon.png" alt="" style="width:80px;"   padding: 10px 2px 1px 18px;"><p style=" margin-left: 15px;margin-top: -5px;color:#1259BF">'+First_Name+'</p></div><div class="ui-block-b msg_grid_4"> <p class="msg_box  tip">'+activity_lok_obj.activity_log+'   </p><br> </div><div class="ui-block-c msg_grid_5"> <span class="msg_span_3">'+date+'</span><br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3">'+time+'</span></div></div>'

$('#chatr').append(chatr);
}

if(status == 'rh'){
var chatr='<br><div class="ui-grid-b" style="padding-top:1%;"><div class="ui-block-a msg_grid_3"><img src="images/primary/chat-iconb.png" alt="" style="width:80px;"   padding: 10px 2px 1px 18px;"><p style=" margin-left: 15px;margin-top: -5px;color:#6A7D1B">'+First_Name+'</p></div><div class="ui-block-b msg_grid_4"> <p class="msg_box  tippo">'+activity_lok_obj.activity_log+'   </p><br> </div><div class="ui-block-c msg_grid_5 ms55"> <span class="msg_span_33">'+date+'</span><br><i class="zmdi zmdi-time zmd-fw ii" ></i><span class="msg_span_3">'+time+'</span></div></div>'

$('#chatr').append(chatr);
}

}
}

$(".im").click(function(){
  $('.imj').empty();
var element = $(this);
var img_id = element.attr("id");
//alert(img_id+'asdasdw');
//var imz='<a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right" style="background-color:#3F4150;width:50px;height: 50px;">Close</a><img src="images/primary/Screenshot.png" alt="Photo portrait" class="imgzz">'
var imz='<a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right" style="background-color:#BC3217;width:50px;height: 50px;">Close</a><img src="http://staging.eimpressive.com/fourthforce/super/'+img_id+'" alt="Photo portrait" class="imgzz imguirot">'

$('.imj').append(imz);
});

$(".delete").click(function(){
var element = $(this);
var del_id = element.attr("id");
//alert(del_id+'del_id');
if(confirm("Are you sure you want to delete this?")){
$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});

var formData = $("#callAjaxForm").serialize();
//alert('drop button value insert 84 85');
$.ajax({
  type: "POST",
  url: "http://staging.eimpressive.com/slim/slim_four_ripsssjs/delete.php?del_id="+del_id,

  data: formData,
  success: onSuccess,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onError
});
}
});

}

function onError(data, status)
{
alert("Network error: Please check your internet connection");
}        

var settings = {

  url: "http://staging.eimpressive.com/fourthforce/uploadas.php",
  method: "POST",
  allowedTypes:"jpg,png,gif",
  /*allowedTypes:"jpg,png,gif,doc,pdf,zip",*/
  fileName: "myfile",
  multiple: true,
  
  onSuccess:function(files,data,xhr)
  {
    //alert('success');
    sessionStorage.setItem("ret",JSON.stringify(data));
    ret =  JSON.parse(sessionStorage.getItem("ret"));
    //var res = ret.slice(12,100); //fourth
    var res = ret.slice(137,300); //stage
   // alert(res+'res');
   //alert(verification_user_id+'verification_user_id');
      //alert(coordinator_id+'coordinator_id');
         //alert(res+'res');
          // alert(qualification_id+'qualification_id');

$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});

var formData = $("#callAjaxForm").serialize();

$.ajax({
  type: "POST",
url: "http://staging.eimpressive.com/slim/slim_four_ripsssjs/sdoc.php?verification_user_id="+verification_user_id+"&coordinator_id="+coordinator_id+"&res="+res+"&qualification_id="+qualification_id+"&user_id="+user_id,

  data: formData,
  success: onSuccess,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onError
});

    $("#status").html("<font color='green'>Upload is success</font>");
    
  },
    afterUploadAll:function()
    {
       // alert("all images uploaded!!");
    },
  onError: function(files,status,errMsg)
  {   
    $("#status").html("<font color='red'>Upload is Failed</font>");
  }
}
$("#mulitplefileuploader").uploadFile(settings);


    

$(document).off('click', '#chatSendButton').on('click', '#chatSendButton', function() { 

   /*$("#myPopupr").hide();*/
//alert("but pressed");
/*  var $element = $('.upload-filename').html();
    alert($element +'element');*/

/*$('.upload').empty();   */

/*var x = document.getElementById("myFile").value;*/

var remarkg=document.getElementById('remarkg').value;

//alert(remarkg+'remarkg');

var loginistant=document.getElementById('messageText').value;

var status_val_inpro = $('input:radio[name=radio-choice-a]:checked').val();
//var status_val_inpro='Inprogress';
//alert(status_val_inpro +'status');
//var sdocument=$('input[type=file]').val().split('\\').pop();



//alert(sdocument+' submit');

var inte=document.getElementById('inte').value;
//alert(inte+'inte 1');
var inte_rat=document.getElementById('inte_rat').value;
//alert(inte_rat+'inte_rat 1 b');
var beh=document.getElementById('beh').value;
//alert(beh+'beh 2 a');
var beh_rat=document.getElementById('beh_rat').value;
//alert(beh_rat+'beh_rat 2 b');
var hab=document.getElementById('hab').value;
//alert(hab+'hab 3 ');
var hab_rat=document.getElementById('hab_rat').value;
//alert(hab_rat+'hab_rat 3 b');


if(loginistant == '' ){
if(remarkg != ''  && status_val_inpro != 'Inprogress'){

//alert(hab_rat+'hab_rat'+qualification_id);
$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});

var formData = $("#callAjaxForm").serialize();

//alert(status_val_inpro+'status_val_inpro');
//alert(typofver+'typofver');
//alert(pertobever+'pertobever');
//alert(pertobeverlast+'pertobeverlast');
//alert(task+'task');
//alert(eeemail+'eeemail');
 

$.ajax({
  type: "POST",
  url: "http://staging.eimpressive.com/slim/slim_four_ripsssjs/chat.php?loginistant="+loginistant+"&verification_user_id="+verification_user_id+"&coordinator_id="+coordinator_id+"&status_val_inpro="+status_val_inpro+"&remarkg="+remarkg+"&qualification_id="+qualification_id+"&username="+username+"&typofver="+typofver+"&pertobever="+pertobever+"&pertobeverlast="+pertobeverlast+"&task="+task+"&eeemail="+eeemail+"&user_id="+user_id,

  data: formData,
  success: onSuccess,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onError
});
}else{
  alert('fill up the empty field');
}
}

if(loginistant == ''  ){
  if(qualification_id == '84' || qualification_id == '85' || qualification_id == '86' || qualification_id == '87' || qualification_id == '88' ){
if(status_val_inpro != 'Inprogress' && inte != 'Select Reference' && inte_rat != 'Select Rating' && beh !='Select Reference' && beh_rat != 'Select Rating' && hab !='Select Reference' && hab_rat != 'Select Rating'){

$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});

var formData = $("#callAjaxForm").serialize();
//alert('drop button value insert 84 85');
$.ajax({
  type: "POST",
  url: "http://staging.eimpressive.com/slim/slim_four_ripsssjs/lifeint.php?verification_user_id="+verification_user_id+"&coordinator_id="+coordinator_id+"&qualification_id="+qualification_id+"&inte="+inte+"&inte_rat="+inte_rat+"&beh="+beh+"&beh_rat="+beh_rat+"&hab="+hab+"&hab_rat="+hab_rat,

  data: formData,
  success: onSuccess,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onError
});
}
}
}



if(loginistant != '' && status_val_inpro == 'Inprogress'){



$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});

//alert(sdocument+'sdocument'+'save typed msg');
var formData = $("#callAjaxForm").serialize();
//alert('updateactivitya msg');
$.ajax({
  type: "POST",
url: "http://staging.eimpressive.com/slim/slim_four_ripsssjs/chat.php?loginistant="+loginistant+"&verification_user_id="+verification_user_id+"&coordinator_id="+coordinator_id+"&status_val_inpro="+status_val_inpro+"&remarkg="+remarkg+"&qualification_id="+qualification_id+"&username="+username+"&typofver="+typofver+"&pertobever="+pertobever+"&pertobeverlast="+pertobeverlast+"&task="+task+"&eeemail="+eeemail+"&user_id="+user_id,

  data: formData,
  success: onSuccess,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onError
});

}



if(status_val_inpro == 'Inprogress'){
  document.getElementById('messageText').value = "";
document.getElementById('remarkg').value = "";
 $.mobile.changePage($('#primarymessage'), { transition: "none", changeHash: true, reverse: false });
return false;
}

if(remarkg != ''  && status_val_inpro != 'Inprogress' ){ 
//alert('dads');
  document.getElementById('messageText').value = "";
document.getElementById('remarkg').value = "";
  //alert(region_num);
  //$("input[type='radio']:first").attr("checked", "checked");
//alert(region);
//alert(user_id);

 alert('Verification Record Submitted Successfully');
//alert('Verification Record Submitted Successfully bfr sdsdf');
// $('#myPopupr').hide();
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

 //alert('Verification Record Submitted Successfully');

      $.mobile.loading().hide();
     
      $.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
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

});




}
