# Interface: ProposalTransactionJSON

JSON encoding of a proposal transaction.

Example:
```json
{
  "contract": "Election",
  "function": "setElectableValidators",
  "args": [ "1", "120" ],
  "value": "0"
}
```

## Hierarchy

* **ProposalTransactionJSON**

## Index

### Properties

* [args](_contractkit_src_governance_proposals_.proposaltransactionjson.md#args)
* [contract](_contractkit_src_governance_proposals_.proposaltransactionjson.md#contract)
* [function](_contractkit_src_governance_proposals_.proposaltransactionjson.md#function)
* [params](_contractkit_src_governance_proposals_.proposaltransactionjson.md#optional-params)
* [value](_contractkit_src_governance_proposals_.proposaltransactionjson.md#value)

## Properties

###  args

• **args**: *any[]*

*Defined in [contractkit/src/governance/proposals.ts:42](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/governance/proposals.ts#L42)*

___

###  contract

• **contract**: *[CeloContract](../enums/_contractkit_src_base_.celocontract.md)*

*Defined in [contractkit/src/governance/proposals.ts:40](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/governance/proposals.ts#L40)*

___

###  function

• **function**: *string*

*Defined in [contractkit/src/governance/proposals.ts:41](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/governance/proposals.ts#L41)*

___

### `Optional` params

• **params**? : *Record‹string, any›*

*Defined in [contractkit/src/governance/proposals.ts:43](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/governance/proposals.ts#L43)*

___

###  value

• **value**: *string*

*Defined in [contractkit/src/governance/proposals.ts:44](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/governance/proposals.ts#L44)*