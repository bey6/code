import { expect } from 'chai'
import { getSub } from '../../src/utility';

describe('测试 utility.js', () => {
  it('测试 getSub 函数', () => {
    expect(getSub()).to.be.eq(0);
    expect(getSub(0)).to.be.eq(0);
    expect(getSub(1)).to.be.eq(1);
    expect(getSub(1, 2)).to.be.eq(1);
    expect(getSub(2, 1)).to.be.eq(1);
    expect(getSub(1, -1)).to.be.eq(2);
    expect(getSub(-1, 1)).to.be.eq(2);
    expect(getSub(-1, -2)).to.be.eq(1);
    expect(getSub(-2, -1)).to.be.eq(1);
  })
})

