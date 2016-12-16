import React from 'react';
import Item from '../Item/Item.js';
import CardNoData from '../CardNoData/CardNoData.js';

export default class TableItems extends React.Component {
    constructor() {
        super();

        this.items = [
            {_id: "i1", category: "c1", name:{code: "height", text: "Altura"}, value: 1},
            {_id: "i2", category: "c1", name:{code: "conections", text: "Conexiones eléctricas"}, value: 1},
            {_id: "i3", category: "c1", name:{code: "time_use", text: "Tiempo de uso"}, value: 1},
            {_id: "i4", category: "c1", name:{code: "color", text: "Color"}, value: 1},
            {_id: "i5", category: "c1", name:{code: "surface", text: "Área iluminada"}, value: 1},

            {_id: "i6", category: "c2", name: {code: "pressure", text: "Presión"}, value: 20},
            {_id: "i7", category: "c2", name: {code: "wear", text: "Desgaste"}, value: true},
            {_id: "i8", category: "c2", name: {code: "state", text: "Estado"}, value: true},

            {_id: "i9", category: "c3", name: {code: "state", text: "Estado"}, value: true},

            {_id: "i10", category: "c4", name: {code: "is_cleaned", text: "Nivel de limpieza"}, value: true},
            {_id: "i11", category: "c4", name: {code: "band_state", text: "Estado de la banda"}, value: true},
            {_id: "i12", category: "c4", name: {code: "capacity", text: "Capacidad"}, value: 40},

            {_id: "i13", category: "c5", name: {code: "level", text: "Nivel"}, value: 50},
            {_id: "i14", category: "c5", name: {code: "temperature", text: "Temperatura"}, value: 150}
        ];

        this.categories = [
            {
                _id: "c1",
                name: {code: "lights", text: "Luces"},
            },
            {
                _id: "c2",
                name: {code: "wheels", text: "Llantas"}
            },
            {
                _id: "c3",
                name: {code: "suspension", text: "Suspensión"},
            },
            {
                _id: "c4",
                name: {code: "brakes", text: "Frenos"}
            },
            {
                _id: "c5",
                name: {code: "refrigeration", text: "Refrigeración"}
            }
        ];

    }

    getItems() {
        let items = [];
        let currentCategory = this.categories.filter((item)=>{return item.name.code === this.props.category;})[0];
        let currentItems = this.items.filter((item)=>{return item.category === currentCategory._id;});
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
                items.push(<Item title={itemsToShow[k].name.text} category={currentCategory.name.text} key={idy+"-"+currentCategory._id} />);
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
