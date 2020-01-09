<?php

$errorMSG = "";

// TODO: rewrite to shorthand IF statements.
/* NAME */
if (empty($_POST["first_name"])) {
    $errorMSG = "<li>Įveskite vardą</<li>";
} else {
    $first_name = $_POST["first_name"];
}

/* LAST NAME */
if (empty($_POST["last_name"])) {
    $errorMSG = "<li>Įveskite pavardę</<li>";
} else {
    $last_name = $_POST["last_name"];
}

/* PHONE NUMBER */
if (empty($_POST["phone_number"])) {
    $errorMSG .= "<li>Įveskite telefono numerį</li>";
    // TODO: create phone number filtering with regexp
}else {
    $phone_number = $_POST["phone_number"];
}


/* EMAIL */
if (empty($_POST["email"])) {
    $errorMSG .= "<li>Įveskite el. pašto adresą.</li>";
} else if(!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
    $errorMSG .= "<li>Netinkamas el pašto adresas.</li>";
}else {
    $email = $_POST["email"];
}


/* MESSAGE */
if (empty($_POST["message"])) {
    $errorMSG .= "<li>Žinutė privaloma</li>";
} else {
    $message = $_POST["message"];
}

// echo json_encode(['code'=>200, 'msg'=>'cia']);

if(empty($errorMSG)){

    // START of Insert form data to DataBase
    $servername = "localhost";
    $username = "statbera";
    $password = "julius";
    $dbname = "projektas_statbera";

    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $sql = "INSERT INTO forma (first_name, last_name, phone_number, email, message)
    VALUES ('$first_name','$last_name','$phone_number','$email','$message')";
    $conn->exec($sql);
    $conn = null;
    // END of inserting form data to database.

    // informing client about success
    $msg = "Vardas: ".$first_name.", Pavardė: ".$last_name.", Telefono numeris: ".$phone_number.", El. pašto adresas: ".$email.", Žinutė:".$message;
    echo json_encode(['code'=>200, 'msg'=>$msg]);

    exit;
    }

echo json_encode(['code'=>404, 'msg'=>$errorMSG]);


?>
