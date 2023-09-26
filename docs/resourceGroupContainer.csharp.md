# `lacework_resource_group_container`

Refer to the Terraform Registory for docs: [`lacework_resource_group_container`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/resource_group_container).

# `resourceGroupContainer` Submodule <a name="`resourceGroupContainer` Submodule" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceGroupContainer <a name="ResourceGroupContainer" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/resource_group_container lacework_resource_group_container}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new ResourceGroupContainer(Construct Scope, string Id, ResourceGroupContainerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerConfig">ResourceGroupContainerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerConfig">ResourceGroupContainerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.putContainerLabels">PutContainerLabels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutContainerLabels` <a name="PutContainerLabels" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.putContainerLabels"></a>

```csharp
private void PutContainerLabels(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.putContainerLabels.parameter.value"></a>

- *Type:* object

---

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

ResourceGroupContainer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

ResourceGroupContainer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

ResourceGroupContainer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.containerLabels">ContainerLabels</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsList">ResourceGroupContainerContainerLabelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.isDefault">IsDefault</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.laceworkAccountId">LaceworkAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.lastUpdated">LastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.containerLabelsInput">ContainerLabelsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.containerTagsInput">ContainerTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.containerTags">ContainerTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ContainerLabels`<sup>Required</sup> <a name="ContainerLabels" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.containerLabels"></a>

```csharp
public ResourceGroupContainerContainerLabelsList ContainerLabels { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsList">ResourceGroupContainerContainerLabelsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.isDefault"></a>

```csharp
public IResolvable IsDefault { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LaceworkAccountId`<sup>Required</sup> <a name="LaceworkAccountId" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.laceworkAccountId"></a>

```csharp
public string LaceworkAccountId { get; }
```

- *Type:* string

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.lastUpdated"></a>

```csharp
public string LastUpdated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; }
```

- *Type:* string

---

##### `ContainerLabelsInput`<sup>Optional</sup> <a name="ContainerLabelsInput" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.containerLabelsInput"></a>

```csharp
public object ContainerLabelsInput { get; }
```

- *Type:* object

---

##### `ContainerTagsInput`<sup>Optional</sup> <a name="ContainerTagsInput" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.containerTagsInput"></a>

```csharp
public string[] ContainerTagsInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ContainerTags`<sup>Required</sup> <a name="ContainerTags" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.containerTags"></a>

```csharp
public string[] ContainerTags { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceGroupContainerConfig <a name="ResourceGroupContainerConfig" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new ResourceGroupContainerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object ContainerLabels,
    string[] ContainerTags,
    string Name,
    string Description = null,
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerConfig.property.containerLabels">ContainerLabels</a></code> | <code>object</code> | container_labels block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerConfig.property.containerTags">ContainerTags</a></code> | <code>string[]</code> | The list of containers tags to include in the resource group. |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerConfig.property.name">Name</a></code> | <code>string</code> | The resource group name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerConfig.property.description">Description</a></code> | <code>string</code> | The description of the resource group. |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerConfig.property.enabled">Enabled</a></code> | <code>object</code> | The state of the resource group. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ContainerLabels`<sup>Required</sup> <a name="ContainerLabels" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerConfig.property.containerLabels"></a>

```csharp
public object ContainerLabels { get; set; }
```

- *Type:* object

container_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/resource_group_container#container_labels ResourceGroupContainer#container_labels}

---

##### `ContainerTags`<sup>Required</sup> <a name="ContainerTags" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerConfig.property.containerTags"></a>

```csharp
public string[] ContainerTags { get; set; }
```

- *Type:* string[]

The list of containers tags to include in the resource group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/resource_group_container#container_tags ResourceGroupContainer#container_tags}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/resource_group_container#name ResourceGroupContainer#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the resource group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/resource_group_container#description ResourceGroupContainer#description}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

The state of the resource group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/resource_group_container#enabled ResourceGroupContainer#enabled}

---

### ResourceGroupContainerContainerLabels <a name="ResourceGroupContainerContainerLabels" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new ResourceGroupContainerContainerLabels {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabels.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/resource_group_container#key ResourceGroupContainer#key}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabels.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/resource_group_container#value ResourceGroupContainer#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabels.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/resource_group_container#key ResourceGroupContainer#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabels.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/resource_group_container#value ResourceGroupContainer#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceGroupContainerContainerLabelsList <a name="ResourceGroupContainerContainerLabelsList" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new ResourceGroupContainerContainerLabelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsList.get"></a>

```csharp
private ResourceGroupContainerContainerLabelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ResourceGroupContainerContainerLabelsOutputReference <a name="ResourceGroupContainerContainerLabelsOutputReference" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new ResourceGroupContainerContainerLabelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.resourceGroupContainer.ResourceGroupContainerContainerLabelsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



