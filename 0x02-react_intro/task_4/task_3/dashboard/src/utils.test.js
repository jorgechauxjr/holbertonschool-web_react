import { getFullYear, getFooterCopy, getLatestNotification } from './utils';


describe('Testing - utils.test.js file', () => {
  it('Year returns current year', () => {
    expect(getFullYear()).toBe( new Date().getFullYear());
  });

  it('getFooterCopy case 1 when True', () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
  });

  it('getFooterCopy case 2 when False', () => {
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
  });

  it('getLatestNotification works', () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
  });
});
