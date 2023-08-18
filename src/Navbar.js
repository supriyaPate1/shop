import React, { useContext, useEffect, useState } from "react";
import "./navbar.css";
import CarousalOffers from "./CarousalOffers";
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link, Outlet } from "react-router-dom";
import { myContext } from "./App";
import { Drawer, Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const {
    quan,
    logedin,
    setLogin,
    User,
    wish,
    setSortData,
    setRate,
    setcateg,
    setsearch,
    setSnack,show,setShow
  } = useContext(myContext);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setShow(false)
    }, [])

  //function for manual search in search bar
  const search = () => {
    var inpVal = document.getElementById("serachVal").value.toUpperCase();
    setsearch(inpVal);
  };

  //func to filter by category
  const category = (event) => {
    var categVal = event.target.value;
    setcateg(categVal);
  };

  // function for enter key
  const EnterKey = (event) => {
    if (event.key === "Enter") {
      search();
    }
  };

  // func to filter by rating
  const rateFilter = (event) => {
    var rateVal = event.target.value;
    setRate(rateVal);
  };

  //func to search by price
  const sortBy = (event) => {
    var sortVal = event.target.value;
    setSortData(sortVal);
  };

  //func to switch themes
  var chooseTheme = () => {
    var element = document.body;
    element.classList.toggle("darktheme");
  };

  //funct to clear filters
  var clearFilters=() => {
    setRate("");
    setSortData("-1");
    setcateg("")
  }
  return (
    <>
      <CarousalOffers />
      <div className="navbars2">
        <div className="NavMain">
          <div className="Divlogo">
            <h2>TOY CAVE</h2>
          </div>
          <div className="DivSearch">
            <input
              placeholder="serach toys...."
              id="serachVal"
              onKeyPress={EnterKey}
            ></input>
            <SearchIcon
              sx={{ marginLeft: "1.2%", fontSize: "20px" }}
              onClick={search}
            />
          </div>
          <div className="DivOthers">
            {!logedin && (
              <div>
                <Link to="login">Login</Link>&emsp;&#124;&emsp;
                <Link to="signup">Signup</Link>
              </div>
            )}
            <div>
              <Link to="/shop">Shop</Link>
            </div>
            <div>
              <Link to="/cart">
                Cart
                <LocalMallIcon />
                {quan}
              </Link>
            </div>
            {logedin && (
              <div id="wish">
                <Link to="/wishlist">wishlist{wish}</Link>
              </div>
            )}
            {logedin && <div id="name">Welcome {User.userName}</div>}
            {logedin && (
              <div id="logoutLink">
                <Link
                  to="/"
                  onClick={() => {
                    setLogin(false);
                    setSnack({
                      open: true,
                      msg: "Logout Successfully!.",
                      severity: "success",
                    });
                  }}
                >
                  Logout
                </Link>{" "}
              </div>
            )}
          <div>
            <LightModeIcon onClick={chooseTheme} />
            <DarkModeIcon onClick={chooseTheme} />
          </div>

            <div id="navbar2">
              <MenuIcon
                onClick={() => {
                  setOpen(true);
                }}
                sx={{ fontSize: "30px", color: "white" }}
              />
            </div>
          </div>
        </div>
          {show&&<>
        <div className="navbar2">
          <div>
            <Link to="/" onClick={() => {
              setShow(false)
            }}>Home</Link>
          </div>
          <div>
            <select onChange={sortBy}>
              <option value={-1}>Sort By</option>
              <option value={0}>Low to High</option>
              <option value={1}>High to low</option>
            </select>
          </div>
          <div>
            <select onChange={category}>
              <option value={""}>Filter by categories</option>
              <option>Wooden</option>
              <option>Plastic</option>
              <option>Metal</option>
              <option>Soft toy</option>
            </select>
          </div>
          <div>
            <select onChange={rateFilter}>
              <option value={""}>Filter by rating</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div><button className="clearbtn" onClick={clearFilters}>Clear Filters</button></div>
        </div>
        </>}
      </div>
      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        anchor="right"
        PaperProps={{
          sx: { width: "28%", backgroundColor: "rgba(230, 224, 238)" },
        }}
      >
        <div className="paperNav">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <select onChange={sortBy}>
              <option value={-1}>Sort By</option>
              <option value={0}>Low to High</option>
              <option value={1}>High to low</option>
            </select>
          </div>
          <div>
            <select onChange={category}>
              <option value={""}>Categories</option>
              <option>Wodden</option>
              <option>Plastic</option>
              <option>Metal</option>
            </select>
          </div>
          <div>
            <select onChange={rateFilter}>
              <option value={""}>Filter by rating</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="clearbtn"><button onClick={clearFilters}>Clear Filters</button></div>
          <div>
            <LightModeIcon onClick={chooseTheme} />
            <DarkModeIcon onClick={chooseTheme} />
          </div>
        </div>
      </Drawer>
      <Outlet />
    </>
  );
}
