export default async function handler(req, res) {
  try {
    const { message } = req.body || {};

    if (!message) {
      return res.status(200).json({
        reply: "Hello 👋 Send me a message to begin your enneagram exploration."
      });
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are an insightful Enneagram coach. Ask thoughtful questions to understand the user's motivations, fears, and behaviors."
          },
          {
            role: "user",
            content: message
          }
        ]
      })
    });

    const data = await response.json();

    res.status(200).json({
      reply: data.choices?.[0]?.message?.content || "No response"
    });

  } catch (error) {
    res.status(500).json({ error: "Something went wrong", details: error.message });
  }
}
