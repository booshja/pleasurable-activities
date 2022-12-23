require("server-only");

// components
import NavbarLoggedOut from "@shared/components/nav/NavbarLoggedOut";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarLoggedOut />
      {children}
    </>
  );
}
