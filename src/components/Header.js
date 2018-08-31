import React from 'react'

import Footer from './Footer'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/11018778_10155211946185570_1623082764662492657_n.jpg?_nc_cat=0&oh=5df62aedfcf580f897b6a73facf222ea&oe=5C2F6227" alt="" /></a>
                    <h1><strong>I am Natasha</strong>, lover of coffee, wine, a good book, 2 rascals, food, and coding!!<br />
                    Current favorite developer tools include ReactJs and C#.<br />
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
