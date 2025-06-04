import Header from "../components/Header";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <Header />
        {children}
      </body>
    </html>
  );
}
