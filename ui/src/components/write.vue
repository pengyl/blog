<template>
  <div>
    <mavon-editor ref="editor"  @save ="save"/>
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {

      }
    },
    methods:{
      save(value ,render){
//        console.log(this.$refs.editor);
        console.log("value:",value);
        console.log("render:",render);
        this.$http("/article")
      }
    }
  }
</script>
