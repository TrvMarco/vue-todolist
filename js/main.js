const app = new Vue({
    el: "#root",
    data: {
        todolist: [
            {
                text: 'Fare la spesa',
                isDone: false,
            },
            {
                text: 'Andare in palestra',
                isDone: false,
            },
            {
                text: 'Riunione ore 15.30 ',
                isDone: false,
            },
            {
                text: 'Spedire reso pacco Amazon',
                isDone: false,
            },
            {
                text: 'Inviare mail a ufficio Marketing',
                isDone: false,
            },
            {
                text: 'Ordinare orologio',
                isDone: false,
            }
        ],  
        newTodo: {
            text: '',
            isDone: false
        }
    },
    methods:{
        checkActivity(index){
            if(!this.todolist[index].isDone){
                this.todolist[index].isDone = true;

            }else{
                this.todolist[index].isDone = false;
            }    
        },
        cancelActivity(index){
            this.todolist.splice(index,1);
        },
        addTask(){
            if(!this.todolist.includes(this.newTodo)){
                this.todolist.push(this.newTodo);
                this.newTodo = {
                    text: '',
                    isDone: false}
            }
        }
    }   
     
    
})