export default function handler(req, res) {

  const { message } = req.body || {};
  let reply = "";

  if (!message) {
    reply = "What would you like to explore?";
  }

  else {
    const text = message.toLowerCase();

    if (
      text.includes("enneagram") ||
      text.includes("type") ||
      text.includes("number")
    ) {
      reply = "Most people start by trying to figure out their number — but that usually leads to guessing.\n\nThe Enneagram is less about the label, and more about understanding why you do what you do — the patterns behind your thoughts, reactions, and choices.\n\nIf we start there, your type becomes much clearer.\n\nSo tell me — what’s something about yourself that doesn’t quite make sense, or keeps repeating?";
    }

    else {
      reply = "The way you’ve described that already points to a pattern — not just what’s happening, but how you’re responding to it.\n\nWhat feels most familiar or repeated in that for you?";
    }
  }

  res.status(200).json({ reply });

}
