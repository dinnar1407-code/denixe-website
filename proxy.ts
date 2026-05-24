import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
export const proxy=createMiddleware(routing);
export const config = {matcher:['/','/(en|zh|de|ja|it|ko|hi|pt|fr)/:path*']};
