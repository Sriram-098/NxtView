import './index.css'
const Navigation=()=>{
    return (
    <div>
      <nav className="container">
        <div>
          <img src="\images\brand_logo.png" alt="logo"/>
        </div>
        <ul>
          <li>home</li>
          <li>location</li>
          <li>about</li>
          <li>contact</li>
        </ul>
        <button>login</button>
      </nav>
    </div>
  );
    
}
export default Navigation