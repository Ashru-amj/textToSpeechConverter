let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

// Function to populate the voices and select the first one
function populateVoices() {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
}

// Add an event listener for voiceschanged to ensure voices are populated on page load
window.speechSynthesis.onvoiceschanged = populateVoices;

// Trigger the voices population when the page loads
window.addEventListener("load", populateVoices);

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[+voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
