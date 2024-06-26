<?php include "includes/header.php";?>

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
                            <small>Author</small>
                        </h1>
                        <?php 
                            if(isset($_GET['source'])){
                                $source = $_GET['source'];

                            } else {
                                $source = "";
                            }
                            switch($source) {
                                case 'add_user';
                                    include "includes/addUser.php";
                                break;

                                case 'edit_user';
                                    include "includes/editUser.php";
                                break;

                                default:
                                    include "includes/viewAllUsers.php";
                                break;
                            }
                        ?>
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