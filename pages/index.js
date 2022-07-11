import HomePage from '../components/Pages/HomePage'

export default function Home({ data }) {
  return <HomePage data={data} />
}

export async function getServerSideProps() {
  const res = await fetch(`https://fakestoreapi.com/products`)
  const data = await res.json()

  return {
    props: { data }
  }
}
