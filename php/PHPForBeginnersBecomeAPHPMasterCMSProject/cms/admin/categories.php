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
                        <div class="col-xs-6">
                            <?php 
                                if (isset($_POST['submit'])){
                                    $cat_title = $_POST['cat_title'];
                                    if($cat_title == "" || empty($cat_title)) {
                                        echo "This field should not be empty";
                                    } else {
                                        $query = "INSERT INTO categories(cat_title) ";
                                        $query .= "VALUE('{$cat_title}') ";

                                        $createCategoryQuery = mysqli_query($connection, $query);
                                        
                                        if (!$createCategoryQuery) {
                                            die("QUERY FAILED" . mysqli_error($connection));
                                        }
                                    }
                                }
                            ?>
                            <form action="categories.php" method="post">
                                <div class="form-group">
                                    <label for="cat_title">Add Category</label>
                                    <input class="form-control" type="text" name="cat_title">
                                </div>
                                <div class="form-group">
                                    <input class="btn btn-primary" type="submit" name="submit" value="Add Category">
                                </div>
                            </form>

                            <?php 
                                // left from here
                            ?>
                            <form action="categories.php" method="post">
                                <div class="form-group">
                                    <label for="cat_title">Edit Category</label>
                                    <input class="form-control" type="text" name="cat_title">
                                </div>
                                <div class="form-group">
                                    <input class="btn btn-primary" type="submit" name="submit" value="Update Category">
                                </div>
                            </form>
                        </div>
                        <div class="col-xs-6">
                            <table class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Category Title</th>
                                    </tr>
                                </thead>
                                <tbody>                                
                                    <?php // find all categories
                                        $query = "SELECT * FROM categories";
                                        $selectCategories = mysqli_query($connection, $query);
                                        while ($row = mysqli_fetch_assoc($selectCategories)){
                                            $cat_id = $row['cat_id'];
                                            $cat_title = $row['cat_title'];
                                            echo "<tr>";
                                            echo "<td>{$cat_id}</td>";
                                            echo "<td>{$cat_title}</td>";
                                            echo "<td><a href='categories.php?delete={$cat_id}'>Delete</a></td>";
                                            echo "</tr>";
                                        }
                                    ?>

                                    <?php
                                        if(isset($_GET['delete'])){
                                            $catId = $_GET['delete'];
                                            $query = "DELETE FROM categories WHERE cat_id = {$catId} ";
                                            $deleteQuery = mysqli_query($connection, $query);
                                            header("Location: categories.php");
                                        }
                                    ?>
                                </tbody>
                            </table>
                        </div>
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