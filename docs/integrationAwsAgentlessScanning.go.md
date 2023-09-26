# `lacework_integration_aws_agentless_scanning`

Refer to the Terraform Registory for docs: [`lacework_integration_aws_agentless_scanning`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning).

# `integrationAwsAgentlessScanning` Submodule <a name="`integrationAwsAgentlessScanning` Submodule" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsAgentlessScanning <a name="IntegrationAwsAgentlessScanning" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning lacework_integration_aws_agentless_scanning}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationawsagentlessscanning"

integrationawsagentlessscanning.NewIntegrationAwsAgentlessScanning(scope Construct, id *string, config IntegrationAwsAgentlessScanningConfig) IntegrationAwsAgentlessScanning
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig">IntegrationAwsAgentlessScanningConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig">IntegrationAwsAgentlessScanningConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetBucketArn">ResetBucketArn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetQueryText">ResetQueryText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetRetries">ResetRetries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetScanContainers">ResetScanContainers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetScanHostVulnerabilities">ResetScanHostVulnerabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetScanMultiVolume">ResetScanMultiVolume</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetScanStoppedInstances">ResetScanStoppedInstances</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCredentials` <a name="PutCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.putCredentials"></a>

```go
func PutCredentials(value IntegrationAwsAgentlessScanningCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials">IntegrationAwsAgentlessScanningCredentials</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetBucketArn` <a name="ResetBucketArn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetBucketArn"></a>

```go
func ResetBucketArn()
```

##### `ResetCredentials` <a name="ResetCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetCredentials"></a>

```go
func ResetCredentials()
```

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetId"></a>

```go
func ResetId()
```

##### `ResetQueryText` <a name="ResetQueryText" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetQueryText"></a>

```go
func ResetQueryText()
```

##### `ResetRetries` <a name="ResetRetries" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetRetries"></a>

```go
func ResetRetries()
```

##### `ResetScanContainers` <a name="ResetScanContainers" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetScanContainers"></a>

```go
func ResetScanContainers()
```

##### `ResetScanHostVulnerabilities` <a name="ResetScanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetScanHostVulnerabilities"></a>

```go
func ResetScanHostVulnerabilities()
```

##### `ResetScanMultiVolume` <a name="ResetScanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetScanMultiVolume"></a>

```go
func ResetScanMultiVolume()
```

##### `ResetScanStoppedInstances` <a name="ResetScanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetScanStoppedInstances"></a>

```go
func ResetScanStoppedInstances()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationawsagentlessscanning"

integrationawsagentlessscanning.IntegrationAwsAgentlessScanning_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationawsagentlessscanning"

integrationawsagentlessscanning.IntegrationAwsAgentlessScanning_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationawsagentlessscanning"

integrationawsagentlessscanning.IntegrationAwsAgentlessScanning_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.createdOrUpdatedBy">CreatedOrUpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.createdOrUpdatedTime">CreatedOrUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference">IntegrationAwsAgentlessScanningCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.intgGuid">IntgGuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.orgLevel">OrgLevel</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.serverToken">ServerToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.typeName">TypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.bucketArnInput">BucketArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.credentialsInput">CredentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials">IntegrationAwsAgentlessScanningCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.queryTextInput">QueryTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.retriesInput">RetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanContainersInput">ScanContainersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanFrequencyInput">ScanFrequencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanHostVulnerabilitiesInput">ScanHostVulnerabilitiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanMultiVolumeInput">ScanMultiVolumeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanStoppedInstancesInput">ScanStoppedInstancesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.bucketArn">BucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.queryText">QueryText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.retries">Retries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanContainers">ScanContainers</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanFrequency">ScanFrequency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanHostVulnerabilities">ScanHostVulnerabilities</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanMultiVolume">ScanMultiVolume</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanStoppedInstances">ScanStoppedInstances</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedOrUpdatedBy`<sup>Required</sup> <a name="CreatedOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.createdOrUpdatedBy"></a>

```go
func CreatedOrUpdatedBy() *string
```

- *Type:* *string

---

##### `CreatedOrUpdatedTime`<sup>Required</sup> <a name="CreatedOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.createdOrUpdatedTime"></a>

```go
func CreatedOrUpdatedTime() *string
```

- *Type:* *string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.credentials"></a>

```go
func Credentials() IntegrationAwsAgentlessScanningCredentialsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference">IntegrationAwsAgentlessScanningCredentialsOutputReference</a>

---

##### `IntgGuid`<sup>Required</sup> <a name="IntgGuid" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.intgGuid"></a>

```go
func IntgGuid() *string
```

- *Type:* *string

---

##### `OrgLevel`<sup>Required</sup> <a name="OrgLevel" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.orgLevel"></a>

```go
func OrgLevel() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ServerToken`<sup>Required</sup> <a name="ServerToken" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.serverToken"></a>

```go
func ServerToken() *string
```

- *Type:* *string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.typeName"></a>

```go
func TypeName() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `BucketArnInput`<sup>Optional</sup> <a name="BucketArnInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.bucketArnInput"></a>

```go
func BucketArnInput() *string
```

- *Type:* *string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.credentialsInput"></a>

```go
func CredentialsInput() IntegrationAwsAgentlessScanningCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials">IntegrationAwsAgentlessScanningCredentials</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `QueryTextInput`<sup>Optional</sup> <a name="QueryTextInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.queryTextInput"></a>

```go
func QueryTextInput() *string
```

- *Type:* *string

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.retriesInput"></a>

```go
func RetriesInput() *f64
```

- *Type:* *f64

---

##### `ScanContainersInput`<sup>Optional</sup> <a name="ScanContainersInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanContainersInput"></a>

```go
func ScanContainersInput() interface{}
```

- *Type:* interface{}

---

##### `ScanFrequencyInput`<sup>Optional</sup> <a name="ScanFrequencyInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanFrequencyInput"></a>

```go
func ScanFrequencyInput() *f64
```

- *Type:* *f64

---

##### `ScanHostVulnerabilitiesInput`<sup>Optional</sup> <a name="ScanHostVulnerabilitiesInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanHostVulnerabilitiesInput"></a>

```go
func ScanHostVulnerabilitiesInput() interface{}
```

- *Type:* interface{}

---

##### `ScanMultiVolumeInput`<sup>Optional</sup> <a name="ScanMultiVolumeInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanMultiVolumeInput"></a>

```go
func ScanMultiVolumeInput() interface{}
```

- *Type:* interface{}

---

##### `ScanStoppedInstancesInput`<sup>Optional</sup> <a name="ScanStoppedInstancesInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanStoppedInstancesInput"></a>

```go
func ScanStoppedInstancesInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.bucketArn"></a>

```go
func BucketArn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `QueryText`<sup>Required</sup> <a name="QueryText" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.queryText"></a>

```go
func QueryText() *string
```

- *Type:* *string

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.retries"></a>

```go
func Retries() *f64
```

- *Type:* *f64

---

##### `ScanContainers`<sup>Required</sup> <a name="ScanContainers" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanContainers"></a>

```go
func ScanContainers() interface{}
```

- *Type:* interface{}

---

##### `ScanFrequency`<sup>Required</sup> <a name="ScanFrequency" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanFrequency"></a>

```go
func ScanFrequency() *f64
```

- *Type:* *f64

---

##### `ScanHostVulnerabilities`<sup>Required</sup> <a name="ScanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanHostVulnerabilities"></a>

```go
func ScanHostVulnerabilities() interface{}
```

- *Type:* interface{}

---

##### `ScanMultiVolume`<sup>Required</sup> <a name="ScanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanMultiVolume"></a>

```go
func ScanMultiVolume() interface{}
```

- *Type:* interface{}

---

##### `ScanStoppedInstances`<sup>Required</sup> <a name="ScanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanStoppedInstances"></a>

```go
func ScanStoppedInstances() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsAgentlessScanningConfig <a name="IntegrationAwsAgentlessScanningConfig" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationawsagentlessscanning"

&integrationawsagentlessscanning.IntegrationAwsAgentlessScanningConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ScanFrequency: *f64,
	AccountId: *string,
	BucketArn: *string,
	Credentials: github.com/rhizo-co/cdktf-provider-lacework-go/lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials,
	Enabled: interface{},
	Id: *string,
	QueryText: *string,
	Retries: *f64,
	ScanContainers: interface{},
	ScanHostVulnerabilities: interface{},
	ScanMultiVolume: interface{},
	ScanStoppedInstances: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.name">Name</a></code> | <code>*string</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanFrequency">ScanFrequency</a></code> | <code>*f64</code> | How often in hours the scan will run in hours. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The aws account id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.bucketArn">BucketArn</a></code> | <code>*string</code> | The bucket arn. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials">IntegrationAwsAgentlessScanningCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#id IntegrationAwsAgentlessScanning#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.queryText">QueryText</a></code> | <code>*string</code> | The LQL query text. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.retries">Retries</a></code> | <code>*f64</code> | The number of attempts to create the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanContainers">ScanContainers</a></code> | <code>interface{}</code> | Whether to includes scanning for containers. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanHostVulnerabilities">ScanHostVulnerabilities</a></code> | <code>interface{}</code> | Whether to includes scanning for host vulnerabilities. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanMultiVolume">ScanMultiVolume</a></code> | <code>interface{}</code> | Whether to scan secondary volumes (true) or only root volumes (false). |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanStoppedInstances">ScanStoppedInstances</a></code> | <code>interface{}</code> | Whether to scan stopped instances (true). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#name IntegrationAwsAgentlessScanning#name}

---

##### `ScanFrequency`<sup>Required</sup> <a name="ScanFrequency" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanFrequency"></a>

```go
ScanFrequency *f64
```

- *Type:* *f64

How often in hours the scan will run in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#scan_frequency IntegrationAwsAgentlessScanning#scan_frequency}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#account_id IntegrationAwsAgentlessScanning#account_id}

---

##### `BucketArn`<sup>Optional</sup> <a name="BucketArn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.bucketArn"></a>

```go
BucketArn *string
```

- *Type:* *string

The bucket arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#bucket_arn IntegrationAwsAgentlessScanning#bucket_arn}

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.credentials"></a>

```go
Credentials IntegrationAwsAgentlessScanningCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials">IntegrationAwsAgentlessScanningCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#credentials IntegrationAwsAgentlessScanning#credentials}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#enabled IntegrationAwsAgentlessScanning#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#id IntegrationAwsAgentlessScanning#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `QueryText`<sup>Optional</sup> <a name="QueryText" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.queryText"></a>

```go
QueryText *string
```

- *Type:* *string

The LQL query text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#query_text IntegrationAwsAgentlessScanning#query_text}

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.retries"></a>

```go
Retries *f64
```

- *Type:* *f64

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#retries IntegrationAwsAgentlessScanning#retries}

---

##### `ScanContainers`<sup>Optional</sup> <a name="ScanContainers" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanContainers"></a>

```go
ScanContainers interface{}
```

- *Type:* interface{}

Whether to includes scanning for containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#scan_containers IntegrationAwsAgentlessScanning#scan_containers}

---

##### `ScanHostVulnerabilities`<sup>Optional</sup> <a name="ScanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanHostVulnerabilities"></a>

```go
ScanHostVulnerabilities interface{}
```

- *Type:* interface{}

Whether to includes scanning for host vulnerabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#scan_host_vulnerabilities IntegrationAwsAgentlessScanning#scan_host_vulnerabilities}

---

##### `ScanMultiVolume`<sup>Optional</sup> <a name="ScanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanMultiVolume"></a>

```go
ScanMultiVolume interface{}
```

- *Type:* interface{}

Whether to scan secondary volumes (true) or only root volumes (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#scan_multi_volume IntegrationAwsAgentlessScanning#scan_multi_volume}

---

##### `ScanStoppedInstances`<sup>Optional</sup> <a name="ScanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanStoppedInstances"></a>

```go
ScanStoppedInstances interface{}
```

- *Type:* interface{}

Whether to scan stopped instances (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#scan_stopped_instances IntegrationAwsAgentlessScanning#scan_stopped_instances}

---

### IntegrationAwsAgentlessScanningCredentials <a name="IntegrationAwsAgentlessScanningCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationawsagentlessscanning"

&integrationawsagentlessscanning.IntegrationAwsAgentlessScanningCredentials {
	ExternalId: *string,
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials.property.externalId">ExternalId</a></code> | <code>*string</code> | The external id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials.property.roleArn">RoleArn</a></code> | <code>*string</code> | The role arn. |

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials.property.externalId"></a>

```go
ExternalId *string
```

- *Type:* *string

The external id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#external_id IntegrationAwsAgentlessScanning#external_id}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The role arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#role_arn IntegrationAwsAgentlessScanning#role_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationAwsAgentlessScanningCredentialsOutputReference <a name="IntegrationAwsAgentlessScanningCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationawsagentlessscanning"

integrationawsagentlessscanning.NewIntegrationAwsAgentlessScanningCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationAwsAgentlessScanningCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials">IntegrationAwsAgentlessScanningCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.externalIdInput"></a>

```go
func ExternalIdInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() IntegrationAwsAgentlessScanningCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials">IntegrationAwsAgentlessScanningCredentials</a>

---



