async function insertionSort() {
    const bars = document.querySelectorAll('.bar');

    for (let i = 1; i < bars.length; i++) {
      let j = i;

      bars[j].style.background = "red";
      bars[j - 1].style.background = "red";
      await new Promise(resolve => setTimeout(resolve, 2)); // Delay for 200ms

      while (j > 0 && parseInt(bars[j].style.height) < parseInt(bars[j - 1].style.height)) {
        await swap(bars[j], bars[j - 1]);
        bars[j].style.background = "";
        bars[j - 1].style.background = "";
        j--;

        bars[j].style.background = "red";
        bars[j - 1].style.background = "red";
        await new Promise(resolve => setTimeout(resolve, 20)); // Delay for 200ms
      }

      bars[j].style.background = "";
      bars[j - 1].style.background = "";
      bars[j].style.background = "green";
    }
  }
  var insertionSortButton = document.getElementById('insertionSortButton');
  insertionSortButton.addEventListener('click', insertionSort);
