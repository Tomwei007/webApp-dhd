//表单验证
function formRequired() {
  var st = true;
  var text='';
  var elmAll = document.querySelectorAll("input,select,textarea");
//console.log(elmAll);
  for (var i = 0; i < elmAll.length; i++) {
    var val=elmAll[i].value;
    if(!val.trim()){
      if (elmAll[i].hasAttribute('required')) {
        text = elmAll[i].getAttribute("placeholder");
        //this.$vux.toast.show({text: text, type: 'text'})
        st = false;
        break;
      }
    }
  }
  //if(elm.getAtt)
  return {
    st:st,
    info:text
  };
}
//验证手机号码
function isphoneNum(str){
  var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
  return myreg.test(str);
}

export{
  formRequired,
  isphoneNum
}
