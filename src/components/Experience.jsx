import JobCard from "./JobCard.jsx";

const Experience = () => {

    return (
        <>
            <h1 className={"section-title"}>Experience</h1>
            <JobCard
                companyTitle={'HeliCrewManager'}
                jobTitle={'Full Stack Engineer'}
                jobDescription={'Integral role in building and re-writing the company SaaS application using TypeScript, NextJS and Laravel. ' +
                    'I have also spearheaded the ongoing development of the FCM Hub mobile app, which has been built with React Native.'}
                tags={['TypeScript', 'React', 'React Native', 'NextJS', 'Laravel', 'Tailwind CSS', 'MySQL']}
                dates={['January 2024', 'Present']}
                companyWebsite={'https://helicrewmanager.com/'}
            />
            <JobCard
                companyTitle={'Hobbyist'}
                jobTitle={'Web Developer'}
                jobDescription={'Building personal projects and experimenting with different forms of programming'}
                tags={['HTML', 'Vanilla CSS', 'JavaScript', 'React', 'NodeJS', 'ExpressJS', 'MongoDB']}
                dates={['January 2023', 'January 2024']}
            />
        </>
    )
};

export default Experience;