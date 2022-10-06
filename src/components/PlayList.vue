<template>
    <audio v-bind:src="songs[currentSongIndex].path"  ref="audioPlayer" :autoplay="isPlaying"   @timeupdate="onTimeUpdate" @ended="onended()" :onplay="Onplay" :onpause="onPause" ></audio>
    <PlayCd v-bind:song="songs[currentSongIndex]" @rotate="rotate" :degree="degree"></PlayCd>
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
    
    <PlayControll v-model:song="songs[currentSongIndex]" @next="playNext"
            @previous="playPrevious" @playAudio="Play" :isPlaying="isPlaying"
            @updateTime="updateTime"
            :timeProgress="timeProgress" 
            :cursecs="cursecs" 
            :curmins="curmins"
            :dursecs="dursecs"
            :durmins="durmins"
            ref="childRef" ></PlayControll>
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
    import { ref } from "vue";


    export default {
        async mounted(){
        let result = await axios.get("https://localhost:5001/api/Songs/GetSong");
        this.songs = result.data;
    
         },
        setup(){
            const childRef = ref();
            return {childRef}
        },
        components : {
        PlayCd,
        PlayControll
        },
         data(){
            return {
                degree : 0,
                timer : 0,
                songItemClass : 'song',
                activeclass: 'active',
                currentSongIndex : 0,
                isPlaying : false,
                currentTime: 0,
                cursecs : 0,
                curmins : 0,
                dursecs : 0,
                durmins : 0,
                timeProgress : 0,
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
            rotate(){
                  this.timer = setTimeout(() => {
                 ++this.degree; this.rotate();
                 },35);
            },
            playlistClick(event){
                
                const songNode = event.target.closest(".song:not(.active)");
                if (songNode || event.target.closest(".option")){
                    if (songNode) {
                       var indexlist = Number(songNode.dataset.index);
                        this.currentSongIndex = indexlist;
                        this.isPlaying = true;
                        this.degree = 0;
                        clearTimeout(this.timer);
                        
                    }
                    if (event.target.closest(".option")) {
                        console.log("hihi");
                    }
                }
             
            },
            Play(){
                if(this.isPlaying){
                    this.$refs.audioPlayer.pause();
                }else{
                    this.$refs.audioPlayer.play();
                }

            },
            Onplay() {
                this.isPlaying = true;
                this.rotate();
            },
            onPause(){
                this.isPlaying = false;
                clearTimeout(this.timer);
            },
            updateTime(){
                let seekTime = (this.$refs.audioPlayer.duration / 100) * this.$refs.childRef.e.event;
                this.$refs.audioPlayer.currentTime = seekTime  
                
            },
            onTimeUpdate() {
                if(this.$refs.audioPlayer.duration){
                    let timeProgress = this.$refs.audioPlayer.currentTime * (100 / this.$refs.audioPlayer.duration);
                    this.timeProgress = timeProgress;
                    let curmins = Math.floor(this.$refs.audioPlayer.currentTime / 60);
                    let cursecs = Math.floor(this.$refs.audioPlayer.currentTime - curmins * 60);
                    if(cursecs < 10){ cursecs = "0"+cursecs; }
                    if(curmins < 10){ curmins = "0"+curmins; }
                    this.curmins = curmins;
                    this.cursecs = cursecs;
                    let durmins = Math.floor(this.$refs.audioPlayer.duration / 60);
                    let dursecs = Math.floor(this.$refs.audioPlayer.duration - durmins * 60);
                
                    if(dursecs < 10){ dursecs = "0"+dursecs; }
                    if(durmins < 10){ durmins = "0"+durmins; }
                    this.durmins = durmins;
                    this.dursecs = dursecs;
                    
                }
            },
            
            
            playNext () {
                this.currentSongIndex++
            if (this.currentSongIndex >= this.songs.length) {
                this.currentSongIndex = 0;
                
            }
                        this.isPlaying = true;
                        this.degree = 0;
                        clearTimeout(this.timer);
            },
            playPrevious () {
            if (this.currentSongIndex != 0) {
                this.currentSongIndex -= 1;
            } else {
                this.currentSongIndex = this.songs.length - 1;
            }
                        this.isPlaying = true;
                        this.degree = 0;
                        clearTimeout(this.timer);
            },
            onended(){
                this.playNext();
            },
            
         },
         
        
}
</script>
