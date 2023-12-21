<template>
 
</template>

<script>
import { useUserStore } from '~/store/user'; 

export default {
    name:'Logout',
    mounted(){
      const userStore = useUserStore();

      userStore.logout()
    this.$router.push("/auth/signIn")
    }
}
</script>

<style>

</style>