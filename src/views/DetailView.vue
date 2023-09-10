<template>
    <div id="app">
        <el-container>
        <el-header>
            Header
        </el-header>
        <el-container style="display: flex; flex-direction: row-reverse;"> 
            <el-aside width="200px">
                sidebar
            </el-aside>
            <el-main>
                Main
                <RichText />
            </el-main>
        </el-container> 
    </el-container>
    </div>
</template>
  
<script>
import RichText from "@/components/RichText.vue";
export default {
    name: "App",
    components: {
        RichText
    }
};
</script>
  
<style>
#app {
font-family: "Avenir", Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
color: #2c3e50;
margin: 40px;
}

header {
align-items: center;
display: flex;
justify-content: space-between;
margin-bottom: 40px;
width: 100%;
}

.el-header, .el-footer {
background-color: #B3C0D1;
color: #333;
text-align: center;
line-height: 60px;
}

.el-aside {
background-color: #D3DCE6;
color: #333;
text-align: center;
line-height: 200px;
}

.el-main {
background-color: #E9EEF3;
color: #333;
text-align: center;
line-height: 160px;
}

body > .el-container {
margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
line-height: 320px;
}
</style>
