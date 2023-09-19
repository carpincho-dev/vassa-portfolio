import Image from 'next/image'
import PaddedSection from '../paddedSection'
import classes from './heroSection.module.scss'
import portrait from '/public/portrait.jpg'
import { useTranslations } from 'next-intl'

interface HeroSectionProps {
    name: string,
    occupation: string,
    hobby: string,
}

export default function HeroSection({name, occupation, hobby}: HeroSectionProps) {
    const t = useTranslations('HeroSection')
    return (
        <PaddedSection className={classes.wrapper}>
            <div className={classes.textWrapper}>
                <h1 className={classes.title}>
                    {t('hiIAm')}&nbsp;
                    <span className={classes.hobby}>{name}</span>
                </h1>
                <h1 className={classes.title}>
                    {t('whatIDo')}&nbsp;
                    <span className={classes.hobby}>{occupation}</span>
                </h1>
                <h1 className={classes.title}>
                    {t('and')}&nbsp;
                    <span className={classes.hobby}>{hobby}</span>
                </h1>
            </div>
            <div className={classes.imageWrapper}>
                <Image
                    src={portrait}
                    alt="Portrait"
                    sizes="(max-width: 1023px) 80vw, 40vw"
                    className={classes.image}
                    priority
                />
            </div>
        </PaddedSection>
    )
}
