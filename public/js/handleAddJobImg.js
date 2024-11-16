function handleAddJobImg(e, target, formId, jobId, modalId, custId) {
    
    e.preventDefault(); 
    var data = new FormData(document.getElementById(formId));

    
    let url = `${host}/upload`;    
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {
           
                console.log(this.responseText)
            
            }
      };
      
      xmlhttp.open("POST", url, true);
    //   xmlhttp.setRequestHeader('Content-type', 'multipart/form-data');
      xmlhttp.send(data);


      

      const myModal = document.getElementById(modalId); 
      const modal = bootstrap.Modal.getInstance(myModal); 
      modal.hide();
      customersRoot.innerHTML = `<p class="alert alert-success">Uploaded image</p>
                                    <button onclick="fetchJobDetails(${jobId})" class="btn btn-dark">Refresh Job Details</button>`;
    // fetchJobDetails(22)
  
  

      
}