<template>
        <div class="form-main">
            <div class="form">
                <h3 class="heading">Thêm Nhạc Vào Trang Web</h3>
                <div class="spacer"></div>
            <div class="form-group">
                <label for="songname" class="form-label">Tên bài hát</label>
                <input id="song-name" name="song-name" type="text" class="form-control">
                
            </div>
            <div class="form-group">
                <label for="singer" class="form-label">Ca sĩ</label>
                <input id="singer" name="singer" type="text" class="form-control">
                
            </div>
            <div class="form-group">
                <label for="image" class="form-label">Link ảnh</label>
                <input id="image" name="image" type="text" class="form-control">
                
            </div>
            <div class="form-group">
                <label for="path" class="form-label">Link bài hát</label>
                <input id="path" name="path" type="text" class="form-control">
            </div>
            <button class="form-submit" >Thêm bài</button>
           </div>
            
        </div>
</template>
<style>
.form-main{
    background: #f1f1f1;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    font-family: "Open Sans", sans-serif;
    
}
.form{
    width: 360px;
    min-height: 100px;
    background:#ffffff;
    text-align: center;
    padding: 32px 24px;
    border-radius: 2px;
    margin: 24px;
    align-self: center;
    box-shadow: 0 2px 5px 0;
}
.form .heading {
    font-size: 2rem;
}
.spacer {
    margin-top: 36px;
  }
.form-group {
    display: flex;
    margin-bottom: 16px;
    flex-direction: column;
}
.form-control{
    height: 40px;
    padding: 8px 12px;
    border: 1px solid #b3b3b3;
    border-radius: 3px;
    outline: none;
    font-size: 1.4rem;
}
.form-label{
  text-align: left;
  font-weight: 700;
  padding-bottom: 6px;
  line-height: 1.8rem;
  font-size: 1.4rem;
}
.form-control:hover {
    border-color: #1dbfaf;
}
  
.form-group.invalid .form-control {
    border-color: #f33a58;
}
.form-submit{
    outline: none;
    background-color: #1dbfaf;
    width: 100%;
    margin-top: 12px;
    padding: 12px 16px;
    border-radius: 8px;
    font-size: 17px;
    border: none;
    color: #fff;
    cursor: pointer;
    
}
.form-submit:hover{
    background-color: #1ca093;
}

</style>
<script>
 export default {

}
</script>