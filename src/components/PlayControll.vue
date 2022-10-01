<template>
    <div class="play-Controls">
            <audio :src="song.path" ref="audioPlayer" v-bind:autoplay="isPlaying"  @timeupdate="onTimeUpdate"></audio>
            <div class="play-Controls-wrap">
                <div class="btn btn-prev" v-on:click="previous">
                    <font-awesome-icon icon="fas fa-step-backward" />
                </div>
                <div class="btn btn-toggle-play" v-on:click="playAudio">
                    <div v-if="isPlaying">
                        <font-awesome-icon  icon="fas fa-pause icon-pause" />
                    </div>
                    <div v-else>
                        <font-awesome-icon icon="fas fa-play icon-play" />
                    </div>
                </div>
                <div class="btn btn-next" v-on:click="next">
                    <font-awesome-icon icon="fas fa-step-forward" />
                </div>
                  <div class="btn btn-random">
                    <font-awesome-icon icon="fas fa-random" />
                  </div>
                  <span id="current-time" class="time">{{curmins}}:{{cursecs}}</span>
                <input id="progress" class="progress" type="range"  step="1" min="0" max="100" v-model="timeProgress" v-on:change="updateTime">    
                <span id="duration-time" class="time">{{durmins}}:{{dursecs}}</span>
            </div>
        </div>
</template>
<script>
    export default{
        data () {
        return {
            
            isPlaying : false,
            currentTime: 0,
            cursecs : 0,
            curmins : 0,
            dursecs : 0,
            durmins : 0,
            timeProgress : 0
        }
        },
         
        
        props: {
            song : {
                name : String,
                singer : String,
                path : String,
                image : String
            }
        },
        
        emits: ['next', 'previous',],
        methods: {
            onTimeUpdate () {
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
            playAudio(){
                if (this.isPlaying) {
                this.$refs.audioPlayer.pause();
                this.isPlaying = false;
            } else {
                this.$refs.audioPlayer.play();
                this.isPlaying = true;
            }
            },
           
            next () {
                this.$refs.audioPlayer.play();
                this.isPlaying = true;
                this.$emit('next');
            
            },
            previous () {
                this.$emit('previous');
                this.$refs.audioPlayer.play();
                this.isPlaying = true;
            },
            updateTime (e) {
                let seekTime = (this.$refs.audioPlayer.duration / 100) * e.target.value;
                this.$refs.audioPlayer.currentTime = seekTime;
            }
           

        },
        watch: {
            
        }, 
        computed:{
            
        }
         
    }
</script>
<style>
.play-Controls{
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-color: #f2f2f2;
    height: 50px;
    border-top: 2px solid #cecece;
    width: 100%;
    
    
    
}
.play-Controls-wrap{
    width: 1240px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    padding: 3px 0 8px 0;
    

}
.play-Controls-wrap .btn.active {
    color: var(--primary-color);
}
.play-Controls-wrap .btn-random{
    color: rgb(107, 1, 1);
    padding-right: 0px;
    padding-left: 0px;
}
.play-Controls-wrap .btn{
    color: rgb(0, 0, 0);
    padding-right: 18px;
    padding-left: 18px;
    font-size: 16px;
    cursor: pointer;
}
.play-Controls-wrap .btn-toggle-play{
    display: flex;
    background-color: var(--primary-color);
    width: 40px;
    height: 40px;
    font-size: 20px;
    color: #fff;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;

}
.playlist{
    padding: 12px;
    width: 1240px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
}
.progress {
    margin-left: 5px;
    margin-right: 5px;
    width: 50%;
    -webkit-appearance: none;
    height: 8px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
}
  
.progress::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 8px;
    background-color: var(--primary-color);
    cursor: pointer;
}
.ti-control-skip-backward{
    
}
</style>