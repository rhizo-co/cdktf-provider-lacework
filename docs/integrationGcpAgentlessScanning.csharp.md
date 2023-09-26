# `lacework_integration_gcp_agentless_scanning`

Refer to the Terraform Registory for docs: [`lacework_integration_gcp_agentless_scanning`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning).

# `integrationGcpAgentlessScanning` Submodule <a name="`integrationGcpAgentlessScanning` Submodule" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationGcpAgentlessScanning <a name="IntegrationGcpAgentlessScanning" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning lacework_integration_gcp_agentless_scanning}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationGcpAgentlessScanning(Construct Scope, string Id, IntegrationGcpAgentlessScanningConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig">IntegrationGcpAgentlessScanningConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCredentials` <a name="PutCredentials" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.putCredentials"></a>

```csharp
private void PutCredentials(IntegrationGcpAgentlessScanningCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetFilterList` <a name="ResetFilterList" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetFilterList"></a>

```csharp
private void ResetFilterList()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetQueryText` <a name="ResetQueryText" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetQueryText"></a>

```csharp
private void ResetQueryText()
```

##### `ResetResourceLevel` <a name="ResetResourceLevel" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetResourceLevel"></a>

```csharp
private void ResetResourceLevel()
```

##### `ResetRetries` <a name="ResetRetries" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetRetries"></a>

```csharp
private void ResetRetries()
```

##### `ResetScanContainers` <a name="ResetScanContainers" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanContainers"></a>

```csharp
private void ResetScanContainers()
```

##### `ResetScanFrequency` <a name="ResetScanFrequency" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanFrequency"></a>

```csharp
private void ResetScanFrequency()
```

##### `ResetScanHostVulnerabilities` <a name="ResetScanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanHostVulnerabilities"></a>

```csharp
private void ResetScanHostVulnerabilities()
```

##### `ResetScanMultiVolume` <a name="ResetScanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanMultiVolume"></a>

```csharp
private void ResetScanMultiVolume()
```

##### `ResetScanStoppedInstances` <a name="ResetScanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanStoppedInstances"></a>

```csharp
private void ResetScanStoppedInstances()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

IntegrationGcpAgentlessScanning.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

IntegrationGcpAgentlessScanning.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

IntegrationGcpAgentlessScanning.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.createdOrUpdatedBy">CreatedOrUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.createdOrUpdatedTime">CreatedOrUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference">IntegrationGcpAgentlessScanningCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.intgGuid">IntgGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.orgLevel">OrgLevel</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.serverToken">ServerToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.typeName">TypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.credentialsInput">CredentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.filterListInput">FilterListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.queryTextInput">QueryTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceLevelInput">ResourceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.retriesInput">RetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanContainersInput">ScanContainersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanFrequencyInput">ScanFrequencyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanHostVulnerabilitiesInput">ScanHostVulnerabilitiesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanMultiVolumeInput">ScanMultiVolumeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanningProjectIdInput">ScanningProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanStoppedInstancesInput">ScanStoppedInstancesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.filterList">FilterList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.queryText">QueryText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceLevel">ResourceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.retries">Retries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanContainers">ScanContainers</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanFrequency">ScanFrequency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanHostVulnerabilities">ScanHostVulnerabilities</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanMultiVolume">ScanMultiVolume</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanningProjectId">ScanningProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanStoppedInstances">ScanStoppedInstances</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedOrUpdatedBy`<sup>Required</sup> <a name="CreatedOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.createdOrUpdatedBy"></a>

```csharp
public string CreatedOrUpdatedBy { get; }
```

- *Type:* string

---

##### `CreatedOrUpdatedTime`<sup>Required</sup> <a name="CreatedOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.createdOrUpdatedTime"></a>

```csharp
public string CreatedOrUpdatedTime { get; }
```

- *Type:* string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.credentials"></a>

```csharp
public IntegrationGcpAgentlessScanningCredentialsOutputReference Credentials { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference">IntegrationGcpAgentlessScanningCredentialsOutputReference</a>

---

##### `IntgGuid`<sup>Required</sup> <a name="IntgGuid" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.intgGuid"></a>

```csharp
public string IntgGuid { get; }
```

- *Type:* string

---

##### `OrgLevel`<sup>Required</sup> <a name="OrgLevel" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.orgLevel"></a>

```csharp
public IResolvable OrgLevel { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ServerToken`<sup>Required</sup> <a name="ServerToken" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.serverToken"></a>

```csharp
public string ServerToken { get; }
```

- *Type:* string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.typeName"></a>

```csharp
public string TypeName { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.credentialsInput"></a>

```csharp
public IntegrationGcpAgentlessScanningCredentials CredentialsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `FilterListInput`<sup>Optional</sup> <a name="FilterListInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.filterListInput"></a>

```csharp
public string[] FilterListInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `QueryTextInput`<sup>Optional</sup> <a name="QueryTextInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.queryTextInput"></a>

```csharp
public string QueryTextInput { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `ResourceLevelInput`<sup>Optional</sup> <a name="ResourceLevelInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceLevelInput"></a>

```csharp
public string ResourceLevelInput { get; }
```

- *Type:* string

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.retriesInput"></a>

```csharp
public double RetriesInput { get; }
```

- *Type:* double

---

##### `ScanContainersInput`<sup>Optional</sup> <a name="ScanContainersInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanContainersInput"></a>

```csharp
public object ScanContainersInput { get; }
```

- *Type:* object

---

##### `ScanFrequencyInput`<sup>Optional</sup> <a name="ScanFrequencyInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanFrequencyInput"></a>

```csharp
public double ScanFrequencyInput { get; }
```

- *Type:* double

---

##### `ScanHostVulnerabilitiesInput`<sup>Optional</sup> <a name="ScanHostVulnerabilitiesInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanHostVulnerabilitiesInput"></a>

```csharp
public object ScanHostVulnerabilitiesInput { get; }
```

- *Type:* object

---

##### `ScanMultiVolumeInput`<sup>Optional</sup> <a name="ScanMultiVolumeInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanMultiVolumeInput"></a>

```csharp
public object ScanMultiVolumeInput { get; }
```

- *Type:* object

---

##### `ScanningProjectIdInput`<sup>Optional</sup> <a name="ScanningProjectIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanningProjectIdInput"></a>

```csharp
public string ScanningProjectIdInput { get; }
```

- *Type:* string

---

##### `ScanStoppedInstancesInput`<sup>Optional</sup> <a name="ScanStoppedInstancesInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanStoppedInstancesInput"></a>

```csharp
public object ScanStoppedInstancesInput { get; }
```

- *Type:* object

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `FilterList`<sup>Required</sup> <a name="FilterList" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.filterList"></a>

```csharp
public string[] FilterList { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `QueryText`<sup>Required</sup> <a name="QueryText" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.queryText"></a>

```csharp
public string QueryText { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceLevel`<sup>Required</sup> <a name="ResourceLevel" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceLevel"></a>

```csharp
public string ResourceLevel { get; }
```

- *Type:* string

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.retries"></a>

```csharp
public double Retries { get; }
```

- *Type:* double

---

##### `ScanContainers`<sup>Required</sup> <a name="ScanContainers" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanContainers"></a>

```csharp
public object ScanContainers { get; }
```

- *Type:* object

---

##### `ScanFrequency`<sup>Required</sup> <a name="ScanFrequency" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanFrequency"></a>

```csharp
public double ScanFrequency { get; }
```

- *Type:* double

---

##### `ScanHostVulnerabilities`<sup>Required</sup> <a name="ScanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanHostVulnerabilities"></a>

```csharp
public object ScanHostVulnerabilities { get; }
```

- *Type:* object

---

##### `ScanMultiVolume`<sup>Required</sup> <a name="ScanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanMultiVolume"></a>

```csharp
public object ScanMultiVolume { get; }
```

- *Type:* object

---

##### `ScanningProjectId`<sup>Required</sup> <a name="ScanningProjectId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanningProjectId"></a>

```csharp
public string ScanningProjectId { get; }
```

- *Type:* string

---

##### `ScanStoppedInstances`<sup>Required</sup> <a name="ScanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanStoppedInstances"></a>

```csharp
public object ScanStoppedInstances { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationGcpAgentlessScanningConfig <a name="IntegrationGcpAgentlessScanningConfig" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationGcpAgentlessScanningConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BucketName,
    IntegrationGcpAgentlessScanningCredentials Credentials,
    string Name,
    string ResourceId,
    string ScanningProjectId,
    object Enabled = null,
    string[] FilterList = null,
    string Id = null,
    string QueryText = null,
    string ResourceLevel = null,
    double Retries = null,
    object ScanContainers = null,
    double ScanFrequency = null,
    object ScanHostVulnerabilities = null,
    object ScanMultiVolume = null,
    object ScanStoppedInstances = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.bucketName">BucketName</a></code> | <code>string</code> | Bucket containing analysis results shared with Lacework platform. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.name">Name</a></code> | <code>string</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.resourceId">ResourceId</a></code> | <code>string</code> | Organization Id or Project Id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanningProjectId">ScanningProjectId</a></code> | <code>string</code> | Project ID where scanner is deployed. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.enabled">Enabled</a></code> | <code>object</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.filterList">FilterList</a></code> | <code>string[]</code> | List of Projects to specifically include/exclude. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#id IntegrationGcpAgentlessScanning#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.queryText">QueryText</a></code> | <code>string</code> | The LQL query text. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.resourceLevel">ResourceLevel</a></code> | <code>string</code> | Integration level - ORGANIZATION / PROJECT. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.retries">Retries</a></code> | <code>double</code> | The number of attempts to create the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanContainers">ScanContainers</a></code> | <code>object</code> | Whether to includes scanning for containers. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanFrequency">ScanFrequency</a></code> | <code>double</code> | How often in hours the scan will run in hours. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanHostVulnerabilities">ScanHostVulnerabilities</a></code> | <code>object</code> | Whether to includes scanning for host vulnerabilities. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanMultiVolume">ScanMultiVolume</a></code> | <code>object</code> | Whether to scan secondary volumes (true) or only root volumes (false). |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanStoppedInstances">ScanStoppedInstances</a></code> | <code>object</code> | Whether to scan stopped instances (true). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Bucket containing analysis results shared with Lacework platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#bucket_name IntegrationGcpAgentlessScanning#bucket_name}

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.credentials"></a>

```csharp
public IntegrationGcpAgentlessScanningCredentials Credentials { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#credentials IntegrationGcpAgentlessScanning#credentials}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#name IntegrationGcpAgentlessScanning#name}

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Organization Id or Project Id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#resource_id IntegrationGcpAgentlessScanning#resource_id}

---

##### `ScanningProjectId`<sup>Required</sup> <a name="ScanningProjectId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanningProjectId"></a>

```csharp
public string ScanningProjectId { get; set; }
```

- *Type:* string

Project ID where scanner is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scanning_project_id IntegrationGcpAgentlessScanning#scanning_project_id}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#enabled IntegrationGcpAgentlessScanning#enabled}

---

##### `FilterList`<sup>Optional</sup> <a name="FilterList" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.filterList"></a>

```csharp
public string[] FilterList { get; set; }
```

- *Type:* string[]

List of Projects to specifically include/exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#filter_list IntegrationGcpAgentlessScanning#filter_list}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#id IntegrationGcpAgentlessScanning#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `QueryText`<sup>Optional</sup> <a name="QueryText" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.queryText"></a>

```csharp
public string QueryText { get; set; }
```

- *Type:* string

The LQL query text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#query_text IntegrationGcpAgentlessScanning#query_text}

---

##### `ResourceLevel`<sup>Optional</sup> <a name="ResourceLevel" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.resourceLevel"></a>

```csharp
public string ResourceLevel { get; set; }
```

- *Type:* string

Integration level - ORGANIZATION / PROJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#resource_level IntegrationGcpAgentlessScanning#resource_level}

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.retries"></a>

```csharp
public double Retries { get; set; }
```

- *Type:* double

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#retries IntegrationGcpAgentlessScanning#retries}

---

##### `ScanContainers`<sup>Optional</sup> <a name="ScanContainers" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanContainers"></a>

```csharp
public object ScanContainers { get; set; }
```

- *Type:* object

Whether to includes scanning for containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_containers IntegrationGcpAgentlessScanning#scan_containers}

---

##### `ScanFrequency`<sup>Optional</sup> <a name="ScanFrequency" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanFrequency"></a>

```csharp
public double ScanFrequency { get; set; }
```

- *Type:* double

How often in hours the scan will run in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_frequency IntegrationGcpAgentlessScanning#scan_frequency}

---

##### `ScanHostVulnerabilities`<sup>Optional</sup> <a name="ScanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanHostVulnerabilities"></a>

```csharp
public object ScanHostVulnerabilities { get; set; }
```

- *Type:* object

Whether to includes scanning for host vulnerabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_host_vulnerabilities IntegrationGcpAgentlessScanning#scan_host_vulnerabilities}

---

##### `ScanMultiVolume`<sup>Optional</sup> <a name="ScanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanMultiVolume"></a>

```csharp
public object ScanMultiVolume { get; set; }
```

- *Type:* object

Whether to scan secondary volumes (true) or only root volumes (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_multi_volume IntegrationGcpAgentlessScanning#scan_multi_volume}

---

##### `ScanStoppedInstances`<sup>Optional</sup> <a name="ScanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanStoppedInstances"></a>

```csharp
public object ScanStoppedInstances { get; set; }
```

- *Type:* object

Whether to scan stopped instances (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_stopped_instances IntegrationGcpAgentlessScanning#scan_stopped_instances}

---

### IntegrationGcpAgentlessScanningCredentials <a name="IntegrationGcpAgentlessScanningCredentials" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationGcpAgentlessScanningCredentials {
    string ClientEmail,
    string ClientId,
    string PrivateKey,
    string PrivateKeyId,
    string TokenUri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.clientEmail">ClientEmail</a></code> | <code>string</code> | Client email from credentials file. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.clientId">ClientId</a></code> | <code>string</code> | Client Id from credentials file. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.privateKey">PrivateKey</a></code> | <code>string</code> | Private Key from credentials file. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.privateKeyId">PrivateKeyId</a></code> | <code>string</code> | Private Key Id from credentials file. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.tokenUri">TokenUri</a></code> | <code>string</code> | Token URI from credentials file. |

---

##### `ClientEmail`<sup>Required</sup> <a name="ClientEmail" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.clientEmail"></a>

```csharp
public string ClientEmail { get; set; }
```

- *Type:* string

Client email from credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#client_email IntegrationGcpAgentlessScanning#client_email}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Client Id from credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#client_id IntegrationGcpAgentlessScanning#client_id}

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.privateKey"></a>

```csharp
public string PrivateKey { get; set; }
```

- *Type:* string

Private Key from credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#private_key IntegrationGcpAgentlessScanning#private_key}

---

##### `PrivateKeyId`<sup>Required</sup> <a name="PrivateKeyId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.privateKeyId"></a>

```csharp
public string PrivateKeyId { get; set; }
```

- *Type:* string

Private Key Id from credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#private_key_id IntegrationGcpAgentlessScanning#private_key_id}

---

##### `TokenUri`<sup>Optional</sup> <a name="TokenUri" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.tokenUri"></a>

```csharp
public string TokenUri { get; set; }
```

- *Type:* string

Token URI from credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#token_uri IntegrationGcpAgentlessScanning#token_uri}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationGcpAgentlessScanningCredentialsOutputReference <a name="IntegrationGcpAgentlessScanningCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationGcpAgentlessScanningCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTokenUri` <a name="ResetTokenUri" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.resetTokenUri"></a>

```csharp
private void ResetTokenUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientEmailInput">ClientEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKeyIdInput">PrivateKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.tokenUriInput">TokenUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientEmail">ClientEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKeyId">PrivateKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.tokenUri">TokenUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientEmailInput`<sup>Optional</sup> <a name="ClientEmailInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientEmailInput"></a>

```csharp
public string ClientEmailInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `PrivateKeyIdInput`<sup>Optional</sup> <a name="PrivateKeyIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKeyIdInput"></a>

```csharp
public string PrivateKeyIdInput { get; }
```

- *Type:* string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKeyInput"></a>

```csharp
public string PrivateKeyInput { get; }
```

- *Type:* string

---

##### `TokenUriInput`<sup>Optional</sup> <a name="TokenUriInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.tokenUriInput"></a>

```csharp
public string TokenUriInput { get; }
```

- *Type:* string

---

##### `ClientEmail`<sup>Required</sup> <a name="ClientEmail" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientEmail"></a>

```csharp
public string ClientEmail { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `PrivateKeyId`<sup>Required</sup> <a name="PrivateKeyId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKeyId"></a>

```csharp
public string PrivateKeyId { get; }
```

- *Type:* string

---

##### `TokenUri`<sup>Required</sup> <a name="TokenUri" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.tokenUri"></a>

```csharp
public string TokenUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.internalValue"></a>

```csharp
public IntegrationGcpAgentlessScanningCredentials InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a>

---



