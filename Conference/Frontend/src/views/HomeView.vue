<!--
 * @Description: 
 * @Author: Qing Shi
 * @Date: 2022-09-17 23:36:36
 * @LastEditTime: 2023-02-20 22:33:42
-->
<template>
  <div class="common-layout" style="width: 100%; height: 100vh; overflow-y: auto; background-color: #FFFFFF;">
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-main>
        <Main />
      </el-main>
      <el-footer>
        <div style="text-align: center;">
          Copyright © CSIE 2023 & CIEDH 2023
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from '../components/cPart/header.vue';
import Main from '../components/Main.vue';

export default {
  name: "home_view",
  data () {
    return {
      msgH: null,
      timeData: null,
      sliceData: null,
      basicData: null
    };
  },
  computed: {
    initSign () {
      // this.timeData = timeData;
      // this.sliceData = sliceData;
      // this.basicData = basicData;
      // // return this.msgH == null;
      // return this.timeData && this.sliceData && this.basicData;
    },
    loadingText () {
      return "Loading"
      // return "Loading:    " + 'Route: \n' +
      //     !!this.route + '   Station: \n'+ !!this.station + '   Alldata: \n'+ !!this.alldata
    }
  },
  mounted () {
    // const dataStore = useDataStore();
    // dataStore.fetchHello();
    // this.msgH = dataStore.msg;
    //   this.timeData = timeData;
    // this.msgH = 1;
  },
  methods: {
    fetchData () {
    }
  },
  components: { Main, Header }
};
</script>
<style scoped>
</style>
