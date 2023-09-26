# `lacework_integration_aws_org_agentless_scanning`

Refer to the Terraform Registory for docs: [`lacework_integration_aws_org_agentless_scanning`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning).

# `integrationAwsOrgAgentlessScanning` Submodule <a name="`integrationAwsOrgAgentlessScanning` Submodule" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsOrgAgentlessScanning <a name="IntegrationAwsOrgAgentlessScanning" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning lacework_integration_aws_org_agentless_scanning}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationAwsOrgAgentlessScanning(Construct Scope, string Id, IntegrationAwsOrgAgentlessScanningConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig">IntegrationAwsOrgAgentlessScanningConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCredentials` <a name="PutCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.putCredentials"></a>

```csharp
private void PutCredentials(IntegrationAwsOrgAgentlessScanningCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a>

---

##### `PutOrgAccountMappings` <a name="PutOrgAccountMappings" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.putOrgAccountMappings"></a>

```csharp
private void PutOrgAccountMappings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.putOrgAccountMappings.parameter.value"></a>

- *Type:* object

---

##### `ResetAccountId` <a name="ResetAccountId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetBucketArn` <a name="ResetBucketArn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetBucketArn"></a>

```csharp
private void ResetBucketArn()
```

##### `ResetCredentials` <a name="ResetCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetCredentials"></a>

```csharp
private void ResetCredentials()
```

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetManagementAccount` <a name="ResetManagementAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetManagementAccount"></a>

```csharp
private void ResetManagementAccount()
```

##### `ResetOrgAccountMappings` <a name="ResetOrgAccountMappings" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetOrgAccountMappings"></a>

```csharp
private void ResetOrgAccountMappings()
```

##### `ResetQueryText` <a name="ResetQueryText" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetQueryText"></a>

```csharp
private void ResetQueryText()
```

##### `ResetRetries` <a name="ResetRetries" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetRetries"></a>

```csharp
private void ResetRetries()
```

##### `ResetScanContainers` <a name="ResetScanContainers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanContainers"></a>

```csharp
private void ResetScanContainers()
```

##### `ResetScanHostVulnerabilities` <a name="ResetScanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanHostVulnerabilities"></a>

```csharp
private void ResetScanHostVulnerabilities()
```

##### `ResetScanMultiVolume` <a name="ResetScanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanMultiVolume"></a>

```csharp
private void ResetScanMultiVolume()
```

##### `ResetScanStoppedInstances` <a name="ResetScanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanStoppedInstances"></a>

```csharp
private void ResetScanStoppedInstances()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

IntegrationAwsOrgAgentlessScanning.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

IntegrationAwsOrgAgentlessScanning.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

IntegrationAwsOrgAgentlessScanning.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.createdOrUpdatedBy">CreatedOrUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.createdOrUpdatedTime">CreatedOrUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference">IntegrationAwsOrgAgentlessScanningCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.intgGuid">IntgGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.orgAccountMappings">OrgAccountMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.orgLevel">OrgLevel</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.serverToken">ServerToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.typeName">TypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.bucketArnInput">BucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.credentialsInput">CredentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.managementAccountInput">ManagementAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.monitoredAccountsInput">MonitoredAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.orgAccountMappingsInput">OrgAccountMappingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.queryTextInput">QueryTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.retriesInput">RetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanContainersInput">ScanContainersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanFrequencyInput">ScanFrequencyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanHostVulnerabilitiesInput">ScanHostVulnerabilitiesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanMultiVolumeInput">ScanMultiVolumeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanningAccountInput">ScanningAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanStoppedInstancesInput">ScanStoppedInstancesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.bucketArn">BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.managementAccount">ManagementAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.monitoredAccounts">MonitoredAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.queryText">QueryText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.retries">Retries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanContainers">ScanContainers</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanFrequency">ScanFrequency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanHostVulnerabilities">ScanHostVulnerabilities</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanMultiVolume">ScanMultiVolume</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanningAccount">ScanningAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanStoppedInstances">ScanStoppedInstances</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedOrUpdatedBy`<sup>Required</sup> <a name="CreatedOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.createdOrUpdatedBy"></a>

```csharp
public string CreatedOrUpdatedBy { get; }
```

- *Type:* string

---

##### `CreatedOrUpdatedTime`<sup>Required</sup> <a name="CreatedOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.createdOrUpdatedTime"></a>

```csharp
public string CreatedOrUpdatedTime { get; }
```

- *Type:* string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.credentials"></a>

```csharp
public IntegrationAwsOrgAgentlessScanningCredentialsOutputReference Credentials { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference">IntegrationAwsOrgAgentlessScanningCredentialsOutputReference</a>

---

##### `IntgGuid`<sup>Required</sup> <a name="IntgGuid" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.intgGuid"></a>

```csharp
public string IntgGuid { get; }
```

- *Type:* string

---

##### `OrgAccountMappings`<sup>Required</sup> <a name="OrgAccountMappings" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.orgAccountMappings"></a>

```csharp
public IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList OrgAccountMappings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList</a>

---

##### `OrgLevel`<sup>Required</sup> <a name="OrgLevel" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.orgLevel"></a>

```csharp
public IResolvable OrgLevel { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ServerToken`<sup>Required</sup> <a name="ServerToken" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.serverToken"></a>

```csharp
public string ServerToken { get; }
```

- *Type:* string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.typeName"></a>

```csharp
public string TypeName { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `BucketArnInput`<sup>Optional</sup> <a name="BucketArnInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.bucketArnInput"></a>

```csharp
public string BucketArnInput { get; }
```

- *Type:* string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.credentialsInput"></a>

```csharp
public IntegrationAwsOrgAgentlessScanningCredentials CredentialsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagementAccountInput`<sup>Optional</sup> <a name="ManagementAccountInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.managementAccountInput"></a>

```csharp
public string ManagementAccountInput { get; }
```

- *Type:* string

---

##### `MonitoredAccountsInput`<sup>Optional</sup> <a name="MonitoredAccountsInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.monitoredAccountsInput"></a>

```csharp
public string[] MonitoredAccountsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrgAccountMappingsInput`<sup>Optional</sup> <a name="OrgAccountMappingsInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.orgAccountMappingsInput"></a>

```csharp
public object OrgAccountMappingsInput { get; }
```

- *Type:* object

---

##### `QueryTextInput`<sup>Optional</sup> <a name="QueryTextInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.queryTextInput"></a>

```csharp
public string QueryTextInput { get; }
```

- *Type:* string

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.retriesInput"></a>

```csharp
public double RetriesInput { get; }
```

- *Type:* double

---

##### `ScanContainersInput`<sup>Optional</sup> <a name="ScanContainersInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanContainersInput"></a>

```csharp
public object ScanContainersInput { get; }
```

- *Type:* object

---

##### `ScanFrequencyInput`<sup>Optional</sup> <a name="ScanFrequencyInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanFrequencyInput"></a>

```csharp
public double ScanFrequencyInput { get; }
```

- *Type:* double

---

##### `ScanHostVulnerabilitiesInput`<sup>Optional</sup> <a name="ScanHostVulnerabilitiesInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanHostVulnerabilitiesInput"></a>

```csharp
public object ScanHostVulnerabilitiesInput { get; }
```

- *Type:* object

---

##### `ScanMultiVolumeInput`<sup>Optional</sup> <a name="ScanMultiVolumeInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanMultiVolumeInput"></a>

```csharp
public object ScanMultiVolumeInput { get; }
```

- *Type:* object

---

##### `ScanningAccountInput`<sup>Optional</sup> <a name="ScanningAccountInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanningAccountInput"></a>

```csharp
public string ScanningAccountInput { get; }
```

- *Type:* string

---

##### `ScanStoppedInstancesInput`<sup>Optional</sup> <a name="ScanStoppedInstancesInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanStoppedInstancesInput"></a>

```csharp
public object ScanStoppedInstancesInput { get; }
```

- *Type:* object

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.bucketArn"></a>

```csharp
public string BucketArn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagementAccount`<sup>Required</sup> <a name="ManagementAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.managementAccount"></a>

```csharp
public string ManagementAccount { get; }
```

- *Type:* string

---

##### `MonitoredAccounts`<sup>Required</sup> <a name="MonitoredAccounts" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.monitoredAccounts"></a>

```csharp
public string[] MonitoredAccounts { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `QueryText`<sup>Required</sup> <a name="QueryText" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.queryText"></a>

```csharp
public string QueryText { get; }
```

- *Type:* string

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.retries"></a>

```csharp
public double Retries { get; }
```

- *Type:* double

---

##### `ScanContainers`<sup>Required</sup> <a name="ScanContainers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanContainers"></a>

```csharp
public object ScanContainers { get; }
```

- *Type:* object

---

##### `ScanFrequency`<sup>Required</sup> <a name="ScanFrequency" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanFrequency"></a>

```csharp
public double ScanFrequency { get; }
```

- *Type:* double

---

##### `ScanHostVulnerabilities`<sup>Required</sup> <a name="ScanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanHostVulnerabilities"></a>

```csharp
public object ScanHostVulnerabilities { get; }
```

- *Type:* object

---

##### `ScanMultiVolume`<sup>Required</sup> <a name="ScanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanMultiVolume"></a>

```csharp
public object ScanMultiVolume { get; }
```

- *Type:* object

---

##### `ScanningAccount`<sup>Required</sup> <a name="ScanningAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanningAccount"></a>

```csharp
public string ScanningAccount { get; }
```

- *Type:* string

---

##### `ScanStoppedInstances`<sup>Required</sup> <a name="ScanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanStoppedInstances"></a>

```csharp
public object ScanStoppedInstances { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsOrgAgentlessScanningConfig <a name="IntegrationAwsOrgAgentlessScanningConfig" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationAwsOrgAgentlessScanningConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] MonitoredAccounts,
    string Name,
    double ScanFrequency,
    string ScanningAccount,
    string AccountId = null,
    string BucketArn = null,
    IntegrationAwsOrgAgentlessScanningCredentials Credentials = null,
    object Enabled = null,
    string Id = null,
    string ManagementAccount = null,
    object OrgAccountMappings = null,
    string QueryText = null,
    double Retries = null,
    object ScanContainers = null,
    object ScanHostVulnerabilities = null,
    object ScanMultiVolume = null,
    object ScanStoppedInstances = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.monitoredAccounts">MonitoredAccounts</a></code> | <code>string[]</code> | The list of monitored aws accounts ids or OUs. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.name">Name</a></code> | <code>string</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanFrequency">ScanFrequency</a></code> | <code>double</code> | How often in hours the scan will run in hours. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanningAccount">ScanningAccount</a></code> | <code>string</code> | The scanning aws account id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.accountId">AccountId</a></code> | <code>string</code> | The aws account id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.bucketArn">BucketArn</a></code> | <code>string</code> | The bucket arn. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.enabled">Enabled</a></code> | <code>object</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#id IntegrationAwsOrgAgentlessScanning#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.managementAccount">ManagementAccount</a></code> | <code>string</code> | The scanning aws account id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.orgAccountMappings">OrgAccountMappings</a></code> | <code>object</code> | org_account_mappings block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.queryText">QueryText</a></code> | <code>string</code> | The LQL query text. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.retries">Retries</a></code> | <code>double</code> | The number of attempts to create the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanContainers">ScanContainers</a></code> | <code>object</code> | Whether to includes scanning for containers. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanHostVulnerabilities">ScanHostVulnerabilities</a></code> | <code>object</code> | Whether to includes scanning for host vulnerabilities. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanMultiVolume">ScanMultiVolume</a></code> | <code>object</code> | Whether to scan secondary volumes (true) or only root volumes (false). |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanStoppedInstances">ScanStoppedInstances</a></code> | <code>object</code> | Whether to scan stopped instances (true). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MonitoredAccounts`<sup>Required</sup> <a name="MonitoredAccounts" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.monitoredAccounts"></a>

```csharp
public string[] MonitoredAccounts { get; set; }
```

- *Type:* string[]

The list of monitored aws accounts ids or OUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#monitored_accounts IntegrationAwsOrgAgentlessScanning#monitored_accounts}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#name IntegrationAwsOrgAgentlessScanning#name}

---

##### `ScanFrequency`<sup>Required</sup> <a name="ScanFrequency" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanFrequency"></a>

```csharp
public double ScanFrequency { get; set; }
```

- *Type:* double

How often in hours the scan will run in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_frequency IntegrationAwsOrgAgentlessScanning#scan_frequency}

---

##### `ScanningAccount`<sup>Required</sup> <a name="ScanningAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanningAccount"></a>

```csharp
public string ScanningAccount { get; set; }
```

- *Type:* string

The scanning aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scanning_account IntegrationAwsOrgAgentlessScanning#scanning_account}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#account_id IntegrationAwsOrgAgentlessScanning#account_id}

---

##### `BucketArn`<sup>Optional</sup> <a name="BucketArn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.bucketArn"></a>

```csharp
public string BucketArn { get; set; }
```

- *Type:* string

The bucket arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#bucket_arn IntegrationAwsOrgAgentlessScanning#bucket_arn}

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.credentials"></a>

```csharp
public IntegrationAwsOrgAgentlessScanningCredentials Credentials { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#credentials IntegrationAwsOrgAgentlessScanning#credentials}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#enabled IntegrationAwsOrgAgentlessScanning#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#id IntegrationAwsOrgAgentlessScanning#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManagementAccount`<sup>Optional</sup> <a name="ManagementAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.managementAccount"></a>

```csharp
public string ManagementAccount { get; set; }
```

- *Type:* string

The scanning aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#management_account IntegrationAwsOrgAgentlessScanning#management_account}

---

##### `OrgAccountMappings`<sup>Optional</sup> <a name="OrgAccountMappings" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.orgAccountMappings"></a>

```csharp
public object OrgAccountMappings { get; set; }
```

- *Type:* object

org_account_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#org_account_mappings IntegrationAwsOrgAgentlessScanning#org_account_mappings}

---

##### `QueryText`<sup>Optional</sup> <a name="QueryText" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.queryText"></a>

```csharp
public string QueryText { get; set; }
```

- *Type:* string

The LQL query text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#query_text IntegrationAwsOrgAgentlessScanning#query_text}

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.retries"></a>

```csharp
public double Retries { get; set; }
```

- *Type:* double

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#retries IntegrationAwsOrgAgentlessScanning#retries}

---

##### `ScanContainers`<sup>Optional</sup> <a name="ScanContainers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanContainers"></a>

```csharp
public object ScanContainers { get; set; }
```

- *Type:* object

Whether to includes scanning for containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_containers IntegrationAwsOrgAgentlessScanning#scan_containers}

---

##### `ScanHostVulnerabilities`<sup>Optional</sup> <a name="ScanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanHostVulnerabilities"></a>

```csharp
public object ScanHostVulnerabilities { get; set; }
```

- *Type:* object

Whether to includes scanning for host vulnerabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_host_vulnerabilities IntegrationAwsOrgAgentlessScanning#scan_host_vulnerabilities}

---

##### `ScanMultiVolume`<sup>Optional</sup> <a name="ScanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanMultiVolume"></a>

```csharp
public object ScanMultiVolume { get; set; }
```

- *Type:* object

Whether to scan secondary volumes (true) or only root volumes (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_multi_volume IntegrationAwsOrgAgentlessScanning#scan_multi_volume}

---

##### `ScanStoppedInstances`<sup>Optional</sup> <a name="ScanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanStoppedInstances"></a>

```csharp
public object ScanStoppedInstances { get; set; }
```

- *Type:* object

Whether to scan stopped instances (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_stopped_instances IntegrationAwsOrgAgentlessScanning#scan_stopped_instances}

---

### IntegrationAwsOrgAgentlessScanningCredentials <a name="IntegrationAwsOrgAgentlessScanningCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationAwsOrgAgentlessScanningCredentials {
    string ExternalId,
    string RoleArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials.property.externalId">ExternalId</a></code> | <code>string</code> | The external id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials.property.roleArn">RoleArn</a></code> | <code>string</code> | The role arn. |

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

The external id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#external_id IntegrationAwsOrgAgentlessScanning#external_id}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The role arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#role_arn IntegrationAwsOrgAgentlessScanning#role_arn}

---

### IntegrationAwsOrgAgentlessScanningOrgAccountMappings <a name="IntegrationAwsOrgAgentlessScanningOrgAccountMappings" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationAwsOrgAgentlessScanningOrgAccountMappings {
    string DefaultLaceworkAccount,
    object Mapping
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings.property.defaultLaceworkAccount">DefaultLaceworkAccount</a></code> | <code>string</code> | The default Lacework account name where any non-mapped AWS account will appear. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings.property.mapping">Mapping</a></code> | <code>object</code> | mapping block. |

---

##### `DefaultLaceworkAccount`<sup>Required</sup> <a name="DefaultLaceworkAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings.property.defaultLaceworkAccount"></a>

```csharp
public string DefaultLaceworkAccount { get; set; }
```

- *Type:* string

The default Lacework account name where any non-mapped AWS account will appear.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#default_lacework_account IntegrationAwsOrgAgentlessScanning#default_lacework_account}

---

##### `Mapping`<sup>Required</sup> <a name="Mapping" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings.property.mapping"></a>

```csharp
public object Mapping { get; set; }
```

- *Type:* object

mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#mapping IntegrationAwsOrgAgentlessScanning#mapping}

---

### IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping <a name="IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping {
    string[] AwsAccounts,
    string LaceworkAccount
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping.property.awsAccounts">AwsAccounts</a></code> | <code>string[]</code> | The list of AWS account IDs to map. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping.property.laceworkAccount">LaceworkAccount</a></code> | <code>string</code> | The Lacework account name where the CloudTrail activity from the selected AWS accounts will appear. |

---

##### `AwsAccounts`<sup>Required</sup> <a name="AwsAccounts" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping.property.awsAccounts"></a>

```csharp
public string[] AwsAccounts { get; set; }
```

- *Type:* string[]

The list of AWS account IDs to map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#aws_accounts IntegrationAwsOrgAgentlessScanning#aws_accounts}

---

##### `LaceworkAccount`<sup>Required</sup> <a name="LaceworkAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping.property.laceworkAccount"></a>

```csharp
public string LaceworkAccount { get; set; }
```

- *Type:* string

The Lacework account name where the CloudTrail activity from the selected AWS accounts will appear.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#lacework_account IntegrationAwsOrgAgentlessScanning#lacework_account}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationAwsOrgAgentlessScanningCredentialsOutputReference <a name="IntegrationAwsOrgAgentlessScanningCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationAwsOrgAgentlessScanningCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.internalValue"></a>

```csharp
public IntegrationAwsOrgAgentlessScanningCredentials InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a>

---


### IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList <a name="IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.get"></a>

```csharp
private IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList <a name="IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.get"></a>

```csharp
private IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference <a name="IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.awsAccountsInput">AwsAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.laceworkAccountInput">LaceworkAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.awsAccounts">AwsAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.laceworkAccount">LaceworkAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsAccountsInput`<sup>Optional</sup> <a name="AwsAccountsInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.awsAccountsInput"></a>

```csharp
public string[] AwsAccountsInput { get; }
```

- *Type:* string[]

---

##### `LaceworkAccountInput`<sup>Optional</sup> <a name="LaceworkAccountInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.laceworkAccountInput"></a>

```csharp
public string LaceworkAccountInput { get; }
```

- *Type:* string

---

##### `AwsAccounts`<sup>Required</sup> <a name="AwsAccounts" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.awsAccounts"></a>

```csharp
public string[] AwsAccounts { get; }
```

- *Type:* string[]

---

##### `LaceworkAccount`<sup>Required</sup> <a name="LaceworkAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.laceworkAccount"></a>

```csharp
public string LaceworkAccount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference <a name="IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMapping` <a name="PutMapping" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.putMapping"></a>

```csharp
private void PutMapping(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.putMapping.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.mapping">Mapping</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.defaultLaceworkAccountInput">DefaultLaceworkAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.mappingInput">MappingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.defaultLaceworkAccount">DefaultLaceworkAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Mapping`<sup>Required</sup> <a name="Mapping" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.mapping"></a>

```csharp
public IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList Mapping { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList</a>

---

##### `DefaultLaceworkAccountInput`<sup>Optional</sup> <a name="DefaultLaceworkAccountInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.defaultLaceworkAccountInput"></a>

```csharp
public string DefaultLaceworkAccountInput { get; }
```

- *Type:* string

---

##### `MappingInput`<sup>Optional</sup> <a name="MappingInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.mappingInput"></a>

```csharp
public object MappingInput { get; }
```

- *Type:* object

---

##### `DefaultLaceworkAccount`<sup>Required</sup> <a name="DefaultLaceworkAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.defaultLaceworkAccount"></a>

```csharp
public string DefaultLaceworkAccount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



