
@import url('https://fonts.googleapis.com/css2?family=Michroma&family=Nunito&family=Rubik&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito&family=Rubik&display=swap');
/* Reset some default styles and set up basic styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    font-family: 'Rubik', sans-serif;
}

body {
    font-family: Arial, sans-serif;
}

/* Style the navigation bar */
.navbar {
    background-color: #333;
    color: #fff;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}
#photo{
    padding-top: 7px;
}

.logo {
    font-size: 30px;
    align-items: center;
    font-family: 'Michroma', sans-serif;
    font-family: 'Nunito', sans-serif;
    font-family: 'Rubik', sans-serif;
}
.nav-links {
    list-style: none;
    display: flex;
}

.nav-links li {
    margin: 0 10px;
}

.nav-links a {
    text-decoration: none;
    color: #ccccccc5;
    transition: color 0.3s; /* Add transition for smoother hover effect */
}

/* Dropdown styles */
.dropdown {
    position: relative;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #333;
    min-width: 160px;
    z-index: 1;
}

.dropdown-content a {
    color: #fff;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.buttons {
    display: flex;
    align-items: center;
    gap: 10px;
}

.teal-button, .white-border-button, .dropdown-button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #ccc;
    font-weight: bold;
}

.teal-button {
    background-color: #3eb489;
    columns: white;
}
.teal-button:hover{
    background-color: #207a59;
    color: white;
}
.white-border-button,.dropdown-button {
    background:transparent;
    border: 1px solid #fff;
}

 .white-border-button:hover, .dropdown-button:hover {
    background-color: #444;
}

/* Add hover effect for links in the navbar */
.nav-links a:hover {
    color: #fff;
}

/* Media query remains the same */
/* @media screen and (max-width:992px){
    
.hamburger{
    position: relative;
    width: 30px;
    height: 4px;
    background: #fff;
    border-radius: 10px;
    cursor: pointer;
    z-index: 2;
    transition: 0.3s;

}
.hamburger::before,.hamburger::after{
    content: "";
    position: absolute;
    height: 4px;
    right: 0;
    background: #fff;
    border-radius: 10px;
    transition: 0.3s;
}

.hamburger::before{
    top:-10px;
    width: 20px;
}
.hamburger::after{
    top:10px;
    width: 25px;
}
.toggle-menu{
    position: absolute;
    width: 30px;
    height: 100px;
    z-index: 3;
    cursor: pointer;
    opacity: 0;

}
.hamburger,.toggle-menu{
     display: none; 
}
.navbar input:checked ~ .hamburger{
    background: transparent;
}
.navbar input:checked ~ .hamburger::{
    top: 0;
   
}
    .hamburger,.toggle-menu{
        display: block;
    }
    .menu{
        justify-content: start;
        flex-direction: column;
        align-items: center;
        position: fixed;
        top:0;
        right: 0;
        background: #333;
        width: 300px;
        height: 100%;
        padding-top: 65%;
    }

} */



<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <header>
        <nav class="navigation">
            <div class="container">
                <div class="logo">
                   <img src="RLogo.png" height="30px" width="30px" alt="Logo" id="photo">
                    <span class="lg">Romi Finance</span>
                </div>
                <!-- <input type="checkbox" class="toggle-menu">
                <div class="hamburger"></div> -->

                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Dashboard</a></li>
                    <li class="dropdown">
                        <a href="#">NFT ▾</a>
                        <div class="dropdown-content">
                            <a href="#">Mint NFT</a>
                            <a href="#">Stake NFT</a>
                        </div>
                    </li>
                    <li><a href="#">Earn</a></li>
                    <li><a href="#">Buy</a></li>
                    <li><a href="#">Referrals</a></li>
                    <li><a href="#">Ecosystem</a></li>
                    <li><a href="#">About</a></li>
                </ul>
                <div class="buttons">
                    <button class="teal-button">Trade</button>
                    <button class="white-border-button">Connect Wallet</button>
                    <div class="dropdown">
                        <button class="dropdown-button">Dropdown ▾</button>
                        <div class="dropdown-content">
                            <a href="#">Ethereum</a>
                            <a href="#">Settings</a>
                            <a href="#">Language</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <main>
        <!-- Your page content goes here -->
    </main>
</body>
</html>
