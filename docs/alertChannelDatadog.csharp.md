# `lacework_alert_channel_datadog`

Refer to the Terraform Registory for docs: [`lacework_alert_channel_datadog`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_datadog).

# `alertChannelDatadog` Submodule <a name="`alertChannelDatadog` Submodule" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertChannelDatadog <a name="AlertChannelDatadog" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_datadog lacework_alert_channel_datadog}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new AlertChannelDatadog(Construct Scope, string Id, AlertChannelDatadogConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig">AlertChannelDatadogConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig">AlertChannelDatadogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.resetDatadogService">ResetDatadogService</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.resetDatadogSite">ResetDatadogSite</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.resetTestIntegration">ResetTestIntegration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDatadogService` <a name="ResetDatadogService" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.resetDatadogService"></a>

```csharp
private void ResetDatadogService()
```

##### `ResetDatadogSite` <a name="ResetDatadogSite" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.resetDatadogSite"></a>

```csharp
private void ResetDatadogSite()
```

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTestIntegration` <a name="ResetTestIntegration" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.resetTestIntegration"></a>

```csharp
private void ResetTestIntegration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

AlertChannelDatadog.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

AlertChannelDatadog.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

AlertChannelDatadog.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.createdOrUpdatedBy">CreatedOrUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.createdOrUpdatedTime">CreatedOrUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.intgGuid">IntgGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.orgLevel">OrgLevel</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.typeName">TypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.apiKeyInput">ApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.datadogServiceInput">DatadogServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.datadogSiteInput">DatadogSiteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.testIntegrationInput">TestIntegrationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.apiKey">ApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.datadogService">DatadogService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.datadogSite">DatadogSite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.testIntegration">TestIntegration</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedOrUpdatedBy`<sup>Required</sup> <a name="CreatedOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.createdOrUpdatedBy"></a>

```csharp
public string CreatedOrUpdatedBy { get; }
```

- *Type:* string

---

##### `CreatedOrUpdatedTime`<sup>Required</sup> <a name="CreatedOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.createdOrUpdatedTime"></a>

```csharp
public string CreatedOrUpdatedTime { get; }
```

- *Type:* string

---

##### `IntgGuid`<sup>Required</sup> <a name="IntgGuid" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.intgGuid"></a>

```csharp
public string IntgGuid { get; }
```

- *Type:* string

---

##### `OrgLevel`<sup>Required</sup> <a name="OrgLevel" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.orgLevel"></a>

```csharp
public IResolvable OrgLevel { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.typeName"></a>

```csharp
public string TypeName { get; }
```

- *Type:* string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.apiKeyInput"></a>

```csharp
public string ApiKeyInput { get; }
```

- *Type:* string

---

##### `DatadogServiceInput`<sup>Optional</sup> <a name="DatadogServiceInput" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.datadogServiceInput"></a>

```csharp
public string DatadogServiceInput { get; }
```

- *Type:* string

---

##### `DatadogSiteInput`<sup>Optional</sup> <a name="DatadogSiteInput" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.datadogSiteInput"></a>

```csharp
public string DatadogSiteInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TestIntegrationInput`<sup>Optional</sup> <a name="TestIntegrationInput" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.testIntegrationInput"></a>

```csharp
public object TestIntegrationInput { get; }
```

- *Type:* object

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.apiKey"></a>

```csharp
public string ApiKey { get; }
```

- *Type:* string

---

##### `DatadogService`<sup>Required</sup> <a name="DatadogService" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.datadogService"></a>

```csharp
public string DatadogService { get; }
```

- *Type:* string

---

##### `DatadogSite`<sup>Required</sup> <a name="DatadogSite" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.datadogSite"></a>

```csharp
public string DatadogSite { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TestIntegration`<sup>Required</sup> <a name="TestIntegration" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.testIntegration"></a>

```csharp
public object TestIntegration { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AlertChannelDatadogConfig <a name="AlertChannelDatadogConfig" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new AlertChannelDatadogConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApiKey,
    string Name,
    string DatadogService = null,
    string DatadogSite = null,
    object Enabled = null,
    string Id = null,
    object TestIntegration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.apiKey">ApiKey</a></code> | <code>string</code> | The Datadog api key required to submit metrics and events to Datadog. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.name">Name</a></code> | <code>string</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.datadogService">DatadogService</a></code> | <code>string</code> | The level of detail of logs or event stream. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.datadogSite">DatadogSite</a></code> | <code>string</code> | Where to store your logs, either the US or Europe. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.enabled">Enabled</a></code> | <code>object</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_datadog#id AlertChannelDatadog#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.testIntegration">TestIntegration</a></code> | <code>object</code> | Whether to test the integration of an alert channel upon creation and modifications. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.apiKey"></a>

```csharp
public string ApiKey { get; set; }
```

- *Type:* string

The Datadog api key required to submit metrics and events to Datadog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_datadog#api_key AlertChannelDatadog#api_key}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_datadog#name AlertChannelDatadog#name}

---

##### `DatadogService`<sup>Optional</sup> <a name="DatadogService" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.datadogService"></a>

```csharp
public string DatadogService { get; set; }
```

- *Type:* string

The level of detail of logs or event stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_datadog#datadog_service AlertChannelDatadog#datadog_service}

---

##### `DatadogSite`<sup>Optional</sup> <a name="DatadogSite" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.datadogSite"></a>

```csharp
public string DatadogSite { get; set; }
```

- *Type:* string

Where to store your logs, either the US or Europe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_datadog#datadog_site AlertChannelDatadog#datadog_site}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_datadog#enabled AlertChannelDatadog#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_datadog#id AlertChannelDatadog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TestIntegration`<sup>Optional</sup> <a name="TestIntegration" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.testIntegration"></a>

```csharp
public object TestIntegration { get; set; }
```

- *Type:* object

Whether to test the integration of an alert channel upon creation and modifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_datadog#test_integration AlertChannelDatadog#test_integration}

---



