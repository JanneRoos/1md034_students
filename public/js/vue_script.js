let menu = new Vue({
  el: "#menu",
  data: {
    burgers: food,
    selectedBurgers: []
  }
});

let submitButtonData = new Vue({
  el: "#submit-button",
  data: {
    formInfo: null,
    orderedBurgers: []
  },
  methods: {
    placeOrder: function(){
      let c = customerInfo;
      let array = [c.name, c.email, c.street, c.house, c.payment, c.gender];
      submitButtonData.formInfo = array;
      submitButtonData.orderedBurgers = menu.selectedBurgers;
    }
  }
})

let customerInfo = new Vue({
  el: "#customer-info",
  data: {
    name: "",
    email: "",
    street: "",
    house: "",
    payment: "",
    gender: null
  }
})
