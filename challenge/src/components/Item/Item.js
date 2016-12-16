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
        /*let newClass = "";
        if(this.state.classActive === "active"){
            newClass = "unactive";
        }else if(this.state.classActive === "unactive"){
            newClass = "active";
        }

        this.setState({
            classActive: newClass
        });*/

        this.openModal();
    }

    openModal() {
        document.querySelector("#modalComments").style.display = "block";
    }

    closeModal() {
        document.querySelector("#modalComments").style.display = "none";
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

                <div id="modalComments" className="modal">

                  <div className="modal-content">

                    <p>Some text in the Modal..</p>

                    <button id="btnModalClose" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent btnActionModal" onClick={()=>{this.closeModal();}}>
                      Cerrar
                    </button>

                    <button id="btnModalSend" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored btnActionModal" onClick={()=>{this.closeModal();}}>
                      Aceptar
                    </button>
                  </div>

                </div>

            </div>
        );
    }
}
