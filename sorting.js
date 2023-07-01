function createBars() {
    var barsContainer = document.getElementById('barsContainer');
    barsContainer.innerHTML = '';
  
    var numbersArray = [];
    for (var i = 0; i < 100; i++) {
      var randomNumber = Math.floor(Math.random() * 101); // Generate a random number between 0 and 100
      numbersArray.push(randomNumber);
    }

    for (var i = 0; i < numbersArray.length; i++) {
      var bar = document.createElement('div');
      bar.classList.add('bar');
      bar.style.height = numbersArray[i] + 'px';
      barsContainer.appendChild(bar);
    }
  }
  
  var newArrayButton = document.getElementById('newArrayButton');
  newArrayButton.addEventListener('click', createBars);
  
  // Call the function on page load
  createBars();
  function swap(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);
  
    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");
  
    el1.style.height = transform2;
    el2.style.height = transform1;
  }
  async function merge(bars, low, mid, high) {
    const left = bars.slice(low, mid + 1);
    const right = bars.slice(mid + 1, high + 1);

    let i = 0, j = 0, k = low;

    while (i < left.length && j < right.length) {
      bars[k].style.background = "red";
      bars[k + mid - low + 1].style.background = "red";
      await new Promise(resolve => setTimeout(resolve, 200)); // Delay for 200ms

      if (parseInt(left[i].style.height) <= parseInt(right[j].style.height)) {
        bars[k].style.height = left[i].style.height;
        i++;
      } else {
        bars[k].style.height = right[j].style.height;
        j++;
      }

      bars[k].style.background = "";
      bars[k + mid - low + 1].style.background = "";
      k++;
    }

    while (i < left.length) {
      bars[k].style.height = left[i].style.height;
      i++;
      k++;
    }

    while (j < right.length) {
      bars[k].style.height = right[j].style.height;
      j++;
      k++;
    }

    await new Promise(resolve => setTimeout(resolve, 200)); // Delay for 200ms

    for (let x = low; x <= high; x++) {
      if (x !== high) {
        bars[x].style.background = "green";
      } else {
        bars[x].style.background = "";
      }
    }
  }
  
  
