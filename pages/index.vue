<template>
    <div>
            <HeaderHero />
            <Discount />
            <Categories />
            <recentProducts />
       
    </div>
</template>
  
<script>
import HeaderHero from "@/components/section/HeaderHero.vue"
import Discount from "@/components/section/Discount.vue"
import Categories from "@/components/section/Categories.vue"
import recentProducts from "@/components/section/recentProducts.vue"



export default {
    components: { HeaderHero, Discount, Categories, recentProducts}, mounted() {

    }
}
</script>
  
  
<style>
.body-bg {
    background: #f0f0f1;
}

.body-bg2 {
    background: #ff2146;
    /* max-height: 540px; */
}

.h-469 {
    height: 469px;
}

.rounded-20 {
    border-radius: 20px;
}

.zoom-out {
    transition: transform 0.5s;
}

.zoom-out:hover {
    transform: scale(0.96);
}

.zoom-in {
    transition: transform 0.5s;
}

.zoom-in:hover {
    transform: scale(1.2);
}

.h-213 {
    height: 225px !important;
}

.cover {
    object-fit: cover;
}

.owl-dots {
    background: white;
}

/* --------------------------------------------------------- */

.row::-webkit-scrollbar {
    background-color: rgba(255, 255, 255, 0);
    height: 12px
}

/* .row::-webkit-scrollbar-track {background-color:#fff} */
.row::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 12px
}</style>