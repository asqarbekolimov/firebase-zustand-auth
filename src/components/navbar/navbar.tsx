import useAuth from "../../hooks/useAuth";
import { useAuthStore } from "../../store/auth.store";

const Navbar = () => {
  const { logout } = useAuth();
  const { isLoading } = useAuthStore();

  return (
    <div className="d-flex flex-column flex-md-row align-items-center justify-content-between p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <button
          className="btn btn-outline-primary"
          onClick={logout}
          disabled={isLoading}
        >
          {isLoading ? "..." : "Logout"}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
