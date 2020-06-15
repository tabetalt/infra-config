[@tabetalt/devops-config](README.md)

# @tabetalt/devops-config

## Index

### Classes

* [Config](classes/config.md)

### Type aliases

* [ConstantKeyType](README.md#constantkeytype)

### Variables

* [adminEmail](README.md#const-adminemail)
* [coreStackRef](README.md#const-corestackref)
* [folderId](README.md#const-folderid)
* [organizationName](README.md#const-organizationname)
* [primaryDomain](README.md#const-primarydomain)
* [region](README.md#const-region)
* [version](README.md#const-version)
* [zone](README.md#const-zone)

## Type aliases

###  ConstantKeyType

Ƭ **ConstantKeyType**: *keyof typeof constants*

## Variables

### `Const` adminEmail

• **adminEmail**: *"so@bjerk.io"* = "so@bjerk.io"

Default administrator email

___

### `Const` coreStackRef

• **coreStackRef**: *"tabetalt-core"* = "tabetalt-core"

Reference to core stack

___

### `Const` folderId

• **folderId**: *"92480390775"* = "92480390775"

Google Cloud Platform Folder ID

___

### `Const` organizationName

• **organizationName**: *"tabetalt.no"* = "tabetalt.no"

Google Organization Name

___

### `Const` primaryDomain

• **primaryDomain**: *"{env}.tabetalt.no"* = "{env}.tabetalt.no"

Primary domain
eg. {env}.tabetalt.no

___

### `Const` region

• **region**: *"europe-west1"* = "europe-west1"

Default region

___

### `Const` version

• **version**: *"v1"* = 'v1' || process.env.VERSION

Default version

___

### `Const` zone

• **zone**: *string* = `${region}-b`

Default zone
