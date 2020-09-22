<?php
    if(isset($_POST['submit'])){
        $username = $_POST['username'];
        $user_password = $_POST['user_password'];
        $user_firstname = $_POST['user_firstname'];
        $user_lastname = $_POST['user_lastname'];
        $user_email = $_POST['user_email'];
        $user_role = $_POST['user_role'];

        $user_image = $_FILES['image']['name'];
        $user_image_temp = $_FILES['image']['tmp_name'];
        move_uploaded_file($user_image_temp, "../images/$user_image");

        // encrypt user password
        $user_password = password_hash($user_password, PASSWORD_BCRYPT, array('cost' => 10));

        $query = "INSERT INTO users(username, user_password, user_firstname, user_lastname, user_email, user_role, user_image) ";
        $query .= "VALUES('{$username}', '{$user_password}', '{$user_firstname}', '{$user_lastname}', '{$user_email}','{$user_role}', '{$user_image}') ";

        $create_user_query = mysqli_query($connection, $query);

        confirmQuery($create_user_query);
        header("Location: users.php");
    }
?>

<form action="" method="POST" enctype="multipart/form-data">
    <div class="form-group">
        <label for="title">Username</label>
        <input type="text" class="form-control" name="username">
    </div>
    <div class="form-group">
        <label for="title">Password</label>
        <input type="password" class="form-control" name="user_password">
    </div>
    <div class="form-group">
        <label for="title">Firstname</label>
        <input type="text" class="form-control" name="user_firstname">
    </div>
    <div class="form-group">
        <label for="title">Lastname</label>
        <input type="text" class="form-control" name="user_lastname">
    </div>
    <div class="form-group">
        <label for="post_category">Role</label>
        <select name="user_role">
            <option value="subscriber">Select Options</option>
            <option value="admin">Admin</option>
            <option value="subscriber">Subscriber</option>
        </select>
    </div>
    <div class="form-group">
        <label for="title">User Image</label>
        <input type="file" name="image">
    </div>
    <div class="form-group">
        <label for="title">Email</label>
        <input type="email" class="form-control" name="user_email">
    </div>
    <div class="form-group">
        <input type="submit" class="btn btn-primary" name="submit" value="Create User">
    </div>
</form>