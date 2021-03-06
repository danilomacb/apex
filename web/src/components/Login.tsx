import { useEffect, useState } from "react";
import queryString from "query-string";
import axios from "axios";

import Logout from "./Logout";

interface IUser {
  id?: string;
  username?: string;
  discriminator?: string;
  avatar?: string;
}

function Login() {
  const [userLogged, setUserLogged] = useState(false);
  const [user, setUser] = useState<IUser>({});

  const { token_type, access_token } = queryString.parse(window.location.hash);

  const tokenTypeLS = localStorage.getItem("tokenTypeLS");
  const tokenLS = localStorage.getItem("tokenLS");

  useEffect(() => {
    if (tokenTypeLS && tokenLS) {
      axios("http://localhost:3001/login", {
        headers: { authorization: `${tokenTypeLS} ${tokenLS}` },
      }).then((res) => {
        setUser(res.data);

        setUserLogged(true);
      });
    }

    if (token_type && access_token) {
      axios("http://localhost:3001/login", {
        headers: { authorization: `${token_type} ${access_token}` },
      }).then((res) => {
        setUser(res.data);

        localStorage.setItem("tokenTypeLS", String(token_type));
        localStorage.setItem("tokenLS", String(access_token));

        setUserLogged(true);
      });
    }
  }, [tokenTypeLS, tokenLS, token_type, access_token]);

  return (
    <>
      {!userLogged ? (
        <li>
          <a href="https://discord.com/api/oauth2/authorize?client_id=821099689910861834&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=token&scope=identify">
            Login
          </a>
        </li>
      ) : (
        <>
          <li>{user.username}</li>
          <li>
            <img src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`} alt="avatar" />
          </li>
          <li>
            <Logout />
          </li>
        </>
      )}
    </>
  );
}

export default Login;
