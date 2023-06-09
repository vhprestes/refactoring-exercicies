const statement = require('./main.js');

let [ invoice ] = require('./invoices.json')
let plays = require('./plays.json')



describe('statement', () => {
  it('should return a string', () => {
    expect(typeof statement(invoice, plays)).toBe('string');
  },
  it('should return a string with the correct values', () => {
    expect(statement(invoice, plays)).toContain('$650.00');
    expect(statement(invoice, plays)).toContain('$580.00');
    expect(statement(invoice, plays)).toContain('$500.00');
  }),
  it('should be called and not be null', () => {
    expect(statement(invoice, plays)).not.toBeNull();
  
  })
  )
});
