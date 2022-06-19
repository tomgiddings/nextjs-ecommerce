import * as I from '@lib/interface';
import * as CurrencyFormat from 'react-currency-format';

type Props = {
    product: I.Product
}

const ProductCard: React.FunctionComponent<Props> = (props) => (
    <a href={`/product/${props.product.id}`} className="bg-white rounded-md shadow-md p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="bg-gray-300 h-48 md:h-32 rounded-md col-span-1"></div>
        <div className="col-span-auto">
            <h2 className="text-xl text-slate-800 font-semibold">{props.product.name}</h2>
            <div className="text-slate-600">{props.product.shortDescription}</div>
            <CurrencyFormat value={props.product.price} prefix="&pound;" decimalScale={2} className="text-lg text-slate-800 font-medium" displayType="text"  />   
        </div>
    </a>
);

export default ProductCard;
