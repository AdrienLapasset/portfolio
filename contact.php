<?php //https://stackoverflow.com/questions/18379238/send-email-with-php-from-html-form-on-submit-with-the-same-script
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
// echo "<div class='sent'><p>Mail Sent. Thank you " . $name . ", I will contact you shortly.</p></div>";
header('Location: /');
exit();
?>