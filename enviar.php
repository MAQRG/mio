<?php
$servername = "localhost";
$username = "tu_usuario";
$password = "tu_contraseña";
$dbname = "tu_base_de_datos";

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Procesar inicio de sesión
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["login"])) {
    $username = $_POST["username"];
    $password = $_POST["password"];

    $sql = "SELECT * FROM usuarios WHERE nombre_usuario = '$username' AND contrasena = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        // Inicio de sesión exitoso
        echo "<script>alert('Inicio de sesión exitoso');</script>";
        // Redirigir al usuario a otra página después del inicio de sesión exitoso
    } else {
        // Usuario o contraseña incorrectos
        echo "<script>alert('Usuario o contraseña incorrectos');</script>";
    }
}

// Procesar registro
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["register"])) {
    $newUsername = $_POST["newUsername"];
    $newPassword = $_POST["newPassword"];

    $sql = "INSERT INTO usuarios (nombre_usuario, contrasena) VALUES ('$newUsername', '$newPassword')";

    if ($conn->query($sql) === TRUE) {
        // Registro exitoso
        echo "<script>alert('Registro exitoso');</script>";
    } else {
        // Error en el registro
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>