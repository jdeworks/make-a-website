import { formatDate, slugify, capitalize } from '../src/utils/helpers.js'

describe('formatDate', () => {
  it('formats a date as YYYY-MM-DD', () => {
    expect(formatDate(new Date(2026, 0, 15))).toBe('2026-01-15')
  })

  it('pads single-digit months and days', () => {
    expect(formatDate(new Date(2025, 2, 5))).toBe('2025-03-05')
  })

  it('handles December 31st', () => {
    expect(formatDate(new Date(2024, 11, 31))).toBe('2024-12-31')
  })
})

describe('slugify', () => {
  it('converts a simple string to a slug', () => {
    expect(slugify('Hello World')).toBe('hello-world')
  })

  it('removes special characters', () => {
    expect(slugify('Hello, World! How are you?')).toBe('hello-world-how-are-you')
  })

  it('collapses multiple spaces and dashes', () => {
    expect(slugify('  too   many   spaces  ')).toBe('too-many-spaces')
  })

  it('handles an empty string', () => {
    expect(slugify('')).toBe('')
  })
})

describe('capitalize', () => {
  it('capitalizes the first letter', () => {
    expect(capitalize('hello')).toBe('Hello')
  })

  it('returns empty string for empty input', () => {
    expect(capitalize('')).toBe('')
  })

  it('handles a single character', () => {
    expect(capitalize('a')).toBe('A')
  })
})
