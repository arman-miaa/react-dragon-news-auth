import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Loging = () => {
    const { handleLogin, setUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        handleLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
            })
            .catch((error) => {
            alert(error.code)
        })
    }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 rounded-none p-4">
        <h2 className="text-center text-2xl font-semibold">
          Login Your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
                          type="email"
                          name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
                          type="password"
                          name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary rounded-none">Login</button>
          </div>
        </form>
        <p>
          Don`t Have An Account ?{" "}
          <Link className="text-red-500" to="/auth/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Loging;