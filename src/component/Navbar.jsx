function Navbar(){
    return(

        <>
          <div className="nav-div">
      <div className="logo"><img src="https://preview.colorlib.com/theme/ashion/img/logo.png.webp" alt="" /></div>
      <div className="ul-div">
        <ul>
          <li>HOME</li>
          <li>WOMEN'S</li>
          <li>MEN'S</li>
          <li>SHOP</li>
          <li>PAGES</li>
          <li>BLOG</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className="icon-div">
        <button className="login">Login</button>/
        <button className='reg'>Register</button>
        <i class="bi bi-search"></i>
        <i class="bi bi-heart"></i>
        <i class="bi bi-bag"></i>
        </div>
     </div>
        </>
    )
}
export default Navbar