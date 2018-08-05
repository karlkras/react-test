/* global expect */
/* global beforeEach */
import React from 'react';
import { shallow } from 'enzyme';

import App from '../components/App';

describe('App', () => {
    const app = shallow(<App />);

    it("should render correctly", () => {
        expect(app).toMatchSnapshot();
    });
    
    it("initializes the `state` with an empty list of gifts", () => {
       expect(app.state().gifts).toEqual([]); 
    });
    
    describe('When clicking the `add gift` button', () => {
        const id = 1;
        beforeEach( () => {
            app.find('.btn-add').simulate('click');
        });
        
        afterEach( () => {
            app.setState({gifts: []});
        });
        
        it('add a new gift to `state`', () => {
            expect(app.state().gifts).toEqual([{ id }]);
        });
        
        it('adds a new gift to the rendered list', () => {
            expect(app.find('.gift-list').children().length).toEqual(1);
        });
        
        it('creates a Gift component', () => {
            expect(app.find('Gift').exists()).toBe(true);
            
        });
        
        describe('and the user wants to remove the added gift', () => {
             beforeEach(() => {
                 app.instance().removeGift(id);
             });
             
            it('removes the gift from the `state', () => {
                expect(app.state().gifts).toEqual([]);
            });
        });
        
    });
});
