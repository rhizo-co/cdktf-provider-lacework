# `lacework_integration_ecr`

Refer to the Terraform Registory for docs: [`lacework_integration_ecr`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr).

# `integrationEcr` Submodule <a name="`integrationEcr` Submodule" id="rhizo-co-terraform-provider-lacework.integrationEcr"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationEcr <a name="IntegrationEcr" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr lacework_integration_ecr}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationEcr(Construct Scope, string Id, IntegrationEcrConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig">IntegrationEcrConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig">IntegrationEcrConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.putLimitByLabel">PutLimitByLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.resetLimitByLabel">ResetLimitByLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.resetLimitByRepositories">ResetLimitByRepositories</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.resetLimitByTags">ResetLimitByTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.resetLimitNumImgs">ResetLimitNumImgs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.resetNonOsPackageSupport">ResetNonOsPackageSupport</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCredentials` <a name="PutCredentials" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.putCredentials"></a>

```csharp
private void PutCredentials(IntegrationEcrCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentials">IntegrationEcrCredentials</a>

---

##### `PutLimitByLabel` <a name="PutLimitByLabel" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.putLimitByLabel"></a>

```csharp
private void PutLimitByLabel(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.putLimitByLabel.parameter.value"></a>

- *Type:* object

---

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLimitByLabel` <a name="ResetLimitByLabel" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.resetLimitByLabel"></a>

```csharp
private void ResetLimitByLabel()
```

##### `ResetLimitByRepositories` <a name="ResetLimitByRepositories" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.resetLimitByRepositories"></a>

```csharp
private void ResetLimitByRepositories()
```

##### `ResetLimitByTags` <a name="ResetLimitByTags" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.resetLimitByTags"></a>

```csharp
private void ResetLimitByTags()
```

##### `ResetLimitNumImgs` <a name="ResetLimitNumImgs" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.resetLimitNumImgs"></a>

```csharp
private void ResetLimitNumImgs()
```

##### `ResetNonOsPackageSupport` <a name="ResetNonOsPackageSupport" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.resetNonOsPackageSupport"></a>

```csharp
private void ResetNonOsPackageSupport()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

IntegrationEcr.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

IntegrationEcr.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

IntegrationEcr.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.awsAuthType">AwsAuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.createdOrUpdatedBy">CreatedOrUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.createdOrUpdatedTime">CreatedOrUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference">IntegrationEcrCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.intgGuid">IntgGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.limitByLabel">LimitByLabel</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelList">IntegrationEcrLimitByLabelList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.orgLevel">OrgLevel</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.typeName">TypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.credentialsInput">CredentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentials">IntegrationEcrCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.limitByLabelInput">LimitByLabelInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.limitByRepositoriesInput">LimitByRepositoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.limitByTagsInput">LimitByTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.limitNumImgsInput">LimitNumImgsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.nonOsPackageSupportInput">NonOsPackageSupportInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.registryDomainInput">RegistryDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.limitByRepositories">LimitByRepositories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.limitByTags">LimitByTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.limitNumImgs">LimitNumImgs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.nonOsPackageSupport">NonOsPackageSupport</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.registryDomain">RegistryDomain</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AwsAuthType`<sup>Required</sup> <a name="AwsAuthType" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.awsAuthType"></a>

```csharp
public string AwsAuthType { get; }
```

- *Type:* string

---

##### `CreatedOrUpdatedBy`<sup>Required</sup> <a name="CreatedOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.createdOrUpdatedBy"></a>

```csharp
public string CreatedOrUpdatedBy { get; }
```

- *Type:* string

---

##### `CreatedOrUpdatedTime`<sup>Required</sup> <a name="CreatedOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.createdOrUpdatedTime"></a>

```csharp
public string CreatedOrUpdatedTime { get; }
```

- *Type:* string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.credentials"></a>

```csharp
public IntegrationEcrCredentialsOutputReference Credentials { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference">IntegrationEcrCredentialsOutputReference</a>

---

##### `IntgGuid`<sup>Required</sup> <a name="IntgGuid" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.intgGuid"></a>

```csharp
public string IntgGuid { get; }
```

- *Type:* string

---

##### `LimitByLabel`<sup>Required</sup> <a name="LimitByLabel" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.limitByLabel"></a>

```csharp
public IntegrationEcrLimitByLabelList LimitByLabel { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelList">IntegrationEcrLimitByLabelList</a>

---

##### `OrgLevel`<sup>Required</sup> <a name="OrgLevel" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.orgLevel"></a>

```csharp
public IResolvable OrgLevel { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.typeName"></a>

```csharp
public string TypeName { get; }
```

- *Type:* string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.credentialsInput"></a>

```csharp
public IntegrationEcrCredentials CredentialsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentials">IntegrationEcrCredentials</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LimitByLabelInput`<sup>Optional</sup> <a name="LimitByLabelInput" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.limitByLabelInput"></a>

```csharp
public object LimitByLabelInput { get; }
```

- *Type:* object

---

##### `LimitByRepositoriesInput`<sup>Optional</sup> <a name="LimitByRepositoriesInput" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.limitByRepositoriesInput"></a>

```csharp
public string[] LimitByRepositoriesInput { get; }
```

- *Type:* string[]

---

##### `LimitByTagsInput`<sup>Optional</sup> <a name="LimitByTagsInput" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.limitByTagsInput"></a>

```csharp
public string[] LimitByTagsInput { get; }
```

- *Type:* string[]

---

##### `LimitNumImgsInput`<sup>Optional</sup> <a name="LimitNumImgsInput" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.limitNumImgsInput"></a>

```csharp
public double LimitNumImgsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NonOsPackageSupportInput`<sup>Optional</sup> <a name="NonOsPackageSupportInput" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.nonOsPackageSupportInput"></a>

```csharp
public object NonOsPackageSupportInput { get; }
```

- *Type:* object

---

##### `RegistryDomainInput`<sup>Optional</sup> <a name="RegistryDomainInput" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.registryDomainInput"></a>

```csharp
public string RegistryDomainInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LimitByRepositories`<sup>Required</sup> <a name="LimitByRepositories" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.limitByRepositories"></a>

```csharp
public string[] LimitByRepositories { get; }
```

- *Type:* string[]

---

##### `LimitByTags`<sup>Required</sup> <a name="LimitByTags" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.limitByTags"></a>

```csharp
public string[] LimitByTags { get; }
```

- *Type:* string[]

---

##### `LimitNumImgs`<sup>Required</sup> <a name="LimitNumImgs" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.limitNumImgs"></a>

```csharp
public double LimitNumImgs { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NonOsPackageSupport`<sup>Required</sup> <a name="NonOsPackageSupport" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.nonOsPackageSupport"></a>

```csharp
public object NonOsPackageSupport { get; }
```

- *Type:* object

---

##### `RegistryDomain`<sup>Required</sup> <a name="RegistryDomain" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.registryDomain"></a>

```csharp
public string RegistryDomain { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcr.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationEcrConfig <a name="IntegrationEcrConfig" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationEcrConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    IntegrationEcrCredentials Credentials,
    string Name,
    string RegistryDomain,
    object Enabled = null,
    string Id = null,
    object LimitByLabel = null,
    string[] LimitByRepositories = null,
    string[] LimitByTags = null,
    double LimitNumImgs = null,
    object NonOsPackageSupport = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentials">IntegrationEcrCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.name">Name</a></code> | <code>string</code> | The ECR integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.registryDomain">RegistryDomain</a></code> | <code>string</code> | The Amazon Container Registry (ECR) domain. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.enabled">Enabled</a></code> | <code>object</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#id IntegrationEcr#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.limitByLabel">LimitByLabel</a></code> | <code>object</code> | limit_by_label block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.limitByRepositories">LimitByRepositories</a></code> | <code>string[]</code> | A list of repositories to assess. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.limitByTags">LimitByTags</a></code> | <code>string[]</code> | A list of image tags to limit the assessment of images with matching tags. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.limitNumImgs">LimitNumImgs</a></code> | <code>double</code> | The maximum number of newest container images to assess per repository. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.nonOsPackageSupport">NonOsPackageSupport</a></code> | <code>object</code> | Enable program language scanning. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.credentials"></a>

```csharp
public IntegrationEcrCredentials Credentials { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentials">IntegrationEcrCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#credentials IntegrationEcr#credentials}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The ECR integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#name IntegrationEcr#name}

---

##### `RegistryDomain`<sup>Required</sup> <a name="RegistryDomain" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.registryDomain"></a>

```csharp
public string RegistryDomain { get; set; }
```

- *Type:* string

The Amazon Container Registry (ECR) domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#registry_domain IntegrationEcr#registry_domain}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#enabled IntegrationEcr#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#id IntegrationEcr#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LimitByLabel`<sup>Optional</sup> <a name="LimitByLabel" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.limitByLabel"></a>

```csharp
public object LimitByLabel { get; set; }
```

- *Type:* object

limit_by_label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#limit_by_label IntegrationEcr#limit_by_label}

---

##### `LimitByRepositories`<sup>Optional</sup> <a name="LimitByRepositories" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.limitByRepositories"></a>

```csharp
public string[] LimitByRepositories { get; set; }
```

- *Type:* string[]

A list of repositories to assess.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#limit_by_repositories IntegrationEcr#limit_by_repositories}

---

##### `LimitByTags`<sup>Optional</sup> <a name="LimitByTags" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.limitByTags"></a>

```csharp
public string[] LimitByTags { get; set; }
```

- *Type:* string[]

A list of image tags to limit the assessment of images with matching tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#limit_by_tags IntegrationEcr#limit_by_tags}

---

##### `LimitNumImgs`<sup>Optional</sup> <a name="LimitNumImgs" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.limitNumImgs"></a>

```csharp
public double LimitNumImgs { get; set; }
```

- *Type:* double

The maximum number of newest container images to assess per repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#limit_num_imgs IntegrationEcr#limit_num_imgs}

---

##### `NonOsPackageSupport`<sup>Optional</sup> <a name="NonOsPackageSupport" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrConfig.property.nonOsPackageSupport"></a>

```csharp
public object NonOsPackageSupport { get; set; }
```

- *Type:* object

Enable program language scanning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#non_os_package_support IntegrationEcr#non_os_package_support}

---

### IntegrationEcrCredentials <a name="IntegrationEcrCredentials" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationEcrCredentials {
    string AccessKeyId = null,
    string ExternalId = null,
    string RoleArn = null,
    string SecretAccessKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentials.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | The AWS access key ID for an AWS IAM user that permissions to access the Amazon Container Registry. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentials.property.externalId">ExternalId</a></code> | <code>string</code> | The external ID for the IAM role. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentials.property.roleArn">RoleArn</a></code> | <code>string</code> | The ARN of the IAM role with permissions to access the Amazon Container Registry. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentials.property.secretAccessKey">SecretAccessKey</a></code> | <code>string</code> | The AWS secret key for the specified AWS access key. |

---

##### `AccessKeyId`<sup>Optional</sup> <a name="AccessKeyId" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentials.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; set; }
```

- *Type:* string

The AWS access key ID for an AWS IAM user that permissions to access the Amazon Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#access_key_id IntegrationEcr#access_key_id}

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentials.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

The external ID for the IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#external_id IntegrationEcr#external_id}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentials.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The ARN of the IAM role with permissions to access the Amazon Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#role_arn IntegrationEcr#role_arn}

---

##### `SecretAccessKey`<sup>Optional</sup> <a name="SecretAccessKey" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentials.property.secretAccessKey"></a>

```csharp
public string SecretAccessKey { get; set; }
```

- *Type:* string

The AWS secret key for the specified AWS access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#secret_access_key IntegrationEcr#secret_access_key}

---

### IntegrationEcrLimitByLabel <a name="IntegrationEcrLimitByLabel" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabel"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationEcrLimitByLabel {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabel.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#key IntegrationEcr#key}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabel.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#value IntegrationEcr#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabel.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#key IntegrationEcr#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabel.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#value IntegrationEcr#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationEcrCredentialsOutputReference <a name="IntegrationEcrCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationEcrCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.resetAccessKeyId">ResetAccessKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.resetSecretAccessKey">ResetSecretAccessKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessKeyId` <a name="ResetAccessKeyId" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.resetAccessKeyId"></a>

```csharp
private void ResetAccessKeyId()
```

##### `ResetExternalId` <a name="ResetExternalId" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.resetExternalId"></a>

```csharp
private void ResetExternalId()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetSecretAccessKey` <a name="ResetSecretAccessKey" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.resetSecretAccessKey"></a>

```csharp
private void ResetSecretAccessKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.property.secretAccessKeyInput">SecretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.property.secretAccessKey">SecretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentials">IntegrationEcrCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.property.accessKeyIdInput"></a>

```csharp
public string AccessKeyIdInput { get; }
```

- *Type:* string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `SecretAccessKeyInput`<sup>Optional</sup> <a name="SecretAccessKeyInput" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.property.secretAccessKeyInput"></a>

```csharp
public string SecretAccessKeyInput { get; }
```

- *Type:* string

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.property.secretAccessKey"></a>

```csharp
public string SecretAccessKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentialsOutputReference.property.internalValue"></a>

```csharp
public IntegrationEcrCredentials InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrCredentials">IntegrationEcrCredentials</a>

---


### IntegrationEcrLimitByLabelList <a name="IntegrationEcrLimitByLabelList" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationEcrLimitByLabelList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelList.get"></a>

```csharp
private IntegrationEcrLimitByLabelOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IntegrationEcrLimitByLabelOutputReference <a name="IntegrationEcrLimitByLabelOutputReference" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationEcrLimitByLabelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.integrationEcr.IntegrationEcrLimitByLabelOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



