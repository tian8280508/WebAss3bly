<template>
    <el-container>
      <el-header style="display: flex; justify-content: flex-start; align-items: center;">
        <el-image style="width: 150px; margin-right: 20px;" :src="require('@/assets/logo.jpg')"></el-image>
        <el-input style="width: 700px;" placeholder="Input to search..." v-model="inputSearch">
          <template slot="prepend"><i class="el-icon-search"></i></template>
        </el-input>
        <Profile style="line-height: normal; position: absolute; top: 10px; right: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); background-color: #fff; z-index: 1000;" />
      </el-header>
      <el-main>
        <div id="container" ref="graph"></div>
        <el-button 
          type="primary"
          style="position: absolute; 
                 bottom: 50px; 
                 right: 50px; 
                 background-color: yourColorHere; 
                 box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); 
                 z-index: 1001;"
          @click="TODO">Add New Node
        </el-button>
        <el-dialog title="Add Node" :visible.sync="addNodeVisible">
            <RichText :readOnly="false" />

            <span slot="footer" class="dialog-footer">
                <el-button @click="addNodeVisible = false">Cancel</el-button>
                <el-button type="primary" @click="addNodeVisible = false">Confirm</el-button>
            </span>

        </el-dialog>
      </el-main>
    </el-container>
</template>


<script>
import { visConf } from '@/assets/visConf.js'
import { runXXLayout, treeLayoutConfForm, hubsizeLayoutConfForm } from '@/assets/visLayout'
import { demoData, ownDemoData } from "@/assets/graphData"
import RichText from './RichText.vue';
import { mapState, mapMutations } from 'vuex';

// import { parse, stringify } from 'flatted'; 循环对象


export default { //这个是一个Vue对象
    name: 'FirstPage',
    props: {
        msg: String
    },
    components: {
        RichText,
        Profile
    },
    data() {
        return {
            addNodeVisible: false,
            inputSearch:'',
        }
    },
    computed: {
        ...mapState({
            visgraphInVuex: 'visGraph', // 确保这里引用的是正确的 state 属性
        }),
    },
    methods: {
        // 模拟读取数据的接口
        getGraphData() {
            console.log('数据加载成功');
        },
        // 将this.graphData中的数据加载 渲染
        drawGraph(visConfParm) {
            var visgraph = new VisGraph(document.getElementById('container'), visConfParm);
            console.log(visgraph);
            visgraph.drawData(ownDemoData);

            runXXLayout("Tree", visgraph.getGraphData(), treeLayoutConfForm);
            // runXXLayout("Hubsize", visgraph.getGraphData(),hubsizeLayoutConfForm);

            visgraph.setZoom('auto')
            // 上链：存储数据到localstorge
            // window.localStorage.setItem('visgraph',stringify(visgraph))
            // save to vuex
            this.saveVisGraph2Vuex(visgraph.getGraphData())
            this.$nextTick(() => {
                console.log(this.visgraphInVuex);

            });
            console.log(this.$store.state.visGraph);
        },
        ...mapMutations({
            saveVisGraph2Vuex: 'setVisGraph'
        }),
        goToDetail() {
            this.$router.push('/detail');
        },

    },
    watch: {
        graphData(newVal, oldVal) {
            if (oldVal != newVal) {
                this.drawChart()
            }
        }
    },
    computed: {

    },
    mounted() {
        // 重写配置文件
        var that = this
        visConf.node.ondblClick = function (event, node) {
            console.log(node);
            that.addNodeVisible = true;
            console.log(that.addNodeVisible);
        }

        visConf.node.onClick = function (event, node) {
            console.log('Click:',node);
            that.goToDetail()
        }


        if (window.VisGraph) {
            // visgraph 已加载，你可以在这里使用它
        } else {
            console.error('visgraph 未定义');
        }
        this.drawGraph(visConf)
    },
    created() {

    }
}
</script>

// <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-button {
  display: flex;
  width: 700px;
  border-radius: 28.618px;
}
.header {
    height: 60px;
    background-color: rgba(0, 0, 0, .5);
}

#container {
    /* width: 500px;可以没有这个 */
    height: 500px;
    /* 不可以100% */
    /* background-color: #42b983; */
}
</style>
