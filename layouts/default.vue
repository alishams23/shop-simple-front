
<template>
    <Navbar/>
 
    <slot />  
    <Footer />


</template>

<script>
import Footer from "@/components/section/Footer.vue"
import Navbar from "@/components/section/Navbar.vue"
export default {
components:{Footer,Navbar }
}
</script>