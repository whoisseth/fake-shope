import Image from 'next/image'
import Link from 'next/link'
export default function ProductCart({ image, name, price, slug }) {
  const shortName = name.substr(0, 12)
  let newName
  name.length >= 12 ? (newName = shortName + '...') : (newName = name)

  return (
    <>
      <Link href={'/' + slug}>
        <a className="rounded-2xl bg-white overflow-hidden w-52 h-60 flex flex-col items-center p-2  ">
          <div className="p-6 relative h-44 w-44 bg-blue-200 rounded-xl overflow-hidden">
            <Image src={image} layout="fill" object="cover" />
          </div>
          <div className="px-4 py-2">
            <div className="font-semibold text-lg mb-1">{newName}</div>
            <div className=" text-brand  text-sm">Rs. {price}</div>
          </div>
        </a>
      </Link>
    </>
  )
}
