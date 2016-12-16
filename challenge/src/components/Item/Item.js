import React from 'react';
import "./Item.css";

export default class Item extends React.Component {

    constructor() {
        super();

        this.state = {
            classActive: "unactive",
            comment: ""
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

    setComment() {
        this.setState({
            comment: document.querySelector("#newComment").value
        });
    }

    sendNewData() {
        let data = new FormData();
        data.append("comment", "MI COMENTARIO");

        let config = {
            method: "POST",
            headers: {
              "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: data
        };

        fetch("http://localhost:3010/apichallenge/items", config)
        .then((response)=>{
            console.log("response");
            console.log(response);
            if(response.ok){
                return response.json();
            }else{
                return {message: "Error conectando con el api"};
            }
        })
        .then((itemUpdated)=>{
            console.log("itemUpdated");
            console.log(itemUpdated);
            document.querySelector("#newComment").value = "";

            this.setState({
                comment: ""
            });
        })
        .catch((error)=>{
            console.log("Error");
            console.log(error);
        });
    }


    render() {
        return (
            <div>
                <li className="mdl-list__item mdl-list__item--three-line">
                  <span className="mdl-list__item-primary-content">
                    <i className="material-icons mdl-list__item-avatar">person</i>
                    <span>{this.props.title}</span>

                    <span className="mdl-list__item-text-body">
                      {this.props.category} <br />
                      <p>{this.props.comment}</p>
                    </span>
                  </span>
                  <a className="mdl-list__item-secondary-action" onClick={()=>{this.changeStateSwitch();}}><i className={"material-icons " + this.state.classActive}>mode_edit</i></a>
                </li>

                <div id="modalComments" className="modal">

                  <div className="modal-content">
                    <form action="#">
                      <div className="mdl-textfield mdl-js-textfield">
                        <textarea className="mdl-textfield__input" type="text" rows="3" id="newComment" onChange={()=>{this.setComment();}} ></textarea>
                        <label className="mdl-textfield__label" htmlFor="newComment">Nuevo comentario</label>
                      </div>
                    </form>

                    <button id="btnModalClose" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent btnActionModal" onClick={()=>{this.closeModal();}}>
                      Cerrar
                    </button>

                    <button id="btnModalSend" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored btnActionModal" onClick={()=>{this.sendNewData();}}>
                      Aceptar
                    </button>
                  </div>

                </div>

            </div>
        );
    }
}
