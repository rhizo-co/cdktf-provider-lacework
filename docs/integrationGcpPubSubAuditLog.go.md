# `lacework_integration_gcp_pub_sub_audit_log`

Refer to the Terraform Registory for docs: [`lacework_integration_gcp_pub_sub_audit_log`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log).

# `integrationGcpPubSubAuditLog` Submodule <a name="`integrationGcpPubSubAuditLog` Submodule" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationGcpPubSubAuditLog <a name="IntegrationGcpPubSubAuditLog" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log lacework_integration_gcp_pub_sub_audit_log}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationgcppubsubauditlog"

integrationgcppubsubauditlog.NewIntegrationGcpPubSubAuditLog(scope Construct, id *string, config IntegrationGcpPubSubAuditLogConfig) IntegrationGcpPubSubAuditLog
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig">IntegrationGcpPubSubAuditLogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig">IntegrationGcpPubSubAuditLogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetOrganizationId">ResetOrganizationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetRetries">ResetRetries</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCredentials` <a name="PutCredentials" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.putCredentials"></a>

```go
func PutCredentials(value IntegrationGcpPubSubAuditLogCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials">IntegrationGcpPubSubAuditLogCredentials</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetId"></a>

```go
func ResetId()
```

##### `ResetOrganizationId` <a name="ResetOrganizationId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetOrganizationId"></a>

```go
func ResetOrganizationId()
```

##### `ResetRetries` <a name="ResetRetries" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetRetries"></a>

```go
func ResetRetries()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationgcppubsubauditlog"

integrationgcppubsubauditlog.IntegrationGcpPubSubAuditLog_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationgcppubsubauditlog"

integrationgcppubsubauditlog.IntegrationGcpPubSubAuditLog_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationgcppubsubauditlog"

integrationgcppubsubauditlog.IntegrationGcpPubSubAuditLog_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.createdOrUpdatedBy">CreatedOrUpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.createdOrUpdatedTime">CreatedOrUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference">IntegrationGcpPubSubAuditLogCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.intgGuid">IntgGuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.isOrg">IsOrg</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.credentialsInput">CredentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials">IntegrationGcpPubSubAuditLogCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.integrationTypeInput">IntegrationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.organizationIdInput">OrganizationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.retriesInput">RetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.topicIdInput">TopicIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.integrationType">IntegrationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.retries">Retries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.topicId">TopicId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedOrUpdatedBy`<sup>Required</sup> <a name="CreatedOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.createdOrUpdatedBy"></a>

```go
func CreatedOrUpdatedBy() *string
```

- *Type:* *string

---

##### `CreatedOrUpdatedTime`<sup>Required</sup> <a name="CreatedOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.createdOrUpdatedTime"></a>

```go
func CreatedOrUpdatedTime() *string
```

- *Type:* *string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.credentials"></a>

```go
func Credentials() IntegrationGcpPubSubAuditLogCredentialsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference">IntegrationGcpPubSubAuditLogCredentialsOutputReference</a>

---

##### `IntgGuid`<sup>Required</sup> <a name="IntgGuid" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.intgGuid"></a>

```go
func IntgGuid() *string
```

- *Type:* *string

---

##### `IsOrg`<sup>Required</sup> <a name="IsOrg" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.isOrg"></a>

```go
func IsOrg() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.credentialsInput"></a>

```go
func CredentialsInput() IntegrationGcpPubSubAuditLogCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials">IntegrationGcpPubSubAuditLogCredentials</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IntegrationTypeInput`<sup>Optional</sup> <a name="IntegrationTypeInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.integrationTypeInput"></a>

```go
func IntegrationTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OrganizationIdInput`<sup>Optional</sup> <a name="OrganizationIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.organizationIdInput"></a>

```go
func OrganizationIdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.retriesInput"></a>

```go
func RetriesInput() *f64
```

- *Type:* *f64

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `TopicIdInput`<sup>Optional</sup> <a name="TopicIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.topicIdInput"></a>

```go
func TopicIdInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IntegrationType`<sup>Required</sup> <a name="IntegrationType" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.integrationType"></a>

```go
func IntegrationType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.retries"></a>

```go
func Retries() *f64
```

- *Type:* *f64

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `TopicId`<sup>Required</sup> <a name="TopicId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.topicId"></a>

```go
func TopicId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationGcpPubSubAuditLogConfig <a name="IntegrationGcpPubSubAuditLogConfig" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationgcppubsubauditlog"

&integrationgcppubsubauditlog.IntegrationGcpPubSubAuditLogConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Credentials: github.com/rhizo-co/cdktf-provider-lacework-go/lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials,
	IntegrationType: *string,
	Name: *string,
	ProjectId: *string,
	SubscriptionId: *string,
	TopicId: *string,
	Enabled: interface{},
	Id: *string,
	OrganizationId: *string,
	Retries: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials">IntegrationGcpPubSubAuditLogCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.integrationType">IntegrationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#integration_type IntegrationGcpPubSubAuditLog#integration_type}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.name">Name</a></code> | <code>*string</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | The GCP Project ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | The PubSub Subscription. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.topicId">TopicId</a></code> | <code>*string</code> | The PubSub topic id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#id IntegrationGcpPubSubAuditLog#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.organizationId">OrganizationId</a></code> | <code>*string</code> | The GCP Organization ID (required when integration_type is organization). |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.retries">Retries</a></code> | <code>*f64</code> | The number of attempts to create the external integration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.credentials"></a>

```go
Credentials IntegrationGcpPubSubAuditLogCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials">IntegrationGcpPubSubAuditLogCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#credentials IntegrationGcpPubSubAuditLog#credentials}

---

##### `IntegrationType`<sup>Required</sup> <a name="IntegrationType" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.integrationType"></a>

```go
IntegrationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#integration_type IntegrationGcpPubSubAuditLog#integration_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#name IntegrationGcpPubSubAuditLog#name}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The GCP Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#project_id IntegrationGcpPubSubAuditLog#project_id}

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

The PubSub Subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#subscription_id IntegrationGcpPubSubAuditLog#subscription_id}

---

##### `TopicId`<sup>Required</sup> <a name="TopicId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.topicId"></a>

```go
TopicId *string
```

- *Type:* *string

The PubSub topic id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#topic_id IntegrationGcpPubSubAuditLog#topic_id}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#enabled IntegrationGcpPubSubAuditLog#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#id IntegrationGcpPubSubAuditLog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OrganizationId`<sup>Optional</sup> <a name="OrganizationId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.organizationId"></a>

```go
OrganizationId *string
```

- *Type:* *string

The GCP Organization ID (required when integration_type is organization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#organization_id IntegrationGcpPubSubAuditLog#organization_id}

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.retries"></a>

```go
Retries *f64
```

- *Type:* *f64

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#retries IntegrationGcpPubSubAuditLog#retries}

---

### IntegrationGcpPubSubAuditLogCredentials <a name="IntegrationGcpPubSubAuditLogCredentials" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationgcppubsubauditlog"

&integrationgcppubsubauditlog.IntegrationGcpPubSubAuditLogCredentials {
	ClientEmail: *string,
	ClientId: *string,
	PrivateKey: *string,
	PrivateKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.property.clientEmail">ClientEmail</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#client_email IntegrationGcpPubSubAuditLog#client_email}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#client_id IntegrationGcpPubSubAuditLog#client_id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.property.privateKey">PrivateKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#private_key IntegrationGcpPubSubAuditLog#private_key}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.property.privateKeyId">PrivateKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#private_key_id IntegrationGcpPubSubAuditLog#private_key_id}. |

---

##### `ClientEmail`<sup>Required</sup> <a name="ClientEmail" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.property.clientEmail"></a>

```go
ClientEmail *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#client_email IntegrationGcpPubSubAuditLog#client_email}.

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#client_id IntegrationGcpPubSubAuditLog#client_id}.

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#private_key IntegrationGcpPubSubAuditLog#private_key}.

---

##### `PrivateKeyId`<sup>Required</sup> <a name="PrivateKeyId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.property.privateKeyId"></a>

```go
PrivateKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#private_key_id IntegrationGcpPubSubAuditLog#private_key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationGcpPubSubAuditLogCredentialsOutputReference <a name="IntegrationGcpPubSubAuditLogCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationgcppubsubauditlog"

integrationgcppubsubauditlog.NewIntegrationGcpPubSubAuditLogCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationGcpPubSubAuditLogCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.clientEmailInput">ClientEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.privateKeyIdInput">PrivateKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.clientEmail">ClientEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.privateKeyId">PrivateKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials">IntegrationGcpPubSubAuditLogCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientEmailInput`<sup>Optional</sup> <a name="ClientEmailInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.clientEmailInput"></a>

```go
func ClientEmailInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `PrivateKeyIdInput`<sup>Optional</sup> <a name="PrivateKeyIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.privateKeyIdInput"></a>

```go
func PrivateKeyIdInput() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `ClientEmail`<sup>Required</sup> <a name="ClientEmail" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.clientEmail"></a>

```go
func ClientEmail() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `PrivateKeyId`<sup>Required</sup> <a name="PrivateKeyId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.privateKeyId"></a>

```go
func PrivateKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() IntegrationGcpPubSubAuditLogCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials">IntegrationGcpPubSubAuditLogCredentials</a>

---



