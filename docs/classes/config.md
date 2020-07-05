[@tabetalt/devops-config](../README.md) › [Config](config.md)

# Class: Config

## Hierarchy

* Config

  ↳ **Config**

## Index

### Constructors

* [constructor](config.md#constructor)

### Properties

* [environment](config.md#environment)
* [stackRef](config.md#stackref)

### Methods

* [get](config.md#get)
* [getGCPProvider](config.md#getgcpprovider)
* [getK8SProvider](config.md#getk8sprovider)
* [parseConstant](config.md#parseconstant)

## Constructors

###  constructor

\+ **new Config**(`environment?`: undefined | string, `withCoreStack`: boolean): *[Config](config.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`environment?` | undefined &#124; string | - |
`withCoreStack` | boolean | true |

**Returns:** *[Config](config.md)*

## Properties

###  environment

• **environment**: *string* = "dev"

___

###  stackRef

• **stackRef**: *StackReference*

## Methods

###  get

▸ **get**‹**K**›(`key`: string): *OutputInstance‹any› | OutputInstance‹any› & object | OutputInstance‹any› & object | OutputInstance‹any› & object*

*Overrides void*

**Type parameters:**

▪ **K**: *string*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *OutputInstance‹any› | OutputInstance‹any› & object | OutputInstance‹any› & object | OutputInstance‹any› & object*

___

###  getGCPProvider

▸ **getGCPProvider**(): *Provider*

**Returns:** *Provider*

___

###  getK8SProvider

▸ **getK8SProvider**(): *Provider*

**Returns:** *Provider*

___

###  parseConstant

▸ **parseConstant**(`value`: string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *string*
