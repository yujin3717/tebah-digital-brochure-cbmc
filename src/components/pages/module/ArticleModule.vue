<template>
    <div class="page-article">
        <div v-if="isTop" class="spacer" style="height: 74px;"></div>
        <!-- text-block -->
        <div class="text-block" style="margin: 0 40px; padding: 9px 20px; font-size: 15px; font-weight: 900; letter-spacing: -0.3px; background-color: #fff; border-radius: 5px;">
            {{title}}
        </div>
        <div class="spacer" style="height: 15px;"></div>
        <div v-if="flag">
            <!-- text-block -->
            <div class="text-block" style="margin: 0 40px; padding: 0 20px; font-size: 14px; letter-spacing: -0.19px;" v-html="flagtxt">
            </div>
            <div class="spacer" style="height: 10px;"></div>
        </div>
        <!-- session-list.has-dots -->
        <div class="session-list has-dots">
            <ul>
                <li 
                    v-for="(item,index) in data"
                    :index="index"
                    :key="item.id"
                    :class="{'dot-black' : index == 0}"
                    v-html="item.txt"
                >
                </li>
            </ul>
            <div class="profile" style="margin-top: 20px; padding: 0 20px;">
                <img class="swiper-lazy" :data-src="profileImg" :width="profilewidth" alt="">
            </div>
        </div>
        <div class="spacer" :style="{height: articleheight}"></div>
    </div>
</template>

<script>
export default {
    props:[
        "isTop",
        "title",
        "data",
        "flag",
        "flagtxt",
        "profileImg",
        "profilewidth",
        "articleheight"
    ]    
}
</script>

<style lang="scss">

</style>


