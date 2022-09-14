console.log("our file is loading..... :) ")


//
// Search for Elements by ID: getElementById()
//

const titleElm = document.getElementById("title1");
console.log(titleElm)



//
// Change the content of an element: .innerHTML property
//

titleElm.innerHTML = "Welcome to Ironic Hackers"


//
// Search elements by Class Name: getElementsByClassName()
//
// -  returns an HTMLCollection (something similar to an array) of all child elements which have all of the given class names.
//


const paragraphsCollection = document.getElementsByClassName("paragraph");
console.log(paragraphsCollection)

/*

- Important: returns an **HTMLCollection**
  - The HTMLCollection is an array-like object but is not an array.
    - We can not use the array methods like forEach, map, push, etc
    - We can transform it into an array. Eg., with the spread operator:
      ```
      const elementsArr = [...elements]
      ```
*/

const paragraphsArr = [...paragraphsCollection]; // transform htmlCollection to an array

paragraphsArr.forEach(function(domElement){
    domElement.innerHTML = domElement.innerHTML + " created by IronicHackers";
})


//
// Search elements by Tag Name: getElementsByTagName()
//
// - returns an HTMLCollection
//

const h2Collection = document.getElementsByTagName("h2");
const h2Arr = [...h2Collection];
h2Arr.forEach( (domElement) => {
    // domElement.innerHTML = "this is an h2";
    domElement.innerText = "this is an h2";
});



//
// Search one element by CSS Selector: querySelector()
//
// - returns the first element that matches the selector
//

const myH2Elm = document.querySelector("section h2");
console.log(myH2Elm)


//
// Search all elements by CSS Selector: querySelectorAll()
//
// - returns a NodeList
// - note: you CAN use a forEach to iterate on a NodeList :) :) 
//

const allH2InsideSection = document.querySelectorAll("section h2")

// allH2InsideSection.forEach( h2 => h2.innerHTML = "this is an h2 inside a section")

allH2InsideSection.forEach( function(h2){
    h2.innerHTML = "this is an h2 inside a section"
})


//
// Search on a different context
//

const pikachuElm = document.getElementById("pikachu");

const allParagraphs = pikachuElm.getElementsByClassName("paragraph")

console.log(allParagraphs)


/************/
/* Properties */
/************/

// const content = pikachuElm.innerHTML; // reading
// console.log(content);
// pikachuElm.innerHTML = "<p>i love pizza</p> <p>i love salad</p>"; // modify

pikachuElm.style.color = "purple";
pikachuElm.style.border = "2px solid orange";
pikachuElm.style.margin = "20px 0";

pikachuElm.style.backgroundColor = "#aaeeaa";


pikachuElm.className = "banana apple";



/************/
/* Attributes */
/************/

const myLinkElm = document.getElementById("my-link");
myLinkElm.setAttribute("href", "https://ironhack.com");


/*********************/
/* Create a DOM node */
/*********************/

// step1
const newImage = document.createElement("img");

// step2
newImage.setAttribute("src", "https://i.pinimg.com/originals/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg");

//step3: append to the dom: `parentElm.appendChild()`
const container = document.querySelector("section.products")
container.appendChild(newImage);




/**********************************/
/* Create a DOM node -- example 2 */
/**********************************/

// step1
const newLink = document.createElement("a");

// step2
newLink.setAttribute("href", "https://ironhack.com");
newLink.setAttribute("target", "_blank");
newLink.innerText = "Visit Ironhack"

//step3: append to the dom: `parentElm.appendChild()`
pikachuElm.appendChild(newLink);


/********************************/
/* Remove an element from the DOM */
/********************************/

// const footerElm = document.getElementById("footer");
// footerElm.removeChild(myLinkElm)


/*********************/
/*********************/
/* JavaScript Events */
/*********************/
/*********************/

const btnOne = document.getElementById("button-1");

btnOne.addEventListener("click", function(event){
    console.log("user clicked on our button.....")
    console.log(event.target)
});


/*************************************/
/* Attach event to multiple elements */
/*************************************/

const allH2s = document.querySelectorAll("h2");

allH2s.forEach( h2Elm => {
    h2Elm.addEventListener("click", () => {
        console.log("you clicked on an h2.....")
    })
})



/******************/
/* Event Bubbling */
/******************/

const bodyElm = document.querySelector("body");
bodyElm.addEventListener("click", (e) => {
    if(e.target.id === "button-1"){
        console.log("click event fired in our favourite btn")
    } else {
        console.log("click event fired somewhere else in the body")
    }
})



/**********/
/* Inputs */
/**********/

//
//when user clicks on button-1, display the current price
//
btnOne.addEventListener("click", function(event){
    const priceElm = document.getElementById("price");
    const result = priceElm.value;
    console.log(result)    
});

//
// when user changes the price, display the current price
//
// const priceElm = document.getElementById("price");
// priceElm.addEventListener("change", function(event){
//     const result = priceElm.value;
//     console.log("new price...." + result)    
// });