import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import MyHeader from "./templates/MyHeader";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import Filter from './components/Filter'
import ResMenu from "./templates/menu/responsiveMenu";
import SearchBar from "./templates/menu/SearchBar";
import "./css/Navbar.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Movies from './components/Movies'
import TvSeries from "./components/TvSeries";
import ContactUs from "./components/ContactUs";
import Detail from "./components/Detail";

const App = () => {
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = () =>
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  return (
    <div>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <ResMenu />
          <SearchBar />
          <MyHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/tvSeries" element={<TvSeries />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/detail/:movie/:id" element={<Detail />} />
          </Routes>
          {/* {movies.length === 0 ? null : <PaginationPage />} */}
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
};

export default App;
