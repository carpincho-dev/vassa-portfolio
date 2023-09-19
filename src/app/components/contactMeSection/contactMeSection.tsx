import { useTranslations } from 'next-intl'
import PaddedSection from '../paddedSection'
import classes from './contactMeSection.module.scss'

interface Link {
    name: string,
    url: string | undefined,
}

interface ContactMeSectionProps {
    email: string,
    links: Link[]
}

export default function ContactMeSection({ email, links }: ContactMeSectionProps) {
    const t = useTranslations('ContactMeSection')
    return (
        <PaddedSection className={classes.wrapper}>
            <h2 className={classes.mailWrapper}>
                {t('jobInquires')}<br/>
                {t('booking')}<br/>
                <a href={`mailto:${email}`}>{email}</a>
            </h2>
            <div className={classes.socialMedia}>
                <p>
                    {t('linkText')}
                    &nbsp;
                    {links.map((link, index) => (
                        <span key={link.name}>
                            <a href={link.url}>{link.name}</a>
                            {
                                index < links.length - 1 && ', '
                            }
                        </span>
                    ))}
                    &nbsp;
                    <span>
                        {t('linkTextEnd')}
                    </span>
                </p>
            </div>
        </PaddedSection>
    )
}
