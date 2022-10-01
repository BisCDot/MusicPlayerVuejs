<template>
     <div id="systemPlaylistHero">
            <div class="title-Text-Line">
                    <h1 class="title-hot">{{song.name}}</h1>
                    
            </div>
            <div class="title-singer">
                <h2 class="singer">{{song.singer}}</h2>
            </div>
            <div class="cd">
                <div class="cd-thumb" :style="{backgroundImage:`url(${song.image})`}" >
                </div>
            </div>
            
        </div>
</template>
<script>
    export default {
        props: {
            song : {
                name : String,
                singer : String,
                path : String,
                image : String
            }
        }
    }
    </script>
<style>
    #systemPlaylistHero{
    background-image:
            linear-gradient(45deg,
              rgba(245,70,66, 0.75),
              rgba(8,83,156, 0.75));
            width: 100%;
            height: 280px;
            text-align: center;
            color: #fff;
    background-size: cover;
    width: 1200px;
    height: 380px;
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    position: relative;
}
.cd{
    display: flex;
    width: 200px;
    margin-left: 20px;
    margin-top: 50px;
    margin-bottom: auto;
    position: absolute;
    
}
.cd-thumb{
    width: 100%;
    padding: 60%;
    border-radius: 50%;
    background-size: cover;
}
#systemPlaylistHero .title-Text-Line{
    background-color: rgba(0,0,0,.8);
    font-size: 15px;
    line-height: 50px;
    margin: 60px 0px 0px 270px;
    padding-left: 10px;
    padding-right: 10px;
    position: absolute;
    
}
#systemPlaylistHero .title-Text-Line h1{
    color: #fff;
    font-family:'Lucida Grande';
}
.title-hot{

}
#systemPlaylistHero .title-singer{
    background-color: rgba(0,0,0,.8);
    font-size: 12px;
    line-height: 50px;
    margin: 120px 0px 0px 270px;
    padding-left: 10px;
    padding-right: 10px;
    position: absolute;
}
</style>