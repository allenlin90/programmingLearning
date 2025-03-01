<?php include "includes/db.php";?>
<?php include "includes/header.php";?>
<!-- Navigation -->
<?php include "includes/navigation.php";?>

<!-- Page Content -->
<div class="container">

    <div class="row">

        <!-- Blog Entries Column -->
        <div class="col-md-8">

            <?php                
                if(isset($_GET['p_id'])) {
                    $postId = $_GET['p_id'];

                    $view_query = "UPDATE posts SET post_view_count = post_view_count + 1 WHERE post_id = $postId";
                    $send_query = mysqli_query($connection, $view_query);

                    $query = "SELECT * FROM posts WHERE post_id = $postId";

                    $selectAllPostsQuery = mysqli_query($connection, $query);

                    while($row = mysqli_fetch_assoc($selectAllPostsQuery)) {
                        $post_id = $row['post_id'];
                        $postTitle = $row['post_title'];
                        $postAuthor = $row['post_author'];
                        $postDate = $row['post_date'];
                        $postImage = $row['post_image'];
                        $postContent = $row['post_content'];
            ?>            

            <h1 class="page-header">
                Page Heading
                <small>Secondary Text</small>
            </h1>

            <!-- First Blog Post -->
            <h2>
                <a href="post.php?p_id=<?php echo $post_id;?>"><?php echo $postTitle;?></a>
            </h2>
            <p class="lead">
                by <a href="index.php"><?php echo $postAuthor;?></a>
            </p>
            <p><span class="glyphicon glyphicon-time"></span> Posted on <?php echo $postDate;?></p>
            <hr>
            <img class="img-responsive" src="images/<?php echo $postImage;?>" alt="">
            <hr>
            <p><?php echo $postContent;?></p>

            <hr>

            <?php }
                } else {
                    header("Location: index.php");
                }
            ?>

            <?php 
                if(isset($_POST['create_comment'])) {
                    $postId = $_GET['p_id'];
                    $comment_author = $_POST['comment_author'];
                    $comment_email = $_POST['comment_email'];
                    $comment_content = $_POST['comment_content'];
                    
                    if(!empty($comment_author) && !empty($comment_email && !empty($comment_content))){
                        $query = "INSERT INTO comments (comment_post_id, comment_author, comment_email, comment_content, comment_status, comment_date) ";
                        $query .= "VALUES($postId, '{$comment_author}', '{$comment_email}', '{$comment_content}', 'unapproved', now()) ";

                        $create_comment_query = mysqli_query($connection, $query);

                        if(!$create_comment_query) {
                            die("QUERY FAILED " . mysqli_error($connection));
                        }
                    
                        $query = "UPDATE posts SET post_comment_count = post_comment_count + 1 ";
                        $query .= "WHERE post_id = $postId";

                        $updateCommentCount = mysqli_query($connection, $query);

                        if(!$updateCommentCount) {
                            die("QUERY FAILED " . mysqli_error($connection));
                        }
                    } else {
                        echo "<script>alert('Fields cannot be empty')</script>";
                    }
                }
            ?>

            <div class="well">
                <h4>Leave a Comment:</h4>
                <form action="" method="post" role="form">
                    <div class="form-group">
                        <label for="Author">Author</label>
                        <input type="text" class="form-control" name="comment_author">
                    </div>

                    <div class="form-group">
                        <label for="Author">Email</label>
                        <input type="email" class="form-control" name="comment_email">
                    </div>

                    <div class="form-group">
                        <label for="comment">Your Comment</label>
                        <textarea name="comment_content" class="form-control" rows="3"></textarea>
                    </div>
                    <button type="submit" name="create_comment" class="btn btn-primary">Submit</button>
                </form>
            </div>

            <hr>

            <!-- Posted Comments -->
            <?php
                $query = "SELECT * FROM comments WHERE comment_post_id = {$postId} ";
                $query .= "AND comment_status = 'approved' ";
                $query .= "ORDER BY comment_id DESC";

                $select_comment_query = mysqli_query($connection, $query);
                if(!$select_comment_query) {
                    die('QUERY FAILED' . mysqli_error($connection));
                }

                while($row = mysqli_fetch_assoc($select_comment_query)) {
                    $comment_date = $row['comment_date'];
                    $comment_content = $row['comment_content'];
                    $comment_author = $row['comment_author'];
                ?>
                <div class="media">
                <a class="pull-left" href="#">
                    <img class="media-object" src="http://placehold.it/64x64" alt="">
                </a>
                <div class="media-body">
                    <h4 class="media-heading"><?php echo $comment_author;?>
                        <small><?php echo $comment_date;?></small>
                    </h4>
                    <?php echo $comment_content;?>
                </div>
            </div>
            <?php }?>

        </div>

        <!-- Blog Sidebar Widgets Column -->
        <?php include "includes/sidebar.php";?>

    </div>
    <!-- /.row -->

    <hr>
    <!-- footer -->
    <?php include "includes/footer.php";?>
