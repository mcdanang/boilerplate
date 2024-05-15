import NextAuth from "next-auth"
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"

const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_ID as string,
            clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
        }),
    ],
    // Optional: Add other configurations, such as callbacks, database connection, etc.
};

export default NextAuth(options);