<?php include "includes/header.php";?>
<?php 
    if(isset($_SESSION['username'])) {
        $username = $_SESSION['username'];
        $query = "SELECT * FROM users WHERE username = '{$username}' ";
        $select_user_profile_query = mysqli_query($connection, $query);
        confirmQuery($select_user_profile_query);

        while($row = mysqli_fetch_assoc($select_user_profile_query)) {
            $user_id = $row['user_id'];
            $username = $row['username'];
            $user_password = $row['user_password'];
            $user_firstname = $row['user_firstname'];
            $user_lastname = $row['user_lastname'];
            $user_email = $row['user_email'];
            $user_image = $row['user_image'];
            $user_role = $row['user_role'];
        }
    }

    if(isset($_POST['submit'])) {
        $username = $_POST['username'];
        $user_password = $_POST['user_password'];
        $user_firstname = $_POST['user_firstname'];
        $user_lastname = $_POST['user_lastname'];
        $user_email = $_POST['user_email'];
        $user_role = $_POST['user_role'];

        $user_image = $_FILES['image']['name'];
        $user_image_temp = $_FILES['image']['tmp_name'];
        move_uploaded_file($user_image_temp, "../images/$user_image");

        // prevent removing the image if there's no new image updated
        if(empty($user_image)){
            $query = "SELECT * FROM users WHERE user_id = $user_id ";
            $selectImage = mysqli_query($connection, $query);
            while($row = mysqli_fetch_assoc($selectImage)) {
                $user_image = $row['user_image'];
            }
        }

        $query = "UPDATE users SET ";
        $query .= "username = '{$username}', ";
        $query .= "user_password = '{$user_password}', ";
        $query .= "user_firstname = '{$user_firstname}', ";
        $query .= "user_lastname = '{$user_lastname}', ";
        $query .= "user_email = '{$user_email}', ";
        $query .= "user_role = '{$user_role}', ";
        $query .= "user_image = '{$user_image}' ";
        $query .= "WHERE user_id = {$user_id} ";

        $updateQuery = mysqli_query($connection, $query);
        confirmQuery($updateQuery);
        header("Location: profile.php");
    }
?>
    <div id="wrapper">

        <!-- Navigation -->
        <?php include "includes/navigation.php"?>

        <div id="page-wrapper">

            <div class="container-fluid">

                <!-- Page Heading -->
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">
                            Welcome to Admin
                            <small><?php echo $username;?></small>
                        </h1>
                        
                        <form action="" method="POST" enctype="multipart/form-data">
                            <div class="form-group">
                                <label for="title">Username</label>
                                <input value="<?php echo $username;?>" type="text" class="form-control" name="username">
                            </div>
                            <div class="form-group">
                                <label for="title">Password</label>
                                <input value="<?php echo $user_password;?>" type="password" class="form-control" name="user_password">
                            </div>
                            <div class="form-group">
                                <label for="post_category">Role</label>
                                <br>
                                <select name="user_role">
                                    <option value="<?php echo $user_role;?>"><?php echo $user_role;?></option>
                                    <?php 
                                        if ($user_role === 'admin') {
                                            echo "<option value='subscriber'>subscriber</option>";
                                        } else {
                                            echo "<option value='admin'>admin</option>";
                                        }
                                    ?>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="title">Firstname</label>
                                <input value="<?php echo $user_firstname;?>" type="text" class="form-control" name="user_firstname">
                            </div>
                            <div class="form-group">
                                <label for="title">Lastname</label>
                                <input value="<?php echo $user_lastname;?>" type="text" class="form-control" name="user_lastname">
                            </div>
                            <div class="form-group">
                                <img width="100" src="../images/<?php echo $user_image;?>" alt="image">
                                <input type="file" name="image" id="">
                            </div>
                            <div class="form-group">
                                <label for="title">Email</label>
                                <input value="<?php echo $user_email;?>" type="email" class="form-control" name="user_email">
                            </div>
                            <div class="form-group">
                                <input type="submit" class="btn btn-primary" name="submit" value="Update Profile">
                            </div>
                        </form>

                    </div>
                </div>
                <!-- /.row -->

            </div>
            <!-- /.container-fluid -->

        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->
<?php include "includes/footer.php";?>