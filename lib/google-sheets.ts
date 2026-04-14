export type LoginEventType = 'login' | 'signup' | 'address_update';

export interface LoginLogData {
  type: LoginEventType;
  email: string;
  name?: string;
  phone?: string;
  street?: string;
  area?: string;
  pincode?: string;
  status: 'success' | 'failure';
}

interface LogResponse {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Logs a login, signup, or address update event to Google Sheets.
 */
export async function logLoginEvent(data: LoginLogData): Promise<LogResponse> {
  try {
    const response = await fetch('/api/log-user-signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.error || 'Failed to log event');
    }

    return { success: true, message: json.message };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Google Sheets logging error:', errorMessage);
    return { success: false, error: errorMessage };
  }
}
