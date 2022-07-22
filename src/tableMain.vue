<template>
  <header>
    <router-link class="home" to="/">
      <img id="mhh-icon" src="../src/assets/mhh-logo.png" alt="MHH Logo" />
    </router-link>
    <nav>
      <table-nav />
    </nav>
    <svg
      id="menu-icon"
      @click="isOpen = !isOpen"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
    </svg>
  </header>
  <Transition class="trans1">
    <aside v-if="isOpen">
      <svg
        id="back-icon"
        @click="isOpen = !isOpen"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
        />
      </svg>
      <table-nav />
    </aside>
  </Transition>

  <table-patient @click="isOpen = false" />
  <keep-alive @click="isOpen = false">
    <router-view v-slot="{ Component }">
      <Transition class="trans2">
        <component :is="Component"></component>
      </Transition>
    </router-view>
  </keep-alive>
</template>

<script>
import tablePatient from "./components/patient/tablePatient.vue";
import tableNav from "./components/nav/tableNav.vue";

export default {
  data() {
    return {
      isOpen: false,
    };
  },
  components: {
    "table-patient": tablePatient,
    "table-nav": tableNav,
  },
  methods: {},
};
</script>

<style lang="scss">
::selection {
  background-color: #6ab4ae;
  color: #fff;
}
/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #1461684d;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 10px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: #1461684d;
  &:hover {
    background-color: #006d77b6;
  }
}
.v-enter-active.trans2 {
  transition: opacity 0.4s ease-in-out;
}

.v-enter-from.trans2,
.v-leave-to.trans2 {
  opacity: 0;
}

.v-enter-active.trans1,
.v-leave-to.trans1 {
  transition: all 0.2s ease-out;
}

.v-enter-from.trans1,
.v-leave-to.trans1 {
  opacity: 0;
  transform: translateX(50px);
}

.title {
  background-color: #6ab4ae;
  color: white;
  font-weight: normal;
}
html,
body,
#app {
  overflow: visible;
}

body {
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #edf6f9;
}

header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: #d6eae957;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(10px);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 10px 20px;
}

#mhh-icon {
  zoom: 10%;
}

#menu-icon {
  display: none;
  fill: #000;
  &:hover {
    fill: rgb(51, 51, 51);
  }
  &:active {
    fill: rgb(100, 100, 100);
  }
}

#back-icon:hover {
  fill: #6ab4ae;
}

#back-icon:active {
  fill: #bbddda;
}

@font-face {
  font-family: Montserrat;
  src: url(assets/Montserrat-VariableFont_wght.ttf);
}

.active,
.router-link-active {
  border: 1px solid #006d77;
  box-sizing: content-box;
  transition: border 0.3s ease-out;
}

* {
  /* border: 1px solid rgba(255, 0, 0, 0.575); */
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  overflow: overlay;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
}

table {
  padding: 15px;
  width: 100%;
}

th {
  background-color: #006d77;
  color: #edf6f9;
  font-family: Montserrat;
}

th,
td {
  padding: 4px;
}

tr:hover {
  background-color: #bbddda9d !important;
}

th,
td,
tr {
  border: 0.5px solid #006d7796;
  border-style: dotted;
}

tr:nth-child(odd) {
  background-color: #e7e7e7cc;
}

th:nth-child(1) {
  border-radius: 10px 0 0 0;
}

th:nth-last-child(1) {
  border-radius: 0 10px 0 0;
}

tr:nth-last-child(1) td:nth-child(1) {
  border-radius: 0 0 0 10px;
}

tr:nth-last-child(1) td:nth-last-child(1) {
  border-radius: 0 0 10px 0;
}

img {
  zoom: 30%;
}

nav {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  margin: 10px 0 10px 0;
}

nav a,
aside a,
.error a {
  text-decoration: none;
  color: #1c1c1c;
  padding: 5px;
  background-color: #bbddda;
  margin: 5px;
  border: 1px solid transparent;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  overflow: hidden;
  &:hover {
    background-color: #6ab4ae;
    color: #edf6f9;
  }
  &:active {
    background-color: #528a85;
  }
}

a {
  min-height: 19px;
  flex-grow: 0;
  flex-shrink: 0;
}
aside svg {
  min-height: 50px;
  min-width: 50px;
}

.home {
  border: none;
}

.highlight {
  border: 1px solid #006d77;
  box-sizing: content-box;
}

// burger menu

aside {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #d6eae957;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  flex-direction: column;
  padding: 15px 15px 15px 15px;
  display: flex;
  backdrop-filter: blur(10px);
  z-index: 40;
  visibility: hidden;
  border-radius: 10px 0 0 10px;
  overflow: auto;
}

svg {
  width: 50px;
  height: 50px;
  fill: #006d77;
  align-self: flex-end;
  cursor: pointer;
}

@keyframes burgeropen {
  from {
    right: -200px;
  }
  to {
    right: 0;
  }
}

@media only screen and (min-width: 1650px) {
  #app {
    padding: 5vw !important;
  }
  header {
    margin: -5vw -5vw 0 -5vw;
  }
}

@media only screen and (max-width: 1487px) {
  nav {
    display: none;
  }
  #menu-icon {
    display: block;
  }
  aside {
    visibility: visible;
  }
}

@media only screen and (max-width: 315px) {
  aside {
    left: 0;
  }
}
</style>
