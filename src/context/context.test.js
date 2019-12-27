import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { ListContext, ListContextProvider } from './index'

test('NameConsumer shows default value', () => {
    
    const { getByText } = render(
        <ListContextProvider>
            <h2>Has context</h2>
        </ListContextProvider>
        )
    expect(getByText(/has context/i)).toBeInTheDocument()
})