import Link from "next/link";
import UpdateItem from '../components/UpdateItem'
 
const Sell = (props) => (
    <div>
      <UpdateItem id = {props.query.id}></UpdateItem>
    </div>
  );
  
  export default Sell;
  



