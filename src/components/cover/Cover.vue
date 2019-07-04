<template>
    <div id="cover" @click.prevent="moveMain" :class="{hide : isClick}">
        <div class="icon">
            <div class="overlay"></div>
            <object class="poster" :data="poster" type="image/svg+xml"></object>
        </div>
        <div class="content">
            <div class="time"><img :src="coverImg" width="255" alt=""></div>
            <div class="contact">
                <a class="stopProp" @click.stop :href="linkSrc" target="_blank" rel="noopener noreferrer">{{linkTxt}}</a> |
                <a class="stopProp" @click.stop :href="tel">{{telTxt}}</a></div>
            <div class="amount"><img :src="amount" width="84" alt=""></div>
            <div class="logo"><img :src="logo" width="113" alt=""></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            poster: 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/cover/cover.svg',
            coverImg : 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/cover/time.png',
            linkSrc: 'http://www.cbmc.or.kr',
            tel: 'tel:02-717-0111',
            amount: 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/cover/money@2x.png',
            logo: 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/cover/logo@2x.png',
            linkTxt: 'www.cbmc.or.kr',
            telTxt: '02)717-0111~2',
            isClick: false
        }
    },
    mounted(){
        
    },
    methods:{
        moveMain(){
            this.isClick = true;
        }
    }
}
</script>

<style lang="scss">

</style>


