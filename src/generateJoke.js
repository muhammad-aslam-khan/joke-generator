import axios from "axios";

const jokeDisplay = document.getElementById("joke");

export default async function generateJoke() {
	try {
		const config = {
			headers: {
				Accept: "application/json",
			},
		};

		const response = await axios.get("https://icanhazdadjoke.com/", config);
		jokeDisplay.textContent = response.data.joke;
	} catch (error) {
		console.error("Error fetching joke:", error);
		jokeDisplay.textContent = "Failed to load a joke. Please try again.";
	}
}
