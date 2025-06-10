import { describe, it, expect } from 'vitest';
import { searchTools, tools } from '../lib/tools-data';

describe('searchTools', () => {
  it('returns all tools when query is empty', () => {
    const result = searchTools('');
    expect(result).toEqual(tools);
  });

  it('matches tools by name', () => {
    const result = searchTools('Percentage');
    expect(result.some(t => t.id === 'percentage-calculator')).toBe(true);
  });

  it('matches tools by description', () => {
    const result = searchTools('interactive charts');
    expect(result.some(t => t.id === 'compound-interest-calculator')).toBe(true);
  });

  it('matches tools by keywords', () => {
    const result = searchTools('epoch');
    expect(result.some(t => t.id === 'timestamp-converter')).toBe(true);
  });
});
