function handleAddJobImg(target) {
    console.log(target)

    let jobId = document.getElementById('jobid')
    let keyValue = document.getElementById('keyValue')
    let sampleFile = document.getElementById('jofileToUploadbid')

    let url = `${host}/upload`;

    let params = `jobId=${jobId}&&keyValue=${keyValue}&&sampleFile=${sampleFile}`;
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {
           
                console.log(this.responseText)
                

            }
      };
      
      xmlhttp.open("POST", url, true);
      xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xmlhttp.send(params);
 
}