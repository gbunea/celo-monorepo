import BigNumber from 'bignumber.js'
import * as React from 'react'
import { Provider } from 'react-redux'
import * as renderer from 'react-test-renderer'
import ExchangeReview from 'src/exchange/ExchangeReview'
import { ExchangeRatePair } from 'src/exchange/reducer'
import { CURRENCY_ENUM } from 'src/geth/consts'
import { Screens } from 'src/navigator/Screens'
import { createMockStore, getMockStackScreenProps } from 'test/utils'

const exchangeRatePair: ExchangeRatePair = { goldMaker: '0.11', dollarMaker: '10' }

// This mocks the default and named exports for DisconnectBanner
// Which is necessary because one of the tests below doesn't work when
// we render the component using the mockStore, meaning we need to mock
// children that connect to the store
jest.mock('src/shared/DisconnectBanner', () => ({
  __esModule: true,
  default: () => null,
  DisconnectBanner: () => null,
}))

const store = createMockStore({
  exchange: {
    exchangeRatePair,
  },
})

const mockScreenProps = getMockStackScreenProps(Screens.ExchangeReview, {
  exchangeInput: {
    makerToken: CURRENCY_ENUM.GOLD,
    makerTokenBalance: '20',
    inputToken: CURRENCY_ENUM.GOLD,
    inputTokenDisplayName: 'gold',
    inputAmount: new BigNumber(10),
  },
})

describe('ExchangeReview', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <ExchangeReview {...mockScreenProps} />
      </Provider>
    )
    expect(tree).toMatchSnapshot()
  })
})
