// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


function addListenerToButtons(){
  const likeButtons = document.querySelectorAll("span.like-glyph")
  for(let btn of likeButtons){
    btn.addEventListener('click', handleLike)
    }
}

addListenerToButtons()

function handleLike(e){
  let heart = e.target
  mimicServerCall()  
  .then(resp => {
    if (resp){changeLike(heart)}})
  .catch(error => {
    console.log(error)
    const modal = document.querySelector("#modal")
    modal.className = ""
    setTimeout(() => modal.className = "hidden", 3000)
  })
      

}
function changeLike(heart){
  if (heart.innerText === EMPTY_HEART){
    heart.innerText = FULL_HEART;
    heart.className = 'activated-heart'}
  else if (heart.innerText === FULL_HEART){
    heart.innerText = EMPTY_HEART;
    heart.className = ''}
    else console.log("This isn't working!")
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
