import Vue from 'vue';
let vue = new Vue();

export default function (res) {
  let _this = vue;
  if(typeof res === 'string'){
    console.log("进入info");
    _this.$notify.info({
      title:'消息',
      message:res,
      offset:42
    })
  }else{
    let [_method,_msg] = res;
    if(_method === 'success'){
      console.log("进入success");

      _this.$notify({
        title:'成功',
        message:_msg,
        type:'success',
        offset:50
      });
    }else if(_method === 'warning'){
      console.log("进入warning");

      _this.$notify({
        title:'警告',
        message:_msg,
        type:'warning',
        offset:50
      });
    }else if(_method === 'error'){
      _this.$notify.error({
        title:'错误',
        message:_msg,
        offset:50
      });
    }
  }

}
