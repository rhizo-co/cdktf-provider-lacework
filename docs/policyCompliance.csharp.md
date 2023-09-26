# `lacework_policy_compliance`

Refer to the Terraform Registory for docs: [`lacework_policy_compliance`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance).

# `policyCompliance` Submodule <a name="`policyCompliance` Submodule" id="rhizo-co-terraform-provider-lacework.policyCompliance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyCompliance <a name="PolicyCompliance" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance lacework_policy_compliance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new PolicyCompliance(Construct Scope, string Id, PolicyComplianceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig">PolicyComplianceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig">PolicyComplianceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetAlertingEnabled">ResetAlertingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetPolicyIdSuffix">ResetPolicyIdSuffix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetRemediation">ResetRemediation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAlertingEnabled` <a name="ResetAlertingEnabled" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetAlertingEnabled"></a>

```csharp
private void ResetAlertingEnabled()
```

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetPolicyIdSuffix` <a name="ResetPolicyIdSuffix" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetPolicyIdSuffix"></a>

```csharp
private void ResetPolicyIdSuffix()
```

##### `ResetRemediation` <a name="ResetRemediation" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetRemediation"></a>

```csharp
private void ResetRemediation()
```

##### `ResetTags` <a name="ResetTags" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

PolicyCompliance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

PolicyCompliance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

PolicyCompliance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.computedTags">ComputedTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.updatedTime">UpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.alertingEnabledInput">AlertingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.policyIdSuffixInput">PolicyIdSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.queryIdInput">QueryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.remediationInput">RemediationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.severityInput">SeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.alertingEnabled">AlertingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.policyIdSuffix">PolicyIdSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.queryId">QueryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.remediation">Remediation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.title">Title</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ComputedTags`<sup>Required</sup> <a name="ComputedTags" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.computedTags"></a>

```csharp
public string ComputedTags { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; }
```

- *Type:* string

---

##### `UpdatedTime`<sup>Required</sup> <a name="UpdatedTime" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.updatedTime"></a>

```csharp
public string UpdatedTime { get; }
```

- *Type:* string

---

##### `AlertingEnabledInput`<sup>Optional</sup> <a name="AlertingEnabledInput" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.alertingEnabledInput"></a>

```csharp
public object AlertingEnabledInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `PolicyIdSuffixInput`<sup>Optional</sup> <a name="PolicyIdSuffixInput" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.policyIdSuffixInput"></a>

```csharp
public string PolicyIdSuffixInput { get; }
```

- *Type:* string

---

##### `QueryIdInput`<sup>Optional</sup> <a name="QueryIdInput" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.queryIdInput"></a>

```csharp
public string QueryIdInput { get; }
```

- *Type:* string

---

##### `RemediationInput`<sup>Optional</sup> <a name="RemediationInput" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.remediationInput"></a>

```csharp
public string RemediationInput { get; }
```

- *Type:* string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.severityInput"></a>

```csharp
public string SeverityInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `AlertingEnabled`<sup>Required</sup> <a name="AlertingEnabled" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.alertingEnabled"></a>

```csharp
public object AlertingEnabled { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `PolicyIdSuffix`<sup>Required</sup> <a name="PolicyIdSuffix" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.policyIdSuffix"></a>

```csharp
public string PolicyIdSuffix { get; }
```

- *Type:* string

---

##### `QueryId`<sup>Required</sup> <a name="QueryId" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.queryId"></a>

```csharp
public string QueryId { get; }
```

- *Type:* string

---

##### `Remediation`<sup>Required</sup> <a name="Remediation" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.remediation"></a>

```csharp
public string Remediation { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `Title`<sup>Required</sup> <a name="Title" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyComplianceConfig <a name="PolicyComplianceConfig" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new PolicyComplianceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Description,
    string QueryId,
    string Severity,
    string Title,
    object AlertingEnabled = null,
    object Enabled = null,
    string PolicyIdSuffix = null,
    string Remediation = null,
    string[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.description">Description</a></code> | <code>string</code> | The description of the query. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.queryId">QueryId</a></code> | <code>string</code> | The id of the query. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.severity">Severity</a></code> | <code>string</code> | The severity for the policy. Valid severities are: Critical, High, Medium, Low, Info. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.title">Title</a></code> | <code>string</code> | The title of the policy. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.alertingEnabled">AlertingEnabled</a></code> | <code>object</code> | Whether alerting is enabled or disabled. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.enabled">Enabled</a></code> | <code>object</code> | The state of the policy. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.policyIdSuffix">PolicyIdSuffix</a></code> | <code>string</code> | The string appended to the end of the policy id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.remediation">Remediation</a></code> | <code>string</code> | The remediation message to display. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.tags">Tags</a></code> | <code>string[]</code> | A list of user specified policy tags. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#description PolicyCompliance#description}

---

##### `QueryId`<sup>Required</sup> <a name="QueryId" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.queryId"></a>

```csharp
public string QueryId { get; set; }
```

- *Type:* string

The id of the query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#query_id PolicyCompliance#query_id}

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.severity"></a>

```csharp
public string Severity { get; set; }
```

- *Type:* string

The severity for the policy. Valid severities are: Critical, High, Medium, Low, Info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#severity PolicyCompliance#severity}

---

##### `Title`<sup>Required</sup> <a name="Title" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

The title of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#title PolicyCompliance#title}

---

##### `AlertingEnabled`<sup>Optional</sup> <a name="AlertingEnabled" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.alertingEnabled"></a>

```csharp
public object AlertingEnabled { get; set; }
```

- *Type:* object

Whether alerting is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#alerting_enabled PolicyCompliance#alerting_enabled}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

The state of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#enabled PolicyCompliance#enabled}

---

##### `PolicyIdSuffix`<sup>Optional</sup> <a name="PolicyIdSuffix" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.policyIdSuffix"></a>

```csharp
public string PolicyIdSuffix { get; set; }
```

- *Type:* string

The string appended to the end of the policy id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#policy_id_suffix PolicyCompliance#policy_id_suffix}

---

##### `Remediation`<sup>Optional</sup> <a name="Remediation" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.remediation"></a>

```csharp
public string Remediation { get; set; }
```

- *Type:* string

The remediation message to display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#remediation PolicyCompliance#remediation}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

A list of user specified policy tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#tags PolicyCompliance#tags}

---



