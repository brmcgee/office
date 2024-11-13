function fetchJobDetails(jobId){

   handleFetchJobDetails(jobId);
 
    
}


function htmlJobDetails(job) {


    let segment = '';
    segment += printHeader();
    segment += header('Job Details');
   
    segment += `
      
         <div class="bg-white py-3">   
            <div class="customer-banner header row pb-5">






            <div class="customer col-12 col-md-4">
            <div class="bm-job-container bm-bg-gray-light ms-1 px-2 pb-1">
         
               <div class="w-100">
                  <label for="fname">First</label>
                  <input type="text" class="form-control bm-input" id="fname" name="fname">
               </div>
      
      
               <div class="w-100">
                  <label for="lname">Last</label>
                  <input type="text" class="form-control bm-input" id="lname" name="lname">
               </div>
      
      
               <div class="w-100">
                  <label for="address">Address</label>
                  <input type="text" class="form-control bm-input" id="address" name="address">
               </div>
      
      
               <div class="w-100">
                  <label for="city">City</label>
                  <input type="text" class="form-control bm-input" id="city" name="city">
               </div>
      
      
               
               <div class="w-100">
                  <label for="state">State</label>
                  <input type="text" class="form-control bm-input" id="state" name="state">
               </div>

               <div class="w-100">
                  <label for="zip">Zip</label>
                  <input type="text" class="form-control bm-input" id="zip" name="zip">
               </div>

               <div class="w-100">
                  <label for="cell">Cell</label>
                  <input type="text" class="form-control bm-input" id="cell" name="cell">
               </div>  
                          
            
               
            </div>
         </div>  

               <div class="job col-12 col-md-4">
                  <div class="bm-job-container  px-2 pb-2">

                     <div class="bm-bg-gray-light d-flex justify-content-end pb-1 py-3 px-1 ">
                        <label for="phone" class="pe-2">Phone</label>
                        <input type="text" class="form-control bm-input" id="phone" name="phone">
                     </div>

                     <div class="w-100">
                        <label for="jname" >Job name</label>
                        <input type="text" class="form-control bm-input" id="jname" name="jname" value="${job[0].jName}">
                     </div>

                     <div class="w-100">
                        <label for="jPhone">Job phone</label>
                        <input type="text" class="form-control bm-input" id="jPhone" name="jPhone" value="${job[0].jPhone}">
                     </div>  
      
                     <div class="w-100">
                        <label for="jCity">Job address</label>
                        <input type="text" class="form-control bm-input" id="jAddress" name="jAddress" value="${job[0].jAddress}">
                     </div>  

                     <div class="w-100">
                        <label for="jCity">Job city</label>
                        <input type="text" class="form-control bm-input" id="jCity" name="jCity" value="${job[0].jCity}">
                     </div>  

                     <div class="w-100">
                        <label for="jState">Job state</label>
                        <input type="text" class="form-control bm-input" id="jState" name="jState" value="${job[0].jState}">
                     </div>  

                     <div class="w-100">
                        <label for="jZip">Job zip</label>
                        <input type="text" class="form-control bm-input" id="jZip" name="jZip" value="${job[0].jZip}">
                     </div>            

                     
                  </div>
               </div>
               
               <div class="date col-12 col-md-4">
                  <div class="bm-job-container px-2 pb-2 pt-2 me-1 bm-bg-gray-light">
               
                    
                        
                        <div class="d-flex justify-content-end px-1 pb-1 ">
                           <label for="jDate" class="text-dark pe-2">Date</label>
                           <input type="text" class="form-control bm-input" id="jDate" name="jDate" value="${job[0].jDate}">
                        </div>
               
               
                        <div class="d-flex justify-content-end px-1 pb-1 ">
                           <label for="po" class="text-dark pe-2">PO</label>
                           <input type="text" class="form-control bm-input" id="po" name="po" value="${job[0].po} ">
                        </div>
                 

            
            
                     <div class="d-flex justify-content-end px-1 pb-1 ">
                        <label for="progress" class="form-label text-primary pe-2">Status: </label>
                        <select type="text" class="form-control py-1" id="progress" name="progress" required >
                        <option selected>${job[0].status}</option>
                           <option value="Estimate">Estimate</option>
                           <option value="Ordered">Ordered</option>
                           <option value="Scheduled">Scheduled</option>
                           <option value="In-Progress">In-Progress</option>
                           <option value="Completed">Completed</option>
                        </select>
                     </div>
            
            
                     <div class="w-100">
                        <label for="jNotes" class="form-label">Job Notes:</label>
                        <textarea type="text" class="form-control" id="jNotes" placeholder="Notes" name="jNotes" rows="10">${job[0].jNotes.trimStart()}</textarea>
                     </div>
            
            
                  </div>
               </div>
    

            </div>


            
            <div class="d-flex flex-wrap justify-content-between">
                  <div class="mx-auto">
                     <img src="public/assets/images/placeholder.jpeg" class="img-fluid mb-2 me-2" alt="" style="width:300px; height:230px;">
                  </div>
                  <div class="mx-auto">
                     <img src="public/assets/images/placeholder.jpeg" class="img-fluid mb-2 me-2" alt="" style="width:300px; height:230px;">
                  </div>

                  
            </div>
            <div class="btn-group pt-1">
               <button id="1" class="bg-transparent border-0 pe-5" type="button" onclick="getJobsByCustomers(${job[0].custId})">
                  <img class="pb-1" src="public/assets/icons/folder-green.png" alt="" width="22">
                  Customer Jobs
               </button>
               ${customersButton()}
               ${jobsButton()}
            </div>
         </div>   
    `;

    return segment;
}

async function handleFetchJobDetails(jobId) {

   let url = `${host}/job/${jobId}`;


   try {
       const response = await fetch(url);
       let html = ``;
       try {
           const data = await response.json();

            customersRoot.innerHTML = htmlJobDetails(data);
            fetchCustomer(data[0].custId)

       }
       catch (parseError) {
           customersRoot.innerHTML = `<p class='bm-alert-warning'>Network Error ${parseError}</p>`
           console.log('Failed to parse JSON: ' + parseError);
       }
   } catch (networkError) {
       console.log('Network request failed: ', networkError);
       
   } 

}

async function fetchCustomer (custId){
    
   
    let url = `${host}/customers/${custId}`;
   
    try {
        const response = await fetch(url);
        let html = ``;
        try {
            const data = await response.json();
            console.log(data)
            addCustomerToJobDetails(data)
            return;

        }
        catch (parseError) {
            console.log('Failed to parse JSON: ' + parseError);
        }
    } catch (networkError) {
        console.log('Network request failed: ', networkError);
        
    }  
    
}

function addCustomerToJobDetails(customer){
   let fname = document.getElementById('fname').value = customer[0].fname;
   let lname = document.getElementById('lname').value= customer[0].lname;
   let address = document.getElementById('address').value = customer[0].address;
   let city = document.getElementById('city').value = customer[0].city;
   let state = document.getElementById('state').value = customer[0].state;
   let phone = document.getElementById('phone').value = customer[0].phone;
   let cell = document.getElementById('cell').value = customer[0].cell;
   let zip = document.getElementById('zip').value = customer[0].zip;
   return;
}