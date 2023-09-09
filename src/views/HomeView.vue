<template>
  <div>
    <FirstPage>
    </FirstPage>
    <RichText />
  </div>
</template>

<script>
// @ is an alias to /src
import FirstPage from '@/components/FirstPage.vue'

export default {
  name: 'HomeView',
  components: {
    FirstPage
  }
}
</script>
