import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (err) {
      setErr(err.response.data);
    }
  };

  console.log(err)

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>História de Aventureiros</h1>
          <p>
            Local de encontro de trilheiros e ciclistas em busca de aventuras.
          </p>
          <span>Não tem uma conta? Crie já!</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Registro</h1>
          <form>
            <input
              type="text"
              placeholder="Usuário"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Senha"
              name="password"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Nome"
              name="name"
              onChange={handleChange}
            />
            {err && err}
            <button onClick={handleClick}>Registro</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
