// @vitest-environment happy-dom

describe('DOM basics', () => {
  it('can create and query elements', () => {
    const div = document.createElement('div')
    div.textContent = 'Hello from the DOM'
    div.setAttribute('id', 'test-el')
    document.body.appendChild(div)

    const found = document.getElementById('test-el')
    expect(found).not.toBeNull()
    expect(found.textContent).toBe('Hello from the DOM')

    document.body.removeChild(div)
  })
})
