import { FaUserCheck } from 'react-icons/fa'
import Logo from '../components/Logo'
import { HiShoppingCart } from 'react-icons/hi'
import { SearchBox } from '../components/SearchBox'

export default function Navbar({ search }) {
  return (
    <div className="sticky top-0 bg-slate-100 py-2 space-y-2 z-50 shadow-md  text-main-blue min-h-[60px]  ">
      <div className=" flex justify-between items-center  px-4 max-w-6xl mx-auto">
        <div className="flex gap-4 items-center">
          <Logo />
        </div>
        <SearchBox search={search} className="hidden md:flex w-full" />
        <div className="flex gap-4 items-center">
          <HiShoppingCart className=" text-2xl" />
          <User />
        </div>
      </div>
      <SearchBox className="md:hidden" />
    </div>
  )
}

const User = () => <FaUserCheck className=" text-2xl" />
