<template>
<NavbarMainVue />

<div class="d-flex justify-center ga-2">
  
<h1 class="v-card-title">Zusammenhängene Suche:</h1>


  <v-chip>
      Default
    </v-chip>

    <v-chip color="primary">
      Primary
    </v-chip>

    <v-chip color="secondary">
      Secondary
    </v-chip>

    <v-chip color="red">
      Red
    </v-chip>

    <v-chip color="green">
      Green
    </v-chip>
  </div>
  <div class="d-flex justify-left ga-2 ml-4 mt-16 ">
    <v-sheet
    class="mx-auto"
    max-width="600"
  >
    <v-slide-group
    >
      <v-slide-group-item
        v-for="n in 25"
        :key="n"
        v-slot="{ isSelected, toggle }"
      >
        <v-btn
          class="ma-2"
          rounded
          :color="isSelected ? 'primary' : undefined"
          @click="toggle"
        >
          Options {{ n }}
        </v-btn>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
   
  </div>
  
  <ProgrammeMainVue />

</template>

<script lang="ts">
import BadgesMainVue from './components/BadgesMain.vue';

import NavbarMainVue from './components/NavbarMain.vue';
import ProgrammeMainVue from './components/ProgrammeMain.vue';
import BadgesMain from "./components/BadesMain.vue"
export default {
name: 'App',

components: {
  NavbarMainVue,
  ProgrammeMainVue
}}


</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
