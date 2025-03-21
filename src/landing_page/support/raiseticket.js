import React from "react";

function RaiseTicket() {
  return (
    <div className="container">
      <div className="row  mt-5 mb-2">
        <h1 className="fs-4 text-left text-muted">
          To create a ticket, select a relevant topic
        </h1>
        <div className="col-4">
          <h4 className="fs-5 mt-4 text-left text-muted">
            <i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h4>
          <a href="" className="mx-4" style={{textDecoration:"none"}}>Resident individual</a>
          <br></br>
          <a href="" className="mx-4" style={{textDecoration:"none"}}>Minor</a>
          <br></br>
          <a href="" className="mx-4" style={{textDecoration:"none"}}>Non Resident Indian (NRI)</a>
          <br></br>
          <a href="" className="mx-4" style={{textDecoration:"none"}}>Company,Partnership,HUF and LLP</a>
          <br></br>
          <a href="" className="mx-4" style={{textDecoration:"none"}}>Glossary</a>
        </div>
        <div className="col-4 ">
          <h4 className="fs-5  mt-4 text-center text-muted">
            <i class="fa fa-user" aria-hidden="true"></i> Your Zerodha Account
          </h4>
          <a href="" className="mx-5 p-2" style={{textDecoration:"none"}}>Your Profile</a>

          <br></br>
          <a href="" className="mx-5 p-2" style={{textDecoration:"none"}}>Account modification</a>
          <br></br>
          <a href="" className="mx-5 p-2" style={{textDecoration:"none"}}>
            CMR and DP
          </a>
          <br></br>
          <a href="" className="mx-5 p-2" style={{textDecoration:"none"}}>Nomination</a>
          <br></br>
          <a href="" className="mx-5 p-2" style={{textDecoration:"none"}}>Transfer of securities</a>
        </div>
        <div className="col-4 px-4">
          <h4 className="fs-5  mt-4  mx-4     text-muted">
            <i class="fa fa-bar-chart" aria-hidden="true"></i> Kite 
          </h4>
          <a href="" className="mx-5 mt-2" style={{textDecoration:"none"}}>IPO</a>
          <br></br>
          <a href="" className="mx-5" style={{textDecoration:"none"}}>Trading FAQs</a>
          <br></br>
          <a href="" className="mx-5" style={{textDecoration:"none"}}>Margin Trading Facility  </a>
          <br></br>
          <a href="" className="mx-5" style={{textDecoration:"none"}}>Charts and orders</a>
          <br></br>
          <a href="" className="mx-5" style={{textDecoration:"none"}}>Alerts and Nudges</a>
          <br></br>
          <a href="" className="mx-5" style={{textDecoration:"none"}}>General</a>
        </div>
      </div>
      <div className="row  mt-4  mb-2">
      <div className="col-4">
          <h4 className="fs-5 mt-4 text-left text-muted">
          <i class="fa fa-window-maximize" aria-hidden="true"></i> Funds
          </h4>
          <a href="" className="mx-4" style={{textDecoration:"none"}}>Add money</a>
          <br></br>
          <a href="" className="mx-4" style={{textDecoration:"none"}}>Withdraw money</a>
          <br></br>
          <a href="" className="mx-4" style={{textDecoration:"none"}}>Add bank accounts</a>
          <br></br>
          <a href="" className="mx-4" style={{textDecoration:"none"}}>eMandates</a>
          
        </div>
        <div className="col-4 ">
          <h4 className="fs-5  mt-4 mx-4 text-left text-muted">
          <i class="fa fa-eercast" aria-hidden="true"></i> Console
          </h4>
          <a href="" className="mx-5 p-2" style={{textDecoration:"none"}}> Portfolio</a>
          <br></br>
          <a href="" className="mx-5 p-2" style={{textDecoration:"none"}}>Corporate actions
          </a>
          <br></br>
          <a href="" className="mx-5 p-2" style={{textDecoration:"none"}}>
          Funds statement
          </a>
          <br></br>
          <a href="" className="mx-5 p-2" style={{textDecoration:"none"}}>Reports</a>
          <br></br>
          <a href="" className="mx-5 p-2" style={{textDecoration:"none"}}>Profile</a>
          <br></br>
          <a href="" className="mx-5 p-2" style={{textDecoration:"none"}}>Segments</a>
        </div>
        <div className="col-4 px-4   ">
          <h4 className="fs-5  mt-4  mx-4  text-muted">
          <i class="fa fa-circle-thin" aria-hidden="true"></i> Coin
          </h4>
          <a href="" className="mx-5 mt-2" style={{textDecoration:"none"}}>Understanding MF</a>
          <br></br>
          <a href="" className="mx-5" style={{textDecoration:"none"}}> Understanding MC</a>
          <br></br>
          <a href="" className="mx-5" style={{textDecoration:"none"}}>Coin app  </a>
          <br></br>
          <a href="" className="mx-5" style={{textDecoration:"none"}}>Coin web</a>
          <br></br>
          <a href="" className="mx-5" style={{textDecoration:"none"}}>Transactions and reports</a>
          <br></br>
          <a href="" className="mx-5" style={{textDecoration:"none"}}>NPS</a>
        </div>
      </div>
      </div>

  );
}

export default RaiseTicket;
