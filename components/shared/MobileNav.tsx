import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "../ui/separator"

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image src="/assets/icons/menu.svg" width={24} height={24} alt="menu" className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <Image src={'/assets/images/logo.svg'} width={50} height={50} alt="logo"/>
          <Separator className="border border-gray-50"/>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNav