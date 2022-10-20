import { getStoredCart } from "../utilities/fakedb";

export const productAndCartLoader=async()=>{
const productsData=await fetch('products.json');
const products=await productsData.json();

const savedCart=getStoredCart();
const initialCart=[]
for(const id in savedCart){
    const addedProducts=products.find(product=>product.id===id);
    if(addedProducts){
        const quantity=savedCart[id];
        addedProducts.quantity=quantity
        initialCart.push(addedProducts)
    }
    else{
        
    }
}
return { products:products,  initialCart: initialCart}

}