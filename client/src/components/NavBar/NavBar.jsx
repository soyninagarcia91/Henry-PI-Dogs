import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { getDogs } from "../../redux/actions/index";
import Logo from '../../assets/favicon-32x32.png'
import styles from './NavBar.module.css'
import { Link } from "react-router-dom";

export default function NavBar() {

  return (
    <Fragment>
      <div className={styles.nav}>
      <Link to='/home'>
      <img id="logoHenry" src={Logo} alt="a happy dog icon" className={styles.logo}/></Link>
      <div>
      <h1>Woof</h1>
      <h3>dog's page</h3>

      </div>
      <Link to='/dog'><button>Create a dog</button></Link>
      </div>
    </Fragment>
  );
}
