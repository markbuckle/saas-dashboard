import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import PageHeader from "@/components/page-header";
import Head from "next/head";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // provider will pass the data onto other clerk components like sign out, sign in and user button
    <ClerkProvider>
      <html lang="en">
        <Head>
          <title>My App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Script src="https://saas-widget.vercel.app/widget.umd.js"></Script>
          <PageHeader />
          <my-widget></my-widget>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
