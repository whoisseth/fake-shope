import Link from 'next/link'
export default function Logo() {
  return (
    <Link href="/">
      <a className="italic   font-poppins whitespace-nowrap text-2xl font-semibold  ">
        fakeStore
      </a>
    </Link>
  )
}
