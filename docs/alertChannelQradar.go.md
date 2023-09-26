# `lacework_alert_channel_qradar`

Refer to the Terraform Registory for docs: [`lacework_alert_channel_qradar`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_qradar).

# `alertChannelQradar` Submodule <a name="`alertChannelQradar` Submodule" id="rhizo-co-terraform-provider-lacework.alertChannelQradar"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertChannelQradar <a name="AlertChannelQradar" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_qradar lacework_alert_channel_qradar}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/alertchannelqradar"

alertchannelqradar.NewAlertChannelQradar(scope Construct, id *string, config AlertChannelQradarConfig) AlertChannelQradar
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradarConfig">AlertChannelQradarConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradarConfig">AlertChannelQradarConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.resetCommunicationType">ResetCommunicationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.resetHostPort">ResetHostPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.resetTestIntegration">ResetTestIntegration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCommunicationType` <a name="ResetCommunicationType" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.resetCommunicationType"></a>

```go
func ResetCommunicationType()
```

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetHostPort` <a name="ResetHostPort" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.resetHostPort"></a>

```go
func ResetHostPort()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.resetId"></a>

```go
func ResetId()
```

##### `ResetTestIntegration` <a name="ResetTestIntegration" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.resetTestIntegration"></a>

```go
func ResetTestIntegration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/alertchannelqradar"

alertchannelqradar.AlertChannelQradar_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/alertchannelqradar"

alertchannelqradar.AlertChannelQradar_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/alertchannelqradar"

alertchannelqradar.AlertChannelQradar_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.createdOrUpdatedBy">CreatedOrUpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.createdOrUpdatedTime">CreatedOrUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.intgGuid">IntgGuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.orgLevel">OrgLevel</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.typeName">TypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.communicationTypeInput">CommunicationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.hostPortInput">HostPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.hostUrlInput">HostUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.testIntegrationInput">TestIntegrationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.communicationType">CommunicationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.hostPort">HostPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.hostUrl">HostUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.testIntegration">TestIntegration</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedOrUpdatedBy`<sup>Required</sup> <a name="CreatedOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.createdOrUpdatedBy"></a>

```go
func CreatedOrUpdatedBy() *string
```

- *Type:* *string

---

##### `CreatedOrUpdatedTime`<sup>Required</sup> <a name="CreatedOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.createdOrUpdatedTime"></a>

```go
func CreatedOrUpdatedTime() *string
```

- *Type:* *string

---

##### `IntgGuid`<sup>Required</sup> <a name="IntgGuid" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.intgGuid"></a>

```go
func IntgGuid() *string
```

- *Type:* *string

---

##### `OrgLevel`<sup>Required</sup> <a name="OrgLevel" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.orgLevel"></a>

```go
func OrgLevel() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.typeName"></a>

```go
func TypeName() *string
```

- *Type:* *string

---

##### `CommunicationTypeInput`<sup>Optional</sup> <a name="CommunicationTypeInput" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.communicationTypeInput"></a>

```go
func CommunicationTypeInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HostPortInput`<sup>Optional</sup> <a name="HostPortInput" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.hostPortInput"></a>

```go
func HostPortInput() *f64
```

- *Type:* *f64

---

##### `HostUrlInput`<sup>Optional</sup> <a name="HostUrlInput" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.hostUrlInput"></a>

```go
func HostUrlInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TestIntegrationInput`<sup>Optional</sup> <a name="TestIntegrationInput" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.testIntegrationInput"></a>

```go
func TestIntegrationInput() interface{}
```

- *Type:* interface{}

---

##### `CommunicationType`<sup>Required</sup> <a name="CommunicationType" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.communicationType"></a>

```go
func CommunicationType() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `HostPort`<sup>Required</sup> <a name="HostPort" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.hostPort"></a>

```go
func HostPort() *f64
```

- *Type:* *f64

---

##### `HostUrl`<sup>Required</sup> <a name="HostUrl" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.hostUrl"></a>

```go
func HostUrl() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TestIntegration`<sup>Required</sup> <a name="TestIntegration" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.testIntegration"></a>

```go
func TestIntegration() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradar.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AlertChannelQradarConfig <a name="AlertChannelQradarConfig" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradarConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradarConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/alertchannelqradar"

&alertchannelqradar.AlertChannelQradarConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	HostUrl: *string,
	Name: *string,
	CommunicationType: *string,
	Enabled: interface{},
	HostPort: *f64,
	Id: *string,
	TestIntegration: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradarConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradarConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradarConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradarConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradarConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradarConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradarConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradarConfig.property.hostUrl">HostUrl</a></code> | <code>*string</code> | The domain name or IP address of QRadar. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradarConfig.property.name">Name</a></code> | <code>*string</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradarConfig.property.communicationType">CommunicationType</a></code> | <code>*string</code> | The communication protocol used. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradarConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradarConfig.property.hostPort">HostPort</a></code> | <code>*f64</code> | The listen port defined in QRadar. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradarConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_qradar#id AlertChannelQradar#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradarConfig.property.testIntegration">TestIntegration</a></code> | <code>interface{}</code> | Whether to test the integration of an alert channel upon creation or modification. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradarConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradarConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradarConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradarConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradarConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradarConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradarConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HostUrl`<sup>Required</sup> <a name="HostUrl" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradarConfig.property.hostUrl"></a>

```go
HostUrl *string
```

- *Type:* *string

The domain name or IP address of QRadar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_qradar#host_url AlertChannelQradar#host_url}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradarConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_qradar#name AlertChannelQradar#name}

---

##### `CommunicationType`<sup>Optional</sup> <a name="CommunicationType" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradarConfig.property.communicationType"></a>

```go
CommunicationType *string
```

- *Type:* *string

The communication protocol used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_qradar#communication_type AlertChannelQradar#communication_type}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradarConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_qradar#enabled AlertChannelQradar#enabled}

---

##### `HostPort`<sup>Optional</sup> <a name="HostPort" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradarConfig.property.hostPort"></a>

```go
HostPort *f64
```

- *Type:* *f64

The listen port defined in QRadar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_qradar#host_port AlertChannelQradar#host_port}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradarConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_qradar#id AlertChannelQradar#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TestIntegration`<sup>Optional</sup> <a name="TestIntegration" id="rhizo-co-terraform-provider-lacework.alertChannelQradar.AlertChannelQradarConfig.property.testIntegration"></a>

```go
TestIntegration interface{}
```

- *Type:* interface{}

Whether to test the integration of an alert channel upon creation or modification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_qradar#test_integration AlertChannelQradar#test_integration}

---



