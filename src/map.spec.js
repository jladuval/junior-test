import map from './map'
import test from 'ava'

const addFive = (value) => value + 5
const multiplyByItself = (value) => value * value 

test('it should let me add 5 to every number in an array', t => {
  const testArray = [1, 2, 3, 3]
  const expectedResults = [6, 7, 8, 8]

  const actualResults = map(addFive, testArray)

  t.deepEqual(actualResults, expectedResults)
})

test('it should let me multiply itself', t => {
  const testArray = [1, 2, 3, 3]
  const expectedResults = [1, 4, 9, 9]

  const actualResults = map(multiplyByItself, testArray)

  t.deepEqual(actualResults, expectedResults)
})

test('it should not modify the input array', t => {
  const testArray = [1, 2, 3, 3]
  const expectedResults = [6, 7, 8, 8]

  const actualResults = map(addFive, testArray)
  t.deepEqual(actualResults, expectedResults)
  t.notDeepEqual(actualResults, testArray)
})

test('it should return an array', t => {
  const testArray = [1, 2, 3, 3]
  const expectedResults = [6, 7, 8, 8]
  const actualResults = map(addFive, testArray)
  const type = Object.prototype.toString.call(actualResults)

  t.is(type, '[object Array]')
})

test('it should provide a blank array if an empty array is mapped over', t => {
  const testArray = []
  const expectedResults = []

  const actualResults = map(multiplyByItself, testArray)

  t.deepEqual(actualResults, expectedResults)
})