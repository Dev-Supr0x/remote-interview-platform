import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    /*
     * Apply Clerk middleware to all routes except:
     * - Next.js internals (_next, etc.)
     * - static files
     * - public files
    */
    '/((?!.*\\..*|_next|favicon.ico).*)',
  ],
};
