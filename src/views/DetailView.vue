<template>
    <div id="app">
        <el-container>
        <el-header>
            <img style="margin-right: 4px;" src="../assets/logo.png" />
            <span style="color: #FF9900;">Web3</span>
            <span style="color: #3887FE;">Assembly</span>
        </el-header>
        <el-container style="display: flex; flex-direction: row-reverse;"> 
            <el-aside style="line-height: normal;" width="300px">
                <Profile />
                <VotingButton />
                <Comment />
            </el-aside>
            <el-main style="line-height: normal;">
                <div style="display: flex; justify-content: flex-end; gap: 20px; margin-bottom: 10px;">
                    <i class="el-icon-star-off" 
                        :style="{ fontSize: '2rem', color: isStarActive ? 'red' : 'inherit' }" 
                        @click="toggleStar"></i>
                    <i class="el-icon-download" style="font-size: 2rem;"></i>
                    <i class="el-icon-collection" style="font-size: 2rem;"></i>
                </div>
                <RichText :readOnly="true" />
            </el-main>
        </el-container> 
    </el-container>
    </div>
</template>
  
<script>
import Profile from "@/components/Profile.vue";
import RichText from "@/components/RichText.vue";
import Comment from '@/components/Comment.vue'
import VotingButton from '@/components/VotingButton.vue'

export default {
    name: "App",
    components: {
        RichText,
        Profile,
        Comment,
        VotingButton
    },
    data() {
        return {
            isStarActive: false
        }
    },
    methods: {
        toggleStar() {
            this.isStarActive = !this.isStarActive
        },
    },

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
    margin-bottom: 5px;
    width: 100%;
}

.el-header, .el-footer {
background-color: #FFF;
color: #333;
text-align: center;
line-height: 60px;
}

.el-aside {
background-color: #FFF;
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
