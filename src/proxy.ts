import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/(de|en|es|fr|it|nl|pl|pt|sv)/:path*',
    // Match all pathnames except for
    // - /api
    // - /_next
    // - /_vercel
    // - all root files inside /public (e.g. /favicon.ico)
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
