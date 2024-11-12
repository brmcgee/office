var root = document.getElementById('root');
var customersRoot = document.getElementById('customersRoot');
var menuRoot = document.getElementById('menuRoot');
// var host = `http://localhost:5200`;
host = `https://office.boxcar.site/`;


function render(){
    root.innerHTML = 'Welcome';
    customersRoot.innerHTML = '';
    menuRoot.innerHTML = '';
}

function clearRoot() {
    customersRoot.innerHTML = '';
    menuRoot.innerHTML = '';
}
function clearMenu() {
    menuRoot.innerHTML = '';
}

function getIcon(status){

    if (status == 'Scheduled') {
        return '<img class="pe-1 pb-1" src="public/assets/icons/schedule-r.png" alt="" width="25">';
    }
    if (status == 'Ordered') {
        return '<img class="pe-1 pb-1" src="public/assets/icons/order-p.png" alt="" width="25">';
    }
    if (status == 'In-Progress') {
        return '<img class="pe-1 pb-1" src="public/assets/icons/in-progress-b.png" alt="" width="25">';
    }
    if (status == 'Estimate') {
        return '<img class="pe-1 pb-1" src="public/assets/icons/contract-pink.png" alt="" width="25">';
    }
    if (status == 'Completed') {
        return '<img class="pe-1 pb-1" src="public/assets/icons/done-green.png" alt="" width="25">';
    }

}


function printHeader () {
    return `
       <div class="print-header d-flex justify-content-between px-2 pb-5 border">
      <h4>backoffice</h4>
        <span class="pull-right hidden-print">
            <a href="javascript:;" onclick="window.print()" class="btn btn-sm btn-white m-b-10 p-l-5">
               <i class="fa fa-print t-plus-1 fa-fw fa-lg"></i> 
               Print
            </a>
        </span>
   </div>`;
}