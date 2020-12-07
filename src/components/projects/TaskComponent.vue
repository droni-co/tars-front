<template>
  <v-card :loading="loading">
    <v-toolbar dense elevation="0">
      <v-toolbar-title>Tarea de prueba para bla bla</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>

    <v-card-text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet perferendis velit blanditiis vitae! Quod ratione eos illum ullam facere, nobis commodi ex temporibus unde, et similique nulla ab pariatur autem!
    </v-card-text>
    <v-card-text>
      <v-list-item-subtitle>
        <span class="mr-3">
          <v-icon small>mdi-calendar-alert</v-icon>
          20 Junio 2019
        </span>
        <span class="mr-3">
          <v-icon small>mdi-comment-text-multiple-outline</v-icon>
          15
        </span>
        <span class="mr-3">
          <v-icon small>mdi-paperclip</v-icon>
          2
        </span>
        <span class="mr-3">
          <v-icon small>mdi-calendar-alert</v-icon>
          20 Junio 2019
        </span>
        <span class="mr-3">
          <v-icon small>mdi-account-arrow-right-outline</v-icon>
          Kalvin Manson
        </span>
        <span class="mr-3">
          <v-icon small>mdi-update</v-icon>
          Kalvin Manson 31 min ago
        </span>
        
      </v-list-item-subtitle>
    </v-card-text>


    <v-list dense>
      <v-subheader>Subtasks ToDo</v-subheader>
      <v-list-item-group>
        <v-list-item v-for="todo in todos" :key="todo.id" color="primary">
          <v-list-item-avatar size="25" color="green">
            <v-icon dark small>mdi-checkbox-marked-circle-outline</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ todo.name }}</v-list-item-title>
            <v-list-item-subtitle><small>Kalvin Manson, Gustavo Barragan</small></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn small text>
              <v-icon small>
                mdi-calendar-alert
              </v-icon>
              20 Junio 2019
            </v-btn>
          </v-list-item-action>
          <v-list-item-action>
            <v-btn small icon>
              <v-icon small>
                mdi-account-group-outline
              </v-icon>
            </v-btn>
          </v-list-item-action>
          <v-list-item-action>
            <v-btn small icon color="red">
              <v-icon small>
                mdi-trash-can-outline
              </v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-card shaped v-for="comment in comments" :key="comment.id" class="mb-2">
      <v-card-text>
        <v-row>
          <v-col>
            {{ comment.user.name }}
          </v-col>
          <v-col class="text-right">
            {{ comment.created_at }}
          </v-col>
        </v-row>
        <div>{{ comment.comment}}</div>
      </v-card-text>
    </v-card>
    <v-card>
      <tiptap-vuetify
      placeholder="Write something …"
    />
    </v-card>
  </v-card>
</template>

<script>
  //import axios from 'axios'
  export default {
    props: ['project', 'task'],
    data: () => ({
      apiurl: process.env.VUE_APP_API_URL,
      loading: false,
      messages: [
        {
          from: 'You',
          message: `Sure, I'll see you later.`,
          time: '10:42am',
          color: 'deep-purple lighten-1',
        },
        {
          from: 'John Doe',
          message: 'Yeah, sure. Does 1:00pm work?',
          time: '10:37am',
          color: 'green',
        },
        {
          from: 'You',
          message: 'Did you still want to grab lunch today?',
          time: '9:47am',
          color: 'deep-purple lighten-1',
        }
      ],
      todos: [
        {
          id: 1,
          name: 'hacer el front de la aplicacion',
        },
        {
          id: 5,
          name: 'conectar backend',
        },
      ],
      newTask: null,
      comments: [
        {
          id: 1,
          user: {name: 'Kalvin Manson', email: 'kalvinmanson@gmail.com'},
          comment: 'lorem ipsum dolor sit amet dolor lorem sit amet ipsum',
          created_at: '2020-12-01'
        },
        {
          id: 2,
          user: {name: 'Gustavo Barragan', email: 'kalvinmanson@gmail.com'},
          comment: 'lorem ipsum dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor si dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor si dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor si dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor si dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor sit amet dolor lorem sit amet ipsum',
          created_at: '2020-12-01'
        },
        {
          id: 3,
          user: {name: 'Kalvin Manson', email: 'kalvinmanson@gmail.com'},
          comment: 'lorem ipsum dolor sisum',
          created_at: '2021-12-01'
        },
        {
          id: 4,
          user: {name: 'Kalvin Manson', email: 'kalvinmanson@gmail.com'},
          comment: 'lorem ipsum dolor sit amet dolor lorem sit amet ipsum',
          created_at: '2020-12-01'
        },
        {
          id: 5,
          user: {name: 'Gustavo Barragan', email: 'kalvinmanson@gmail.com'},
          comment: 'lorem ipsum dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor si dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor si dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor si dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor si dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor sit amet dolor lorem sit amet ipsum',
          created_at: '2020-12-01'
        },
        {
          id: 6,
          user: {name: 'Kalvin Manson', email: 'kalvinmanson@gmail.com'},
          comment: 'lorem ipsum dolor sisum',
          created_at: '2021-12-01'
        },
        {
          id: 7,
          user: {name: 'Kalvin Manson', email: 'kalvinmanson@gmail.com'},
          comment: 'lorem ipsum dolor sit amet dolor lorem sit amet ipsum',
          created_at: '2020-12-01'
        },
        {
          id: 8,
          user: {name: 'Gustavo Barragan', email: 'kalvinmanson@gmail.com'},
          comment: 'lorem ipsum dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor si dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor si dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor si dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor si dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor sit amet dolor lorem sit amet ipsumlorem ipsum dolor sit amet dolor lorem sit amet ipsum',
          created_at: '2020-12-01'
        },
        {
          id: 9,
          user: {name: 'Kalvin Manson', email: 'kalvinmanson@gmail.com'},
          comment: 'lorem ipsum dolor sisum',
          created_at: '2021-12-01'
        }
      ]
    }),
    mounted() {
      
    },
    methods: {
      
    }
  }
</script>
