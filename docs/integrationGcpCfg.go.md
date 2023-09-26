# `lacework_integration_gcp_cfg`

Refer to the Terraform Registory for docs: [`lacework_integration_gcp_cfg`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_cfg).

# `integrationGcpCfg` Submodule <a name="`integrationGcpCfg` Submodule" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationGcpCfg <a name="IntegrationGcpCfg" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_cfg lacework_integration_gcp_cfg}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationgcpcfg"

integrationgcpcfg.NewIntegrationGcpCfg(scope Construct, id *string, config IntegrationGcpCfgConfig) IntegrationGcpCfg
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgConfig">IntegrationGcpCfgConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgConfig">IntegrationGcpCfgConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.resetResourceLevel">ResetResourceLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.resetRetries">ResetRetries</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCredentials` <a name="PutCredentials" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.putCredentials"></a>

```go
func PutCredentials(value IntegrationGcpCfgCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentials">IntegrationGcpCfgCredentials</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.resetId"></a>

```go
func ResetId()
```

##### `ResetResourceLevel` <a name="ResetResourceLevel" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.resetResourceLevel"></a>

```go
func ResetResourceLevel()
```

##### `ResetRetries` <a name="ResetRetries" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.resetRetries"></a>

```go
func ResetRetries()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationgcpcfg"

integrationgcpcfg.IntegrationGcpCfg_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationgcpcfg"

integrationgcpcfg.IntegrationGcpCfg_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationgcpcfg"

integrationgcpcfg.IntegrationGcpCfg_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.createdOrUpdatedBy">CreatedOrUpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.createdOrUpdatedTime">CreatedOrUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference">IntegrationGcpCfgCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.intgGuid">IntgGuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.orgLevel">OrgLevel</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.typeName">TypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.credentialsInput">CredentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentials">IntegrationGcpCfgCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.resourceLevelInput">ResourceLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.retriesInput">RetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.resourceLevel">ResourceLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.retries">Retries</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedOrUpdatedBy`<sup>Required</sup> <a name="CreatedOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.createdOrUpdatedBy"></a>

```go
func CreatedOrUpdatedBy() *string
```

- *Type:* *string

---

##### `CreatedOrUpdatedTime`<sup>Required</sup> <a name="CreatedOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.createdOrUpdatedTime"></a>

```go
func CreatedOrUpdatedTime() *string
```

- *Type:* *string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.credentials"></a>

```go
func Credentials() IntegrationGcpCfgCredentialsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference">IntegrationGcpCfgCredentialsOutputReference</a>

---

##### `IntgGuid`<sup>Required</sup> <a name="IntgGuid" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.intgGuid"></a>

```go
func IntgGuid() *string
```

- *Type:* *string

---

##### `OrgLevel`<sup>Required</sup> <a name="OrgLevel" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.orgLevel"></a>

```go
func OrgLevel() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.typeName"></a>

```go
func TypeName() *string
```

- *Type:* *string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.credentialsInput"></a>

```go
func CredentialsInput() IntegrationGcpCfgCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentials">IntegrationGcpCfgCredentials</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `ResourceLevelInput`<sup>Optional</sup> <a name="ResourceLevelInput" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.resourceLevelInput"></a>

```go
func ResourceLevelInput() *string
```

- *Type:* *string

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.retriesInput"></a>

```go
func RetriesInput() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceLevel`<sup>Required</sup> <a name="ResourceLevel" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.resourceLevel"></a>

```go
func ResourceLevel() *string
```

- *Type:* *string

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.retries"></a>

```go
func Retries() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfg.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationGcpCfgConfig <a name="IntegrationGcpCfgConfig" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationgcpcfg"

&integrationgcpcfg.IntegrationGcpCfgConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Credentials: github.com/rhizo-co/cdktf-provider-lacework-go/lacework.integrationGcpCfg.IntegrationGcpCfgCredentials,
	Name: *string,
	ResourceId: *string,
	Enabled: interface{},
	Id: *string,
	ResourceLevel: *string,
	Retries: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgConfig.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentials">IntegrationGcpCfgCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_cfg#name IntegrationGcpCfg#name}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgConfig.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_cfg#resource_id IntegrationGcpCfg#resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_cfg#enabled IntegrationGcpCfg#enabled}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_cfg#id IntegrationGcpCfg#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgConfig.property.resourceLevel">ResourceLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_cfg#resource_level IntegrationGcpCfg#resource_level}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgConfig.property.retries">Retries</a></code> | <code>*f64</code> | The number of attempts to create the external integration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgConfig.property.credentials"></a>

```go
Credentials IntegrationGcpCfgCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentials">IntegrationGcpCfgCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_cfg#credentials IntegrationGcpCfg#credentials}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_cfg#name IntegrationGcpCfg#name}.

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgConfig.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_cfg#resource_id IntegrationGcpCfg#resource_id}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_cfg#enabled IntegrationGcpCfg#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_cfg#id IntegrationGcpCfg#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceLevel`<sup>Optional</sup> <a name="ResourceLevel" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgConfig.property.resourceLevel"></a>

```go
ResourceLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_cfg#resource_level IntegrationGcpCfg#resource_level}.

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgConfig.property.retries"></a>

```go
Retries *f64
```

- *Type:* *f64

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_cfg#retries IntegrationGcpCfg#retries}

---

### IntegrationGcpCfgCredentials <a name="IntegrationGcpCfgCredentials" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentials.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationgcpcfg"

&integrationgcpcfg.IntegrationGcpCfgCredentials {
	ClientEmail: *string,
	ClientId: *string,
	PrivateKey: *string,
	PrivateKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentials.property.clientEmail">ClientEmail</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_cfg#client_email IntegrationGcpCfg#client_email}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentials.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_cfg#client_id IntegrationGcpCfg#client_id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentials.property.privateKey">PrivateKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_cfg#private_key IntegrationGcpCfg#private_key}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentials.property.privateKeyId">PrivateKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_cfg#private_key_id IntegrationGcpCfg#private_key_id}. |

---

##### `ClientEmail`<sup>Required</sup> <a name="ClientEmail" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentials.property.clientEmail"></a>

```go
ClientEmail *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_cfg#client_email IntegrationGcpCfg#client_email}.

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentials.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_cfg#client_id IntegrationGcpCfg#client_id}.

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentials.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_cfg#private_key IntegrationGcpCfg#private_key}.

---

##### `PrivateKeyId`<sup>Required</sup> <a name="PrivateKeyId" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentials.property.privateKeyId"></a>

```go
PrivateKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_cfg#private_key_id IntegrationGcpCfg#private_key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationGcpCfgCredentialsOutputReference <a name="IntegrationGcpCfgCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationgcpcfg"

integrationgcpcfg.NewIntegrationGcpCfgCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationGcpCfgCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.property.clientEmailInput">ClientEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.property.privateKeyIdInput">PrivateKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.property.clientEmail">ClientEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.property.privateKeyId">PrivateKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentials">IntegrationGcpCfgCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientEmailInput`<sup>Optional</sup> <a name="ClientEmailInput" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.property.clientEmailInput"></a>

```go
func ClientEmailInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `PrivateKeyIdInput`<sup>Optional</sup> <a name="PrivateKeyIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.property.privateKeyIdInput"></a>

```go
func PrivateKeyIdInput() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `ClientEmail`<sup>Required</sup> <a name="ClientEmail" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.property.clientEmail"></a>

```go
func ClientEmail() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `PrivateKeyId`<sup>Required</sup> <a name="PrivateKeyId" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.property.privateKeyId"></a>

```go
func PrivateKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() IntegrationGcpCfgCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpCfg.IntegrationGcpCfgCredentials">IntegrationGcpCfgCredentials</a>

---



