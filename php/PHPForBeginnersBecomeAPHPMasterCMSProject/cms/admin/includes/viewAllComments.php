<table class="table table-bordered table-hover">
    <thead>
        <tr>
            <th>Id</th>
            <th>Author</th>
            <th>Comment</th>
            <th>Email</th>
            <th>Status</th>
            <th>In Response to</th>
            <th>Date</th>
            <th>Approve</th>
            <th>Unapprove</th>
            <th>Delete</th>
        </tr>
    </thead>
    <tbody>
        <?php 
            $query = "SELECT * FROM comments" ;
            $select_comments = mysqli_query($connection, $query); 

            while ($row = mysqli_fetch_assoc($select_comments)){
                $comment_id = $row['comment_id'];
                $comment_post_id = $row['comment_post_id'];
                $comment_author = $row['comment_author'];
                $comment_email = $row['comment_email'];
                $comment_content = $row['comment_content'];
                $comment_status = $row['comment_status'];
                $comment_date = $row['comment_date'];
                
                echo "<tr>";
                echo "<td>$comment_id</td>";
                echo "<td>$comment_author</td>";
                echo "<td>$comment_content</td>";
                echo "<td>$comment_email</td>";
                echo "<td>$comment_status</td>";

                $query = "SELECT * FROM posts WHERE post_id = $comment_post_id ";
                $select_posts = mysqli_query($connection, $query);
                while ($row = mysqli_fetch_assoc($select_posts)) {
                    $post_title = $row['post_title'];
                    echo "<td><a href='../post.php?p_id=$comment_post_id'>$post_title</a></td>";
                }

                echo "<td>$comment_date</td>";
                echo "<td><a href='comments.php?approve=$comment_id'>Approve</a></td>";
                echo "<td><a href='comments.php?unapprove=$comment_id'>Unapprove</a></td>";
                echo "<td><a onClick=\"javascript: return confirm('Are you sure you want to delete?');\" href='comments.php?delete=$comment_id'>Delete</a></td>";
                echo "</tr>";
            }
        ?>
    </tbody>
</table>
<?php
    if(isset($_GET['approve'])){
        $comment_id = $_GET['approve'];
        $query = "UPDATE comments SET comment_status = 'approved' WHERE comment_id = $comment_id ";
        $approve_comment_query = mysqli_query($connection, $query);

        confirmQuery($approve_comment_query);
        header("Location: comments.php");
    }

    if(isset($_GET['unapprove'])){
        $comment_id = $_GET['unapprove'];
        $query = "UPDATE comments SET comment_status = 'unapproved' WHERE comment_id = $comment_id ";
        $unapprove_comment_query = mysqli_query($connection, $query);

        confirmQuery($unapprove_comment_query);
        header("Location: comments.php");
    }

    if(isset($_GET['delete'])){
        $comment_id = $_GET['delete'];
        $query = "DELETE FROM comments WHERE comment_id = $comment_id";
        $deleteQuery = mysqli_query($connection, $query);
        
        confirmQuery($deleteQuery);
        header("Location: comments.php");

        $query = "UPDATE posts SET post_comment_count = post_comment_count - 1 ";
        $query .= "WHERE post_id = $comment_post_id";
        $updateCommentCount = mysqli_query($connection, $query);
        confirmQuery($updateCommentCount);
        header("Location: comments.php");
    }
?>