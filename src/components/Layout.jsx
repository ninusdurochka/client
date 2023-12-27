import React from "react";

export const Layout = ({children}) => {
    return (
        <div className='flex flex-col h-full w-full'>{children}</div>
    )
}