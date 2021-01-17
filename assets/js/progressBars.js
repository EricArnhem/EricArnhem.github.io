// Function to load a progress bar
function loadProgressBar(skillId) {

  // Selects the progress bar wanted
  var progressBar = document.querySelector(skillId + ' .progress-bar');
  // Sets the width of the progress bar to 0% to cancel the width given by the CSS
  progressBar.style.width = 0 + '%';
  // Width at which the bar begins to load
  var width = 0;
  // Calls the frame function every 20ms until it's cleared
  var id = setInterval(frame, 20);
  // Gets the percentage from the HTML element
  var percentage = progressBar.innerHTML.replace('%', '');

  function frame() {
    // If the progress bar has finished loading, we clear the interval
    if (width >= percentage) {
      clearInterval(id);
    } else {
      // If not, we keep loading it
      width++
      progressBar.style.width = width + '%';
      progressBar.innerHTML = width + '%';
    }
  }

}

// Loading all progress bars
loadProgressBar('#skill-html');
loadProgressBar('#skill-css');
loadProgressBar('#skill-bootstrap');
loadProgressBar('#skill-js');
loadProgressBar('#skill-jquery');
loadProgressBar('#skill-php');
loadProgressBar('#skill-sql');
loadProgressBar('#skill-windows');
loadProgressBar('#skill-linux');
loadProgressBar('#skill-vscode');
loadProgressBar('#skill-nano');
loadProgressBar('#skill-commandline');
loadProgressBar('#skill-git');
loadProgressBar('#skill-github');
loadProgressBar('#skill-wamp');
loadProgressBar('#skill-paintnet');
loadProgressBar('#skill-pencil');