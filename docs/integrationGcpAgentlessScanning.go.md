# `lacework_integration_gcp_agentless_scanning`

Refer to the Terraform Registory for docs: [`lacework_integration_gcp_agentless_scanning`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning).

# `integrationGcpAgentlessScanning` Submodule <a name="`integrationGcpAgentlessScanning` Submodule" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationGcpAgentlessScanning <a name="IntegrationGcpAgentlessScanning" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning lacework_integration_gcp_agentless_scanning}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationgcpagentlessscanning"

integrationgcpagentlessscanning.NewIntegrationGcpAgentlessScanning(scope Construct, id *string, config IntegrationGcpAgentlessScanningConfig) IntegrationGcpAgentlessScanning
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig">IntegrationGcpAgentlessScanningConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig">IntegrationGcpAgentlessScanningConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetFilterList">ResetFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetQueryText">ResetQueryText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetResourceLevel">ResetResourceLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetRetries">ResetRetries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanContainers">ResetScanContainers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanFrequency">ResetScanFrequency</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanHostVulnerabilities">ResetScanHostVulnerabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanMultiVolume">ResetScanMultiVolume</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanStoppedInstances">ResetScanStoppedInstances</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCredentials` <a name="PutCredentials" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.putCredentials"></a>

```go
func PutCredentials(value IntegrationGcpAgentlessScanningCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetFilterList` <a name="ResetFilterList" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetFilterList"></a>

```go
func ResetFilterList()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetId"></a>

```go
func ResetId()
```

##### `ResetQueryText` <a name="ResetQueryText" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetQueryText"></a>

```go
func ResetQueryText()
```

##### `ResetResourceLevel` <a name="ResetResourceLevel" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetResourceLevel"></a>

```go
func ResetResourceLevel()
```

##### `ResetRetries` <a name="ResetRetries" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetRetries"></a>

```go
func ResetRetries()
```

##### `ResetScanContainers` <a name="ResetScanContainers" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanContainers"></a>

```go
func ResetScanContainers()
```

##### `ResetScanFrequency` <a name="ResetScanFrequency" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanFrequency"></a>

```go
func ResetScanFrequency()
```

##### `ResetScanHostVulnerabilities` <a name="ResetScanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanHostVulnerabilities"></a>

```go
func ResetScanHostVulnerabilities()
```

##### `ResetScanMultiVolume` <a name="ResetScanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanMultiVolume"></a>

```go
func ResetScanMultiVolume()
```

##### `ResetScanStoppedInstances` <a name="ResetScanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanStoppedInstances"></a>

```go
func ResetScanStoppedInstances()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationgcpagentlessscanning"

integrationgcpagentlessscanning.IntegrationGcpAgentlessScanning_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationgcpagentlessscanning"

integrationgcpagentlessscanning.IntegrationGcpAgentlessScanning_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationgcpagentlessscanning"

integrationgcpagentlessscanning.IntegrationGcpAgentlessScanning_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.createdOrUpdatedBy">CreatedOrUpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.createdOrUpdatedTime">CreatedOrUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference">IntegrationGcpAgentlessScanningCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.intgGuid">IntgGuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.orgLevel">OrgLevel</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.serverToken">ServerToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.typeName">TypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.credentialsInput">CredentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.filterListInput">FilterListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.queryTextInput">QueryTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceLevelInput">ResourceLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.retriesInput">RetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanContainersInput">ScanContainersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanFrequencyInput">ScanFrequencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanHostVulnerabilitiesInput">ScanHostVulnerabilitiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanMultiVolumeInput">ScanMultiVolumeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanningProjectIdInput">ScanningProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanStoppedInstancesInput">ScanStoppedInstancesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.filterList">FilterList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.queryText">QueryText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceLevel">ResourceLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.retries">Retries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanContainers">ScanContainers</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanFrequency">ScanFrequency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanHostVulnerabilities">ScanHostVulnerabilities</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanMultiVolume">ScanMultiVolume</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanningProjectId">ScanningProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanStoppedInstances">ScanStoppedInstances</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedOrUpdatedBy`<sup>Required</sup> <a name="CreatedOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.createdOrUpdatedBy"></a>

```go
func CreatedOrUpdatedBy() *string
```

- *Type:* *string

---

##### `CreatedOrUpdatedTime`<sup>Required</sup> <a name="CreatedOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.createdOrUpdatedTime"></a>

```go
func CreatedOrUpdatedTime() *string
```

- *Type:* *string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.credentials"></a>

```go
func Credentials() IntegrationGcpAgentlessScanningCredentialsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference">IntegrationGcpAgentlessScanningCredentialsOutputReference</a>

---

##### `IntgGuid`<sup>Required</sup> <a name="IntgGuid" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.intgGuid"></a>

```go
func IntgGuid() *string
```

- *Type:* *string

---

##### `OrgLevel`<sup>Required</sup> <a name="OrgLevel" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.orgLevel"></a>

```go
func OrgLevel() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ServerToken`<sup>Required</sup> <a name="ServerToken" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.serverToken"></a>

```go
func ServerToken() *string
```

- *Type:* *string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.typeName"></a>

```go
func TypeName() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.credentialsInput"></a>

```go
func CredentialsInput() IntegrationGcpAgentlessScanningCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FilterListInput`<sup>Optional</sup> <a name="FilterListInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.filterListInput"></a>

```go
func FilterListInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `QueryTextInput`<sup>Optional</sup> <a name="QueryTextInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.queryTextInput"></a>

```go
func QueryTextInput() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `ResourceLevelInput`<sup>Optional</sup> <a name="ResourceLevelInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceLevelInput"></a>

```go
func ResourceLevelInput() *string
```

- *Type:* *string

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.retriesInput"></a>

```go
func RetriesInput() *f64
```

- *Type:* *f64

---

##### `ScanContainersInput`<sup>Optional</sup> <a name="ScanContainersInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanContainersInput"></a>

```go
func ScanContainersInput() interface{}
```

- *Type:* interface{}

---

##### `ScanFrequencyInput`<sup>Optional</sup> <a name="ScanFrequencyInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanFrequencyInput"></a>

```go
func ScanFrequencyInput() *f64
```

- *Type:* *f64

---

##### `ScanHostVulnerabilitiesInput`<sup>Optional</sup> <a name="ScanHostVulnerabilitiesInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanHostVulnerabilitiesInput"></a>

```go
func ScanHostVulnerabilitiesInput() interface{}
```

- *Type:* interface{}

---

##### `ScanMultiVolumeInput`<sup>Optional</sup> <a name="ScanMultiVolumeInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanMultiVolumeInput"></a>

```go
func ScanMultiVolumeInput() interface{}
```

- *Type:* interface{}

---

##### `ScanningProjectIdInput`<sup>Optional</sup> <a name="ScanningProjectIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanningProjectIdInput"></a>

```go
func ScanningProjectIdInput() *string
```

- *Type:* *string

---

##### `ScanStoppedInstancesInput`<sup>Optional</sup> <a name="ScanStoppedInstancesInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanStoppedInstancesInput"></a>

```go
func ScanStoppedInstancesInput() interface{}
```

- *Type:* interface{}

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `FilterList`<sup>Required</sup> <a name="FilterList" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.filterList"></a>

```go
func FilterList() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `QueryText`<sup>Required</sup> <a name="QueryText" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.queryText"></a>

```go
func QueryText() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceLevel`<sup>Required</sup> <a name="ResourceLevel" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceLevel"></a>

```go
func ResourceLevel() *string
```

- *Type:* *string

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.retries"></a>

```go
func Retries() *f64
```

- *Type:* *f64

---

##### `ScanContainers`<sup>Required</sup> <a name="ScanContainers" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanContainers"></a>

```go
func ScanContainers() interface{}
```

- *Type:* interface{}

---

##### `ScanFrequency`<sup>Required</sup> <a name="ScanFrequency" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanFrequency"></a>

```go
func ScanFrequency() *f64
```

- *Type:* *f64

---

##### `ScanHostVulnerabilities`<sup>Required</sup> <a name="ScanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanHostVulnerabilities"></a>

```go
func ScanHostVulnerabilities() interface{}
```

- *Type:* interface{}

---

##### `ScanMultiVolume`<sup>Required</sup> <a name="ScanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanMultiVolume"></a>

```go
func ScanMultiVolume() interface{}
```

- *Type:* interface{}

---

##### `ScanningProjectId`<sup>Required</sup> <a name="ScanningProjectId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanningProjectId"></a>

```go
func ScanningProjectId() *string
```

- *Type:* *string

---

##### `ScanStoppedInstances`<sup>Required</sup> <a name="ScanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanStoppedInstances"></a>

```go
func ScanStoppedInstances() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationGcpAgentlessScanningConfig <a name="IntegrationGcpAgentlessScanningConfig" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationgcpagentlessscanning"

&integrationgcpagentlessscanning.IntegrationGcpAgentlessScanningConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BucketName: *string,
	Credentials: github.com/rhizo-co/cdktf-provider-lacework-go/lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials,
	Name: *string,
	ResourceId: *string,
	ScanningProjectId: *string,
	Enabled: interface{},
	FilterList: *[]*string,
	Id: *string,
	QueryText: *string,
	ResourceLevel: *string,
	Retries: *f64,
	ScanContainers: interface{},
	ScanFrequency: *f64,
	ScanHostVulnerabilities: interface{},
	ScanMultiVolume: interface{},
	ScanStoppedInstances: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.bucketName">BucketName</a></code> | <code>*string</code> | Bucket containing analysis results shared with Lacework platform. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.name">Name</a></code> | <code>*string</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.resourceId">ResourceId</a></code> | <code>*string</code> | Organization Id or Project Id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanningProjectId">ScanningProjectId</a></code> | <code>*string</code> | Project ID where scanner is deployed. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.filterList">FilterList</a></code> | <code>*[]*string</code> | List of Projects to specifically include/exclude. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#id IntegrationGcpAgentlessScanning#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.queryText">QueryText</a></code> | <code>*string</code> | The LQL query text. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.resourceLevel">ResourceLevel</a></code> | <code>*string</code> | Integration level - ORGANIZATION / PROJECT. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.retries">Retries</a></code> | <code>*f64</code> | The number of attempts to create the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanContainers">ScanContainers</a></code> | <code>interface{}</code> | Whether to includes scanning for containers. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanFrequency">ScanFrequency</a></code> | <code>*f64</code> | How often in hours the scan will run in hours. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanHostVulnerabilities">ScanHostVulnerabilities</a></code> | <code>interface{}</code> | Whether to includes scanning for host vulnerabilities. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanMultiVolume">ScanMultiVolume</a></code> | <code>interface{}</code> | Whether to scan secondary volumes (true) or only root volumes (false). |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanStoppedInstances">ScanStoppedInstances</a></code> | <code>interface{}</code> | Whether to scan stopped instances (true). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Bucket containing analysis results shared with Lacework platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#bucket_name IntegrationGcpAgentlessScanning#bucket_name}

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.credentials"></a>

```go
Credentials IntegrationGcpAgentlessScanningCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#credentials IntegrationGcpAgentlessScanning#credentials}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#name IntegrationGcpAgentlessScanning#name}

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Organization Id or Project Id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#resource_id IntegrationGcpAgentlessScanning#resource_id}

---

##### `ScanningProjectId`<sup>Required</sup> <a name="ScanningProjectId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanningProjectId"></a>

```go
ScanningProjectId *string
```

- *Type:* *string

Project ID where scanner is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scanning_project_id IntegrationGcpAgentlessScanning#scanning_project_id}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#enabled IntegrationGcpAgentlessScanning#enabled}

---

##### `FilterList`<sup>Optional</sup> <a name="FilterList" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.filterList"></a>

```go
FilterList *[]*string
```

- *Type:* *[]*string

List of Projects to specifically include/exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#filter_list IntegrationGcpAgentlessScanning#filter_list}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#id IntegrationGcpAgentlessScanning#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `QueryText`<sup>Optional</sup> <a name="QueryText" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.queryText"></a>

```go
QueryText *string
```

- *Type:* *string

The LQL query text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#query_text IntegrationGcpAgentlessScanning#query_text}

---

##### `ResourceLevel`<sup>Optional</sup> <a name="ResourceLevel" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.resourceLevel"></a>

```go
ResourceLevel *string
```

- *Type:* *string

Integration level - ORGANIZATION / PROJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#resource_level IntegrationGcpAgentlessScanning#resource_level}

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.retries"></a>

```go
Retries *f64
```

- *Type:* *f64

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#retries IntegrationGcpAgentlessScanning#retries}

---

##### `ScanContainers`<sup>Optional</sup> <a name="ScanContainers" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanContainers"></a>

```go
ScanContainers interface{}
```

- *Type:* interface{}

Whether to includes scanning for containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_containers IntegrationGcpAgentlessScanning#scan_containers}

---

##### `ScanFrequency`<sup>Optional</sup> <a name="ScanFrequency" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanFrequency"></a>

```go
ScanFrequency *f64
```

- *Type:* *f64

How often in hours the scan will run in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_frequency IntegrationGcpAgentlessScanning#scan_frequency}

---

##### `ScanHostVulnerabilities`<sup>Optional</sup> <a name="ScanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanHostVulnerabilities"></a>

```go
ScanHostVulnerabilities interface{}
```

- *Type:* interface{}

Whether to includes scanning for host vulnerabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_host_vulnerabilities IntegrationGcpAgentlessScanning#scan_host_vulnerabilities}

---

##### `ScanMultiVolume`<sup>Optional</sup> <a name="ScanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanMultiVolume"></a>

```go
ScanMultiVolume interface{}
```

- *Type:* interface{}

Whether to scan secondary volumes (true) or only root volumes (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_multi_volume IntegrationGcpAgentlessScanning#scan_multi_volume}

---

##### `ScanStoppedInstances`<sup>Optional</sup> <a name="ScanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanStoppedInstances"></a>

```go
ScanStoppedInstances interface{}
```

- *Type:* interface{}

Whether to scan stopped instances (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_stopped_instances IntegrationGcpAgentlessScanning#scan_stopped_instances}

---

### IntegrationGcpAgentlessScanningCredentials <a name="IntegrationGcpAgentlessScanningCredentials" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationgcpagentlessscanning"

&integrationgcpagentlessscanning.IntegrationGcpAgentlessScanningCredentials {
	ClientEmail: *string,
	ClientId: *string,
	PrivateKey: *string,
	PrivateKeyId: *string,
	TokenUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.clientEmail">ClientEmail</a></code> | <code>*string</code> | Client email from credentials file. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.clientId">ClientId</a></code> | <code>*string</code> | Client Id from credentials file. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.privateKey">PrivateKey</a></code> | <code>*string</code> | Private Key from credentials file. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.privateKeyId">PrivateKeyId</a></code> | <code>*string</code> | Private Key Id from credentials file. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.tokenUri">TokenUri</a></code> | <code>*string</code> | Token URI from credentials file. |

---

##### `ClientEmail`<sup>Required</sup> <a name="ClientEmail" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.clientEmail"></a>

```go
ClientEmail *string
```

- *Type:* *string

Client email from credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#client_email IntegrationGcpAgentlessScanning#client_email}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Client Id from credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#client_id IntegrationGcpAgentlessScanning#client_id}

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

Private Key from credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#private_key IntegrationGcpAgentlessScanning#private_key}

---

##### `PrivateKeyId`<sup>Required</sup> <a name="PrivateKeyId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.privateKeyId"></a>

```go
PrivateKeyId *string
```

- *Type:* *string

Private Key Id from credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#private_key_id IntegrationGcpAgentlessScanning#private_key_id}

---

##### `TokenUri`<sup>Optional</sup> <a name="TokenUri" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.tokenUri"></a>

```go
TokenUri *string
```

- *Type:* *string

Token URI from credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#token_uri IntegrationGcpAgentlessScanning#token_uri}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationGcpAgentlessScanningCredentialsOutputReference <a name="IntegrationGcpAgentlessScanningCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationgcpagentlessscanning"

integrationgcpagentlessscanning.NewIntegrationGcpAgentlessScanningCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationGcpAgentlessScanningCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.resetTokenUri">ResetTokenUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTokenUri` <a name="ResetTokenUri" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.resetTokenUri"></a>

```go
func ResetTokenUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientEmailInput">ClientEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKeyIdInput">PrivateKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.tokenUriInput">TokenUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientEmail">ClientEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKeyId">PrivateKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.tokenUri">TokenUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientEmailInput`<sup>Optional</sup> <a name="ClientEmailInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientEmailInput"></a>

```go
func ClientEmailInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `PrivateKeyIdInput`<sup>Optional</sup> <a name="PrivateKeyIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKeyIdInput"></a>

```go
func PrivateKeyIdInput() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `TokenUriInput`<sup>Optional</sup> <a name="TokenUriInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.tokenUriInput"></a>

```go
func TokenUriInput() *string
```

- *Type:* *string

---

##### `ClientEmail`<sup>Required</sup> <a name="ClientEmail" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientEmail"></a>

```go
func ClientEmail() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `PrivateKeyId`<sup>Required</sup> <a name="PrivateKeyId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKeyId"></a>

```go
func PrivateKeyId() *string
```

- *Type:* *string

---

##### `TokenUri`<sup>Required</sup> <a name="TokenUri" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.tokenUri"></a>

```go
func TokenUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() IntegrationGcpAgentlessScanningCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a>

---



