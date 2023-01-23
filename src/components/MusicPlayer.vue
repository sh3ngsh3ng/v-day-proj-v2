<template>
    <div id="music-player">
        <v-icon class="sound-icon" scale="2" v-if="this.musicPlaying" name="co-volume-high"
            @click="playMusic">Music</v-icon>
        <v-icon class="sound-icon" scale="2" v-else name="co-volume-off" @click="playMusic">Music</v-icon>
        <audio ref="audioPlayer" :src="audioSrc" type="audio" loop></audio>
    </div>
</template>



<script>
    import OhVueIcon from "oh-vue-icons"
    export default {
        data: function () {
            return {
                audioSrc: require('../../public/perfect-piano.mp3'),
                musicPlaying: false
            }
        },
        mounted: function () {
            console.log("called")
            // this.$refs.audioPlayer.play();
        },
        methods: {
            playMusic: function () {
                if (this.musicPlaying) {
                    this.$refs.audioPlayer.pause();
                } else {
                    this.$refs.audioPlayer.play();
                }
                this.musicPlaying = !this.musicPlaying
            }
        },
        components: {
            "v-icon": OhVueIcon
        }

    };
</script>




<style scoped>
    #music-player {
        position: absolute;
        width: 20px;
        height: 0;
        top: 1%;
        right: 5%;
    }

    .sound-icon {
        font: 100px
    }
</style>