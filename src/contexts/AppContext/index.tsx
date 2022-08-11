import { createContext, useContext, useState, useEffect, ChangeEvent } from 'react';
import { useQueryProductsQuery, QueryProductsQuery } from '../../graphql/generated';

export const AppContext = createContext({
    products: [],
    cart: [],
    addComment: (comment: string) => { }
})

export const AppProvider = ({ children }) => {

    const { data } = useQueryProductsQuery();

    const [products, setProducts] = useState<QueryProductsQuery[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<QueryProductsQuery[]>([]);
    const [minPriceFilter, setMinPriceFilter] = useState('');
    const [maxPriceFilter, setMaxPriceFilter] = useState('');
    const [error, setError] = useState<null | "max" | "min">(null);
    const [query, setQuery] = useState('');
    const [priceOption, setPriceOption] = useState('Nenhum');
    const [inclusionDateOption, setInclusionDateOption] = useState("Nenhum");
    const [cart, setCart] = useState<QueryProductsQuery[]>([]);

    console.log('priceOption', priceOption);
    console.log('inclusionDateOption', inclusionDateOption);
    console.log('filteredProducts', filteredProducts);

    useEffect(() => {
        if (data && data.produtos) {
            setProducts(data.produtos);
            setFilteredProducts(data.produtos);
        }
    }, [data]);

    useEffect(() => filterProducts(), [minPriceFilter, maxPriceFilter, priceOption, inclusionDateOption, query]);

    useEffect(() => setQuery(''), [minPriceFilter, maxPriceFilter, priceOption, inclusionDateOption]);

    function filterProducts() {
        let newFilteredProducts: QueryProductsQuery[] = [...products];

        if (query && query.length > 1) {
            return setFilteredProducts(products.filter((product) => product.nomeDoProduto.toLowerCase().includes(query.toLowerCase())))
        }

        if (parseFloat(minPriceFilter) !== 0 && parseFloat(minPriceFilter) > parseFloat(maxPriceFilter)) {
            setError("min")
        }

        if (parseFloat(minPriceFilter) !== 0 && parseFloat(maxPriceFilter) > parseFloat(minPriceFilter)) {
            setError("max")
        }

        if (minPriceFilter && maxPriceFilter) {
            newFilteredProducts = products.filter((product) => product.preco >= parseFloat(minPriceFilter) && product.preco <= parseFloat(maxPriceFilter));
        }

        if (maxPriceFilter && !minPriceFilter) {
            newFilteredProducts = products.filter((product) => product.preco <= parseFloat(maxPriceFilter))
        }

        if (minPriceFilter && !maxPriceFilter) {
            newFilteredProducts = products.filter((product) => product.preco >= parseFloat(minPriceFilter))
        }

        if (inclusionDateOption === 'Mais recente') {
            newFilteredProducts.sort(((a, b) => a.createdAt > b.createdAt ? 1 : -1))
        }

        if (inclusionDateOption === 'Menos recente') {
            newFilteredProducts.sort(((a, b) => a.createdAt > b.createdAt ? -1 : 1))
        }

        if (priceOption === 'Maior preço') {
            newFilteredProducts.sort(((a, b) => a.preco > b.preco ? -1 : 1));
        }

        if (priceOption === 'Menor preço') {
            newFilteredProducts.sort(((a, b) => a.preco > b.preco ? 1 : -1));
        }

        return setFilteredProducts(newFilteredProducts);

    }

    return (
        <AppContext.Provider
            value={{
                products,
                filteredProducts,
                error,
                setMinPriceFilter,
                setMaxPriceFilter,
                setPriceOption,
                priceOption,
                inclusionDateOption,
                setInclusionDateOption,
                cart,
                setCart,
                query,
                setQuery
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('useApp must be used within a <AppProvider />');
    }

    return context;
}