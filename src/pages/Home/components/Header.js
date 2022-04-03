import React from 'react';
import '../style.css';

function Header() {
    return (
        <header className="header">
            <div className='toolbar'>
                <div>
                    <a href="/">Mosaiki</a>
                </div>
                <div>
                    <button>Novo post</button>
                    <span>img1</span>
                    <span>img1.2</span>
                </div>
            </div>
        </header>
    )
}

export default Header;