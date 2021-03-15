import { useEffect } from "react";
import queryString from "query-string";
import axios from "axios";

function Login() {
  const parsed = queryString.parse(window.location.hash);

  useEffect(() => {
    axios("http://localhost:3001/login", {
      headers: { authorization: `${parsed.token_type} ${parsed.access_token}` },
    }).then((res) => console.log(res.data));
  }, []);

  return (
    <a href="https://discord.com/api/oauth2/authorize?client_id=821099689910861834&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=token&scope=identify">
      Login
    </a>
  );
}

export default Login;
