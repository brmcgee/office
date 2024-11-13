
async function fetchJobsByStatus(status) {
    
    let url = `${host}/status/${status}`;
    try {
        const response = await fetch(url);
        let html = ``;
        try {
            const data = await response.json();
                console.log(data)
                customersRoot.innerHTML = jobsTemplateAll(data);  

        }
        catch (parseError) {
            customersRoot.innerHTML = `<p class='alert alert-warning'>Network Error ${parseError}</p><br>${customersButton()}`
            console.log('Failed to parse JSON: ' + parseError);
        }
    } catch (networkError) {
        console.log('Network request failed: ', networkError);
        
    }  
    return;
}