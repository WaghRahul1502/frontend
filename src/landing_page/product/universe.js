import React from "react";
function Universe() {
  return (
    <div className="container mt-5 ">
      <div className="row text-center">
        <h1 className="mt-3 text-muted fs-3 mb-3">The Zerodha Universe</h1>
        <p className="mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 ">
          <img src="media/zerodhaFundhouse.png" style={{ width: "50%" }} />
          <p className="text-muted mt-3"
            style={{ fontSize: "13px text-align:center" }}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/sensibullLogo.svg" style={{ width: "70%" }} />
          <p className=" text-muted mt-3"
            style={{ fontSize: "13px text-align:center" }}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/tijori.svg" style={{ width: "40%" }} />
          <p className="text-muted mt-3"
            style={{ fontSize: "13px text-align:center" }}>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-4 p-3">
          <img src="media/streakLogo.png" style={{ width: "60%" }} />
          <p className="text-muted mt-3"
            style={{ fontSize: "13px text-align:center" }}>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/smallcaselogo.png" style={{ width: "70%" }} />
          <p
            className="text-muted mt-4"
            style={{ fontSize: "13px text-align:center" }}>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/dittoLogo.png" style={{ width: "50%" }} />
          <p className=" text-muted mt-4"
            style={{ fontSize: "13px text-align:center" }}>
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <button className='p-2 btn btn-primary mt-3 mb-3' style={{width:"20%",margin:"0 auto"}}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
