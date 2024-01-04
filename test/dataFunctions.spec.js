import { computeStats, filterData, sortData } from '../src/lib/dataFunctions.js';
import { pruebadataset as fakeDataset } from '../src/data/dataTest.js';
import { pruebadataset2 as fakeDataset2 } from '../src/data/dataTest.js';

describe('Función computeStats:', () => {

  describe('Cantidad de peliculas', () => {
    it('dataset has 2 should return 2', () => {
      expect(computeStats(fakeDataset).numMovies).toBe(2);
    });
    it('dataset has 3 should return 3', () => {
      expect(computeStats(fakeDataset2).numMovies).toBe(3);
    });
  });

  describe('Promedio de aprobación', () => {
    it('"74%","86%" should return 82%', () => {
      expect(computeStats(fakeDataset).criticMovies).toBe(80);
    });
    it('"91%","80%","35%" should return 68.7%', () => {
      expect(computeStats(fakeDataset2).criticMovies).toBe(68.7);
    });
  });

});

const filterByType = 'type';
const valueType = 'Comedia Romántica';
const valueTypeNone = '';
const filterByTemp = 'temporality';
const valueTemp1 = 'actual';
const valueTemp2 = 'anterior';
const valueTempNone = '';


describe('Función filterData:', () => {
  describe('FilterBy: Año de estreno', () => {
    it('"2010-2023" should return Love to Hate You', () => {
      const expected = fakeDataset.find(item => item.id === 'love-to-hate-you');
      const result = filterData(fakeDataset, filterByTemp, valueTemp1);
      expect(result).toEqual([expected]);
    });
    it('"1940-2010" should return Mulan', () => {
      const expected = fakeDataset.find(item => item.id === 'mulan-1');
      const result = filterData(fakeDataset, filterByTemp, valueTemp2);
      expect(result).toEqual([expected]);
    });
    it('"elegir" should return all dataset', () => {
      const expected = fakeDataset;
      const result = filterData(fakeDataset, filterByTemp, valueTempNone);
      expect(result).toEqual(expected);
    });
  });

  describe('FilterBy: Categoría', () => {
    it('Categoría: "Comedia Romántica" should return La la land', () => {
      const expected = fakeDataset2.find(item => item.id === 'la-la-land');
      const result = filterData(fakeDataset2, filterByType, valueType);
      expect(result).toEqual([expected]);
    });
    it('"elegir" should return all dataset', () => {
      const expected = fakeDataset2;
      const result = filterData(fakeDataset2, filterByType, valueTypeNone);
      expect(result).toEqual(expected);
    });
  });
});

const sortBy = "name";
const sortOrderAsc = "asc";
const sortOrderDesc = "desc";

describe('Función sortData:', () => {
  it('"A-Z" should return as first element: Belzebuth', () => {
    const expected = fakeDataset2.find(item => item.id === 'belzebuth');
    const result = sortData(fakeDataset2, sortBy, sortOrderAsc)[0];
    expect(result).toEqual(expected);
  });
  it('"Z-A" should return as first element: Resident Evil', () => {
    const expected = fakeDataset2.find(item => item.id === 'resident-evil-1');
    const result = sortData(fakeDataset2, sortBy, sortOrderDesc)[0];
    expect(result).toEqual(expected);
  });
});