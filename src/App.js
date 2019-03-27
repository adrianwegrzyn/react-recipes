import React, {Component} from 'react';
import './App.css';
import {recipes} from "./tempList";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

class App extends Component {
    state = {
        recipes: recipes,
        url: 'https://www.food2fork.com/api/search?key=d85bb237a2cbc43061da66201845cb58&q',
        details_id: 35384
    };

    // async getRecipes() {
    //     try {
    //         const data = await fetch(this.state.url);
    //         const jsonData = await data.json();
    //         this.setState({
    //             recipes: jsonData.recipes
    //         })
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }
    //
    // componentDidMount() {
    //     this.getRecipes()
    // }

    render() {
        // console.log(this.state.recipes)
        return (
            <React.Fragment>
                <RecipeList recipes={this.state.recipes}/>
                <RecipeDetails id={this.state.details_id}/>
            </React.Fragment>
        );
    }
}

export default App;
