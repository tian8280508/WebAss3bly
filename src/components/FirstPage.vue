<template>
    <div class="hello">
        <el-row class="header">
            <el-col :span="8">
                <el-image style="width: 65px; height: 65px" :src="require('@/assets/logo.png')"></el-image>
            </el-col>
        </el-row>
        <div id="container" ref="graph"></div>
        <el-dialog title="Add Node" :visible.sync="addNodeVisible">
            <RichText :readOnly="false" />

            <span slot="footer" class="dialog-footer">
                <el-button @click="addNodeVisible = false">Cancel</el-button>
                <el-button type="primary" @click="addNodeVisible = false">Confirm</el-button>
            </span>

        </el-dialog>
    </div>
</template>


<script>


import * as echarts from 'echarts';
import { chartData1, chartData2, chartOption1, chartOption2 } from '@/assets/chartData.js';
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
        RichText
    },
    data() {
        return {
            addNodeVisible: false,
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
