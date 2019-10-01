import {add, BigNumber, bignumber,  multiply} from "mathjs";
import {zeroBigNumberArray} from "../util/MathUtil";
function nextResponse(
  baseMatrix: BigNumber[][], responseMatrix: BigNumber[], initialResponse: BigNumber[]): BigNumber[] {
  const multiplyOutput = multiply(baseMatrix as any, initialResponse as any);
  return add(multiplyOutput, responseMatrix as any) as any as BigNumber[];
}

export default function solve(baseMatrix: BigNumber[][], responseMatrix: BigNumber[]) {
  let response = zeroBigNumberArray(responseMatrix.length);
  response[0] = bignumber(1);
  for (let i = 0; i < 10; i++) {
    response = nextResponse(baseMatrix, responseMatrix, response);
    console.log(response);
  }
}

solve([[bignumber(-3), bignumber(4)], [bignumber(5), bignumber(2)]], [bignumber(1), bignumber(4)]);
