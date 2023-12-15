
displayStoredData();





var savedData = [];


//API:
var now= dayjs().$d;

console.log(now);

 document.getElementById("apiCallDate").textContent = now;












//Callback function for the multiple save buttons
document.getElementById('saveBtn1').addEventListener('click', function () {
  handleSaveClick('block9am');
});

document.getElementById('saveBtn2').addEventListener('click', function () {
  handleSaveClick('block10am');
});

document.getElementById('saveBtn3').addEventListener('click', function () {
  handleSaveClick('block11am');
});

document.getElementById('saveBtn4').addEventListener('click', function () {
  handleSaveClick('block12pm');
});

document.getElementById('saveBtn5').addEventListener('click', function () {
  handleSaveClick('block1pm');
});

document.getElementById('saveBtn6').addEventListener('click', function () {
  handleSaveClick('block2pm');
});
document.getElementById('saveBtn7').addEventListener('click', function () {
  handleSaveClick('block3pm');
});
document.getElementById('saveBtn8').addEventListener('click', function () {
  handleSaveClick('block4pm');
});
document.getElementById('saveBtn9').addEventListener('click', function () {
  handleSaveClick('block5pm');
});


//Function to get user input and store it in local storage.
function handleSaveClick(elementId) {


  var userInput = document.getElementById(elementId).innerText;
  


  var newData = {
    value: userInput,
    timeBlock: elementId.replace('block', ''),
  };

  savedData.push(newData);

  localStorage.setItem('savedData', JSON.stringify(savedData));

 
}

//function do display saved tasks
function displayStoredData() {
  var savedData = JSON.parse(localStorage.getItem('savedData')) || [];

  savedData.forEach(function (data) {
    var timeBlockId = 'block' + data.timeBlock;
    var timeBlockElement = document.getElementById(timeBlockId);



    if (timeBlockElement) {
      timeBlockElement.innerHTML = data.value;
    }
  });
}