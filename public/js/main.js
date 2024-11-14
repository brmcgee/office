var root = document.getElementById('root');
var customersRoot = document.getElementById('customersRoot');
var menuRoot = document.getElementById('menuRoot');
var host = `http://localhost:5200`;
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



function customersButton () {
    return ` 
            <div class="d-flex justify-content-center">
                <button class="bg-transparent border-0" type="button" onclick="fetchCustomerList()">
                    <img class="pb-1" src="public/assets/icons/blue-rocket.png" alt="" width="22"> Customers
                </button>
            </div>    
    `;
}

function jobsButton () {
    return `  
            <div class="d-flex justify-content-center">
                <button class="bg-transparent border-0" type="button" onclick="fetchAllJobs()">
                    <img class="pb-1" src="public/assets/icons/work-pink.png" alt="" width="22"> Jobs
                </button>
            </div>    
    `;
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
    } else {
        return '<img class="pe-1 pb-1" src="public/assets/icons/error-red.png" alt="" width="25">';
    }


}

function header(title) {
    return `
        <div class="bm-header-primary">
            <h5 class="">${title}<span class="float-end pe-3 badge bg-light text-primary"></span><span id="jobHeader"</h5>
        </div>  
    `;
}


function printHeader () {
    return `
        <div class="print-header d-flex justify-content-between px-1 pb-0">
            <h4><img class="pe-1 pb-1" src="public/assets/icons/house.png" alt="" width="40"> Backoffice</h4>
                <span class="pull-right hidden-print">
                    <a href="javascript:;" onclick="window.print()" class="btn btn-sm btn-white m-b-10 p-l-5">
                    <img class="pe-1 pb-1" src="public/assets/icons/print.png" alt="" width="30"> 
                    Print
                    </a>
                </span>
        </div>`;
}

function printDiv(divId) {
    var printContents = document.getElementById(divId).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML= printHeader() + printContents;
    window.print();
    location.reload();
}

function getTechName (techId) {
    if (techId == '0') { return 'Admin'}
    if (techId == '1') { return 'Albert'}
    if (techId == '2') { return 'Mike'}
    if (techId == '3') { return 'Tom'}
    if (techId == '4') { return 'Brian'}
    if (techId == '5') { return 'House'}
    else return 'Admin'
}