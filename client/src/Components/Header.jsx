import { Layout } from "antd";
import React from "react";

const { Header } = Layout;


const HeaderCom = () => {
    return ( 
        <Header style={{ alignItems: "center", display: "flex", position: "sticky", top: "0", zIndex: "1" }}>
            <div className="logo" style={{ display: "flex" }}>
                <img
                    src="https://img.freepik.com/premium-vector/notepad-logo-design-with-data-paper_446783-1250.jpg"
                    alt="logo"
                    style={{ height: "50px", width: '120px' }}
                />
                {/* <h1 style={{ color: 'white' }}>welcome to notes app</h1> */}
            </div>
        </Header>
     );
}
 
export default HeaderCom;



