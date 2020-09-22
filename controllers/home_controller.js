var taskList=[
    {
        title:'task 1',
        desc:'this is sample task 1',
        date:'01-01-2020',
        p:'1',
        cat:'Personal'
    },

    {
        title:'task 2',
        desc:'this is sample task2',
        date:'01-01-2020',
        p:'2',
        cat:'Professional'
    },

    {
        title:'task 3',
        desc:'this is sample task3',
        date:'01-01-2020',
        p:'3',
        cat:'Academics'
    },
    
    {
        title:'task 3',
        desc:'this is sample task3',
        date:'01-01-2020',
        p:'0',
        cat:'Social'
    },
    
    {
        title:'task 3',
        desc:'this is sample task3',
        date:'01-01-2020',
        p:'0',
        cat:'Other'
    }

]

module.exports.home=function(req,res){
    res.render('../views/home',{
        title:'TODO App',
        task_list:taskList
    });
};