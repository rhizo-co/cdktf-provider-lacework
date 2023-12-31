# `data_lacework_agent_access_token`

Refer to the Terraform Registory for docs: [`data_lacework_agent_access_token`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/data-sources/agent_access_token).

# `dataLaceworkAgentAccessToken` Submodule <a name="`dataLaceworkAgentAccessToken` Submodule" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLaceworkAgentAccessToken <a name="DataLaceworkAgentAccessToken" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/data-sources/agent_access_token lacework_agent_access_token}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/datalaceworkagentaccesstoken"

datalaceworkagentaccesstoken.NewDataLaceworkAgentAccessToken(scope Construct, id *string, config DataLaceworkAgentAccessTokenConfig) DataLaceworkAgentAccessToken
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessTokenConfig">DataLaceworkAgentAccessTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessTokenConfig">DataLaceworkAgentAccessTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/datalaceworkagentaccesstoken"

datalaceworkagentaccesstoken.DataLaceworkAgentAccessToken_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/datalaceworkagentaccesstoken"

datalaceworkagentaccesstoken.DataLaceworkAgentAccessToken_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/datalaceworkagentaccesstoken"

datalaceworkagentaccesstoken.DataLaceworkAgentAccessToken_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Token`<sup>Required</sup> <a name="Token" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessToken.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataLaceworkAgentAccessTokenConfig <a name="DataLaceworkAgentAccessTokenConfig" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessTokenConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/datalaceworkagentaccesstoken"

&datalaceworkagentaccesstoken.DataLaceworkAgentAccessTokenConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessTokenConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessTokenConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessTokenConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessTokenConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessTokenConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessTokenConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessTokenConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/data-sources/agent_access_token#name DataLaceworkAgentAccessToken#name}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessTokenConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/data-sources/agent_access_token#id DataLaceworkAgentAccessToken#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessTokenConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessTokenConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessTokenConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessTokenConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessTokenConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessTokenConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessTokenConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessTokenConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/data-sources/agent_access_token#name DataLaceworkAgentAccessToken#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.dataLaceworkAgentAccessToken.DataLaceworkAgentAccessTokenConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/data-sources/agent_access_token#id DataLaceworkAgentAccessToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



