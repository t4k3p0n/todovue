Vue.component('todo-item', {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    //htmlの挿入
    template: '<div>' +
        '<input type="checkbox" v-model="todo.completed">' +
        '<span>{{todo.text}}</span>' +
        '<button type="button" v-on:click="onclickRemove">削除</button>' +
        '</div>',

    methods: {
        onclickRemove: function () {
            this.$emit('remove')
        }
    }
});

var vm = new Vue({
    el: '#app',
    data: {
        input: '',
        //タスクを管理する配列
        todos: [

        ]
    },
    methods: {
        //Todo追加関数
        addTodo: function () {
            this.todos.push(
                {
                    completed: false,
                    text: this.input
                })
            this.input = ''
        }
    }
});