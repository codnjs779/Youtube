import React, { Component } from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import ListItem from "./ListItem";

class SearchList extends Component {
    state = { loading: false, searchList: [], query: "방탄" };
    // useEffect 써서 바뀔 때만 되게,,?
    searchTxtController = (txt) => {
        this.setState({ query: txt });
    };

    SearchVideoLoading = async () => {
        axios
            .get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25", {
                params: { q: this.state.query, key: "AIzaSyCF8-1Ju88fF4ITtvWNvKuXoJSe6mDquiw" },
            })
            .then(({ data }) => {
                this.setState({
                    loading: true,
                    searchList: data.items,
                });
            })
            .catch((e) => {
                console.log(e, "api 호출실패");
                this.setState({ loading: false });
            });
    };

    componentDidMount() {
        this.SearchVideoLoading();
    }

    state = { serchList: [] };
    SearchVideoLoading = async () => {
        axios("../api.js")
            .then(({ data }) => {
                this.setState({ SearchList: data.items });
            })
            .catch((e) => {
                console.log(e, "api실패");
            });
    };
    componentDidMount() {
        this.SearchVideoLoading();
    }

    render() {
        return (
            <>
                <SearchBar searchTxtController={this.searchTxtController} />
                <ListItem />
            </>
        );
    }
}

export default SearchList;
