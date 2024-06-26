import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import "dotenv/config";
import Providers from "./providers";

export const metadata = {
  title: "Unvieled",
  description: "Get social",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="preconnect"
        precedence="default"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        precedence="default"
        href="https://fonts.gstatic.com"
        crossorigin
      />
      <link
        precedence="default"
        href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap"
        rel="stylesheet"
      ></link>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
