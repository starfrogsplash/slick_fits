import Link from "next/link";
import Reset from '../components/Reset'
 
const ResetPage = (props) => {

  return (
    <div>
      <p>Reset Your Password {props.query.resetToken}</p>
      <Reset resetToken={props.query.resetToken} />
    </div>
  )}
  
  export default ResetPage;
  



