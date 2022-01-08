import "./App.css";
import PopularVideo from "./components/PopularVideo";
import SearchBar from "./components/SearchBar";
import React, { Component } from "react";
import Http from "./api.js";

class App extends Component {
    state = { lists: [] };

    getPopularData = async () => {
        const res = await Http.get("videos?part=snippet", {
            params: { chart: "mostPopular", key: "AIzaSyAWKlLpR5ecm2BNpGBv1rq1quKqy7-UzRM" },
        });
        console.log(res.data);
    };
    render() {
        return (
            <>
                <SearchBar />
                <PopularVideo getPopularData={this.getPopularData} state={this.state.lists} />
                {/* 라우터처리 해주기 */}
                {/* <DetailVideo /> */}
            </>
        );
    }
}

export default App;
