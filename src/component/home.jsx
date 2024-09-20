import Navbar from "./Navbar"

function Home(){
    return(
<>
<Navbar/>
<div className="body-div">
      <div className="body-1"><h1>Women’s fashion</h1>
      <p>Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore edolore magna aliquapendisse ultrices gravida.</p>
      <button className='shop'>SHOP NOW</button>
      </div>
      <div className="body-2">
        <div className="pic-div-1">
          <div className="pic-1">
            <h1>Men’s fashion</h1>
            <p>358 items</p>
            <button className="shop-1">SHOP NOW</button>
          </div>
          <div className="pic-2">
            <h1>Kid’s fashion</h1>
            <p>273 items</p>
            <button className="shop-1">SHOP NOW</button>
            </div>
        </div>
        <div className="pic-div-2">
          <div className="pic-3">
            <h1>Cosmetics</h1>
            <p>159 items</p>
            <button className="shop-1">SHOP NOW</button>
          </div>
          <div className="pic-4">
          <h1>Accessories</h1>
          <p>792 items</p>
          <button className="shop-1">SHOP NOW</button>
          </div>
        </div>
      </div>
     </div>

</>

    )
}
export default Home