[@tabetalt/devops-config](README.md)

# @tabetalt/devops-config

## Index

### Classes

* [Config](classes/config.md)

### Type aliases

* [ConstantKeyType](README.md#constantkeytype)

### Variables

* [adminEmail](README.md#const-adminemail)
* [coreGCPProject](README.md#const-coregcpproject)
* [coreStackRef](README.md#const-corestackref)
* [coreZone](README.md#const-corezone)
* [dockerRegistry](README.md#const-dockerregistry)
* [folderId](README.md#const-folderid)
* [githubAdmin](README.md#const-githubadmin)
* [githubOrg](README.md#const-githuborg)
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

### `Const` coreGCPProject

• **coreGCPProject**: *"tabetalt-core"* = "tabetalt-core"

Core GCP Project

___

### `Const` coreStackRef

• **coreStackRef**: *"bjerk-simen/tabetalt-core"* = "bjerk-simen/tabetalt-core"

Reference to core stack

___

### `Const` coreZone

• **coreZone**: *"tabetalt-no"* = "tabetalt-no"

Core Managed Zone

___

### `Const` dockerRegistry

• **dockerRegistry**: *string* = `eu.gcr.io/${coreGCPProject}`

Docker registry

___

### `Const` folderId

• **folderId**: *"folders/92480390775"* = "folders/92480390775"

Google Cloud Platform Folder ID

___

### `Const` githubAdmin

• **githubAdmin**: *"cobraz"* = "cobraz"

Github Admin

___

### `Const` githubOrg

• **githubOrg**: *"tabetalt"* = "tabetalt"

Github Organization

___

### `Const` organizationName

• **organizationName**: *"tabetalt.no"* = "tabetalt.no"

Google Organization Name

___

### `Const` primaryDomain

• **primaryDomain**: *"{env}.{version}.api.tabetalt.no"* = "{env}.{version}.api.tabetalt.no"

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
