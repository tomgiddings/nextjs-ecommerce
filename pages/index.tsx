import Head from 'next/head'
import axios from 'axios';

import * as Interface from '@lib/interface';
import ProductCard from '@components/ProductCard'
import Navigation from '@components/Navigation';

export const getServerSideProps = async () => {
  let products = [];

  try {
    const res = await axios.get<Interface.Product[]>(`${process.env.API_BASEURL}/product`);
    products = res.data;
  } catch (err) {
    console.log(err);
  }

  return { 
    props: {
      products
    }
  };
}

type Props = {
  products: Interface.Product[]
};

const Home = (props: Props) => {
  return (
    <>
      <Head>
        <title>Storefront</title>
        <meta name="description" content="A demo storefront for an ecommerce application" />
      </Head>
      <Navigation />
      {props.products ?
        <section className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {props.products.map((product) => (<ProductCard key={product.id} product={product}></ProductCard>))}
        </section>
        :<section className="container mx-auto bg-white text-xl p-4">No products found</section>
      }
 
    </>
  )
}

export default Home;
