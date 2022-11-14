import React, { useEffect } from 'react'
import styles from '../styles/Card.module.css'
import Link from 'next/link'
import Image from 'next/image'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeIcon from '@mui/icons-material/Home';
const card = ({resturants}) => {
  return (
    resturants.map((resturant)=>(
      <Link href={resturant.link} passHref>
        <div className={styles.card} key={resturant.id}>
          <h2>{resturant.name}</h2>
          <Image alt="" src={resturant.logo} width={200} height={200}/>
          <p className={styles.sectionD}>{resturant.description}</p>
          <div className={styles.section}>
            <LocalPhoneIcon/>
            <p className={styles.sectionP}>{resturant.phonenumber}</p>
          </div>
          <div className={styles.section}>
            <HomeIcon/>
            <p className={styles.sectionP}>{resturant.address}</p>
          </div>
        </div>
      </Link>
    )
    )
  )
}

export default card