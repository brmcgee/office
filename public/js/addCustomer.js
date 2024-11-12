function addCustomer() {
    clearMenu();
    customersRoot.innerHTML = addCustomerFormHtml();  
}

function addCustomerFormHtml () {
    let html = `
    
             <div id="addCustomerForm" class="m-0 p-0">
                <div class="add-customer col-12 mx-auto bm-page">
        
                    <form action="http://localhost:5200/add-customer" method="POST" id="addCustomer">
                    
                        ${header('Add Customer')}
            
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
                                <input type="date" class="form-control" id="date" required name="date">
                            </div>
        
                            <div class="col-sm-4 col-md-2">
                                <label for="custId" class="form-label">CustId:</label>
                                <input type="text" class="form-control" id="custId"  name="custId" disabled>
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
                                <textarea type="text" class="form-control" id="jobList" placeholder="Job list" name="jobList" rows="13">
                                </textarea>
                            </div>
            
                        </div>
                        <div class="form-footer d-flex justify-content-end">
                            <button type="button" class="btn btn-danger me-1" onclick="clearRoot()">Close</button>
                            <button type="button" class="btn btn-secondary me-1" onclick="clearCustomerForm()">Clear</button>
                            <button type="button" onclick="handleAddCustomer()" class="btn btn-primary">Submit</button>
                        </div>
            
                  </form>
            
                </div>
            </div>   
    
    
    `;
    return html;
}

function handleAddCustomer() {

    let url = `${host}/add-customer`;

    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    let zip = document.getElementById('zip').value;
    let date = document.getElementById('date').value;
    let notes = document.getElementById('notes').value;
    let phone = document.getElementById('phone').value;
    let cell = document.getElementById('cell').value;
    let custId = '';

    if (fname == '' || lname == '' || address == '' || city == '' || state == '' || date == '' || phone == '') { alert('Enter job details'); return;}

    let params = `fname=${fname}&&lname=${lname}&&address=${address}&&city=${city}&&state=${state}&&zip=${zip}&&date=${date}
                    &&notes=${notes}&&phone=${phone}&&custId=${custId}&&cell=${cell}`;
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {
                console.log('added')

                customersRoot.innerHTML = '<div class="bm-alert-success">Successfully added customer...</div> '
                var $myForm = $("#addCustomer");
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


}


function clearCustomerForm(){
    let fname = document.getElementById('fname').value = '';
    let lname = document.getElementById('lname').value = '';
    let address = document.getElementById('address').value = '';
    let city = document.getElementById('city').value = '';
    let state = document.getElementById('state').value = '';
    let zip = document.getElementById('zip').value = '';
    let date = document.getElementById('date').value = '';
    let notes = document.getElementById('notes').value = '';
    let phone = document.getElementById('phone').value = '';
    let cell = document.getElementById('cell').value = '';
}