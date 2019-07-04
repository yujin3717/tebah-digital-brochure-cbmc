<!-- template : 화면 -->
<template>
    <header id="header">
        <h1 class="screen-reader-text">{{screenText}}</h1>
        <div class="number">{{ number }}</div>
        <div class="book">{{ book }}</div>
        <div class="website">
            <!-- <a v-show="flag" v-bind:href="url" target="_blank" rel="nofollow noopener noreferrer">{{ brand }}</a> -->
        </div>
    </header>
</template>

<script>
import Vue from 'vue';

Vue.prototype.EventBus = new Vue();

export default {
    data(){
        return {
            screenText: 'CBMC Web Brochure Vol.01',
            number : 'No.46',
            book : '',
            flag : true,
            brand : '',
            url : 'http://',
            isActive : true,
        }
    },
    mounted(){
        const self = this;

        this.EventBus.$on('setHeader', function(activeSlide, previousSlide){
            //슬라이드의 브랜드명, 도메인 주소가져오기
            var brand = activeSlide.getAttribute("data-brand-name");
            var brandUrl = activeSlide.getAttribute("data-brand-url");
            
            self.book = brand;
            self.brand = brandUrl;
            // self.url = this.url + brandUrl;
            // Header를 감춰야 한다면 감추기 혹은 보여주기
            if(activeSlide.classList.contains('hide-header')){
                document.getElementById('header').classList.add('hide');
                document.getElementById('toggle-table-of-pages').classList.add('hide');
            }else{
                document.getElementById('header').classList.remove('hide');
                document.getElementById('toggle-table-of-pages').classList.remove('hide');
            }
        });
    },
}
</script>

<style lang="scss" scoped>
// Vue의 컴포넌트에서는 스타일을 각각 적용시킬수있음 scoped를 쓸경우 이 컴포넌트만 해당 스타일을 적용

</style>









