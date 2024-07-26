<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$errors = array();
if ($_SERVER['REQUEST_METHOD'] === "POST") {
  if (empty($_POST['email'])) {
    $errors[] = 'Email is empty';
  } else {
    $email = $_POST['email'];
    
    // validating the email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Invalid email';
    }
  }
  if (empty($_POST['mensaje'])) {
    $errors[] = 'Message is empty';
  } else {
    $message = $_POST['mensaje'];
  }
  if (empty($errors)) {
    $date = date('j, F Y h:i A');
    $nombre = $_POST['nombre'];
    
    
    $emailBody = "
    <html>
    <head>
    <title>$nombre is contacting you</title>
    </head>
    <body style=\"background-color:#fafafa;\">
    <div style=\"padding:20px;\">
    Fecha: <span style=\"color:#888\">$date</span>
    <br>
    Nombre: <span style=\"color:#888\">$nombre</span>
    <br>
    Email: <span style=\"color:#888\">$email</span>
    <br>
    Mensaje: <div style=\"background-color:#fafafa;color:#888\">$message</div>
    </div>
    </body>
    </html>
    ";
    
    $headers = 	'From: Contact Form GoroGoroIL' . "\r\n" .
    "Reply-To: $email" . "\r\n" .
    "MIME-Version: 1.0\r\n" . 
    "Content-Type: text/html; charset=iso-8859-1\r\n";

    $to = 'valderrama.christian@gmail.com';
    $subject = 'Mensaje desde GoroGoroIl web';
    
    if (mail($to, $subject, $emailBody, $headers)) {
      $sent = true;	
    }
  }
}
?>

  <?php if (!empty($errors)) : ?> 

{
  "status": "fail",
  "error":  <?php echo json_encode($errors) ?>
}
  <?php endif; ?>
  
  
  <?php if (isset($sent) && $sent === true) : ?> 

{
  "status": "success",
  "message": "Your data was successfully submitted"
}
  <?php endif; ?>

