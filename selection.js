
    function createBar(height) {
      const bar = document.createElement("div");
      bar.classList.add("bar");
      bar.style.height = height + "px";
      return bar;
    }

    function swap(el1, el2) {
      const style1 = window.getComputedStyle(el1);
      const style2 = window.getComputedStyle(el2);
      const height1 = style1.getPropertyValue("height");
      const height2 = style2.getPropertyValue("height");
      
      el1.style.height = height2;
      el2.style.height = height1;
    }

    async function selectionSort() {
      const bars = document.querySelectorAll(".bar");
      const n = bars.length;
      const delay = 100; // Delay in milliseconds

      for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        bars[i].style.background = "red";

        for (let j = i + 1; j < n; j++) {
          bars[j].style.background = "red";
          await new Promise(resolve => setTimeout(resolve, 10));
          
          if (parseInt(bars[j].style.height) < parseInt(bars[minIndex].style.height)) {
            if (minIndex !== i) {
              bars[minIndex].style.background = "blue";
            }
            minIndex = j;
          } else {
            bars[j].style.background = "blue";
          }
        }

        swap(bars[i], bars[minIndex]);
        bars[minIndex].style.background = "blue";
        bars[i].style.background = "green";
      }

      bars[n - 1].style.background = "green";
    }

    function addNewBar() {
      const container = document.getElementById("container");
      const height = Math.floor(Math.random() * 200) + 20; // Random height between 20 and 220
      const bar = createBar(height);
      container.appendChild(bar);
    }

    var selectionsorti=document.getElementById("selectionSortButton");
    selectionsorti.addEventListener("click", selectionSort);
    
