export interface GenerateOptions {
    name: string
}

export function generateLetter({ name }: GenerateOptions) {
    return `
Dear Robinhood Financial LLC,

I am ${name}, a user of the trading platform provided by Robinhood Financial LLC ("Robinhood"). I am informed and believe that Robinhood is, and continues to be, engaged in market manipulation as defined by Section 9(a)(2) of the Securities Exchange Act of 1934 by only permitting the selling of certain securities, including, but not limited to, shares in the stock of GameStop Corporation ("GME shares"). Robinhood also engaged in market manipulation by removing certain securities from the search. Robinhood, by manipulating the market, is engaged in tortious interference between me and the entities currently in a short position (the "shorts").

I firmly believe that Robinhood stopped only the purchase of these securities to artificially and illegally suppress the prices, helping the shorts. Robinhood Financial LLC must **cease and desist** their tortious conduct immediately by stopping their artificial suppression to prevent further harm (ie by restore trading and searching as normal). If you do not cease and desist the aforementioned tortious conduct, a lawsuit may be commenced against you.

Sincerely,

${name}`
}