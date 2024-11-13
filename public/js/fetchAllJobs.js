// handles getting all jobs without id 
function fetchAllJobs(){
    handlefetchAllJobs();  
}

async function handlefetchAllJobs(target) {
    customersRoot.innerHTML = ''
    let urlj = `${host}/jobs`;
    try {
        const response = await fetch(urlj);
        let html = ``;
        try {
            const data = await response.json();
                clearRoot();
                html += jobsTemplateAll(data) 
                customersRoot.innerHTML += html;  

        }
        catch (parseError) {
            customersRoot.innerHTML = `<p class='alert alert-warning'>Network Error ${parseError}</p>`
            console.log('Failed to parse JSON: ' + parseError);
        }
    } catch (networkError) {
        console.log('Network request failed: ', networkError);
        
    }  
}


function jobsTemplateAll(jobs) {
    let html = '';
    html += `

        <div class=" col-12 mx-auto bm-page">

            <div class="bm-header-primary">
                <h5 class="">All Jobs <span class="float-end pe-3 badge bg-light text-primary"> Total: ${jobs.length}</span><span id="jobHeader"</h5>
            </div>
            
            <table class="table table-stripe">
                <thead class="thead">
                    <tr>
                        <th scope="col">View</th>                    
                        <th scope="col">Job Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Status</th>
                        <th scope="col">Phone</th> 
                    </tr>
                </thead>
                <tbody>`;
    if (jobs.length > 1) {
        jobs.forEach(c => {
            html += jobTemplateInnerAll(c);
        });
    } else {
        html += jobTemplateInnerAll(jobs)
    }


    html += `  </tbody>
            </table>`;

    return html;
}

function jobTemplateInnerAll(job) {
    let html = '';
    html += `
                <tr>
                    <th scope="row p-0 py-1">
                        <button onclick="fetchJobDetails(this.id)" id="${job.jobId}" class="bg-transparent border-0">
                            <img class="pb-1" src="public/assets/icons/open-green.png" alt="" width="22">
                        </button>
                    </th>                
                    <td>${job.jName}</td>
                    <td>${job.jAddress} ${job.jCity}</td>
                    <td>${getIcon(job.status)}${job.status}</td>
                    <td>${job.jPhone}</td>                    
                </tr> 
            </div>  
            `;
    return html;
}

