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
                <div class="spacer" style="height: 40px;"></div>

                <!-- text-block -->
                <div 
                    class="text-block" 
                    style="margin: 0 40px; padding: 20px; font-size: 15px; color: #000; letter-spacing: -0.2px; line-height: 25px; background-color: #efefc1; border-radius: 20px;"
                    v-html="txt2"
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
            txt: `특강 형식의 One-Way 전달 방식을 지양하고, 인터뷰 및 질문 등으로 구성한 Interaction Communication 방식으로 주요 내용을 전달합니다.<br>
									<br>
									화합과 즐거움을 누릴 수 있는 공연을 통해 학생들의 젊음을 발산할 수 있도록 합니다.<br>
									<br>
									청년 창업가, 전문가로서 갖추어야 할 신앙적 자세를 다질 수 있도록 합니다.`,
            txt2: `<strong>행사 취지</strong><br>
                    1. 청년세대의 어려움에 기독실업인들이 가지고 있는 경험과 자원을 나누고, 도움을 제공하기 위한 취지입니다.<br>
                    2. 이 시대의 청년들에게 성경적 가치관을 가진 비즈니스 리더로 준비시켜, 세상의 빛과 소금이 되도록 이를 후원하고자 합니다.<br>
                    3. 새로운 시대적 선교 패러다임으로 비즈니스 선교 활동을 접목하여, 보다 입체적인 선교를 하는데 기여하고자 합니다.`
        }
    }
}
</script>

<style lang="scss">

</style>


