const { addNumbers } = require('./util');

describe('addNumbers', () => {
  it('should return the sum of two valid numbers', () => {
    const num1 = 5;
    const num2 = 10;
    const req = { body: { num1, num2 } };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    addNumbers(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith('The sum is: 15');
  });

  it('should return an error message for invalid input', () => {
    const req = { body: { num1: 'abc', num2: 10 } };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    addNumbers(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith(
      'Invalid input. Please provide two numbers.'
    );
  });
});
