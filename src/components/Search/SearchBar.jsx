import React, { useRef, useState } from "react";
import SearchList from "./SearchList";

function SearchBar() {
    const inputRef = useRef();
    const [state, setState] = useState({ loading: false, searchList: "" });

    const onSubmit = (e) => {
        e.preventDefault();
        const searchTxt = inputRef.current.value;
        inputRef.current.value = "";
        setState({ searchList: searchTxt });
    };

    return (
        <div className="searchBar">
            <div className="youtubeTitle">
                <i className="youtubeIcon fab fa-youtube"></i>
                <div className="logoTitle">Youtube</div>
            </div>

            <form onSubmit={onSubmit}>
                <input type="search" ref={inputRef} className="searchBar_input" placeholder="Search.."></input>
                <button type="submit" className="searchBar_btn">
                    <i className="fas fa-search"></i>
                </button>
            </form>
            <SearchList state={state.searchList} />
        </div>
    );
}

export default SearchBar;
