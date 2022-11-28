import React from 'react';
import Sidebar from './Sidebar'

interface AppLayoutProps {
    children: React.ReactNode;
}

const AppLayout = ( props: AppLayoutProps ) => {
    return (
        <div className='flex'>
            <Sidebar/>
            {props.children}
        </div>
    )
}

export default AppLayout;