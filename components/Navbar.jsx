import Button from "./Button";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.logo}>Tinker</h1>
      </div>
      <div className="searchbar">
        <form>
          <input className={styles.search} type="text" name="search" placeholder="Find books here"/>
        </form>
      </div>
        
      <div className={styles.navbarActions}>
        <Button variant="secondary">Sign in</Button>
        <Button variant="primary">Create Account</Button>
      </div>
    </div>
  );
};
export default Navbar;