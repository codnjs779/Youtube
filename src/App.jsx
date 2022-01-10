import "./App.css";
import PopularVideo from "./components/PopularVideo";
import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./components/Search/SearchBar";
import SearchList from "./components/Search/SearchList";

class App extends Component {
    state = { loading: false, videoList: [] };

    loadVideo = async () => {
        axios
            .get("https://files.cdn.thinkific.com/file_uploads/292401/attachments/ec1/532/b9a/videoList.json")
            .then(({ data }) => {
                this.setState({
                    loading: true,
                    videoList: data.items,
                });
            })
            .catch((e) => {
                console.log(e, "api 호출실패");
                this.setState({ loading: false });
            });
    };

    componentDidMount() {
        this.loadVideo();
    }

    render() {
        const { videoList } = this.state;
        return (
            <>
                {/* <SearchBar /> */}

                <PopularVideo videoList={videoList} />
            </>
        );
    }
}

export default App;
