<template>
    <div id="page-5" class="page-common animation-page swiper-slide" data-brand-name="CBMC 한국대회 청년초청집회" data-brand-url="">
        <div class="page-common-inner" data-scrollbar>

            <div class="page-article">
                <div class="spacer" style="height: 100px;"></div>

                <div class="application">
                    <a :href="formshref" target="_blank" rel="noopener noreferrer"><img class="swiper-lazy" :data-src="formImg" width="222" alt=""></a>
                </div>

                <div class="ir-application">
                    <a class="ir-btn" :href="'mailto:' + mailhref" target="_blank" rel="noopener noreferrer"><img class="swiper-lazy" :data-src="mailImg" width="122" alt=""></a>
                    <div class="note">{{irtxt}}</div>
                </div>

                <div class="survey-application">
                    <a class="survey-btn" :href="surveyhref" target="_blank" rel="noopener noreferrer"><img class="swiper-lazy" :data-src="surveyImg" width="95" alt=""></a>
                    <div class="note">{{surveytxt}}</div>
                </div>

                <div class="sponsor">
                    <div class="label">
                        <img class="swiper-lazy" :data-src="sponImg" width="54" alt="">
                        <div class="label-bg"></div>
                    </div>
                    <div class="content" v-html="spontxt">
                    </div>
                </div>

                <div class="spacer" style="height: 127px;"></div>
            </div>

            <div class="circle-left">
                <svg width="159" height="318" viewBox="0 0 159 318" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                        <g transform="translate(0 -253)" stroke="#FFC433" stroke-width="37">
                            <circle cy="412" r="140"/>
                        </g>
                    </g>
                </svg>
            </div>

            <div class="leaf-right">
                <img class="swiper-lazy" :src="leafright" width="101" alt="">
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            formshref: 'https://forms.gle/cCQ5pnSg3hCLxrGc9',
            formImg: 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/m1/request-text.png',
            mailhref: 'IR@cntt.co.kr',
            mailImg: 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/m1/ir-request-btn.png',
            irtxt: '*Open-IR 참여를 위해 먼저 참가신청을 부탁드립니다.',
            surveyhref: 'https://forms.gle/KpXhrNRYEs9D71o1A',
            surveyImg: 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/m1/googleform.png',
            surveytxt: `* 요구도를 조사 분석하여 행사에 참여하시는 모든 분들께 도움이 되는 프로그램을 운영하고자 합니다.`,
            sponImg: 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/p06/sponsor_txt@2x.png',
            spontxt: `<div class="description">후원금 입금 계좌번호</div>
                        <div class="back-account">
                            KEB 하나은행<br>
                            209-890089-66605
                        </div>`,
            leafright: 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/p06/leaf_right@2x.png'
        }
    }
}
</script>

<style lang="scss">

</style>


