<?php
    if(isset($_POST['submit'])){
        $post_title = $_POST['title'];
        $post_category_id = $_POST['post_category'];
        $post_author = $_POST['author'];
        $post_status = $_POST['post_status'];

        $post_image = $_FILES['image']['name'];
        $post_image_temp = $_FILES['image']['tmp_name'];

        $post_tags = $_POST['post_tags'];
        $post_content = mysqli_real_escape_string($connection, $_POST['post_content']);
        $post_date = date('d-m-y');
        // $post_comment_count = 4;

        move_uploaded_file($post_image_temp, "../images/$post_image");

        $query = "INSERT INTO posts(post_category_id, post_title, post_author, post_date, post_image, post_content, post_tags, post_status) ";
        $query .= "VALUES({$post_category_id}, '{$post_title}', '{$post_author}', now(), '{$post_image}', '{$post_content}','{$post_tags}', '{$post_status}') ";

        $create_post_query = mysqli_query($connection, $query);
        confirmQuery($create_post_query);

        $postId = mysqli_insert_id($conneciton);
        echo "<p class='bg-success'>Post is updated. <a href='../post.php?p_id=$postId'>View Post</a> or <a href='posts.php'>Edit More Posts</a></p>";
    }
?>

<form action="" method="POST" enctype="multipart/form-data">
    <div class="form-group">
        <label for="title">Post Title</label>
        <input type="text" class="form-control" name="title">
    </div>
    <div class="form-group">
        <label for="post_category">Post Category Id</label>
        <select name="post_category">
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
        <!-- <input type="text" class="form-control" name="post_category_id"> -->
    </div>
    <div class="form-group">
        <label for="title">Post Author</label>
        <input type="text" class="form-control" name="author">
    </div>
    <div class="form-group">
        <label for="title">Post Status</label>
        <select name="post_status" id="">
                <option value="draft">Select Options</option>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
        </select>
    </div>
    <div class="form-group">
        <label for="title">Post Image</label>
        <input type="file" name="image">
    </div>
    <div class="form-group">
        <label for="title">Post Tags</label>
        <input type="text" class="form-control" name="post_tags">
    </div>
    <div class="form-group">
        <label for="title">Post Content</label>
        <textarea class="form-control" id="body" name="post_content" rows="10" cols="30"></textarea>
    </div>
    <div class="form-group">
        <input type="submit" class="btn btn-primary" name="submit" value="Publish">
    </div>
</form>