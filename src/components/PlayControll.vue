<template>
    <div class="play-Controls">
            <audio v-bind:src="song.path" ref="audioPlayer" v-bind:autoplay="isPlaying" ></audio>
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
                    <i class="fas fa-step-forward"></i>
                </div>
                  <div class="btn btn-random">
                    <font-awesome-icon icon="fas fa-random" />
                    <i class="fas fa-random"></i>
                  </div>
                  <span id="current-time" class="time">00:00</span>
                <input id="progress" class="progress" type="range"  value="0" step="1" min="0" max="100">    
                <span id="duration-time" class="time">0:00</span>
            </div>
        </div>
</template>
<script>
    export default{
        data () {
        return {
            isPlaying: false,
            currentTime: 0,
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
        emits: ['next', 'previous','playAudio'],
        methods: {
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
            }

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