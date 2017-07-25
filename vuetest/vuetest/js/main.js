
var app = new Vue({
    el:'#app',
    data:{
        message:"hello world"
    }
});
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date()
  }
});
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
    el:"#app-4",
    data:{
        todos:[
            {text:"learn"},
            {text:"eat"},
            {text:"sleep"}
        ]
    }
});
var app5 = new Vue({
    el:"#app-5",
    data:{
        message:"hello Vuess"
    },
    methods:{
        reverse:function(){
            this.message = this.message.split("").reverse().join("")
        }
    }
})

var app6 = new Vue({
    el:"#app-6",
    data:{
        message:"hello vue"
    } 
})

Vue.component("todo-item",{
    props:['todo'],
    template:'<li>{{todo.text}}</li>'
})
var app7 = new Vue({
    el:"#app-7",
    data:{
        grocery:[
            {text:"sc"},
            {
                text:"sg"
            }
        ]
    }
})