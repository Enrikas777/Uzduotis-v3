"use strict"

// DOM selectors
var names = document.getElementById("names")
var input = document.getElementById("input")
var add = document.getElementById("add")
var remove = document.getElementById("remove")

// DOM events
add.addEventListener("click", function(){
    // Validacija
    if(input.value) {
        var span = document.createElement("span")
        span.innerText = input.value + ", "
        names.append(span)
        
        // Išvalo input laukelį
        input.value = ""
    } else {
        alert("Laukelis tuščias :)")
    }
   
})

remove.addEventListener("click", function(){
    var spans = document.querySelectorAll("span")
    // Validacija
    if(spans.length){
        // Pirmas
        // spans[0].remove()

        // Paskutinis
        spans[spans.length - 1].remove()
    } else {
        alert("Nebėra ką trinti :/")
    }
   
})


// creating new elements - document.createElement()
// Adding new elements - names.append()
// Removing elements - names.remove()