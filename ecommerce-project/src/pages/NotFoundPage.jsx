import { Link } from "react-router";
import { Header } from "../components/Header";
import "./NotFoundPage.css";
export function NotFoundPage({ cart }) {
  return (
    <>
      <title>404 - Page Not Found</title>
      <link rel="icon" type="image/svg+xml" href="./404-favicon.png" />

      <Header cart={cart} />
      <div className="not-found-page">
        <div className="not-found-container">
          <div className="error-code">404</div>
          <div className="error-title">Page not found</div>
          <p className="error-message">
            Oops! The page you are looking for might have been removed, had its
            name changed, or is temporarily unavailable.
          </p>
          <div className="button-group">
            <Link to="/" className="button-primary">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
