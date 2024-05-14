import { useState } from "react"
import { Input } from "./components/forms/Input"
import { Checkbox } from "./components/forms/Checkbox"
import { ProductCategoryRow } from "./components/products/ProductCategoryRow"
import { ProductRow } from "./components/products/ProductRow"
import { ErrorBoundary } from "react-error-boundary"

/* ======== Capturer les erreurs avec ErrorBoundary ======== */

const PRODUCTS = [
  { category: "Fruits" , price: "$1", stocked: true, name: "Apple"},
  { category: "Fruits" , price: "$1", stocked: true, name: "Dragonfruit"},
  { category: "Fruits" , price: "$2", stocked: false, name: "Passionfruit"},
  { category: "Vegetables" , price: "$2", stocked: true, name: "Spinach"},
  { category: "Vegetables" , price: "$4", stocked: false, name: "Pumpkin"},
  { category: "Vegetables" , price: "$1", stocked: true, name: "Peas"}

]

function App() {

  const [checked, setCheck] = useState(false)
  const [search, setSearch] = useState("")
  
  const visibleProducts = PRODUCTS.filter(product => {
    if(checked && !product.stocked)
    {
      return false
    }
    if(search && !product.name.includes(search))
    {
      return false
    }
    return true
  })

  return <>
    <div className="container">
      <SearchBar checked={checked} 
                 onCheckChange={setCheck} 
                 search={search}
                 onSearchChange={setSearch}
                 />

      <ErrorBoundary 
        FallbackComponent={AlertError}
        onReset={() => {console.log("Reset")}}
      >
        <ProductTable products={visibleProducts} />
      </ErrorBoundary>
    </div>
  </>
}


function AlertError({error, resetErrorBoundary}) {
  return <div className="alert alert-danger">
    {error.toString()}
    <button
      className="btn btn-secondary"
      onClick={resetErrorBoundary}
    >
      Reset
    </button>
  </div>
}

function SearchBar ({checked, onCheckChange, search, onSearchChange}) 
{
  return <div>
    <div className="mb-3">
      <Input value={search} 
             onChange={onSearchChange} 
             placeholder="Rechercher..." />

      <Checkbox id="stocked" 
                checked={checked} 
                onChange={onCheckChange} 
                label="Afficher les produits en stock" />
    </div>  
  </div>
}

function ProductTable({products})
{
  const rows = [];
  let lastCategory = null;

  for (let product of products)
  {
    if(product.category != lastCategory)
    {
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />)
    }
    lastCategory = product.category
    rows.push(<ProductRow product={product} key={product.name} />)
  }

  return <table className="table">
    <thead>
      <tr>
        <th>Nom</th>
        <th>Prix</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
    
  </table>
}

export default App
