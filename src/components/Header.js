import React from 'react'

import Footer from './Footer'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src="https://i.postimg.cc/HnmMgkfk/2018_08_28_NSS_C26_0110_1.jpg" alt="" /></a>
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
