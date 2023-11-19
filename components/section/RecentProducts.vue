<template>
  <div>
            <div class="gradient-animation-2  pb-5 ">
        <div class=" pt-5 container">
        <div class="d-flex justify-content-end mb-4">  <div class="text-white px-5   fw-bold mt-3 fs-2">محصولات اخیر</div> </div>

        <Carousel class="mx-3" v-bind="settings" :breakpoints="breakpoints">
          <Slide v-for="item in data" :key="item">
            <router-link tag="div" v-bind:to="`/product/${item.id}`" class="product-item mx-2 section2-item ">
              <Product v-bind:data="item" />
            </router-link>
          </Slide>

        <template #addons>
          <Navigation />
        </template>

      </Carousel>

        </div>
      </div>
  </div>
</template>

<script> 
import axios from "axios";
import Product from "@/components/shared/product.vue"
export default {
   components:{Product},
  data (){
    
    return{
      data:[
      ]
      , settings: {
        itemsToShow: 1,
        snapAlign: 'center',
        wrapAround:true
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 3.5,
          snapAlign: 'center',
        },
        // 1024 and up
        1024: {
          itemsToShow: 5,
          snapAlign: 'center',
        },
      },
    }
  },
  mounted() {
  
    this.getData();
  },
  methods: {
    async getData() {
      let mydata = await axios
        .get("http://127.0.0.1:8000/api/shop/Recent_products/")
        .then((response) => (this.data = response.data));
  
  
    },
    
  },
};
</script>

<style>

.gradient-animation-2 {
	background: linear-gradient(-45deg, #00b7ff, #7a00f3, #007bff, #5400c2);
	background-size: 400% 400%;
	animation: gradient 10s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

.margin-price{
  margin-left: 92px;
}


</style>