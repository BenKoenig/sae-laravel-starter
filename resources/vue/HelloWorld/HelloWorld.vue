
<script>

import axios from 'axios'

export default {

  data() {

    return {

      postings: [],
    }
  },

  created() {

    console.info('Hello World')

    this.loadPostings()
  },

  computed: {


  },

  methods: {

    loadPostings() {

      axios.get('/postings').then(response => {

        this.postings = response.data.data
      })
    },

  },
}

</script>


<template>

  <h1 class="text-bold text-4xl pt-[10rem]">Hello World!!!</h1>

  <p v-for="posting in postings">
    {{ posting.title }}
  </p>

</template>


<style>

  h1 {

    color: red;
  }

</style>
