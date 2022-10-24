// define component variable
const navtabs = {
  data() {
    return {
      navtitle: ["HOME", "RECIPES", "LIFESTYLES", "VIDEOS", "ABOUT"],
    };
  },
  template: `
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <div class="header"><span>Food Blog </span></div>
        
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#myNavbar"
            aria-controls="myNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="myNavbar">
            <div class="navbar-nav">
              <a class="nav-link" href="#" v-for="tabname in navtitle">{{tabname}}</a>
            </div>
          </div>
        </div>
      </nav>`,
};

var container = new Vue({
  el: "#container",
  data: {
    chillisrc: "images/chili.jpg",
    src: "profile.png",
    show: false,
    obj1: {
      author: "Brianna",
      date: "February 18, 2021 @ 3:30 pm",
      paragraph:
        "Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!",
    },
    obj2: {
      author: "LINH",
      date: "February 15, 2021 @ 9:46 am",
      paragraph:
        "I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good.  It’s a winner!  I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him.  Thank you Lisa!",
    },
    obj3: {
      author: "CATHERINE LEONARDO",
      date: "February 13, 2021 @ 12:58 pm",
      paragraph:
        "I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.",
    },
    obj4: {
      author: "KALI",
      date: "February 13, 2021 @ 11:31 am",
      paragraph:
        "This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!",
    },
    reply: "REPLY",
    modalData: [
      {
        name: "Brianna",
        rate: "Novice",
        description:
          "Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!",
      },
      {
        name: "LINH",
        rate: "Newcomer",
        description:
          "Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time.",
      },
      {
        name: "CATHERINE LEONARDO",
        rate: "Mentor",
        description:
          "I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!",
      },
      {
        name: "KALI",
        rate: "Novice",
        description:
          "Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I'm a food whore! Invite me over for dinner and I'll be there!",
      },
    ],
  },

  components: {
    comments: {
      template: "<h2>Comments</h2>",
    },
    foodblog: {
      template: '<div class="header"><span>Food Blog </span></div>',
    },
    navtabs
  },

  methods: {
    showdata: function (param) {
      this.show = true;
      this.title = this.modalData[param].name;
      this.level = this.modalData[param].rate;
      this.bio = this.modalData[param].description;
    },
    hidedata: function () {
      this.show = false;
    },
  },
});
