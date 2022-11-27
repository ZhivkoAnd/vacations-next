import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
import "../styles/Navigation.scss";
import "../styles/Footer.scss";
import "../styles/VacationPanel.scss";
import Wrap from "./Wrap";
import { ReactQueryWrapper } from "./ReactQueryWrapper";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Wrap>
          <ReactQueryWrapper>
            <div className="container">{children}</div>
          </ReactQueryWrapper>
        </Wrap>
      </body>
    </html>
  );
}
