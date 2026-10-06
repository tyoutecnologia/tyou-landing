import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/navigation';
 
export default createMiddleware(routing);
 
export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/_next` or `/_vercel`
  // - … the panel under `/app`, which next.config.mjs proxies to its own deployment
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ['/((?!api|_next|_vercel|app/|app$|.*\\..*).*)']
};
