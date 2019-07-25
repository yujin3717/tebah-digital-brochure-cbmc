<template>
    <div :id="pagenum" class="page-common video-ad-page swiper-slide hide-header" :data-brand-name="databrandNm" data-brand-url="">
        <div class="page-common-inner" data-scrollbar>
            <div class="page-article">

                <div class="header">
                    <span class="ad">AD</span>
                    <button type="button" class="volume mute active"><i class="cuscon-volume-mute"></i></button>
                    <button type="button" class="volume on"><i class="cuscon-volume-on"></i></button>
                </div>

                <div class="video">
                    <video
                        poster="http://dev.tebah.media/cbmc/video-brochure/video-poster.jpg"
                        muted="true"
                        playsinline="true"
                        preload="metadata"
                        v-play="playing"
                        v-on:ended="setEnded"
                    >
                        <source :src="video" type="video/mp4">
                        브라우저가 Video 태그를 지원하지 않습니다.
                    </video>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            pagenum : 'page-1',
            databrandNm: 'CBMC 한국대회 청년초청집회',
            video: 'http://dev.tebah.media/cbmc/video-brochure/video.mp4',
            // 실행, 음소거, 멈췄을경우 광고여부, 일시정지버튼 숨김여부 토큰
            playing: false,
            ismuted: true,
            isStoped: false,
            isHidden: false
        }
    },
    mounted(){

        const self = this;
        // VideoPage로 넘어왔을경우 자동재생 EventBus -> Vuex로 변경해야함
        this.EventBus.$on('playVideo',function(){
            self.playing = true;
            self.isStoped = false;
        });
        // 페이지 이동시 Video Pause
        this.EventBus.$on('pauseVideo', function(){
            self.playing = false;
        });

    },
    directives: {
        play: {
            bind(el, binding, vnode) {
                el.addEventListener('playing', () => {
                vnode.context[binding.expression] = !el.paused;
                });
                el.addEventListener('pause', () => {
                vnode.context[binding.expression] = !el.paused;
                });
                vnode.context[binding.expression] = !el.paused;
            },
            update(el, binding) {
                if (el.paused) {
                    if (binding.value) {
                        el.play();
                    }
                } else if (!binding.value) {
                    el.pause();
                }
            }
        }
    },
    methods:{
        play() {
            this.playing = true;
            this.isStoped = false;
        },
        pause() {
            this.playing = false;
            this.isStoped = true;
        },
        muted(){
            this.ismuted = !this.ismuted;
            document.getElementById('videoPlayer').muted = this.ismuted;
        },
        setVideo(){

        },
        setEnded(){
            this.playing = false;
            this.EventBus.$emit('gotoNext');
        }
    },
    computed:{
        paused() {
            return !this.playing;
        }
    }
}
</script>

<style lang="scss">

</style>


