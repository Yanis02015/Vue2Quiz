import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    resource: [
      {
        url:
          "https://images.unsplash.com/photo-1520377119034-bce40caae9a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        title: "Pink Fiat",
        subtitle: "Paris, March 7, 2018",
        cost: "A",
      },
      {
        url:
          "https://images.unsplash.com/photo-1607853203100-69829c08b88e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80",
        title: "Golf 7.5 R",
        subtitle: "Slovensko, May 15, 2020",
        cost: "B",
      },
      {
        url:
          "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
        title: "Compertur tourism",
        subtitle: "Brazil, October 3, 2019",
        cost: "B",
      },
      {
        url:
          "https://images.unsplash.com/photo-1533591362725-979dfce672b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=391&q=80",
        title: "Old Van Volkswagen",
        subtitle: "Bournemouth, August 6, 2018",
        cost: "A",
      },
      {
        url:
          "https://images.unsplash.com/photo-1542299861-7c9d068a5edf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80",
        title: "Venice street scene",
        subtitle: "Italy, November 15, 2018",
        cost: "C",
      },
      {
        url:
          "https://images.unsplash.com/photo-1558661091-5cc1b64d0dc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        title: "Moderne Construction",
        subtitle: "Australia, September 20, 2020",
        cost: "A",
      },
      {
        url:
          "https://images.unsplash.com/photo-1628050160924-ee1c899f516f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        title: "She",
        subtitle: "August 4, 2021",
        cost: "C",
      },
      {
        url:
          "https://images.unsplash.com/photo-1625477238092-3b6f136cf551?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        title: "She",
        subtitle: "Australia, August 4, 2021",
        cost: "A",
      },
      {
        url:
          "https://images.unsplash.com/photo-1628094591334-708f2982a850?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        title: "Mahdi Bafande",
        subtitle: "Iran, August 4, 2021",
        cost: "B",
      },
      {
        url:
          "https://images.unsplash.com/photo-1628258946431-b99fbe144787?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        title: "Him",
        subtitle: "Beach, August 6, 2020",
        cost: "C",
      },
      {
        url:
          "https://images.unsplash.com/photo-1628175175996-683d3996cca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        title: "Christopher Street Day",
        subtitle: "Germany, August 5, 2021",
        cost: "B",
      },
      {
        url:
          "https://images.unsplash.com/photo-1597702383730-b93abf770373?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        title: "Martin Luther King",
        subtitle: "Washington, August 26th, 1964",
        cost: "C",
      },
      {
        url:
          "https://images.unsplash.com/photo-1628193104037-3590917fb66e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        title: "Editorial Fashion",
        subtitle: "August 5, 2021",
        cost: "B",
      },
      {
        url:
          "https://images.unsplash.com/photo-1584473456267-a132b72d2d09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        title: "TheCreative Fashion",
        subtitle: "Brooklyn, March 17, 2020",
        cost: "A",
      },
      {
        url:
          "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80",
        title: "Cinema",
        subtitle: "Poland",
        cost: "B",
      },
      {
        url:
          "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        title: "Ntflix",
        subtitle: "Poland, April 4, 2018",
        cost: "A",
      },
      {
        url:
          "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        title: "Banana PJs",
        subtitle: "Austin, March 6, 2020",
        cost: "C",
      },
      {
        url:
          "https://images.unsplash.com/photo-1568564321589-3e581d074f9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        title: "Alaskan Malamute",
        subtitle: "Danmark, September 15, 2019",
        cost: "A",
      },
      {
        url:
          "https://images.unsplash.com/photo-1628345325866-d247f20dceb6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        title: "Athletics",
        subtitle: "Saudi Arabia, August 7, 2021",
        cost: "C",
      },
      {
        url:
          "https://images.unsplash.com/photo-1620152174993-40a74a7e24c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
        title: "Surfing",
        subtitle: "Greece, May 4, 2021",
        cost: "D",
      },
    ],
    personality: [
      {
        name: "The Inspector (ISTJ)",
        description:
          "can be considered an intimidating personality type to approach, especially without a prior relationship. ISTJs appear serious, formal, and proper. This personality type places great importance on tradition and old-school values. Patience, hard work, honor and social and cultural responsibility are all cherished by the ISTJ. They are reserved, calm, quiet, and upright. These traits result from the combination of Introversion, Sensing, Thinking, and Judging. The result is a personality type that is often misunderstood.",
        horoscope:
          "ou may feel like you're doomed if you do and doomed if you don't, Inspector. You may feel very opinionated about a certain issue, but you know that expressing yourself is likely to cause someone else to feel threatened or upset. But if you keep these thoughts to yourself, you're going to feel resentful and perhaps even used. You're better off expressing yourself honestly.",
        personnages: [
          {
            name: "Game Of Thrones",
            actor: "Petyr Baelish",
          },
          {
            name: "Friends",
            actor: "Ross Geller",
          },
          {
            name: "Amek isnegh IMAK",
            actor: "Scooter",
          },
          {
            name: "Dr House",
            actor: "Lisa Cuddy",
          },
          {
            name: "Peaky Blinders",
            actor: "Polly Gray",
          },
        ],
        cost: "A",
      },
      {
        name: "The Performer (ESFP)",
        description:
          "ESFPs have an Extroverted, Observant, Feeling and Perceiving personality, and are commonly seen as Entertainers. Born to provide amusement and distraction to others and to hog the limelight, ESFPs love to hold court in a group. ESFPs are thoughtful explorers who enjoy learning – and sharing what they learn with others. ESFPs live for company, and typically have strong interpersonal skills. They are lively and fun, and will never decline the opportunity to be the center of attention. Despite this court jester-like demeanor however, ESFPs are warm, generous, and friendly. They are also typically sympathetic and concerned for the well-being of others.",
        horoscope:
          "Your emotions are active, Performer. And could be popping up in powerful outbursts. There's momentum building within that you shouldn't ignore or suppress. Perhaps you feel that what you have to say isn't appropriate for the situation. More than likely, it will do more harm than good to ignore these feelings rather than get them out, even when it seems disruptive to do so.",
        personnages: [
          {
            name: "Game Of Thrones",
            actor: "Robert Baratheon",
          },
          {
            name: "Friends",
            actor: "Janice",
          },
          {
            name: "Amek isnegh IMAK",
            actor: "Billy Zabka",
          },
          {
            name: "Dr House",
            actor: "Allison Cameron",
          },
          {
            name: "Peaky Blinders",
            actor: "Chester Campbell",
          },
        ],
        cost: "B",
      },
      {
        name: "The Counselor (INFJ)",
        description:
          "INFJs are visionaries and idealists. This personality type oozes creative imagination and brilliant ideas from every pore. They have a different, frequently profound, way of looking at the world that is not always understood. INFJs favor substance and depth in the way they think. This personality type will never accept anything at surface level or refuse to countenance a better way to approach problems. Others may perceive the INFJ as odd or amusing due to this variable outlook on life.",
        horoscope:
          "Just because everyone else is walking on eggshells doesn't mean you need to, Counselor. Your upbeat spirit will be more welcome than usual due to the drama around you. Be careful of falling into the role that you know others want you to play. It's easy to take on the role that's in front of you, but this doesn't always help the situation. Read from your own script, not someone else's.",
        personnages: [
          {
            name: "Game Of Thrones",
            actor: "Samwell Tarly",
          },
          {
            name: "Friends",
            actor: "Gunther",
          },
          {
            name: "Amek isnegh IMAK",
            actor: "Victoria",
          },
          {
            name: "Dr House",
            actor: "Lawrence Kutner",
          },
          {
            name: "Peaky Blinders",
            actor: "Grace Burgess",
          },
        ],
        cost: "C",
      },
      {
        name: "The Champion (ENFP)",
        description:
          "ENFPs have an Extroverted, Intuitive, Feeling and Perceiving personality. This personality type is highly individualistic. Champions are not followers, and care little for the status quo. Instead, they strive toward creating their own methods, looks, actions, habits, and ideas. ENFPs do not welcome cookie cutter people into their circle and loathe being forced to live inside a box. They do enjoy company though – assuming it is the “right” company – enjoying strong intuition when it comes to themselves and others. ENFPs operate from their feelings most of the time. This is no bad thing, as they are highly perceptive and thoughtful.",
        horoscope:
          "Your tremendous sensitivity in a certain situation could be causing you to jump to conclusions that are keeping you from seeing the truth, Champion. Your tendency is to assume things before you have all the facts. You may assume the worst, making you more stressed about the situation than you need to be. Don't worry about things you don't know to be true.",
        personnages: [
          {
            name: "Game Of Thrones",
            actor: "Hodor",
          },
          {
            name: "Friends",
            actor: "Richard Burke",
          },
          {
            name: "Amek isnegh IMAK",
            actor: "Lily Aldrin",
          },
          {
            name: "Dr House",
            actor: "Gregory House",
          },
          {
            name: "Peaky Blinders",
            actor: "Alfie Solomons",
          },
        ],
        cost: "D",
      },
    ],
    selected: [],
  },
  getters: {
    yourPrsonality: (state) => {
      let index = 0;
      let arraySelected = state.selected;
      let a = 0;
      let b = 0;
      let c = 0;
      let d = 0;
      for (let i = 0; i < state.selected.length; i++) {
        if (arraySelected[i] === "A") a++;
        else if (arraySelected[i] === "B") b++;
        else if (arraySelected[i] === "C") c++;
        else if (arraySelected[i] === "D") d++;
      }
      if (a < b) index = 1;
      if (b < c) index = 2;
      if (c < d) index = 3;

      return state.personality[index];
    },
  },
  mutations: {
    NEW_CHOICE(state, payload) {
      state.selected.push(payload);
      console.log(state.selected);
    },
    RESET_SELECTED(state) {
      state.selected = [];
    },
  },
  actions: {
    newChoice(context, amount) {
      context.commit("NEW_CHOICE", amount);
    },
    resetSelected(context) {
      context.commit("RESET_SELECTED");
    },
  },
  modules: {},
});
