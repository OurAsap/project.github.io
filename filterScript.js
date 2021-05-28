function search(){
	var searchInput = document.getElementById("item").value;
    var icdData = document.getElementsByClassName("ICD");
    var ugData = document.getElementsByClassName("UG");
    console.log(icdData.length + " " + ugData.length);
    
    if(searchInput == "ICD")
    {
        for(var index=0;index<icdData.length;index++){
            icdData[index].style.visibility = "visible";
        }
        for(var index = 0;index<ugData.length;index++)
        {
            ugData[index].style.visibility = "collapse";
        }
    }
    else  if(searchInput == "UG")
    {
        for(var index=0;index<ugData.length;index++){
            ugData[index].style.visibility = "visible";
            icdData[index].style.visibility = "collapse";
        }
        for(var index=0;index<icdData.length;index++){
            icdData[index].style.visibility = "collapse";
        }
    }
}