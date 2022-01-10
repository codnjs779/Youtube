import "./App.css";
import PopularVideo from "./components/PopularVideo";
import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./components/Search/SearchBar";

function App() {
    const [state, setState] = useState({ loading: false, videoList: [] });

    const search = (query) => {
        axios
            .get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25", {
                params: { q: query, type: "video", key: "AIzaSyDFxKWeMhElJnrL0VGaIpPdlbO_tMgcXWs" },
            })

            .then(({ data }) => {
                setState({ videoList: data.items });
            })
            .catch((e) => {
                console.log(e, "api 호출실패");
            });
    };
    useEffect(() => {
        const loadVideo = axios
            .get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=AIzaSyDFxKWeMhElJnrL0VGaIpPdlbO_tMgcXWs")

            .then(({ data }) => {
                setState({
                    loading: true,
                    videoList: data.items,
                });
            })
            .catch((e) => {
                console.log(e, "api 호출실패");
                setState({ loading: false });
            });
    }, []);

    return (
        <>
            <SearchBar onSearch={search} />
            <PopularVideo videoList={state.videoList} />
        </>
    );
}

export default App;
