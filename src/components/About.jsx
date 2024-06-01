const About = () => {
    return (
        <>
            <section id='about-container'>
                <div className={'call-to-action-container'}>
                    <a className={'call-to-action'} href="#projects">
                        View portfolio
                    </a>
                    <a className={'call-to-action'}
                       href="https://medium.com/@rhyshodgson97/learn-web-development-on-your-coffee-break-preface-read-this-first-a0519581c805"
                       target={'_blank'}
                    >
                        Read my blog
                    </a>
                </div>
                <p className='about-me'>
                    I&apos;m a software engineer who loves collaborating with others to build real full stack
                    applications that solve real world problems. Currently working at a small tech start-up
                    specialising in the aviation industry. I&apos;ve built some cool stuff of my own too, so feel free
                    to check that out below.
                </p>
                <p className={'about-me'}>
                    You can also read my blog, where I teach you the foundations of modern web development. I called
                    this blog <span style={{fontStyle: 'italic'}}>Learn Web Development On Your Coffee Break</span>.
                </p>
            </section>
        </>
    );
};

export default About;
