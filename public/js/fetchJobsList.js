function fetchJobsList(){

    let custId = handleFetchJobsList(customersRoot);
    fetchCustomerById(custId)
    
}

async function handleFetchJobsList(target) {
    customersRoot.innerHTML = ''
    let urlj = `http://localhost:5200/jobs`;
    try {
        const response = await fetch(urlj);
        let html = ``;
        try {
            const data = await response.json();
                clearRoot();
                html += jobsTemplate(data) 
                customersRoot.innerHTML += html;  
                return custId;

        }
        catch (parseError) {
            customersRoot.innerHTML = `<p class='alert alert-warning'>Network Error ${parseError}</p>`
            console.log('Failed to parse JSON: ' + parseError);
        }
    } catch (networkError) {
        console.log('Network request failed: ', networkError);
        
    }  
}

async function fetchCustomerById (custId){

    let urlCId = `http://localhost:5200/customers/${custId}`;
    try {
        const response = await fetch(urlCId);
        let html = ``;
        try {
            const data = await response.json();
                
                console.log('this')
                document.getElementById('jobHeader').innerHTML = data.fname
                return;

        }
        catch (parseError) {
            console.log('Failed to parse JSON: ' + parseError);
        }
    } catch (networkError) {
        console.log('Network request failed: ', networkError);
        
    }  
    
}


function jobsTemplate(jobs) {
    let html = '';
    html += `

        <div class=" col-12 mx-auto  bm-page">

            <div class="bm-header-primary">
                <h5 class="">Job lists for customer name <span id="jobHeader"</h5>
                <h5 class="">Job lists for customer id ${jobs[0].custId || jobs.custId }</h5>
            </div>
            
            <table class="table table-stripe">
                <thead class="thead">
                    <tr>
                        <th scope="col">Job Id</th>
                        <th scope="col">Cust Id</th>
                        <th scope="col">Jobname</th>
                        <th scope="col">Address</th>
                        <th scope="col">City</th>
                        <th scope="col">Phone</th> 
                    </tr>
                </thead>
                <tbody>`;
    if (jobs.length > 1) {
        jobs.forEach(c => {
            html += jobTemplateInner(c);
        });
    } else {
        html += jobTemplateInner(jobs)
    }


    html += `  </tbody>
            </table>`;

    return html;
}

function jobTemplateInner(job) {
    let html = '';
    html += `
                <tr>
                    <th scope="row">${job.jobId}</th>
                    <td>${job.custId}</td>
                    <td>${job.jName}</td>
                    <td>${job.jAddress}</td>
                    <td>${job.jCity}</td>
                    <td>${job.jPhone}</td>                    
                </tr> 
            </div>  
            `;
    return html;
}