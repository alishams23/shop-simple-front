
<template>
    <Navbar/>
 
    <slot />  
    <Footer />


</template>

<script>
import { useUserStore } from '~/store/user'; 

import Footer from "@/components/section/Footer.vue"
import Navbar from "@/components/section/Navbar.vue"
export default {
components:{Footer,Navbar },
beforeMount() {
    const userStore = useUserStore();

    // Load token from cookie when the layout is created
    userStore.loadTokenFromCookie();
  },
}
</script>