import type { Meta, StoryObj } from '@storybook/react'

import ContactMeSection from './contactMeSection'

const meta = {
    title: 'Base/ContactMeSection',
    component: ContactMeSection,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof ContactMeSection>

export default meta
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        email: "vassa@gmail.com",
        links: [
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com",
            },
            {
                name: "GitHub",
                url: "https://github.com",
            }
        ]
    },
}
