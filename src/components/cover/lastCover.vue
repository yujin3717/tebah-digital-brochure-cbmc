<template>
    <div :id="pagenum" class="page-common swiper-slide full-height-page hide-header" :data-brand-name="databrandNm" data-brand-url="">
        <div class="page-common-inner" data-scrollbar>

            <div class="page-article">
                <div class="body">
                    <a class="logo animate fadeUp" data-animation :href="href" target="_blank" rel="noopener noreferrer"><img class="swiper-lazy" :data-src="logoImg" width="113" alt=""></a>
                    <a class="map" :href="maphref" target="_blank" rel="noopener noreferrer">
                        <div class="label">{{label}}</div>
                        <img class="image swiper-lazy" :data-src="mapImg" width="295" alt="">
                        <div class="text">{{text}}<i class="cuscon-share"></i></div>
                    </a>

                    <div class="sns">
                        <a class="facebook" :href="facebookhref" target="_blank"><i class="cuscon-social-facebook"></i></a>
                        <a class="instagram" :href="instagramhref" target="_blank"><i class="cuscon-fa-instagram"></i></a>
                    </div>
                </div>

                <div class="foot">
                    <div class="data" v-html="foot">
                    </div>
                    <div class="powered" v-html="copyright"></div>
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
            label: '행사장 안내',
            text: '경주 HICO 화백컨벤션 센터 2층 ',
            maphref: 'https://place.map.kakao.com/26569221',
            facebookhref: 'https://www.facebook.com/CBMC-창업선교위원회-475539803255772',
            instagramhref: 'https://www.instagram.com/cbmc_startupmission/',
            logoImg: 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/p05/logo@2x.png',
            mapImg: 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/p05/last-map@2x.png',
            foot: `주최 | 한국CBMC <a href="http://www.cbmc.or.kr/" target="_blank"><i class="cuscon-house"></i> 홈페이지</a><br>
										주관 | 한국CBMC 창업선교위원회<br>
										문의처 | 한국CBMC 중앙사무국<br>
										02-717-0111 <a href="tel:02-717-0111"><i class="cuscon-android-call"></i> 전화문의</a><br>
										cbmc@cbmc.or.kr <a href="mailto:cbmc@cbmc.or.kr" target="_blank"><i class="cuscon-ion-android-mail"></i> 메일문의</a>`,
            copyright: `<a href="http://monkeylab.co.kr" target="_blank" rel="noopener noreferrer">POWERED BY MONKEYLAB</a>`
        }
    }
}
</script>

<style lang="scss">

</style>


