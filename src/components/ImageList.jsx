/* eslint-disable @next/next/no-img-element */
import styles from '../styles/ImageList.module.css'

const vagabondList = [
    "https://m.media-amazon.com/images/I/91DtX+cX-0L._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/915xImc+DsL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/91ozHMpxl9L._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/91ViG7I2fHL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/818ECcTVkzL._SL1500_.jpg",
    "https://www.fonomag.com.br/image/cache/data/eftr/Img_ftr_rp_273601-1160x1160.JPG?version=20221107171432"
]

export function ImageList () {
    return (
        <>
        <div  className={styles.volumesContainer}>
         <img className={styles.volumeImages} src={vagabondList[0]} alt="" />
         <img className={styles.volumeImages} src={vagabondList[1]} alt="" />
         <img className={styles.volumeImages} src={vagabondList[2]} alt="" />
         <img className={styles.volumeImages} src={vagabondList[3]} alt="" />
         <img className={styles.volumeImages} src={vagabondList[4]} alt="" />
         <img className={styles.volumeImages} src={vagabondList[5]} alt="" />
        </div>
        </>
    )
}