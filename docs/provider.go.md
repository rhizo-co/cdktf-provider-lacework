# `provider`

Refer to the Terraform Registory for docs: [`lacework`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="rhizo-co-terraform-provider-lacework.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LaceworkProvider <a name="LaceworkProvider" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs lacework}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/provider"

provider.NewLaceworkProvider(scope Construct, id *string, config LaceworkProviderConfig) LaceworkProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig">LaceworkProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAccount` <a name="ResetAccount" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetAccount"></a>

```go
func ResetAccount()
```

##### `ResetAlias` <a name="ResetAlias" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetApiKey` <a name="ResetApiKey" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetApiKey"></a>

```go
func ResetApiKey()
```

##### `ResetApiSecret` <a name="ResetApiSecret" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetApiSecret"></a>

```go
func ResetApiSecret()
```

##### `ResetApiToken` <a name="ResetApiToken" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetApiToken"></a>

```go
func ResetApiToken()
```

##### `ResetOrganization` <a name="ResetOrganization" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetOrganization"></a>

```go
func ResetOrganization()
```

##### `ResetProfile` <a name="ResetProfile" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetProfile"></a>

```go
func ResetProfile()
```

##### `ResetSubaccount` <a name="ResetSubaccount" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetSubaccount"></a>

```go
func ResetSubaccount()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/provider"

provider.LaceworkProvider_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/provider"

provider.LaceworkProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isTerraformProvider"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/provider"

provider.LaceworkProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.accountInput">AccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiKeyInput">ApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiSecretInput">ApiSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiTokenInput">ApiTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.organizationInput">OrganizationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.profileInput">ProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.subaccountInput">SubaccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.account">Account</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiSecret">ApiSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiToken">ApiToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.organization">Organization</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.profile">Profile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.subaccount">Subaccount</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.accountInput"></a>

```go
func AccountInput() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiKeyInput"></a>

```go
func ApiKeyInput() *string
```

- *Type:* *string

---

##### `ApiSecretInput`<sup>Optional</sup> <a name="ApiSecretInput" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiSecretInput"></a>

```go
func ApiSecretInput() *string
```

- *Type:* *string

---

##### `ApiTokenInput`<sup>Optional</sup> <a name="ApiTokenInput" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiTokenInput"></a>

```go
func ApiTokenInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.organizationInput"></a>

```go
func OrganizationInput() interface{}
```

- *Type:* interface{}

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.profileInput"></a>

```go
func ProfileInput() *string
```

- *Type:* *string

---

##### `SubaccountInput`<sup>Optional</sup> <a name="SubaccountInput" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.subaccountInput"></a>

```go
func SubaccountInput() *string
```

- *Type:* *string

---

##### `Account`<sup>Optional</sup> <a name="Account" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.account"></a>

```go
func Account() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `ApiSecret`<sup>Optional</sup> <a name="ApiSecret" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiSecret"></a>

```go
func ApiSecret() *string
```

- *Type:* *string

---

##### `ApiToken`<sup>Optional</sup> <a name="ApiToken" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiToken"></a>

```go
func ApiToken() *string
```

- *Type:* *string

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.organization"></a>

```go
func Organization() interface{}
```

- *Type:* interface{}

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.profile"></a>

```go
func Profile() *string
```

- *Type:* *string

---

##### `Subaccount`<sup>Optional</sup> <a name="Subaccount" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.subaccount"></a>

```go
func Subaccount() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LaceworkProviderConfig <a name="LaceworkProviderConfig" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/provider"

&provider.LaceworkProviderConfig {
	Account: *string,
	Alias: *string,
	ApiKey: *string,
	ApiSecret: *string,
	ApiToken: *string,
	Organization: interface{},
	Profile: *string,
	Subaccount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.account">Account</a></code> | <code>*string</code> | Lacework account subdomain of URL (i.e. <ACCOUNT>.lacework.net). |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.apiKey">ApiKey</a></code> | <code>*string</code> | Lacework API access key. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.apiSecret">ApiSecret</a></code> | <code>*string</code> | Lacework API access secret. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.apiToken">ApiToken</a></code> | <code>*string</code> | Lacework API access token. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.organization">Organization</a></code> | <code>interface{}</code> | Set it to true to access organization level data sets (org admins only). |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.profile">Profile</a></code> | <code>*string</code> | Lacework profile name to use, profiles are configured at $HOME/.lacework.toml via the Lacework CLI. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.subaccount">Subaccount</a></code> | <code>*string</code> | The sub-account name inside your organization (org admins only). |

---

##### `Account`<sup>Optional</sup> <a name="Account" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.account"></a>

```go
Account *string
```

- *Type:* *string

Lacework account subdomain of URL (i.e. <ACCOUNT>.lacework.net).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#account LaceworkProvider#account}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#alias LaceworkProvider#alias}

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.apiKey"></a>

```go
ApiKey *string
```

- *Type:* *string

Lacework API access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#api_key LaceworkProvider#api_key}

---

##### `ApiSecret`<sup>Optional</sup> <a name="ApiSecret" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.apiSecret"></a>

```go
ApiSecret *string
```

- *Type:* *string

Lacework API access secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#api_secret LaceworkProvider#api_secret}

---

##### `ApiToken`<sup>Optional</sup> <a name="ApiToken" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.apiToken"></a>

```go
ApiToken *string
```

- *Type:* *string

Lacework API access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#api_token LaceworkProvider#api_token}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.organization"></a>

```go
Organization interface{}
```

- *Type:* interface{}

Set it to true to access organization level data sets (org admins only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#organization LaceworkProvider#organization}

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.profile"></a>

```go
Profile *string
```

- *Type:* *string

Lacework profile name to use, profiles are configured at $HOME/.lacework.toml via the Lacework CLI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#profile LaceworkProvider#profile}

---

##### `Subaccount`<sup>Optional</sup> <a name="Subaccount" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.subaccount"></a>

```go
Subaccount *string
```

- *Type:* *string

The sub-account name inside your organization (org admins only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#subaccount LaceworkProvider#subaccount}

---



