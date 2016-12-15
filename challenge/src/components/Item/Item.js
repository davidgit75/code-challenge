import React from 'react';

export default class Item extends React.Component {

    changeStateSwitch() {
        console.log("Swith changed");
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
                  <span className="mdl-list__item-secondary-action">
                    <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor={`list-switch-${this.props.id}`}>
                      <input type="checkbox" id="list-switch-1" className="mdl-switch__input" onChange={()=>{this.changeStateSwitch();}} />
                    </label>
                </span>
                </li>
            </div>
        );
    }
}
