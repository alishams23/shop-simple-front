<template>
  <div>
    <!-- end push menu-->
    <div class="wrappage">
      <!-- /header -->
      <!--content-->
      <div class="shop-collection" style="">
        <div class="d-flex flex-row shop-colect">
          <div class="
              col-md-9 col-sm-12 col-xs-12
              bg-white
              collection-list
              pt-5
              px-5
              scrollBarStyle
            " style="
              position: fixed;
              height: 100%;
              overflow-y: auto;
              right: 0px;
              padding-bottom: 200px;s
            ">
            <div class="hidden-lg hidden-md rtl">
              <a class="border px-4 py-2 rounded-10" @click="filter == false ? (filter = true) : (filter = false)">فیلتر
                کردن</a>
            </div>
            <div class="e-product rtl">
              <div class="product-collection-grid product-grid" v-if="loading == false">
                <div class="row">
                  <router-link v-bind:to="`/product/${data.id}`" class="
                      product-item
                      col-xs-6 col-sm-6 col-md-4 col-lg-3
                      product-item
                    " v-for="data in data1.results" v-bind:key="data.title">
                    <Product v-bind:data="data" class="border-3 ltr" />
                  </router-link>
                </div>
              </div>
              <div v-if="loading == true" class="d-flex justify-content-canter flex-row pt-5">
                <div class="col-12 text-center">
                  <Loading />

                </div>
              </div>
              <div v-if="loading == false && data1 != [] && data1.results.length == 0
                " class="d-flex justify-content-canter flex-row">
                <div class="col-12 text-center pt-9">
                  <div class="alert alert-info" role="alert">
                    محصولی برای نمایش وجود ندارد
                  </div>
                </div>
                
              </div>
              <div class="pd-middle space-v1">
                <ul class="pagination">
                  <li v-if="data1.previous != null">
                    <a @click="pageNumber -= 1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                          d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                      </svg></a>
                  </li>

                  <li v-if="data1.next != null">
                    <a @click="pageNumber += 1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black"
                        class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                      </svg></a>
                  </li>
                </ul>

                <div class="pd-sort"></div>
              </div>
            </div>
          </div>
          <div class="
              col-md-3 col-sm-3 col-xs-12
              collection-sidebar
              bg-white
              pt-5
              scrollBarStyle
            " v-bind:class="filter == false ? 'hidden-sm hidden-xs' : ''" style="
              position: fixed;
              height: 100%;
              overflow-x: hidden;
              overflow-y: auto;
              left: 0px;
              padding-bottom: 200px;
            " id="fixedScrollId">
            <div class="hidden-lg hidden-md mb-5 px-4 rtl">
              <a class="border px-4 py-2 rounded-10" @click="filter == false ? (filter = true) : (filter = false)">بستن
                فیلتر</a>
            </div>
            <div class="px-5 rtl">
              <div class="filter filter-group">
                <h1 class="widget-blog-title px-3">فیلتر محصولات</h1>
                <div class="filter-price filter-inside pe-3">
                  <div class="filter-content pt-4">
                    <div data-role="rangeslider">
                
                      <label for="price-min pb-5 mb-5">قیمت به تومان:</label>
                      <div class="py-4"></div>
                      <Slider v-model="valuePrice" :max="max" class="ltr slider-blue" />

                      <br />
                    </div>
                    <div class="form-check pb-4 pt-4">
                   
                      <input class="form-check-input pointer" type="checkbox"  v-model="isDiscount"
                        id="isDiscount" checked />
                      <label class="form-check-label" for="isDiscount">
                        فقط کالا های دارای تخفیف
                      </label>
                    </div>
               
                    <div class="form-check pb-4 pt-4">
                      <input class="form-check-input pointer" type="checkbox"  v-model="isExist" id="isExist"
                        checked />
                      <label class="form-check-label" for="isExist">
                        فقط کالا های موجود
                      </label>
                    </div>
                    <a @click="searchData()" class="btn-filter rounded-10 bg-custom-gradient pointer">فیلتر کردن</a>
                  </div>
                </div>
              </div>
              <div class="filter filter-cate  scrollBarStyleSmall" style="max-height:300px;overflow-y:scroll">
                <div class="">
                  <h1 class="widget-blog-title py-4 px-3">شرکت سازنده</h1>
                  <div class="p-4">
                    <div class="d-flex justify-content-center">
                      <div v-show="data.id == currentCompany" v-for="data in company" v-bind:key="data"
                        class="px-4 bg-dark text-white rounded-3  py-2 my-3 rounded-10">
                        {{ data.title }}
                      </div>
                    </div>
                    <input type="text" placeholder="جستجو" v-model="textCompany" @input="searchCompany"
                      class="px-3 form-control" />
                  </div>

                  <ul class="wiget-content v2">
                    <li v-bind:class="data.id == currentCompany ? 'bg-custom-gradient text-white' : ''
                      " v-for="data in company" v-bind:key="data" @click="
    currentCompany == data.id
      ? (currentCompany = null)
      : (currentCompany = data.id);
  searchData();
  " class="pointer">
                      <a>{{ data.title }}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="filter filter-cate">
                <h1 class="widget-blog-title py-4 px-3">دسته بندی ها</h1>
                <div class="p-4">
                  <div class="d-flex justify-content-center">
                    <div v-show="data.id == currentCategory" v-for="data in categories" v-bind:key="data"
                      class="px-4 bg-dark text-white  py-2 my-3 rounded-3">
                      {{ data.title }}
                    </div>
                  </div>
                  <input type="text" placeholder="جستجو" v-model="textCategory" @input="searchCategory"
                    class="px-3 form-control" />
                </div>

                <ul class="wiget-content v2">
                  <li v-bind:class="data.id == currentCategory ? 'bg-custom-gradient text-white' : ''
                    " v-for="data in categories" v-bind:key="data" @click="
    currentCategory == data.id
      ? (currentCategory = null)
      : (currentCategory = data.id);
  searchData();
  " class="pointer">
                    <a>{{ data.title }}</a>
                  </li>
                </ul>
              </div>
              <div class="fixed-scroll-top" @mouseenter="mouseScrollTop = true" @mouseleave="mouseScrollTop = false">
              </div>

              <div class="fixed-scroll" @mouseenter="mouseScroll = true" @mouseleave="mouseScroll = false"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="hideFooter"></div>
    </div>
  </div>
</template>

<script>
import Slider from "@vueform/slider";
import axios from "axios";
import Product from "@/components/shared/product.vue";

export default {
  components: {
    Slider,
    Product,
  },
 
  data() {
    return {
      data1: [],
      max: 10000000,
      valuePrice: [0, 10000000],
      searchText : this.$route.query.text,
      idCategory : this.$route.query.idCategory,
      isDiscount: null,
      isExist: null,
      categories: [],
      categoriesInstance: [],
      textCategory: "",
      currentCategory: null,
      loading: true,
      pageNumber: 1,

      nameRoute: this.$route.name,
      filter: false,
      mouseScroll: false,
      mouseScrollTop: false,
      company: [],
      companyInstance: [],
      currentCompany: null,

      textCompany: ""
    };
  },
  mounted() {
    if (this.idCategory != null) {
      this.currentCategory = this.idCategory;
    }
    this.searchData();
    this.getCategories();
    this.getCompany();
    this.fixedScroll();
  },
  methods: {
    async searchData() {
      this.data1 = [];
      this.loading = true;

      let urlAddress = `https://rootakhti-yazd.ir/api/shop/searchlistview/?search`;
      if (this.searchText != null) urlAddress += `=${this.searchText}`;
      if (this.currentCategory != null)
        urlAddress += `&category=${this.currentCategory}`;
      if (this.currentCompany != null)
        urlAddress += `&company=${this.currentCompany}`;
      urlAddress += `&page=${this.pageNumber}`;

      if (this.valuePrice[1] != 10000000)
        urlAddress += `&max_price=${this.valuePrice[1]}`;
      if (this.valuePrice[1] != 0) urlAddress += `&min_price=${this.valuePrice[0]}`;
      if (this.isDiscount == true) urlAddress += `&min_discount=1`;
      if (this.isExist == true) urlAddress += `&min_amount=1`;
      
    
      let mydata = await axios
        .get(urlAddress)
        .then((response) => (this.data1 = response.data));
      this.loading = false;
    },
    async getCategories() {
      let mydata = await axios
        .get(`https://rootakhti-yazd.ir/api/shop/Categories_api/`)
        .then((response) => {
          this.categories = response.data;
          this.categoriesInstance = response.data;
        });
    },
    async getCompany() {
      let mydata = await axios
        .get(`https://rootakhti-yazd.ir/api/shop/Company_list/`)
        .then((response) => {
          this.company = response.data;
          this.companyInstance = response.data;
        });
    },
    searchCategory(value) {
      if (this.textCategory == "") {
        this.categories = this.categoriesInstance;
      } else {
        this.categories = [];
        this.categoriesInstance.forEach((element) => {
          if (element.title.includes(this.textCategory))
            this.categories.push(element);
        });
      }
    },
    searchCompany(value) {
      if (this.textCompany == "") {
        this.company = this.companyInstance;
      } else {
        this.company = [];
        this.companyInstance.forEach((element) => {
          if (element.title.includes(this.textCompany))
            this.company.push(element);
        });
      }
    },
    fixedScroll() {
      setInterval(() => {
        if (this.mouseScroll == true) {
          document.getElementById("fixedScrollId").scrollTop += 10;
        }
        if (this.mouseScrollTop == true) {
          document
            .getElementById("fixedScrollId")
            .scrollTo({ top: 10, behavior: "smooth" });
        }
      }, 25);
    },
  },
  watch: {
    searchText: function (val) {
      this.pageNumber = 1;
      this.searchData();
    },
    idCategory: function (val) {
      
      this.pageNumber = 1;
      if (this.idCategory != null) this.currentCategory = this.idCategory;
   
      this.searchData();
    },
    $route(to, from) {
  
        this.idCategory = to.query.idCategory
        this.searchText = to.query.text
      
    },
    pageNumber: function (val) {
      this.searchData();
    },
    isDiscount: function (val) {
      this.pageNumber = 1;
      this.searchData();

    },
    isExist: function (val) {
      this.pageNumber = 1;
      this.searchData();

    },
    categories: function (val) {
      this.pageNumber = 1;
      this.searchData();

    },
    currentCompany: function (val) {
      this.pageNumber = 1;
      this.searchData();

    },
    currentCategory: function (val) {
      this.pageNumber = 1;
      this.searchData();

    },
    valuePrice: function (val) {
      this.pageNumber = 1;
      this.searchData();

    },
 
   
  
  },
};
</script>

<style scoped>
.slider-blue {
  --slider-connect-bg: #3b82f6;
  --slider-tooltip-bg: #3b82f6;
  --slider-handle-ring-color: #3b82f630;
}
</style>

<style src="@vueform/slider/themes/default.css"></style>