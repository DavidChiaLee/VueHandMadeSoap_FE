<script>
  export default {
  data(){
    return {
      loginStatus: false
    };
  },
  created(){
    let jwt = localStorage.getItem("jwt");
    if(jwt){
      fetch("http://localhost:8080/graphql", {
        method: 'POST',
        body: JSON.stringify({
          query: `mutation {
            checkJWT(jwt: "${jwt}")
          }`
        })
      }).then(res => res.json()).then(body => {
        if(body.data.checkJWT){
          this.loginStatus = true;
        }else{
          localStorage.removeItem("jwt");
          this.loginStatus = false;
        }
      });
    }
  },
  methods: {
    signout(){
      localStorage.removeItem("jwt");
      alert("登出成功");
      location.reload();
    }
  }
}
</script>

<template lang="pug">
router-view(v-slot="{Component}")
  component(:is="Component" :key="$route.path" :login-status="loginStatus"  @signout="signout")
</template>

<style lang="sass" scoped>

</style>