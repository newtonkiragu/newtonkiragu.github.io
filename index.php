<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>contact me </title>
  </head>
  <body>
<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: Newtonkiragu.github.io';
    $to = 'karanunewton4@gmail.com';
    $subject = 'Contact';

     $body = "From: $name\n E-Mail: $email\n Message:\n $message";

     if ($_POST['submit']) {
         if ($name != '' && $email != '') {
             if ($human == '4') {
                 if (mail($to, $subject, $body, $from)) {
                     echo '<p>Your message has been sent!</p>';
                 } else {
                     echo '<p>Something went wrong, go back and try again!</p>';
                 }
             } elseif ($_POST['submit'] && $human != '4') {
                 echo '<p>You answered the anti-spam question incorrectly!</p>';
             }
         } else {
             echo '<p>You need to fill in all required fields!!</p>';
         }
     }
     ?> 
     </body>
     </html>
