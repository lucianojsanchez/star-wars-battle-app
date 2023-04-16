import NavBar from "@/components/NavBar";

import "./globals.css";

export const metadata = {
  title: "Star Wars Battle App",
  description: "Explore Star Wars Universe Characters and Make Them Battle!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-y-scroll w-full h-full min-h-screen bg-gradient-to-r from-blue-900 via-gray-800 to-red-900 ">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
