import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar className="mb-5" expand="lg" variant="secondary" bg="secondary">
            <div className="px-4">
                <Navbar.Brand className="text-white" href="#">Navbar</Navbar.Brand>
            </div>
        </Navbar>
    );
};



export default Header;