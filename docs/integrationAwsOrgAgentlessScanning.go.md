# `lacework_integration_aws_org_agentless_scanning`

Refer to the Terraform Registory for docs: [`lacework_integration_aws_org_agentless_scanning`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning).

# `integrationAwsOrgAgentlessScanning` Submodule <a name="`integrationAwsOrgAgentlessScanning` Submodule" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsOrgAgentlessScanning <a name="IntegrationAwsOrgAgentlessScanning" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning lacework_integration_aws_org_agentless_scanning}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationawsorgagentlessscanning"

integrationawsorgagentlessscanning.NewIntegrationAwsOrgAgentlessScanning(scope Construct, id *string, config IntegrationAwsOrgAgentlessScanningConfig) IntegrationAwsOrgAgentlessScanning
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig">IntegrationAwsOrgAgentlessScanningConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig">IntegrationAwsOrgAgentlessScanningConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.putOrgAccountMappings">PutOrgAccountMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetBucketArn">ResetBucketArn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetManagementAccount">ResetManagementAccount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetOrgAccountMappings">ResetOrgAccountMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetQueryText">ResetQueryText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetRetries">ResetRetries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanContainers">ResetScanContainers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanHostVulnerabilities">ResetScanHostVulnerabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanMultiVolume">ResetScanMultiVolume</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanStoppedInstances">ResetScanStoppedInstances</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCredentials` <a name="PutCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.putCredentials"></a>

```go
func PutCredentials(value IntegrationAwsOrgAgentlessScanningCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a>

---

##### `PutOrgAccountMappings` <a name="PutOrgAccountMappings" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.putOrgAccountMappings"></a>

```go
func PutOrgAccountMappings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.putOrgAccountMappings.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccountId` <a name="ResetAccountId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetBucketArn` <a name="ResetBucketArn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetBucketArn"></a>

```go
func ResetBucketArn()
```

##### `ResetCredentials` <a name="ResetCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetCredentials"></a>

```go
func ResetCredentials()
```

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetId"></a>

```go
func ResetId()
```

##### `ResetManagementAccount` <a name="ResetManagementAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetManagementAccount"></a>

```go
func ResetManagementAccount()
```

##### `ResetOrgAccountMappings` <a name="ResetOrgAccountMappings" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetOrgAccountMappings"></a>

```go
func ResetOrgAccountMappings()
```

##### `ResetQueryText` <a name="ResetQueryText" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetQueryText"></a>

```go
func ResetQueryText()
```

##### `ResetRetries` <a name="ResetRetries" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetRetries"></a>

```go
func ResetRetries()
```

##### `ResetScanContainers` <a name="ResetScanContainers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanContainers"></a>

```go
func ResetScanContainers()
```

##### `ResetScanHostVulnerabilities` <a name="ResetScanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanHostVulnerabilities"></a>

```go
func ResetScanHostVulnerabilities()
```

##### `ResetScanMultiVolume` <a name="ResetScanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanMultiVolume"></a>

```go
func ResetScanMultiVolume()
```

##### `ResetScanStoppedInstances` <a name="ResetScanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanStoppedInstances"></a>

```go
func ResetScanStoppedInstances()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationawsorgagentlessscanning"

integrationawsorgagentlessscanning.IntegrationAwsOrgAgentlessScanning_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationawsorgagentlessscanning"

integrationawsorgagentlessscanning.IntegrationAwsOrgAgentlessScanning_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationawsorgagentlessscanning"

integrationawsorgagentlessscanning.IntegrationAwsOrgAgentlessScanning_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.createdOrUpdatedBy">CreatedOrUpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.createdOrUpdatedTime">CreatedOrUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference">IntegrationAwsOrgAgentlessScanningCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.intgGuid">IntgGuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.orgAccountMappings">OrgAccountMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.orgLevel">OrgLevel</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.serverToken">ServerToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.typeName">TypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.bucketArnInput">BucketArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.credentialsInput">CredentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.managementAccountInput">ManagementAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.monitoredAccountsInput">MonitoredAccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.orgAccountMappingsInput">OrgAccountMappingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.queryTextInput">QueryTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.retriesInput">RetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanContainersInput">ScanContainersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanFrequencyInput">ScanFrequencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanHostVulnerabilitiesInput">ScanHostVulnerabilitiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanMultiVolumeInput">ScanMultiVolumeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanningAccountInput">ScanningAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanStoppedInstancesInput">ScanStoppedInstancesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.bucketArn">BucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.managementAccount">ManagementAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.monitoredAccounts">MonitoredAccounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.queryText">QueryText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.retries">Retries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanContainers">ScanContainers</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanFrequency">ScanFrequency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanHostVulnerabilities">ScanHostVulnerabilities</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanMultiVolume">ScanMultiVolume</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanningAccount">ScanningAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanStoppedInstances">ScanStoppedInstances</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedOrUpdatedBy`<sup>Required</sup> <a name="CreatedOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.createdOrUpdatedBy"></a>

```go
func CreatedOrUpdatedBy() *string
```

- *Type:* *string

---

##### `CreatedOrUpdatedTime`<sup>Required</sup> <a name="CreatedOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.createdOrUpdatedTime"></a>

```go
func CreatedOrUpdatedTime() *string
```

- *Type:* *string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.credentials"></a>

```go
func Credentials() IntegrationAwsOrgAgentlessScanningCredentialsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference">IntegrationAwsOrgAgentlessScanningCredentialsOutputReference</a>

---

##### `IntgGuid`<sup>Required</sup> <a name="IntgGuid" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.intgGuid"></a>

```go
func IntgGuid() *string
```

- *Type:* *string

---

##### `OrgAccountMappings`<sup>Required</sup> <a name="OrgAccountMappings" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.orgAccountMappings"></a>

```go
func OrgAccountMappings() IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList</a>

---

##### `OrgLevel`<sup>Required</sup> <a name="OrgLevel" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.orgLevel"></a>

```go
func OrgLevel() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ServerToken`<sup>Required</sup> <a name="ServerToken" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.serverToken"></a>

```go
func ServerToken() *string
```

- *Type:* *string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.typeName"></a>

```go
func TypeName() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `BucketArnInput`<sup>Optional</sup> <a name="BucketArnInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.bucketArnInput"></a>

```go
func BucketArnInput() *string
```

- *Type:* *string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.credentialsInput"></a>

```go
func CredentialsInput() IntegrationAwsOrgAgentlessScanningCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagementAccountInput`<sup>Optional</sup> <a name="ManagementAccountInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.managementAccountInput"></a>

```go
func ManagementAccountInput() *string
```

- *Type:* *string

---

##### `MonitoredAccountsInput`<sup>Optional</sup> <a name="MonitoredAccountsInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.monitoredAccountsInput"></a>

```go
func MonitoredAccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OrgAccountMappingsInput`<sup>Optional</sup> <a name="OrgAccountMappingsInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.orgAccountMappingsInput"></a>

```go
func OrgAccountMappingsInput() interface{}
```

- *Type:* interface{}

---

##### `QueryTextInput`<sup>Optional</sup> <a name="QueryTextInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.queryTextInput"></a>

```go
func QueryTextInput() *string
```

- *Type:* *string

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.retriesInput"></a>

```go
func RetriesInput() *f64
```

- *Type:* *f64

---

##### `ScanContainersInput`<sup>Optional</sup> <a name="ScanContainersInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanContainersInput"></a>

```go
func ScanContainersInput() interface{}
```

- *Type:* interface{}

---

##### `ScanFrequencyInput`<sup>Optional</sup> <a name="ScanFrequencyInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanFrequencyInput"></a>

```go
func ScanFrequencyInput() *f64
```

- *Type:* *f64

---

##### `ScanHostVulnerabilitiesInput`<sup>Optional</sup> <a name="ScanHostVulnerabilitiesInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanHostVulnerabilitiesInput"></a>

```go
func ScanHostVulnerabilitiesInput() interface{}
```

- *Type:* interface{}

---

##### `ScanMultiVolumeInput`<sup>Optional</sup> <a name="ScanMultiVolumeInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanMultiVolumeInput"></a>

```go
func ScanMultiVolumeInput() interface{}
```

- *Type:* interface{}

---

##### `ScanningAccountInput`<sup>Optional</sup> <a name="ScanningAccountInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanningAccountInput"></a>

```go
func ScanningAccountInput() *string
```

- *Type:* *string

---

##### `ScanStoppedInstancesInput`<sup>Optional</sup> <a name="ScanStoppedInstancesInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanStoppedInstancesInput"></a>

```go
func ScanStoppedInstancesInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.bucketArn"></a>

```go
func BucketArn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagementAccount`<sup>Required</sup> <a name="ManagementAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.managementAccount"></a>

```go
func ManagementAccount() *string
```

- *Type:* *string

---

##### `MonitoredAccounts`<sup>Required</sup> <a name="MonitoredAccounts" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.monitoredAccounts"></a>

```go
func MonitoredAccounts() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `QueryText`<sup>Required</sup> <a name="QueryText" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.queryText"></a>

```go
func QueryText() *string
```

- *Type:* *string

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.retries"></a>

```go
func Retries() *f64
```

- *Type:* *f64

---

##### `ScanContainers`<sup>Required</sup> <a name="ScanContainers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanContainers"></a>

```go
func ScanContainers() interface{}
```

- *Type:* interface{}

---

##### `ScanFrequency`<sup>Required</sup> <a name="ScanFrequency" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanFrequency"></a>

```go
func ScanFrequency() *f64
```

- *Type:* *f64

---

##### `ScanHostVulnerabilities`<sup>Required</sup> <a name="ScanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanHostVulnerabilities"></a>

```go
func ScanHostVulnerabilities() interface{}
```

- *Type:* interface{}

---

##### `ScanMultiVolume`<sup>Required</sup> <a name="ScanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanMultiVolume"></a>

```go
func ScanMultiVolume() interface{}
```

- *Type:* interface{}

---

##### `ScanningAccount`<sup>Required</sup> <a name="ScanningAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanningAccount"></a>

```go
func ScanningAccount() *string
```

- *Type:* *string

---

##### `ScanStoppedInstances`<sup>Required</sup> <a name="ScanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanStoppedInstances"></a>

```go
func ScanStoppedInstances() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsOrgAgentlessScanningConfig <a name="IntegrationAwsOrgAgentlessScanningConfig" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationawsorgagentlessscanning"

&integrationawsorgagentlessscanning.IntegrationAwsOrgAgentlessScanningConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	MonitoredAccounts: *[]*string,
	Name: *string,
	ScanFrequency: *f64,
	ScanningAccount: *string,
	AccountId: *string,
	BucketArn: *string,
	Credentials: github.com/rhizo-co/cdktf-provider-lacework-go/lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials,
	Enabled: interface{},
	Id: *string,
	ManagementAccount: *string,
	OrgAccountMappings: interface{},
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
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.monitoredAccounts">MonitoredAccounts</a></code> | <code>*[]*string</code> | The list of monitored aws accounts ids or OUs. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.name">Name</a></code> | <code>*string</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanFrequency">ScanFrequency</a></code> | <code>*f64</code> | How often in hours the scan will run in hours. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanningAccount">ScanningAccount</a></code> | <code>*string</code> | The scanning aws account id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The aws account id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.bucketArn">BucketArn</a></code> | <code>*string</code> | The bucket arn. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#id IntegrationAwsOrgAgentlessScanning#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.managementAccount">ManagementAccount</a></code> | <code>*string</code> | The scanning aws account id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.orgAccountMappings">OrgAccountMappings</a></code> | <code>interface{}</code> | org_account_mappings block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.queryText">QueryText</a></code> | <code>*string</code> | The LQL query text. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.retries">Retries</a></code> | <code>*f64</code> | The number of attempts to create the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanContainers">ScanContainers</a></code> | <code>interface{}</code> | Whether to includes scanning for containers. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanHostVulnerabilities">ScanHostVulnerabilities</a></code> | <code>interface{}</code> | Whether to includes scanning for host vulnerabilities. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanMultiVolume">ScanMultiVolume</a></code> | <code>interface{}</code> | Whether to scan secondary volumes (true) or only root volumes (false). |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanStoppedInstances">ScanStoppedInstances</a></code> | <code>interface{}</code> | Whether to scan stopped instances (true). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MonitoredAccounts`<sup>Required</sup> <a name="MonitoredAccounts" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.monitoredAccounts"></a>

```go
MonitoredAccounts *[]*string
```

- *Type:* *[]*string

The list of monitored aws accounts ids or OUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#monitored_accounts IntegrationAwsOrgAgentlessScanning#monitored_accounts}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#name IntegrationAwsOrgAgentlessScanning#name}

---

##### `ScanFrequency`<sup>Required</sup> <a name="ScanFrequency" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanFrequency"></a>

```go
ScanFrequency *f64
```

- *Type:* *f64

How often in hours the scan will run in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_frequency IntegrationAwsOrgAgentlessScanning#scan_frequency}

---

##### `ScanningAccount`<sup>Required</sup> <a name="ScanningAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanningAccount"></a>

```go
ScanningAccount *string
```

- *Type:* *string

The scanning aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scanning_account IntegrationAwsOrgAgentlessScanning#scanning_account}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#account_id IntegrationAwsOrgAgentlessScanning#account_id}

---

##### `BucketArn`<sup>Optional</sup> <a name="BucketArn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.bucketArn"></a>

```go
BucketArn *string
```

- *Type:* *string

The bucket arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#bucket_arn IntegrationAwsOrgAgentlessScanning#bucket_arn}

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.credentials"></a>

```go
Credentials IntegrationAwsOrgAgentlessScanningCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#credentials IntegrationAwsOrgAgentlessScanning#credentials}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#enabled IntegrationAwsOrgAgentlessScanning#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#id IntegrationAwsOrgAgentlessScanning#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManagementAccount`<sup>Optional</sup> <a name="ManagementAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.managementAccount"></a>

```go
ManagementAccount *string
```

- *Type:* *string

The scanning aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#management_account IntegrationAwsOrgAgentlessScanning#management_account}

---

##### `OrgAccountMappings`<sup>Optional</sup> <a name="OrgAccountMappings" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.orgAccountMappings"></a>

```go
OrgAccountMappings interface{}
```

- *Type:* interface{}

org_account_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#org_account_mappings IntegrationAwsOrgAgentlessScanning#org_account_mappings}

---

##### `QueryText`<sup>Optional</sup> <a name="QueryText" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.queryText"></a>

```go
QueryText *string
```

- *Type:* *string

The LQL query text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#query_text IntegrationAwsOrgAgentlessScanning#query_text}

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.retries"></a>

```go
Retries *f64
```

- *Type:* *f64

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#retries IntegrationAwsOrgAgentlessScanning#retries}

---

##### `ScanContainers`<sup>Optional</sup> <a name="ScanContainers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanContainers"></a>

```go
ScanContainers interface{}
```

- *Type:* interface{}

Whether to includes scanning for containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_containers IntegrationAwsOrgAgentlessScanning#scan_containers}

---

##### `ScanHostVulnerabilities`<sup>Optional</sup> <a name="ScanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanHostVulnerabilities"></a>

```go
ScanHostVulnerabilities interface{}
```

- *Type:* interface{}

Whether to includes scanning for host vulnerabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_host_vulnerabilities IntegrationAwsOrgAgentlessScanning#scan_host_vulnerabilities}

---

##### `ScanMultiVolume`<sup>Optional</sup> <a name="ScanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanMultiVolume"></a>

```go
ScanMultiVolume interface{}
```

- *Type:* interface{}

Whether to scan secondary volumes (true) or only root volumes (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_multi_volume IntegrationAwsOrgAgentlessScanning#scan_multi_volume}

---

##### `ScanStoppedInstances`<sup>Optional</sup> <a name="ScanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanStoppedInstances"></a>

```go
ScanStoppedInstances interface{}
```

- *Type:* interface{}

Whether to scan stopped instances (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_stopped_instances IntegrationAwsOrgAgentlessScanning#scan_stopped_instances}

---

### IntegrationAwsOrgAgentlessScanningCredentials <a name="IntegrationAwsOrgAgentlessScanningCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationawsorgagentlessscanning"

&integrationawsorgagentlessscanning.IntegrationAwsOrgAgentlessScanningCredentials {
	ExternalId: *string,
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials.property.externalId">ExternalId</a></code> | <code>*string</code> | The external id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials.property.roleArn">RoleArn</a></code> | <code>*string</code> | The role arn. |

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials.property.externalId"></a>

```go
ExternalId *string
```

- *Type:* *string

The external id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#external_id IntegrationAwsOrgAgentlessScanning#external_id}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The role arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#role_arn IntegrationAwsOrgAgentlessScanning#role_arn}

---

### IntegrationAwsOrgAgentlessScanningOrgAccountMappings <a name="IntegrationAwsOrgAgentlessScanningOrgAccountMappings" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationawsorgagentlessscanning"

&integrationawsorgagentlessscanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings {
	DefaultLaceworkAccount: *string,
	Mapping: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings.property.defaultLaceworkAccount">DefaultLaceworkAccount</a></code> | <code>*string</code> | The default Lacework account name where any non-mapped AWS account will appear. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings.property.mapping">Mapping</a></code> | <code>interface{}</code> | mapping block. |

---

##### `DefaultLaceworkAccount`<sup>Required</sup> <a name="DefaultLaceworkAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings.property.defaultLaceworkAccount"></a>

```go
DefaultLaceworkAccount *string
```

- *Type:* *string

The default Lacework account name where any non-mapped AWS account will appear.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#default_lacework_account IntegrationAwsOrgAgentlessScanning#default_lacework_account}

---

##### `Mapping`<sup>Required</sup> <a name="Mapping" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings.property.mapping"></a>

```go
Mapping interface{}
```

- *Type:* interface{}

mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#mapping IntegrationAwsOrgAgentlessScanning#mapping}

---

### IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping <a name="IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationawsorgagentlessscanning"

&integrationawsorgagentlessscanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping {
	AwsAccounts: *[]*string,
	LaceworkAccount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping.property.awsAccounts">AwsAccounts</a></code> | <code>*[]*string</code> | The list of AWS account IDs to map. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping.property.laceworkAccount">LaceworkAccount</a></code> | <code>*string</code> | The Lacework account name where the CloudTrail activity from the selected AWS accounts will appear. |

---

##### `AwsAccounts`<sup>Required</sup> <a name="AwsAccounts" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping.property.awsAccounts"></a>

```go
AwsAccounts *[]*string
```

- *Type:* *[]*string

The list of AWS account IDs to map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#aws_accounts IntegrationAwsOrgAgentlessScanning#aws_accounts}

---

##### `LaceworkAccount`<sup>Required</sup> <a name="LaceworkAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping.property.laceworkAccount"></a>

```go
LaceworkAccount *string
```

- *Type:* *string

The Lacework account name where the CloudTrail activity from the selected AWS accounts will appear.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#lacework_account IntegrationAwsOrgAgentlessScanning#lacework_account}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationAwsOrgAgentlessScanningCredentialsOutputReference <a name="IntegrationAwsOrgAgentlessScanningCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationawsorgagentlessscanning"

integrationawsorgagentlessscanning.NewIntegrationAwsOrgAgentlessScanningCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationAwsOrgAgentlessScanningCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.externalIdInput"></a>

```go
func ExternalIdInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() IntegrationAwsOrgAgentlessScanningCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a>

---


### IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList <a name="IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationawsorgagentlessscanning"

integrationawsorgagentlessscanning.NewIntegrationAwsOrgAgentlessScanningOrgAccountMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.get"></a>

```go
func Get(index *f64) IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList <a name="IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationawsorgagentlessscanning"

integrationawsorgagentlessscanning.NewIntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.get"></a>

```go
func Get(index *f64) IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference <a name="IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationawsorgagentlessscanning"

integrationawsorgagentlessscanning.NewIntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.awsAccountsInput">AwsAccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.laceworkAccountInput">LaceworkAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.awsAccounts">AwsAccounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.laceworkAccount">LaceworkAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsAccountsInput`<sup>Optional</sup> <a name="AwsAccountsInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.awsAccountsInput"></a>

```go
func AwsAccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LaceworkAccountInput`<sup>Optional</sup> <a name="LaceworkAccountInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.laceworkAccountInput"></a>

```go
func LaceworkAccountInput() *string
```

- *Type:* *string

---

##### `AwsAccounts`<sup>Required</sup> <a name="AwsAccounts" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.awsAccounts"></a>

```go
func AwsAccounts() *[]*string
```

- *Type:* *[]*string

---

##### `LaceworkAccount`<sup>Required</sup> <a name="LaceworkAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.laceworkAccount"></a>

```go
func LaceworkAccount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference <a name="IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/integrationawsorgagentlessscanning"

integrationawsorgagentlessscanning.NewIntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.putMapping">PutMapping</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMapping` <a name="PutMapping" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.putMapping"></a>

```go
func PutMapping(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.putMapping.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.mapping">Mapping</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.defaultLaceworkAccountInput">DefaultLaceworkAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.mappingInput">MappingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.defaultLaceworkAccount">DefaultLaceworkAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mapping`<sup>Required</sup> <a name="Mapping" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.mapping"></a>

```go
func Mapping() IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList</a>

---

##### `DefaultLaceworkAccountInput`<sup>Optional</sup> <a name="DefaultLaceworkAccountInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.defaultLaceworkAccountInput"></a>

```go
func DefaultLaceworkAccountInput() *string
```

- *Type:* *string

---

##### `MappingInput`<sup>Optional</sup> <a name="MappingInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.mappingInput"></a>

```go
func MappingInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultLaceworkAccount`<sup>Required</sup> <a name="DefaultLaceworkAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.defaultLaceworkAccount"></a>

```go
func DefaultLaceworkAccount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



