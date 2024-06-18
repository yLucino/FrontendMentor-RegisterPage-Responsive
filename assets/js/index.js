const subscribingPage = document.querySelector('.container-subscribing-page');

// <========== Valid email required (input) ===========>
document.getElementById('emailForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var emailInput = document.getElementById('input-email-sub');
  var email = emailInput.value
  const pInvalideEmail = document.getElementById('p-input-required-email')
  
  addEmailInSpan();

  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailRegex.test(email)) {
    emailInput.classList.remove('invalid');
    pInvalideEmail.style.display = 'none';
    addSubscribingPage();
  } else {
    emailInput.classList.add('invalid');
    pInvalideEmail.style.display = 'block';
  }
});

// <========== Responsive Layout (820px) ===========>
// let imgSubscribe = document.querySelector('.container-subscribe-img img');
// let windowWidthScreen = window.innerWidth
// let size

// size = windowWidthScreen

// if ( size <= 820) {
//   console.log(size)
//   console.log(imgSubscribe)

//   imgSubscribe.src = `assets/images/illustration-sign-up-mobile.svg`
//   imgSubscribe.alt = `illustration-sign-up-mobile.svg`
// }

// <========== Functions ===========>
function addSubscribingPage() {
  subscribingPage.style.display = 'flex';
}

function addEmailInSpan() {
  var emailInput = document.getElementById('input-email-sub');
  const spanEmailText = document.querySelector('#text-email');
  const email = emailInput.value
  spanEmailText.textContent = email
}

function dismissMessage() {
  subscribingPage.style.display = 'none';
}

