import SubTitle from "./SubTitle";
import ProductDisplay from "./ProductDisplay";

function Body({product_list, set_product_list}){
    return(
        <div id="body">
            <SubTitle></SubTitle>
            <ProductDisplay product_list={product_list} set_product_list={product_list}></ProductDisplay>
        </div>
    );
}

export default Body;