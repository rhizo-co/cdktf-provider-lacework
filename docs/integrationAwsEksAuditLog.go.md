# `lacework_integration_aws_eks_audit_log`

Refer to the Terraform Registory for docs: [`lacework_integration_aws_eks_audit_log`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_eks_audit_log).

# `integrationAwsEksAuditLog` Submodule <a name="`integrationAwsEksAuditLog` Submodule" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsEksAuditLog <a name="IntegrationAwsEksAuditLog" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_eks_audit_log lacework_integration_aws_eks_audit_log}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationawseksauditlog"

integrationawseksauditlog.NewIntegrationAwsEksAuditLog(scope Construct, id *string, config IntegrationAwsEksAuditLogConfig) IntegrationAwsEksAuditLog
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig">IntegrationAwsEksAuditLogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig">IntegrationAwsEksAuditLogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.resetRetries">ResetRetries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.resetS3BucketArn">ResetS3BucketArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCredentials` <a name="PutCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.putCredentials"></a>

```go
func PutCredentials(value IntegrationAwsEksAuditLogCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentials">IntegrationAwsEksAuditLogCredentials</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.resetId"></a>

```go
func ResetId()
```

##### `ResetRetries` <a name="ResetRetries" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.resetRetries"></a>

```go
func ResetRetries()
```

##### `ResetS3BucketArn` <a name="ResetS3BucketArn" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.resetS3BucketArn"></a>

```go
func ResetS3BucketArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationawseksauditlog"

integrationawseksauditlog.IntegrationAwsEksAuditLog_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationawseksauditlog"

integrationawseksauditlog.IntegrationAwsEksAuditLog_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationawseksauditlog"

integrationawseksauditlog.IntegrationAwsEksAuditLog_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.createdOrUpdatedBy">CreatedOrUpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.createdOrUpdatedTime">CreatedOrUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference">IntegrationAwsEksAuditLogCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.intgGuid">IntgGuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.isOrg">IsOrg</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.typeName">TypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.credentialsInput">CredentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentials">IntegrationAwsEksAuditLogCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.retriesInput">RetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.s3BucketArnInput">S3BucketArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.snsArnInput">SnsArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.retries">Retries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.s3BucketArn">S3BucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.snsArn">SnsArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedOrUpdatedBy`<sup>Required</sup> <a name="CreatedOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.createdOrUpdatedBy"></a>

```go
func CreatedOrUpdatedBy() *string
```

- *Type:* *string

---

##### `CreatedOrUpdatedTime`<sup>Required</sup> <a name="CreatedOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.createdOrUpdatedTime"></a>

```go
func CreatedOrUpdatedTime() *string
```

- *Type:* *string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.credentials"></a>

```go
func Credentials() IntegrationAwsEksAuditLogCredentialsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference">IntegrationAwsEksAuditLogCredentialsOutputReference</a>

---

##### `IntgGuid`<sup>Required</sup> <a name="IntgGuid" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.intgGuid"></a>

```go
func IntgGuid() *string
```

- *Type:* *string

---

##### `IsOrg`<sup>Required</sup> <a name="IsOrg" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.isOrg"></a>

```go
func IsOrg() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.typeName"></a>

```go
func TypeName() *string
```

- *Type:* *string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.credentialsInput"></a>

```go
func CredentialsInput() IntegrationAwsEksAuditLogCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentials">IntegrationAwsEksAuditLogCredentials</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.retriesInput"></a>

```go
func RetriesInput() *f64
```

- *Type:* *f64

---

##### `S3BucketArnInput`<sup>Optional</sup> <a name="S3BucketArnInput" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.s3BucketArnInput"></a>

```go
func S3BucketArnInput() *string
```

- *Type:* *string

---

##### `SnsArnInput`<sup>Optional</sup> <a name="SnsArnInput" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.snsArnInput"></a>

```go
func SnsArnInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.retries"></a>

```go
func Retries() *f64
```

- *Type:* *f64

---

##### `S3BucketArn`<sup>Required</sup> <a name="S3BucketArn" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.s3BucketArn"></a>

```go
func S3BucketArn() *string
```

- *Type:* *string

---

##### `SnsArn`<sup>Required</sup> <a name="SnsArn" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.snsArn"></a>

```go
func SnsArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsEksAuditLogConfig <a name="IntegrationAwsEksAuditLogConfig" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationawseksauditlog"

&integrationawseksauditlog.IntegrationAwsEksAuditLogConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Credentials: github.com/rhizo-co/cdktf-provider-lacework-go/lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentials,
	Name: *string,
	SnsArn: *string,
	Enabled: interface{},
	Id: *string,
	Retries: *f64,
	S3BucketArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentials">IntegrationAwsEksAuditLogCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.name">Name</a></code> | <code>*string</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.snsArn">SnsArn</a></code> | <code>*string</code> | The SNS ARN. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_eks_audit_log#id IntegrationAwsEksAuditLog#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.retries">Retries</a></code> | <code>*f64</code> | The number of attempts to create the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.s3BucketArn">S3BucketArn</a></code> | <code>*string</code> | The optional S3 Bucket ARN. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.credentials"></a>

```go
Credentials IntegrationAwsEksAuditLogCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentials">IntegrationAwsEksAuditLogCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_eks_audit_log#credentials IntegrationAwsEksAuditLog#credentials}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_eks_audit_log#name IntegrationAwsEksAuditLog#name}

---

##### `SnsArn`<sup>Required</sup> <a name="SnsArn" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.snsArn"></a>

```go
SnsArn *string
```

- *Type:* *string

The SNS ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_eks_audit_log#sns_arn IntegrationAwsEksAuditLog#sns_arn}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_eks_audit_log#enabled IntegrationAwsEksAuditLog#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_eks_audit_log#id IntegrationAwsEksAuditLog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.retries"></a>

```go
Retries *f64
```

- *Type:* *f64

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_eks_audit_log#retries IntegrationAwsEksAuditLog#retries}

---

##### `S3BucketArn`<sup>Optional</sup> <a name="S3BucketArn" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.s3BucketArn"></a>

```go
S3BucketArn *string
```

- *Type:* *string

The optional S3 Bucket ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_eks_audit_log#s3_bucket_arn IntegrationAwsEksAuditLog#s3_bucket_arn}

---

### IntegrationAwsEksAuditLogCredentials <a name="IntegrationAwsEksAuditLogCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentials.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationawseksauditlog"

&integrationawseksauditlog.IntegrationAwsEksAuditLogCredentials {
	ExternalId: *string,
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentials.property.externalId">ExternalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_eks_audit_log#external_id IntegrationAwsEksAuditLog#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentials.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_eks_audit_log#role_arn IntegrationAwsEksAuditLog#role_arn}. |

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentials.property.externalId"></a>

```go
ExternalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_eks_audit_log#external_id IntegrationAwsEksAuditLog#external_id}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentials.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_eks_audit_log#role_arn IntegrationAwsEksAuditLog#role_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationAwsEksAuditLogCredentialsOutputReference <a name="IntegrationAwsEksAuditLogCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationawseksauditlog"

integrationawseksauditlog.NewIntegrationAwsEksAuditLogCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationAwsEksAuditLogCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentials">IntegrationAwsEksAuditLogCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.property.externalIdInput"></a>

```go
func ExternalIdInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() IntegrationAwsEksAuditLogCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentials">IntegrationAwsEksAuditLogCredentials</a>

---



