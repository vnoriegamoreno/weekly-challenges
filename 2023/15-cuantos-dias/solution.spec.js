const calcDateDiffInDays = require('./solution');

describe('calcDateDiffInDays function', () => {
  describe('given two dates with correct format', () => {
    describe('when first date is less than the second', () => {
      it('should return positive integer with the correct diff in days', () => {
        expect(calcDateDiffInDays('01/05/2023', '17/06/2024')).toBe(413);
        expect(calcDateDiffInDays('01/01/2023', '31/12/2023')).toBe(364);
        expect(calcDateDiffInDays('15/03/2023', '10/09/2023')).toBe(179);
        expect(calcDateDiffInDays('07/06/2023', '22/11/2023')).toBe(168);
        expect(calcDateDiffInDays('25/09/2023', '05/04/2024')).toBe(193);
        expect(calcDateDiffInDays('10/01/2024', '20/08/2024')).toBe(223);
        expect(calcDateDiffInDays('03/04/2024', '27/11/2024')).toBe(238);
        expect(calcDateDiffInDays('15/07/2024', '28/02/2025')).toBe(228);
        expect(calcDateDiffInDays('09/10/2024', '15/05/2025')).toBe(218);
        expect(calcDateDiffInDays('22/01/2025', '10/08/2025')).toBe(200);
        expect(calcDateDiffInDays('14/04/2025', '25/11/2025')).toBe(225);
      });
    });
    describe('when second date is less than the first', () => {
      it('instead of return negative should return absolute diff in days', () => {
        expect(calcDateDiffInDays('17/06/2024', '01/05/2023')).toBe(413);
        expect(calcDateDiffInDays('31/12/2023', '01/01/2023')).toBe(364);
        expect(calcDateDiffInDays('15/03/2023', '10/09/2023')).toBe(179);
        expect(calcDateDiffInDays('07/06/2023', '22/11/2023')).toBe(168);
        expect(calcDateDiffInDays('25/09/2023', '05/04/2024')).toBe(193);
        expect(calcDateDiffInDays('10/01/2024', '20/08/2024')).toBe(223);
        expect(calcDateDiffInDays('03/04/2024', '27/11/2024')).toBe(238);
        expect(calcDateDiffInDays('15/07/2024', '28/02/2025')).toBe(228);
        expect(calcDateDiffInDays('09/10/2024', '15/05/2025')).toBe(218);
        expect(calcDateDiffInDays('22/01/2025', '10/08/2025')).toBe(200);
        expect(calcDateDiffInDays('14/04/2025', '25/11/2025')).toBe(225);
      });
    });
  });
  describe('given malformed dates', () => {
    describe('when date is not a string input', () => {
      it('should thrown an exception "Date {{input}} is not a string"', () => {
        const malformedStringDate = 13032025;
        expect(() => calcDateDiffInDays(malformedStringDate))
          .toThrowError(new Error(`Date ${malformedStringDate} is not a string`));
      });
      it('should thrown an exception "Date {{input}} is not formatted correctly"', () => {
        const malformedDate = '13032025';
        expect(() => calcDateDiffInDays(malformedDate))
          .toThrowError(new Error(`Date ${malformedDate} is not formatted correctly`));
      });
      it('should thrown an exception "Date {{input}} has wrong day format"', () => {
        const malformedDate = '40/05/2024';
        expect(() => calcDateDiffInDays(malformedDate))
          .toThrowError(new Error(`Date ${malformedDate} has wrong day format`));
      });
      it('should thrown an exception "Date {{input}} has wrong month format"', () => {
        const malformedDate = '20/15/2024';
        expect(() => calcDateDiffInDays(malformedDate))
          .toThrowError(new Error(`Date ${malformedDate} has wrong month format`));
      });
      it('should thrown an exception "Date {{input}} has wrong year format"', () => {
        const malformedDate = '20/09/-1';
        expect(() => calcDateDiffInDays(malformedDate))
          .toThrowError(new Error(`Date ${malformedDate} has wrong year format`));
      });
    });
  });
});
