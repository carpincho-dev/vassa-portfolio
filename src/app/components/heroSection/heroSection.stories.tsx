import type { Meta, StoryObj } from '@storybook/react'

import HeroSection from './heroSection'

const meta = {
    title: 'Base/HeroSection',
    component: HeroSection,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof HeroSection>

export default meta
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        name: "Vassa",
        occupation: "doctor profesor ingeniero para usted",
        hobby: "gamer",
    },
}

export const Short: Story = {
    args: {
        name: "Vassa",
        occupation: "o",
        hobby: "gamer",
    },
}
