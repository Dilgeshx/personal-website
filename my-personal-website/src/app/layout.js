import './global.css';
import Navbar from './Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}