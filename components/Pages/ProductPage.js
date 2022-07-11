import Layout from '../Layout'
import { IoIosArrowBack } from 'react-icons/io'
import Link from 'next/dist/client/link'
import { BiCategory } from 'react-icons/bi'
import Image from 'next/image'
import ReactStars from 'react-rating-stars-component'
export default function ProductPage({ data }) {
  console.log(data)
  return (
    <>
      <Layout />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-4 sm:mb-10 ">
        <BackButton />
        <div className="px-4 sm:px-6 sm:flex  gap-4 md:gap-12 sm:mt-8 sm:mx-auto max-w-6xl  items-center  justify-center  ">
          <BannerImage img={data.image} />
          <ProductDesc data={data} />
        </div>
      </div>
    </>
  )
}

function BackButton() {
  return (
    <Link href="/">
      <a className=" mt-8  mb-4    py-1.5 w-32 items-center rounded  hover:shadow font-semibold   cursor-pointer  border-2 flex border-brand   justify-center gap-1">
        <IoIosArrowBack className="text-xl -ml-2 " />
        <span className="  text-brand text-lg  font-semibold"> Back </span>
      </a>
    </Link>
  )
}

function BannerImage({ className, img }) {
  return (
    <div className={className}>
      <div className="relative h-80 w-80   rounded overflow-hidden  mx-auto sm:mx-0">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
    </div>
  )
}

function ProductDesc({ data }) {
  return (
    <div className="mx-auto sm:mx-0 max-w-sm sm:ml-4">
      <h2 className="text-2xl font-semibold mt-2">{data.title}</h2>
      <div className="mb-4 flex justify-between items-center">
        <p className="text-xl font-bold text-blue-400 ">
          Rs.&nbsp;{data.price}
        </p>
        <p className="uppercase font-bold   flex items-center gap-1">
          <BiCategory />
          <span> {data.category}</span>
        </p>
      </div>
      <desc>{data.description}</desc>
      <section className="flex justify-between items-center">
        <ReactStars
          count={5}
          isHalf
          edit={false}
          size={32}
          value={data.rating.rate}
          activeColor="#ffd700"
        />
        <span className="text-sm text-[#007185]">
          {data.rating.count} ratings
        </span>
      </section>
    </div>
  )
}
