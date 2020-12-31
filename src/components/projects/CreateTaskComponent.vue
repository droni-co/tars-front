<template>
  <div>
    <v-dialog v-model="formu" persistent max-width="800px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          <v-icon>
            mdi-plus
          </v-icon>
          New Task
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Create new task</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-text-field label="Title of task"></v-text-field>
            <v-row>
              <v-col>
                <v-combobox v-model="select" label="Tags" multiple chips></v-combobox>
              </v-col>
              <v-col>
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Picker in menu"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    no-title
                    scrollable
                  >
                    <v-spacer></v-spacer>
                    <v-btn
                      text
                      color="primary"
                      @click="menu = false"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.menu.save(date)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            
            <TipEditor />
            
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="formu = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="formu = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import TipEditor from '../tipEditor'
  //import axios from 'axios'
  export default {
    props: ['project'],
    data: () => ({
      apiurl: process.env.VUE_APP_API_URL,
      loading: false,
      formu: false,
    }),
    mounted() {
      
    },
    methods: {

    },
    components: {
      TipEditor
    }

    }
</script>
