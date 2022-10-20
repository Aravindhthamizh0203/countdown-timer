timeLeft = 10;

function countdown() {
	timeLeft--;
	document.getElementById("seconds").innerHTML = String( timeLeft );
	if (timeLeft > 0) {
		setTimeout(countdown, 1000);
	}
};

setTimeout(countdown, 1000);
const myTimeout = setTimeout(myGreeting, 11000);

function myGreeting() {
  document.getElementById("seconds").innerHTML = "happy new year"
}
