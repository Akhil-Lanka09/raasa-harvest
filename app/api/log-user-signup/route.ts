import { NextRequest, NextResponse } from 'next/server';

// Force dynamic so Vercel doesn't statically cache this route
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, name, email, phone, street, area, pincode, status } = body;

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Missing email' }, { status: 400 });
    }

    const serviceAccountEnv = process.env.GOOGLE_SERVICE_ACCOUNT;
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!serviceAccountEnv || !sheetId) {
      console.warn('Google Sheets env vars not set — skipping log.');
      return NextResponse.json({ success: true, message: 'Logging skipped (not configured)' });
    }

    // Dynamically import to reduce cold-start bundle size
    const { google } = await import('googleapis');

    let credentials: Record<string, string>;
    try {
      credentials = JSON.parse(serviceAccountEnv);
    } catch {
      console.error('GOOGLE_SERVICE_ACCOUNT is not valid JSON');
      return NextResponse.json({ success: true, message: 'Logging skipped (bad config)' });
    }

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const now = new Date();
    const date = now.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' });
    const timestamp = now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'Sheet1!A:J',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          type || 'login',
          name  || '',
          email,
          phone || '',
          street || '',
          area   || '',
          pincode || '',
          status || 'success',
          date,
          timestamp,
        ]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Google Sheets error:', error);
    // Return 200 so user flow is never blocked by logging failure
    return NextResponse.json({ success: false, message: 'Logging failed silently' });
  }
}
