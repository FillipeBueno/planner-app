displayStoredData();


changeColor('block9am');
changeColor('block10am');
changeColor('block11am');
changeColor('block12pm');
changeColor('block13pm');
changeColor('block14pm');
changeColor('block15pm');
changeColor('block16pm');
changeColor('block17pm');




var savedData = [];


//API:

//Displaying of time on the header.
var now = dayjs().$d;


document.getElementById("apiCallDate").textContent = now;


//Change of blocks' colours.

function changeColor(elementId) {

  var now = dayjs().$d;

  var hours = now.getHours();

  var block = document.getElementById(elementId);

  var idValue = block.id;


  //check if there is a one or more digits in the ID.
  var match = idValue.match(/\d+/);

  // Check if a match is found
  if (match) {

    var blockTime = parseInt(match[0]);


  } else {
    console.error('No numeric part found in the ID.');
  }


//check if time matches with block
  if (blockTime == hours) {
    block.classList.add("present");

  } else if (blockTime > hours) {
    block.classList.add("future");

  } else {
    block.classList.add("past");



  }
};


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
  handleSaveClick('block13pm');
});

document.getElementById('saveBtn6').addEventListener('click', function () {
  handleSaveClick('block14pm');
});
document.getElementById('saveBtn7').addEventListener('click', function () {
  handleSaveClick('block15pm');
});
document.getElementById('saveBtn8').addEventListener('click', function () {
  handleSaveClick('block16pm');
});
document.getElementById('saveBtn9').addEventListener('click', function () {
  handleSaveClick('block17pm');
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