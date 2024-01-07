<template>
  <v-layout>
    <v-main style="height: 500px; margin-top: 2rem">
      <!-- Use v-container for overall layout -->
      <v-container fluid class="align-center justify-center">
        <!-- Use v-row and v-col for grid layout -->
        <v-row justify="center" align="center">

          <v-col cols="12" md="8">

            <v-row>
            <v-col
                v-for="(item, index) in programme"
                :key="index"
                cols="12"
                md="6"
              >
                <div v-if="item.featured === true">

                  <v-sheet >
                    <v-card
                      class="mx-auto"
                      color="#eeeeee"
                      min-height="350"
                      theme="dark"
                      variant="flat"
                      style="    background-color: #eeeeee;
    border: 0.2rem solid rgb(231, 230, 228);
    border-radius: 1rem;
    box-shadow: rgb(231, 230, 228) 0px 0.2rem 0px 0px, rgba(42, 40, 37, 0.2) 0px 0.6rem 1.5rem 0px;"
                    >
                      <v-sheet color="#eeeeee">
                        <v-card-item style="text-align: right">
                          <template v-slot:prepend>
                            <v-card-title>
                              <v-icon icon="mdi-calendar" start></v-icon>

                              {{ item.name }}
                            </v-card-title>
                          </template>

                          <v-btn class="ma-2" style="color: white !important; background: #e4004b; text-transform: none;">
                            Hinzufügen <v-icon end icon="mdi-plus"></v-icon>
                          </v-btn>
                        </v-card-item>
                      </v-sheet>
                      <v-card
                        class="ma-4"
                        color="#eeeeee"
                        rounded="lg"
                        variant="flat"
                      >

                        <div
                          v-for="(subItem, subIndex) in item.programme"
                          :key="subIndex"
                        >

                          <div class="pa-4 d-flex align-center">
                            <v-icon
                              color="#e4004b"
                              icon="mdi-broadcast"
                              start
                            ></v-icon>

                        

                            <span
                              class="text-medium-emphasis ms-1 font-weight-light"
                            >
                              <span style="color: black;">{{ subItem.name }}</span>
                            </span>

                            <v-spacer></v-spacer>


                            <v-btn class="ma-2" style="    text-transform: none;
" color="primary">
                              Öffnen
                              <v-icon end icon="mdi-open-in-new"></v-icon>
                            </v-btn>

                        
                           <v-col cols="auto">
        <v-btn variant="plain" density="compact" icon="mdi-minus" style="color: white;  background: #e4004b;"></v-btn>
      </v-col>
                          </div>
                          <v-divider></v-divider>
                        </div>
                      </v-card>
                    </v-card>
                  </v-sheet>

                </div>
                <div v-else-if="item.featuredTwo === true">
               
                    <v-sheet>
                    <v-card
                      class="mx-auto"
                      color="#eeeeee"
                      min-height="350"
                      theme="dark"
                      variant="flat"
                      style="    background-color: #eeeee;
    border: 0.2rem solid rgb(231, 230, 228);
    border-radius: 1rem;
    box-shadow: rgb(231, 230, 228) 0px 0.2rem 0px 0px, rgba(42, 40, 37, 0.2) 0px 0.6rem 1.5rem 0px;"
                    >
                      <v-sheet color="#eeeeee">
                        <v-card-item>
                          <template v-slot:prepend>
                            <v-card-title>
                              <v-icon icon="mdi-calendar" start></v-icon>

                              {{ item.name }}
                            </v-card-title>
                          </template>

                          <template v-slot:append>
                            <v-btn
                              icon="$close"
                              size="large"
                              variant="text"
                            ></v-btn>
                          </template>
                        </v-card-item>
                      </v-sheet>
                      <v-card
                        class="ma-4"
                        color="#eeeeee"
                        rounded="lg"
                        variant="flat"
                      >
                        <div
                          v-for="(subItem, subIndex) in item.programme"
                          :key="subIndex"
                        >
                          <div class="pa-4 d-flex align-center">
                            <v-icon
                              color="black"
                              icon="mdi-broadcast"
                              start
                            ></v-icon>

                       

                            <span
                              class="text-medium-emphasis ms-1 font-weight-light"
                            >
                              <span style="color: black;">{{ subItem.name }}</span>
                            </span>

                            <v-spacer></v-spacer>

                            

                            <v-btn class="ma-2" style="text-transform: none;" color="primary">
                              Öffnen
                              <v-icon
                                end
                                icon="mdi-open-in-new"
                              ></v-icon>
                            </v-btn>


                            <v-avatar
                              image="https://cdn.vuetifyjs.com/images/john-smirk.png"
                              size="x-small"
                            ></v-avatar>

                            <v-chip
                              class="ms-2 text-medium-emphasis"
                              color="grey-darken-4"
                              prepend-icon="mdi-account-multiple"
                              size="small"
                              text="81"
                              variant="flat"
                            ></v-chip>
                          </div>
                          <v-divider></v-divider>
                        </div>
                      </v-card>
                    </v-card>
                  </v-sheet>
                </div>
                <div v-else-if="!featured || !featuredTwo">
                
                
                
                
                
                
                
                
                    <v-sheet>
                    <v-card
                      class="mx-auto"
                      color="#eeeeee"
                      min-height="350"
                      theme="dark"
                      variant="flat"
                      style="    background-color: #eeeee;
    border: 0.2rem solid rgb(231, 230, 228);
    border-radius: 1rem;
    box-shadow: rgb(231, 230, 228) 0px 0.2rem 0px 0px, rgba(42, 40, 37, 0.2) 0px 0.6rem 1.5rem 0px;"
                    >
                      <v-sheet color="#eeeeee">
                        <v-card-item>
                          <template v-slot:prepend>
                            <v-card-title>
                              <v-icon icon="mdi-calendar" start></v-icon>

                              {{ item.name }}
                            </v-card-title>
                          </template>

                          <template v-slot:append>
                            <v-btn
                              icon="$close"
                              size="large"
                              variant="text"
                            ></v-btn>
                          </template>
                        </v-card-item>
                      </v-sheet>
                      <v-card
                        class="ma-4"
                        color="#eeeeee"
                        rounded="lg"
                        variant="flat"
                      >
                        <div
                          v-for="(subItem, subIndex) in item.programme"
                          :key="subIndex"
                        >
                          <div class="pa-4 d-flex align-center">
                            <v-icon
                              color="black"
                              icon="mdi-broadcast"
                              start
                            ></v-icon>


                            <span
                              class=" text-medium-emphasis ms-1 font-weight-light"
                            >
                              <span style="color: black;">{{ subItem.name }}</span>
                            </span>

                            <v-spacer></v-spacer>

                            <v-btn
                              icon="mdi-dots-horizontal"
                              variant="text"
                            ></v-btn>

                            <v-btn class="ma-2" style="text-transform: none;" color="primary">
                              Öffnen
                              <v-icon
                                end
                                icon="mdi-open-in-new"
                                class="me-2"
                              ></v-icon>
                            </v-btn>


                      
                          </div>
                          <v-divider></v-divider>
                        </div>
                      </v-card>
                    </v-card>
                  </v-sheet>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="4" class="align-self-start">
            <div>
              <v-sheet class="ma-2 pa-2">
              
                <v-card
                  class="mx-auto"
                  color="#36393f"
                  max-width="650"
                  min-height="350"
                  theme="dark"
                  variant="flat"
                  style="    
    border: 0.2rem solid rgb(231, 230, 228);
    background-color: #eeeeee;
    border-radius: 1rem;
    box-shadow: rgb(231, 230, 228) 0px 0.2rem 0px 0px, rgba(42, 40, 37, 0.2) 0px 0.6rem 1.5rem 0px;"
                > 
                  <v-sheet  style="    background-color: #eeeeee;
">
                    <v-card-item>
                      <template v-slot:prepend>
                        <v-card-title style="color: #000000;">
                          <v-icon icon="mdi-calendar" start></v-icon>

                          Aufgaben
                        </v-card-title>
                      </template>

                      <v-divider vertical class="mx-2"></v-divider>

                      <template v-slot:append>
                        <v-btn size="large" variant="text"></v-btn>
                      </template>
                    </v-card-item>
                    <v-date-picker
        v-model="date"
        :allowed-dates="allowedDates"
        min="2016-06-15"
        max="2015-06-20"
        bg-color="#eeeeee"
        hide-header
        width="100%"
      ></v-date-picker>
                  </v-sheet>

                  <v-card
                    class="ma-4"
                    style="background: #eeeeee"
                    rounded="lg"
                    variant="flat"

                  >
              
                    <v-card-item>
                    
                      <v-card-title class="text-body-2 d-flex align-center">
                        <v-icon
                          color="#949cf7"
                          icon="mdi-calendar"
                          start
                        ></v-icon>
                       
                        <span class="text-medium-emphasis font-weight-bold" style="color: black !important;"
                          >1 Fri Dec 16th - 9:00 PM</span
                        >

                        <v-spacer></v-spacer>
                 
                        <v-avatar
                          image="https://cdn.vuetifyjs.com/images/john-smirk.png"
                          size="x-small"
                        ></v-avatar>

                        <v-chip
                          class="ms-2 text-medium-emphasis"
                          color="grey-darken-4"
                          prepend-icon="mdi-account-multiple"
                          size="small"
                          text="81"
                          variant="flat"
                        ></v-chip>
                      </v-card-title>

                      <div class="py-2">
                        <div class="text-h6"  style="color: black !important;">Live Q&A</div>

                        <div class="font-weight-light text-medium-emphasis"  style="color: black !important;">
                          Join the Vuetify team for a live Question and Answer
                          session.
                        </div>
                      </div>
                    </v-card-item>

                    <v-divider></v-divider>

                    <div class="pa-4 d-flex align-center">
                      <v-icon
                        color="disabled"
                        icon="mdi-broadcast"
                        start
                      ></v-icon>

                  



                      <v-btn
                        class="me-2 text-none"
                        color="#4f545c"
                        prepend-icon="mdi-export-variant"
                        variant="flat"
                      >
                        Share
                      </v-btn>

                      <v-btn class="ma-2" style="text-transform: none;" color="primary">
                        Erledigt markieren
                        <v-icon end icon="mdi-checkbox-marked-circle"></v-icon>
                      </v-btn>
                    </div>
                  </v-card>
                </v-card>
              </v-sheet>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    programme: [
      {
        name: "Meine Liste",
        link: "google.com",
        featured: true,
        programme: [
          {
            name: "Personalprogramm2",
            link: "google.com",
          },
          {
            name: "Personalprogramm3",
            link: "google.com",
          },
          {
            name: "Personalprogramm4",
            link: "google.com",
          },
        ],
      },
      {
        name: "Meistbesucht",
        link: "google.com",
        featuredTwo: true,
        programme: [
          {
            name: "Personalprogramm2",
            link: "google.com",
          },
          {
            name: "Personalprogramm3",
            link: "google.com",
          },
          {
            name: "Personalprogramm4",
            link: "google.com",
          },
        ],
      },
      {
        name: "Filialbereich",
        link: "google.com",
        programme: [
          {
            name: "Personalprogramm2",
            link: "google.com",
          },
          {
            name: "Personalprogramm3",
            link: "google.com",
          },
          {
            name: "Personalprogramm4",
            link: "google.com",
          },
        ],
      },
      {
        name: "Bestellbereich",
        link: "google.com",
        programme: [
          {
            name: "Personalprogramm2",
            link: "google.com",
          },
          {
            name: "Personalprogramm3",
            link: "google.com",
          },
          {
            name: "Personalprogramm4",
            link: "google.com",
          },
        ],
      },
      {
        name: "Artikelbereich",
        link: "google.com",
        programme: [
          {
            name: "Personalprogramm2",
            link: "google.com",
          },
          {
            name: "Personalprogramm3",
            link: "google.com",
          },
          {
            name: "Personalprogramm4",
            link: "google.com",
          },
        ],
      },
      {
        name: "Administration",
        link: "google.com",
        programme: [
          {
            name: "Personalprogramm2",
            link: "google.com",
          },
          {
            name: "Personalprogramm3",
            link: "google.com",
          },
          {
            name: "Personalprogramm4",
            link: "google.com",
          },
        ],
      },
    ],
    nextPage: 1, // Simulate pagination
  }),

  methods: {
    loadMore() {
      // Simulate an API call
      this.fetchMoreData(this.nextPage);
    },

    fetchMoreData(page) {
      // Simulate fetching more data
      const moreData = [/* define more data based on page number */];
      this.programme.push(...moreData);
      this.nextPage++;
    },
  },

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
