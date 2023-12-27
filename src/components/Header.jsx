import React from "react";
import {Navbar} from "./Navbar/Navbar";

export const Header = () => {
    return (
        <React.Fragment>
            <div className='container mx-auto bg-gray-200 rounded-b-3xl h-38 pt-2 pb-3'>
                <Navbar/>
            </div>
        </React.Fragment>
    )
}