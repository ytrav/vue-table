<template>
  <header>
    <router-link class="home" to="/">
      <img id="mhh-icon" src="../../assets/mhh-logo.png" alt="MHH Logo" />
    </router-link>
  </header>
  <div id="root">
    <Transition class="trans2">
    <form v-if="table" @submit.prevent="getValues" action="choose">
      <h3>Selektion</h3>
      <label for="date">Datum</label>
      <input required type="date" name="date" id="date" ref="date" />
      <label for="ward">Station</label>
      <input
        required
        type="number"
        name="ward"
        id="ward"
        min="10"
        max="87"
        placeholder="Nummer"
        ref="ward"
      />
      <button type="submit">Anwenden</button>
    </form>
    <table-selection v-else />
    </Transition>
  </div>
</template>


<script>
import tableSelection from "./tableSelection.vue";

export default {
  data() {
    return {
      date: '',
      ward: '',
      table: true,
    }
  },
  components: {
    "table-selection": tableSelection,
  },
  methods: {
    getValues() {
      this.date = this.$refs.date.value;
      this.ward = this.$refs.ward.value;
      // alert(`The date is ${this.date} and the chosen ward is ${this.ward}.`)
      this.table = false;
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  overflow: visible;
  word-break: break-all;
}

h3,
button {
    font-family: 'Montserrat';
}

#root {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 15px;
  gap: 15px;
  border-radius: 15px;
  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

input {
  border: 1px solid #6ab4ae;
  border-style: none none solid none;
  padding: 4px;
  border-radius: 5px 5px 0 0;
  &:focus {
    outline: none;
  }
}

button {
  border: none;
  cursor: pointer;
  justify-self: center;
  align-self: center;
  color: #1c1c1c;
  background-color: #bbddda;
  border-radius: 0 0 15px 15px;
  text-align: center;
  padding: 7px;
  font-size: 1.08em;
  width: calc(100% + 30px);
  margin: 30px -15px -15px -15px;
  &:hover,
  &:focus {
    background-color: #6ab4ae;
    color: #edf6f9;
    outline: none;
  }
  &:active {
    background-color: #528a85;
  }
}

@media only screen and (max-height: 415px) {
  form {
    margin-top: 50px;
  }
}

@media only screen and (max-height: 350px) {
  header {
    display: none;
  }
  form {
    margin-top: 0;
  }
}
</style>