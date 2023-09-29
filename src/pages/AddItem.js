import React from "react";
import Headers from "./components/Header";
import Sidebar from "./components/Sidebar";
import AddForm from "./components/AddForm";

const AddItem = () => {
    return ( 
        <div>
            <div>
                <Headers />
            </div>
            <div className="sideForm">
                <div>
                    <Sidebar />
                </div>
                <div className="addFormContainer">
                    <AddForm />
                </div>
            </div>
        </div>
        
     );
}
 
export default AddItem;