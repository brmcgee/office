function fetchCustomerRecord (custId) {
    customersRoot.innerHTML = customerRecordHeader(custId);
    customersRoot.innerHTML += htmlCustomerRecordForm(custId);
    

    
    handleFetchCustomerRecord (custId);
    // in async function gets data and populates addCustomerForm
    // populateCustomerForm(data);

    

    // adds jobs 
    handleFetchJobsList(custId)
   
}

async function handleFetchCustomerRecord(custId) {
    let url = `${host}/customers/${custId}`;
    
    try {
            let html = '';
            const response = await fetch(url);
                try {
                    const data = await response.json()

                    populateCustomerForm(data);
                    

                } 
                catch (parseError) {
                    console.log(`Failed to parse JSON: ${parseError}`);
                }

        } catch (networkError) {
            console.log(`Network request failed: ${networkError}`)
    }

}

function populateCustomerForm(data) {
  

    let custId = document.getElementById('custId').value = data[0].custId;
    let fname = document.getElementById('fname').value = data[0].fname;
    let lname = document.getElementById('lname').value = data[0].lname;
    let date = document.getElementById('date').value = data[0].date;
    let address = document.getElementById('address').value = data[0].address;
    let city = document.getElementById('city').value = data[0].city;
    let state = document.getElementById('state').value = data[0].state;
    let zip = document.getElementById('zip').value = data[0].zip;   
    let phone = document.getElementById('phone').value = data[0].phone;
    let cell = document.getElementById('cell').value = data[0].cell;
    let notes = document.getElementById('notes').value = data[0].notes;
    let img = document.getElementById('img').value = data[0].img;
    let email = document.getElementById('email').value = data[0].email;



}

/* <button type="button" onclick="handleFetchJobsList(${custId})" class="btn btn-transparent border-0  btn-sm  m-b-10 p-l-5 me-3 text-success">
<img class="pe-1 pb-1" src="public/assets/icons/open-green.png" alt="" width="30">
    Get Jobs
</button> */

function htmlCustomerRecordForm (custId) {
    let html = `
    
             <div id="addCustomerForm" class="m-0 p-0">
                <div class="add-customer col-12 mx-auto bm-page">
        
                    <form id="addCustomer" class="">
                    
                        ${header('Customer Record ')}
            
                        <div class="row pb-2 pt-3 bm-bg-gray-light mx-1 px-2 pt-1 mt-1">
            
                            <div class="col-sm-12 col-md-3">
                                <label for="fname" class="form-label">First:</label>
                                <input type="text" class="form-control" id="fname" name="fname" required>
                            </div>
                    
                            <div class="col-sm-12 col-md-3">
                                <label for="lname" class="form-label">Last:</label>
                                <input type="text" class="form-control" id="lname" name="lname" required>
                            </div>
                      
                            <div class="col-sm-4 col-md-3">
                                <label for="custId" hidden class="form-label">Cust Id:</label>
                                <input type="text" hidden class="form-control w-25" id="custId" name="custId" disabled>
                                            
                                
                                <button type="button" onclick="handleFetchJobsList(${custId})" 
                                                        class=" d-none btn btn-transparent border-0  btn-sm  m-b-10 p-l-5 me-3 bm-text-primary fs-6">
                                                <img class="pe-1 pb-1 " src="public/assets/icons/view-blue-dk.png" alt="" width="30">
                                              View Jobs
                                            </button>         

                            </div>
                      
                            <div class="col-sm-8 col-md-3">
                                <label for="date" class="form-label">Date:</label>
                                <input type="text" class="form-control" id="date" required name="date">
                            </div>
        

            
                        </div>
                        
            
            
                        <div class="row pb-2 bm-bg-gray-light mx-1 px-2 pt-1 mt-1">
        
                            <div class="col-sm-12 col-md-6">
                                <label for="address" class="form-label">Address:</label>
                                <input type="text" class="form-control" id="address" required name="address">
                            </div>
        
                            <div class="col-sm-12 col-md-6">
                                <label for="email" class="form-label">Email:</label>
                                <input type="email" class="form-control" id="email" name="email">
                            </div>
               
                        </div>  
                        
                        
                        <div class="row pb-2 bm-bg-gray-light mx-1 px-2 pt-1 mt-1">
            
                            <div class="col-12 col-sm-6">
                                <label for="phone" class="form-label">Phone:</label>
                                <input type="tel" class="form-control" id="phone" required placeholder="Format: 123-456-7890" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
                            </div>
            
                            <div class="col-12 col-sm-6">
                                <label for="cell" class="form-label">Cell:</label>
                                <input type="tel" class="form-control" id="cell" placeholder="Format: 123-456-7890" name="cell" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
                            </div>
            
            
                        </div>                    
                        
                        <div class="row pb-2 bm-bg-gray-light mx-1 px-2 pt-1 mt-1">
                            <div class="col-sm-12 col-md-6">
                                <label for="city" class="form-label">City:</label>
                                <input type="text" class="form-control" id="city" name="city">
                            </div>
            
                            <div class="col-sm-6 col-md-3">
                                <label for="state" class="form-label">State:</label>
                                <input type="text" class="form-control" id="state" name="state">
                            </div>   
                            
                            <div class="col-sm-6 col-md-3">
                                <label for="zip" class="form-label">Zip:</label>
                                <input type="text" class="form-control" id="zip"  name="zip">
                            </div>        
                        </div>
            
                        <div class="row pb-2 pt-1 m-0 mt-1"style="">
                            <div class="col-sm-12 col-md-5">
                                <label for="notes" class="form-label">Notes:</label>
                                <textarea type="text" class="form-control" id="notes" placeholder="Notes" name="notes" rows="16"></textarea>
                            </div>
            
                            <div class="col-sm-12 col-md-7 d-sm-block">
                            


                                        <label for="jobList" class="form-label"></label>



                                        <div id="jobList" class="form-control"style="height:345px;overflow-y:scroll;">
                                        

                                        
                                        
                                        </div>


                                <label for="img" class="form-label">Img url</label>
                                <input type="text" class="form-control" id="img"  name="img">

                            </div>
            
                        </div>
                        <div class="form-footer d-flex justify-content-end">

                            <div class="btn-group">
                                <button type="button" class="btn btn-danger  btn-sm  m-b-10 p-l-5" onclick="clearRoot()">Close</button>
                            </div>
                        </div>
            
                  </form>
            
                </div>
            </div>   
    
    
    `;
    return html;
}

function handleUpdateCustomerRecord() {


    let custId = document.getElementById('custId').value;
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    let zip = document.getElementById('zip').value;   
    let phone = document.getElementById('phone').value;
    let cell = document.getElementById('cell').value;
    let email = document.getElementById('email').value;
    let notes = document.getElementById('notes').value
    let date = document.getElementById('date').value;
    let img = document.getElementById('img').value
  
    alert('Need to handle add to db - data recieved :' + custId + '/' + fname)
}



async function handleFetchJobsList(custId) {
   
    let jobListRoot = document.getElementById('jobList');
    let url = `${host}/jobs/${custId}`;
    // console.log(url)
    try {
        const response = await fetch(url);
        
        let html = ``;
        try {
            const data = await response.json();
              
                if (data.length == 0) { 
                    jobListRoot.innerHTML =`<p class='bm-alert-info'>No jobs found for customer....</p>
                                                        <button id="${custId}" class="btn btn-sm  m-b-10 p-l-5" type="button" onclick="addJob(this.id)">
                                                            <img class="pb-1" src="public/assets/icons/circle-blue-add.png" alt="" width="20">
                                                                New Job
                                                        </button>`
                    // jobListRoot.innerHTML += fetchCustomerRecord(custId);
                    return;
                 }

                jobListRoot.innerHTML = recordCustomerTemplate(data);

        }
        catch (parseError) {
            
           
            customersRoot.innerHTML = `<p class='bm-alert-warning'>Network Error ${parseError}</p>`
            console.log('Failed to parse JSON: ' + parseError);
        }
    } catch (networkError) {
        console.log('Network request failed: ', networkError);
        
    }  
    // fetchCustomerById(custId);

}




function recordCustomerTemplate(jobs) {

    let html = '';
    html += `

        <div class=" col-12 mx-auto ">

            <div class="bm-header-primary">
                <h5 class="">Job lists: <span id="jobHeader"></span>
                        <span class="float-end pe-3 badge bg-light text-primary"> Total: ${jobs.length}</span>
                </h5>
            </div>
            
            <table class="table table-stripe">
                <thead class="thead">
                    <tr>
                        <th>Job PO</th>
                        <th scope="col">Address</th>
                        <th scope="col">Date</th> 
                        <th scope="col">Status</th> 
                    </tr>
                </thead>
                <tbody>`;

    if (jobs.length > 1) {

        jobs.forEach(c => {
            html += recordCustomerTemplateInner(c);
        });

    } else {
        html += recordCustomerTemplateInnerSingle(jobs)
    }


    html += `  </tbody>
            </table>`;

    return html;
}

function recordCustomerTemplateInnerSingle(job) {

    let html = '';
    html += `
                <tr>
                    <td>
                        <button type="button" onclick="fetchJobDetails(${job[0].jobId})" class="btn btn-transparent border-0  btn-sm me-0 bm-text-primary">
                            ${job[0].po}
                        </button> 
                    </td>
                    <td><small>${job[0].jAddress} ${job[0].jCity}</small></td>
                    <td><small>${job[0].jDate}</small></td>   
                    <td>${getIcon(job[0].status)}<small>${job[0].status}</small></td>                  
                </tr> 
            </div>  
            `;
    return html;
}
function recordCustomerTemplateInner(job) {

    let html = '';
    html += `

                <tr>
                    <td><button type="button" onclick="fetchJobDetails(${job.jobId})" class="btn btn-transparent border-0  btn-sm  m-b-10 p-l-5 me-3 text-primary">
                            ${job.po}
                        </button> 
                    </td>
                    <td><small>${job.jAddress} ${job.jCity}</small></td>
                    <td><small>${job.jDate}</small></td> 
                    <td>${getIcon(job.status)}<small>${job.status}</small></td>                    
                </tr> 
            </div>  
            `;
    return html;
}




function customerRecordHeader(custId) {
    return `
    
    
    
 <div class="print-header justify-content-between px-1 pb-0">



         <div class="d-flex justify-content-start pt-1">
            <button id="1" class="btn btn-sm  m-b-10 p-l-5" type="button" onclick="getJobsByCustomers(${custId})">
               <img class="pb-1" src="public/assets/icons/leaderboard-green.png" alt="" width="22">
               Details
            </button>

            <button id="${custId}" class="btn btn-sm  m-b-10 p-l-5" type="button" onclick="addJob(this.id)">
                <img class="pb-1" src="public/assets/icons/circle-blue-add.png" alt="" width="20">
                New
            </button>


            <div class="print-header d-flex justify-content-between px-1 pb-0">

            <span class="">
               <a href="javascript:;"  onclick="window.print()" class="btn btn-sm  m-b-10 p-l-5">
               <img class="pe-1 pb-1" src="public/assets/icons/print-blue.png" alt="" width="30"> 
                  Print
               </a>
            </span>

            <div class="float-end">
               <a href="javascript:;"  onclick="handleUpdateCustomerRecord()" class="btn btn-sm m-b-10 p-l-5">
               <img class="pe-1 pb-1" src="public/assets/icons/save-red.png" alt="" width="30"> 
                  Save
               </a>
            </div>
         </div>
      </div>    
    
    `
}




