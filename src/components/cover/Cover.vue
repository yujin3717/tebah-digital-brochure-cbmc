<template>
    <div id="cover" style="background-image: url('http://dev.tebah.media/cbmc/video-brochure/back@1x.png');">
        <div class="top">
            <div class="call">
                <div class="name" v-html="name"></div>
                <div class="text" v-html="text"></div>
            </div>
        </div>

        <div class="bottom">
            <div class="bell">
                <div class="flex-bell">
                    <img class="bell-icon" :src="clockImg" width="23" alt="">
                    <div class="bell-Text" v-html="clockText"></div>
                </div>
                <div class="flex-bell">
                    <img class="bell-icon" :src="talkImg" width="30" alt="">
                    <div class="bell-Text" v-html="talkText"></div>
                </div>
            </div>

            <div class="phone">
                <div class="choice" @click.prevent="moveMain($event)">
                    <a href="#"><img class="choice-icon" :src="noImg" width="80" alt=""></a>
                    <div class="choice-Text" v-html="noText"></div>
                </div>
                <div class="choice" @click.prevent="moveMain($event)">
                    <a href="#"><img class="choice-icon" :src="yesImg" width="80" alt=""></a>
                    <div class="choice-Text" v-html="yesText"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';

Vue.prototype.EventBus = new Vue();

export default {
    data(){
        return{
            poster: 'http://dev.tebah.media/cbmc/video-brochure/back@1x.png',
            name: '스타트업 선배님',
            text: '&#40;a.k.a 레전드&#41;',
            clockImg: 'http://dev.tebah.media/cbmc/video-brochure/clock@2x.png',
            clockText: '나중에 보기',
            talkImg: 'http://dev.tebah.media/cbmc/video-brochure/talk@2x.png',
            talkText: '메세지',
            noImg: 'http://dev.tebah.media/cbmc/video-brochure/거절@2x.png',
            noText: '거절',
            yesImg: 'http://dev.tebah.media/cbmc/video-brochure/응답@2x.png',
            yesText: '응답',
            isClick: true,
        }
    },
    mounted(){
    },
    methods:{
        moveMain(target){
            var cover = document.querySelector('#cover');
            var coverTimer;

            var self = this;

            // this.isClick = false;
            if ( ! cover.classList.contains('hide') ) {
                cover.classList.add('hide');
                cover.addEventListener('animationend', function(ev) {
                    if (ev.type === 'animationend') {
                        cover.style.display = "none";
                        self.EventBus.$emit('swiperInit');
                    }
                });
            } else {
                return false;
            }
        }
    }
}
</script>

<style lang="scss">
    .fade-enter-active, .fade-leave-active {
            transition: opacity 1s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>


