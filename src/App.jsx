import "./App.css";
import PopularVideo from "./components/PopularVideo";
import SearchBar from "./components/SearchBar";
import React, { Component } from "react";
import axios from "axios";

class App extends Component {
    state = { loading: false, videoList: [] };

    loadVideo = async () => {
        axios
            .get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet", {
                params: { chart: "mostPopular", key: "AIzaSyAWKlLpR5ecm2BNpGBv1rq1quKqy7-UzRM" },
            })
            .then(({ data }) => {
                this.setState({
                    loading: true,
                    videoList: data.items,
                });
            })
            .catch((e) => {
                console.log(e, "api 호출실패");
                this.state.setState({ loading: false });
            });
    };

    render() {
        return (
            <>
                <SearchBar />
                <PopularVideo loadVideo={this.loadVideo} state={this.state} />
                {/* 라우터처리 해주기 */}
                {/* <DetailVideo /> */}
            </>
        );
    }
}

export default App;
