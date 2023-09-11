<template>
    <div class="comment-box">
      <el-row v-if="comments.length">
        <el-col :span="24" class="col-content">
          <div class="comments-view" ref="commentsView">
            <div v-for="comment in comments" :key="comment.id" class="comment">
              <!-- <img :src="comment.avatar" alt="Avatar" class="comment-avatar"> -->
              <img src="../assets/wonderpal3981.png" alt="Avatar" class="comment-avatar">
              <p class="comment-text">{{ comment.text }}</p>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20">
          <el-input v-model="newCommentText" placeholder="Input Your Comment here~"></el-input>
        </el-col>
        <el-col :span="4">
          <el-button @click="addComment">Send</el-button>
        </el-col>
      </el-row>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newCommentText: '',
        comments: []
      };
    },
    mounted() {
      this.loadComments();
    },
    methods: {
      addComment() {
        if (!this.newCommentText.trim()) return;
  
        const newComment = {
          id: Date.now(),
          avatar: "../assets/wonderpal3981.png",
          text: this.newCommentText.trim()
        };
  
        this.comments.push(newComment);
        this.newCommentText = '';
        this.saveComments();
      },
      loadComments() {
        const comments = localStorage.getItem('vue-comments');
        if (comments) {
          this.comments = JSON.parse(comments);
        }
      },
      saveComments() {
        localStorage.setItem('vue-comments', JSON.stringify(this.comments));
      }
    }
  };
  </script>
  
  <style scoped>
  .comment-box {
    width: 300px;
    height: 400px;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .comments-view {
    height: 280px;
    width: 100%;
    overflow-y: scroll;
    margin-bottom: 10px;
  }
  .comment {
    display: flex;
    align-items: center;
    padding: 5px 0;
    border-bottom: 1px solid #eee;
  }
  .comment-avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .comment-text {
    flex: 1;
  }
  .col-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  </style>
  