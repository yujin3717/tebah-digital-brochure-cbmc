<template>
    <div :id="pagenum" class="page-common swiper-slide" :data-brand-name="databrandNm" data-brand-url="">
        <div class="page-common-inner" data-scrollbar>

            <div class="page-article">
                <div class="spacer" style="height: 74px;"></div>

                <!-- text-block -->
                <div class="text-block" style="text-align: center;">
                    <img class="swiper-lazy" :data-src="bgImg" width="266" alt="">
                    <div style="margin: 7px auto 0; max-width: 266px; width: 100%; height: 1px; background-color: #000;"></div>
                </div>
                <div class="spacer" style="height: 15px;"></div>

                <!-- text-block -->
                <div class="text-block animate fadeScaleDown" data-animation style="text-align: center;">
                    <img class="swiper-lazy" :data-src="txtImg" width="240" alt="">
                </div>
                <div class="spacer" style="height: 31px;"></div>

                <!-- text-block -->
                <div 
                    class="text-block" 
                    style="font-size: 15px; font-weight: 700; color: #000; letter-spacing: -0.2px; line-height: 25px;"
                    v-html="txt"
                >
                </div>
                <div class="spacer" style="height: 70px;"></div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            pagenum : 'page-3',
            databrandNm: 'CBMC 한국대회 청년초청집회',
            bgImg: 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/p03/04.concept_sub@2x.png',
            txtImg: 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/p03/04.concept_title@2x.png',
            txt: `킹덤컴퍼니의 기초가 되는 창업아이템을 선정하여 지원하고, 또한 정부지원금 등 투자 유치에 필요한 사업계획서 작성에 관한 코칭 세션을 제공하여 청년들을 실질적으로 돕고자 합니다.<br>
                    <br>
                    화합과 즐거움을 누릴 수 있는 공연을 통해 학생들의 젊음을 발산할 수 있도록 합니다.<br>
                    <br>
                    청년 창업가, 전문가로서 갖추어야 할 신앙적 자세를 다질 수 있도록 합니다.`
        }
    }
}
</script>

<style lang="scss">

</style>


