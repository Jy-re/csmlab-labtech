import React from "react";
import Dashboard from '../../assets/imgs/Dashboard.png'
import Transaction from '../../assets/imgs/Transaction.png'
import InventoryIcon from '../../assets/imgs/inventory.png'
import InventoryItemsIcon from '../../assets/imgs/inventory-items.png'
import ReportsIcon from '../../assets/imgs/reports.png'
import Lamp from '../../assets/imgs/Lamp.png'


const Sidebar = () => {
    return ( 
        <div className="sidebarContainer">
            <div className="menuContainer">
                <div className="iconContainer">
                    <img src={Dashboard}></img>
                </div>
                <div className="labelContainer">
                    <p> Dashboard</p>
                </div>
            </div>
            <div className="menuContainer">
                <div className="iconContainer">
                    <img src={Transaction}></img>
                </div>
                <div className="labelContainer">
                    <p>Manage Requests</p>
                </div>
            </div>
            <div className="menuContainer">
                <div className="iconContainer">
                    <img src={InventoryIcon}></img>
                </div>
                <div className="labelContainer">
                    <p>Inventory</p>
                </div>
            </div>
            <div className="inventory-itemContainer">
                <div className="inventory-items">
                    <div className="iconContainer">
                        <img src={InventoryItemsIcon}></img>
                    </div>
                    <div className="labelContainer">
                        <p>Glassware</p>
                    </div>
                </div>
                    <div className="inventory-items">
                        <div className="iconContainer">
                            <img src={InventoryItemsIcon}></img>
                        </div>
                        <div className="labelContainer">
                            <p>Miscellaneous</p>
                        </div>
                    </div>
                    <div className="inventory-items">
                        <div className="iconContainer">
                            <img src={InventoryItemsIcon}></img>
                        </div>
                        <div className="labelContainer">
                            <p>Other name</p>
                        </div>
                    </div>
            </div>
            <div className="menuContainer">
                <div className="iconContainer">
                    <img src={ReportsIcon}></img>
                </div>
                <div className="labelContainer">
                    <p>Reports</p>
                </div>
            </div>
            <div className="menuContainer">
                <div className="iconContainer">
                    <img src={Lamp}></img>
                </div>
                <div className="labelContainer">
                    <p>Help and Support</p>
                </div>
            </div>
        </div>
     );
}
 
export default Sidebar;