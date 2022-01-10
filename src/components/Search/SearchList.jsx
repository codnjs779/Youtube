import React, { useEffect, useState } from "react";
import axios from "axios";

import ListItem from "./ListItem";

function SearchList(state) {
    const [searchItem, setSearchItem] = useState({ searchList: [] });

    useEffect(() => {
        axios
            .get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25", {
                params: { q: state, key: "AIzaSyDFxKWeMhElJnrL0VGaIpPdlbO_tMgcXWs" },
            })
            .then(({ data }) => {
                setSearchItem({ searchList: data.items });
            })
            .catch((e) => {
                console.log(e, "api 호출실패");
            });
    }, [state]);

    return (
        <>
            <ul className="popularVideo_list">
                {searchItem &&
                    searchItem.searchList.map((list) => {
                        return <ListItem key={list.id.videoId} list={list.snippet} />;
                    })}
            </ul>
        </>
    );
}

export default SearchList;
