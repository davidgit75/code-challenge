import React, { Component } from 'react';
//import logo from '../../logo.svg';
//import './App.css';
import Category from '../Category/Category.js';
import TableItems from '../TableItems/TableItems.js';

class App extends Component {

    constructor() {
        super();

        this.state = {
            category: "lights"
        };
    }

    setCategoryToFilter(newCategory) {
        this.setState({
            category: newCategory
        });
    }

    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
              <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                  <div className="mdl-layout-spacer"></div>
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                              mdl-textfield--floating-label mdl-textfield--align-right">
                    <label className="mdl-button mdl-js-button mdl-button--icon"
                           htmlFor="fixed-header-drawer-exp">
                      <i className="material-icons">search</i>
                    </label>
                    <div className="mdl-textfield__expandable-holder">
                      <input className="mdl-textfield__input" type="text" name="sample"
                             id="fixed-header-drawer-exp" />
                    </div>
                  </div>
                </div>
              </header>
              <div className="mdl-layout__drawer">
                <span className="mdl-layout-title">Categorías</span>
                <nav className="mdl-navigation">
                    <Category tag="Luces" typeFilter="lights" setCategory={()=>{this.setCategoryToFilter("lights");}} />
                    <Category tag="Llantas" typeFilter="wheels" setCategory={()=>{this.setCategoryToFilter("wheels");}} />
                    <Category tag="Suspensión" typeFilter="suspension" setCategory={()=>{this.setCategoryToFilter("suspension");}} />
                    <Category tag="Sistema de Frenos" typeFilter="brakes" setCategory={()=>{this.setCategoryToFilter("brakes");}} />
                    <Category tag="Sistema de refrigeración" typeFilter="refrigeration" setCategory={()=>{this.setCategoryToFilter("refrigeration");}} />
                </nav>
              </div>
              <main className="mdl-layout__content">
                <div className="page-content">
                    <TableItems category={this.state.category} />
                </div>
              </main>
            </div>
        );
    }
}

export default App;
