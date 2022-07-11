import ProductPage from '../components/Pages/ProductPage'

export default function Product({ data }) {
  console.log(data)
  return <ProductPage data={data} />
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/ ${params.id}`)
  const data = await res.json()
  return {
    props: { data },
  }
}
