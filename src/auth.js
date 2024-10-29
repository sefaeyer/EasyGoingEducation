import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "./services/auth-service";

const config = {
	providers: [
		Credentials({
			authorize: async (credentials) => {
				const res = await login(credentials);
				const data = await res.json();

				if (!res.ok) return null;

				const payload = {
					user: { ...data },
					accessToken: data.token,
				};
				delete payload.user.token;

				return payload;
			},
		}),
	],
	callbacks: {
		// middleware da ayarlandigi sekliyle, NextAuth un kapsama alanina giren sayfalara yapilan isteklerden hemen once authorized callback i calisir.
		// Bu callback icinde dondurulen true veya false ifadesine gore talep edilen sayfa acilir veya acilmaz.
		authorized({ auth, request }) {
			
            const { pathname } = request.nextUrl;

            const userRole = auth?.user?.role; 
            const isLoggedIn = !!userRole;
            const isInLoginPage = pathname.startsWith("/login");
            const isInDashboardPages = pathname.startsWith("/dashboard");

            if (isLoggedIn) {
                if (isInLoginPage) {
                    const url = new URL("dashboard", request.nextUrl.origin);
                    return Response.redirect(url);
                }
                else if(isInDashboardPages) {
                    // rolebased routing
                    return true;
                }

                return true;
            }
            else if(isInDashboardPages) {
                return false;
            }




			return true;
		},

		// jwt token a ihtiyac duyulan her yerde bu callback calisir
		async jwt({ token, user }) {
			return { ...token, ...user };
		},

		// session a ihtiyac duyulan her yerde bu callback calisir.
		async session({ session, token }) {
			const { accessToken, user } = token;

            session.user = user;
            session.accessToken = accessToken;
            return session;
		},
	},
	pages: {
		signIn: "/login",
	},
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);