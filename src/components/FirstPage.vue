<template>
  <div class="hello">
    <el-row>
      <el-col :span="24">
        <div class="header">
          111
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: 'FirstPage',
  props: {
    msg: String
  },
  data() {
    return {
      radio: '1'
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.header{
  background-color: rgba(0, 0, 0, .5);
}

</style>
