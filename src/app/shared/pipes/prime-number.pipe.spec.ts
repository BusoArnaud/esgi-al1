import { PrimeNumberPipe } from './prime-number.pipe';

describe('PrimeNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new PrimeNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
