<template>
  <div id="app">
    <HeaderBar></HeaderBar>
      <transition name="moveInUp">
        <router-view />
      </transition>
  </div>
</template>

<script>
 import HeaderBar from '@/components/MenuShop.vue'
  
  
export default {
  name: "App",
  data() {
    return{
    x: this.checkApi(),
  }},
  components: {
      HeaderBar,
   },
  methods:{
      checkApi: function()
  {
    return localStorage.getItem('api-token');
  }
}
};
</script>
<style scoped>
.moveInUp-enter-active{
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}
</style>
