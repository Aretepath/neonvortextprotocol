
const input = document.getElementById("terminal-input");
const output = document.getElementById("terminal-output");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const command = input.value.trim();
    if (command) {
      executeCommand(command);
      input.value = "";
    }
  }
});

function executeCommand(cmd) {
  const response = document.createElement("div");
  response.textContent = `> ${cmd}`;
  output.appendChild(response);

  const result = document.createElement("div");
  result.style.color = "#b3faff";

  switch (cmd.toLowerCase()) {
    case "whois aurion":
      result.textContent = "Aurion: Former black hat hacker turned cyber operative. Operates between shadows and code.";
      break;
    case "status echo":
      result.textContent = "Echo: Online. Emotion module fluctuating. Awaiting Hunter.";
      break;
    case "help":
      result.textContent = "Available commands: whois aurion, status echo, help, Chapter One Info";
      break;
   break;
    case "chapter one":
      result.textContent = "Chapter One Info";
      break;
    default:
      result.textContent = "Unknown command. Type 'help' for list.";
  }

  output.appendChild(result);
  output.scrollTop = output.scrollHeight;
}
