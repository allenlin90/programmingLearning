<?php 

    function confirmQuery($result){
        global $connection;
        if(!$result) {
            die("QUERY FAILED" . mysqli_error($connection));
        }
    }

    function insert_categories() {
        global $connection;
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
    }

    function findAllCategories(){
        global $connection;
        $query = "SELECT * FROM categories";
        $selectCategories = mysqli_query($connection, $query);

        while ($row = mysqli_fetch_assoc($selectCategories)){
            $cat_id = $row['cat_id'];
            $cat_title = $row['cat_title'];
            echo "<tr>";
            echo "<td>{$cat_id}</td>";
            echo "<td>{$cat_title}</td>";
            echo "<td><a onClick=\"javascript: return confirm('Are you sure you want to delete?');\" href='categories.php?delete={$cat_id}'>Delete</a></td>";
            echo "<td><a href='categories.php?edit={$cat_id}'>Edit</a></td>";
            echo "</tr>";
        }
    }

    function deleteCategories(){
        global $connection;
        if(isset($_GET['delete'])){
            $catId = $_GET['delete'];
            $query = "DELETE FROM categories WHERE cat_id = $catId ";
            $deleteQuery = mysqli_query($connection, $query);
            confirmQuery($deleteQuery);
            header("Location: categories.php");
        }
    }
?>