<script>
import Faq from "./components/Faq.vue"
import Modal from "./components/Modal.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  setup() {
    const title = ref("");
    const isPending = ref(false);
    const form = ref();
    const router = useRouter();

    const handleSubmit = (e) => {
      e.preventDefault();
      isPending.value = true;
    };

    const handleLogin = () => {
      router.push("/Login");
    };

    onMounted(() => {
      AOS.init();
      AOS.refresh();
    });

    return {
      title,
      isPending,
      form,
      handleSubmit,
      handleLogin,
    };
  },
  components: {
    Faq,
  },
  data() {
    return {
      title: '',
      isPending: false,
    };
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault();
    },
    handleInputChange(event) {
      this.title = event.target.value;
    },
  },

};

</script>

<template>
  <div class="w-full overflow-hidden bg-bg">
    <!-- Header Section -->
    <div class="bg-cover bg-no-repeat bg-fixed bg-center"
      style="background-image: url('https://res.cloudinary.com/phantom1245/image/upload/v1686565888/netflix-clone/background_zrltcp.jpg');">
      <header class="h-screen p-4 text-white border-b-[1rem] border-[#222] w-full">
        <div class="flex flex-row items-center py-3 justify-between">
          <div class="p-2 sm:p-4">
            <img
              src="https://res.cloudinary.com/phantom1245/image/upload/v1686565888/netflix-clone/netflix-logo_ls1czy.png"
              alt="Netflix logo" class="w-32 sm:w-40 h-auto" />
          </div>
          <div class="pr-4 pl-0">
            <button
              class="bg-primary leading-normal py-2 px-4 font-bold text-base capitalize text-center text-color rounded-md"
              @click="handleLogin">
              Sign In
            </button>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center h-full">
          <div
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-sans text-center mx-4 sm:mx-8 md:mx-12">
            Unlimited movies, TV shows, and more.
          </div>
          <div class="text-xl sm:text-2xl font-sans text-center my-4 mx-6 sm:mx-8">
            Watch anywhere. Cancel anytime.
          </div>
          <div class="text-base sm:text-lg font-sans text-center mx-6 sm:mx-8">
            Ready to watch? Enter your email to create or restart your membership.
          </div>
          <div class="w-full max-w-sm md:max-w-lg mt-4">
            <form ref="form" @submit.prevent="handleSubmit" class="flex flex-col sm:flex-row justify-center items-center">
              <input type="email" name="user_email" required v-model="title" placeholder="Enter your email address"
                class="w-full sm:w-2/3 h-12 sm:h-14 bg-color text-black pl-4 rounded-lg my-2 sm:my-0" />
              <button type="submit"
                class="w-full sm:w-auto h-12 sm:h-14 bg-primary text-color text-xl sm:text-xl font-bold rounded-lg px-6 my-2 sm:my-0">
                Get Started
              </button>
              <div v-if="isPending">Loading...</div>
            </form>
          </div>
        </div>
      </header>
    </div>

    <!-- Section Two - Enjoy on your TV -->
    <div data-aos="zoom-in" data-aos-duration="2000"
      class="flex flex-col justify-center items-center sm:flex-row text-color border-b-[1rem] border-[#222] px-4 sm:px-10 lg:px-16 xl:px-24 py-8 sm:py-20">
      <div class="w-full  sm:w-1/2 px-2 sm:px-4">
        <div class="text-4xl sm:text-6xl font-sans font-extrabold leading-tight text-center sm:text-left">Enjoy on your
          TV.</div>
        <p class="text-lg sm:text-3xl text-center sm:text-left mt-4">
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
        </p>
      </div>
      <div class="w-full sm:w-1/2 mt-4 sm:mt-0">
        <img src="https://res.cloudinary.com/phantom1245/image/upload/v1686565888/netflix-clone/tv_oouuyg.png" alt="TV"
          class="w-full" />
      </div>
    </div>

    <!-- Section Three - Download your shows to watch offline -->
    <div data-aos="fade-left" data-aos-duration="2000"
      class="flex flex-col sm:flex-row-reverse justify-center items-center text-color border-b-[1rem] border-[#222] px-4 sm:px-10 lg:px-16 xl:px-24 py-8 sm:py-20">
      <div class="w-full sm:w-1/2 px-2 sm:px-4">
        <div class="text-3xl sm:text-5xl font-bold leading-10 font-sans text-center sm:text-left">Download your shows to
          watch offline.</div>
        <p class="text-base sm:text-xl font-sans mt-4 text-center sm:text-left">Save your favorites easily and always have
          something to watch.</p>
      </div>
      <div class="w-full sm:w-1/2 mt-4 sm:mt-0">
        <img src="https://res.cloudinary.com/phantom1245/image/upload/v1686565888/netflix-clone/mobile_dh5koi.jpg"
          alt="Mobile" class="w-full" />
      </div>
    </div>

    <!-- Section Four - Watch everywhere -->
    <div data-aos="fade-right" data-aos-duration="2000"
      class="text-color border-b-[1rem] border-[#222] px-4 sm:px-10 lg:px-16 xl:px-24 py-8 sm:py-20">
      <div class="w-full sm:w-1/2 px-2 sm:px-4">
        <div class="text-3xl sm:text-5xl font-bold leading-10 font-sans text-center sm:text-left">Watch everywhere.</div>
        <p class="text-base sm:text-xl font-sans mt-4 text-center sm:text-left">Stream unlimited movies and TV shows on
          your phone, tablet, laptop, and TV.</p>
      </div>
    </div>

    <!-- Section Five - Create profiles for kids -->
    <div data-aos="fade-left" data-aos-duration="2000"
      class="flex flex-col justify-center items-center sm:flex-row-reverse text-color border-b-[1rem] border-[#222] px-4 sm:px-10 lg:px-16 xl:px-24 py-8 sm:py-20">
      <div class="w-full sm:w-1/2 px-2 sm:px-4">
        <div class="text-4xl sm:text-6xl font-bold leading-10 font-sans text-center sm:text-left">Create profiles for
          kids.</div>
        <p class="text-xl sm:text-2xl font-sans mt-4 text-center sm:text-left">Send kids on adventures with their favorite
          characters in a space made just for them—free with your membership.</p>
      </div>
      <div class="w-full sm:w-1/2 mt-4 sm:mt-0">
        <img src="https://res.cloudinary.com/phantom1245/image/upload/v1686565889/netflix-clone/kidsValue_y74ddn.png"
          alt="Kids" class="w-full" />
      </div>
    </div>

    <div class="flex flex-col text-color border-b-[1rem] border-[#222] px-10 w-full justify-center items-center pb-12"
      data-aos="fade-right" data-aos-duration="2000">
      <div class="w-full py-10">
        <div class="text-6xl font-bold leading-14 font-sans text-center">Frequently Asked Questions</div>
      </div>
      <Faq />
      <div class="text-[1rem] font-sans text-center py-2 px-0">Ready to watch? Enter your email to create or restart
        your membership.</div>
      <div class="w-full py-5">
        <form ref="form" @submit="handleSubmit" class="flex flex-row justify-center items-center pb-12">
          <input type="email" name="user_email" required v-model="title" placeholder="Enter your email address"
            class="w-[30%] rounded-l-lg pl-10 h-16 bg-color border-none" @input="handleInputChange" />
          <button type="submit" class="w-[15%] h-16 rounded-r-lg bg-primary text-color text-3xl text-center font-bold">Get
            started</button>
          <div v-if="isPending">loading...</div>
        </form>
      </div>
    </div>

    <!-- Footer Section -->
    <footer class="text-center text-xs sm:text-sm px-4 sm:px-10 lg:px-16 xl:px-24 py-8 sm:py-12">
      <p class="text-gray-500">
        This is a clone created for educational purposes. All rights for images and content belong to Netflix.
      </p>
    </footer>
  </div>
</template>



