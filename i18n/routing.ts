import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
export const routing = defineRouting({locales:['en','zh','de','ja','it','ko','hi','pt','fr'],defaultLocale:'en',localePrefix:'as-needed'});
export const {Link,redirect,usePathname,useRouter,getPathname}=createNavigation(routing);
