import Image from 'next/image'
import Link from 'next/link'
import zlogo from "../../public/zlogo.png"
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.left}>
        <Image src={zlogo} alt="logo" />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/login" className="">로그인</Link>
      </div>
    </div> 
  )
}
