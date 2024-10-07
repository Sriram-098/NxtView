import './index.css'
const Herosection=(props)=>{
    const {name}=props;
    return(
        <main className="whole container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="buttons">
                    <button>shop now</button>
                    <button>category</button>
                </div>
                <div className="shopping">
                <p>also available on</p>
                <div className="flip">
                    <img src="/images/amazon (1).png" alt="flip-logo"/>
                    <img src="/images/flipkart (1).png" alt="ama-logo"/>
                </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/shoe_image.png"/>
            </div>
        </main>
    
    );

}
export default Herosection;