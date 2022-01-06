import "./App.css";
import PopularVideo from "./components/PopularVideo";
import SearchBar from "./components/SearchBar";
import DetailVideo from "./components/DetailVideo";
import React, { Component } from "react";
import Http from "./api.js";

class App extends Component {
    state = { lists: [] };

    getPopularData = async () => {
        const res = await Http.get("videos?part=snippet", {
            params: { chart: "mostPopular", key: "AIzaSyAWKlLpR5ecm2BNpGBv1rq1quKqy7-UzRM" },
        });
        const baseData = res.data.items;
        const lists = [...this.state.lists, baseData];
        this.setState({ lists: lists });
        console.log("stateAdd", this.state.lists);
    };
    render() {
        return (
            <>
                <SearchBar />
                <PopularVideo getPopularData={this.getPopularData} state={this.state} />
                {/* 라우터처리 해주기 */}
                {/* <DetailVideo /> */}
            </>
        );
    }
}

export default App;
