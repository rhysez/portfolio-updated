const About = () => {
    return (
        <>
            <section id='about-container'>
                <div className={'call-to-action-container'}>
                    <a className={'call-to-action'} href="#projects">
                        View latest project
                    </a>
                    <a className={'call-to-action'}
                       href="https://rhyshodgsondev.hashnode.dev/"
                       target={'_blank'}
                    >
                        Read my blog
                    </a>
                </div>
                <p className='about-me'>
                    I&apos;m a software engineer who loves collaborating with others to build real full stack
                    applications that solve real world problems. Currently working at Quantavia, a software company
                    specialising in the aviation industry. I&apos;ve built some cool stuff of my own too, so feel free
                    to check that out below.
                </p>
                <p className={'about-me'}>
                    You can also read my blog, where I teach you the foundations of modern web development. I called
                    this blog <span style={{fontStyle: 'italic'}}>The Developer Coffee Break</span>.
                </p>
            </section>
        </>
    );
};

export default About;
