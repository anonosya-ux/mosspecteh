import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const response = await fetch("https://spectehmosobl.anonosya.workers.dev", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            console.error("Worker error HTTP status:", response.status);
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error sending lead to worker:", error);
        return NextResponse.json(
            { error: "Failed to send lead" },
            { status: 500 }
        );
    }
}
