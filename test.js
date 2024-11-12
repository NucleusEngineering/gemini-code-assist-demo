/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   https://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
