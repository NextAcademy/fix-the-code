const MOCK_PRICE = 99
const MOCK_JSON_RESP = { last_trade: MOCK_PRICE }

global.fetch = jest.fn(() => Promise.resolve({
  status: 200,
  json: () => Promise.resolve(MOCK_JSON_RESP)
}));

import { getLunoBTCPriceInMYR } from '../lib/luno.js'

test("Returns the correct sum value", async () => {
  expect(await getLunoBTCPriceInMYR()).toBe(MOCK_PRICE);
});
