import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
import "../styles/Navigation.scss";
import "../styles/Footer.scss";
import "../styles/VacationPanel.scss";
import Wrap from "./Wrap";
import Providers from "./Providers";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Providers>
          <Wrap>
            <div className="container">{children}</div>
          </Wrap>
        </Providers>
      </body>
    </html>
  );
}
