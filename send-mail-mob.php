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
	
	if(trim(!empty($_POST['textMob']))){
		$body.='<p><strong>Text:</strong> '.$_POST['textMob'].'</p>';
	}
	if(trim(!empty($_POST['selected_fontMob']))){
		$body.='<p><strong>Font:</strong> '.$_POST['selected_fontMob'].'</p>';
	}
	if(trim(!empty($_POST['selected_colorMob']))){
		$body.='<p><strong>Color:</strong> '.$_POST['selected_colorMob'].'</p>';
	}
	if(trim(!empty($_POST['lengthMob']))){
		$body.='<p><strong>Length:</strong> '.$_POST['lengthMob'].'</p>';
	}
	if(trim(!empty($_POST['heightMob']))){
		$body.='<p><strong>Height:</strong> '.$_POST['heightMob'].'</p>';
	}
	if(trim(!empty($_POST['backboardMob']))){
		$body.='<p><strong>Backboard:</strong> '.$_POST['backboardMob'].'</p>';
	}
	if(trim(!empty($_POST['whereMob']))){
		$body.='<p><strong>Where:</strong> '.$_POST['whereMob'].'</p>';
	}

	if(trim(!empty($_POST['emailMob']))){
		$body.='<p><strong>E-mail:</strong> '.$_POST['emailMob'].'</p>';
	}
	if(trim(!empty($_POST['notesMob']))){
		$body.='<p><strong>Message:</strong> '.$_POST['notesMob'].'</p>';
	}
	if (!empty($_FILES['imageMob']['tmp_name'])) {
		$filePath = __DIR__ . "/files/" . $_FILES['imageMob']['name']; 
		if (copy($_FILES['imageMob']['tmp_name'], $filePath)){
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