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
?>

<form action="" method="POST" enctype="multipart/form-data">
    <div class="form-group">
        <label for="title">Post Title</label>
        <input value="<?php echo $postTitle;?>" type="text" class="form-control" name="title">
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
        <input value="<?php echo $postAuthor;?>" type="text" class="form-control" name="author">
    </div>
    <div class="form-group">
        <label for="title">Post Status</label>
        <input value="<?php echo $postStatus;?>" type="text" class="form-control" name="post_status">
    </div>
    <div class="form-group">
        <img width="100" src="../<?php echo $postImage;?>" alt="image">
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