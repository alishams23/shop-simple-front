<template>
  <div>
    <div class="gradient-red my-4 pb-5">
      <div class="pt-4 container">
        <div class="d-flex justify-content-between mb-4">
          <div class="text-white px-5  py-2 fw-bold mt-3 fs-3 text-right rtl">پیشنهاد های شگفت انگیز </div>
        </div>
          <Carousel :autoplayLoop="true"  class="mx-3" v-bind="settings" :breakpoints="breakpoints">
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
  components: { Product },
  data() {
    return {
      data: [], settings: {
        itemsToShow: 1,
        snapAlign: 'center',
        wrapAround:true ,
   
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
          // 600px and up
          600: {
          itemsToShow: 2,
          snapAlign: 'center',
        },
        // 1000px and up
        1000: {
          itemsToShow: 4,
          snapAlign: 'center',
        },
        // 1300 and up
        1300: {
          itemsToShow: 5,
          snapAlign: 'center',
        },
      },
    };
  },
  mounted() {
    this.getData();
  },
  methods: {

    async getData() {

      let mydata = await axios
        .get("https://rootakhti-yazd.ir/api/shop/category_discount/")
        .then((response) => (this.data = response.data.results));



    },
  },
};
</script>

<style>
.max-line {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.max-line-title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
}

 .gradient-animation-1 {
  background: linear-gradient(-45deg, #ee7752, #ff0263, #5823d5, #232cd5);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
} 

.gradient-red {
  background: linear-gradient(-45deg, #e20132, #fb3a84);


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


.pd-bd:hover {
  transform: scale(1.03);

}


.pd-bd {
  transition: transform 0.5s;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>