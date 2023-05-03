import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primeNumber'
})
export class PrimeNumberPipe implements PipeTransform {

  transform(value: number): string {
    if (value < 2) {
      return `${value} is NOT a prime number.`;
    }
    // Check if number is divisible by any integer from 2 to its square root
    for (let i = 2; i <= Math.sqrt(value); i++) {
      if (value % i === 0) {
        return `${value} is NOT a prime number.`;
      }
    }
    // If no factors were found, the number is prime
    return `${value} is a prime number.`;
  }

}
