import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/category/food' || request.nextUrl.pathname.startsWith('/category/food/')) {
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = newUrl.pathname.replace('/category/food', '/food');
    return NextResponse.redirect(newUrl, 308);
  }
  return intlMiddleware(request);
}

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/(de|en|es|fr|it|nl|pl|pt|sv)/:path*',
    // Match all pathnames except for
    // - /api
    // - /_next
    // - /_vercel
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ],
  runtime: 'experimental-edge'
};
