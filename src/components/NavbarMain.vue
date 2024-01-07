<template>
  <v-layout>
    
    <v-app-bar color="#e4004b">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"> </v-app-bar-nav-icon>
      <v-toolbar-title class="text-left">Contract Generator</v-toolbar-title>
      <v-text-field
        hide-details
        prepend-icon="mdi-magnify"
        single-line
      ></v-text-field>

    
      <v-spacer></v-spacer>
  
    <v-toolbar-items>

      <v-btn>Launchpad</v-btn>

    </v-toolbar-items>

    <v-divider vertical class="mx-2"></v-divider>

    <v-btn icon="mdi-dots-vertical"></v-btn>

      <v-btn variant="text" icon="mdi-filter"></v-btn>


    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      class="accent-4"
      width="350"
      height="100vh"
      temporary
    >
      <v-list color="transparent">
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          title="Dashboard"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account-box"
          title="Account"
        ></v-list-item>
        <v-list-item prepend-icon="mdi-gavel" title="Admin"></v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn style="background: #FF6F00; color: #ffffff"
 block> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>


    
   
  </v-layout>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: "Foo",
        value: "foo",
      },
      {
        title: "Bar",
        value: "bar",
      },
      {
        title: "Fizz",
        value: "fizz",
      },
      {
        title: "Buzz",
        value: "buzz",
      },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
