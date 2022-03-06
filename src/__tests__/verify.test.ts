import { verify } from "../verify";

describe('Verify', () => {
    it('returns true for valid words', () => {
        expect(verify('melon')).toBe(true);
    });

    it('returns false for invalid words', () => {
        expect(verify('test')).toBe(false);
        expect(verify('testing')).toBe(false);
        expect(verify('')).toBe(false);
        expect(verify('ajshd')).toBe(false);
    });
})