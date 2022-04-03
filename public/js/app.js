let filterDesktop = document.createElement('div');

filterDesktop.className ="filter-desktop";
let textFilters = `<div class=" filter-desktop d-flex col-md-2 justify-content-center dark-color-theme m-2">
<span class="filter"><a>All</a></span>
<span ><a>Active</a></span>
<span ><a>Completed</a></span>
</div>`



let clearTask = document.getElementById('clear-task')
let filterMobile= document.getElementById('filter-mobile')
filterDesktop.innerHTML = textFilters
filterMobile.innerHTML =textFilters
clearTask.parentNode.insertBefore(filterDesktop,clearTask)
