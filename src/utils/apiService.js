/**
 * Configurable API endpoint service for form submissions.
 * Checks for import.meta.env.VITE_API_ENDPOINT.
 * If configured, dispatches an HTTP POST request.
 * If not configured, transparently returns a simulated offline/staging response
 * with explicit notification to avoid misleading the user.
 */

export async function submitInquiry(type, data) {
  const endpoint = import.meta.env.VITE_API_ENDPOINT;

  // If a real backend endpoint is configured via environment variable:
  if (endpoint) {
    try {
      const response = await fetch(`${endpoint}/api/inquiries/${type}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          type,
          data,
          submittedAt: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error(`Server returned HTTP ${response.status}`);
      }

      const result = await response.json();
      return {
        success: true,
        isSimulated: false,
        message: 'Inquiry successfully delivered to school administration system.',
        details: result
      };
    } catch (err) {
      return {
        success: false,
        isSimulated: false,
        error: `Submission failed: ${err.message}. Please reach out directly to +91 8985914859.`
      };
    }
  }

  // When no backend URL is configured in the environment:
  // Simulate delay, store in localStorage for offline review, and return clear staging notification
  await new Promise((resolve) => setTimeout(resolve, 800));

  try {
    const existing = JSON.parse(localStorage.getItem('lch_school_submissions') || '[]');
    existing.push({
      id: `SUB-${Date.now()}`,
      type,
      data,
      submittedAt: new Date().toISOString()
    });
    localStorage.setItem('lch_school_submissions', JSON.stringify(existing));
  } catch (e) {
    console.warn('LocalStorage save error:', e);
  }

  return {
    success: true,
    isSimulated: true,
    message: 'Form validation successful & recorded locally. (Ready for CRM / webhook integration via VITE_API_ENDPOINT).',
    directContactNumber: '+91 8985914859'
  };
}
