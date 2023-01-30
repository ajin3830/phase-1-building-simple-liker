// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heartButtons = document.querySelectorAll(".like-glyph")
heartButtons.forEach(heartButton => heartButton.addEventListener('click', (e) => {
  // console.log('e', e)
  const heart = e.target
  mimicServerCall()
  // .then(() => {})
  .then((response) => {
    if (heart.textContent === EMPTY_HEART) {
      heart.textContent = FULL_HEART
      heart.classList.add('activated-heart')
    } else {
      heart.textContent = EMPTY_HEART
      heart.classList.remove('activated-heart')
    }
    // console.log(heart)
    // console.log('heart', heart)
    // console.log(response)
    // console.log('response', response)
  })
  // .catch(() => {})
  .catch((error) => {
    // console.log('error', error )
    const modal = document.querySelector('#modal')
    modal.classList.remove('hidden')
    modal.textContent = error
    setTimeout(() => {
      modal.classList.add('hidden')
    }, 3000);

  })
}))


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
