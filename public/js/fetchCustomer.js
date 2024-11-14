function fetchCustomerList(){
    clearMenu();
    handleFetchCustomersList(customersRoot);  
    // menuRoot.innerHTML += htmlSearchCustomers(); see handleFetchCustomersList()
}

// add htmlSearchForm() 
async function handleFetchCustomersList(target) {
    customersRoot.innerHTML = ''

    try {
        const response = await fetch(`${host}/customers`);
        let html = ``;
        try {
            const data = await response.json();

                html += customerTemplate(data) 
                // menuRoot.innerHTML += htmlSearchCustomers();
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


function customerTemplate(customers) {
    let html = '';
    html += `

        <div class=" col-12 mx-auto  bm-page">

            <div class="bm-header-primary">
                <h5 class="">Customer lists<span class="float-end pe-3 badge bg-light text-primary"> Total: ${customers.length}</span></h5>
            </div>
            
            <table class="table table-stripe ">
                <thead class="thead">
                    <tr>
                        <th scope="col">Job</th>
                        <th scope="col">Add</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>`;
        
            customers.forEach(c => {
                html += customerTemplateInner(c);
            });


    html += `  </tbody>
            </table>`;

    return html;
}

function customerTemplateInner(customer) {
    let html = '';
    html += `
                <tr>
                    <th scope="row">

                        <button id="${customer.custId}" class="bg-transparent border-0" type="button" onclick="getJobsByCustomers(this.id)">
                            <img class="pb-1" src="public/assets/icons/work-green.png" alt="" width="22">
                        </button>
                    </td>

                    <td id="">
                        <button id="${customer.custId}" class="bg-transparent border-0" type="button" onclick="addJob(this.id)">
                            <img class="pb-1" src="public/assets/icons/circle-blue-add.png" alt="" width="20">
                        </button>
                    </td> 

                    <td>    
                        <a href="#" type="button" onclick="fetchCustomerRecord(${customer.custId})" class="text-decoration-none text-dark fw-semibold cursor-pointer ">
                            <span class="text-primary">${customer.lname}, ${customer.fname}</span>
                        </a>
                    </td>  

                    <td>${customer.address} ${customer.city}, ${customer.state.toUpperCase()}</td>

                    <td>${customer.phone} </td>                   
                </tr> 
            </div>  
            `;
            
    return html;
}


async function handleSearchLastName(query) {
    if (query == '') { 
        customersRoot.innerHTML = '';
        document.getElementById('searchBar').value = '';
        return; 
    }

    let url = `${host}/lname/${query}`;
    let params = `query=${query}`;
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.response)
            customersRoot.innerHTML =  customerTemplate(data)
        }
      };
      
      xmlhttp.open("POST", url, true);
      xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xmlhttp.send(params);
      if (query == '') { customersRoot.innerHTML = ''; return; }
}

function htmlSearchListItems(data) {
    
    let html = ``;

    if (data.length > 0) {
        data.forEach(d => {
            html += `<li><a class="link-body-emphasis text-decoration-none href="#">${d.lname}, ${d.fname}</a></li>`;
        })
    }     
    
    return html;
}

function htmlSearchCustomers() {

    
    let html =`
    
      <form id="searchCustomerBar" class="d-flex m-0" role="search">
        <input id="searchBar" class="form-control" type="search" placeholder="Search" aria-label="Search" onkeyup="handleSearchLastName(this.value)">
      </form>    
    `;

    html += `<ul style="" id="searchMenu">`
    html += `</ul>`;
    return html;
}
