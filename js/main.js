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
                isDone: true,
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
        ]    
    }
     
    
})