import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import './styles/globals.scss';

export const metadata = {
  title: 'Portfolio',
  description: 'built with Next13+ and Strapi 4+',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
