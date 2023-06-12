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
  <div className="w-full overflow-hidden bg-bg">
    <div class="bg-cover bg-no-repeat bg-fixed bg-center" style="
                    background-image: url('https://res.cloudinary.com/phantom1245/image/upload/v1686565888/netflix-clone/background_zrltcp.jpg');
                  ">
      <div class="h-screen p-4 text-white border-b-[1rem] border-[#222] w-full">
        <div class="flex flex-row items-center py-3 justify-between">
          <div class="p-25">
            <img
              src="https://res.cloudinary.com/phantom1245/image/upload/v1686565888/netflix-clone/netflix-logo_ls1czy.png"
              alt="netflix logo" class="w-full h-10" />
          </div>
          <div class="pr-5 pl-0">
            <button
              class="bg-primary leading-normal py-2 px-4 font-bold text-base float-right capitalize text-center text-color rounded-md"
              @click="handleLogin">
              sign in
            </button>
          </div>
        </div>
        <div class="flex justify-center items-center flex-col w-full pt-40 max-w-950 mx-auto text-center z-10">
          <div class="text-7xl w-[65%] font-extrabold font-sans">
            Unlimited movies, TV shows, and more.
          </div>
          <div class="text-2xl font-sans">Watch anywhere. Cancel anytime.</div>
          <div class="text-lg font-sans">
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>
          <div class="w-full py-3">
            <form ref="form" @submit.prevent="handleSubmit" class="flex gap-3 flex-row justify-center items-center">
              <input type="email" name="user_email" required v-model="title" placeholder="Enter your email address"
                class="w-[40%] h-[4rem] bg-color text-black pl-10 rounded-lg" />
              <button type="submit"
                class="w-[16%] h-[4rem] bg-primary text-color text-[30px] text-center font-bold rounded-lg">
                Get started
              </button>
              <div v-if="isPending">loading...</div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- section two -->

    <div class="flex flex-row text-color border-b-[1rem] border-[#222] px-10  w-full justify-center items-center py-20"
      data-aos="zoom-in" data-aos-duration="2000">
      <div class="w-1/2 px-4">
        <div class="text-6xl font-sans font-extrabold">Enjoy on your TV.</div>
        <p class="py-5 text-3xl">
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </p>
      </div>
      <div class="w-1/2">
        <img src="https://res.cloudinary.com/phantom1245/image/upload/v1686565888/netflix-clone/tv_oouuyg.png"
          alt="netflix logo" class="w-[80%]" />
      </div>
    </div>

    <!-- section three -->

    <div
      class="flex flex-row-reverse text-color border-b-[1rem] border-[#222] px-10 w-full justify-center items-center pb-12"
      data-aos="fade-left" data-aos-duration="2000">
      <div class="w-1/2 pr-[8rem]">
        <div class="text-5xl font-bold leading-14 font-sans">Download your shows to watch offline.</div>
        <p class="text-xl font-sans pt-4">Save your favorites easily and always have something to watch.</p>
      </div>
      <div class="w-1/2">
        <img src="https://res.cloudinary.com/phantom1245/image/upload/v1686565888/netflix-clone/mobile_dh5koi.jpg"
          alt="netflix logo" class="w-[80%]" />
      </div>
    </div>

    <!-- section four -->

    <div class="text-color border-b-[1rem] border-[#222] w-full py-20 pl-32" data-aos="fade-right"
      data-aos-duration="2000">
      <div class="w-1/2 pr-[8rem]">
        <div class="text-5xl font-bold leading-14 font-sans">Watch everywhere.</div>
        <p class="text-xl font-sans pt-4">Stream unlimited movies and TV shows on your phone, tablet, laptop, and
          TV.</p>
      </div>
    </div>

    <!-- section five -->
    <div
      class="flex flex-row-reverse text-color border-b-[1rem] border-[#222] px-10 w-full justify-center items-center pb-12"
      data-aos="fade-left" data-aos-duration="2000">
      <div class="w-1/2 pr-[8rem]">
        <div class="text-6xl font-bold leading-14 font-sans">Create profiles for kids.</div>
        <p class="text-2xl font-sans pt-4"> Send kids on adventures with their favorite characters in a space made just
          for
          them—free with your membership.</p>
      </div>
      <div class="w-1/2">
        <img src="https://res.cloudinary.com/phantom1245/image/upload/v1686565889/netflix-clone/kidsValue_y74ddn.png"
          alt="netflix logo" class="w-[80%]" />
      </div>
    </div>

    <!-- section six -->

    <div class="flex flex-col text-color border-b-[1rem] border-[#222] px-10 w-full justify-center items-center pb-12"
      data-aos="fade-right" data-aos-duration="2000">
      <div class="w-full py-10">
        <div class="text-6xl font-bold leading-14 font-sans text-center ">Frequently Asked Questions</div>
      </div>
      <Faq />
      <div class="text-[1.5rem] font-sans text-center py-2 px-0">Ready to watch? Enter your email to create or restart
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

    <!-- footer -->
    <footer class="p-4 lg:p-20 text-link flex flex-col" data-aos="fade-right" data-aos-duration="2000">
      <div class="pb-[1rem]">Questions? Contact us.</div>
      <div class="grid grid-cols-4 text-xl gap-8">
        <div class="flex flex-col">
          <a href="https://help.netflix.com/en/node/412" class="text-link">FAQ</a>
          <a href="https://ir.netflix.net/ir-overview/profile/default.aspx" class="text-link">Investor relations</a>
          <a href="https://help.netflix.com/legal/privacy" class="text-link">Privacy</a>
          <a href="https://fast.com/" class="text-link">Speed Test</a>
        </div>
        <div class="flex flex-col">
          <a href="https://help.netflix.com/en/" class="text-link">Help center</a>
          <a href="https://jobs.netflix.com/" class="text-link">Jobs</a>
          <a href="#!" class="text-link">Cookies Preferences</a>
          <a href="https://help.netflix.com/legal/notices" class="text-link">Legal Notices</a>
        </div>
        <div class="flex flex-col">
          <a href="#!" class="text-link">Account</a>
          <a href="https://devices.netflix.com/en/" class="text-link">Ways to watch</a>
          <a href="https://help.netflix.com/legal/corpinfo" class="text-link">Cooperate Information</a>
          <a href="https://www.netflix.com/ng/browse/genre/839338" class="text-link">Only on Netflix</a>
        </div>
        <div class="flex flex-col">
          <a href="https://media.netflix.com/en/" class="text-link">Media Center</a>
          <a href="https://help.netflix.com/legal/termsofuse" class="text-link">Terms of use</a>
          <a href="https://help.netflix.com/en/contactus" class="text-link">Contact Us</a>
        </div>
      </div>
      <div class="py-[1rem]">Netflix Nigeria</div>
    </footer>

  </div>
</template>
