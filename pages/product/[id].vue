<template>
    <!-- push menu-->

    <!-- end push menu-->
    <div class="wrappage">
      <!-- /header -->
      <!--content-->
      <div v-if="loading == false">
        <div class="container container-240" v-if="loading == false">
          <div class="single-product-detail product-bundle product-aff mt-5 pt-5">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-6">
                <div class="flex product-img-slide">
                  <div class="product-images">
                    <div class="main-img js-product-slider">
                      <a
                        href="#"
                        class="hover-images effect"
                        v-for="(data,index) in data1.image"
                        v-bind:key="data.id"
                      >
                        <img
                          v-bind:src="data.photo"
                          alt="photo"
                          v-if="imageSelected == data.id || (index == 0 && imageSelected == null)"
                          class="img-reponsive w-100 h-100 cover"
                      /></a>
                    </div>
                  </div>
                  <div class="multiple-img-list-ver2 js-click-product">
                    <div
                      class="product-col"
                      v-for="data in data1.image"
                      v-bind:key="data.id"
                    >
                      <div class="img active" @click="imageSelected = data.id">
                        <img
                          v-bind:src="data.photo"
                          alt="photo"
                          
                          class="img-reponsive w-100 h-100 cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6">
                <div class="single-flex">
                  <div
                    class="single-product-info product-info product-grid-v2 s-50"
                  >
                    <div class="">
                      <div @click="shareLink(data1.id)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
  </svg>
                      </div>
                      <h3 class="product-title display-4 rtl px-5">
                        <strong>{{ data1.title }}</strong>
                      </h3>
                      
                      <div class="product-price rtl px-5">
                        <span>{{ price(data1.price - (data1.price * data1.discount) / 100) }} تومان</span>
                        <div
                v-if="data1.discount != 0"
                class="rtl old text-decoration-line-through"
              >
                {{ data1.price }}
              </div>
                      </div>
                      
                      <div class="availability px-5">
                        <div class="rtl d-flex">
                          <p
                            class="
                              px-3
                              rounded-pill
                              m-3
                              py-2
                              bg-dark
                              text-white
                              rtl
                            "
                            v-if="data1.is_stock"
                          >
                            استوک
                          </p>
                          <p
                            class="
                              px-3
                              rounded-pill
                              m-3
                              py-2
                              bg-dark
                              text-white
                              rtl
                            "
                            v-if="data1.is_people"
                          >
                            آگهی مشتریان
                          </p>
                          <p
                            class="
                              px-3
                              rounded-pill
                              m-3
                              py-2
                              bg-danger
                              text-white
                              rtl
                            "
                            v-if="data1.discount != 0"
                          >
                            - {{ data1.discount }}%
                          </p>
                        </div>
                        <p
                          class="product-inventory rtl"
                          v-if="data1.is_people != true"
                        >
                          <label>وضعیت : </label
                          ><span v-if="data1.amount != 0">
                            موجود {{ data1.amount }} عدد </span
                          ><span class="text-danger" v-if="data1.amount == 0">
                            ناموجود
                          </span>
                        </p>
                        <p
                          class="product-inventory rtl"
                          v-if="data1.is_people == true"
                        >
                          <label class="px-2">استان : </label
                          ><span v-if="data1.people_product.state">
                            {{ data1.people_product.state }}
                          </span>
                          <label class="px-2">شهر : </label
                          ><span v-if="data1.people_product.city">
                            {{ data1.people_product.city }}
                          </span>
                        </p>
                        <p
                          class="product-inventory rtl py-3"
                          v-if="data1.is_people == true"
                        >
                          <label class="px-2">شماره تماس : </label
                          ><span v-if="data1.people_product.author">
                            {{ data1.people_product.author.username }}
                          </span>
                        </p>
                      </div>
                      <div class="short-desc rtl">
                        <p class="px-5">{{ data1.description }}</p>
                      </div>
                      <div
                        class="
                          single-product-button-group
                          d-flex
                          justify-content-end
                          flex-column
                        "
                      >
                        <div class=""></div>
                      </div>
                    </div>
                  </div>
                  <div class="hidden-xs hidden-sm text-right">
                    <div class="overflow-auto h-512">
                      <div
                        class="bg-5 rounded-20 me-2 py-3 px-5 mb-2"
                        v-for="spec in data1.Specification"
                        v-bind:key="spec.id"
                      >
                        <strong>{{ spec.title }}</strong>
                        <p class="pt-3">{{ spec.body }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="my-5 mx-3 pt-5" v-if="data1.blog && data1.blog.length != 0">
          <div class="blog-comment-content container mt-5 rtl">
            <div class="cmt-title text-center abs">
              <h1 class="oval-bd">بلاگ های متصل</h1>
            </div>
            <ul>
              <li v-for="result in data1.blog" v-bind:key="result.id">
                <router-link
                  v-bind:to="`/blog/${result.id}/`"
                  class="blog-comment-item text-right"
                >
                  <div class="cmt-content text-right">
                    <h4 class="">{{ result.title }}</h4>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div> -->
        <div class="gradient-animation-1 py-5" v-if="data1.is_people == false">
          <div class="d-flex justify-content-around align-items-center">
            <div class="d-flex align-items-center">
              <div class="bg-white px-4 py-4 rounded-pill fw-bold">
                {{ number }}
              </div>
              <p class="text-white fw-bold fs-4 px-3">تعداد محصول در سبد خرید</p>
            </div>
  
            <div class="d-flex flex-column align-items-center pointer">
              <div class="d-flex">
                <div @click="addToCard()" v-if="data1.amount > number">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="white"
                    class="bi bi-caret-up-fill pb-1"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
                    />
                  </svg>
                </div>
  
                <a v-if="data1.amount > number" @click="addToCard()" class="text-white fw-bold fs-4 px-3"
                  >افزودن به سبد خرید
                </a>
              </div>
              <div class="d-flex" v-if="number > 0">
                <div @click="deleteToCard()">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="white"
                    class="bi bi-caret-down-fill mx-3 pt-1"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                    />
                  </svg>
                </div>
  
                <a @click="deleteToCard()" class="text-white fw-bold fs-4 px-3"
                  >کاستن از سبد خرید
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- --------------------------------------------------------COMMENTS-------------------------------------------------------- -->
        <!-- <div class="my-5 mx-3 pt-5" v-if="data1.comment">
          <div class="blog-comment-content container mt-5 rtl">
            <div class="cmt-title text-center abs">
              <h1 class="oval-bd">نظرات</h1>
            </div>
            <ul>
              <li v-for="result in data1.comment" v-bind:key="result.id">
                <div class="blog-comment-item text-right">
                  <div class="cmt-content text-right">
                    <h4 class="">
                      {{ result.author.first_name }} {{ result.author.last_name }}
                    </h4>
                    <p>{{ result.title }}</p>
                  </div>
                </div>
              </li>
              <div v-if="data1.comment.length == 0" class="pb-5">
                <div class="text-center">نظری وجود ندارد</div>
              </div>
              <div
                v-if="this.$store.state.isAuthenticated == true"
                class="d-flex justify-content-center"
              >
                <button
                  @click="openmymodal()"
                  class="px-5 fw-bold m-5 py-2 border rounded-pill"
                >
                  افزودن کامنت جدید
                </button>
              </div>
  
              <div class="mymodal mymodal-product-check">
                <div class="mymodal-overlay" @click="closemymodal()"></div>
                <div class="mymodal-card">
                  <div class="mymodal-body">
                    <div class="border-bottom px-3 fs-3 py-3">افزودن نظر</div>
                    <div class="mymodal-content">
                      <input
                        placeholder="نظر شما ..."
                        type="text"
                        id="author"
                        v-model="comment"
                        class="form-control rounded-pill mt-3"
                      />
                    </div>
                    <div class="mymodal-footer">
                      <div class="d-flex">
                        <button
                          class="btn-gradient py-2 mx-2 border rounded-pill px-5"
                          @click="sendComment()"
                        >
                          ثبت نظر
                        </button>
                        <button
                          class="bg-white py-2 border rounded-pill px-4"
                          @click="closemymodal()"
                        >
                          بستن
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div> -->
      </div>
      <div
        v-if="loading == true"
        class="d-flex justify-content-canter flex-row py-5"
      >
        <div class="col-12 text-center">
          <Loading />

        </div>
      </div>
  
 
    </div>
  </template>
  
  <script>


  import axios from "axios";
import { useUserStore } from '~/store/user'; 
  
  export default {
  
  
    data() {
      return {
        loading: true,
        data1: [],
        comment: "",
        number: 0,
        imageSelected:null,
      };
    },
    mounted() {
      this.getData();
    },
    computed: {
    token() {
      return useUserStore().userToken;

    }
  },
    methods: {
      async getData() {
        let header =
          this.$store.state.isAuthenticated == false
            ? {}
            : {
                headers: {
                  "Content-type": "application/json",
                  Accept: "application/json",
                  Authorization: this.token ? `Token ${this.token}` : '',
                },
              };
        let mydata = await axios
          .get(
            `https://rootakhti-yazd.ir/api/shop/retrieveProduct/${this.$route.params.id}/`,
            header
          )
          .then((response) => (this.data1 = response.data));
        this.number = this.data1.order_count.count;
        this.loading = false;
  
        console.log(this.data1);
  
      
      },
      closemymodal() {
        document.querySelector(".mymodal-product-check").classList.remove("open");
      },
      openmymodal() {
        document.querySelector(".mymodal-product-check").classList.add("open");
      },
      async sendComment() {
        if (this.comment != "") {
          let mydata = await axios
            .post(
              `https://rootakhti-yazd.ir/api/shop/comment/${this.$route.params.id}/`,
              { title: this.comment },
              {
                headers: {
                  "Content-type": "application/json",
                  Accept: "application/json",
                  Authorization: `Token ${this.token}`,
                },
              }
            )
            .then((response) => {
              this.closemymodal();
              this.getData();
            });
        }
        this.closemymodal();
      },
      async addToCard() {
        if (!this.token)
          this.$router.push("/auth/signIn");
  
        try {
          await axios
            .get(`https://rootakhti-yazd.ir/api/shop/order_add/${this.data1.id}/`, {
              headers: {
                "Content-type": "application/json",
                Accept: "application/json",
                Authorization: `Token ${this.token}`,
              },
            })
            .then((response) => {
              this.number++;
            });
        } catch (error) {}
      },
      async deleteToCard() {
        try {
          await axios
            .get(
              `https://rootakhti-yazd.ir/api/shop/order_remove/${this.data1.id}/`,
              {
                headers: {
                  "Content-type": "application/json",
                  Accept: "application/json",
                  Authorization: `Token ${this.token}`,
                },
              }
            )
            .then((response) => {
              this.number--;
            });
        } catch (error) {}
      },shareLink(dataValue) {
        let input = document.body.appendChild(document.createElement("input"));
        input.value = `https://rootakhti-yazd.ir/product/${dataValue}`;
        input.focus();
        input.select();
        document.execCommand("copy");
        input.parentNode.removeChild(input);
        alert(`https://rootakhti-yazd.ir/product/${dataValue} کپی شد.`);
      },
      price(value){
        let text
        let chars = Array.from(`${value}`)
        for (let index = 1; index <= chars.length; index++) {
           
           if(index % 3==0){
             if (chars.length != index) {
             chars[chars.length-index] = `,${chars[chars.length-index]}`;
               
             }
           }
  
        }
        return chars.join("");;
      },
     
    },
  };
  </script>
  
  <style>
  .mymodal {
    visibility: hidden;
    transition: all 0.4s;
    opacity: 0;
  }
  .mymodal.open {
    visibility: visible;
    opacity: 1;
  }
  
  .mymodal,
  .mymodal-overlay {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: 100;
  }
  
  .mymodal,
  .mymodal-card,
  .mymodal-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .mymodal-content {
    overflow: auto;
    flex-grow: 1;
  }
  
  .mymodal-overlay {
    background: rgba(36, 36, 36, 0.562);
    /* backdrop-filter: blur(3.2px);
  -webkit-backdrop-filter: blur(3.2px); */
    translate: all 2s;
  }
  
  .mymodal-body {
    z-index: 101;
    margin: auto;
    max-height: calc(100vh - 1rem);
    max-width: calc(100vw - 1rem);
    border-radius: 10px;
    overflow: hidden;
    width: 500px;
    height: 200px;
    background: white;
  }
  
  .mymodal-header,
  .mymodal-content,
  .mymodal-footer {
    padding: 1rem;
  }
  
  .mymodal-header {
    background: rebeccapurple;
    text-transform: capitalize;
    font-size: 1.25rem;
    color: white;
    font-weight: bold;
  }
  
  .mymodal-footer {
    display: flex;
    justify-content: space-between;
  }
  
  .h-512 {
    max-height: 512px !important;
  }
  .h-512::-webkit-scrollbar {
    background-color: rgba(255, 255, 255, 0.349) 255, 255, 0;
    height: 5px;
    width: 5px;
  }
  /* .row::-webkit-scrollbar-track {background-color:#fff} */
  .h-512::-webkit-scrollbar-thumb {
    background-color: #b4b4b42c;
    border-radius: 12px;
  }
  /* .blog-comment-content{
      background: #e2e2e225;
      transition: all 0.3s ease-in-out;
  } */
  /* .blog-comment-content:hover{
      box-shadow:0px 0px 18px #273c7518 ;
          transition: all 0.3s ease-in-out;
  } */
  .bg-5 {
    background: -webkit-linear-gradient(
      to right,
      #f0f0f0,
      #f0f0f0
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #f0f0f0, #f0f0f0);
  }
  </style>