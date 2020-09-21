// api url 
const api_url =  
      "https://restcountries.eu/rest/v2/all"; 


// Defining async function 
async function getapi(url) { 
    // Storing response 
    const response = await fetch(url); 
    // Storing data in form of JSON 
    var data = await response.json(); 
    return data
} 

//Calling async function and populate the region drop down
getapi(api_url).then(data => {
    populate_dropdown(data);
});

function populate_dropdown(data){
    const regions_list = document.getElementById("regions_list");
    regions = data;
    let options = "Select a Region";
    let Region_array = [];
    regions.forEach(region => Region_array.push(region.region)); //push each region occurance into the array


    //Find unique values in the Region_array. 
    //Source: https://stackoverflow.com/questions/11246758/how-to-get-unique-values-in-an-array
    let unique_regions = Region_array.filter((item, i, ar) => ar.indexOf(item) == i) 

    pop_array = unique_regions.reverse(); //reverse array so the default in the select box is blank

    for (i=0; i < pop_array.length; i++){
        options+=`<option value="${pop_array[i]}">${pop_array[i]}</option>`
    }     
    regions_list.innerHTML = options; //add the unique regions into the dropdown list. 
    }

function displayby_region(){
    //Find the selected region value
    var drop_down = document.getElementById("regions_list");
    var selRegion = drop_down.options[drop_down.selectedIndex].text;

    //insert the value into the api url and call it
    let url = "https://restcountries.eu/rest/v2/region/" + selRegion;
    getapi(url).then(data => {
        searchby_region(data);
    })
}
function searchby_region(data){
    //Display the region name and hide the flag if there was a previous search
    document.getElementById("flag_div").style.display="none";
    document.getElementById("selected_region").style.display="block";

    var drop_down = document.getElementById("regions_list");
    var selRegion = drop_down.options[drop_down.selectedIndex].text;
    const map = document.getElementById("map_link")
    const name = document.getElementById("selected_region");
    const p = document.getElementById("country_capital");
    let text = ""; 

    //Hide map link
    map.innerHTML = "";

    //Print region name
    name.innerHTML = "Region Name: " + selRegion;

    //Save all the country names and capitals in an html string
    data.forEach(set => text+= `Country: ${set.name}<br> Capital: ${set.capital}<br><br>`)
    p.innerHTML = text;

}

function displayby_name(){
    var country_name = document.getElementById("country_name").value;

    let url = "https://restcountries.eu/rest/v2/name/" + country_name;
    getapi(url).then(data => {
        searchby_name(data);
    })
}

function searchby_name(data){
    //Display the flag division, hide region display 
    document.getElementById("flag_div").style.display="block"; 
    document.getElementById("selected_region").style.display="none";

    const p = document.getElementById("country_capital")
    const map = document.getElementById("map_link")
    const flag = document.getElementById("flag_div")
    var flag_link = "";
    let map_html = "";
    let text = ""; 

    //Use "forEach" as a keyword can return multipule results. Everything gets saved in html strings.
    data.forEach(set => text+= `Country: ${set.name}, Capital: ${set.capital}<br><br>`)
    data.forEach(set => map_html +=  "<a href='" + set.name +"'> Map of " + set.name + "</a><br>")
    data.forEach(set => flag_link +=  "<img src=" + set.flag + "><br>")
    
    p.innerHTML = text;
    flag.innerHTML = flag_link;
    map.innerHTML = map_html;

       
}





