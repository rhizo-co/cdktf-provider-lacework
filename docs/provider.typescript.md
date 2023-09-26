# `provider`

Refer to the Terraform Registory for docs: [`lacework`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="rhizo-co-terraform-provider-lacework.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LaceworkProvider <a name="LaceworkProvider" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs lacework}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer"></a>

```typescript
import { provider } from 'rhizo-co-terraform-provider-lacework'

new provider.LaceworkProvider(scope: Construct, id: string, config?: LaceworkProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig">LaceworkProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig">LaceworkProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetApiSecret">resetApiSecret</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetApiToken">resetApiToken</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetProfile">resetProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetSubaccount">resetSubaccount</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAccount` <a name="resetAccount" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetAccount"></a>

```typescript
public resetAccount(): void
```

##### `resetAlias` <a name="resetAlias" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetApiKey` <a name="resetApiKey" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetApiKey"></a>

```typescript
public resetApiKey(): void
```

##### `resetApiSecret` <a name="resetApiSecret" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetApiSecret"></a>

```typescript
public resetApiSecret(): void
```

##### `resetApiToken` <a name="resetApiToken" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetApiToken"></a>

```typescript
public resetApiToken(): void
```

##### `resetOrganization` <a name="resetOrganization" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetProfile` <a name="resetProfile" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetProfile"></a>

```typescript
public resetProfile(): void
```

##### `resetSubaccount` <a name="resetSubaccount" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetSubaccount"></a>

```typescript
public resetSubaccount(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isConstruct"></a>

```typescript
import { provider } from 'rhizo-co-terraform-provider-lacework'

provider.LaceworkProvider.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isTerraformElement"></a>

```typescript
import { provider } from 'rhizo-co-terraform-provider-lacework'

provider.LaceworkProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isTerraformProvider"></a>

```typescript
import { provider } from 'rhizo-co-terraform-provider-lacework'

provider.LaceworkProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.accountInput">accountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiKeyInput">apiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiSecretInput">apiSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiTokenInput">apiTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.organizationInput">organizationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.profileInput">profileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.subaccountInput">subaccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.account">account</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiSecret">apiSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiToken">apiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.organization">organization</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.profile">profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.subaccount">subaccount</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.accountInput"></a>

```typescript
public readonly accountInput: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: string;
```

- *Type:* string

---

##### `apiSecretInput`<sup>Optional</sup> <a name="apiSecretInput" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiSecretInput"></a>

```typescript
public readonly apiSecretInput: string;
```

- *Type:* string

---

##### `apiTokenInput`<sup>Optional</sup> <a name="apiTokenInput" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiTokenInput"></a>

```typescript
public readonly apiTokenInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.organizationInput"></a>

```typescript
public readonly organizationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.profileInput"></a>

```typescript
public readonly profileInput: string;
```

- *Type:* string

---

##### `subaccountInput`<sup>Optional</sup> <a name="subaccountInput" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.subaccountInput"></a>

```typescript
public readonly subaccountInput: string;
```

- *Type:* string

---

##### `account`<sup>Optional</sup> <a name="account" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `apiSecret`<sup>Optional</sup> <a name="apiSecret" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiSecret"></a>

```typescript
public readonly apiSecret: string;
```

- *Type:* string

---

##### `apiToken`<sup>Optional</sup> <a name="apiToken" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiToken"></a>

```typescript
public readonly apiToken: string;
```

- *Type:* string

---

##### `organization`<sup>Optional</sup> <a name="organization" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.organization"></a>

```typescript
public readonly organization: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `profile`<sup>Optional</sup> <a name="profile" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

---

##### `subaccount`<sup>Optional</sup> <a name="subaccount" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.subaccount"></a>

```typescript
public readonly subaccount: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LaceworkProviderConfig <a name="LaceworkProviderConfig" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.Initializer"></a>

```typescript
import { provider } from 'rhizo-co-terraform-provider-lacework'

const laceworkProviderConfig: provider.LaceworkProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.account">account</a></code> | <code>string</code> | Lacework account subdomain of URL (i.e. <ACCOUNT>.lacework.net). |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.apiKey">apiKey</a></code> | <code>string</code> | Lacework API access key. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.apiSecret">apiSecret</a></code> | <code>string</code> | Lacework API access secret. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.apiToken">apiToken</a></code> | <code>string</code> | Lacework API access token. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.organization">organization</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set it to true to access organization level data sets (org admins only). |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.profile">profile</a></code> | <code>string</code> | Lacework profile name to use, profiles are configured at $HOME/.lacework.toml via the Lacework CLI. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.subaccount">subaccount</a></code> | <code>string</code> | The sub-account name inside your organization (org admins only). |

---

##### `account`<sup>Optional</sup> <a name="account" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

Lacework account subdomain of URL (i.e. <ACCOUNT>.lacework.net).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#account LaceworkProvider#account}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#alias LaceworkProvider#alias}

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

Lacework API access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#api_key LaceworkProvider#api_key}

---

##### `apiSecret`<sup>Optional</sup> <a name="apiSecret" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.apiSecret"></a>

```typescript
public readonly apiSecret: string;
```

- *Type:* string

Lacework API access secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#api_secret LaceworkProvider#api_secret}

---

##### `apiToken`<sup>Optional</sup> <a name="apiToken" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.apiToken"></a>

```typescript
public readonly apiToken: string;
```

- *Type:* string

Lacework API access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#api_token LaceworkProvider#api_token}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.organization"></a>

```typescript
public readonly organization: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set it to true to access organization level data sets (org admins only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#organization LaceworkProvider#organization}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

Lacework profile name to use, profiles are configured at $HOME/.lacework.toml via the Lacework CLI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#profile LaceworkProvider#profile}

---

##### `subaccount`<sup>Optional</sup> <a name="subaccount" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.subaccount"></a>

```typescript
public readonly subaccount: string;
```

- *Type:* string

The sub-account name inside your organization (org admins only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#subaccount LaceworkProvider#subaccount}

---



