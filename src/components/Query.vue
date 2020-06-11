<template>  
    <v-app>
    <v-content>
      <v-container  
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
                <v-card-text>
                {{this.$store.state.name}}
                <div class="orange--text">
                <v-icon left class="orange--text">mdi-heart</v-icon>Welcome to ZJU!
                </div>
            </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import Vuetify from 'vuetify'
export default {
}
</script>