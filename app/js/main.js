$(function () {

  $('.menu__list-item.item').on('click', function () {
    $('.menu__list-item.item').toggleClass('active');
  });

  $('.burger-menu').on('click', function () {
    $('.header__bottom-inner').toggleClass('active');
  });

  new Vue({
    data(){
      return{ 
        currentFocus: '',
        autocomplete: '',
        onBlur: true,
        onFocus: false,
        arr: ["Молоток", "Цемент", "Гвозди"]
      }
    },
    mounted(){
      var vm = this;
      document.addEventListener("click", function(e){
        
        vm.onBlur ?vm.onFocus = false: false});
      
    },
    methods:{
      addActive(){
        var vm = this;
        if (!vm.array) return false;
        if (vm.currentFocus >= vm.array.length) vm.currentFocus = 0;
        if (vm.currentFocus < 0) vm.currentFocus = (vm.array.length - 1);
      },
      keyDown(e){ 
      var vm = this;
        if (e.keyCode == 40) {
        vm.currentFocus++;
        vm.addActive()
      } else if (e.keyCode == 38) {
        vm.currentFocus--;
        vm.addActive()
        
      }
      }
    }
  }).$mount('#app')

  


});

