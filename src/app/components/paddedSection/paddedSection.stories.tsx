import type { Meta, StoryObj } from '@storybook/react'

import PaddedSection from './paddedSection'

const meta = {
    title: 'Base/PaddedSection',
    component: PaddedSection,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof PaddedSection>

export default meta
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        children: 'Buy Now',
    },
}

export const Short: Story = {
    args: {
        children: 'Text',
    },
}
