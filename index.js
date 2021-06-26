let quote = document.getElementById("quote")
let author = document.getElementById("author")
let heart = document.getElementById("like-btn")
let glyph = document.getElementsByClassName("like-glyph")[0]
let pic = document.getElementsByTagName("img")[0]

const quoteGeneratorBtn = document.getElementById("quote-generator-btn")
const commentSubmitButton = document.getElementById("submit-comment")
const animalBtn = document.getElementById("animal-generator-btn")

const comments = document.getElementById("comments")
const notLiked = "♡"
const liked = "♥"

let animalPics = ["https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_960_720.jpg", 
    "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg",
    "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg", 
    "https://cdn.pixabay.com/photo/2017/05/18/15/05/chipmunk-2323827_960_720.jpg",
    "https://cdn.pixabay.com/photo/2018/07/13/10/20/cat-3535404_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/11/15/22/09/cat-1044914_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/03/31/19/20/dog-4988985_960_720.jpg",
    "https://cdn.pixabay.com/photo/2019/05/21/07/11/cat-4218424_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/12/18/18/42/kittens-1916542_960_720.jpg",
    "https://cdn.pixabay.com/photo/2019/08/25/13/34/dogs-4429513_960_720.jpg",
    "https://cdn.pixabay.com/photo/2019/09/16/14/43/seal-4481175_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/01/21/16/17/english-cocker-spaniel-5937757_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/11/21/16/59/animal-1846462_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/05/02/09/59/pup-5120625_960_720.jpg",
    "https://cdn.pixabay.com/photo/2019/05/04/21/54/rodents-4179187_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/01/19/16/44/cat-4778387_960_720.jpg",
    "https://cdn.pixabay.com/photo/2019/07/31/19/21/hare-4375952_960_720.jpg"
]

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
             glyph.innerHTML = notLiked
             heart.innerHTML = "&#x2661" + "  Like!"
             }
         })
}

function getPic(){
    let index = Math.round(Math.random()*16)
    pic.src = animalPics[index]
}
            
function addComment(event){
    event.preventDefault();
    const commentP = document.createElement("p")
    commentP.innerHTML = `${document.getElementById("name-input").value}: ${document.getElementById("comment-input").value}`

    if (comments.childElementCount > 3){
        console.log("if statement true")
        comments.getElementsByTagName("p")[comments.childElementCount-1].remove()
    }

    comments.prepend(commentP)
    document.getElementById("comment-input").value = ""
    document.getElementById("name-input").value = ""
}

function likes() {
    if (glyph.innerHTML === notLiked){
      glyph.innerHTML = liked
      heart.innerHTML = "&#x2665" + "  Liked!"
      heart.classList.add("activated")
    } else {
      glyph.innerHTML = notLiked
      heart.innerHTML = "&#x2661" + "  Like"
      heart.classList.remove("activated")
    }
}

document.addEventListener("DOMContentLoaded", () => {
    quoteGeneratorBtn.addEventListener("click", getQuote)
    animalBtn.addEventListener("click", getPic)
    commentSubmitButton.addEventListener("click", addComment)
    heart.addEventListener("click", likes)
});

