import { useState } from 'react';
import { fetchRoute } from '../../Utils/auth';
import leftImage from '../../assets/img/rendu3D_scene.png'
import logo from '../../assets/img/logo.svg'
import {NavLink, useNavigation} from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [passwordError, setPasswordError] = useState(false);
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [username, setUsername] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const navigation = useNavigation()

  const register = async () => {
    if(password == passwordConfirm && password !=null){
      const jsonData = {
        first_name : firstname,
        last_name : lastname,
        email : email,
        username : username,
        password : password,
      };
      //le find-by-user c'est un find par place...
      const response = await fetchRoute(
          'user/create',
          'POST',
          jsonData,
          ''
      );
      if(response){
        login()
      }
    } else {
      setPasswordError(true)
    }
  };

  const login = async () => {
    try {
      const response = await fetchRoute('auth/login', 'POST', {
        email,
        password
      });
      localStorage.setItem('userId', response.userId);
      localStorage.setItem('token', response.token);
      window.location.href = '/Home2Air-WebAPP/'
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login">
      <div className="login_left">
        <img src={leftImage} alt=""/>
      </div>
      <div className="row login_right">
        <img src={logo} alt="" className="logo mt-4"/>
        <h1 className="text-center mt-4">Créez un compte</h1>
        <div className="form-group col-10 mt-4">
          <label htmlFor="login-mail">Nom d'utilisateur</label>
          <input type="text" className="form-control" onChange={(e) => {setUsername(e.target.value);}}/>
        </div>
        <div className="form-group col-10 mt-4">
          <label htmlFor="login-mail">Nom</label>
          <input type="text" className="form-control" onChange={(e) => {setLastname(e.target.value);}}/>
        </div>
        <div className="form-group col-10 mt-4">
          <label htmlFor="login-mail">Prénom</label>
          <input type="text" className="form-control" onChange={(e) => {setFirstname(e.target.value);}}/>
        </div>
        <div className="form-group col-10 mt-4">
          <label htmlFor="login-mail">Email</label>
          <input type="email" className="form-control" onChange={(e) => {setEmail(e.target.value);}}/>
        </div>
        <div className="form-group mt-4 col-10">
          <label htmlFor="login-mail">Mot de passe</label>
          <input type="password" className={passwordError == false ? 'form-control' : 'form-control is-invalid'} aria-describedby="passworderror1" onChange={(e) => {setPassword(e.target.value);}}/>
          {passwordError == false ? '' :
              <div id="passworderror1" className="invalid-feedback">
                Les mots de passes doivent être identique
              </div>
          }
        </div>
        <div className="form-group mt-4 col-10">
          <label htmlFor="login-mail">Confirmez le mot de passe</label>
          <input type="password" className={passwordError == false ? 'form-control' : 'form-control is-invalid'} aria-describedby="passworderror2" onChange={(e) => {setPasswordConfirm(e.target.value);}}/>
          {passwordError == false ? '' :
              <div id="passworderror2" className="invalid-feedback">
                Les mots de passes doivent être identique
              </div>
          }
        </div>
        <button className="btn btn-primary col-4 mt-4" onClick={register} id="login-btn">
          Créer un compte
        </button>
        <span className="text-center mt-4">Déja un compte ? <NavLink to={'/login'} className='text-primary'>Connectez vous ici !</NavLink></span>
      </div>
    </div>
  );
}
