; // Requires jQuery 1.9.1
//Creates and add the styles for the top bar and the modal
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = 'body {    padding: 0px; margin: 0px; } #fbModal {    padding-right: 0 !important;}.modal-open .modal {    overflow-x: hidden;    overflow-y: auto;}.fade.in {    opacity: 1;}.modal {    text-align: center;    padding: 0 !important;    padding-right: 0px;}.modal {    position: fixed;    top: 80px;    right: 0;    bottom: 0;    left: 0;    z-index: 1050;    display: none;    overflow: hidden;    -webkit-overflow-scrolling: touch;    outline: 0;}.modal-dialog {    display: inline-block;    text-align: left;    vertical-align: middle;    width: 300px;}.modal-dialog {    margin: 30px auto;}.modal-content {    box-shadow: 0 5px 15px rgba(0,0,0,.5);}.modal-content {    position: relative;    background-color: #fff;    background-clip: padding-box;    border: 1px solid #999;    border: 1px solid rgba(0,0,0,.2);    border-radius: 6px;    outline: 0;    box-shadow: 0 3px 9px rgba(0,0,0,.5);}.modal-body {    position: relative;    padding: 15px;}.form-group {    margin-bottom: 15px;}.modal-dialog {    text-align: left;}#fbModal form button {    background-color: #4f6aa3;    color: #fff;    font-family: \'Open Sans\', sans-serif;    font-size: 17px;    border: none;    text-transform: capitalize;    border-radius: 4px;    display: block;    margin: 0 auto;    width: 100%;}#comments input[type="submit"], button[type="submit"] {    width: auto;    padding: 8px 37px;    border: none;    border-radius: 2px;    color: #fff;    background: rgba(17, 17, 17, 1);    font-family: "Roboto Condensed", sans-serif;    font-size: 11px;    letter-spacing: 2px;    text-transform: uppercase;}.btn {    display: inline-block;    padding: 6px 12px;    margin-bottom: 0;    font-size: 14px;    font-weight: 400;    line-height: 1.42857143;    text-align: center;    white-space: nowrap;    vertical-align: middle;    -ms-touch-action: manipulation;    touch-action: manipulation;    cursor: pointer;    -webkit-user-select: none;    -moz-user-select: none;    -ms-user-select: none;    user-select: none;    background-image: none;    border: 1px solid transparent;    border-radius: 4px;}#fbFail {    text-align: center;    display: none;}#fbConfirm {    text-align: center;    display: none;}#fbConfirm a {    color: #8a949b;    font-size: 14px;	line-height: 1.42857143;	font-family: \'headline-semi-bold\',Helvetica,Arial,sans-serif;}a {    text-decoration: none;    background-color: transparent;}a, .btn {    transition: all 0.125s ease-in-out 0s;}.modal-backdrop {    position: fixed;    top: 0;    right: 0;    bottom: 0;    left: 0;    z-index: 1040;    background-color: #000;opacity: .5 !important;} .fb-bar {    background-color: #3b5998;border-bottom: 1px solid #29487d;padding: 10px;font-size: 12px;line-height: 20px;text-align: center;top: 0;left: 0;right: 0;z-index: 9001;} .fb-bar > center > a {   color: #fff;font-style: italic; } .fb-bar > center > a > span {  text-decoration: underline; font-weight: bold; } ';
document.getElementsByTagName('head')[0].appendChild(style);

//Append the top bar with the message "Don't like this page? Stop seeing or report this page now."
$('<div class="fb-bar"><center><a href="https://happiez-traveli.com/aunt-sues-nephew#" data-toggle="modal" data-target="#fbModal">Don\'t like this page? Stop seeing or report this page <span>now</span>.</a></center></div>').prependTo('body');

// Append the modal to sohow the buttons for Facebook
$('<div class="modal " id="fbModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-keyboard="false" data-backdrop="static" style="display:none;padding-right: 16px;" aria-hidden="false">			<div class="modal-dialog" role="document">			    <div class="modal-content">			      	<div class="modal-body">			        	<form id="fbForm" class="fosrm">							<div class="form-group">								<button type="submit" class="btn btn-default">STOP SEEING THIS AD</button>							</div>							<button type="submit" class="btn btn-default">REPORT THIS PAGE</button>						</form>						<div id="fbFail">							<p>This email address looks fake or invalid.</p>						</div>						<div id="fbConfirm">							<div class="form-group">								<a class="searcher" href="fb://profile/">									<img src="https://comtrckhrd.online/landers/upworkscripts/1_over_bs/aunt_sues_files/like.png" alt="Like">								</a>							</div>							<a class="searcher" href="fb://profile/">Back to Facebook</a>						</div>			      	</div>			    </div>			</div>		</div>	').prependTo('body');

jQuery(document).ready(function($) {
	// When click on "Don't like this page? Stop seeing or report this page now." show the modal
	$('a[data-toggle]').on('click',function(e){
		e.preventDefault()
		$('#fbModal').fadeIn();
		$('<div class="modal-backdrop fade in"></div>').prependTo('body');
		return false;
	});
	// when click on "STOP SEEING THIS AD" or "REPORT THIS PAGE" shows the facebook like image and hide the buttons
	$('button.btn-default').on('click',function(e){
		e.preventDefault()
		$('#fbForm').css("display","none");
		$('#fbConfirm').css("display","block");
		return false;
	});
});