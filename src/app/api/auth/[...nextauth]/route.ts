import NextAuth from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { authOptions } from "@/utils/authOptions";




export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
