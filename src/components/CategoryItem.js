import React from 'react'

import { useContext } from "react";
import { useHistory } from 'react-router-dom';
import GameContext from "../context/GameContext";

const CategoryItem = (props) => {
    const history = useHistory();
    const goToGamesPage = () => history.push('/games');
    const { games, storeFilteredGames,getAllGames } = useContext(GameContext);
    const categoryId = props.category.categoryId;
    //alert(JSON.stringify(games))

     React.useEffect(()=>{
        getAllGames();
    },[]); 

    const filterGames = () => {
        const filteredGames = games.filter((g) => {
            return g.categoryId == categoryId && g.isApproved === true;
        })
        storeFilteredGames(filteredGames)
    }

    return (
        <>
            <div className="container">
                <span className="categoryBox"> <img src={props.category.categoryImage} style={{ width: "300px", height: "300px" }} alt="" onClick={() => {
                    filterGames()
                    goToGamesPage()
                }
                }
                ></img></span>
                <center> <span className="catogoryName">{props.category.categoryName}</span></center>
            </div>
       </>
         )
}

export default CategoryItem
