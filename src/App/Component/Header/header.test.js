import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';


it('renders correctly header component', () => {
    const header = renderer
        .create(<Header/>)
        .toJSON();
    expect(header).toMatchSnapshot();
});
