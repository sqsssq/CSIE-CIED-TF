<!--
 * @Description: 
 * @Author: Qing Shi
 * @Date: 2022-11-20 23:25:35
 * @LastEditTime: 2023-02-11 23:43:15
-->
<template>
    <div style="">
        <el-row justify="center">
            <el-col>
                <!-- <div class="grid-content ep-bg-purple" /> -->
                <div :style="{
                    'width': showWidth + 'px',
                    'margin': 'auto',
                    'font-family': 'Roboto',

                }" ref="banner">
                    <!-- <el-carousel :width="showWidth + 'px'" :height="bannerHeight + 'px'">
                                                            <el-carousel-item v-for="item in bannerImg" :key="item">
                                                                <img :src="getAssetsFile(item)" alt="" style="width: 100%; height: auto;">
                                                            </el-carousel-item>
                                                        </el-carousel> -->
                    <div id="01" class="conferencePart">
                        <h1>{{ $t("about_01_title") }}</h1>
                        <div>
                            <p class="info sq_content">
                                {{ $t("about_01.0") }}
                            </p>
                            <p class="info sq_content">
                                {{ $t("about_01.1") }}
                            </p>
                        </div>
                    </div>
                    <div id="02" class="conferencePart">
                        <h1>{{ $t("topics_02_title") }}</h1>
                        <div style="width: 100%;">
                            <div>
                                <h2>
                                    <span></span>
                                    {{ $t("topic_02.CSIE2023.title") }}
                                </h2>
                                <div class="sq_content">

                                    <h3 style="color: red; font-size: 22px;">
                                        {{ $t("topic_02.CSIE2023.themeTitle") }}
                                    </h3>
                                    <h3>
                                        {{ $t("topic_02.CSIE2023.theme") }}
                                    </h3>
                                    <h3 style="color: red; font-size: 22px;">
                                        {{ $t("topic_02.CSIE2023.notice") }}
                                    </h3>
                                    <ul>
                                        <li v-for="item in 28" :key="'c1Topic' + item">
                                            {{ $t(`topic_02.CSIE2023.topic.${item}`) }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h2><span></span>{{ $t("topic_02.CIEDH2023.title") }}</h2>
                                <div class="sq_content">
                                    <h3 style="color: red; font-size: 22px;">
                                        {{ $t("topic_02.CIEDH2023.notice") }}
                                    </h3>
                                    <ul>
                                        <li v-for="item in topic2" :key="'c2Topic' + item">
                                            {{ $t(`topic_02.CIEDH2023.topic.${item}`) }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="03" class="conferencePart">
                        <h1>{{ $t("chairmen_03_title") }}</h1>
                        <div>
                            <div>

                                <h2>
                                    <span></span>
                                    {{ $t("chairmen_03.title.1") }}
                                </h2>
                                <div class="sq_content">
                                    <el-row >
                                        <el-col v-for="(o, index) in 3" :key="o" :span="8" >
                                            <el-card :body-style="{ padding: '0px' }">
                                                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                                    class="image" />
                                                <div style="padding: 14px">
                                                    <span>Yummy hamburger</span>
                                                    <div class="bottom">
                                                        <time class="time">{{ currentDate }}</time>
                                                        <el-button text class="button">Operating</el-button>
                                                    </div>
                                                </div>
                                            </el-card>
                                        </el-col>
                                    </el-row>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: "APP",
    props: [],
    data () {
        return {
            msg1: "Hello, main!",
            bannerImg: [1, 2, 3],
            bannerWidth: 0,
            bannerHeight: 0,
            screenWidth: 0,
            showWidth: 1050,
            topic2: [0, 1, 2, 3]
        };
    },
    methods: {
        getAssetsFile (url) {
            return new URL(`../assets/img/banner/${url}.jpg`, import.meta.url).href
        }
    },
    created () {
        this.screenWidth = document.body.clientWidth

        window.onresize = () => {
            return (() => {
                this.screenWidth = document.body.clientWidth
            })()
        }
    },
    mounted () {
        this.bannerWidth = this.$refs.banner.offsetWidth;
        console.log(this.bannerWidth);

        this.bannerHeight = this.bannerWidth / 20 * 11;
    },
    watch: {
        screenWidth: {
            handler: function (val) {
                if (val * 0.8 < 1050) {
                    this.showWidth = val * 0.8;
                    this.bannerHeight = this.showWidth / 20 * 11;
                } else {
                    // console.log(val + '屏幕宽度大于900px')
                    this.showWidth = 1050;
                    this.bannerHeight = this.showWidth / 20 * 11;
                }
            },
            immediate: true,
            deep: true
        },
    },

    components: {}
}
</script>
<style>
.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
    background-color: none;
}

.demonstration {
    color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}

h1 {
    text-align: center;
    margin-bottom: 10px;
    margin-top: 30px;
    font-size: 30px;
}

h2 {
    margin-bottom: 20px;
    margin-top: 10px;
    font-size: 25px;
}

h3 {
    margin-bottom: 20px;
    font-size: 20px;
}

.info {
    margin-bottom: 10px;
    line-height: 1.5;
    font-size: 16px;
}

.conferencePart {
    width: 100%;

}

h2 span {
    background: rgb(33, 68, 117);
    padding: 0px 8px;
    margin-right: 0.5em;
}

ul {
    font-size: 16px;
}

.sq_content {
    margin-left: 20px;
    margin-right: 20px;
}
</style>
