<template>
  <v-snackbar v-model="open"
              :color="color"
              :timeout="timeout"
              top>
    {{ text }}
    <v-btn dark text @click="open = false" small>
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: "Message",
  props: {},
  data() {
    return {
      timeout: 6000,
      color: '',
      open: false,
      text: ''
    };
  },
  methods: {
    info(msg) {
      this.text = msg
      this.color = '#2196f3'
      this.open = true
    },
    error(msg) {
      this.text = msg
      this.color = '#ff5252'
      this.open = true
    },
    warning(msg) {
      this.text = msg
      this.color = '#FFC107'
      this.open = true
    },
    success(msg) {
      this.text = msg
      this.color = '#4caf50'
      this.open = true
    }
  }
}
</script>
