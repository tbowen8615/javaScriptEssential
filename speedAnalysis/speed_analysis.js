let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
  // Set the test text
  document.getElementById("inputText").value = testText;

  // Reset results and timer
  document.getElementById("output").innerHTML = "";
  startTime = new Date().getTime();

  // Enable user input and clear previous typing
  document.getElementById("userInput").value = "";
  document.getElementById("userInput").readOnly = false;

  // Change button text and functionality
  var button = document.getElementById("btn");
  button.innerHTML = "End Test";
  button.onclick = endTest;
}

function endTest() {
  endTime = new Date().getTime();

  // Disable user input
  document.getElementById("userInput").readOnly = true;

  // Calculate time elapsed
  var timeElapsed = (endTime - startTime) / 1000; // in seconds

  // Get the user-typed text
  var userTypedText = document.getElementById("userInput").value;

  // Calculate total length of the user-typed text
  var totalLength = userTypedText.length;

  // Count words typed using regex to split by whitespace
  var typedWords = userTypedText.split(/\s+/).filter(function (word) {
    return word !== "";
  }).length;

  // Calculate words per minute (WPM)
  var wpm = 0;
  if (timeElapsed !== 0 && !isNaN(typedWords)) {
    wpm = Math.round((typedWords / timeElapsed) * 60);
  }

  // Display the results
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
    "<p>Total Length: " + totalLength + "</p>" +
    "<p>Words Typed: " + typedWords + "</p>" +
    "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
    "<p>Words Per Minute (WPM): " + wpm + "</p>";

  // Reset the button
  var button = document.getElementById("btn");
  button.innerHTML = "Start Test";
  button.onclick = startTest;
}
