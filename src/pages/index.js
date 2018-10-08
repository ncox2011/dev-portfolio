import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumblfsnippet2 from '../assets/images/thumbs/l-fsnippet2.png'
import thumb01 from '../assets/images/thumbs/01.jpg'

import fulllfsnippet2 from '../assets/images/fulls/l-fsnippet2.png'
import full01 from '../assets/images/fulls/01.jpg'


const DEFAULT_IMAGES = [
    { id: '1', src: fulllfsnippet2, thumbnail: thumblfsnippet2, caption: 'The Lazy Foodie', description: 'Recipe application that allows user to search for recipes using ingredients on hand.  Created with Reactjs and Bloomer/Bulma CSS frameworks.'},
    { id: '2', src: full01, thumbnail: thumb01, caption: 'Back-end Capstone TBD', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    // { id: '3', src: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    // { id: '4', src: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    // { id: '5', src: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    // { id: '6', src: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <div>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>How I got started:<br />
                            </h2>
                        </header>
                        <p>Pharmacy Technician turned Software Developer.  After years of looking for a way to
                            incorporate my interests in creativity and problem solving, I was referred to coding websites by a friend
                            and once I got started I knew this was the right fit.  <br/> I decided to move from my hometown in Blacksburg, VA 
                            to Nashville, TN to start a 6-month Full-Stack Developer Bootcamp.  It's been the greatest learning experience of my life.
                            Skills include: ReactJs, JavaScript, ASP.NET, SQLlite, SQL Server, C#, CSS and HTML.
                        </p>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="http://nc-the-lazy-foodie.s3-website.us-east-2.amazonaws.com/" className="button">Lazy Foodie Site</a></li>
                        </ul>
                        <ul className="actions">
                            <li><a href="#" className="button">Backend Site</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Reach Out!</h2>
                        <p>Send me a message.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        <br />
                                        Nashville, TN<br />
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">natashac1014@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`