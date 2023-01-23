import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  let addButton
  let minusButton
  let timesButton
  let divideButton
  let equalsButton
  let runningTotal

  beforeEach(() => {
    container = render(<Calculator/>)

    addButton = container.getByTestId('operator-add')
    minusButton = container.getByTestId('operator-subtract')
    timesButton = container.getByTestId('operator-multiply')
    divideButton = container.getByTestId('operator-divide')
    equalsButton = container.getByTestId('operator-equals')
    runningTotal = container.getByTestId('running-total')
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add 1 to 4 and get 5', () => {
    const button1 = container.getByTestId('number1')
    const button4 = container.getByTestId('number4')
    fireEvent.click(button1)
    fireEvent.click(addButton)
    fireEvent.click(button4)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('5')
  })


  it ('should subtract 4 from 7 and get 3', () => {
    const button7 = container.getByTestId('number7')  
    const button4 = container.getByTestId('number4')
    fireEvent.click(button7)
    fireEvent.click(minusButton)
    fireEvent.click(button4)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('3')
  })

  it ('multiply 3 by 5 and get 15', () => {
    const button3 = container.getByTestId('number3')
    const button5 = container.getByTestId('number5')
    fireEvent.click(button3)
    fireEvent.click(timesButton)
    fireEvent.click(button5)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('15')
  })


  it ('should divide 21 by 7 and get 3', () => {
    const button2 = container.getByTestId('number2')
    const button1 = container.getByTestId('number1')
    const button7 = container.getByTestId('number7')
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(divideButton)
    fireEvent.click(button7)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('3')
  })

  it ('should concatenate multiple number button clicks', () => {
    const button2 = container.getByTestId('number2')
    const button1 = container.getByTestId('number1')
    const button7 = container.getByTestId('number7')
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(button7)
    expect(runningTotal.textContent).toEqual('217')
  })


  it('should chain multiple operations together', () => {
    const button2 = container.getByTestId('number2')
    fireEvent.click(button2)
    fireEvent.click(addButton)
    fireEvent.click(button2)
    fireEvent.click(minusButton)
    fireEvent.click(button2)
    fireEvent.click(timesButton)
    fireEvent.click(button2)
    fireEvent.click(divideButton)
    fireEvent.click(button2)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('2')
  })


  it ('should clear the running total without affecting the calculation', () => {
    const button2 = container.getByTestId('number2')
    const clear = container.getByTestId('clear')
    fireEvent.click(button2)
    fireEvent.click(addButton)
    fireEvent.click(button2)
    fireEvent.click(addButton)
    fireEvent.click(button2)
    fireEvent.click(clear)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('4')
  })

})

