import React from 'react';
import ReactDOM from 'react-dom';
import * as JSDom from 'jsdom';
import { render } from '@testing-library/react';
import {Button , SplitView} from './index';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

// TEST BUTTON
test('Render Button Styled Components' , () => {
    const {getByText} = render(<Button primary >ADD</Button>);
    expect(getByText(/ADD/i)).toHaveStyle("background: #20aee5");
})

// TEST SPLITVIEW
test('Render SplitView Styled Components' , () => {
    const {getByText} = render(
        <SplitView>
            <div>
                DIV 1
            </div>
            <div>
                DIV 2
            </div>
        </SplitView>
    );
    expect(getByText(/DIV 1/i)).toBeInTheDocument();
    expect(getByText(/DIV 2/i)).toBeInTheDocument();

})
