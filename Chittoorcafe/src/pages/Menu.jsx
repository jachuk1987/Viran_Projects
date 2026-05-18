import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuSection from '../components/MenuSection';
import FloatingActions from '../components/FloatingActions';

const Menu = () => {
    return (
        <main className="bg-black min-h-screen pt-20">
            <MenuSection preview={false} />
        </main>
    );
};

export default Menu;
