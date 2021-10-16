// Importing and creating modules
import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import axios from "axios";
import Navigo from "navigo";
import { capitalize } from "lodash";
import dotenv from "dotenv";
dotenv.config();

//  Declaring Router

const router = new Navigo(window.location.origin);

// Render Function
function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
`;

  router.updatePageLinks();

  addEventListeners(st);
}

// Event Handler Function
function addEventListeners(st) {
  // add event listeners to Nav items for navigation
  document.querySelectorAll("nav a").forEach((navLink) =>
    navLink.addEventListener("click", (event) => {
      event.preventDefault();
      render(state[event.target.title]);
    })
  );

  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );

  // event listener for the the photo form
  if (st.view === "Form") {
    document.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();
      // convert HTML elements to Array
      let inputList = Array.from(event.target.elements);
      // remove submit button from list
      inputList.pop();
      // construct new picture object
      let newPic = inputList.reduce((pictureObject, input) => {
        pictureObject[input.name] = input.value;
        return pictureObject;
      }, {});
      // add new picture to state.Gallery.pictures
      state.Gallery.pictures.push(newPic);
      render(state.Gallery);
    });
  }
}

// 5. Router.hooks
router.hooks({
  before: (done, params) => {
    const page =
      params && params.hasOwnProperty("page")
        ? capitalize(params.page)
        : "Home";
    if (page === "Home") {
      axios
        .get(`${process.env.COUNTER_API_URL}`)
        .then((response) => {
          state.Home.visits = response.data.value;
          done();
        })
        .catch((error) => {
          console.log("It puked", error);
        });
    }
    if (page === "About") {
      axios
        .get(`${process.env.DOG_BREEDS_API_URL}`)
        .then((response) => {
          state.About.breeds = response.data.message;
          state.About.hound = response.data.message.hound;
          state.About.bulldog = response.data.message.bulldog;
          state.About.ridgeback = response.data.message.ridgeback;
          done();
        })
        .catch((error) => {
          console.log("It puked", error);
        });
    }
    if (page === "About") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=Brentwood`
        )
        .then((response) => {
          state.About.weather = {};
          state.About.weather.city = response.data.name;
          state.About.weather.temp = response.data.main.temp;
          state.About.weather.feelsLike = response.data.main.feels_like;
          state.About.weather.description = response.data.weather[0].main;
          done();
        })
        .catch((err) => console.log(err));
    }
  },
});

// Router.on
router
  .on({
    "/": () => render(state.Home),
    ":page": (params) => render(state[capitalize(params.page)]),
  })
  .resolve();
