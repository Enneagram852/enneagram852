export default function handler(req, res) {

  const { message } = req.body || {};
  let reply = "";

  if (!message) {
    reply = "Start wherever feels true...";
  }

  else if (
    message.includes("enneagram") ||
    message.includes("type") ||
    message.includes("number")
  ) {
    reply = "The most accurate way to understand your enneagram type isn’t to label yourself quickly, but to notice your patterns. One of the most revealing patterns to watch is what happens when you’re under stress. What do you notice about yourself in those moments?";
  }

  else if (message.includes("think") || message.includes("overthink")) {
    reply = "I notice you used the word 'think'. Often the language we use tells us something about how we move through the world. Would you say you tend to navigate life more through thinking, or feeling?";
  }

  else if (message.includes("feel") || message.includes("feeling") || message.includes("emotional")) {
  reply = "I notice you're speaking from a feeling place. Often this connects to how we experience ourselves through emotion and relationship. When you feel this, is it more about how you feel inside, or how you are seen by others?";
  } 
  
  else if (message.includes("fear") || message.includes("anxious") || message.includes("worry")) {
    reply = "I’m hearing something connected to fear or anxiety. When this shows up, what are you usually trying to prepare for or avoid?";
  }

  else if (message.includes("shame") || message.includes("not enough")) {
    reply = "There’s something here about how you’re seen or valued. When this feeling comes up, what matters most in that moment?";
  }

  else if (message.includes("anger") || message.includes("frustrated")) {
    reply = "I’m noticing some frustration or anger. When this comes up, do you tend to express it, or hold it in?";
  }

  else {
    reply = "Can you say a little more about that?";
  }

  res.status(200).json({ reply });

}
