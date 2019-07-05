<template>
    <div id="cover" @click.prevent="moveMain" :class="{hide : isClick}">
        <div class="icon">
            <div class="overlay"></div>
            <object class="poster" :data="poster" type="image/svg+xml"></object>
            <div class="message">
                <div class="message-inner">
                    <svg class="pointer" xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 24 33">
                        <path class="pointer-circle" fill="#FFF" d="M14.352 10.348a.625.625 0 0 1-.461-1.038 4.833 4.833 0 0 0 1.233-3.225c0-2.669-2.165-4.84-4.825-4.84s-4.824 2.171-4.824 4.84c0 1.19.438 2.335 1.233 3.225a.624.624 0 0 1-.047.879.62.62 0 0 1-.875-.045l-.002-.003a6.071 6.071 0 0 1-1.55-4.056C4.233 2.73 6.953 0 10.298 0s6.065 2.73 6.065 6.085a6.076 6.076 0 0 1-1.549 4.056.618.618 0 0 1-.462.207"/>
                        <g class="pointer-hand" fill="#FFF">
                            <path d="M13.504 32.845c-1.701 0-3.49-.485-4.227-1.159-.823-.756-1.411-1.697-1.851-2.963-.551-1.576-1.075-2.449-2.076-3.459-.315-.318-1.094-.796-1.848-1.258C1.526 22.794.217 21.924.024 20.909c-.07-.35.014-.712.231-.995 1.247-1.666 4.424-.878 5.777.012.324.213 1.067.73 1.711 1.198.034-4.57-.058-13.499-.059-13.598 0-1.05.657-2.705 2.42-2.705 1.832 0 2.625 1.787 2.625 2.699v9.895a.622.622 0 1 1-1.241 0V7.52c0-.173-.292-1.453-1.385-1.453-1.127 0-1.178 1.439-1.178 1.453.002.102.113 10.929.045 14.861a.62.62 0 1 1-1.033.455c-.353-.314-2.015-1.495-2.585-1.869-.994-.652-3.41-1.232-4.104-.306-.007.498 2.03 1.748 2.901 2.282.892.547 1.661 1.019 2.081 1.441 1.28 1.293 1.855 2.46 2.368 3.928.37 1.063.851 1.843 1.517 2.453.461.422 2.042.869 3.568.832.412-.01.687-.119 1.035-.256.418-.165.938-.369 1.747-.4.813-.031 1.448.146 2.005.301.443.124.824.23 1.244.222 2.012-.049 2.657-2.112 2.863-3.338.193-1.153.179-4.938.169-7.442-.003-.666-.005-1.261-.003-1.725a.621.621 0 0 1 .619-.62h.003c.343 0 .62.28.62.624-.004.461 0 1.053.002 1.715.01 2.7.025 6.397-.187 7.655-.458 2.729-1.937 4.325-4.058 4.375-.602.017-1.112-.128-1.605-.265-.517-.146-1.004-.282-1.625-.258-.599.023-.959.166-1.341.315-.39.153-.83.327-1.46.341l-.207.004"/>
                            <path d="M23.378 19.859a.621.621 0 0 1-.62-.623c0-.448-.049-.991-.05-.997-.001-.019-.003-.038-.002-.056 0-.785-.5-1.313-1.245-1.313-.688 0-1.246.682-1.246 1.52a.621.621 0 1 1-1.24 0v-.553c0-.888-.606-1.728-1.246-1.728-.641 0-1.246.84-1.246 1.728a.62.62 0 1 1-1.241 0v-.553c0-.888-.604-1.728-1.245-1.728-.688 0-1.246.682-1.246 1.52a.62.62 0 1 1-1.241 0c0-1.525 1.116-2.765 2.487-2.765.837 0 1.609.555 2.064 1.363.448-.498 1.039-.81 1.668-.81.862 0 1.655.589 2.104 1.437a2.343 2.343 0 0 1 1.628-.677c1.432 0 2.473 1.062 2.487 2.53.01.122.051.632.051 1.081a.62.62 0 0 1-.621.624"/>
                        </g>
                    </svg>
                    <div class="shadow"></div>
                    <div class="text">터치하면<br>커버가 열립니다.</div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="time"><img :src="coverImg" width="255" alt=""></div>
            <div class="contact">
                <a class="stopProp" @click.stop :href="linkSrc" target="_blank" rel="noopener noreferrer"><i class="cuscon-android-home"></i> <span class="text">{{linkTxt}}</span></a> |
                <a class="stopProp" @click.stop :href="tel"><i class="cuscon-android-call animate"></i> <span class="text">{{telTxt}}</span></a></div>
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


