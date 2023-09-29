import React from "react";

function DashboardSummary() {
    return (
        <div>
            <h1>Dashboard</h1>
            <hr/>
            <h3>Summary</h3>
            <div className="asContainer">
                {/* Items Available Summary */}
                <div className="summaryBox">
                        <p className="summaryCount">235</p>
                        <p className="slabel">Items Available</p>
                </div>

                {/* Items Borrowed Summary */}
                <div className="summaryBox">
                    <div className="scContainer">
                        <p className="summaryCount">235</p>
                    </div>
                    <div className="slabelContainer">
                        <p className="slabel">Items Borrowed</p>
                    </div>
                </div>

                {/* Pending Requests Summary */}
                <div className="summaryBox">
                    <div className="scContainer">
                        <p className="summaryCount">235</p>
                    </div>
                    <div className="slabelContainer">
                        <p className="slabel">Pending Request</p>
                    </div>
                </div>
            </div>
            </div>
    );
}

export default DashboardSummary;