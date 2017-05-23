<?php //https://stackoverflow.com/questions/18379238/send-email-with-php-from-html-form-on-submit-with-the-same-script

// $name = $_POST['name'];
// $email = $_POST['email'];
// $message = $_POST['message'];
// $to = 'aflapasset@gmail.com'; 
// $subject = 'Contact';
// $body = "Message:\n $message From: $name\n";
// $headers = "From: $email"; 

// if ($_POST['submit']) {
// 	if (mail ($to, $subject, $body, $headers)) { 
// 		echo '<p>Your message has been sent!</p>';
// 	} else { 
// 		echo '<p>Something went wrong, go back and try again !</p>'; 
// 	}
// }

$to = "aflapasset@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $subject = "Contact";
    $subject2 = "Copy of your contact form";
    $message = $name . " " . " wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "<div class='sent'><p>Mail Sent. Thank you " . $name . ", I will contact you shortly.</p></div>";
?>