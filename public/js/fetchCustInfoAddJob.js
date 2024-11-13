function fetchCustInfoAddJob(t) {
    let custId = document.getElementById('custId').value;
    
    handleFetchCustInfoAddJob(custId)
}

async function handleFetchCustInfoAddJob(custId) {
    let jName = document.getElementById('jName');
    let jAddress = document.getElementById('jAddress');
    let jCity = document.getElementById('jCity');
    let jState = document.getElementById('jState');
    let jZip = document.getElementById('jZip');
    let jPhone = document.getElementById('jPhone');

    let url = `${host}/customers/${custId}`;

    try {
        const response = await fetch(url);
        let html = ``;
        try {
            const data = await response.json();
                jName.value = `${data[0].lname}`;
                jAddress.value = `${data[0].address}`;
                jCity.value = `${data[0].city}`;
                jState.value = `${data[0].state}`;
                jZip.value = `${data[0].zip}`;
                jPhone.value = `${data[0].phone}`;
        }
        catch (parseError) {
            customersRoot.innerHTML = `<p class='bm-alert-warning'>Network Error ${parseError}</p>`
            console.log('Failed to parse JSON: ' + parseError);
        }
    } catch (networkError) {
        console.log('Network request failed: ', networkError);
        
    }  
}