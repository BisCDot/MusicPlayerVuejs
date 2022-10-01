<template>
    <PlayCd v-bind:song="songs[currentSongIndex]"></PlayCd>
    <div class="playlist" v-on:click="playlistClick">
        <div  v-for="(song , index) in songs" v-bind:key="index" v-bind:class="[songItemClass,(index === currentSongIndex) ? activeclass : '']" :data-index="index" 
        v-on:click="playSong(index)">
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
            @previous="playPrevious" @playAudio="playSong"></PlayControll>
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
    import PlayCd from "./PlayCd.vue";
    import PlayControll from "./PlayControll.vue";
    export default {
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
                    name: "Pink Venom",
                    singer: "BLACKPINK, BLACKPINK",
                    path: "https://stream.nixcdn.com/YG_Audio2/PinkVenom-BLACKPINK-7802564.mp3?st=coRqdVFNyoPnv-A4B-5ZFQ&e=1662974173&t=1662887775607",
                    image: "https://avatar-ex-swe.nixcdn.com/playlist/2022/09/07/9/0/3/7/1662516866218_500.jpg"
                },
                {
                    name: "Chờ",
                    singer: "KIM KUNNI",
                    path: "https://stream.nixcdn.com/Sony_Audio101/Cho-KimKunni-7698700.mp3?st=0YMb6B-l8fbGsATEPTekeA&e=1663146823&t=1663060426369",
                    image:
                    "https://avatar-ex-swe.nixcdn.com/song/2022/08/02/8/0/4/5/1659423161666_500.jpg"
                },
                {
                    name: "Chàng Trai Với Nụ Cười Tỏa Nắng",
                    singer: "Miina, RIN9",
                    path:
                    "https://stream.nixcdn.com/NhacCuaTui2024/ChangTraiVoiNuCuoiToaNang-MiinaRIN9-7611314.mp3?st=SfrcLX49kW46HtcnRAuONg&e=1663147230&t=1663060834364",
                    image: "https://avatar-ex-swe.nixcdn.com/song/2022/08/24/2/a/4/a/1661311132248_500.jpg"
                },
                {
                    name: "Trái Tim Yêu Thương",
                    singer: "Thúy Vân",
                    path: "https://stream.nixcdn.com/NhacCuaTui2023/TraiTimYeuThuong-ThuyVanAHau-7583812.mp3?st=Z4aef2ShBNmAbAYrnoRkyA&e=1663147230&t=1663060905832",
                    image:
                    "https://avatar-ex-swe.nixcdn.com/song/2022/07/06/5/e/b/8/1657076544602_500.jpg"
                },
                {
                    name: "Sao Em Không Rep?",
                    singer: "Daduc, Dagiam",
                    path: "https://stream.nixcdn.com/NhacCuaTui2023/SaoEmKhongRep-DaducDagiam-7583095.mp3?st=8Tt7chIbATlil-dENla_gA&e=1663147230&t=1663061017676",
                    image:
                    "https://avatar-ex-swe.nixcdn.com/song/2022/07/01/b/1/6/7/1656659095337_500.jpg"
                },
                {
                    name: "Để Em Ôm Anh",
                    singer: "Ngytoii",
                    path:
                    "https://stream.nixcdn.com/Sony_Audio99/DeEmOmAnh-ngytoii-7570794.mp3?st=JG3kWBAS6hUKueQOv-ILsw&e=1663147230&t=1663061442114",
                    image:
                    "https://avatar-ex-swe.nixcdn.com/song/2022/06/17/6/4/e/1/1655444497355_500.jpg"
                },
                {
                    name: "Em Là Hoàng Hôn",
                    singer: "Vang",
                    path: "https://f9-stream.nixcdn.com/NhacCuaTui2028/EmLaHoangHon-Vang-7851208.mp3?st=7hKVVxYWWuCsFEUYo2xrkg&e=1663148026&t=1663061630124",
                    image:
                    "https://avatar-ex-swe.nixcdn.com/song/2022/09/07/b/d/f/6/1662554042275_500.jpg"
                }
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
            playSong (index) {
            this.currentSongIndex = index;
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
