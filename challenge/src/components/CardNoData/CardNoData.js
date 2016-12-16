import React from 'react';

export default class CardNoData extends React.Component {
    render() {
        return(
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--3-col"></div>

                <div className="mdl-cell mdl-cell--4-col">
                    <div className="demo-card-square mdl-card mdl-shadow--2dp">
                      <div className="mdl-card__title mdl-card--expand">
                        <h2 className="mdl-card__title-text">{this.props.title}</h2>
                      </div>
                      <div className="mdl-card__supporting-text">
                        {this.props.message}
                      </div>
                    </div>
                </div>

                <div className="mdl-cell mdl-cell--3-col"></div>
            </div>
        );
    }
}
