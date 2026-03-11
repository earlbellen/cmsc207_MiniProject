const facts = [
  "I started out as a Mechanical Engineer before moving into cybersecurity.",
  "I want to launch a tech vlog someday.",
  "I genuinely enjoy watching garden plants grow, even if it surprises people.",
  "I will drop everything to pet a cat.",
  "I set timers for most tasks because I get distracted easily.",
  "I will munch on peanuts until the bag is empty."
];

const button = document.getElementById("fun-fact");
const output = document.getElementById("fun-output");

button.addEventListener("click", () => {
  const pick = facts[Math.floor(Math.random() * facts.length)];
  output.textContent = pick;
});
