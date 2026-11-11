// Vercel Web Analytics initialization
// This script loads and initializes Vercel Analytics for tracking page views
import { inject } from 'https://esm.sh/@vercel/analytics';

// Initialize analytics with automatic mode detection
// In production (when deployed to Vercel), this will send analytics data
// In development, it will log events to the console
inject({
  mode: 'auto',
  debug: false
});
