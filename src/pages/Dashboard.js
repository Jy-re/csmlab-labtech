import React from "react";
import DashboardSummary from "./components/DashboardSummary";
import Headers from "./components/Header";
import Sidebar from "./components/Sidebar";
import InventoryOverview from "./components/InventoryOverview";

function Dashboard() {
    return (
        <div>
            <div>
                <Headers />
            </div>
            <div className="sideForm">
                <div >
                    <Sidebar />
                </div>
                <div>
                    <DashboardSummary />
                    <InventoryOverview />
                </div>
            </div>
            
        </div>
    );
}

export default Dashboard;