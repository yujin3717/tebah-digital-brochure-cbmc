<template>
    <div id="page-container">
        <div id="page-container-inner" class="page-slider-container swiper-container">
            <div class="swiper-wrapper">
                <Page1/>
                <Page2/>
                <Page3/>
                <Page4/>
                <Page5/>
                <lastCover/>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper/dist/js/swiper.js'
import Page1 from '../pages/Page1.vue'
import Page2 from '../pages/Page2.vue'
import Page3 from '../pages/Page3.vue'
import Page4 from '../pages/Page4.vue'
import Page5 from '../pages/Page5.vue'
import lastCover from '../cover/lastCover.vue'
import Vue from 'vue'

import Scrollbar from 'smooth-scrollbar'
import { CountUp } from 'countup.js'

Vue.prototype.EventBus = new Vue();

export default {
    components:{
        Page1,
        Page2,
        Page3,
        Page4,
        Page5,
        lastCover
    },
    data(){
        return{
            
        }
    },
    mounted(){
        Scrollbar.initAll();
        Scrollbar.detachStyle();
        //main contents swiper
        var self= this;
        var webMagazineSlider = new Swiper('.page-slider-container', {
          init: false,
          loop: false,
          speed: 600,
          followFinger: false,
          threshold: 10,
          touchReleaseOnEdges: true,
          preventInteractionOnTransition: true,
          preloadImages: false,
          lazy: {
              loadPrevNext: true,
            //   loadPrevNextAmount: 0,
          },
          navigation: {
              prevEl: '#footer .buttons .prev',
              nextEl: '#footer .buttons .next',
          },
          pagination: {
              el: '#footer .paging',
              type: 'fraction',
          },
          on: {
              init: function(){
                  // init function
                  var activeSlide   = this.slides[this.activeIndex];
                  var previousSlide = this.slides[this.previousIndex];
                  self.activeSlide = activeSlide;
                  self.previousSlide = previousSlide;
                  // ScrollInfo init
                  self.initScrollInfo(this.slides);
                  //page Scrolling Event
                  var scrollbar = Scrollbar.get(activeSlide.firstChild);
                  scrollbar.removeListener(self.scrollingEvent);
                  scrollbar.addListener(self.scrollingEvent);
                  self.scrollbar = scrollbar;
                  //page contents animation Event
                  self.animation(activeSlide, previousSlide);
                  // Header 처리 EventBus
                  self.EventBus.$emit('setHeader',activeSlide, previousSlide);
                  // 동영상 광고 페이지
                //   self.videoAdPageFnc(activeSlide, previousSlide);
                  // ScrollInfo set
                  self.setScrollInfo(activeSlide,previousSlide);
                  // Countup Event
                  self.setCountup();
              },
              slideChange: function() {
                  //Progressbar set EventBus
                  self.EventBus.$emit('setProgress', this.activeIndex + 1);
                  
                  var activeSlide   = this.slides[this.activeIndex];
                  var previousSlide = this.slides[this.previousIndex];

                  self.activeSlide = activeSlide;
                  self.previousSlide = previousSlide;

                  var scrollbar = Scrollbar.get(activeSlide.querySelector('[data-scrollbar]'));
                  scrollbar.setPosition(0,0);
              },
              slideChangeTransitionEnd: function() {
                  var activeSlide   = this.slides[this.activeIndex];
                  var previousSlide = this.slides[this.previousIndex];
                
                  self.activeSlide = activeSlide;
                  self.previousSlide = previousSlide;

                  //page Scrolling Event
                  var scrollbar = Scrollbar.get(activeSlide.firstChild);
                  scrollbar.removeListener(self.scrollingEvent);
                  scrollbar.addListener(self.scrollingEvent);
                  //EventBus 슬라이드 변경시 헤더변경 이벤트
                  self.EventBus.$emit('setHeader',activeSlide, previousSlide);
                  //page contents animation Event
                  self.animation(activeSlide, previousSlide);
                  // 동영상 광고 페이지(해당 브로슈어는 동영상 페이지가 없음)
                //   self.videoAdPageFnc(activeSlide, previousSlide);
                  // ScrollInfo set
                  self.setScrollInfo(activeSlide,previousSlide);
                  // Countup Event
                  self.setCountup();
                //   Inner Slider Page(해당 브로슈어는 이너슬라이드가 없으므로 뺌)
                //   self.setInnerSlide();
              }
          },
        //   virtual:{
        //       slides: self.slides,
        //       renderExternal(data){
        //           self.virtualData = data;
        //       }
        //   }
        });
        // Swiper init EventBus
        this.EventBus.$on('swiperInit', function(){
            self.$nextTick(function(){
                webMagazineSlider.init();
            });
        });
        // Vue EventBus를 이용하여 컴포넌트간 데이터를 주고받음
        // Contents 페이지의 페이지 이동 Event 동작 수신
        this.EventBus.$on('changePage', function(index){
            webMagazineSlider.lazy.loadInSlide(index - 1);
            webMagazineSlider.slideTo(index - 1, 1000, true);
            self.isPageindex = index - 1;
            // progressBar set EventBus
            self.EventBus.$emit('setProgress', index);
        });
        // Top으로 스크롤시 발생 bounce 제거
        this.setNotBounce();    
        // Panorama Slider Page
        var panoramaSlider = new Swiper('.panorama-slider', {
            loop: false,
            speed: 3000,
            // autoplay: {
            // 	stopOnLastSlide: true,
            // },
            slidesPerView: 1,
            freeMode: true,
            nested: true,
            resistanceRatio: 0,
            // freeModeMomentum: false,
            freeModeMomentumBounce: false,
            on:{
                init: function(){
                    var slf = this;
                    // 현재 페이지가 파노마라 페이지일경우 auto play set
                    self.EventBus.$on('setPanorama', function(){
                        slf.autoplay.delay = 0;
                        slf.autoplay.stopOnLastSlide = true;
                        slf.autoplay.start();
                    });
                    // 이전 페이지가 파노라마 페이지일 경우 페이지 초기화
                    self.EventBus.$on('initPanorama', function(){
                        slf.slideTo(0,0);
                    });
                }
            }
        });  
    },
    methods:{
        animation(activeSlide, previousSlide){
            // console.log("animation : " + activeSlide);
            // console.log(activeSlide);
            // var pageHeight = Array.from(document.getElementsByClassName('page-common'), el => el.getBoundingClientRect().height);
            // var highest = Math.max(...pageHeight);
            var pageHeight = activeSlide.clientHeight;
            var highest = pageHeight - 30;
            
            
            var active = Array.from(activeSlide.getElementsByClassName('animate'));
            var prev = null;
            
            var isAnipage = activeSlide.classList.contains('animation-page');
            var prevAnipage = null;

            var isPanorama = activeSlide.classList.contains('panorama-slider-page');
            var prevPanorama = null;

            if(previousSlide !== undefined){
                prev = Array.from(previousSlide.getElementsByClassName('animate'));
                prevAnipage = previousSlide.classList.contains('animation-start');
                prevPanorama = previousSlide.classList.contains('panorama-slider-page');
            }
            
            active.forEach(function(el){
                var offset = Math.ceil(el.getBoundingClientRect().top);

                if( offset < Math.ceil(highest / 1.2 )) {
                    el.classList.add("show");
                }
            });

            if(prev !== null) {
                prev.forEach(function(el){
                    el.classList.remove("show");
                });
                // 카운트업 초기화
                var countElm = previousSlide.querySelectorAll('[data-countup]');
                if ( countElm.length > 0 ) {
                    for ( var i = countElm.length - 1; i >= 0; i-- ) {
                        var t = countElm[i];

                        if ( t.classList.contains('count-done') ) {
                            t.classList.remove('count-done');
                            t.innerHTML = 0;
                        }
                    }
                }
            }

            if(isAnipage){
                activeSlide.classList.add('animation-start');
            }

            if(prevAnipage){
                previousSlide.classList.remove('animation-start');
            }

            if(isPanorama){
                console.log("isPanorama");
                // 파노라마 페이지 동작
                this.EventBus.$emit('setPanorama');
            }

            if(prevPanorama){
                //파노라마 페이지 초기화
                this.EventBus.$emit('initPanorama');
            }
        },
        setInnerSlide(){
            var innerSlides = Array.from(document.getElementsByClassName('slider-block'));
            // 페이지별 이지미 슬라이드 추가를 위해 임의적으로 클래스를 추가하여 Swiper init을 함
            innerSlides.forEach(function(el, index){
                el.querySelector('.swiper-container').classList.add('instance-'+index);
                el.querySelector('.dots').classList.add('dot-instance-'+index);
                el.querySelector('.prev').classList.add('btn-prev-'+index);
                el.querySelector('.next').classList.add('btn-next-'+index);
                // console.log(el);
                var innerSlider = new Swiper('.instance-' + index,{
                        loop: true,
                    	preloadImages: false,
                    	lazy: true,
                    	pagination: {
                    		el: '.dot-instance-'+index,
                    	},
                    	navigation: {
                    		prevEl: '.btn-prev-'+index,
                    		nextEl: '.btn-next-'+index,
                    	},
                });
            });
        },
        initScrollInfo(slides){
            var slides = Array.from(slides);

            slides.forEach(function(el){
                
                var Scrollcontent = el.querySelector('.scroll-content');
                // console.log(Scrollcontent);
                if(Scrollcontent.clientHeight > el.clientHeight){
                    el.insertAdjacentHTML('beforeend', '<div class="scroll-info"><div class="scroll-info-inner"><i class="cuscon-scrolling"></i></div></div>');
                }
            });
            
        },
        setScrollInfo(activeSlide, previousSlide){

            var scrollInfo = activeSlide.getElementsByClassName('scroll-info');
            var timeout;

            if(scrollInfo.length > 0){
                if(activeSlide.getElementsByClassName('scroll-content')[0].getBoundingClientRect().height > activeSlide.getBoundingClientRect().height){
                    scrollInfo[0].classList.add('show');
                    setTimeout(() => {
                        scrollInfo[0].classList.remove('show');
                    }, 2000);
                }else{
                    scrollInfo[0].classList.remove('show');
                }
            }
        },
        scrollingEvent(status){
            
            var container = this.$el.lastChild,
                st        = status.offset.y;
            
            this.animation(container);

            // 연속적인 숫자일 경우 뒷 숫자를 애니메이션 처리(countup.js 이용)
            this.setCountup();

            if( st > this.lastSt && st > 50) {
                document.getElementById('header').classList.add('hide');
                document.getElementById('toggle-table-of-pages').classList.add('hide');
            }else{
                if(st < status.limit.y){
                    if(!this.activeSlide.classList.contains('hide-header')){
                        document.getElementById('header').classList.remove('hide');
                        document.getElementById('toggle-table-of-pages').classList.remove('hide');
                    }
                }
            }

            this.lastSt = st;
        
        },
        videoAdPageFnc(activeSlide, previousSlide){
            var isVideo = activeSlide.classList.contains('video-ad-page');

            if(isVideo){
                //동영상 페이지인경우 동영상 플레이 EventBus
                this.EventBus.$emit('playVideo');
            }else{
                //이전슬라이드가 있고, video-ad-page일 경우 동작
                if(previousSlide !== undefined && previousSlide.classList.contains('video-ad-page')){
                    this.EventBus.$emit('pauseVideo');
                }
            }
        },
        setNotBounce(){
            console.log("setNotbounce");
            /**
             * 2019-04-12 14:36 김태영
             * 스크롤을 제일 위로 올렸을 때 발생하는 bounce를 없애기 위해 추가
             * https://stackoverflow.com/questions/20461485/ios-disable-bounce-scroll-but-allow-normal-scrolling/20477023
             */
            var content = document.getElementById('wrap');
            content.addEventListener('touchstart', function(event){
                this.allowUp = (this.scrollTop > 0);
                this.allowDown = (this.scrollTop < this.scrollHeight - this.clientHeight);
                this.slideBeginY = event.pageY;
            });

            content.addEventListener('touchmove', function(event) {
                var up = (event.pageY > this.slideBeginY);
                var down = (event.pageY < this.slideBeginY);
                this.slideBeginY = event.pageY;
                if ((up && this.allowUp) || (down && this.allowDown)) {
                    event.stopPropagation();
                }
                else {
                    event.preventDefault();
                }
            });
        },
        setCountup(){

            var scrollbar = this.scrollbar;

            // 카운트업(초기화는 animation event에 추가)
            var winHeight = window.screen.height;
            var countElm  = this.activeSlide.querySelectorAll('[data-countup]');
            var pageHeight = this.activeSlide.clientHeight;
            var trigger = pageHeight - 30;
            
            if ( countElm.length > 0 ) {
                
                for ( var i = countElm.length - 1; i >= 0; i-- ) {
                    var t      = countElm[i];
                    var rect   = t.getBoundingClientRect();
                    var offset = Math.ceil( rect.top - ( winHeight - pageHeight ) / 2.5 );
                    var id     = t.getAttribute('data-countup');
                    var value  = parseInt( t.getAttribute('data-count-value') );

                    // smooth-scrollbar의 isVisible을 이용하여 countup 태그일 경우만 동작하도록
                    if(scrollbar.isVisible(this.activeSlide.querySelector('[data-countup='+id+']'))){
                        if ( ( offset < trigger ) && ! t.classList.contains('count-done') ) {
                            var count  = new CountUp( this.activeSlide.querySelector('[data-countup='+id+']'), value );
                            count.start(() => console.log("countup complete"));
                            t.classList.add('count-done');
                        }
                    }
                }
            }

        }
    }
}
</script>

<style lang="scss">

</style>


