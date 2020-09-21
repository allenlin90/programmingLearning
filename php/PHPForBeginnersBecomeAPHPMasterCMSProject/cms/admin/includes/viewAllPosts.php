<?php
    if(isset($_POST['checkBoxArray'])){
        foreach($_POST['checkBoxArray'] as $postValueId) {
            $bulk_options = $_POST['bulk_options'];
            switch($bulk_options) {
                case 'published':
                    $query = "UPDATE posts SET post_status = '{$bulk_options}' WHERE post_id = $postValueId ";
                    $update_to_published_status = mysqli_query($connection, $query);
                    confirmQuery($update_to_published_status);
                    break;
                case 'draft':
                    $query = "UPDATE posts SET post_status = '{$bulk_options}' WHERE post_id = $postValueId ";
                    $update_to_draft_status = mysqli_query($connection, $query);
                    confirmQuery($update_to_draft_status);
                    break;
                case 'delete':
                    $query = "DELETE FROM posts WHERE post_id = $postValueId ";
                    $update_to_delete_status = mysqli_query($connection, $query);
                    confirmQuery($update_to_delete_status);
                    break;
                case 'clone':
                    $query = "SELECT * FROM posts WHERE post_id = $postValueId ";
                    $select_post_query = mysqli_query($connection, $query);
                    while ($row = mysqli_fetch_assoc($select_post_query)) {
                        $post_author = $row['post_author'];
                        $post_title = $row['post_title'];
                        $post_category_id = $row['post_category_id'];
                        $post_status = $row['post_status'];
                        $post_image = $row['post_image'];
                        $post_tags = $row['post_tags'];
                        $post_content = mysqli_escape_string($connectoin, $row['post_content']);
                        $post_date = $row['post_date'];
                    }
                    
                    $query = "INSERT INTO posts(post_author, post_title, post_category_id, post_status, post_image, post_tags, post_content, post_date) ";
                    $query .= "VALUES('{$post_author}', '{$post_title}', $post_category_id, '{$post_status}', '{$post_image}', '{$post_tags}', '{$post_content}', '{$post_date}') ";

                    $copy_query = mysqli_query($connection, $query);
                    if(!$copy_query) {
                        die("QUERY FAILED " . mysqli_error($connection));
                    }

                    break;
            }
        }
    }
?>

<form action="" method="POST">
    <div id="bulkOptionsContainer" class="col-xs-4">
        <select class="form-control" name="bulk_options" id="">
            <option value="">Select Options</option>
            <option value="published">Publish</option>
            <option value="draft">Draft</option>
            <option value="clone">Clone</option>
            <option value="delete">Delete</option>
        </select>
    </div>
    <div class="col-xs-4">
        <input type="submit" name="submit" class="btn btn-success" value="Apply">
        <a class="btn btn-primary" href="posts.php?source=add_post">Add New</a>
    </div>
    <table class="table table-bordered table-hover">
        <thead>
            <tr>
                <th><input type="checkbox" id="selectAllBoxes"></th>
                <th>Id</th>
                <th>Author</th>
                <th>Title</th>
                <th>Category</th>
                <th>Status</th>
                <th>Image</th>
                <th>Tags</th>
                <th>Comments</th>
                <th>Date</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>View Count</th>
            </tr>
        </thead>
        <tbody>
            <?php 
                $query = "SELECT * FROM posts ORDER BY post_id DESC ";
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
                    $postViewCount = $row['post_view_count'];
                    
                    echo "<tr>";
            ?>
            
            <td><input type='checkbox' class='checkBoxes' name='checkBoxArray[]' value='<?php echo $postId;?>'></td>
            
            <?php
                    echo "<td>$postId</td>";
                    echo "<td>$postAuthor</td>";
                    echo "<td><a href='../post.php?p_id=$postId'>$postTitle</a></td>";

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
                    echo "<td><a onClick=\"javascript: return confirm('Are you sure you want to delete?');\" href='posts.php?delete=$postId'>Delete</a></td>";
                    echo "<td>{$postViewCount}</td>";
                    echo "</tr>";
                }
            ?>
        </tbody>
    </table>
</form>
<?php 
    if(isset($_GET['delete'])){
        $thePostId = $_GET['delete'];
        $query = "DELETE FROM posts WHERE post_id = $thePostId";
        $deleteQuery = mysqli_query($connection, $query);
        
        confirmQuery($deleteQuery);
        header("Location: posts.php");
    }
?>