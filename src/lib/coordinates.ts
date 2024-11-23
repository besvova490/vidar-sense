// eslint-disable-next-line @typescript-eslint/no-require-imports
const mgrs = require('mgrs');

export const toMgrs = (lat: number, lng: number): string => {
  try {
    return mgrs.forward([lng, lat], 5);
  } catch (error) {
    console.error('Error converting coordinates:', error);
    return 'Invalid coordinates';
  }
}