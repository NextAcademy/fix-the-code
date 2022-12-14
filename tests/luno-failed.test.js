const MOCK_STATUS_CODE = 500

global.fetch = jest.fn(() => Promise.resolve({
  status: MOCK_STATUS_CODE,
  json: () => { }
}));

import { getLunoBTCPriceInMYR } from '../lib/luno.js'

test("Returns the correct sum value", async () => {
  expect(await getLunoBTCPriceInMYR()).toBe("Failed to retrieve price");
});
