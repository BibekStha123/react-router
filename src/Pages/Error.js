import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h4>Ooops... Seems like wrong path. Page not found</h4>
      <p>
        Go to <Link to="/">Home</Link> Page.
      </p>
    </div>
  );
}

export default Error;
