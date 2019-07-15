<template>
    <div :id="pagenum" class="page-common swiper-slide" :data-brand-name="databrandNm" data-brand-url="">
        <div class="page-common-inner" data-scrollbar>

            <div class="page-article">
                <div class="spacer" style="height: 74px;"></div>

                <!-- text-block -->
                <div class="text-block">
                    <img class="swiper-lazy" :data-src="titleImg" width="234" alt="" src="">
                </div>
                <div class="spacer" style="height: 33px;"></div>
            </div>

            <div class="page-article">
                <div 
                    v-for="item in profileblock"
                    :key="item.id"
                >
                    <!-- profile-block -->
                    <a :href="item.href" target="_blank" rel="noopener noreferrer" class="profile-block animate fadeUp" data-animation data-animation-trigger="top">
                        <div class="photo swiper-lazy" :data-background="item.Img"></div>
                        <div class="summary">
                            <div class="name"><img class="swiper-lazy" :data-src="item.nameImg" width="77" alt="" src=""></div>
                            <div 
                                class="history"
                                v-html="item.txt"
                            >
                            </div>
                        </div>
                    </a>
                    <div class="spacer" :style="{height: item.height}"></div>
                </div>
            </div>

            <div class="bubble right"></div>
            <div class="bubble left">
                <span></span>
            </div>
            <div class="leaf-area">
                <span class="leaf"><img class="swiper-lazy" :data-src="leafImg" width="91" alt="" src=""></span>
                <span class="leaf-bubble leaf-bubble-2"></span>
                <span class="leaf-bubble leaf-bubble-3"></span>
                <span class="leaf-bubble leaf-bubble-4"></span>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            pagenum: 'page-2',
            databrandNm: 'CBMC 한국대회 청년초청집회',
            titleImg: 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/p02/03.profile_title@2x.png',
            profileblock: [
                {
                    href: 'http://bonmission.or.kr/',
                    Img: 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/p02/choi_img@2x.png',
                    nameImg: 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/p02/choi_txt@2x.png',
                    txt: `(주)본월드 대표<br>
                            (재단법인)본월드미션 이사장<br>
                            (사단법인)본사랑 이사장`,
                    height: '15px'
                },
                {
                    href: 'http://www.ibusiness.co.kr/',
                    Img: 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/p02/park_img@2x.png',
                    nameImg: 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/p02/park_txt@2x.png',
                    txt: `(주) 르호봇 비즈니스<br>
                            인큐베이터 회장, 서울지역창업<br>
                            보육센터 협의회장`,
                    height: '15px'
                },
                {
                    href: 'http://www.cntt.co.kr/',
                    Img: 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/p02/joen_img@2x.png',
                    nameImg: 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/p02/joen_txt@2x.png',
                    txt: `전화성의 어드벤처<br>
                            창업 엑셀러레이팅,<br>
                            씨엔티테크 대표이사`,
                    height: '15px'
                },
                {
                    href: '',
                    Img: 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/add-1/you_img@2x.png',
                    nameImg: 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/add-1/you_txt@2x.png',
                    txt: `주안대학교 대학원 교수<br>
											<br>
											<br>`,
                    height: '102px'
                },
            ],
            leafImg: 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/p02/leaf_right@2x.png'

        }
    }
}
</script>

<style lang="scss">

</style>


