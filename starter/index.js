var task1 = document.getElementById('block9am');
var saveBtn1 = document.getElementById('saveBtn1');
var task2 = document.getElementById('block10am');
var saveBtn2 = document.getElementById('saveBtn2');
var task3 = document.getElementById('block11am');
var saveBtn3 = document.getElementById('saveBtn3');
var task4 = document.getElementById('block12pm');
var saveBtn4 = document.getElementById('saveBtn4');
var task5 = document.getElementById('block1pm');
var saveBtn5 = document.getElementById('saveBtn5');
var task6 = document.getElementById('block2pm');
var saveBtn6 = document.getElementById('saveBtn6');
var task7 = document.getElementById('block3pm');
var saveBtn7 = document.getElementById('saveBtn7');
var task8 = document.getElementById('block4pm');
var saveBtn8 = document.getElementById('saveBtn8');
var task9 = document.getElementById('block5pm');
var saveBtn9 = document.getElementById('saveBtn9');



renderLastTask(task1);
renderLastTask(task2);
renderLastTask(task3);
renderLastTask(task4);
renderLastTask(task5);
renderLastTask(task6);
renderLastTask(task7);
renderLastTask(task8);
renderLastTask(task9);


//var lastRenders = {
//    block1: 
//    block2: taskContent;
//    block3:
//
//    
//};

function handleSaveClick(button, taskElement) {
    var taskContent = taskElement.innerHTML;
 localStorage.setItem("userTask", taskContent);
}




saveBtn1.addEventListener('click', function () {



    handleSaveClick(saveBtn1, task1);


});


saveBtn2.addEventListener('click', function () {

    handleSaveClick(saveBtn2, task2);


});

saveBtn3.addEventListener('click', function () {

    handleSaveClick(saveBtn3, task3);


});

saveBtn4.addEventListener('click', function () {

    handleSaveClick(saveBtn4, task4);


});

saveBtn5.addEventListener('click', function () {

    handleSaveClick(saveBtn5, task5);


});

saveBtn6.addEventListener('click', function () {

    handleSaveClick(saveBtn6, task6);


});

saveBtn7.addEventListener('click',function(){
    
    handleSaveClick(saveBtn7,task7);


});

saveBtn8.addEventListener('click',function(){
    
    handleSaveClick(saveBtn8,task8);


});

saveBtn9.addEventListener('click',function(){
    
    handleSaveClick(saveBtn9,task9);


});


function renderLastTask(task,userTask) {
    var lastTask = localStorage.getItem('userTask');
    task.innerHTML = lastTask;



}