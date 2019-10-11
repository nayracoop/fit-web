<?PHP

if(!isset($_POST["name"]) || $_POST["name"] == "") die('{ "enviado":false, "mensaje":"Por favor, ingrese su nombre" }');
if(!isset($_POST["companyName"]) || $_POST["companyName"] == "") die('{ "enviado":false, "mensaje":"Por favor, ingrese el nombre de su compañía" }');
if(!isset($_POST["email"]) || $_POST["email"] == "") die('{ "enviado":false, "mensaje":"Por favor, ingrese su email" }');
if(!isset($_POST["service"]) || $_POST["service"] == "") die('{ "enviado":false, "mensaje":"Por favor, seleccione un servicio" }');
if(!isset($_POST["message"]) || $_POST["message"] == "") die('{ "enviado":false, "mensaje":"Por favor, ingrese su mensaje" }');

$to = "info@facttic.org.ar";

$name = $_POST["name"];
$companyName = $_POST["companyName"];
$email = $_POST["email"];
$service = $_POST["service"];
$message = $_POST["message"];

$headers  = 'MIME-Version: 1.0' . "\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\n";
//$headers .= 'To: ' . $to . "\n";
$headers .= 'From:'.$name.' <'.$email.">\n";

$asunto = "Contacto FIT - Flujo Intercooperativo de Trabajo";
$cuerpo .= '<p><b>Nombre</b>: '.$name.'<br />';
$cuerpo .= '<b>Nombre compañía</b>: '.$companyName.'<br />';
$cuerpo .= '<b>Email</b>: '.$email.'</p>';
$cuerpo .= '<b>Servicio de interés</b>: '.$service.'</p>';
$cuerpo .= '<p><b>Mensaje</b>:</p>';
$cuerpo .= $message;

if(mail($to, $asunto, $cuerpo, $headers)) die('{ "enviado":true }');
die('{ "enviado":false, "mensaje":"Error al enviar el mensaje" }');

?>
