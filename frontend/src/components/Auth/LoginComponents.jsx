import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";

const userLoginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});

function LoginComponents() {
  const {
    register,
    setError,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userLoginSchema),
  });

  const addRecord = (data) => {
    axios
      .post("http://127.0.0.1:8000/users", data)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      })
      .catch((err) => {
        if (err.response.data) {
          if (err.response.data.email) {
            setError("email", {
              type: "server",
              message: err.response.data.email,
            });
          }
        }
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mb-4 mt-4">
          <h1>User Login</h1>
          <hr />
          <form action="" onSubmit={handleSubmit(addRecord)}>
           
            <div className="form-group mb-2">
              <label htmlFor="email">
                Email:
                {errors.email?.message && (
                  <span className="text-danger">{errors.email?.message}</span>
                )}
              </label>
              <input
                type="text"
                {...register("email")}
                className="form-control"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="password">
                Password:
                {errors.password?.message && (
                  <span className="text-danger">
                    {errors.password?.message}
                  </span>
                )}
              </label>
              <input
                type="text"
                {...register("password")}
                className="form-control"
              />
            </div>
            
            <div className="form-group mb-2">
              <button className="btn btn-success w-100">Add Record</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginComponents;
