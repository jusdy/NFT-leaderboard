import React from 'react';
import Sidebar from './Sidebar'
import Header from './Header';

interface AppLayoutProps {
    children: React.ReactNode;
}

const AppLayout = ( props: AppLayoutProps ) => {
    return (
        <div className='flex'>
            <Header/>
            <Sidebar/>
            {props.children}
        </div>
    )
}

export default AppLayout;