function fetchCustomerRecord (custId) {
    customersRoot.innerHTML = customerRecordHeader(custId);
    customersRoot.innerHTML += htmlCustomerRecordForm(custId);

    handleFetchCustomerRecord (custId);
    // in async function gets data and populates addCustomerForm
    populateCustomerForm(data);

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


function htmlCustomerRecordForm (custId) {
    let html = `
    
             <div id="addCustomerForm" class="m-0 p-0">
                <div class="add-customer col-12 mx-auto bm-page">
        
                    <form action="http://localhost:5200/add-customer" method="POST" id="addCustomer">
                    
                        ${header('Customer Record')}
            
                        <div class="row pb-2 pt-3">
            
                            <div class="col-sm-12 col-md-3">
                                <label for="fname" class="form-label">First:</label>
                                <input type="text" class="form-control" id="fname" name="fname" required>
                            </div>
                    
                            <div class="col-sm-12 col-md-3">
                                <label for="lname" class="form-label">Last:</label>
                                <input type="text" class="form-control" id="lname" name="lname" required>
                            </div>
            
                            <div class="col-sm-8 col-md-4">
                                <label for="date" class="form-label">Date:</label>
                                <input type="text" class="form-control" id="date" required name="date">
                            </div>
        
                            <div class="col-sm-4 col-md-2">
                                <label for="custId" class="form-label">Cust Id:</label>
                                <input type="text" class="form-control" id="custId" name="custId" disabled>
                            </div>
            
                        </div>
            
                        <div class="row pb-2">
            
                            <div class="col-12 col-sm-6">
                                <label for="phone" class="form-label">Phone:</label>
                                <input type="tel" class="form-control" id="phone" required placeholder="Format: 123-456-7890" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
                            </div>
            
                            <div class="col-12 col-sm-6">
                                <label for="cell" class="form-label">Cell:</label>
                                <input type="tel" class="form-control" id="cell" placeholder="Format: 123-456-7890" name="cell" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
                            </div>
            
            
                        </div>
            
                        <div class="row pb-2">
        
                            <div class="col-sm-12 col-md-6">
                                <label for="address" class="form-label">Address:</label>
                                <input type="text" class="form-control" id="address" required name="address">
                            </div>
        
                            <div class="col-sm-12 col-md-6">
                                <label for="email" class="form-label">Email:</label>
                                <input type="email" class="form-control" id="email" name="email">
                            </div>
               
                        </div>    
                        
                        <div class="row pb-2">
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
            
                        <div class="row pb-2">
                            <div class="col-sm-12 col-md-6">
                                <label for="notes" class="form-label">Notes:</label>
                                <textarea type="text" class="form-control" id="notes" placeholder="Notes" name="notes" rows="13"></textarea>
                            </div>
            
                            <div class="col-sm-12 col-md-6 d-none d-sm-block">
                                <label for="jobList" class="form-label">Job List:</label>
                                <textarea type="text" class="form-control" id="jobList" placeholder="Job list" name="jobList" rows="10">
                                </textarea>

                                <label for="img" class="form-label">Img url</label>
                                <input type="text" class="form-control" id="img"  name="img">

                            </div>
            
                        </div>
                        <div class="form-footer d-flex justify-content-end">

                            <button type="button" onclick="getJobsByCustomers(${custId})" class="btn btn-dark me-2">
                                <img class="pe-1 pb-1" src="public/assets/icons/open-green.png" alt="" width="25">
                                    Open
                            </button>

                            <div class="btn-group">
                            <button type="button" class="btn btn-danger" onclick="clearRoot()">Close</button>
                            <button type="button" class="btn btn-secondary" onclick="clearCustomerForm()">Clear</button>
                            </div>
                        </div>
            
                  </form>
            
                </div>
            </div>   
    
    
    `;
    return html;
}

function handleUpdateCustomerRecord() {

    alert('need to update record in backend')
}




function customerRecordHeader(custId) {
    return `
    
    
    
 <div class="print-header justify-content-between px-1 pb-0">



         <div class="d-flex justify-content-start pt-1">
            <button id="1" class="bg-transparent border-0 pe-2" type="button" onclick="getJobsByCustomers(${custId})">
               <img class="pb-1" src="public/assets/icons/open-green.png" alt="" width="22">
               Open
            </button>

            ${customersButton()}


            <div class="print-header d-flex justify-content-between px-1 pb-0">

            <span class="">
               <a href="javascript:;"  onclick="window.print()" class="btn btn-sm btn-white m-b-10 p-l-5">
               <img class="pe-1 pb-1" src="public/assets/icons/print-blue.png" alt="" width="30"> 
                  Print
               </a>
            </span>

            <div class="float-end">
               <a href="javascript:;"  onclick="alert('handle save needs added to db ... bm')" class="btn btn-sm btn-white m-b-10 p-l-5">
               <img class="pe-1 pb-1" src="public/assets/icons/save-red.png" alt="" width="30"> 
                  Save
               </a>
            </div>
         </div>
      </div>    
    
    `
}