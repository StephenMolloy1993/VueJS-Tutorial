new Vue({
  el: '#vue-app',
  data:{
    name: 'Stephen',
    job: 'Ninja',
    website: 'http://www.sap.com',
    age: 25,
    x: 0,
    y: 0
  },
  methods:{
    greet: function(time){
      return 'Good ' + time + ", " + this.name;
    },
    add: function(){
      this.age++;
    },
    updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
  }
});
