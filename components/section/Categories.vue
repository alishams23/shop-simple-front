<template>
  <div class="my-bg-gradient1">
   
    <div class="container mt-5 pb-5">
      <div class="ecome-heading style2">
        <h1>محصولات ما</h1>
        <div class="btn-show d-none d-sm-block" @click="go_category()">
          <div class="">محصولات بیشتر</div>
        </div>
      </div>
      <p class="ecome-info"></p>

      <ul class="nav nav-pills my-5 justify-content-center d-flex flex-wraps" id="pills-tab">
        <li class="" v-for="item in category" v-bind:key="item.id">
          <button
            class=" py-3 m-2  px-5 border rounded-pill"
            v-bind:class="indexActive == item.id ? 'bg-custom-gradient text-white' : 'bg-white'"
            @click="tabChange(item.id)"
          >
            {{ item.title }}
          </button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div v-for="(item, index) in data" v-bind:key="item.id">
          <div
            class="row"
            v-show="indexActive == index"
            v-bind:class="'js-multiple-row' + index"
          >
            <router-link
              tag="div"
              v-for="productData in item"
              v-bind:key="productData.title"
              v-bind:to="`/product/${productData.id}`"
              class="product-item col-12 col-lg-3 col-md-6  section2-item"
            >
              <Product v-bind:data="productData" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Product from "@/components/shared/product.vue";
export default {
  components: { Product },
  data() {
    return {
      category: [],
      data: {},
      indexActive: null,
    };
  },
  mounted() {
    this.getCategory();
  },
  methods: {
    async getCategory() {
      let mydata = await axios
        .get("https://rootakhti-yazd.ir/api/shop/main_page/")
        .then((response) => (this.category = response.data));
      for (let index = 0; index < this.category.length; index++) {
        if (this.indexActive == null)
          this.indexActive = this.category[index].id;
        let mydata = await axios
          .get(
            `https://rootakhti-yazd.ir/api/shop/category_retrieve/${this.category[index].id}`
          )
          .then(
            (response) =>
              (this.data[this.category[index].id] = response.data.results)
          );
       
      }
    },
    go_category() {
      this.$router.push({
        name: "Search",
        params: { isStockName: false },
      });
    },
    tabChange(id) {
      this.indexActive = id;
    },
  },
};
</script>

<style>
</style>