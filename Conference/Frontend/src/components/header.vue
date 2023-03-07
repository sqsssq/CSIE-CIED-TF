<!--
 * @Description: 
 * @Author: Qing Shi
 * @Date: 2022-11-20 23:25:35
 * @LastEditTime: 2023-03-07 09:30:05
-->
<template>
    <div ref="cf_header" style="width: 100%;">
        <div>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false">
                <el-menu-item index="0">
                    <div style="">
                        <img src="@/assets/img/logo_blue-2x.png" height="50">
                    </div>
                </el-menu-item>
                <el-menu-item index="1" @click="jump('')">
                    {{ $t('menubar.0') }}
                </el-menu-item>
                <el-menu-item index="3" @click="jump('keynote')">
                    {{ $t('menubar.1') }}
                </el-menu-item>
                <el-menu-item index="4" @click="jump('committee')">
                    <!-- <router-link to="/committee"></router-link> -->
                    {{ $t('menubar.2') }}
                </el-menu-item>
                <div class="flex-grow" />
                <!-- <el-menu-item index="1">Processing Center</el-menu-item> -->
                <el-sub-menu index="2">
                    <template #title><i class="el-icon el-tooltip__trigger" data-v-7b5f8a18="" style="font-size: 24px;"><svg
                                preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em"
                                data-v-7b5f8a18="">
                                <path fill="currentColor"
                                    d="m18.5 10l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10h2zM10 2v2h6v2h-1.968a18.222 18.222 0 0 1-3.62 6.301a14.864 14.864 0 0 0 2.336 1.707l-.751 1.878A17.015 17.015 0 0 1 9 13.725a16.676 16.676 0 0 1-6.201 3.548l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18.078 18.078 0 0 1 4.767 8h2.24A16.032 16.032 0 0 0 9 10.877a16.165 16.165 0 0 0 2.91-4.876L2 6V4h6V2h2zm7.5 10.885L16.253 16h2.492L17.5 12.885z">
                                </path>
                            </svg></i></template>
                    <el-menu-item index="2-1" @click="changeLang('en-us')">English</el-menu-item>
                    <el-menu-item index="2-2" @click="changeLang('zh-cn')">中文</el-menu-item>
                </el-sub-menu>
            </el-menu>
            <el-backtop :right="100" :bottom="100" />
        </div>
        <div>
            <el-carousel :height="bannerHeight + 'px'" :interval="3000">
                <el-carousel-item v-for="item in bannerImg" :key="item">
                    <img :src="getAssetsFile(item)" alt="" style="width: 100%; height: auto;">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
import { ref, onMounted } from 'vue';
import { useDataStore } from "@/stores/counter";
import { useRouter } from 'vue-router';

const cf_header = ref(null);

const dataStore = useDataStore();
const activeIndex = ref('1');
const { locale } = useI18n();
const router = useRouter();

const bannerImg = [1, 2, 3, 4]
const bannerWidth = ref(0)
const bannerHeight = ref(0)

// const elWidth = 

const jump = (url) => {
    router.push({
        path: `/${url}`,

    });
}

onMounted(() => {
    bannerWidth.value = cf_header.value.clientWidth;
    bannerHeight.value = bannerWidth.value * 2633 / 8000;
    // console.log(bannerHeight.value);
})


function getAssetsFile (url) {
    let imgFolder = 'banner_full';
    if (localStorage.getItem('lang') == 'zh-cn')
        imgFolder = 'banner_fullZH'
    return new URL(`../assets/img/${imgFolder}/${url}.jpg`, import.meta.url).href
}

const changeLang = (lang) => {
    localStorage.setItem("lang", lang);
    if (lang === 'zh-cn') {
        locale.value = 'zh-cn';
    } else {
        locale.value = 'en-us';
    }
}

</script>
<style>
.flex-grow {
    flex-grow: 1;
}
</style>
