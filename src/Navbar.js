var React = require('react');

function Navbar(props) {

    return (
        <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
            <div className="container">
               {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                <div className="navbar-header page-scroll">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                    </button>
                    <a className="navbar-brand" href="#header">Gavin Chiang</a>
                </div>

                {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="hidden">
                            <a href="#page-top"></a>
                        </li>
                        <li className="page-scroll">
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li className="page-scroll">
                            <a href="#about">About</a>
                        </li>
                        <li className="page-scroll">
                            <a href="#footer">Contact</a>
                        </li>
                        <li>
                        	<a href="https://drive.google.com/file/d/0B6YUF2Bu2EYmYzhOVk0yT2t2Y2M/view?usp=sharing" >Resume </a>
                        </li>
                    </ul>
                </div>
               {/* <!-- /.navbar-collapse --> */}
            </div>
           {/* <!-- /.container-fluid --> */}
        </nav>
    );
};

module.exports = Navbar;