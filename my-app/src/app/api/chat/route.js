import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const apiKey = process.env.GROK_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing GROK_API_KEY. Add it to .env.local" },
        { status: 500 }
      );
    }

    const { message, history = [] } = await request.json();
    if (!message?.trim()) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const messages = [
      ...history.map((msg) => ({
        role: msg.role === "user" ? "user" : "assistant",
        content: msg.content,
      })),
      { role: "user", content: message.trim() },
    ];

    const response = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-3-mini",
        messages,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      const errMsg = data?.error?.message ?? data?.error ?? "Request failed";
      return NextResponse.json(
        { error: errMsg },
        { status: response.status }
      );
    }

    const text =
      data?.choices?.[0]?.message?.content ?? "I couldn't generate a response.";
    return NextResponse.json({ text });
  } catch (err) {
    console.error("Grok API error:", err);
    return NextResponse.json(
      {
        error: err?.message ?? "Failed to get response from Grok API",
      },
      { status: 500 }
    );
  }
}
