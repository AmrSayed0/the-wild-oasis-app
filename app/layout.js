import Logo from "@/app/_components/Logo";
import Navigation from "./_components/Navigation";

export const metadata = {
  title: "The Wild Oasis",
  description: "Welcome to paradise.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Logo />
        <Navigation />
        {children}
        <footer>
          <p>&copy; 2024 Next.js</p>
        </footer>
      </body>
    </html>
  );
}
