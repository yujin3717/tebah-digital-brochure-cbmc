<template>
    <transition name="fade" v-on:enter="afterEnter">
        <div v-bind:style="{display: [flag? 'block' : 'none' ] }" id="publish-modal" v-if="flag">
            <div id="publish-modal-inner" data-scrollbar>
                <div class="title">ⓒPUBLISH</div>
                <div class="group editorial-group">
                    <div class="group-title"><strong>EDITORIAL</strong></div>
                    <div class="group-content">
                        <div class="subgroup">
                            <div class="subgroup-title"><strong>EDITOR IN CHIEF</strong></div>
                            <div class="subgroup-content">
                                <div class="user">
                                    <span class="name">정해욱</span>
                                    <span class="name-eng">Hyewook Chung</span>
                                    <span class="email">bywook@monkeylab.co.kr</span>
                                </div>
                            </div>
                        </div>

                        <div class="subgroup">
                            <div class="subgroup-title"><strong>EDITOR IN CHIEF</strong></div>
                            <div class="subgroup-content">
                                <div class="user">
                                    <span class="name">주효빈</span>
                                    <span class="name-eng">Hyobin Joo</span>
                                    <span class="email">hohohb@monkeylab.co.kr</span>
                                </div>

                                <div class="user">
                                    <span class="name">서용원</span>
                                    <span class="name-eng">Yongwon Seo</span>
                                    <span class="email">nyongwon@monkeylab.co.kr</span>
                                </div>
                            </div>
                        </div>

                        <div class="subgroup">
                            <div class="subgroup-title"><strong>CONTRIBUTING EDITOR</strong></div>
                            <div class="subgroup-content">
                                <div class="user">
                                    <span class="name">이나윤</span>
                                    <span class="name-eng">Nayun Lee</span>
                                    <span class="email">rinayun@monkeylab.co.kr</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="group media-hq-group">
                    <div class="group-title"><strong>MEDIA HQ</strong></div>
                    <div class="group-content">
                        <div class="user">
                            <span class="name">상무 이경섭</span>
                            <span class="name-eng">Kyungsup Lee</span>
                            <span class="email">komjirac@monkeylab.co.kr</span>
                        </div>
                    </div>
                </div>

                <div class="group photo-group">
                    <div class="group-title"><strong>PHOTO</strong></div>
                    <div class="group-content">
                        <div class="subgroup">
                            <div class="subgroup-title">블랙스토리지 <strong>BLACKSTORAGE</strong></div>
                            <div class="subgroup-content">
                                <div class="user">
                                    <span class="name">디렉터 옥건민</span>
                                    <span class="name-eng">Gunmin Ok</span>
                                    <span class="email">okgunminstudio@gmail.com</span>
                                </div>
                            </div>
                        </div>

                        <div class="subgroup">
                            <div class="subgroup-title">아크팩토리 <strong>ARCFACTORY</strong></div>
                            <div class="subgroup-content">
                                <div class="user">
                                    <span class="name">디렉터 박기훈</span>
                                    <span class="name-eng">Kihun Park</span>
                                    <span class="email">foto@arcfactory.net</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="group illustration-group">
                    <div class="group-title"><strong>ILLUSTRATION</strong></div>
                    <div class="group-content">
                        <div class="user">
                            <span class="name">이승범</span>
                            <span class="name-eng">Seungbeom Lee</span>
                        </div>
                    </div>
                </div>

                <div class="group contents-advisor-group">
                    <div class="group-title"><strong>CONTENTS ADVISOR</strong></div>
                    <div class="group-content">
                        러닝 자문위원 함연식, 정민호<br>
                        요리&영양 자문위원 김보선, 이산인군<br>
                        의학 자문위원 이동윤<br>
                        피트니스 자문위원 조승무, 이종석
                    </div>
                </div>

                <div class="group design-group">
                    <div class="group-title"><strong>DESIGN</strong></div>
                    <div class="group-content">
                        <div class="subgroup">
                            <div class="subgroup-title"><strong>ART DIRECTOR</strong></div>
                            <div class="subgroup-content">
                                <div class="user">
                                    <span class="name">팀장 도현명</span>
                                    <span class="name-eng">Hyunmyung Do</span>
                                    <span class="email">groovingdd@monkeylab.co.kr</span>
                                </div>
                            </div>
                        </div>

                        <div class="subgroup">
                            <div class="subgroup-title"><strong>DESIGNER</strong></div>
                            <div class="subgroup-content">
                                <div class="user">
                                    <span class="name">문지선</span>
                                    <span class="name-eng">Jisun Moon</span>
                                    <span class="email">gorgemoon@monkeylab.co.kr</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="group distribution-group">
                    <div class="group-content">
                        <div class="subgroup">
                            <div class="subgroup-title"><strong>DISTRIBUTION</strong></div>
                            <div class="subgroup-content">
                                ㈜한애드
                            </div>
                        </div>

                        <div class="subgroup">
                            <div class="subgroup-title"><strong>PRINTING</strong></div>
                            <div class="subgroup-content">
                                ㈜미래엔
                            </div>
                        </div>
                    </div>
                </div>

                <div class="group vice-president-group">
                    <div class="group-title"><strong>VICE PRESIDENT</strong></div>
                    <div class="group-content">
                        <div class="user">
                            <span class="name">이종린</span>
                            <span class="name-eng">Lee Jong Rin</span>
                            <span class="email">jrinlee@monkeylab.co.kr</span>
                        </div>
                    </div>
                </div>

                <div class="group ceo-publiser-group">
                    <div class="group-title"><strong>CEO & PUBLISHER</strong></div>
                    <div class="group-content">
                        <div class="user">
                            <span class="name">김연휘</span>
                            <span class="name-eng">Younwhoy Kim</span>
                            <span class="email">mackerki@monkeylab.co.kr</span>
                        </div>
                    </div>
                </div>

                <div class="group publishing-group">
                    <div class="group-title"><strong>PUBLISHING</strong></div>
                    <div class="group-content">
                        <div class="user">
                            <span class="name">몽키랩</span>
                            <span class="name-eng">monkeylab</span>
                            <div class="address">서울시 마포구 매봉산로 37 DMC 산학협력연구센터 3층 (03909) </div>
                            <div class="website">www.monkeylab.co.kr</div>
                        </div>
                        <div class="copyright">&lt;런시티&gt; 매거진에 관한 모든 권리는 ㈜몽키랩이 소유합니다.<br>본사의 동의 없이 책에 실린 글과 사진, 그림 등을 무단으로 사용할 수 없습니다. </div>
                        <div class="copyright-eng">The information in this document shall not be duplicated, used or disclosed in whole or in part for any purpose.<br>Copyright © Monkeylab Publishing Co., Ltd.<br>All Rights Reserved.</div>
                    </div>
                </div>

                <div class="contact">
                    <div class="row">
                        <span class="label">web site</span>
                        <span class="value"><a href="http://run-city.com" target="_blank" rel="noopener noreferrer">run-city.com</a></span>
                    </div>
                    <div class="row">
                        <span class="label">email</span>
                        <span class="value">runcity@monkeylab.co.kr</span>
                    </div>
                    <div class="row">
                        <span class="label">facebook</span>
                        <span class="value"><a href="https://www.facebook.com/runcityofficial/" target="_blank" rel="noopener noreferrer">@runcityofficial</a></span>
                    </div>
                    <div class="row">
                        <span class="label">instagram</span>
                        <span class="value"><a href="https://www.instagram.com/runcity_official/" target="_blank" rel="noopener noreferrer">@runcity_official</a></span>
                    </div>
                </div>

                <div class="other">
                    <div class="row">
                        <span class="label">ISSN</span>
                        <span class="value">2508-8041</span>
                    </div>
                    <div class="row">
                        <span class="label">월간 &lt;런시티&gt;</span>
                        <span class="value">2019년 4월</span>
                    </div>
                    <div class="row">
                        <span class="label">통권</span>
                        <span class="value">22호</span>
                    </div>
                    <div class="row">
                        <span class="label">편집 문의</span>
                        <span class="value"><a href="tel:02-548-9705">02-548-9705</a></span>
                    </div>
                </div>
            </div>
            <button @click.prevent="flag = !flag" id="publish-modal-close"><i class="cuscon-ios-close-outline"></i></button>
        </div>
    </transition>
</template>

<script>
import Vue from 'vue';
import Scrollbar from 'smooth-scrollbar';

Vue.prototype.EventBus = new Vue();

export default {
    data(){
        return{
            flag: false,
        }
    },
    mounted(){

        var self = this;
        // initModal EventBus
        this.EventBus.$on('initModal', function(){
            // console.log("init");
            self.flag = true;
        });      
    },
    methods:{

        afterEnter(el){
            Scrollbar.initAll();
            Scrollbar.detachStyle();
        }

    }
}
</script>


<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
    	transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>