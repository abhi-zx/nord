function navbar(){
    return `<div id="container">
    <div class="top">
    </div>
    <div class="navbar">
        <div class="nav1">
<div class="h1">
    <h1 id='mainhead'> NORDSTROM</h1>
</div>
    <div class="nav1_left">
        <span>
            <div class="search">
                <div class="searchinput">
                    <input type="text">
                </div>
                <div class="searchicon">
<img src="https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-vector-search-icon-png-image_320926.jpg" alt="">

                </div>
                Search
            </div>
        </span>
        <span>
           
                <div class="dropdown">
                    <button id="u_name" class="dropbtn" onclick="myFunction()">SignIn
                      
                    </button>
                    <div class="dropdown-content" id="myDropdown">
                      <a id="signIn_button11"class="signIn_button" href="#">Sign In | Create Account</a>
                      <a class="youraccount" href="#">Your account</a>
                      <a href="#">Purchase</a>
                      <a href="#">WishList</a>
                      <a href="#">Nordy Club Rewards</a>
                      <a href="#">Shiping Adresses</a>
                      <a href="#">Payment Method</a>
                      <a href="#">Looks</a>
                    </div>
                    </div> 
                <!-- </div> -->
        </span>
       
        <span id='bagn'>Bag</span>
    </div>

        </div>
        <div class="nav2">
            <span>Sale</span><span>Women</span><span>Men</span><span>Kids</span><span>Young Adult</span><span>Activewear</span><span>Home</span><span>Beauty</span><span>Designer</span><span>Gifts</span><span>Brands</span>
        </div>
    </div>
    
    
</div>`
}
export {navbar}