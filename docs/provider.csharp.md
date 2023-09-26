# `provider`

Refer to the Terraform Registory for docs: [`lacework`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="rhizo-co-terraform-provider-lacework.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LaceworkProvider <a name="LaceworkProvider" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs lacework}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new LaceworkProvider(Construct Scope, string Id, LaceworkProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig">LaceworkProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig">LaceworkProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetAccount">ResetAccount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetApiSecret">ResetApiSecret</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetApiToken">ResetApiToken</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetProfile">ResetProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetSubaccount">ResetSubaccount</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAccount` <a name="ResetAccount" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetAccount"></a>

```csharp
private void ResetAccount()
```

##### `ResetAlias` <a name="ResetAlias" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetApiKey` <a name="ResetApiKey" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetApiKey"></a>

```csharp
private void ResetApiKey()
```

##### `ResetApiSecret` <a name="ResetApiSecret" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetApiSecret"></a>

```csharp
private void ResetApiSecret()
```

##### `ResetApiToken` <a name="ResetApiToken" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetApiToken"></a>

```csharp
private void ResetApiToken()
```

##### `ResetOrganization` <a name="ResetOrganization" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetOrganization"></a>

```csharp
private void ResetOrganization()
```

##### `ResetProfile` <a name="ResetProfile" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetProfile"></a>

```csharp
private void ResetProfile()
```

##### `ResetSubaccount` <a name="ResetSubaccount" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetSubaccount"></a>

```csharp
private void ResetSubaccount()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

LaceworkProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

LaceworkProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

LaceworkProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.accountInput">AccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiKeyInput">ApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiSecretInput">ApiSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiTokenInput">ApiTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.organizationInput">OrganizationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.profileInput">ProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.subaccountInput">SubaccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.account">Account</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiKey">ApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiSecret">ApiSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiToken">ApiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.organization">Organization</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.profile">Profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.subaccount">Subaccount</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.accountInput"></a>

```csharp
public string AccountInput { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiKeyInput"></a>

```csharp
public string ApiKeyInput { get; }
```

- *Type:* string

---

##### `ApiSecretInput`<sup>Optional</sup> <a name="ApiSecretInput" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiSecretInput"></a>

```csharp
public string ApiSecretInput { get; }
```

- *Type:* string

---

##### `ApiTokenInput`<sup>Optional</sup> <a name="ApiTokenInput" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiTokenInput"></a>

```csharp
public string ApiTokenInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.organizationInput"></a>

```csharp
public object OrganizationInput { get; }
```

- *Type:* object

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.profileInput"></a>

```csharp
public string ProfileInput { get; }
```

- *Type:* string

---

##### `SubaccountInput`<sup>Optional</sup> <a name="SubaccountInput" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.subaccountInput"></a>

```csharp
public string SubaccountInput { get; }
```

- *Type:* string

---

##### `Account`<sup>Optional</sup> <a name="Account" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.account"></a>

```csharp
public string Account { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiKey"></a>

```csharp
public string ApiKey { get; }
```

- *Type:* string

---

##### `ApiSecret`<sup>Optional</sup> <a name="ApiSecret" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiSecret"></a>

```csharp
public string ApiSecret { get; }
```

- *Type:* string

---

##### `ApiToken`<sup>Optional</sup> <a name="ApiToken" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiToken"></a>

```csharp
public string ApiToken { get; }
```

- *Type:* string

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.organization"></a>

```csharp
public object Organization { get; }
```

- *Type:* object

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.profile"></a>

```csharp
public string Profile { get; }
```

- *Type:* string

---

##### `Subaccount`<sup>Optional</sup> <a name="Subaccount" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.subaccount"></a>

```csharp
public string Subaccount { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LaceworkProviderConfig <a name="LaceworkProviderConfig" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new LaceworkProviderConfig {
    string Account = null,
    string Alias = null,
    string ApiKey = null,
    string ApiSecret = null,
    string ApiToken = null,
    object Organization = null,
    string Profile = null,
    string Subaccount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.account">Account</a></code> | <code>string</code> | Lacework account subdomain of URL (i.e. <ACCOUNT>.lacework.net). |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.apiKey">ApiKey</a></code> | <code>string</code> | Lacework API access key. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.apiSecret">ApiSecret</a></code> | <code>string</code> | Lacework API access secret. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.apiToken">ApiToken</a></code> | <code>string</code> | Lacework API access token. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.organization">Organization</a></code> | <code>object</code> | Set it to true to access organization level data sets (org admins only). |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.profile">Profile</a></code> | <code>string</code> | Lacework profile name to use, profiles are configured at $HOME/.lacework.toml via the Lacework CLI. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.subaccount">Subaccount</a></code> | <code>string</code> | The sub-account name inside your organization (org admins only). |

---

##### `Account`<sup>Optional</sup> <a name="Account" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.account"></a>

```csharp
public string Account { get; set; }
```

- *Type:* string

Lacework account subdomain of URL (i.e. <ACCOUNT>.lacework.net).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#account LaceworkProvider#account}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#alias LaceworkProvider#alias}

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.apiKey"></a>

```csharp
public string ApiKey { get; set; }
```

- *Type:* string

Lacework API access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#api_key LaceworkProvider#api_key}

---

##### `ApiSecret`<sup>Optional</sup> <a name="ApiSecret" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.apiSecret"></a>

```csharp
public string ApiSecret { get; set; }
```

- *Type:* string

Lacework API access secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#api_secret LaceworkProvider#api_secret}

---

##### `ApiToken`<sup>Optional</sup> <a name="ApiToken" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.apiToken"></a>

```csharp
public string ApiToken { get; set; }
```

- *Type:* string

Lacework API access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#api_token LaceworkProvider#api_token}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.organization"></a>

```csharp
public object Organization { get; set; }
```

- *Type:* object

Set it to true to access organization level data sets (org admins only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#organization LaceworkProvider#organization}

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.profile"></a>

```csharp
public string Profile { get; set; }
```

- *Type:* string

Lacework profile name to use, profiles are configured at $HOME/.lacework.toml via the Lacework CLI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#profile LaceworkProvider#profile}

---

##### `Subaccount`<sup>Optional</sup> <a name="Subaccount" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.subaccount"></a>

```csharp
public string Subaccount { get; set; }
```

- *Type:* string

The sub-account name inside your organization (org admins only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#subaccount LaceworkProvider#subaccount}

---



