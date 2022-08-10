import { createContext, useContext, useState, useEffect, ChangeEvent } from 'react';
import { useQueryProductsQuery, QueryProductsQuery } from '../../graphql/generated';

export const AppContext = createContext({
    products: [],
    addComment: (comment: string) => { }
})

export const AppProvider = ({ children }) => {
    const { data } = useQueryProductsQuery();
    const [products, setProducts] = useState<QueryProductsQuery[]>([]);

    console.log('products', products);

    useEffect(() => {
        if (data && data.produtos) setProducts(data.produtos);
    }, [data])

    const [minPriceFilter, setMinPriceFilter] = useState('')
    const [maxPriceFilter, setMaxPriceFilter] = useState('')

    const [filteredProducts, setFilteredProducts] = useState<QueryProductsQuery[]>([])
    const [error, setError] = useState<null | "max" | "min">(null)

    useEffect(() => filterProducts(), [minPriceFilter, maxPriceFilter])

    console.log(minPriceFilter)

    function filterProducts() {
        if (parseFloat(minPriceFilter) !== 0 && parseFloat(minPriceFilter) > parseFloat(maxPriceFilter)) {
            setError("min")
        }

        if (parseFloat(minPriceFilter) !== 0 && parseFloat(maxPriceFilter) > parseFloat(minPriceFilter)) {
            setError("max")
        }

        if (minPriceFilter && maxPriceFilter) {
            return setFilteredProducts(products.filter((product) => product.preco >= parseFloat(minPriceFilter) && product.preco <= parseFloat(maxPriceFilter)))
        }

        if (maxPriceFilter) {
            return setFilteredProducts(products.filter((product) => product.preco <= parseFloat(maxPriceFilter)) || [])
        }

        if (minPriceFilter) {
            return setFilteredProducts(products.filter((product) => product.preco >= parseFloat(minPriceFilter)) || [])
        }
    }

    const [searchProduct, setSearchProduct] = useState('')
    function handleSearchProduct(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault()
        setSearchProduct(event.target.value)
        console.log(searchProduct)
    }
    const lowerSearch = searchProduct.toLocaleLowerCase()
    const searchProductsByName = products.filter((product) => product.nomeDoProduto.toLowerCase().includes(lowerSearch))

    return (
        <AppContext.Provider value={{ products, filterProducts, setMinPriceFilter, setMaxPriceFilter, filteredProducts, error, searchProductsByName, searchProduct, handleSearchProduct }}>
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