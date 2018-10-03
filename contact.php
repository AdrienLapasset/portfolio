<?php
	ini_set( 'display_errors', 1 );
	error_reporting( E_ALL );
	$to = "aflapasset@gmail.com";
	$subject = "Contact freelance";
	$email = $_POST['email'];
	$name = $_POST['name'];
	$message = "Nom: " . $name . "\n\n" . "Email: " . $email . "\n\n" . "Message: " . "\n" . $_POST['message'];
	$headers = "From:" . "mail@adrienlapasset.fr";
	mail($to,$subject,$message,$headers);
	header('Location: /');
	exit();
?>