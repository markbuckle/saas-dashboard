import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import PageHeader from "@/components/page-header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // provider will pass the data onto other clerk components like sign out, sign in and user button
    <ClerkProvider>
      <html lang="en">
        <body>
          <PageHeader />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
