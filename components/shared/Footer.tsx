import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image src="/assets/images/Asset 1.svg" alt="logo" width={100} height={100}/>
        </Link>
        <p>2024 FlashPOD. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer