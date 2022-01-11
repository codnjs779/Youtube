import "./App.css";
import PopularVideo from "./components/PopularVideo";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./components/Search/SearchBar";
import VideoDetail from "./components/video_detail/video_detail";

function App() {
    const [state, setState] = useState({ loading: false, videoList: [] });
    const [selected, setSelected] = useState();

    const selectVideo = (video) => {
        setSelected(video);
        console.log("app-selectedVideo", video);
    };
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
        axios
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
        <div className="app">
            <SearchBar onSearch={search} />

            <section className="app_section">
                {selected && (
                    <div className="app_section_detail">
                        <VideoDetail selected={selected} />
                    </div>
                )}

                <div className="app_section_list">
                    <PopularVideo videoList={state.videoList} onVideoClick={selectVideo} />
                </div>
            </section>
        </div>
    );
}

export default App;
