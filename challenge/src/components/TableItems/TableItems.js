import React from 'react';
import Item from '../Item/Item.js';

export default class TableItems extends React.Component {
    constructor() {
        super();
        this.arr = [1,2,3,4,5,6];
        this.categories = {
            lights:{
                _id: 1,
                height: {value: 1},
                connections: {isGood: false},
                time_use: {value: 10},
                color: {state: "orange"},
                surface: {value: 1}
            },
            wheels: {
                _id: 2,
                pressure: {value: 1},
                wear: {isGood: true},
                state: {isGood: true}
            },
            suspension: {
                _id: 3,
                state: {isGood: true}
            },
            brakes: {
                _id: 4,
                is_cleaned: true,
                band_state: "good",
                capacity: "good"
            },
            refrigeration: {
                _id: 5,
                level: 1,
                temperature: 10
            }
        };
    }

    getItems() {
        let items = [];
        let currentCategory = this.categories[this.props.category];

        for(let k in currentCategory){
            if(k!=="_id"){
                items.push(<Item title={k} category={this.props.category} key={k} />);
            }
        }

        return items;
    }

    openModal() {
        let dialog = document.querySelector('dialog');
        console.log("dialog");
        console.log(dialog);
        //dialog.showModal();
    }

    render() {
        return (
            <div>
                <ul className="demo-list-three mdl-list">
                    {this.getItems()}
                </ul>

                <br />


            </div>
        );
    }
}
