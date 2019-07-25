<template>
    <div :id="pagenum" class="page-common swiper-slide animation-page hide-header" :data-brand-name="databrandNm" data-brand-url="">
        <div class="page-common-inner" data-scrollbar>

            <div class="page-article">

                <div class="spacer" style="height: 54px;"></div>

                <div class="box attend">
                    <a href="#" target="_blank"><img src="http://dev.tebah.media/cbmc/video-brochure/attend-text.png" width="235px" alt=""></a>
                </div>

                <div class="box video01">
                    <a href="#" target="_blank"><img class="youtube-icon" src="http://dev.tebah.media/cbmc/video-brochure/youtube@2x.png" width="50px" alt=""></a>
                    <div class="screen"></div>
                </div>

                <div class="box video02">
                    <a href="#" target="_blank"><img class="youtube-icon" src="http://dev.tebah.media/cbmc/video-brochure/youtube@2x.png" width="50px" alt=""></a>
                    <div class="screen"></div>
                </div>

                <div class="bank">
                    <div class="content" v-html="spontxt">
                    </div>
                </div>

            </div>

            <div class="circle-left-clone">
                <svg width="83" height="409" viewBox="0 0 83 409" xmlns="http://www.w3.org/2000/svg">
                    <g id="02.brochure_outline" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="last_cover" transform="translate(0.000000, -72.000000)" stroke="#FFC433" stroke-width="37">
                            <circle id="Oval" cx="-212.5" cy="276.5" r="276.5"></circle>
                        </g>
                    </g>
                </svg>
            </div>

            <div class="leaf-right">
                <img class="swiper-lazy" :src="leafright" width="43" alt="">
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            pagenum: "last-cover",
            databrandNm: "Thank you!",
            formshref: 'https://forms.gle/cCQ5pnSg3hCLxrGc9',
            formImg: 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/m1/request-text.png',
            mailhref: 'IR@cntt.co.kr',
            mailImg: 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/m1/ir-request-btn.png',
            surveyhref: 'https://forms.gle/KpXhrNRYEs9D71o1A',
            surveyImg: 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/m1/googleform.png',
            sponImg: 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/p06/sponsor_txt@2x.png',
            spontxt: `후원하기
                        <div class="back-account">
                            KEB 하나은행 209-890089-66605
                        </div>`,
            leafright: 'http://dev.tebah.media/cbmc/video-brochure/leaf_right@2x.png'
        }
    }
}
</script>

<style lang="scss">

</style>


