<form action="" method="post">
    <div class="form-group">
        <label for="cat_title">Edit Category</label>
        <?php 
            if(isset($_GET['edit'])) {
                $cat_id = $_GET['edit'];
                $query = "SELECT * FROM categories WHERE cat_id = $cat_id ";
                $selectCategoriesId = mysqli_query($connection, $query);

                while($row = mysqli_fetch_assoc($selectCategoriesId)) {
                    $cat_id = $row['cat_id'];
                    $cat_title = $row['cat_title'];
        ?>
        <input class="form-control" value="<?php if(isset($cat_title)){echo $cat_title;}?>" type="text" name="cat_title">
        <?php }} ?>
        <?php // update query
            if(isset($_POST['update_category'])){
                $theCatTitle = $_POST['cat_title'];
                $query = "UPDATE categories SET cat_title = '{$theCatTitle}' WHERE cat_id = $cat_id ";
                $update_query = mysqli_query($connection, $query);
                if (!$update_query) {
                    die($query . "QUERY FAILED " . mysqli_error($connection));
                }
            }
        ?>
    </div>
    <div class="form-group">
        <input class="btn btn-primary" type="submit" name="update_category" value="Update Category">
    </div>
</form>