import Link from "next/link"

export default function Footer(){
    return(
        <>
        <div className="footer"> 
            <ul className="footer-btn">
                <li>Help</li>
                <li>Privacy POlicy</li>
                <li>More Info</li>
            </ul>
        </div>
            <div className="flex justify-center item-center bg-black ">
            <Link href={"/"}><button> Back To Top</button></Link>
            </div>
        </>
    
    )
}