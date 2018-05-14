<template>
  <div style="height:100%">
   <span v-model="content" v-text="content"></span>
  </div>
</template>
<script>
  export default {
    props: {
      article: {
        type: Object,
        require: true
      }
    },
    data() {
      return {}
    },
    methods: {
      click(item) {
        alert(item.title);
      }
    }
  }
</script>
