window.addEventListener('load', () => {
    const container = document.getElementById('container');
    const quickSortBtn = document.getElementById('quickSortButton');
    const newBarBtn = document.getElementById('newBarBtn');
  
    quickSortBtn.addEventListener('click', quickSort);
    newBarBtn.addEventListener('click', createNewBar);
  
    createNewBar();
  
    async function createNewBar() {
      const bar = document.createElement('div');
      bar.className = 'bar';
      bar.style.height = Math.floor(Math.random() * 80 + 20) + 'px';
  
      container.appendChild(bar);
    }
  
    async function swap(el1, el2) {
      const style1 = window.getComputedStyle(el1);
      const style2 = window.getComputedStyle(el2);
  
      const transform1 = style1.getPropertyValue('height');
      const transform2 = style2.getPropertyValue('height');
  
      el1.style.height = transform2;
      el2.style.height = transform1;
  
      await new Promise(resolve => setTimeout(resolve, 200)); // Delay for 200ms
    }
  
    async function quickSort() {
      const bars = document.querySelectorAll('.bar');
      await performQuickSort(bars, 0, bars.length - 1);
    }
  
    async function performQuickSort(bars, low, high) {
      if (low < high) {
        const pivotIndex = await partition(bars, low, high);
        await performQuickSort(bars, low, pivotIndex - 1);
        await performQuickSort(bars, pivotIndex + 1, high);
      }
    }
  
    async function partition(bars, low, high) {
      const pivot = parseInt(bars[high].style.height);
      let i = low - 1;
  
      for (let j = low; j <= high - 1; j++) {
        bars[j].style.background = 'red';
        bars[j + 1].style.background = 'red';
        await new Promise(resolve => setTimeout(resolve, 200)); // Delay for 200ms
  
        const barHeight = parseInt(bars[j].style.height);
        if (barHeight < pivot) {
          i++;
          await swap(bars[i], bars[j]);
        }
  
        bars[j].style.background = '';
        bars[j + 1].style.background = '';
      }
  
      await swap(bars[i + 1], bars[high]);
  
      bars[high].style.background = 'green';
      await new Promise(resolve => setTimeout(resolve, 200)); // Delay for 200ms
      bars[high].style.background = '';
  
      return i + 1;
    }
  });
  