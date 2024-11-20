import { updateSession } from '@/supabase/middleware'
import { type NextRequest } from 'next/server'


export async function middleware(request: NextRequest) {
    return await updateSession(request)
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$|^/$).*)',
    ],
}

// |^/$ ->  Match the root path
// |.*\\.(?:svg|png|jpg|jpeg|gif|webp)$ -> Match all image files
// |favicon.ico -> Match the favicon file
// |_next/image -> Match the image optimization files
// |_next/static -> Match the static files
// |.* -> Match all other paths
// |((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$|^/$).*) -> Match all paths except the ones mentioned above