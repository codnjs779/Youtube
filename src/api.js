import axios from "axios";

export default axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    header: {
        Authorization: "AIzaSyAWKlLpR5ecm2BNpGBv1rq1quKqy7-UzRM",
    },
});
