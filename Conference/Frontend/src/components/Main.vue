<!--
 * @Description: 
 * @Author: Qing Shi
 * @Date: 2022-11-20 23:25:35
 * @LastEditTime: 2023-03-02 17:06:18
-->
<template>
    <div style="font-size: 16px; color: #212529">
        <el-row justify="center">
            <el-col>
                <!-- <div class="grid-content ep-bg-purple" /> -->
                <div :style="{
                    'width': showWidth + 'px',
                    'margin': 'auto',
                    'font-family': 'Roboto',
                }" ref="banner">

                    
                    <div id="01" class="conferencePart">
                        <h1><span></span>{{ $t("about_01_title") }}</h1>
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
                        <h1><span></span>{{ $t("topics_02_title") }}</h1>
                        <div style="width: 100%;">
                            <div>
                                <h2>
                                    {{ $t("topic_02.CSIE2023.title") }}
                                </h2>
                                <div class="sq_content">

                                    <h3 style="font-size: 22px;">
                                        {{ $t("topic_02.CSIE2023.themeTitle") }}
                                    </h3>
                                    <h3>
                                        {{ $t("topic_02.CSIE2023.theme") }}
                                    </h3>
                                    <h3 style="font-size: 22px;">
                                        {{ $t("topic_02.CSIE2023.notice") }}
                                    </h3>
                                    <el-row>
                                        <el-col :span="24">
                                            <ul>
                                                <li v-for="item in 27" :key="'c1Topic' + item">
                                                    {{ $t(`topic_02.CSIE2023.topic.${item}`) }}
                                                </li>
                                            </ul>
                                        </el-col>

                                        <!-- <el-col :span="12">
                                            <ul>
                                                <li v-for="item in 13" :key="'c1Topic' + item">
                                                    {{ $t(`topic_02.CSIE2023.topic.${item + 15}`) }}
                                                </li>
                                            </ul>
                                        </el-col> -->
                                    </el-row>
                                </div>
                            </div>
                            <div>
                                <h2>{{ $t("topic_02.CIEDH2023.title") }}</h2>
                                <div class="sq_content">
                                    <h3 style="font-size: 22px;">
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
                    <div id="10" class="conferencePart">
                        <h1>
                            <SPAN></SPAN>{{ $t('institutions_10_title') }}
                        </h1>
                        <div>
                            <h2>
                                {{ $t('institutions_10.title.0') }}
                            </h2>

                            <el-row class="row-bg" justify="space-evenly">
                                <el-col :span="12">
                                    <div style="text-align: center;">
                                        <img :src="getImgUrl('logo/IEI.jpg')" class="image" height="100" />
                                        <p class="chairname">
                                            {{ $t('institutions_10.Host.0.name') }}
                                        </p>
                                    </div>
                                </el-col>
                                <el-col :span="12">
                                    <div style="text-align: center;">
                                        <img :src="getImgUrl('logo/CIEDH.jpg')" class="image" height="100" />
                                        <p class="chairname">
                                            {{ $t('institutions_10.Host.1.name') }}
                                        </p>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                        <div>
                            <h2>
                                {{ $t('institutions_10.title.1') }}
                            </h2>
                            <el-row class="row-bg" justify="center">
                                <el-col :span="24">
                                    <div style="text-align: center; width: 100%">
                                        <img :src="getImgUrl('logo/hkustgz.png')" class="image" style="width: 50%;" />
                                        <p class="chairname">
                                            {{ $t('institutions_10.Organizer.name') }}
                                        </p>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                        <div>
                            <h2>
                                {{ $t('institutions_10.title.2') }}
                            </h2>

                            <el-row class="row-bg" justify="space-evenly">
                                <el-col :span="8">
                                    <div style="text-align: center;">
                                        <img :src="getImgUrl('logo/jinan.svg')" class="image" height="50" />
                                        <p class="chairname">
                                            {{ $t('institutions_10.CoOrganizer.0.name') }}
                                        </p>
                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div style="text-align: center;">
                                        <img :src="getImgUrl('logo/shenzhen.png')" class="image" height="50" />
                                        <p class="chairname">
                                            {{ $t('institutions_10.CoOrganizer.1.name') }}
                                        </p>
                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div style="text-align: center;">
                                        <img :src="getImgUrl('logo/guangdonggongye.png')" class="image" height="50" />
                                        <p class="chairname">
                                            {{ $t('institutions_10.CoOrganizer.2.name') }}
                                        </p>
                                    </div>
                                </el-col>
                            </el-row>
                            <!-- <div style="margin-top: 10px;"></div> -->
                            <br>
                            <el-row class="row-bg" justify="space-evenly">
                                <el-col :span="12">
                                    <div style="text-align: center;">
                                        <img :src="getImgUrl('logo/glkx.jpg')" class="image" height="100" />
                                        <p class="chairname">
                                            {{ $t('institutions_10.CoOrganizer.3.name') }}
                                        </p>
                                    </div>
                                </el-col>
                                <el-col :span="12">
                                    <div style="text-align: center;">
                                        <img :src="getImgUrl('logo/hkdd.gif')" class="image" height="100" />
                                        <p class="chairname">
                                        {{ $t('institutions_10.CoOrganizer.4.name') }}
                                    </p>
                                </div>
                            </el-col>

                            <!-- <el-col :span="6">
                                    <div style="text-align: center;">
                                        <img :src="getImgUrl('logo/shenzhen.png')" class="image" height="50" />
                                        <p class="chairname">
                                            {{ $t('institutions_10.CoOrganizer.5.name') }}
                                        </p>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div style="text-align: center;">
                                                            <img :src="getImgUrl('logo/guangdonggongye.png')" class="image" height="50" />
                                                            <p class="chairname">
                                                                {{ $t('institutions_10.CoOrganizer.6.name') }}
                                                            </p>
                                                        </div>
                                                    </el-col> -->
                            </el-row>
                            <br>
                            <el-row class="row-bg" justify="space-evenly">
                                <el-col :span="12">
                                    <div style="text-align: center;">
                                        <img :src="getImgUrl('logo/shenzhen.png')" class="image" height="50" />
                                        <p class="chairname">
                                            {{ $t('institutions_10.CoOrganizer.5.name') }}
                                        </p>
                                    </div>
                                </el-col>
                                <el-col :span="12">
                                    <div style="text-align: center;">
                                        <img :src="getImgUrl('logo/guangdonggongye.png')" class="image" height="50" />
                                        <p class="chairname">
                                            {{ $t('institutions_10.CoOrganizer.6.name') }}
                                        </p>
                                    </div>
                                </el-col>
                            </el-row>
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
    data() {
        return {
            msg1: "Hello, main!",
            bannerImg: [1, 2, 3, 4],
            bannerWidth: 0,
            bannerHeight: 0,
            screenWidth: 0,
            showWidth: 920,
            topic2: [0, 1, 2, 3],
            imgFolder: 'banner'
        };
    },
    methods: {
        getImgUrl(url) {
            return new URL(`../assets/img/${url}`, import.meta.url).href
        }
    },
    created() {
        this.screenWidth = document.body.clientWidth

        window.onresize = () => {
            return (() => {
                this.screenWidth = document.body.clientWidth
            })()
        }
    },
    mounted() {
        this.bannerWidth = this.$refs.banner.offsetWidth;
        console.log(this.bannerWidth);

        this.bannerHeight = this.bannerWidth / 20 * 11;
    },
    watch: {
        screenWidth: {
            handler: function (val) {
                if (val * 0.9 < 920) {
                    this.showWidth = val * 0.9;
                    this.bannerHeight = this.showWidth / 20 * 11;
                } else {
                    // console.log(val + '屏幕宽度大于900px')
                    this.showWidth = 920;
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
.chairname {
    margin-top: 10px;
}

.chairdepartment {
    font-size: 14px;
}

.themeTitle {
    font-weight: 600;
}

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
    /* text-align: center; */
    margin-bottom: 20px;
    margin-top: 40px;
    font-size: 27px;
}

h2 {
    margin-bottom: 30px;
    margin-top: 20px;
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
    text-align: justify;
}

.conferencePart {
    width: 100%;

}

h2 span {
    background: rgb(33, 68, 117);
    padding: 0px 3px;
    margin-right: 0.5em;
}

h1 span {
    background: rgb(33, 68, 117);
    padding: 0px 3px;
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
