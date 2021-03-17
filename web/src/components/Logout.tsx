import "../styles/logout.scss";

function Logout() {
  return (
    <button
      onClick={() => {
        localStorage.removeItem("tokenLS");
        localStorage.removeItem("tokenTypeLS");
      }}
    >
      Logout
    </button>
  );
}

export default Logout;
