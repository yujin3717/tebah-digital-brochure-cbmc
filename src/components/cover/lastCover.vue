<template>
    <div :id="pagenum" class="page-common swiper-slide full-height-page hide-header" :data-brand-name="databrandNm" data-brand-url="">
        <div class="page-common-inner" data-scrollbar>

            <div class="page-article">
                <div class="body">
                    <a class="logo animate fadeUp" data-animation :href="href" target="_blank" rel="noopener noreferrer"><img class="swiper-lazy" :data-src="logoImg" width="113" alt=""></a>
                    <a class="map" :href="maphref" target="_blank" rel="noopener noreferrer">
                        <img class="image swiper-lazy" :data-src="mapImg" width="295" alt="">
                        <div class="text">{{text}}<i class="cuscon-share"></i></div>
                    </a>
                </div>

                <div class="foot">
                    <div style="font-size: 15px; font-weight: 700;" v-html="foot">
                    </div>
                    <div style="margin-top: 40px; font-size: 11px; color: #414141; text-align: center;" v-html="copyright"></div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            pagenum: 'last-cover',
            databrandNm: 'CBMC 한국대회 청년초청집회',
            href: 'http://www.cbmc.or.kr/',
            text: '경주 HICO 화백컨벤션 센터 2층 ',
            maphref: 'https://place.map.kakao.com/26569221',
            logoImg: 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/p05/logo@2x.png',
            mapImg: 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/p05/last-map@2x.png',
            foot: `주최 | <a href="http://www.cbmc.or.kr/" target="_blank">한국CBMC</a><br>
                        주관 | 한국CBMC 창업선교위원회<br>
                        문의처 | 한국CBMC 중앙사무국 (<a href="tel:02-7171-0111">02-7171-0111</a>, <a href="mailto:cbmc@cbmc.or.kr" target="_blank">cbmc@cbmc.or.kr</a>)`,
            copyright: `<a href="http://monkeylab.co.kr" target="_blank" rel="noopener noreferrer">POWERED BY MONKEYLAB</a>`
        }
    }
}
</script>

<style lang="scss">

</style>


