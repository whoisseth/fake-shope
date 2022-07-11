import { IoMdSearch } from 'react-icons/io'
import { useRouter } from 'next/router'
import classnames from 'classnames'

export const SearchBox = ({ search, className }) => {
  const router = useRouter()
  return (
    <div
      className={classnames(' flex w-full items-center justify-center ', {
        ' hidden ': router.asPath != '/',
      })}
    >
      <div
        className={classnames(
          'mx-4  gap-1 items-center text-white font-poppins  bg-white rounded overflow-hidden px-2 max-w-xl  ring-1 ring-main-blue w-full  flex     ',
          className,
        )}
      >
        <IoMdSearch className="text-xl text-gray-400 cursor-pointer " />
        <input
          onChange={search}
          type="text"
          placeholder="Search for Products, Brands and More   "
          className="flex  mb-2 w-full px-2  outline-none  placeholder:text-gray-400 placeholder:text-xs  text-black   my-2 text-sm 
      "
        />
      </div>
    </div>
  )
}
