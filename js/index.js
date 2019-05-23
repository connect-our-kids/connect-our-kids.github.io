function myFunction() {
	var x = document.getElementById("myLinks");

		x.classList.toggle('active')

  }

function buttonTextAnimation() {
	let buttonText = document.querySelector('header h1')
	TweenMax.to(buttonText, 1, {
		opacity: 0,
		scale: 0,
		rotation: 580,
		// ease: Bounce.easeIn,
		repeat: -1,
		yoyo: true, 
		repeatDelay: 1
	});
}  
//Top Button Function
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
