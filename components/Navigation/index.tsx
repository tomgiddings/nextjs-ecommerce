import Link from 'next/link';

const Navigation: React.FunctionComponent = () => (
    <div className="bg-slate-700 text-white">
        <header className="container mx-auto grid grid-flow-row gap-2 items-center">
            <Link href="/">
                <a className="text-6xl font-thin text-slate-200">Storefront</a>
            </Link>
            <nav className="space-x-2 pb-2">
                <Link href="/">
                    <a className='font-medium text-slate-300 hover:underline hover:underline-offset-2 hover:text-white transition-colors duration-300'>Home</a>
                </Link>
            </nav>
        </header>
    </div>
);

export default Navigation;
