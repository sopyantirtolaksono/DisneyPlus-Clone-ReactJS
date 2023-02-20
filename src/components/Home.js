import styled from "styled-components"
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";

import db from "../firebase";
import { getDocs, collection } from "../firebase";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

export default function Home() {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);

    useEffect(() => {
        let recommends = [];
        let newDisneys = [];
        let originals = [];
        let trending = [];

        const querySnapshot = getDocs(collection(db, "movies"));
        querySnapshot
            .then((snapshot) => {
                snapshot.docs.forEach((doc) => {
                    switch (doc.data().type) {
                        case "recommend":
                            recommends.push({ id: doc.id, ...doc.data() });
                            break;
                        case "new":
                            newDisneys.push({ id: doc.id, ...doc.data() });
                            break;
                        case "original":
                            originals.push({ id: doc.id, ...doc.data() });
                            break;
                        case "trending":
                            trending.push({ id: doc.id, ...doc.data() });
                            break;
                        default:
                            console.log("Data not found!");
                            break;
                    }
                })

                dispatch(
                    setMovies({
                        recommend: recommends,
                        newDisney: newDisneys,
                        original: originals,
                        trending: trending,
                    })
                );
            })
            .catch((err) => {
                console.log(err.message);
            })

    }, [userName, dispatch]);

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    )
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    &:after {
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;
