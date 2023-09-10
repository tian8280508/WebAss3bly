<template>
  <div>
    <FirstPage>
    </FirstPage>
    <Profile />
  </div>
</template>

<script>
// @ is an alias to /src
import FirstPage from '@/components/FirstPage.vue'
import Profile from '@/components/Profile.vue';

export default {
  name: 'HomeView',
  components: {
    FirstPage,
    Profile
}
}
</script>
