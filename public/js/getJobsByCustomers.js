function getJobsByCustomers(custId) {
    clearMenu();
    handleGetJobsByCustomer(custId);

    
    
}

async function handleGetJobsByCustomer(custId) {
    customersRoot.innerHTML = ''
    let urlfc = `${host}/jobs/${custId}`;
    try {
        const response = await fetch(urlfc);
        let html = ``;
        try {
            const data = await response.json();
              
                if (data.length == 0) { 
                    customersRoot.innerHTML =`<p class='bm-alert-info'>No jobs found....</p>`
                    customersRoot.innerHTML += `<div class="d-flex justify-content-center">
                                                    <button id="${custId}" class="bg-transparent border-0" type="button" onclick="fetchCustomerList()">
                                                        <img class="pb-1" src="public/assets/icons/blue-rocket.png" alt="" width="22"> Customer List
                                                    </button>
                                                </div>`
                    return;
                 }
                html += jobByCustomerTemplate(data) 
                customersRoot.innerHTML += html;
        
        }
        catch (parseError) {
            
           
            customersRoot.innerHTML = `<p class='bm-alert-warning'>Network Error ${parseError}</p>`
            console.log('Failed to parse JSON: ' + parseError);
        }
    } catch (networkError) {
        console.log('Network request failed: ', networkError);
        
    }  
    fetchCustomerById(custId);
}


async function fetchCustomerById (custId){
    
    let urlCId = `${host}/customers/${custId}`;
   
    try {
        const response = await fetch(urlCId);
        let html = ``;
        try {
            const data = await response.json();
            document.getElementById('jobHeader').innerHTML =  (data[0].fname + ' ' + data[0].lname)
            return;

        }
        catch (parseError) {
            console.log('Failed to parse JSON: ' + parseError);
        }
    } catch (networkError) {
        console.log('Network request failed: ', networkError);
        
    }  
    
}


function jobByCustomerTemplate(jobs) {

    let html = '';
    html += `

        <div class=" col-12 mx-auto  bm-page">

            <div class="bm-header-primary">
                <h5 class="">Job lists: <span id="jobHeader"></span>
                        <span class="float-end pe-3 badge bg-light text-primary"> Total: ${jobs.length}</span>
                </h5>
            </div>
            
            <table class="table table-stripe">
                <thead class="thead">
                    <tr>
                        <th scope="col">View</th>
                        <th scope="col">Jobname</th>
                        <th scope="col">Address</th>
                        <th scope="col">Date</th> 
                        <th scope="col">Status</th> 
                    </tr>
                </thead>
                <tbody>`;

    if (jobs.length > 1) {

        jobs.forEach(c => {
            html += jobByCustomerTemplateInner(c);
        });

    } else {
        html += jobByCustomerTemplateInnerSingle(jobs)
    }


    html += `  </tbody>
            </table>`;

    return html;
}

function jobByCustomerTemplateInnerSingle(job) {

    let html = '';
    html += `
                <tr>
                    <th scope="row">
                        <button onclick="fetchJobDetails(this.id)" id="${job[0].jobId}" class="bg-transparent border-0">
                            <img class="pb-1" src="public/assets/icons/open-green.png" alt="" width="22">
                        </button>
                    </th>
                    <td>${job[0].jName}</td>
                    <td>${job[0].jAddress} ${job[0].jCity}</td>
                    <td>${job[0].jDate}</td>   
                    <td>${getIcon(job[0].status) }${job[0].status}</td>                  
                </tr> 
            </div>  
            `;
    return html;
}
function jobByCustomerTemplateInner(job) {

    let html = '';
    html += `
                <tr>
                    <th scope="row">
                        <button onclick="fetchJobDetails(this.id)" id="${job.jobId}" class="bg-transparent border-0">
                            <img class="pb-1" src="public/assets/icons/open-green.png" alt="" width="22">
                        </button>
                    </th>
                    <td>${job.jName}</td>
                    <td>${job.jAddress} ${job.jCity}</td>
                    <td>${job.jDate}</td> 
                    <td>${getIcon(job.status)}${job.status}</td>                    
                </tr> 
            </div>  
            `;
    return html;
}