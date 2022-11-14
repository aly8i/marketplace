import LunchDiningIcon from '@mui/icons-material/LunchDining';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import LiquorIcon from '@mui/icons-material/Liquor';
import KebabDiningIcon from '@mui/icons-material/KebabDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import HomeIcon from '@mui/icons-material/Home';
import styles from "../styles/NavMenu.module.css";
import Image from 'next/image';
import { Link as ScrollLink } from "react-scroll" ;
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { updateQuery } from "./redux/filterSlice";

function NavMenu() {
  const dispatch = useDispatch();
  const handleFilter = (query) =>{
    dispatch(updateQuery({query}));
  }
  return (
    <>
      <div className={styles.container}>
      <ScrollLink to="pizzawrapper" spy={true} smooth={true} offset={-100} duration={500}>
          <ul className={styles.ul}>
            <div onClick={()=>handleFilter("burger")}>
              <li className={styles.li} >
                <span>
                  <div className={styles.title}>Burgers</div>
                </span>
                <LunchDiningIcon className={styles.icon}/>
              </li>
            </div>
            <span>
              <li className={styles.li} onClick={()=>handleFilter("pizza")}>
                  <span>
                    <div className={styles.title}>Pizzas</div>
                  </span>
                  <LocalPizzaIcon className={styles.icon}/>
              </li>
            </span>
            <span>
              <li className={styles.li} onClick={()=>handleFilter("drink")}>
                    <span>
                      <div className={styles.title}>Drinks</div>
                    </span>
                    <LiquorIcon className={styles.icon}/>
              </li>
            </span>
            <Link href='/' passHref>
            <span>
              <li className={styles.li} onClick={()=>handleFilter("")}>
                  <span>
                    <div className={styles.title}>Home</div>
                  </span>
                  <HomeIcon className={styles.icon}/>
              </li>
            </span>
            </Link>
            <span>
              <li className={styles.li} onClick={()=>handleFilter("grill")}>
                  <span>
                    <div className={styles.title}>Grills</div>
                  </span>
                  <KebabDiningIcon className={styles.icon}/>
              </li>
            </span>
            <span>
              <li className={styles.li} onClick={()=>handleFilter("meal")}>
                    <span>
                      <div className={styles.title}>Meals</div>
                    </span>
                    < FastfoodIcon className={styles.icon}/>
                </li>
            </span>
            <span>
              <li className={styles.li} onClick={()=>handleFilter("dish")}>
                    <span>
                      <div className={styles.title}>Dishes</div>
                    </span>
                    <DinnerDiningIcon className={styles.icon}/>
                </li>
            </span>
          </ul>
        </ScrollLink>
      </div>
    </>
  )
}

export default NavMenu