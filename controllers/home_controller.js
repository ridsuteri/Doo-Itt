const TaskList = require('../models/list');

// var taskList=[
//     {
//         title:'task 1',
//         desc:'this is sample task 1',
//         date:'01-01-2020',
//         p:'1',
//         cat:'Personal'
//     },

//     {
//         title:'task 2',
//         desc:'this is sample task2',
//         date:'01-01-2020',
//         p:'2',
//         cat:'Professional'
//     },

//     {
//         title:'task 3',
//         desc:'this is sample task3',
//         date:'01-01-2020',
//         p:'3',
//         cat:'Academics'
//     },
    
//     {
//         title:'task 3',
//         desc:'this is sample task3',
//         date:'01-01-2020',
//         p:'0',
//         cat:'Social'
//     },
    
//     {
//         title:'task 3',
//         desc:'this is sample task3',
//         date:'01-01-2020',
//         p:'0',
//         cat:'Other'
//     }

// ]

module.exports.home=function(req,res){
     //fetching data from database
     TaskList.find({},function(err,task){
        if(err){
            console.log('Error in fetching list from db');
            return;
        }
        return res.render('home',{
            title : "TODO App", 
            todo_list : task
         });
    });
};

module.exports.add=function(req,res){
    // console.log(req.body);
    // return res.redirect("back");
    TaskList.create(req.body,function(err,task){
        if(err){console.log('error in creating the list');return;}
        console.log(task);
        return res.redirect('/');
    });
};

module.exports.delete=function(req,res){

    //getting the id of selected boxes
    let id = req.query;
    console.log(id);

    //gives the length of the selected checkboxes
    let checkboxes=Object.keys(id).length;

    //iterating over each selected boxes
    for(let i=0;i<checkboxes;i++)
    {
        // find the item in the database using id and delte it
        TaskList.findByIdAndDelete(Object.keys(id)[i],function(err)
        {
            if(err)
            {
                console.log("error in deleteing the item");
                return;
            }
            
        })
    }
    return res.redirect('back');
};