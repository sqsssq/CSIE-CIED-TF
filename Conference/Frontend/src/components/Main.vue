<!--
 * @Description: 
 * @Author: Qing Shi
 * @Date: 2022-11-20 23:25:35
 * @LastEditTime: 2023-02-21 01:16:35
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

                    <el-carousel :width="showWidth + 'px'" :height="bannerHeight + 'px'" :interval="3000">
                        <el-carousel-item v-for="item in bannerImg" :key="item">
                            <img :src="getAssetsFile(item)" alt="" style="width: 100%; height: auto;">
                        </el-carousel-item>
                    </el-carousel>
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
                                    {{ $t("chairmen_03.title.0") }}
                                </h2>
                                <div class="sq_content">
                                    <el-row :gutter="10">
                                        <el-col v-for="(o, index) in 3" :key="o" :span="8">
                                            <div style="text-align: center;">
                                                <img :src="getImgUrl('chairmen/fugee-tsung.png')" class="image" />
                                                <div style="text-align: center;">
                                                    <p class="chairname">{{ $t(`chairmen_03.CoChair.${index}.name`) }}</p>
                                                    <p class="chairdepartment">{{
                                                        $t(`chairmen_03.CoChair.${index}.department`) }}</p>
                                                </div>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </div>
                            <div>

                                <h2>
                                    <span></span>
                                    {{ $t("chairmen_03.title.1") }}
                                </h2>

                                <div class="sq_content">

                                    <el-row :gutter="10">
                                        <el-col v-for="(o, index) in 3" :key="o" :span="8">
                                            <div style="text-align: center;">
                                                <img :src="getImgUrl('chairmen/fugee-tsung.png')" class="image" />
                                                <div style="text-align: center;">
                                                    <p class="chairname">{{ $t(`chairmen_03.HonoraryCoChair.${index}.name`)
                                                    }}</p>
                                                    <p class="chairdepartment">{{
                                                        $t(`chairmen_03.HonoraryCoChair.${index}.department`) }}</p>
                                                </div>
                                            </div>
                                        </el-col>
                                    </el-row>
                                    <el-row :gutter="10">
                                        <el-col v-for="(o, index) in [3, 4]" :key="o" :span="12">
                                            <div style="text-align: center;">
                                                <img :src="getImgUrl('chairmen/fugee-tsung.png')" class="image" />
                                                <div style="text-align: center;">
                                                    <p class="chairname">{{ $t(`chairmen_03.HonoraryCoChair.${o}.name`) }}
                                                    </p>
                                                    <p class="chairdepartment">{{
                                                        $t(`chairmen_03.HonoraryCoChair.${o}.department`) }}</p>
                                                </div>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="04" class="conferencePart">
                        <h1>{{ $t("keynote_04_title") }}</h1>
                        <div class="sq_content">
                            <div>
                                <h2>
                                    <span></span>
                                    {{ $t('keynote_04.0.name') }}

                                </h2>
                                <p>{{ $t('keynote_04.0.department.0') }}
                                </p>
                                <p>
                                    {{ $t('keynote_04.0.timeTitle') }}: {{ $t('keynote_04.0.time') }}
                                </p>
                                <p class="themeTitle" style="margin-top: 10px; margin-bottom: 10px;">
                                    {{ $t('keynote_04.0.theme') }}
                                </p>
                                <div class="info">
                                    <span class="themeTitle">{{ $t('keynote_04.0.infoTitle') }}</span>: {{
                                        $t('keynote_04.0.info') }}
                                </div>
                                <div class="info">

                                    <div style="float: right; margin-top: 10px; clear: both;" align="center">
                                        <img :src="getImgUrl('inv1.jpg')" class="image" width="200" />
                                    </div>
                                    <span class="themeTitle">{{ $t('keynote_04.0.bioTitle') }}</span>: {{
                                        $t('keynote_04.0.bio') }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="05" class="conferencePart">
                        <h1>
                            {{ $t('programCommittee_05_title') }}
                        </h1>
                        <div>
                            <h2>
                                <span></span>
                                {{ $t('programCommittee_05.title.0') }}
                            </h2>
                            <div>
                                <el-row :gutter="20">
                                    <el-col :span="8">
                                        <p style="float: right; margin-top: 10px;">{{ $t('programCommittee_05.title.1') }}
                                        </p>
                                    </el-col>
                                    <el-col :span="16">
                                        <div v-for="(o, i) in 3" :key="i">
                                            <p class="chairname">
                                                {{ $t(`programCommittee_05.Chairmen.${i}.name`) }}
                                            </p>
                                            <p class="chairdepartment">
                                                {{ $t(`programCommittee_05.Chairmen.${i}.department`) }}
                                            </p>
                                        </div>
                                    </el-col>
                                </el-row>

                                <el-row :gutter="20">
                                    <el-col :span="8">
                                        <p style="float: right; margin-top: 10px;">{{ $t('programCommittee_05.title.2') }}
                                        </p>
                                    </el-col>
                                    <el-col :span="16">
                                        <div v-for="(o, i) in 6" :key="i">
                                            <p class="chairname">
                                                {{ $t(`programCommittee_05.Members.${i}.name`) }}
                                            </p>
                                            <p class="chairdepartment">
                                                {{ $t(`programCommittee_05.Members.${i}.department`) }}
                                            </p>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                        <div>
                            <h2>
                                <span></span>
                                {{ $t('organizationCommittee_05.title.0') }}
                            </h2>
                            <div>
                                <el-row :gutter="20">
                                    <el-col :span="8">
                                        <p style="float: right; margin-top: 10px;">{{ $t('organizationCommittee_05.title.1')
                                        }}</p>
                                    </el-col>
                                    <el-col :span="16">
                                        <div v-for="(o, i) in 3" :key="i">
                                            <p class="chairname">
                                                {{ $t(`organizationCommittee_05.Chairmen.${i}.name`) }}
                                            </p>
                                            <p class="chairdepartment">
                                                {{ $t(`organizationCommittee_05.Chairmen.${i}.department`) }}
                                            </p>
                                        </div>
                                    </el-col>
                                </el-row>

                                <el-row :gutter="20">
                                    <el-col :span="8">
                                        <p style="float: right; margin-top: 10px;">{{ $t('organizationCommittee_05.title.2')
                                        }}</p>
                                    </el-col>
                                    <el-col :span="16">
                                        <div v-for="(o, i) in 6" :key="i">
                                            <p class="chairname">
                                                {{ $t(`organizationCommittee_05.Members.${i}.name`) }}
                                            </p>
                                            <p class="chairdepartment">
                                                {{ $t(`organizationCommittee_05.Members.${i}.department`) }}
                                            </p>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                    </div>
                    <div id="06" class="conferencePart">
                        <h1>
                            {{ $t('awardCommittee_06_title') }}
                        </h1>
                        <div>
                            <div>
                                <el-row :gutter="20">
                                    <el-col :span="8">
                                        <p style="float: right; margin-top: 10px;">{{ $t('awardCommittee_06.title') }}</p>
                                    </el-col>
                                    <el-col :span="16">
                                        <div v-for="(o, i) in 3" :key="i">
                                            <p class="chairname">
                                                {{ $t(`awardCommittee_06.Chairmen.${i}.name`) }}
                                            </p>
                                            <p class="chairdepartment">
                                                {{ $t(`awardCommittee_06.Chairmen.${i}.department`) }}
                                            </p>
                                        </div>
                                    </el-col>
                                </el-row>

                            </div>
                        </div>
                    </div>
                    <div id="07" class="conferencePart">
                        <h1>
                            {{ $t('publicationCommittee_07_title') }}
                        </h1>
                        <div>
                            <div>
                                <el-row :gutter="20">
                                    <el-col :span="8">
                                        <p style="float: right; margin-top: 10px;">{{ $t('publicationCommittee_07.title') }}
                                        </p>
                                    </el-col>
                                    <el-col :span="16">
                                        <div v-for="(o, i) in 2" :key="i">
                                            <p class="chairname">
                                                {{ $t(`publicationCommittee_07.Chairmen.${i}.name`) }}
                                            </p>
                                            <p class="chairdepartment">
                                                {{ $t(`publicationCommittee_07.Chairmen.${i}.department`) }}
                                            </p>
                                        </div>
                                    </el-col>
                                </el-row>

                            </div>
                        </div>
                    </div>
                    <div id="08" class="conferencePart">
                        <h1>
                            {{ $t('societies_08_title') }}
                        </h1>
                        <div>
                            <div style="text-align: center;">
                                <div v-for="(o, i) in 5" :key="i">
                                    <p class="chairname">
                                        {{ $t(`societies_08.${i}.name`) }}
                                    </p>
                                    <p class="chairdepartment">
                                        {{ $t(`societies_08.${i}.department.0`) }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="09" class="conferencePart">
                    <h1>
                        {{ $t('internationalAdvisoryCommittee_09_title') }}
                    </h1>
                    <div>
                            <div style="text-align: center;">
                                <!-- <el-row :gutter="20">
                                    <el-col :span="12">
                                        <p style="float: right; margin-top: 10px;">{{ $t('publicationCommittee_07.title') }}</p>
                                    </el-col>
                                    <el-col :span="12"> -->
                                <div v-for="(o, i) in 40" :key="i">
                                    <p class="chairname">
                                        {{ $t(`internationalAdvisoryCommittee_09.${i}.name`) }}
                                </p>
                                    <p class="chairdepartment">
                                        {{ $t(`internationalAdvisoryCommittee_09.${i}.department`) }}
                                    </p>
                                </div>
                                <!-- </el-col>
                                </el-row> -->

                            </div>
                        </div>
                    </div>
                    <div id="10" class="conferencePart">
                        <h1>
                            {{ $t('institutions_10_title') }}
                        </h1>
                        <div>
                            <h2>
                                <span></span>
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
                                <span></span>
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
                                <span></span>
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
            showWidth: 880,
            topic2: [0, 1, 2, 3],
            imgFolder: 'banner'
        };
    },
    methods: {
        getAssetsFile(url) {
            let imgFolder = 'banner';
            if (localStorage.getItem('lang') == 'zh-cn')
                imgFolder = 'bannerZH'
            return new URL(`../assets/img/${imgFolder}/${url}.jpg`, import.meta.url).href
        },
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
                if (val * 0.8 < 880) {
                    this.showWidth = val * 0.8;
                    this.bannerHeight = this.showWidth / 20 * 11;
                } else {
                    // console.log(val + '屏幕宽度大于900px')
                    this.showWidth = 880;
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
    text-align: center;
    margin-bottom: 10px;
    margin-top: 30px;
    font-size: 27px;
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
