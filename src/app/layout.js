import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><AuthProvider>
         <Toaster position="top-center"  toastOptions={{
    style: {
      background: '#1a1a1a',
      color: 'yellow',
      border: '1px solid #444',
    },
    duration: 3000,
  }} />
          {children}
        </AuthProvider></body>
    </html>
  );
}
