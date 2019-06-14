import {getCookList} from '../__mocks__/api';

describe('#getCookList()',() => {
    let data;

     beforeAll(async()=>(
        data = await getCookList({viewValue:2,typeSort:'newest'})
        .then(response => response)
    ));

  it('should return data', () => (
    expect(data).toBeDefined()
  ));

  it('should data is array ', () => (
    expect(Array.isArray([data])).toBe(true)
  ));

  it('should data is not empty ', () => (
    expect(data.length).toBe(2)   
  ));

  it('should data element is Object ', () => (
    expect(typeof(data[0])).toBe('object')    
  ));

  it('should element id correct and has type Number', () => {
    expect(typeof(data[0].id)).toBe('number')
    expect(data[0].id).toEqual(1)    
  });

  it('should date id correct and has type String', () => {
    expect(typeof(data[0].date)).toBe('string')
    expect(data[0].date).toEqual('1111-11-11')    
  });
  
})

