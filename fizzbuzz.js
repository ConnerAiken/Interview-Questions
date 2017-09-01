

<body>

<p> Create a function which loops through an array of 100 random numbers and log a message to the console everytime there is a multiple of 5 and a multiple of 3. If it is a multiple of 5, log "Fizz". If it is a multiple of 3, log "Buzz". If it is a multiple of both, log "FizzBuzz" </p>
<small><a href='https://jsfiddle.net/conneraiken/41210rh8/6/'>Example</a></small>

<button onclick="generateRandomPositiveIntegerArr(10, 100)"> Generate Random Numbers </button>
 

<button onclick="startFizzBuzz()"> Start FizzBuzz </button>

<div>
    <hr>
        <p>Array Preview</p>
        <pre id="arrPreview"></pre>
        <hr>
        <hr>
        <p>Logic Preview</p>
        <pre id="logicPreview"></pre>
    <hr>
</div>
 
<script>
// -----------------------
// Initialize 
// ----------
let arr = [1, 2, 3];
let logicTxt = '', pieceTxt = '';

displayArrayPreview();
// -----------------------

// =============================
// ------- Functions ----------
// =============================

function displayArrayPreview() {
    document.getElementById('arrPreview').innerHTML = JSON.stringify(arr);
}

function startFizzBuzz() {
    logicTxt = '';

    arr.forEach((val) => { 
        if(val % 5 == 0) pieceTxt += 'Fizz';
        if(val % 3 == 0) pieceTxt += 'Buzz';
        
        logicTxt += `<br> Evaluating ${val}.. ${pieceTxt}`; 
        pieceTxt = '';
    });

    document.getElementById('logicPreview').innerHTML = logicTxt;
} 

function generateRandomPositiveIntegerArr(length = 10, range = 100, debug = false) {
    arr = [];

    for(var i = 0; i <= length; i++) {
        arr.push(Math.floor(Math.random() * range)); 
    }

    displayArrayPreview();
}
</script>
</body> 
