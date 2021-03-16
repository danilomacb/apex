import "../styles/logout.scss";

function Logout() {
  return (
    <button
      onClick={() => {
        localStorage.removeItem("token");
        localStorage.removeItem("tokenType");
      }}
    >
      Logout
    </button>
  );
}

export default Logout;
