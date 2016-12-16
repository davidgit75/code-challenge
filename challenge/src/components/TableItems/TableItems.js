import React from 'react';
import Item from '../Item/Item.js';
import CardNoData from '../CardNoData/CardNoData.js';

export default class TableItems extends React.Component {
    getItems() {
        let items = [];
        let currentCategory = this.props.categories.filter((item)=>{return item.name.code === this.props.category;})[0];
        let currentItems = this.props.items.filter((item)=>{return item.category === currentCategory._id;});
        let itemsToShow = [];

        if(this.props.searchedData.length>0){
            for(let k in currentItems){
                if(currentItems[k].name.text.indexOf(this.props.searchedData) > -1){
                    itemsToShow.push(currentItems[k]);
                }
            }
        }else{
            currentItems.forEach((item)=>{itemsToShow.push(item);});
        }

        let idy = 0;
        for(let k in itemsToShow){
            if(itemsToShow[k].name.text !== undefined){
                items.push(<Item title={itemsToShow[k].name.text} category={currentCategory.name.text} comment={itemsToShow[k].comment} key={idy+"-"+currentCategory._id} />);
                idy++;
            }
        }

        if(items.length<=0){
            items.push(<CardNoData title="Sin datos" message="No hay coincidencias" key="no" />);
        }

        return items;
    }

    render() {
        return (
            <div>
                <ul className="demo-list-three mdl-list">
                    {this.getItems()}
                </ul>
            </div>
        );
    }
}
