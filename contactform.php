<?php 

if(isset($_POST['submit'])) {
    $name = $_POST['fullname'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo="atif.delibasic@edu.fit.ba";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$name.".\n\n".$message;


    mail($mailTo, 'Nesto', $txt, $headers);
    header("Location: index.php?mailsend");
}

?>
