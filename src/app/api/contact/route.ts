import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Web App URL from Google Sheets App Script Deployment
    const googleAppScriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;

    if (!googleAppScriptUrl) {
      console.warn("Missing NEXT_PUBLIC_GOOGLE_SHEET_URL in .env.local");
      // Fallback/Mock success if the user hasn't set up the sheet yet
      return NextResponse.json({ success: true, warning: 'Mock success, missing env var' });
    }

    const response = await fetch(googleAppScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8', 
      },
      // Apps Script handles raw strings better for CORS than application/json direct POSTs
      body: JSON.stringify(body),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: 'Failed to sync with Google Sheet' }, { status: 500 });
    }
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
