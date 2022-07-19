const adviceId = document.getElementById("advice-id");

const adviceContent = document.getElementById("advice-content");


const getAdvice = async () => {
	const res = await fetch("https://api.adviceslip.com/advice")
	const data = res.json();

	return data;
}

const clickBtn = async () => {
	const data = await getAdvice();
	const id = data.slip.id;
	const advice = data.slip.advice;

	adviceId.innerHTML = "ADVICE #" + id;

	adviceContent.innerHTML = advice;
}


