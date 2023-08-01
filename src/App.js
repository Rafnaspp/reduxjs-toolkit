import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import { fetchUser } from "./redux/cart";

function App() {
  const { userDetail } = useSelector((state)=> state.cart)
  console.log(userDetail,"USER DETAIL");
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUser())
  }, [])
  return (
    <Fragment>
      <Header />
      <ProductList />
      <pre>{JSON.stringify(userDetail , undefined ,4)}</pre>
    </Fragment>
  );
}
 
export default App;
