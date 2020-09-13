import React from "react";
import ReactWebComponent from 'react-web-component';

export default class App extends React.Component {
  render() {
    return (
      <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <div className="card border-dark mb-3">
              <div className="card-body text-dark">
                <h5 className="card-title">Github{this.props.title}</h5>
                <div className="row card-body-height"   ><div className="col-sm-2">  <i className="fa fa-bookmark fa-3x" aria-hidden="true"></i></div>
                  <div className="col-sm-10"  > <p className="card-text">{this.props.description}</p> </div>
                </div>
                <div className="row"  >
                  <div className="col-sm-6"><small className=" card-text-small text-muted">Added 10 Sep 2020</small></div>
                  <div className="col-sm-6 text-right">    <i className="fa fa-share-alt" aria-hidden="true"></i> </div>

                </div>
              </div>
            </div>
          </div>
          <div className='card-back'>
            <div>
              <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text card-body-back-height">{this.props.description}</p>
              </div>
              <div className="row"  >
                <div className="col-sm-3"><i className="fa fa-star" aria-hidden="true"></i></div>
                <div className="col-sm-6 text-center">
                  Redirect
                </div>
                <div className="col-sm-3 text-right"><i className="fa fa-share-alt-square" aria-hidden="true"></i> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// export default App;
// ReactWebComponent.create(<App name="Mars" />, 'another-component');