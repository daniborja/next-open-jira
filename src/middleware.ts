// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith('/api/entries/')) {
    const id = req.nextUrl.pathname.replace('/api/entries/', '');

    const checkMongoIDRegExp = new RegExp('^[0-9a-fA-F]{24}$');
    if (!checkMongoIDRegExp.test(id)) {
      // // // with out any other endpoint (Producing a Response): https://nextjs.org/docs/advanced-features/middleware#producing-a-response
      return new NextResponse(
        JSON.stringify({ message: `'${id}' is not a valid ID` }),
        { status: 401, headers: { 'content-type': 'application/json' } }
      );

     /*  // // // with another endpoint for errors  <--  bad-request.ts
      // const url = req.nextUrl.clone();
      // url.pathname = '/api/bad-request';
      // url.search = `?message=${id} is not a valid ID`; // message: bad-req.ts
      // return NextResponse.rewrite(url);

      // // short way  ▲
      // return NextResponse.redirect(
      //   new URL(
      //     `/api/bad-request?message=${id} is not a valid MongoID`,
      //     req.url
      //   )
      // ); */
    }
  }

  return NextResponse.next();
}

// // See "Matching Paths" below to learn more
export const config = {
  // matcher: '/about/:path*',
  matcher: ['/api/entries/:path*'],
};
