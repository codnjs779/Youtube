import React, { useRef } from "react";

function SearchBar({ onSearch }) {
    const inputRef = useRef();

    const handleSearch = () => {
        const searchTxt = inputRef.current.value;
        inputRef.current.value = "";
        onSearch(searchTxt);
    };

    const onClick = () => {
        handleSearch();
    };

    const onkeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="searchBar">
            <div className="youtubeTitle">
                <i className="youtubeIcon fab fa-youtube"></i>
                <div className="logoTitle">Youtube</div>
            </div>

            <input type="search" ref={inputRef} className="searchBar_input" placeholder="Search.." onKeyPress={onkeyPress}></input>
            <button type="submit" className="searchBar_btn" onClick={onClick}>
                <i className="fas fa-search"></i>
            </button>
        </div>
    );
}

export default SearchBar;
