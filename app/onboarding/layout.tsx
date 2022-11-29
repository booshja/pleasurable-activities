require("server-only");

// components
import NavbarLoggedOut from "@shared/components/NavbarLoggedOut";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarLoggedOut onboarding />
      {children}
    </>
  );
}
