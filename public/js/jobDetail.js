function fetchJobDetails(jobId){

   handleFetchJobDetails(jobId);
 
    
}


function htmlJobDetails(job) {

    let segment = '';
//  toolbar  
    segment += `
       <div class="print-header justify-content-between px-1 pb-0">



         <div class="d-flex justify-content-start pt-0">

            <button onclick="fetchCustomerRecord(${job[0].custId})" class="btn btn-sm btn-white m-b-10 p-l-5">
               <img class="pb-1" src="public/assets/icons/contact-green.png" alt="" width="22">
                  Customer
               </button>
            


            <div class="print-header d-flex justify-content-between px-1 pb-0">

            <span class="">
               <a href="javascript:;"  onclick="window.print()" class="btn btn-sm btn-white m-b-10 p-l-5">
               <img class="pe-1 pb-1" src="public/assets/icons/print-blue.png" alt="" width="30"> 
                  Print
               </a>
            </span>

            <div class="float-end">
               <a href="javascript:;"  onclick="submitEditJob()" class="btn btn-sm btn-white m-b-10 p-l-5 ">
               <img class="pe-1 pb-1" src="public/assets/icons/save-red.png" alt="" width="30"> 
                  Save
               </a>
            </div>
         </div>
      </div>
   `;
// header
    segment += header('Job Details');
    segment += `  
         <div class="printable" id="workOrder">   
            <div class="customer-banner header row pb-0 ">
   `
   // customer container  
   segment += `
               <div class="customer col-12 col-md-4">
               <div class="bm-job-container bm-bg-gray-light mx-1 px-2 pt-1 mt-1">

                  <input name="custId" id="custId" value="${job[0].custId}" hidden>
                  <input name="jobId" id="jobId" value="${job[0].jobId}" hidden>

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
                           
                  <div class="pb-2">
                     <label for="phone" hidden class="">Phone</label>
                     <input type="text" hidden class="form-control bm-input" id="phone" name="phone">
                  </div>
             
                  
               </div>
            </div>  
   `
   // job container
   segment += `
                  <div class="job col-12 col-md-4">
                     <div class="bm-job-container  bm-bg-gray-light mx-1 px-2 pt-1 mt-1">

                        <div class="w-100">
                           <label for="jName" >Job name</label>
                           <input type="text" class="form-control bm-input" id="jName" name="jName" value="${job[0].jName}">
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

                        <div class="w-100 pb-5 mb-2">
                           <label for="jZip">Job zip</label>
                           <input type="text" class="form-control bm-input mb-2" id="jZip" name="jZip" value="${job[0].jZip}">
                        </div>            

                        
                     </div>
                  </div>
   
   `
   // date container  
   segment += `               
                  <div class="date col-12 col-md-4">
                     <div class="bm-job-container bm-bg-gray-light mx-1 px-2 pt-1 mt-1">
                  
                           <div class="d-flex justify-content-end px-1 pb-1 ">
                              <label for="po" class="text-dark pe-2 text-end me-2"  style="width:140px;">PO</label>
                              <input type="text" class="form-control bm-input text-end" id="po" name="po" value="${job[0].po} ">
                           </div>
                           
                           <div class="d-flex justify-content-end px-1 pb-1 ">
                              <label for="jDate" class="text-dark pe-2 text-end me-2"  style="width:140px;">Date</label>
                              <input type="text" class="form-control bm-input text-end" id="jDate" name="jDate" value="${job[0].jDate}">
                           </div>               

               
               
                        <div class="d-flex justify-content-end px-1 pb-1 ">
                           <label for="progress" class="form-label pe-2 text-end me-2"  style="width:140px;">Status: </label>
                           <select type="text" class="form-control py-1" id="progress" name="progress" required >
                           <option selected class="text-end">${job[0].status}</option>
                              <option value="Estimate">Estimate</option>
                              <option value="Ordered">Ordered</option>
                              <option value="Scheduled">Scheduled</option>
                              <option value="In-Progress">In-Progress</option>
                              <option value="Completed">Completed</option>
                           </select>
                        </div>

                        <div class="d-flex justify-content-end px-1 pb-1 ">
                           <label for="tech" class="form-label pe-2 text-end me-2"  style="width:140px;">Tech: <span class="bm-text-primary">${getTechName(job[0].tech)}</span> </label>
                           <select type="text" class="form-control py-1" id="tech" name="tech" required >
                            <option selected class="text-end">${(job[0].tech)}</option>
                              <option value="0">Admin</option>
                              <option value="1">Albert</option>
                              <option value="2">Mike</option>
                              <option value="3">Tom</option>
                              <option value="4">Brian</option>
                              <option value="5">House</option>
                           </select>
                        </div>           
               
                        <div class="w-100">
                           <label for="jNotes" class="form-label">Job Notes:</label>
                           <textarea type="text" class="form-control mb-2" id="jNotes" placeholder="Notes" name="jNotes" rows="10">${job[0].jNotes.trimStart()}</textarea>
                        </div>
               
               
                     </div>
                  </div>
      

               </div>



               <div class="row mt-3">

                     <div class="col-12 col-md-6 d-flex flex-column flex-nowrap justify-content-start  p-px-3  mt-1 border">
                        <a href=" ${job[0].jImg || 'public/assets/images/placeholder.jpeg'}" target="_blank">
                           <img src="${job[0].jImg || 'public/assets/images/placeholder.jpeg'} " 
                                class="img-fluid img-thumbnail mb-2 px-2" alt="" style="width:600px; height:auto;">
                        </a>

                        <input id="jImg" hidden name="jImg" value="${job[0].jImg || 'public/assets/images/placeholder.jpeg'} " class="form-control small w-100 px-2">
                        
                        <button type="submit" class="btn btn-dark btn-small" data-bs-toggle="modal" data-bs-target="#img1Modal">
                           Upload Image
                        </button>
                     
                     </div>

                     <div class="col-12 col-md-6 d-flex flex-column flex-nowrap justify-content-start  p-px-3  mt-1 border">
                        <a href=" ${job[0].jScope || 'public/assets/images/placeholder.jpeg'}" target="_blank">
                           <img src="${job[0].jScope || 'public/assets/images/placeholder.jpeg'}" id="jImgSrc"
                                 class="img-fluid img-thumbnail mb-2 px-2" alt="" style="width:600px; height:auto;">
                        </a>
                           <input id="jScope" hidden name="jScope" value="${job[0].jScope || 'public/assets/images/placeholder.jpeg'} " class="form-control small w-100 px-2">
                           
                           <button type="submit" class="btn  btn-dark btn-small" data-bs-toggle="modal" data-bs-target="#img2Modal">
                                 Upload Image
                           </button> 
                     </div>            
                     
               </div>

               

                        <div class="modal" id="img1Modal">
                        <div class="modal-dialog">
                           <div class="modal-content">


                              <div class="modal-header">
                              <h4 class="modal-title">Upload Image</h4>
                              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                              </div>


                              <div class="modal-body" id="img1Body">
                              <form ref='uploadForm' 
                                    id='uploadForm' 
                                    action='${host}/upload' 
                                    method='post' 
                                    encType="multipart/form-data">
                                       <input type="file" name="sampleFile" class="form-control" id="fileToUpload"/>
                                       <input hidden type="text" name="keyValue" value="jImg" class="form-control" id="keyValue"/>
                                       <input hidden type="text" name="jobId" value="${job[0].jobId}" class="form-control" id="jobid"/>
                                       <div class="modal-footer">
                                          <button type='submit' value='Upload!' class="mt-1 btn btn-primary">Upload</button>
                                          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                       </div>
                                 </form>   
                              </div>
                           </div>
                        </div>
                        </div>




                        <div class="modal" id="img2Modal">
                        <div class="modal-dialog">
                           <div class="modal-content">


                              <div class="modal-header">
                              <h4 class="modal-title">Scope Image Upload</h4>
                              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                              </div>


                                 <div class="modal-body" id="img2Body">
                                    <form ref='uploadForm' 
                                          id='uploadForm' 
                                          action='${host}/upload' 
                                          method='post' 
                                          encType="multipart/form-data">
                                             <input type="file" name="sampleFile" class="form-control" id="fileToUpload"/>
                                             <input type="text" hidden name="keyValue" value="jScope" class="form-control" id="keyValue"/>
                                             <input type="text" hidden name="jobId" value="${job[0].jobId}" class="form-control" id="jobid"/>
                                              <div class="modal-footer">
                                                <button type='submit' value='Upload!' class="mt-1 btn btn-primary">Upload</button>
                                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                              </div>           
                                    </form>   
                                 </div>


                           </div>
                        </div>
                        </div>
               

               </div>
            </div>   
      `;
    return segment;
}



/* <div class="mx-auto pt-2">
<img src="public/assets/logos/slack-700-400.png" class="img-fluid mb-2 me-2" alt="" style="width:200px; height:130px;">
<div class="small">
  <p class="py-0 my-0">1455 E Pittsburgh McKeesport Blvd<p>
  <span class="py-0 my-0" >North Versailles PA 15666<span>
</div>
</div>   */


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

async function submitEditJob() {

   let custId = document.getElementById('custId').value;
   let fname = document.getElementById('fname').value;
   let lname = document.getElementById('lname').value;
   let address = document.getElementById('address').value;
   let city = document.getElementById('city').value;
   let state = document.getElementById('state').value;
   let zip = document.getElementById('zip').value;   
   let phone = document.getElementById('phone').value;
   let cell = document.getElementById('cell').value;

   let jName = document.getElementById('jName').value;
   let jPo = document.getElementById('po').value;
   let jDate = document.getElementById('jDate').value;
   let jPhone = document.getElementById('jPhone').value;
   let jAddress = document.getElementById('jAddress').value;
   let jCity = document.getElementById('jCity').value;
   let jState = document.getElementById('jState').value;
   let jZip = document.getElementById('jZip').value;
   let jNotes = document.getElementById('jNotes').value;
   let jImg = document.getElementById('jImg').value;
   let jScope = document.getElementById('jScope').value;

   let progress = document.getElementById('progress').value;
   let tech = document.getElementById('tech').value;
   let jobId = document.getElementById('jobId').value;


   let url = `${host}/update-record`;
   let params = `jobId=${jobId}&&jScope=${jScope}&&jImg=${jImg}&&jName=${jName}&&jPo=${jPo}&&jDate=${jDate}&&jPhone=${jPhone}&&jAddress=${jAddress}&&jCity=${jCity}&&jState=${jState}&&tech=${tech}&&jZip=${jZip}&&jNotes=${jNotes}&&status=${progress}&&custId=${custId}&&fname=${fname}&&lname=${lname}&&address=${address}&&city=${city}&&state=${state}&&zip=${zip}&&phone=${phone}&&cell=${cell}`;
   
   customersRoot.innerHTML = '';
   customersRoot.innerHTML = `Loading.....`;
   var xmlhttp = new XMLHttpRequest();
   xmlhttp.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {
 
               customersRoot.innerHTML = fetchJobDetails(jobId) || `<div class="spinner-border text-primary" role="status">
                                                                        <span class="visually-hidden">Loading...</span>
                                                                     </div>`;
               // customersRoot.innerHTML = 'Successfullu updated!'

            }
      };
      
      xmlhttp.open("POST", url, true);
      xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xmlhttp.send(params);

}