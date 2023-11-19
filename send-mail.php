<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;
	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';
	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);
	$mail->setFrom('oreder@www.com', 'Order from Neovsn');
	$mail->addAddress('starshova1309@gmail.com');
	$mail->Subject = 'Order Details';
	$body = '<h1>Here is a new order!</h1>';
	
	if(trim(!empty($_POST['text']))){
		$body.='<p><strong>Text:</strong> '.$_POST['text'].'</p>';
	}
	if(trim(!empty($_POST['selected_font']))){
		$body.='<p><strong>Font:</strong> '.$_POST['selected_font'].'</p>';
	}
	if(trim(!empty($_POST['selected_color']))){
		$body.='<p><strong>Color:</strong> '.$_POST['selected_color'].'</p>';
	}
	if(trim(!empty($_POST['length']))){
		$body.='<p><strong>Length:</strong> '.$_POST['length'].'</p>';
	}
	if(trim(!empty($_POST['height']))){
		$body.='<p><strong>Height:</strong> '.$_POST['height'].'</p>';
	}
	if(trim(!empty($_POST['backboard']))){
		$body.='<p><strong>Backboard:</strong> '.$_POST['backboard'].'</p>';
	}
	if(trim(!empty($_POST['where']))){
		$body.='<p><strong>Where:</strong> '.$_POST['where'].'</p>';
	}

	if(trim(!empty($_POST['email']))){
		$body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
	}
	if(trim(!empty($_POST['notes']))){
		$body.='<p><strong>Message:</strong> '.$_POST['notes'].'</p>';
	}
	if (!empty($_FILES['image']['tmp_name'])) {
		$filePath = __DIR__ . "/files/" . $_FILES['image']['name']; 
		if (copy($_FILES['image']['tmp_name'], $filePath)){
			$fileAttach = $filePath;
			$body.='<p><strong>Photo attached:</strong>';
			$mail->addAttachment($fileAttach);
		}
	}
	$mail->Body = $body;
	if (!$mail->send()) {
		$message = 'Error';
	} else {
		$message = 'Form submitted succesfully!';
	}
	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>