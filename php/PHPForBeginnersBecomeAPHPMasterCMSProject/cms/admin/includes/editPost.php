<?php 
    if(isset($_GET['p_id'])) {
        $postIdToEdit = $_GET['p_id'];
    }

    $query = "SELECT * FROM posts WHERE post_id = $postIdToEdit ";
    $selectPostsById = mysqli_query($connection, $query); 

    while ($row = mysqli_fetch_assoc($selectPostsById)){
        $postId = $row['post_id'];
        $postAuthor = $row['post_author'];
        $postTitle = $row['post_title'];
        $postCategoryId = $row['post_category_id'];
        $postStatus = $row['post_status'];
        $postImage = $row['post_image'];
        $postContent = $row['post_content'];
        $postTags = $row['post_tags'];
        $postCommentCount = $row['post_comment_count'];
        $postDate = $row['post_date'];
    }

    if(isset($_POST['submit'])) {
        $post_author = $_POST['post_author'];
        $post_title = $_POST['post_title'];
        $post_category_id = $_POST['post_category'];
        $post_status = $_POST['post_status'];
        $post_image = $_FILES['image']['name'];
        $post_image_temp = $_FILES['image']['tmp_name'];
        $post_content = $_POST['post_content'];
        $post_tags = $_POST['post_tags'];

        move_uploaded_file($post_image_temp, "../images/$post_image");

        // prevent removing the image if there's no new image updated
        if(empty($post_image)){
            $query = "SELECT * FROM posts WHERE post_id = $postIdToEdit";
            $selectImage = mysqli_query($connection, $query);
            while($row = mysqli_fetch_assoc($selectImage)) {
                $post_image = $row['post_image'];
            }
        }

        $query = "UPDATE posts SET ";
        $query .= "post_title = '{$post_title}', ";
        $query .= "post_category_id = '{$post_category_id}', ";
        $query .= "post_date = now(), ";
        $query .= "post_author = '{$post_author}', ";
        $query .= "post_status = '{$post_status}', ";
        $query .= "post_tags = '{$post_tags}', ";
        $query .= "post_content = '{$post_content}', ";
        $query .= "post_image = '{$post_image}' ";
        $query .= "WHERE post_id = {$postIdToEdit} ";

        $updateQuery = mysqli_query($connection, $query);
        confirmQuery($updateQuery);
        header("Location: posts.php?source=edit_post&p_id=$postIdToEdit");
    }
?>

<form action="" method="POST" enctype="multipart/form-data">
    <div class="form-group">
        <label for="title">Post Title</label>
        <input value="<?php echo $postTitle;?>" type="text" class="form-control" name="post_title">
    </div>
    <div class="form-group">
        <label for="post_category">Post Category</label>
        <select name="post_category" id="post_category">
            <?php
                $query = "SELECT * FROM categories ";
                $select_categories = mysqli_query($connection, $query);

                confirmQuery($select_categories);

                while($row = mysqli_fetch_assoc($select_categories)) {
                    $cat_id = $row['cat_id'];
                    $cat_title = $row['cat_title'];

                    echo "<option value='$cat_id'>$cat_title</option>";
                }
            ?>
        </select>
    </div>
    <div class="form-group">
        <label for="title">Post Author</label>
        <input value="<?php echo $postAuthor;?>" type="text" class="form-control" name="post_author">
    </div>
    <div class="form-group">
        <label for="title">Post Status</label>
        <input value="<?php echo $postStatus;?>" type="text" class="form-control" name="post_status">
    </div>
    <div class="form-group">
        <img width="100" src="../images/<?php echo $postImage;?>" alt="image">
        <input type="file" name="image" id="">
    </div>
    <div class="form-group">
        <label for="title">Post Tags</label>
        <input value="<?php echo $postTags;?>" type="text" class="form-control" name="post_tags">
    </div>
    <div class="form-group">
        <label for="title">Post Content</label>
        <textarea class="form-control" name="post_content" rows="10" cols="30"><?php echo $postContent;?></textarea>
    </div>
    <div class="form-group">
        <input type="submit" class="btn btn-primary" name="submit" value="Update">
    </div>
</form>