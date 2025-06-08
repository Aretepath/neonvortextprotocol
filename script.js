function executeCommand(cmd) {
  const response = document.createElement("div");
  response.textContent = `> ${cmd}`;
  output.appendChild(response);

  const result = document.createElement("div");
  result.style.color = "#b3faff";

  const chapterContent = document.getElementById("chapter-content");

  switch (cmd.toLowerCase()) {
    case "whois aurion":
      result.textContent = "Aurion: Former black hat hacker turned cyber operative. Operates between shadows and code.";
      chapterContent.innerHTML = ""; // clear chapter display
      break;
    case "status echo":
      result.textContent = "Echo: Online. Emotion module fluctuating. Awaiting Hunter.";
      chapterContent.innerHTML = "";
      break;
    case "chapter one":
      result.textContent = "Loading Chapter One...";
      chapterContent.innerHTML = `
        <div class="chapter">
          <h2>Chapter One: Grounding Out</h2>
          <p>The city hummed like a dying circuit. Neon signs bled into puddles, casting digital shadows onto real ghosts. Aurion stood in the rain, signal tracer in hand, trying to lock the source before the trace expired...</p>
        </div>
      `;
      break;
    case "help":
      result.textContent = "Available commands: whois aurion, status echo, chapter one, help";
      chapterContent.innerHTML = "";
      break;
    default:
      result.textContent = "Unknown command. Type 'help' for list.";
      chapterContent.innerHTML = "";
  }

  output.appendChild(result);
  output.scrollTop = output.scrollHeight;
}
