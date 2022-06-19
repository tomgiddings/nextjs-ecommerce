import Head from 'next/head';
import axios from 'axios';
import * as CurrencyFormat from 'react-currency-format';

import * as Interface from '@lib/interface';
import Navigation from '@components/Navigation';

export const getServerSideProps = async (context) => {
  let product = {};

  try {
    const res = await axios.get<Interface.Product>(
      `${process.env.API_BASEURL}/product/${context.params.id}`
    );
    product = res.data;
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      product,
    },
  };
};

type Props = {
  product: Interface.Product;
};

const Products: React.FunctionComponent<Props> = (props) => {
  return (
    <>
      <Head>
        <title>{props.product.name} - Storefront</title>
        <meta name="description" content={props.product.shortDescription} />
      </Head>
      <Navigation />
      <section className="container mx-auto bg-white p-4 my-4 rounded-md grid grid-cols-1 md:grid-cols-4 space-y-4 md:gap-4 shadow-md">
        <div className="bg-gray-300 h-64 md:h-64 rounded-md col-span-1"></div>
        <span className="col-span-3 space-y-4">
          <h1 className="text-4xl text-slate-700 font-light mb-4">
            {props.product.name}
          </h1>
          {props.product.price && (
            <CurrencyFormat
              value={props.product.price}
              prefix="&pound;"
              decimalScale={2}
              className="text-2xl"
              displayType="text"
            />
          )}
          {props.product.shortDescription && (
            <p className="text-lg text-slate-600">
              {props.product.shortDescription}
            </p>
          )}
        </span>
        <span className="md:col-span-4 my-2 border-t-2 py-4">
          {props.product.fullDescription && (
            <>
              <h2 className="text-3xl text-slate-600 font-light mb-4">
                Product description
              </h2>
              <p className="text-sm text-slate-700">
                {props.product.fullDescription}
              </p>
            </>
          )}
        </span>
      </section>
    </>
  );
};

export default Products;
