import React from 'react';
import "./Item.css";

export default class Item extends React.Component {

    constructor() {
        super();

        this.state = {
            classActive: "unactive"
        };
    }

    changeStateSwitch() {
        let newClass = "";
        if(this.state.classActive === "active"){
            newClass = "unactive";
        }else if(this.state.classActive === "unactive"){
            newClass = "active";
        }

        this.setState({
            classActive: newClass
        });
        console.log(this.state.classActive);
    }

    render() {
        return (
            <div>
                <li className="mdl-list__item mdl-list__item--three-line">
                  <span className="mdl-list__item-primary-content">
                    <i className="material-icons mdl-list__item-avatar">person</i>
                    <span>{this.props.title}</span>

                    <span className="mdl-list__item-text-body">
                      {this.props.category}
                    </span>
                  </span>
                  <a className="mdl-list__item-secondary-action" onClick={()=>{this.changeStateSwitch();}}><i className={"material-icons " + this.state.classActive}>star</i></a>
                </li>
            </div>
        );
    }
}
