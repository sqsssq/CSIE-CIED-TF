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

                    <div id="04" class="conferencePart">
                        <h1><span></span>{{ $t("keynote_04_title") }}</h1>
                        <div class="sq_content">
                            <div>
                                <h2>
                                    <span></span>
                                    {{ $t('keynote_04.0.name') }}

                                </h2>
                                <p>{{ $t('keynote_04.0.department.0') }}
                                </p>
                                <p style="margin-top: 10px;">
                                    <span class="themeTitle">{{ $t('keynote_04.0.timeTitle') }}</span>: {{ $t('keynote_04.0.time') }}
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
                                        <!-- <img :src="getImgUrl('inv1.jpg')" class="image" width="200" /> -->
                                    </div>
                                    <span class="themeTitle">{{ $t('keynote_04.0.bioTitle') }}</span>: {{
                                        $t('keynote_04.0.bio') }}
                                </div>
                            </div>

                            <div>
                                <h2>
                                    <span></span>
                                    {{ $t('keynote_04.1.name') }}

                                </h2>
                                <p>{{ $t('keynote_04.1.department.0') }}
                                </p>
                                <!-- <p>{{ $t('keynote_04.1.department.1') }}
                                </p> -->
                                <p style="margin-top: 10px;">
                                    <span class="themeTitle">{{ $t('keynote_04.1.timeTitle') }}</span>: {{ $t('keynote_04.0.time') }}
                                </p>
                                <p class="themeTitle" style="margin-top: 10px; margin-bottom: 10px;">
                                    {{ $t('keynote_04.1.theme') }}
                                </p>
                                <div class="info">
                                    <span class="themeTitle">{{ $t('keynote_04.1.infoTitle') }}</span>: {{
                                        $t('keynote_04.1.info') }}
                                </div>
                                <div class="info">

                                    <div style="float: right; margin-top: 10px; clear: both;" align="center">
                                        <!-- <img :src="getImgUrl('inv1.jpg')" class="image" width="200" /> -->
                                    </div>
                                    <span class="themeTitle">{{ $t('keynote_04.1.bioTitle') }}</span>: {{
                                        $t('keynote_04.1.bio') }}
                                </div>
                            </div>

                            <div>
                                <h2>
                                    <span></span>
                                    {{ $t('keynote_04.2.name') }}

                                </h2>
                                <p>{{ $t('keynote_04.2.department.0') }}
                                </p>
                                
                                <p>{{ $t('keynote_04.2.department.1') }}
                                </p>
                                <p style="margin-top: 10px;">
                                    <span class="themeTitle">{{ $t('keynote_04.2.timeTitle') }}</span>: {{ $t('keynote_04.2.time') }}
                                </p>
                                <p class="themeTitle" style="margin-top: 10px; margin-bottom: 10px;">
                                    {{ $t('keynote_04.2.theme') }}
                                </p>
                                <div class="info">
                                    <span class="themeTitle">{{ $t('keynote_04.2.infoTitle') }}</span>: {{
                                        $t('keynote_04.2.info') }}
                                </div>
                                <div class="info">

                                    <div style="float: right; margin-top: 10px; clear: both;" align="center">
                                        <!-- <img :src="getImgUrl('inv1.jpg')" class="image" width="200" /> -->
                                    </div>
                                    <span class="themeTitle">{{ $t('keynote_04.2.bioTitle') }}</span>: {{
                                        $t('keynote_04.2.bio') }}
                                </div>
                            </div>

                            <div>
                                <h2>
                                    <span></span>
                                    {{ $t('keynote_04.3.name') }}

                                </h2>
                                <p>{{ $t('keynote_04.3.department.0') }}
                                </p>
                                <!-- <p>{{ $t('keynote_04.3.department.1') }}
                                </p> -->
                                <p style="margin-top: 10px;">
                                    <span class="themeTitle">{{ $t('keynote_04.3.timeTitle') }}</span>: {{ $t('keynote_04.3.time') }}
                                </p>
                                <p class="themeTitle" style="margin-top: 10px; margin-bottom: 10px;">
                                    {{ $t('keynote_04.3.theme') }}
                                </p>
                                <div class="info">
                                    <span class="themeTitle">{{ $t('keynote_04.3.infoTitle') }}</span>: {{
                                        $t('keynote_04.3.info') }}
                                </div>
                                <div class="info">

                                    <div style="float: right; margin-top: 10px; clear: both;" align="center">
                                        <!-- <img :src="getImgUrl('inv1.jpg')" class="image" width="200" /> -->
                                    </div>
                                    <span class="themeTitle">{{ $t('keynote_04.3.bioTitle') }}</span>: {{
                                        $t('keynote_04.3.bio') }}
                                </div>
                            </div>
                            <div>
                                <h2>
                                    <span></span>
                                    {{ $t('keynote_04.4.name') }}

                                </h2>
                                <p>{{ $t('keynote_04.4.department.0') }}
                                </p>
                                <p>{{ $t('keynote_04.4.department.1') }}
                                </p>
                                <p style="margin-top: 10px;">
                                    <span class="themeTitle">{{ $t('keynote_04.4.timeTitle') }}</span>: {{ $t('keynote_04.4.time') }}
                                </p>
                                <p class="themeTitle" style="margin-top: 10px; margin-bottom: 10px;">
                                    {{ $t('keynote_04.4.theme') }}
                                </p>
                                <div class="info">
                                    <span class="themeTitle">{{ $t('keynote_04.4.infoTitle') }}</span>: {{
                                        $t('keynote_04.4.info') }}
                                </div>
                                <div class="info">

                                    <div style="float: right; margin-top: 10px; clear: both;" align="center">
                                        <!-- <img :src="getImgUrl('inv1.jpg')" class="image" width="200" /> -->
                                    </div>
                                    <span class="themeTitle">{{ $t('keynote_04.4.bioTitle') }}</span>: {{
                                        $t('keynote_04.4.bio') }}
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
