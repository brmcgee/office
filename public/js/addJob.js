function addJob(custId) {
    clearMenu();
    customersRoot.innerHTML = addJobFormHtml(custId);  
    console.log(addJobFetchCustomerId(custId))
}

function addJobFormHtml (custId) {
    let html = `
    

    <div id="addJobForm" class="">
    <div class="job-form col-12 mx-auto bm-page m-0 p-0">

        <form action="http://localhost:5200/add-job" method="POST" id="addJob">
        
            <div class="table-type bm-header-primary" id="jobHeader">
                <h5>${custId} Loading...</h5>
            </div>

            <div class="row pb-2 pt-3">

                <div class="col-12 col-md-3">
                    <label for="jName" class="form-label">Job Name:</label>
                    <input type="text" class="form-control" id="jName" name="jName" required>
                </div>

                <div class="col-6 col-md-3">
                    <label for="progress" class="form-label">Status: </label>
                    <select type="text" class="form-control" id="progress" name="progress" required >
                      <option selected>Select option...</option>
                        <option value="Estimate">Estimate</option>
                        <option value="Ordered">Ordered</option>
                        <option value="Scheduled">Scheduled</option>
                        <option value="In-Progress">In-Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>


                <div class="col-6 col-md-3">
                    <label for="jPo" class="form-label">PO #:</label>
                    <input type="text" class="form-control" id="jPo" name="jPo">
                </div>

                <div class="col-6 col-md-3">
                    <label for="jDate" class="form-label">Date:</label>
                    <input type="date" class="form-control" id="jDate" name="jDate" required>
                </div>

                <div class="col-0 col-md-0">
                    <label for="custId" class="form-label" hidden>Cust Id:</label>
                    <input value="${custId}" type="text" class="form-control" id="custId" name="custId" hidden >
                </div>
           
                <div class="col-0 col-md-0">
                    <label for="jobId" class="form-label" hidden>Job Id:</label>
                    <input type="text" class="form-control" id="jobId" name="jobId" hidden>
                </div>

            </div>

            <div class="row pb-2">

                <div class="col-sm-12 col-md-8">
                    <label for="jAddress" class="form-label">Address:
                        
                        <button onclick="fetchCustInfoAddJob(this)" type="button" class="bg-transparent border-0">
                            <label for="jobIsSame" class="small ms-3 bm-bg-primary-light badge rounded">
                                <input type="checkbox" name="jobIsSame" id="jobIsSame">
                                <input type="text" name="custId" value="Same Address" disabled class="bg-transparent border-0">
                            </label>
                        </button>

                    </label>
                    <input type="text" class="form-control" id="jAddress" required name="jAddress">
                </div>

                <div class="col-12 col-sm-4">
                    <label for="jPhone" class="form-label">Phone:</label>
                    <input type="tel" class="form-control" id="jPhone" placeholder="Format: 123-456-7890" name="jPhone"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
                </div>

            </div>

            
            <div class="row pb-2">
                <div class="col-sm-12 col-md-5">
                    <label for="jCity" class="form-label">City:</label>
                    <input type="text" class="form-control" id="jCity" name="jCity" required>
                </div>

                <div class="col-sm-6 col-md-4">
                    <label for="jState" class="form-label">State:</label>
                    <input type="text" class="form-control" id="jState" name="jState" required>
                </div>   
                
                <div class="col-sm-6 col-md-3">
                    <label for="jZip" class="form-label">Zip:</label>
                    <input type="number" class="form-control" id="jZip" name="jZip" required>
                </div>        
            </div>

            <div class="row pb-2">

                <div class="col-sm-12 col-md-6">
                    <label for="jNotes" class="form-label">Notes:</label>
                    <textarea type="text" class="form-control" id="jNotes" placeholder="Notes" name="jNotes" rows="13"></textarea>
                </div>

                <div class="col-sm-12 col-md-6">
                    <label for="products" class="form-label">Products:</label>
                    <textarea type="text" class="form-control" id="products" placeholder="Products" name="products" rows="13"></textarea>
                </div>

            </div>
            <div class="form-footer d-flex justify-content-end">
                <button type="button" class="btn btn-danger me-1" onclick="clearRoot()">Close</button>
                <button type="button" class="btn btn-secondary me-1" onclick="clearJobForm()">Clear</button>
                <button type="button" onclick="handleAddJob()"class="btn btn-primary">Submit</button>
            </div>

      </form>

    </div>
</div>    
    `;
    return html;
}

function handleAddJob() {

    let url = `${host}/add-job`;

    let jName = document.getElementById('jName').value;
    let jPo = document.getElementById('jPo').value;
    let jDate = document.getElementById('jDate').value;
    let jPhone = document.getElementById('jPhone').value;
    let jAddress = document.getElementById('jAddress').value;
    let jCity = document.getElementById('jCity').value;
    let jState = document.getElementById('jState').value;
    let jZip = document.getElementById('jZip').value;
    let jNotes = document.getElementById('jNotes').value;
    let progress = document.getElementById('progress').value;
    let custId = document.getElementById('custId').value;

    if (progress == 'Select option...') { alert('Select job status..'); return;}
    console.log(progress)
    if (jName == '' || jPo == '' || jDate == '' || jAddress == '' || custId == '' || jZip == '' || progress == '') { alert('Enter job details'); return;}

    
    let params = `jName=${jName}&&jPo=${jPo}&&jDate=${jDate}&&jPhone=${jPhone}&&jAddress=${jAddress}&&jCity=${jCity}&&jState=${jState}
                    &&jZip=${jZip}&&jNotes=${jNotes}&&progress=${progress}&&custId=${custId}`;
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {
                console.log('added')

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                customersRoot.innerHTML = getJobsByCustomers(custId);
                var $myForm = $("#addJob");
                $myForm.submit(function(){
                    $myForm.submit(function(){
                        return false;
                    });
                });
            }
      };
      
      xmlhttp.open("POST", url, true);
      xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xmlhttp.send(params);

    console.log(params)

}

async function addJobFetchCustomerId (custId){
    
    let urlCId = `${host}/customers/${custId}`;
   
    try {
        const response = await fetch(urlCId);
        let html = ``;
        try {
            const data = await response.json();
            document.getElementById('jobHeader').innerHTML = htmlAddJobFetchCustomerId(data);
            return;

        }
        catch (parseError) {
            console.log('Failed to parse JSON: ' + parseError);
        }
    } catch (networkError) {
        console.log('Network request failed: ', networkError);
        
    }  
    
}


function htmlAddJobFetchCustomerId(data){

    let html = `
            <h5 class="py-1">${(data[0].fname + ' ' + data[0].lname) || (data.fname + '' + data.lname)} </h5>
    `;

    return html;
}

function clearJobForm(){

    let jName = document.getElementById('jName').value = '';
    let jPo = document.getElementById('jPo').value = '';
    let jDate = document.getElementById('jDate').value = '';
    let jPhone = document.getElementById('jPhone').value = '';
    let jAddress = document.getElementById('jAddress').value = '';
    let jCity = document.getElementById('jCity').value = '';
    let jState = document.getElementById('jState').value = '';
    let jZip = document.getElementById('jZip').value = '';
    let jNotes = document.getElementById('jNotes').value = '';
    let progress = document.getElementById('progress').value = '';
    let custId = document.getElementById('custId').value = '';
}