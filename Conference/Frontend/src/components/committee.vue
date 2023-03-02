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

                    <div id="03" class="conferencePart">

                        <h1><span></span>{{ $t("chairmen_03_title") }}</h1>

                        <div>

                            <div>



                                <div class="sq_content">

                                    <div>

                                        <el-row :gutter="40">

                                            <el-col :span="8">

                                                <p style="float: right; margin-top: 10px;">{{ $t('chairmen_03.title.0') }}

                                                </p>

                                            </el-col>

                                            <el-col :span="16">

                                                <div v-for="(o, i) in 3" :key="i">

                                                    <p class="chairname">

                                                        {{ $t(`chairmen_03.CoChair.${i}.name`) }}

                                                    </p>

                                                    <p class="chairdepartment">

                                                        {{ $t(`chairmen_03.CoChair.${i}.department`) }}

                                                    </p>

                                                </div>

                                            </el-col>

                                        </el-row>

                                    </div>

                                    <div>

                                        <el-row :gutter="40">

                                            <el-col :span="8">

                                                <p style="float: right; margin-top: 10px;">{{ $t('chairmen_03.title.1') }}

                                                </p>

                                            </el-col>

                                            <el-col :span="16">

                                                <div v-for="(o, i) in 3" :key="i">

                                                    <p class="chairname">

                                                        {{ $t(`chairmen_03.HonoraryCoChair.${i}.name`) }}

                                                    </p>

                                                    <p class="chairdepartment">

                                                        {{ $t(`chairmen_03.HonoraryCoChair.${i}.department`) }}

                                                    </p>

                                                </div>

                                            </el-col>

                                        </el-row>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div id="05" class="conferencePart">

                        <h1>

                            <span></span>{{ $t('programCommittee_05_title') }}

                        </h1>

                        <div>

                            <h2>

                                {{ $t('programCommittee_05.title.0') }}

                            </h2>

                            <div>

                                <el-row :gutter="40">

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



                                <el-row :gutter="40">

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

                                {{ $t('organizationCommittee_05.title.0') }}

                            </h2>

                            <div>

                                <el-row :gutter="40">

                                    <el-col :span="8">

                                        <p style="float: right; margin-top: 10px;">{{ $t('organizationCommittee_05.title.1')
                                        }}

                                        </p>

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



                                <el-row :gutter="40">

                                    <el-col :span="8">

                                        <p style="float: right; margin-top: 10px;">{{ $t('organizationCommittee_05.title.2')
                                        }}

                                        </p>

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

                            <span></span>{{ $t('awardCommittee_06_title') }}

                        </h1>

                        <div>

                            <div>

                                <el-row :gutter="40">

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

                            <span></span>{{ $t('publicationCommittee_07_title') }}

                        </h1>

                        <div>

                            <div>

                                <el-row :gutter="40">

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

                            <span></span>{{ $t('societies_08_title') }}

                        </h1>

                        <div>
                            <el-row :gutter="40">

                                <el-col :span="8">


                                    <p style="float: right; margin-top: 10px;">{{ $t('programCommittee_05.title.2') }}

</p>
                                </el-col>

                                <el-col :span="16">

                                    <div v-for="(o, i) in 5" :key="i">

                                        <p class="chairname">

                                            {{ $t(`societies_08.${i}.name`) }}

                                        </p>

                                        <p class="chairdepartment">

                                            {{ $t(`societies_08.${i}.department.0`) }}

                                        </p>

                                    </div>

                                </el-col>

                            </el-row>

                        </div>

                    </div>

                    <div id="09" class="conferencePart">

                        <h1>

                            <span></span>{{ $t('internationalAdvisoryCommittee_09_title') }}

                        </h1>

                        <div>

                            <el-row :gutter="40">

                                <el-col :span="8">

                                    <p style="float: right; margin-top: 10px;">{{ $t('programCommittee_05.title.2') }}

</p>
                                </el-col>

                                <el-col :span="16">

                                    <div v-for="(o, i) in 40" :key="i">

                                        <p class="chairname">

                                            {{ $t(`internationalAdvisoryCommittee_09.${i}.name`) }}

                                        </p>

                                        <p class="chairdepartment">

                                            {{ $t(`internationalAdvisoryCommittee_09.${i}.department`) }}

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
    data () {
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
        getImgUrl (url) {
            return new URL(`../assets/img/${url}`,
                import.meta.url).href
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
