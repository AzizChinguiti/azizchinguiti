var celebrities = [
    { name: "Tom Hanks", age: 67, yearsOfActing: 44, oscarsWon: 2 },
    { name: "Meryl Streep", age: 74, yearsOfActing: 46, oscarsWon: 3 },
    { name: "Leonardo DiCaprio", age: 49, yearsOfActing: 33, oscarsWon: 1 },
    { name: "Daniel Day-Lewis", age: 66, yearsOfActing: 39, oscarsWon: 3 },
    { name: "Denzel Washington", age: 68, yearsOfActing: 47, oscarsWon: 2 },
    { name: "Frances McDormand", age: 66, yearsOfActing: 41, oscarsWon: 3 }
    
];
var highestOscarsCelebrity // my variable to store the celebrity with the highest Oscars

function showCelebrity() {
    var selectBox = document.getElementById("celebrityList")
    var selectedValue = selectBox.options[selectBox.selectedIndex].value
    var celebrityInfo = document.getElementById("celebrityInfo")
   var celebrityImage = document.getElementById("celebrityImage")
  
 // Find the selected celebrity in the array
 var selectedCelebrity;
 for (var i = 0; i < celebrities.length; i++) {
     if (celebrities[i].name === selectedValue) {
         selectedCelebrity = celebrities[i]
         break;
     }
 }

    // Define the image URL based on the selected celebrity
    var imageUrl = getImageUrl(selectedValue)
// Set the image source and highlight the image
    celebrityImage.innerHTML = '<img src="' + imageUrl + '" alt="' + selectedValue + '" onclick="redirectToCelebrityPage()" style="width: 300px; height: 300px;">'    // Display additional information
    celebrityInfo.innerHTML = '<p>Age: ' + selectedCelebrity.age + '</p>' +
  '<p>Years of Acting: ' + selectedCelebrity.yearsOfActing + '</p>' +
   '<p>Oscars Won: ' + selectedCelebrity.oscarsWon + '</p>'
 highestOscarsCelebrity = selectedCelebrity

}



function getImageUrl(celebrityName) {
if (celebrityName=="Tom Hanks") 
return "https://i.pinimg.com/1200x/ae/f9/40/aef940e62f0d9687522b0b3cdf77b6d0.jpg"
if (celebrityName=="Meryl Streep") 
return "https://whyy.org/wp-content/uploads/2020/06/merylstreep-768x973.jpg"
if (celebrityName=="Leonardo DiCaprio")
return "https://faroutmagazine.co.uk/static/uploads/1/2023/02/Leonardo-DiCaprio-Far-Out-Magazine-1140x855.jpg"
if (celebrityName=="Denzel Washington")
return "https://i.pinimg.com/1200x/7a/92/23/7a9223a010f0d643eb19c756b7c38ec3.jpg"
if (celebrityName=="Daniel Day-Lewis")
return "https://static.wikia.nocookie.net/oscars/images/2/2e/DanielDayLewis2.jpg"
if (celebrityName=="Frances McDormand")
return "https://cdn.justjared.com/wp-content/uploads/2018/03/mcdormand-inclusion/frances-mcdormand-inclusion-rider-oscars-2018-03.jpg"
else return""

}

function redirectToCelebrityPage() {
    //Redirect to another link when the image is clicked
    window.location.href = "https://www.oscars.org/oscars"
}



    

function sortCelebrities() {
    var intervalId = setInterval(function () { //This function executes after 1500ms setInterval(func, delay) 
        window.open("https://en.wikipedia.org/wiki/List_of_awards_and_nominations_received_by_Daniel_Day-Lewis", "_blank") // this line open a new external window after a specific time
        clearInterval(intervalId); // this is used to stop the interval after opening the external website
    }, 1500)
    // Sort celebrities array based on Oscars won in descending order
    celebrities.sort(function (a, b) {
        if (a.oscarsWon === b.oscarsWon) {
            return a.yearsOfActing - b.yearsOfActing
        }
        return b.oscarsWon - a.oscarsWon
    })
 
      
       


       // Update the dropdown list with sorted names
       var selectBox = document.getElementById("celebrityList")
       selectBox.innerHTML = ""

       for (var i = 0; i < celebrities.length; i++) {
        var option = document.createElement("option")
        option.value = celebrities[i].name
        option.text = celebrities[i].name
        selectBox.add(option)
    }
    
    // Show the first celebrity in the sorted list
    showCelebrity()
}
 // Replace the following information with the actual details of your celebrities
function getCelebrityInfo(celebrityName) {
   if (celebrityName=="Tom Hanks")
     return { age: 65, yearsOfActing: 40, oscarsWon: 2 }
     if (celebrityName=="Meryl Streep")    
            return {age: 74, yearsOfActing: 46, oscarsWon: 4}
        if(celebrityName== "Leonardo DiCaprio")
            return { age: 47, yearsOfActing: 30, oscarsWon: 1 }
            if (celebrityName=="Denzel Washington")
            return {age: 68, yearsOfActing: 47, oscarsWon: 2}
            if (celebrityName=="Daniel Day-Lewis")
            return {age: 66, yearsOfActing: 39, oscarsWon: 3}
            if (celebrityName=="Frances McDormand")
            return {age: 66, yearsOfActing: 41, oscarsWon: 3}
}
