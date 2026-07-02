// import { BASE_URL } from '../../api';
// import styles from "./HomeCard.module.css";
// import { Link } from "react-router-dom";

// const HomeCard = ({product}) => {
//   return (
//     <div className={`col-md-3 ${styles.col}`}>
//       <Link to={`/products/${product.slug}`} className={styles.link}>
//       <div className={styles.card}>
//         <div className={styles.cardImgWrapper}>
//           <img 
//           src={`${BASE_URL}${product.image}`}
//           className={styles.cardImgTop}
//           alt="product image"
//           />
//         </div>
//           <div className={styles.cardBody}>
//             <h5 className={`${styles.cardTitle} mb-1`}>{product.name}</h5>
//             <h6 className={styles.cardText}>{`$${product.price}`}</h6>
//           </div>
//       </div>
//       </Link>
//     </div>
//   )
// }

// export default HomeCard



import { BASE_URL } from '../../api';
import styles from "./HomeCard.module.css";
import { Link } from "react-router-dom";

const HomeCard = ({product}) => {
  // This cleans up any accidental double slashes (e.g., https://site.com//media -> https://site.com/media)
  const cleanImageUrl = `${BASE_URL}${product.image}`.replace(/([^:]\/)\/+/g, "$1");

  return (
    <div className={`col-md-3 ${styles.col}`}>
      <Link to={`/products/${product.slug}`} className={styles.link}>
        <div className={styles.card}>
          <div className={styles.cardImgWrapper}>
            <img 
              src={cleanImageUrl}
              className={styles.cardImgTop}
              alt="product image"
            />
          </div>
          <div className={styles.cardBody}>
            <h5 className={`${styles.cardTitle} mb-1`}>{product.name}</h5>
            <h6 className={styles.cardText}>{`$${product.price}`}</h6>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default HomeCard;