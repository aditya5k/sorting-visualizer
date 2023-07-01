async function bubbleSort() {
    var bars = document.getElementsByClassName('bar');
    var n = bars.length;
  
    for (var i = 0; i < n - 1; i++) {
      for (var j = 0; j < n - i - 1; j++) {
        var bar1 = bars[j];
        var bar2 = bars[j + 1];
  
        bar1.style.background = "red";
        bar2.style.background = "red";
  
        // Add delay before the swap
        await new Promise(resolve => setTimeout(resolve, 10));
  
        var height1 = parseInt(bar1.style.height);
        var height2 = parseInt(bar2.style.height);
  
        if (height1 > height2) {
          swap(bar1, bar2);
        }
  
        // Reset the background color after the comparison
        bar1.style.background = "";
        bar2.style.background = "";
      }
  
      // Highlight the bar in green after each iteration
      bars[n - i - 1].style.background = "green";
    }
  
    // Highlight the first bar in green after sorting is complete
    bars[0].style.background = "green";
  }
  
  var bubbleSortButton = document.getElementById('bubbleSortButton');
  bubbleSortButton.addEventListener('click', bubbleSort);