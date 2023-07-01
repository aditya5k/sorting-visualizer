window.addEventListener('load', () => {
    const container = document.getElementById('bar');
    const mergeSortBtn = document.getElementById('mergeSort');
    const newBarBtn = document.getElementById('newBarBtn');
  
    mergeSortBtn.addEventListener('click', mergeSort);
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
  
    async function mergeSort() {
      const bars = document.querySelectorAll('.bar');
      await performMergeSort(bars, 0, bars.length - 1);
    }
  
    async function performMergeSort(bars, low, high) {
      if (low < high) {
        const mid = Math.floor((low + high) / 2);
  
        await performMergeSort(bars, low, mid);
        await performMergeSort(bars, mid + 1, high);
  
        await merge(bars, low, mid, high);
      }
    }
  
    async function merge(bars, low, mid, high) {
      const left = bars.slice(low, mid + 1);
      const right = bars.slice(mid + 1, high + 1);
  
      let i = 0, j = 0, k = low;
  
      while (i < left.length && j < right.length) {
        bars[k].style.background = 'red';
        bars[k + mid - low + 1].style.background = 'red';
        await new Promise(resolve => setTimeout(resolve, 200)); // Delay for 200ms
  
        if (parseInt(left[i].style.height) <= parseInt(right[j].style.height)) {
          bars[k].style.height = left[i].style.height;
          i++;
        } else {
          bars[k].style.height = right[j].style.height;
          j++;
        }
  
        bars[k].style.background = '';
        bars[k + mid - low + 1].style.background = '';
        k++;
      }
  
      while (i < left.length) {
        bars[k].style.height = left[i].style.height;
        i++;
      }
    }
})
       
  