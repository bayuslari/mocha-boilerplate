import { expect } from 'chai';
import { Hello } from '../src';

describe('Hello',() => {
    it('should return hello world', () => {
        const result = Hello();
        expect(result).to.equal('Hello World!');
    });
    
})