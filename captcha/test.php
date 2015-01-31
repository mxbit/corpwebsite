<?php
session_start();

//print_r($_SESSION['captcha']);
//print_r($_REQUEST);
if($_SESSION['captcha'] == $_REQUEST['verify'])	{
	$subject = $_REQUEST['name'] .' contacted via website';
	$from = $_REQUEST['email'];

	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
	$headers .= 'From: <admin@mxbit.co.in>' . "\r\n";
	//$headers .= 'Cc: myboss@example.com' . "\r\n";

	$message = 'Hello there,<br><br> '.$_REQUEST['name'] .', '.$_REQUEST['phone'].', '.$from.' contacted via website<br>'.$_REQUEST['comment'];
	echo "Thank you for sending us feedback";
	mail('info@mxbit.co.in',$subject,$message,$headers);
}
else {
	echo "Please correct the security image and send again.";
}

?>


