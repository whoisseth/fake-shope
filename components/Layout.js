import Navbar from './Navbar'
export default function Layout({ children, search }) {
  return (
    <>
      <Navbar search={search} />
      {children}
    </>
  )
}
