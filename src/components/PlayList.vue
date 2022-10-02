<template>
    <PlayCd v-bind:song="songs[currentSongIndex]"></PlayCd>
    <div class="playlist" v-on:click="playlistClick">
        <div  v-for="(song , index) in songs" v-bind:key="index" v-bind:class="[songItemClass,(index === currentSongIndex) ? activeclass : '']" :data-index="index" 
        >
            <div class="thumb" v-bind:style="{backgroundImage :'url('+song.image+')'}">
            </div>
            <div class="body">
                <h3 class="title">{{song.name}}</h3>
                <p class="author">{{song.singer}}</p>
            </div>
            <div class="option">
                <font-awesome-icon icon="fas fa-ellipsis-h" />
            </div>
        </div>
    </div>
    <PlayControll v-bind:song="songs[currentSongIndex]" @next="playNext"
            @previous="playPrevious"  ></PlayControll>
</template>
<style>
    .playlist{
        padding: 12px;
        width: 1240px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 30px;
        
    }
    .song {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        background-color: #fff;
        padding: 8px 16px;
        border-radius: 5px;
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    }
      
    .song.active {
        background-color: var(--primary-color);
    }
      
    .song:active {
        opacity: 0.8;
    }
      
    .song.active .option,
    .song.active .author,
    .song.active .title {
        color: #fff;
    }
      
    .song .thumb {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background-size: cover;
        margin: 0 8px;
    }
      
    .song .body {
        flex: 1;
        padding: 0 16px;
    }
      
    .song .title {
        font-size: 18px;
        color: var(--text-color);
    }
      
    .song .author {
        font-size: 12px;
        color: #999;
    }
      
    .song .option {
        padding: 16px 8px;
        color: #999;
        font-size: 18px;
    }
    </style>
<script>
    import axios from "axios";
    import PlayControll from "./PlayControll.vue";
    import PlayCd from "./PlayCd.vue";

    export default {
        async mounted(){
        let result = await axios.get("https://localhost:5001/api/Songs/GetSong");
        this.songs = result.data;
    
         },
        components : {
        PlayCd,
        PlayControll
        },
         data(){
            return {
                songItemClass : 'song',
                activeclass: 'active',
                currentSongIndex : 0,
                songs: [
                    {
                    name: "",
                    singer: "",
                    path: "",
                    image: ""
                },
                
                ]
            }
        },
        
        
        
        methods : {
             playlistClick(event){
                const songNode = event.target.closest(".song:not(.active)");
                if (songNode || event.target.closest(".option")){
                    if (songNode) {
                       var indexlist = Number(songNode.dataset.index);
                        this.currentSongIndex = indexlist;
                         
                    }
                    if (event.target.closest(".option")) {
                        console.log("hihi");
                    }
                }
             
            },
            
            playNext () {
            if (this.currentSongIndex < this.songs.length - 1) {
                this.currentSongIndex += 1;
            } else {
                this.currentSongIndex = 0;
            }
            },
            playPrevious () {
            if (this.currentSongIndex != 0) {
                this.currentSongIndex -= 1;
            } else {
                this.currentSongIndex = this.songs.length - 1;
            }
            } 
         },
         
        
}
</script>
