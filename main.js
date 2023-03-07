var app= new Vue({
    el: '#app',
    data:{
        title: 'to do list',
        tasks:[
            { name: 'Today : Traking customers'},
            { name: 'Tommorow : print reports'},
            { name: ' Weekly : cleaning stuff'},
            { name: 'Every day : reports'},
         

        ]
    },
    methods:{ 
        newItem : function (){
            if (!this.tasks.name){
                return}
                this.tasks.push ({
                    name: this.tasks.name,
                    del:''
                });
                this.tasks.name= "";
               },
               delItem: function(task) {
                this.tasks.splice(this.tasks.indexOf(task,1))
               }
    }

})