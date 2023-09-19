import classes from './paddedSection.module.scss'

interface PaddedSectionProps extends React.HTMLAttributes<HTMLElement> {}

export default function PaddedSection(props: PaddedSectionProps) {
    return (
        <section {...props} className={props.className ? `${classes.wrapper} ${props.className}` : classes.wrapper}>
            {props.children}
        </section>
    )
}
