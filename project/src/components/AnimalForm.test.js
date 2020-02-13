import React from "react";
import { render, fireEvent } from '@testing-library/react';
import AnimalForm from "../components/AnimalForm.js";

// describe blocks are another way to write tests
// but they are going away

// describe('', () => {
//     it('', () => {

//     })
// })

// newer way to write tests uses teh global test() function

test('species, age, notes inputs are rendered', () => {
    const { getByLabelText } = render(<AnimalForm/>);
    getByLabelText(/species/i);
    getByLabelText(/age/i);
    getByLabelText(/notes/i);
})

test('form submit adds new animal to the list', () => {
    const { getByLabelText, getByText, getByTestId } = render(<AnimalForm/>);

    // querying ofr all the input nodes
    const speciesInput = getByLabelText(/species/i);
    const ageInput = getByLabelText(/age/i);
    const notesInput = getByLabelText(/notes/i);

    // use the change event to add text to each input
    fireEvent.change(speciesInput, { target: {value: 'Test Species'}})
    fireEvent.change(ageInput, { target: {value: 'Test Age'}})
    fireEvent.change(notesInput, { target: {value: 'Test Notes'}})

    expect(speciesInput.value).toBe('Test Species');
    expect(ageInput.value).toBe('Test Age');
    expect(notesInput.value).toBe('Test Notes');

    // click on the button!
    fireEvent.click(getByText(/submit!/i))

    // assert that the species is added to the list
    const animalText = getByTestId(/test species/i);
    expect(animalText).toBeInTheDocument();
})