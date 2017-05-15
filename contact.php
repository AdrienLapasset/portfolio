<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$to = 'aflapasset@gmail.com'; 
$subject = 'Contact';
$body = "Message:\n $message From: $name\n";
$headers = "From: $email"; 


if ($_POST['submit']) {
	if (mail ($to, $subject, $body, $headers)) { 
		echo '<p>Your message has been sent!</p>';
	} else { 
		echo '<p>Something went wrong, go back and try again!</p>'; 
	}
}
?>