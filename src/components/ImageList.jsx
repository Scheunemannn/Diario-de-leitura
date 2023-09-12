/* eslint-disable @next/next/no-img-element */
import Image from "next/image"


const vagabondList = [
    "https://m.media-amazon.com/images/I/81PsrxPZpLL._SL1181_.jpg",
    "https://m.media-amazon.com/images/I/91WX+eMJ2ZL._SL1500_.jpg"
]

export function ImageList () {
    return (
        <>
        <div>
         <img src={vagabondList[0]} alt="" />
         <img src={vagabondList[1]} alt="" />
        </div>
        </>
    )
}