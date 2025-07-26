<?php

$name = $_POST['name'];
$phone = $_POST['number'];
$email = $_POST['email'];
// $text = $_POST['text'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP(); // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com'; // Specify main and backup SMTP servers
$mail->SMTPAuth = true; // Enable SMTP authentication
$mail->Username = 'inewera.ua@gmail.com'; // Наш логин
$mail->Password = 'tvmyhyqhvpthmpxp'; // Наш пароль от ящика
$mail->SMTPSecure = 'ssl'; // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to

$mail->setFrom('inewera.ua@gmail.com', 'INewEra'); // От кого письмо 
$mail->addAddress('inewera.ua@gmail.com'); // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true); // Set email format to HTML

$mail->Subject = 'Дані';
$mail->Body = '
		Користувач лишив такі дані <br> 
	Ім’я: ' . $name . ' <br>
	Номер телефону: ' . $phone . '<br>
	E-mail: ' . $email .  '';

if (!$mail->send()) {
	return false;
} else {
	return true;
}

?>