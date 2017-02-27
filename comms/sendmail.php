<?php
require 'class.phpmailer.php';
require 'class.smtp.php';

$name = $_POST['firstname']." ".$_POST['lastname'];
$email = $_POST['email'];
$phone = $_POST['phone'];

$mail = new PHPMailer;

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mailgun.org';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'postmaster@sandboxae25ac03d24e463487365037ce4b3eb1.mailgun.org';                 // SMTP username
$mail->Password = '6c2ffe497099415b1bc02cf4d098af7f';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->setFrom('projectlima@vodacom.co.tz', 'Project Lima');
$mail->addAddress('vodacom@aimgroup.co.tz', 'Aimgroup');     // Add a recipient

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Project Lima Request';
$mail->Body    = 'Test';
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
