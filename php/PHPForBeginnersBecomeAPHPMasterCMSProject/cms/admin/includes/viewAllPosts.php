<table class="table table-bordered table-hover">
    <thead>
        <tr>
            <th>Id</th>
            <th>Author</th>
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
            <th>Image</th>
            <th>Tags</th>
            <th>Comments</th>
            <th>Date</th>
        </tr>
    </thead>
    <tbody>
        <?php 
            $query = "SELECT * FROM posts";
            $selectPosts = mysqli_query($connection, $query); 

            while ($row = mysqli_fetch_assoc($selectPosts)){
                $postId = $row['post_id'];
                $postAuthor = $row['post_author'];
                $postTitle = $row['post_title'];
                $postCategoryId = $row['post_category_id'];
                $postStatus = $row['post_status'];
                $postImage = $row['post_image'];
                $postTags = $row['post_tags'];
                $postCommentCount = $row['post_comment_count'];
                $postDate = $row['post_date'];
                
                echo "<tr>";
                echo "<td>$postId</td>";
                echo "<td>$postAuthor</td>";
                echo "<td>$postTitle</td>";

                $query = "SELECT * FROM categories WHERE cat_id = $postCategoryId ";
                $selectCategoriesId = mysqli_query($connection, $query);
                while($row = mysqli_fetch_assoc($selectCategoriesId)) {
                    $cat_id = $row['cat_id'];
                    $cat_title = $row['cat_title'];
                }
                echo "<td>$cat_title</td>";
                
                echo "<td>$postStatus</td>";
                echo "<td><img width='100px' src='../images/$postImage' alt='image'></td>";
                echo "<td>$postTags</td>";
                echo "<td>$postCommentCount</td>";
                echo "<td>$postDate</td>";
                echo "<td><a href='posts.php?source=edit_post&p_id=$postId'>Edit</a></td>";
                echo "<td><a href='posts.php?delete=$postId'>Delete</a></td>";
                echo "</tr>";
            }
        ?>
    </tbody>
</table>
<?php 
    if(isset($_GET['delete'])){
        $thePostId = $_GET['delete'];
        $query = "DELETE FROM posts WHERE post_id = $thePostId";
        $deleteQuery = mysqli_query($connection, $query);
        
        confirmQuery($deleteQuery);
        header("Location: posts.php");
    }
?>