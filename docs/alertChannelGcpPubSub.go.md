# `lacework_alert_channel_gcp_pub_sub`

Refer to the Terraform Registory for docs: [`lacework_alert_channel_gcp_pub_sub`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub).

# `alertChannelGcpPubSub` Submodule <a name="`alertChannelGcpPubSub` Submodule" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertChannelGcpPubSub <a name="AlertChannelGcpPubSub" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub lacework_alert_channel_gcp_pub_sub}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/alertchannelgcppubsub"

alertchannelgcppubsub.NewAlertChannelGcpPubSub(scope Construct, id *string, config AlertChannelGcpPubSubConfig) AlertChannelGcpPubSub
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig">AlertChannelGcpPubSubConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig">AlertChannelGcpPubSubConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.resetIssueGrouping">ResetIssueGrouping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.resetTestIntegration">ResetTestIntegration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCredentials` <a name="PutCredentials" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.putCredentials"></a>

```go
func PutCredentials(value AlertChannelGcpPubSubCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials">AlertChannelGcpPubSubCredentials</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.resetId"></a>

```go
func ResetId()
```

##### `ResetIssueGrouping` <a name="ResetIssueGrouping" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.resetIssueGrouping"></a>

```go
func ResetIssueGrouping()
```

##### `ResetTestIntegration` <a name="ResetTestIntegration" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.resetTestIntegration"></a>

```go
func ResetTestIntegration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/alertchannelgcppubsub"

alertchannelgcppubsub.AlertChannelGcpPubSub_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/alertchannelgcppubsub"

alertchannelgcppubsub.AlertChannelGcpPubSub_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/alertchannelgcppubsub"

alertchannelgcppubsub.AlertChannelGcpPubSub_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.createdOrUpdatedBy">CreatedOrUpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.createdOrUpdatedTime">CreatedOrUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference">AlertChannelGcpPubSubCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.intgGuid">IntgGuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.orgLevel">OrgLevel</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.typeName">TypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.credentialsInput">CredentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials">AlertChannelGcpPubSubCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.issueGroupingInput">IssueGroupingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.testIntegrationInput">TestIntegrationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.topicIdInput">TopicIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.issueGrouping">IssueGrouping</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.testIntegration">TestIntegration</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.topicId">TopicId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedOrUpdatedBy`<sup>Required</sup> <a name="CreatedOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.createdOrUpdatedBy"></a>

```go
func CreatedOrUpdatedBy() *string
```

- *Type:* *string

---

##### `CreatedOrUpdatedTime`<sup>Required</sup> <a name="CreatedOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.createdOrUpdatedTime"></a>

```go
func CreatedOrUpdatedTime() *string
```

- *Type:* *string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.credentials"></a>

```go
func Credentials() AlertChannelGcpPubSubCredentialsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference">AlertChannelGcpPubSubCredentialsOutputReference</a>

---

##### `IntgGuid`<sup>Required</sup> <a name="IntgGuid" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.intgGuid"></a>

```go
func IntgGuid() *string
```

- *Type:* *string

---

##### `OrgLevel`<sup>Required</sup> <a name="OrgLevel" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.orgLevel"></a>

```go
func OrgLevel() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.typeName"></a>

```go
func TypeName() *string
```

- *Type:* *string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.credentialsInput"></a>

```go
func CredentialsInput() AlertChannelGcpPubSubCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials">AlertChannelGcpPubSubCredentials</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IssueGroupingInput`<sup>Optional</sup> <a name="IssueGroupingInput" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.issueGroupingInput"></a>

```go
func IssueGroupingInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TestIntegrationInput`<sup>Optional</sup> <a name="TestIntegrationInput" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.testIntegrationInput"></a>

```go
func TestIntegrationInput() interface{}
```

- *Type:* interface{}

---

##### `TopicIdInput`<sup>Optional</sup> <a name="TopicIdInput" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.topicIdInput"></a>

```go
func TopicIdInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IssueGrouping`<sup>Required</sup> <a name="IssueGrouping" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.issueGrouping"></a>

```go
func IssueGrouping() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `TestIntegration`<sup>Required</sup> <a name="TestIntegration" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.testIntegration"></a>

```go
func TestIntegration() interface{}
```

- *Type:* interface{}

---

##### `TopicId`<sup>Required</sup> <a name="TopicId" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.topicId"></a>

```go
func TopicId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AlertChannelGcpPubSubConfig <a name="AlertChannelGcpPubSubConfig" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/alertchannelgcppubsub"

&alertchannelgcppubsub.AlertChannelGcpPubSubConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Credentials: github.com/rhizo-co/cdktf-provider-lacework-go/lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials,
	Name: *string,
	ProjectId: *string,
	TopicId: *string,
	Enabled: interface{},
	Id: *string,
	IssueGrouping: *string,
	TestIntegration: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials">AlertChannelGcpPubSubCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.name">Name</a></code> | <code>*string</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | The name of the Google Cloud Project. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.topicId">TopicId</a></code> | <code>*string</code> | The ID of the Google Cloud Pub/Sub topic. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#id AlertChannelGcpPubSub#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.issueGrouping">IssueGrouping</a></code> | <code>*string</code> | Defines how Lacework compliance events get grouped. Must be one of Events or Resources. Defaults to Events. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.testIntegration">TestIntegration</a></code> | <code>interface{}</code> | Whether to test the integration of an alert channel upon creation and modification. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.credentials"></a>

```go
Credentials AlertChannelGcpPubSubCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials">AlertChannelGcpPubSubCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#credentials AlertChannelGcpPubSub#credentials}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#name AlertChannelGcpPubSub#name}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The name of the Google Cloud Project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#project_id AlertChannelGcpPubSub#project_id}

---

##### `TopicId`<sup>Required</sup> <a name="TopicId" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.topicId"></a>

```go
TopicId *string
```

- *Type:* *string

The ID of the Google Cloud Pub/Sub topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#topic_id AlertChannelGcpPubSub#topic_id}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#enabled AlertChannelGcpPubSub#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#id AlertChannelGcpPubSub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IssueGrouping`<sup>Optional</sup> <a name="IssueGrouping" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.issueGrouping"></a>

```go
IssueGrouping *string
```

- *Type:* *string

Defines how Lacework compliance events get grouped. Must be one of Events or Resources. Defaults to Events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#issue_grouping AlertChannelGcpPubSub#issue_grouping}

---

##### `TestIntegration`<sup>Optional</sup> <a name="TestIntegration" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.testIntegration"></a>

```go
TestIntegration interface{}
```

- *Type:* interface{}

Whether to test the integration of an alert channel upon creation and modification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#test_integration AlertChannelGcpPubSub#test_integration}

---

### AlertChannelGcpPubSubCredentials <a name="AlertChannelGcpPubSubCredentials" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/alertchannelgcppubsub"

&alertchannelgcppubsub.AlertChannelGcpPubSubCredentials {
	ClientEmail: *string,
	ClientId: *string,
	PrivateKey: *string,
	PrivateKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials.property.clientEmail">ClientEmail</a></code> | <code>*string</code> | The service account client email. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials.property.clientId">ClientId</a></code> | <code>*string</code> | The service account client ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials.property.privateKey">PrivateKey</a></code> | <code>*string</code> | The service account private key ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials.property.privateKeyId">PrivateKeyId</a></code> | <code>*string</code> | The service account private key. |

---

##### `ClientEmail`<sup>Required</sup> <a name="ClientEmail" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials.property.clientEmail"></a>

```go
ClientEmail *string
```

- *Type:* *string

The service account client email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#client_email AlertChannelGcpPubSub#client_email}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The service account client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#client_id AlertChannelGcpPubSub#client_id}

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

The service account private key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#private_key AlertChannelGcpPubSub#private_key}

---

##### `PrivateKeyId`<sup>Required</sup> <a name="PrivateKeyId" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials.property.privateKeyId"></a>

```go
PrivateKeyId *string
```

- *Type:* *string

The service account private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#private_key_id AlertChannelGcpPubSub#private_key_id}

---

## Classes <a name="Classes" id="Classes"></a>

### AlertChannelGcpPubSubCredentialsOutputReference <a name="AlertChannelGcpPubSubCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/alertchannelgcppubsub"

alertchannelgcppubsub.NewAlertChannelGcpPubSubCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlertChannelGcpPubSubCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.clientEmailInput">ClientEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.privateKeyIdInput">PrivateKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.clientEmail">ClientEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.privateKeyId">PrivateKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials">AlertChannelGcpPubSubCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientEmailInput`<sup>Optional</sup> <a name="ClientEmailInput" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.clientEmailInput"></a>

```go
func ClientEmailInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `PrivateKeyIdInput`<sup>Optional</sup> <a name="PrivateKeyIdInput" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.privateKeyIdInput"></a>

```go
func PrivateKeyIdInput() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `ClientEmail`<sup>Required</sup> <a name="ClientEmail" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.clientEmail"></a>

```go
func ClientEmail() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `PrivateKeyId`<sup>Required</sup> <a name="PrivateKeyId" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.privateKeyId"></a>

```go
func PrivateKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() AlertChannelGcpPubSubCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials">AlertChannelGcpPubSubCredentials</a>

---



