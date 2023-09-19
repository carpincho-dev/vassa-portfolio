import styles from './page.module.css'
import ContactMeSection from '@/components/contactMeSection'
import HeroSection from '@/components/heroSection'

export default function Home() {
    return (
        <main className={styles.main}>
            <ContactMeSection email="vassa@gmail.com" links={[{
                name: 'Instagram',
                url: 'https://www.instagram.com/vassa/',
            },
            {
                name: 'Twitter',
                url: 'https://twitter.com/vassa/',
            },
            {
                name: 'Facebook',
                url: 'https://www.facebook.com/vassa/',
            },
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/vassa/',
            }
            ]} />
        </main>
    )
}
