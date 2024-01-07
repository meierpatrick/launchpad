import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from "vuetify/lib/iconsets/mdi.mjs";
import { fa } from "vuetify/iconsets/fa";
import "@mdi/font/css/materialdesignicons.css";
import colors from 'vuetify/util/colors'

const vuetify = createVuetify({
    theme: {
        defaultTheme: "light",
        themes: {
            light: {
              dark: false,
              colors: {
                primary: colors.red.lighten2, // #E53935
                secondary: colors.red.lighten4, // #FFCDD2
              }
            },
          },
      },
      icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
          mdi,
          fa,
        },
        
      },
      components,
      directives,
})

createApp(App).use(vuetify).mount('#app')