<table class="table table-bordered table-hover">
    <thead>
        <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Role</th>
            <th>Date</th>
        </tr>
    </thead>
    <tbody>
        <?php 
            $query = "SELECT * FROM users" ;
            $select_comments = mysqli_query($connection, $query); 

            while ($row = mysqli_fetch_assoc($select_comments)){
                $user_id = $row['user_id'];
                $username = $row['username'];
                $user_password = $row['user_password'];
                $user_firstname = $row['user_firstname'];
                $user_lastname = $row['user_lastname'];
                $user_email = $row['user_email'];
                $user_image = $row['user_image'];
                $user_role = $row['user_role'];
                
                echo "<tr>";
                echo "<td>$user_id</td>";
                echo "<td>$username</td>";
                echo "<td>$user_firstname</td>";
                echo "<td>$user_lastname</td>";
                echo "<td>$user_email</td>";
                echo "<td>$user_role</td>";

                // $query = "SELECT * FROM posts WHERE post_id = $comment_post_id ";
                // $select_posts = mysqli_query($connection, $query);
                // while ($row = mysqli_fetch_assoc($select_posts)) {
                //     $post_title = $row['post_title'];
                //     echo "<td><a href='../post.php?p_id=$comment_post_id'>$post_title</a></td>";
                // }

                echo "<td><a href='users.php?source=edit_user&u_id=$user_id'>Edit</a></td>";
                echo "<td><a href='users.php?delete=$user_id'>Delete</a></td>";
                echo "</tr>";
            }
        ?>
    </tbody>
</table>
<?php

    if(isset($_GET['delete'])){
        $user_id = $_GET['delete'];
        $query = "DELETE FROM users WHERE user_id = $user_id";
        $deleteQuery = mysqli_query($connection, $query);
        
        confirmQuery($deleteQuery);
        header("Location: users.php");
    }
?>