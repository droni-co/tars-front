<template>
  <v-list dense>
    <v-subheader>Subtasks ToDo</v-subheader>
    <v-list-item-group>
      <div v-for="todo in todos" :key="todo.id">
        <v-list-item color="primary">
          <v-list-item-avatar size="25" color="green">
            <v-icon dark small>mdi-checkbox-marked-circle-outline</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ todo.name }}</v-list-item-title>
            <v-list-item-subtitle><small>Kalvin Manson, Gustavo Barragan</small></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>

            <v-menu
              ref="menu"
              v-model="todo.datemenu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn small text v-bind="attrs" v-on="on">
                  <v-icon small>
                    mdi-calendar
                  </v-icon>
                  {{ date }}
                </v-btn>
              </template>
              <v-date-picker
                v-model="date"
                no-title
                scrollable
              >
              </v-date-picker>
            </v-menu>


          </v-list-item-action>
          <v-list-item-action>
            <v-menu v-model="todo.menu" :close-on-content-click="false" :nudge-width="200" offset-x>
              <template v-slot:activator="{ on, attrs }">
                <v-btn small icon v-bind="attrs" v-on="on">
                  <v-icon small>
                    mdi-account-group-outline
                  </v-icon>
                </v-btn>
              </template>

              <v-card>
                <v-list>
                  <v-list-item>
                    <v-text-field label="Search"></v-text-field>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-avatar>
                      <img
                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                        alt="John"
                      >
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>John Leider</v-list-item-title>
                      <v-list-item-subtitle>Founder of Vuetify</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-btn icon>
                        <v-icon>mdi-plus</v-icon>
                      </v-btn>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-menu>
          </v-list-item-action>
          <v-list-item-action>
            <v-btn small icon color="red">
              <v-icon small>
                mdi-trash-can-outline
              </v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </div>
      <v-list-item>
        <v-text-field label="Add new"></v-text-field>
        <v-list-item-action>
          <v-btn small icon color="red">
            <v-icon small>
              mdi-plus
            </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>


    </v-list-item-group>
  </v-list>
</template>

<script>
  //import axios from 'axios'
  export default {
    props: ['task'],
    data: () => ({
      apiurl: process.env.VUE_APP_API_URL,
      loading: false,
      menu: false,
      dateTodo: false,  
      date: new Date().toISOString().substr(0, 10),
      todos: [
        {
          id: 1,
          name: 'hacer el front de la aplicacion',
          date: '2021-01-12'
        },
        {
          id: 5,
          name: 'conectar backend',
        },
      ],
      todo_id: 0,
    }),
    mounted() {
      
    },
    methods: {
      
    },
    components: {
      
    }
  }
</script>
