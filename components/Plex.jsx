import Button from "./Button";
import styles from "./Plex.module.css";
import { FaArrowCircleDown} from 'react-icons/fa';

export default function Plex({ heading1, pAddress }) {
  return (
    
    <div className={styles.container}>
        <div className={styles.infobutton}>
        <Button variant="seconddary">Sign in</Button>
            <Button variant="secondary">About</Button>
            <Button variant="seconddary">Contact us</Button>

        </div>
       
        <div className={styles.text}>
             <h1>{heading1}</h1>
             <p>{pAddress}</p>
        </div>

        <div className="searchbar">
            <input className={styles.search} type="text" name="search"/>
        </div>
        <div className={styles.Menu}>
      <h2 className={styles.menu}><FaArrowCircleDown/></h2>
      </div>

    </div>
  );
};