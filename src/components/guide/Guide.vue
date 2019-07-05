<template>
    <transition name="fade">
        <div v-if="flag" id="guide">
            <div class="guide-slider swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img :src="guideImg" alt="브로슈어 이용 가이드 첫번째 이미지"
                                :srcset="srcSet">
                    </div>
                    <div class="swiper-slide"></div>
                </div>
                <div class="swiper-dots"></div>
            </div>
        </div>
    </transition>
</template>

<script>
import Swiper from 'swiper/dist/js/swiper.js';
import Vue from 'vue';

Vue.prototype.EventBus = new Vue();

export default {
    data(){
        return {
            guideImg : 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/guide/01.png',
            srcSet : 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/guide/01@2x.png',
            flag: true,
        }
    },
    mounted(){
        var self = this;
        // guide swiper
        var guideSlider = new Swiper('.guide-slider', {
            init: false,
            loop: false,
            zoom: false,
            pagination: {
                el: '#guide .swiper-dots',
                type: 'bullets',
            },
            on: {
                init: function(){
                    console.log("guideinit");
                },
                reachEnd: function() {
                    //set fadeOut
                    self.flag = false;
                    //set main Content Swiper Init EventBus
                    self.EventBus.$emit('swiperInit');
                },
            },
        });
        guideSlider.init();
    }
}
</script>

<style lang="scss">
    .fade-enter-active, .fade-leave-active {
            transition: opacity 0.5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
