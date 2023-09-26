# `lacework_alert_channel_slack`

Refer to the Terraform Registory for docs: [`lacework_alert_channel_slack`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_slack).

# `alertChannelSlack` Submodule <a name="`alertChannelSlack` Submodule" id="rhizo-co-terraform-provider-lacework.alertChannelSlack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertChannelSlack <a name="AlertChannelSlack" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_slack lacework_alert_channel_slack}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/alertchannelslack"

alertchannelslack.NewAlertChannelSlack(scope Construct, id *string, config AlertChannelSlackConfig) AlertChannelSlack
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlackConfig">AlertChannelSlackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlackConfig">AlertChannelSlackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.resetTestIntegration">ResetTestIntegration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.resetId"></a>

```go
func ResetId()
```

##### `ResetTestIntegration` <a name="ResetTestIntegration" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.resetTestIntegration"></a>

```go
func ResetTestIntegration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/alertchannelslack"

alertchannelslack.AlertChannelSlack_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/alertchannelslack"

alertchannelslack.AlertChannelSlack_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/alertchannelslack"

alertchannelslack.AlertChannelSlack_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.createdOrUpdatedBy">CreatedOrUpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.createdOrUpdatedTime">CreatedOrUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.intgGuid">IntgGuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.orgLevel">OrgLevel</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.typeName">TypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.slackUrlInput">SlackUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.testIntegrationInput">TestIntegrationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.slackUrl">SlackUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.testIntegration">TestIntegration</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedOrUpdatedBy`<sup>Required</sup> <a name="CreatedOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.createdOrUpdatedBy"></a>

```go
func CreatedOrUpdatedBy() *string
```

- *Type:* *string

---

##### `CreatedOrUpdatedTime`<sup>Required</sup> <a name="CreatedOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.createdOrUpdatedTime"></a>

```go
func CreatedOrUpdatedTime() *string
```

- *Type:* *string

---

##### `IntgGuid`<sup>Required</sup> <a name="IntgGuid" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.intgGuid"></a>

```go
func IntgGuid() *string
```

- *Type:* *string

---

##### `OrgLevel`<sup>Required</sup> <a name="OrgLevel" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.orgLevel"></a>

```go
func OrgLevel() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.typeName"></a>

```go
func TypeName() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SlackUrlInput`<sup>Optional</sup> <a name="SlackUrlInput" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.slackUrlInput"></a>

```go
func SlackUrlInput() *string
```

- *Type:* *string

---

##### `TestIntegrationInput`<sup>Optional</sup> <a name="TestIntegrationInput" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.testIntegrationInput"></a>

```go
func TestIntegrationInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SlackUrl`<sup>Required</sup> <a name="SlackUrl" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.slackUrl"></a>

```go
func SlackUrl() *string
```

- *Type:* *string

---

##### `TestIntegration`<sup>Required</sup> <a name="TestIntegration" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.testIntegration"></a>

```go
func TestIntegration() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlack.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AlertChannelSlackConfig <a name="AlertChannelSlackConfig" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlackConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlackConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/alertchannelslack"

&alertchannelslack.AlertChannelSlackConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	SlackUrl: *string,
	Enabled: interface{},
	Id: *string,
	TestIntegration: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlackConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlackConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlackConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlackConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlackConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlackConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlackConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlackConfig.property.name">Name</a></code> | <code>*string</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlackConfig.property.slackUrl">SlackUrl</a></code> | <code>*string</code> | The URL of the incoming Slack webhook. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlackConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlackConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_slack#id AlertChannelSlack#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlackConfig.property.testIntegration">TestIntegration</a></code> | <code>interface{}</code> | Whether to test the integration of an alert channel upon creation and modification. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlackConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlackConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlackConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlackConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlackConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlackConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlackConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlackConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_slack#name AlertChannelSlack#name}

---

##### `SlackUrl`<sup>Required</sup> <a name="SlackUrl" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlackConfig.property.slackUrl"></a>

```go
SlackUrl *string
```

- *Type:* *string

The URL of the incoming Slack webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_slack#slack_url AlertChannelSlack#slack_url}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlackConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_slack#enabled AlertChannelSlack#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlackConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_slack#id AlertChannelSlack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TestIntegration`<sup>Optional</sup> <a name="TestIntegration" id="rhizo-co-terraform-provider-lacework.alertChannelSlack.AlertChannelSlackConfig.property.testIntegration"></a>

```go
TestIntegration interface{}
```

- *Type:* interface{}

Whether to test the integration of an alert channel upon creation and modification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_slack#test_integration AlertChannelSlack#test_integration}

---



