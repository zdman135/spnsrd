import React, { Component } from 'react'

class Jumbotron extends Component {

  render() {

    return (
      <header id="header-text-3" className="pt-75 pb-75 pt-lg-150 pb-lg-150 light">
    			<div className="container">
        			<div className="row">
            			<div className="col-md-6">
                			<img className="mb-100" alt="sign" src="images/logo-4.png" height="120" />
                			<h2><strong>Agency</strong></h2>
                			<h3 className="mb-30 text-secondary">Multipurpose template</h3>
                			<p className="mb-50">In our work we try to use only the most modern, convenient and interesting solutions. We want the template you downloaded look unique and new for such a long time as it is possible.</p>
                			<a href="#" className="btn btn-dark shadow-btn btn-lg">Our works</a>
            			</div>
        			</div>
    			</div>
    			<div className="bg-wrap">
        			<div className="bg"></div>
    			</div>
			</header>
    )
  }
}

export default Jumbotron;