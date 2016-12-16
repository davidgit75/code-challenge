import React, { Component } from 'react';
//import logo from '../../logo.svg';
import './App.css';
import Category from '../Category/Category.js';
import TableItems from '../TableItems/TableItems.js';

class App extends Component {

    constructor() {
        super();

        this.state = {
            categoryCode: "lights",
            selectedCategory: {},
            searchedData: "",
            dataLoaded: "is-active",
            items: [],
            categories: []
        };
    }

    componentWillMount() {
        let configRequest = {
            method: "GET"
        };
        fetch("http://localhost:3010/apichallenge/items", configRequest)
        .then((response)=>{
            if(response.ok){
                this.setStateLoadedData();
                return response.json();
            }else{
                return {message: "Error buscando items"};
            }
        })
        .then((response)=>{
            console.log("ITEMS");
            this.setState({
                items: response.data.items,
                categories: response.data.categories,
                selectedCategory: response.data.categories.filter((cat)=>{return cat.name.code === this.state.categoryCode;})[0]
            });
            console.log(this.state);
            console.log(response);

        })
        .catch((err)=>{
            console.log("ERROR");
            console.log(err);
        });
    }

    setCategoryToFilter(newCategory) {
        this.setState({
            categoryCode: newCategory,
        });
    }

    setStateLoadedData() {
        this.setState({
            dataLoaded: ""
        });
    }

    setSearched() {
        this.setState({
            searchedData: document.querySelector("#fixed-header-drawer-exp").value
        });
    }

    getCategories(){
        let listCategories = [];
        if(this.state.categories.length>0){
            for(let currentCat in this.state.categories){
                let cat = this.state.categories[currentCat];
                listCategories.push(<Category tag={cat.name.text} typeFilter={cat.name.code} setCategory={()=>{this.setCategoryToFilter(cat.name.code);}} key={cat._id} />);
            }
        }

        return listCategories;
    }

    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
              <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                    <span id="titleBar" className="mdl-layout-title">{(this.state.selectedCategory.name===undefined) ? "Luces" : this.state.selectedCategory.name.text}</span>

                  <div className="mdl-layout-spacer"></div>
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                              mdl-textfield--floating-label mdl-textfield--align-right">
                    <label className="mdl-button mdl-js-button mdl-button--icon"
                           htmlFor="fixed-header-drawer-exp">
                      <i className="material-icons">search</i>
                    </label>
                    <div className="mdl-textfield__expandable-holder">
                        <input className="mdl-textfield__input" type="text" name="sample"
                             id="fixed-header-drawer-exp" onChange={()=>{this.setSearched();}} />


                    </div>
                  </div>

                  <nav className="mdl-navigation">
                    <div className={"mdl-spinner mdl-js-spinner " + this.state.dataLoaded}></div>
                  </nav>
                </div>
              </header>
              <div className="mdl-layout__drawer">
                <span className="mdl-layout-title">Categorías</span>
                <nav className="mdl-navigation">
                    {this.getCategories()}
                </nav>
              </div>
              <main className="mdl-layout__content">
                <div className="page-content">
                    <TableItems category={this.state.categoryCode} searchedData={this.state.searchedData} isLoadedData={()=>{this.setStateLoadedData();}} items={this.state.items} categories={this.state.categories} />
                </div>
              </main>
            </div>
        );
    }
}

export default App;
