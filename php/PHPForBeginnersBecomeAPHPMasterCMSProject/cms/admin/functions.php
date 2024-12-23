<?php 
    function users_online() {
        if(isset($_GET['onlineusers'])){
            global $connection;
            if(!$connection) {
                session_start();
                include("../includes/db.php");

                $session = session_id();
                $time = time();
                $time_out_in_seconds = 600;
                $time_out = $time - $time_out_in_seconds;

                $query = "SELECT * FROM users_online WHERE session = '{$session}'";
                $send_query = mysqli_query($connection, $query);
                $count = mysqli_num_rows($send_query);

                if($count === 0) {
                    mysqli_query($connection, "INSERT INTO users_online(session, time) VALUES('{$session}', '{$time}') ");
                } else {
                    mysqli_query($connection, "UPDATE users_online SET time = '$time' WHERE session = '{$session}' ");
                }

                $users_online_query = mysqli_query($connection, "SELECT * FROM users_online WHERE time > '$time_out' ");
                echo $count_user = mysqli_num_rows($users_online_query);
            }
        }
    }
    users_online();

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