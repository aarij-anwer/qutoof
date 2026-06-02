import { NextRequest, NextResponse } from 'next/server';

const ARABIC_HOST = 'arabic.qutoofacademy.com';
const ARABIC_INTERNAL_PATH = '/arabic-subdomain';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host')?.split(':')[0];

  if (hostname !== ARABIC_HOST) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();

  if (
    url.pathname !== ARABIC_INTERNAL_PATH &&
    !url.pathname.startsWith(`${ARABIC_INTERNAL_PATH}/`)
  ) {
    url.pathname = `${ARABIC_INTERNAL_PATH}${url.pathname === '/' ? '' : url.pathname}`;
  }

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
