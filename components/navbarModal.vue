<template>
  <div
    class="bg-white"
    :class="modal == true ? '' : 'd-none'"
    v-if="categories != null"
  >
    <div class="mymodal    " :class="modal == true ? 'open' : ''">
      <div class="mymodal-overlay" @click="modal = false;modalFunction()"></div>
      <div class="mymodal-card">
        <div class="mymodal-body rtl d-flex flex-row">
          <div
            class="col-6 px-3 border border-bottom-0  m-0 border-left scrollBarStyleSmall"
            style="
              
              overflow: hidden;
              overflow-y: scroll;
            "
          >
            <div
              class="px-2 rounded-10  text-center fw-bold py-3"
              v-for="data in categories"
              v-bind:key="data"
        v-show="!(data.hide_product && textPage == 'محصولات') && !(data.hide_stock && textPage == 'استوک') && !(data.hide_people_product && textPage == 'محصولات مشتریان')"

              @mouseover="indexActive = data.id"
              v-bind:class="
                indexActive == data.id
                  ? ' mx-2 ml-0 btn w-100 border-none  fs-5 bg-custom-gradient'
                  : ' mx-2 ml-0 '
              "
            >
              {{ data.title }}
            </div>
          </div>
          <div
            class="col-6 scrollBarStyleSmallHidden"
            style="
             
              overflow: hidden;
              overflow-y: scroll;
            "
          >
            <div class="fw-bold fs-4 p-4 d-flex">
              <div
                style="width: 2.5px"
                class="rounded-pill py-2 mx-2 bg-custom-gradient"
              ></div>
              <div class="py-2">{{ textPage }}</div>
              <router-link
                to="/peopleProduct"
                @click=" modal = false;modalFunction()"
                class="btn-gradient py-2 mx-3 px-3 rounded-10"
                v-if="textPage == 'محصولات مشتریان'"
              >
                افزودن محصول
              </router-link>
            </div>

            <div
              class="w-100 d-flex flex-row flex-wrap"
              v-for="data in categories"
              v-bind:key="data"
            >
              <button
                v-show="data.id == indexActive && !(data2.hide_product && textPage == 'محصولات')  "
                class="m-3 p-2 border-bottom btn button-active"
                v-for="data2 in data.main_category"
                v-bind:key="data2"
                @click="
                  unHover();
                  goPage(data2.id);
                  modal = false;modalFunction()
                "
              >
                {{ data2.title }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["categories", "textPage", "goPage", "modal", "modalFunction"],

  data() {
    return {
      indexActive: null,
      dNone: false,
    };
  },
  methods: {
    unHover() {
      this.dNone = true;
      setTimeout(() => {
        this.dNone = false;
      }, 1);
    },
  }
};
</script>

<style>

</style>