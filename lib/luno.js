export async function getLunoBTCPriceInMYR() {
  const lunoRes = await fetch("https://api.luno.com/api/1/ticker?pair=XBTMYR")
  const lunoTickerBTCMYR = await lunoRes.json()
  return lunoTickerBTCMYR
}
