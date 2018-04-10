Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var toDoList = new Vue({
    el: '#to-do-list',
    data: {
        toDoList:[
            { text: "Get Milk" },
            { text: "Get chips" },
            { text: "Get juice "}
        ]
    }
})