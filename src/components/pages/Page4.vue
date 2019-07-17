<template>
    <div :id="pagenum" class="page-common animation-page swiper-slide" :data-brand-name="datanbrandNm" data-brand-url="">
        <div class="page-common-inner" data-scrollbar>
            <ArticleModule
                v-for="item in sessionData"
                :key="item.id"
                :isTop="item.isTop"
                :title="item.title"
                :data="item.data"
                :flag="item.flag"
                :flagtxt="item.flagtxt"
                :profileImg="item.profileImg"
                :profilewidth="item.profilewidth"
                :articleheight="item.articleheight"
            />
            <div class="right-line"></div>
            <div class="bottom-angle" data-animation data-animation-trigger="top"></div>

        </div>
    </div>
</template>

<script>
import ArticleModule from './module/ArticleModule'

export default {
    components: {
        ArticleModule
    },
    data(){
        return{
            pagenum: 'page-4',
            datanbrandNm: 'CBMC 한국대회 청년초청집회',
            sessionData:[
                {
                    isTop: true,
                    title: 'SESSION I | 14:30 ~ 15:40',
                    data:[
                        {
                            txt: `<strong>기업인들과 함께하는 토크쇼</strong><br>
                            사회 및 인터뷰 진행 : 이선영`
                        },
                        {
                            txt: `<strong>해외 비즈니스 선교시대를 연 Bon Mission</strong><br>
                            본월드 : 최복이 대표`
                        },
                        {
                            txt: `<strong>'Startup's Story Platform'과 미셔널 비전</strong><br>
                            (주)르호봇비즈니스인큐베이터 박광회 회장`
                        }
                    ],
                    profileImg: 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/m1/session-1-profile.png',
                    profilewidth: '312',
                    articleheight: '20px'
                },
                {
                    title: 'SESSION II 15:50 ~ 17:20',
                    flag: true,
                    flagtxt: `<strong>Track 1. CNTTECH OPEN IR</strong><br>
                    팀당 최대 2억투자, 최대 5개 스타트업,`,
                    countup: `<div>최대 <span class="billion" data-countup="victory-amount" data-count-value="1000000000" data-label="(*십억)">0</span> 원</div>`,
                    data:[
                        {
                            txt: `<strong>5개팀 발표</strong><br>
                            진행 : 씨엔티테크(주) 전화성 대표
                            <div style="margin-top: 5px; font-size: 12px; letter-spacing: -0.16px; line-height: 21px;">
                                <strong>지원기간</strong> 6월 24일부터 7월 20일<br>
                                <strong>서류평가</strong> 7월21일 -31일 (5개 서류 합격통보 8월 1일)<br>
                                <strong>이메일로 지원, 자유양식</strong> IR@CNTT.CO.KR<br>
                                (투자기업 중 TIPS 연계 검토가능)
                            </div>`
                        }
                    ],
                    profileImg: 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/m1/session-2-profile.png',
                    profilewidth: '97',
                    articleheight: '20px'
                },
                {
                    title: 'SESSION III | 17:20 ~ 17:30',
                    data:[
                        {
                            txt: `<strong>찬양</strong>`
                        },
                        {
                            txt: `<strong>KINGDOMIZER</strong><br>
                            유근재 주안대학원대학교 선교학과 교수`
                        }
                    ],
                    profileImg: 'http://d2bdkorgfosgj9.cloudfront.net/brochure/cbmc/images/m1/session-3-profile.png',
                    profilewidth: '97',
                    articleheight: '70px'
                },
            ]

        }
    }
}
</script>

<style lang="scss">

</style>


