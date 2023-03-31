import React from 'react'
import Menu from './Menu'
import SearchBar from './SearchBar'
import '../../css/Navbar.css'

const Menu_Search = ({ showMenu,filterFoods, search,products,setProducts }) => {
  return (
    //to show menu and search bar in phone screen
    <>
      <div className=" fixed responsiveMenu responsiveNav">
        <ul className=" rounded-tl-md rounded-bl-md list-none bg-slate-400  flex flex-col shadow w-48 items-center  py-4">
          <Menu />
        </ul>
      </div>
      <div className=" fixed search responsiveNav ">
        <SearchBar
          search={search}
          showMenu={showMenu}
          filterFoods={filterFoods}
          products={products}
          setProducts={setProducts}
        />
      </div>
    </>
  );
};

export default Menu_Search