import React, { Component, createRef } from "react";

class SearchBar extends Component {
    inputRef = createRef();
    onSubmit = (e) => {
        e.preventDefault();
        const searchTxt = this.inputRef.current.value;
        this.inputRef.current.value = "";
        this.props.searchTxtController(searchTxt);
    };
    render() {
        return (
            <div className="searchBar">
                <div className="youtubeTitle">
                    <i className="youtubeIcon fab fa-youtube"></i>
                    <div className="logoTitle">Youtube</div>
                </div>

                <form onSubmit={this.onSubmit}>
                    <input ref={this.inputRef} className="searchBar_input" placeholder="Search.."></input>
                    <button className="searchBar_btn">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>
        );
    }
}

export default SearchBar;
