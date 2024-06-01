

const JobCard = ({companyTitle, jobTitle, jobDescription, tags, dates, companyWebsite}) => {
    return (
        <section className={'job-card'}>
            <div className={'job-dates-container'}>
            </div>
            <div className={'job-information-container'}>
                <div className={'job-title-date-website'}>
                    <div className={'company-and-title'}>
                        <p className={'job-company-title'}>{companyTitle}</p>
                        <p className={'job-personal-title'}>{jobTitle}</p>
                    </div>
                    <p className={'job-dates'}>{dates[0]} - {dates[1]}</p>
                    {companyWebsite ?
                        <a className={'job-company-website'} href={companyWebsite} target={'_blank'}>Company Website</a>
                        :
                        null
                    }
                </div>
                <p className={'job-description'}>{jobDescription}</p>
            </div>
            <div className={'job-tags-container'}>
            {
                    tags.map((item, index) => {
                        return (
                            <div className={'job-tag'} key={index}>
                                <p>{item}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
};

export default JobCard;