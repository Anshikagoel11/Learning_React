function Header(){
    return(
        <header className="header">
            <img className="img" src="https://tse2.mm.bing.net/th?id=OIP.Q3yFeXPyjukMAlgfm44R8AHaEK&pid=Api&P=0&h=220" alt="logo" />
            <div className="btns-box">
                 <button className="btn">MEN</button>
                 <button className="btn">WOMEN</button>
                 <button className="btn">KIDS</button>
                 <button className="btn">HOME</button>
                 <button className="btn">BEAUTY</button>
                 <button className="btn">GENZ</button>
                 <button className="btn">STUDIO</button>
            </div>
            <input type="text" placeholder="Search for products ,brands and more" />
            <div className="btns-box">
 <button className="btn">Profile</button>
 <button className="btn">Wishlist</button>
 <button className="btn">Bag</button>
            </div>
        </header>
    )
}

export default Header