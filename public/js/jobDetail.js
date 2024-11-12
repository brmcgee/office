function htmlJobDetails() {

    let html = printHeader();
    
    
    
    html += `
    
   
   <div class="customer-banner header row pb-5 ps-2">

      <div class="job col-6 col-sm-4">
         <div class="bm-job-container">

            <div class="w-100">
               <label for="jname">Job name</label>
               <input type="text" class="form-control bm-input" id="jname" name="jname">
            </div>

            <div class="w-100">
               <label for="jPhone">Job phone</label>
               <input type="text" class="form-control bm-input" id="jPhone" name="jPhone">
             </div>       

            <div class="w-100">
               <label for="jAddress">Job address</label>
               <input type="text" class="form-control bm-input" id="jAddress" name="jAddress">
            </div>             
   
            <div class="w-100">
               <label for="phone">Phone</label>
               <input type="text" class="form-control bm-input" id="phone" name="phone">
             </div>
    
   
            <div class="w-100">
               <label for="cell">Cell</label>
               <input type="text" class="form-control bm-input" id="cell" name="cell">
             </div>   
   

             
         </div>
      </div>
      
      <div class="date col-6 col-md-4">
         <div class="bm-job-container">
        
            <div class="row">
               <div class="w-50">
                  <label for="jDate">Date</label>
                  <input type="text" class="form-control bm-input" id="jDate" name="jDate">
                </div>
      
      
               <div class="w-50">
                  <label for="jPo">PO</label>
                  <input type="text" class="form-control bm-input" id="jPo" name="jPo">
                </div>
            </div>

    
   
            <div class="w-100">
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
   
   
            <div class="w-100">
               <label for="jNotes" class="form-label">Notes:</label>
               <textarea type="text" class="form-control" id="jNotes" placeholder="Notes" name="jNotes" rows="5"></textarea>
             </div>
   
   
         </div>
      </div>

      <div class="customer col-12 col-md-4">
         <div class="bm-job-container">
        
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
             
         </div>
      </div>      

   </div>


   
   <div class="d-flex flex-wrap justify-content-between">
         <div class="mx-auto">
            <img src="public/assets/images/placeholder.jpeg" class="img-fluid mb-2 me-2" alt="" style="width:290px; height:220px;">
         </div>
         <div class="mx-auto">
            <img src="public/assets/images/placeholder.jpeg" class="img-fluid mb-2 me-2" alt="" style="width:290px; height:220px;">
         </div>

         
   </div>
    
    `;
    
    customersRoot.innerHTML = html;

    return html;
}