// selectors

let quote = document.getElementById("quote")
let author = document.getElementById("author")


const quoteGeneratorBtn = document.getElementById("quote-generator-btn")
const comments = document.getElementById("comments")
const commentSubmitButton = document.getElementById("submit-comment")

function getQuote(){
         fetch("https://type.fit/api/quotes")
         .then(res => res.json())
         .then(data => {
             let index = Math.round(Math.random()*1642)
             if (data[index].author === null || data[index].author === "Donald Trump") {
                 getQuote()
             } else {
             quote.innerHTML = data[index].text
             author.innerHTML = `~  ${data[index].author}`
             }
         })
     }

function searchQuotes (searchString){
         fetch("https://type.fit/api/quotes")
         .then(res => res.json())
         .then(data => data["text"])
         }
             
            //  quote.innerHTML = data[index].text
            //  author.innerHTML = `~  ${data[index].author}`
            

function addComment(event){
    event.preventDefault();
    const commentP = document.createElement("p")
    commentP.innerHTML = `${document.getElementById("name-input").value}: ${document.getElementById("comment-input").value}`

    comments.appendChild(commentP)
    document.getElementById("comment-input").value = ""
    document.getElementById("name-input").value = ""
    }


document.addEventListener("DOMContentLoaded", () => {
    quoteGeneratorBtn.addEventListener("click", getQuote)
    commentSubmitButton.addEventListener("click", addComment)
    
  
});

