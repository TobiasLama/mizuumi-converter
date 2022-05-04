/*
TO-DO:
- Make sure file uploaded is a valid file type; give error msg otherwise
*/
const inputElement = document.getElementById("sheetFile");
inputElement.addEventListener("change", handleFiles, false);

function handleFiles() {
    var reader = new FileReader();
    const sheet = this.files[0]; //The file that was uploaded, should be a spreadsheet file
    const fileName = sheet.name;
    const fileType = sheet.type;
    alert(`Loading file named ${fileName} of file type ${fileType}`);
    reader.onload = function(){
        sheetData = this.result
        loadSheet(sheetData)
    };
    reader.readAsText(this.files[0]);
}

function loadSheet(sheetContent){
        document.getElementById('sheetResult').textContent = sheetContent;
}

    // Alternative solution of loading and displaying content of file as text using promises, 
    // works but is more complex
    /*let myPromise = sheet.text();
        
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
        function(value) { 
            alert(value)
            document.getElementById('sheetResult').textContent = value
        },
        function(error) { alert(error) }
    );*/