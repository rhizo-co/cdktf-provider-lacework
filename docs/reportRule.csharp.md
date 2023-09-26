# `lacework_report_rule`

Refer to the Terraform Registory for docs: [`lacework_report_rule`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule).

# `reportRule` Submodule <a name="`reportRule` Submodule" id="rhizo-co-terraform-provider-lacework.reportRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ReportRule <a name="ReportRule" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule lacework_report_rule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new ReportRule(Construct Scope, string Id, ReportRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig">ReportRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig">ReportRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAwsComplianceReports">PutAwsComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAzureComplianceReports">PutAzureComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putDailyComplianceReports">PutDailyComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putGcpComplianceReports">PutGcpComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetAwsComplianceReports">ResetAwsComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetAzureComplianceReports">ResetAzureComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetDailyComplianceReports">ResetDailyComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetGcpComplianceReports">ResetGcpComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetWeeklySnapshot">ResetWeeklySnapshot</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAwsComplianceReports` <a name="PutAwsComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAwsComplianceReports"></a>

```csharp
private void PutAwsComplianceReports(ReportRuleAwsComplianceReports Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAwsComplianceReports.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a>

---

##### `PutAzureComplianceReports` <a name="PutAzureComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAzureComplianceReports"></a>

```csharp
private void PutAzureComplianceReports(ReportRuleAzureComplianceReports Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAzureComplianceReports.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a>

---

##### `PutDailyComplianceReports` <a name="PutDailyComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putDailyComplianceReports"></a>

```csharp
private void PutDailyComplianceReports(ReportRuleDailyComplianceReports Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putDailyComplianceReports.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a>

---

##### `PutGcpComplianceReports` <a name="PutGcpComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putGcpComplianceReports"></a>

```csharp
private void PutGcpComplianceReports(ReportRuleGcpComplianceReports Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putGcpComplianceReports.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a>

---

##### `ResetAwsComplianceReports` <a name="ResetAwsComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetAwsComplianceReports"></a>

```csharp
private void ResetAwsComplianceReports()
```

##### `ResetAzureComplianceReports` <a name="ResetAzureComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetAzureComplianceReports"></a>

```csharp
private void ResetAzureComplianceReports()
```

##### `ResetDailyComplianceReports` <a name="ResetDailyComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetDailyComplianceReports"></a>

```csharp
private void ResetDailyComplianceReports()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetGcpComplianceReports` <a name="ResetGcpComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetGcpComplianceReports"></a>

```csharp
private void ResetGcpComplianceReports()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```

##### `ResetWeeklySnapshot` <a name="ResetWeeklySnapshot" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetWeeklySnapshot"></a>

```csharp
private void ResetWeeklySnapshot()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

ReportRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

ReportRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

ReportRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.awsComplianceReports">AwsComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference">ReportRuleAwsComplianceReportsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.azureComplianceReports">AzureComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference">ReportRuleAzureComplianceReportsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.createdOrUpdatedBy">CreatedOrUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.createdOrUpdatedTime">CreatedOrUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.dailyComplianceReports">DailyComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference">ReportRuleDailyComplianceReportsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.gcpComplianceReports">GcpComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference">ReportRuleGcpComplianceReportsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.guid">Guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.awsComplianceReportsInput">AwsComplianceReportsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.azureComplianceReportsInput">AzureComplianceReportsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.dailyComplianceReportsInput">DailyComplianceReportsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.emailAlertChannelsInput">EmailAlertChannelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.gcpComplianceReportsInput">GcpComplianceReportsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.severitiesInput">SeveritiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.weeklySnapshotInput">WeeklySnapshotInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.emailAlertChannels">EmailAlertChannels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.severities">Severities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.weeklySnapshot">WeeklySnapshot</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AwsComplianceReports`<sup>Required</sup> <a name="AwsComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.awsComplianceReports"></a>

```csharp
public ReportRuleAwsComplianceReportsOutputReference AwsComplianceReports { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference">ReportRuleAwsComplianceReportsOutputReference</a>

---

##### `AzureComplianceReports`<sup>Required</sup> <a name="AzureComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.azureComplianceReports"></a>

```csharp
public ReportRuleAzureComplianceReportsOutputReference AzureComplianceReports { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference">ReportRuleAzureComplianceReportsOutputReference</a>

---

##### `CreatedOrUpdatedBy`<sup>Required</sup> <a name="CreatedOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.createdOrUpdatedBy"></a>

```csharp
public string CreatedOrUpdatedBy { get; }
```

- *Type:* string

---

##### `CreatedOrUpdatedTime`<sup>Required</sup> <a name="CreatedOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.createdOrUpdatedTime"></a>

```csharp
public string CreatedOrUpdatedTime { get; }
```

- *Type:* string

---

##### `DailyComplianceReports`<sup>Required</sup> <a name="DailyComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.dailyComplianceReports"></a>

```csharp
public ReportRuleDailyComplianceReportsOutputReference DailyComplianceReports { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference">ReportRuleDailyComplianceReportsOutputReference</a>

---

##### `GcpComplianceReports`<sup>Required</sup> <a name="GcpComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.gcpComplianceReports"></a>

```csharp
public ReportRuleGcpComplianceReportsOutputReference GcpComplianceReports { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference">ReportRuleGcpComplianceReportsOutputReference</a>

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.guid"></a>

```csharp
public string Guid { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `AwsComplianceReportsInput`<sup>Optional</sup> <a name="AwsComplianceReportsInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.awsComplianceReportsInput"></a>

```csharp
public ReportRuleAwsComplianceReports AwsComplianceReportsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a>

---

##### `AzureComplianceReportsInput`<sup>Optional</sup> <a name="AzureComplianceReportsInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.azureComplianceReportsInput"></a>

```csharp
public ReportRuleAzureComplianceReports AzureComplianceReportsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a>

---

##### `DailyComplianceReportsInput`<sup>Optional</sup> <a name="DailyComplianceReportsInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.dailyComplianceReportsInput"></a>

```csharp
public ReportRuleDailyComplianceReports DailyComplianceReportsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EmailAlertChannelsInput`<sup>Optional</sup> <a name="EmailAlertChannelsInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.emailAlertChannelsInput"></a>

```csharp
public string[] EmailAlertChannelsInput { get; }
```

- *Type:* string[]

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `GcpComplianceReportsInput`<sup>Optional</sup> <a name="GcpComplianceReportsInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.gcpComplianceReportsInput"></a>

```csharp
public ReportRuleGcpComplianceReports GcpComplianceReportsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `SeveritiesInput`<sup>Optional</sup> <a name="SeveritiesInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.severitiesInput"></a>

```csharp
public string[] SeveritiesInput { get; }
```

- *Type:* string[]

---

##### `WeeklySnapshotInput`<sup>Optional</sup> <a name="WeeklySnapshotInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.weeklySnapshotInput"></a>

```csharp
public object WeeklySnapshotInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EmailAlertChannels`<sup>Required</sup> <a name="EmailAlertChannels" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.emailAlertChannels"></a>

```csharp
public string[] EmailAlertChannels { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `Severities`<sup>Required</sup> <a name="Severities" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.severities"></a>

```csharp
public string[] Severities { get; }
```

- *Type:* string[]

---

##### `WeeklySnapshot`<sup>Required</sup> <a name="WeeklySnapshot" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.weeklySnapshot"></a>

```csharp
public object WeeklySnapshot { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ReportRuleAwsComplianceReports <a name="ReportRuleAwsComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new ReportRuleAwsComplianceReports {
    object CisS3 = null,
    object Hipaa = null,
    object Iso2700 = null,
    object Nist800171Rev2 = null,
    object Nist80053Rev4 = null,
    object Pci = null,
    object Soc = null,
    object SocRev2 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.cisS3">CisS3</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_s3 ReportRule#cis_s3}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.hipaa">Hipaa</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa ReportRule#hipaa}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.iso2700">Iso2700</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#iso_2700 ReportRule#iso_2700}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.nist800171Rev2">Nist800171Rev2</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#nist_800_171_rev2 ReportRule#nist_800_171_rev2}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.nist80053Rev4">Nist80053Rev4</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#nist_800_53_rev4 ReportRule#nist_800_53_rev4}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.pci">Pci</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.soc">Soc</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.socRev2">SocRev2</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc_rev2 ReportRule#soc_rev2}. |

---

##### `CisS3`<sup>Optional</sup> <a name="CisS3" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.cisS3"></a>

```csharp
public object CisS3 { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_s3 ReportRule#cis_s3}.

---

##### `Hipaa`<sup>Optional</sup> <a name="Hipaa" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.hipaa"></a>

```csharp
public object Hipaa { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa ReportRule#hipaa}.

---

##### `Iso2700`<sup>Optional</sup> <a name="Iso2700" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.iso2700"></a>

```csharp
public object Iso2700 { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#iso_2700 ReportRule#iso_2700}.

---

##### `Nist800171Rev2`<sup>Optional</sup> <a name="Nist800171Rev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.nist800171Rev2"></a>

```csharp
public object Nist800171Rev2 { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#nist_800_171_rev2 ReportRule#nist_800_171_rev2}.

---

##### `Nist80053Rev4`<sup>Optional</sup> <a name="Nist80053Rev4" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.nist80053Rev4"></a>

```csharp
public object Nist80053Rev4 { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#nist_800_53_rev4 ReportRule#nist_800_53_rev4}.

---

##### `Pci`<sup>Optional</sup> <a name="Pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.pci"></a>

```csharp
public object Pci { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}.

---

##### `Soc`<sup>Optional</sup> <a name="Soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.soc"></a>

```csharp
public object Soc { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}.

---

##### `SocRev2`<sup>Optional</sup> <a name="SocRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.socRev2"></a>

```csharp
public object SocRev2 { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc_rev2 ReportRule#soc_rev2}.

---

### ReportRuleAzureComplianceReports <a name="ReportRuleAzureComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new ReportRuleAzureComplianceReports {
    object Cis = null,
    object Cis131 = null,
    object Pci = null,
    object Soc = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.cis">Cis</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis ReportRule#cis}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.cis131">Cis131</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_131 ReportRule#cis_131}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.pci">Pci</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.soc">Soc</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}. |

---

##### `Cis`<sup>Optional</sup> <a name="Cis" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.cis"></a>

```csharp
public object Cis { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis ReportRule#cis}.

---

##### `Cis131`<sup>Optional</sup> <a name="Cis131" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.cis131"></a>

```csharp
public object Cis131 { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_131 ReportRule#cis_131}.

---

##### `Pci`<sup>Optional</sup> <a name="Pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.pci"></a>

```csharp
public object Pci { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}.

---

##### `Soc`<sup>Optional</sup> <a name="Soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.soc"></a>

```csharp
public object Soc { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}.

---

### ReportRuleConfig <a name="ReportRuleConfig" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new ReportRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] EmailAlertChannels,
    string Name,
    string[] Severities,
    ReportRuleAwsComplianceReports AwsComplianceReports = null,
    ReportRuleAzureComplianceReports AzureComplianceReports = null,
    ReportRuleDailyComplianceReports DailyComplianceReports = null,
    string Description = null,
    object Enabled = null,
    ReportRuleGcpComplianceReports GcpComplianceReports = null,
    string Id = null,
    string[] ResourceGroups = null,
    object WeeklySnapshot = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.emailAlertChannels">EmailAlertChannels</a></code> | <code>string[]</code> | List of email alert channels for the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.name">Name</a></code> | <code>string</code> | The name of the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.severities">Severities</a></code> | <code>string[]</code> | List of severities for the report rule. Valid severities are: Critical, High, Medium, Low, Info. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.awsComplianceReports">AwsComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a></code> | aws_compliance_reports block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.azureComplianceReports">AzureComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a></code> | azure_compliance_reports block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.dailyComplianceReports">DailyComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a></code> | daily_compliance_reports block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.description">Description</a></code> | <code>string</code> | The description of the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.enabled">Enabled</a></code> | <code>object</code> | The state of the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.gcpComplianceReports">GcpComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a></code> | gcp_compliance_reports block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#id ReportRule#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | List of resource groups for the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.weeklySnapshot">WeeklySnapshot</a></code> | <code>object</code> | Weekly Snapshot Compliance Report type. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EmailAlertChannels`<sup>Required</sup> <a name="EmailAlertChannels" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.emailAlertChannels"></a>

```csharp
public string[] EmailAlertChannels { get; set; }
```

- *Type:* string[]

List of email alert channels for the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#email_alert_channels ReportRule#email_alert_channels}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#name ReportRule#name}

---

##### `Severities`<sup>Required</sup> <a name="Severities" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.severities"></a>

```csharp
public string[] Severities { get; set; }
```

- *Type:* string[]

List of severities for the report rule. Valid severities are: Critical, High, Medium, Low, Info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#severities ReportRule#severities}

---

##### `AwsComplianceReports`<sup>Optional</sup> <a name="AwsComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.awsComplianceReports"></a>

```csharp
public ReportRuleAwsComplianceReports AwsComplianceReports { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a>

aws_compliance_reports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#aws_compliance_reports ReportRule#aws_compliance_reports}

---

##### `AzureComplianceReports`<sup>Optional</sup> <a name="AzureComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.azureComplianceReports"></a>

```csharp
public ReportRuleAzureComplianceReports AzureComplianceReports { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a>

azure_compliance_reports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#azure_compliance_reports ReportRule#azure_compliance_reports}

---

##### `DailyComplianceReports`<sup>Optional</sup> <a name="DailyComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.dailyComplianceReports"></a>

```csharp
public ReportRuleDailyComplianceReports DailyComplianceReports { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a>

daily_compliance_reports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#daily_compliance_reports ReportRule#daily_compliance_reports}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#description ReportRule#description}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

The state of the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#enabled ReportRule#enabled}

---

##### `GcpComplianceReports`<sup>Optional</sup> <a name="GcpComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.gcpComplianceReports"></a>

```csharp
public ReportRuleGcpComplianceReports GcpComplianceReports { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a>

gcp_compliance_reports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#gcp_compliance_reports ReportRule#gcp_compliance_reports}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#id ReportRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

List of resource groups for the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#resource_groups ReportRule#resource_groups}

---

##### `WeeklySnapshot`<sup>Optional</sup> <a name="WeeklySnapshot" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.weeklySnapshot"></a>

```csharp
public object WeeklySnapshot { get; set; }
```

- *Type:* object

Weekly Snapshot Compliance Report type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#weekly_snapshot ReportRule#weekly_snapshot}

---

### ReportRuleDailyComplianceReports <a name="ReportRuleDailyComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new ReportRuleDailyComplianceReports {
    object AwsCloudtrail = null,
    object AwsCompliance = null,
    object AzureActivityLog = null,
    object AzureCompliance = null,
    object GcpAuditTrail = null,
    object GcpCompliance = null,
    object HostSecurity = null,
    object OpenshiftCompliance = null,
    object OpenshiftComplianceEvents = null,
    object Platform = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.awsCloudtrail">AwsCloudtrail</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#aws_cloudtrail ReportRule#aws_cloudtrail}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.awsCompliance">AwsCompliance</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#aws_compliance ReportRule#aws_compliance}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.azureActivityLog">AzureActivityLog</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#azure_activity_log ReportRule#azure_activity_log}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.azureCompliance">AzureCompliance</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#azure_compliance ReportRule#azure_compliance}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.gcpAuditTrail">GcpAuditTrail</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#gcp_audit_trail ReportRule#gcp_audit_trail}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.gcpCompliance">GcpCompliance</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#gcp_compliance ReportRule#gcp_compliance}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.hostSecurity">HostSecurity</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#host_security ReportRule#host_security}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.openshiftCompliance">OpenshiftCompliance</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#openshift_compliance ReportRule#openshift_compliance}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.openshiftComplianceEvents">OpenshiftComplianceEvents</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#openshift_compliance_events ReportRule#openshift_compliance_events}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.platform">Platform</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#platform ReportRule#platform}. |

---

##### `AwsCloudtrail`<sup>Optional</sup> <a name="AwsCloudtrail" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.awsCloudtrail"></a>

```csharp
public object AwsCloudtrail { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#aws_cloudtrail ReportRule#aws_cloudtrail}.

---

##### `AwsCompliance`<sup>Optional</sup> <a name="AwsCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.awsCompliance"></a>

```csharp
public object AwsCompliance { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#aws_compliance ReportRule#aws_compliance}.

---

##### `AzureActivityLog`<sup>Optional</sup> <a name="AzureActivityLog" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.azureActivityLog"></a>

```csharp
public object AzureActivityLog { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#azure_activity_log ReportRule#azure_activity_log}.

---

##### `AzureCompliance`<sup>Optional</sup> <a name="AzureCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.azureCompliance"></a>

```csharp
public object AzureCompliance { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#azure_compliance ReportRule#azure_compliance}.

---

##### `GcpAuditTrail`<sup>Optional</sup> <a name="GcpAuditTrail" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.gcpAuditTrail"></a>

```csharp
public object GcpAuditTrail { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#gcp_audit_trail ReportRule#gcp_audit_trail}.

---

##### `GcpCompliance`<sup>Optional</sup> <a name="GcpCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.gcpCompliance"></a>

```csharp
public object GcpCompliance { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#gcp_compliance ReportRule#gcp_compliance}.

---

##### `HostSecurity`<sup>Optional</sup> <a name="HostSecurity" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.hostSecurity"></a>

```csharp
public object HostSecurity { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#host_security ReportRule#host_security}.

---

##### `OpenshiftCompliance`<sup>Optional</sup> <a name="OpenshiftCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.openshiftCompliance"></a>

```csharp
public object OpenshiftCompliance { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#openshift_compliance ReportRule#openshift_compliance}.

---

##### `OpenshiftComplianceEvents`<sup>Optional</sup> <a name="OpenshiftComplianceEvents" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.openshiftComplianceEvents"></a>

```csharp
public object OpenshiftComplianceEvents { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#openshift_compliance_events ReportRule#openshift_compliance_events}.

---

##### `Platform`<sup>Optional</sup> <a name="Platform" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.platform"></a>

```csharp
public object Platform { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#platform ReportRule#platform}.

---

### ReportRuleGcpComplianceReports <a name="ReportRuleGcpComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new ReportRuleGcpComplianceReports {
    object Cis = null,
    object Cis12 = null,
    object Hipaa = null,
    object HipaaRev2 = null,
    object Iso27001 = null,
    object K8S = null,
    object Pci = null,
    object PciRev2 = null,
    object Soc = null,
    object SocRev2 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.cis">Cis</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis ReportRule#cis}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.cis12">Cis12</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_12 ReportRule#cis_12}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.hipaa">Hipaa</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa ReportRule#hipaa}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.hipaaRev2">HipaaRev2</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa_rev2 ReportRule#hipaa_rev2}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.iso27001">Iso27001</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#iso_27001 ReportRule#iso_27001}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.k8S">K8S</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#k8s ReportRule#k8s}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.pci">Pci</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.pciRev2">PciRev2</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci_rev2 ReportRule#pci_rev2}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.soc">Soc</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.socRev2">SocRev2</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc_rev2 ReportRule#soc_rev2}. |

---

##### `Cis`<sup>Optional</sup> <a name="Cis" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.cis"></a>

```csharp
public object Cis { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis ReportRule#cis}.

---

##### `Cis12`<sup>Optional</sup> <a name="Cis12" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.cis12"></a>

```csharp
public object Cis12 { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_12 ReportRule#cis_12}.

---

##### `Hipaa`<sup>Optional</sup> <a name="Hipaa" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.hipaa"></a>

```csharp
public object Hipaa { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa ReportRule#hipaa}.

---

##### `HipaaRev2`<sup>Optional</sup> <a name="HipaaRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.hipaaRev2"></a>

```csharp
public object HipaaRev2 { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa_rev2 ReportRule#hipaa_rev2}.

---

##### `Iso27001`<sup>Optional</sup> <a name="Iso27001" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.iso27001"></a>

```csharp
public object Iso27001 { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#iso_27001 ReportRule#iso_27001}.

---

##### `K8S`<sup>Optional</sup> <a name="K8S" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.k8S"></a>

```csharp
public object K8S { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#k8s ReportRule#k8s}.

---

##### `Pci`<sup>Optional</sup> <a name="Pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.pci"></a>

```csharp
public object Pci { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}.

---

##### `PciRev2`<sup>Optional</sup> <a name="PciRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.pciRev2"></a>

```csharp
public object PciRev2 { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci_rev2 ReportRule#pci_rev2}.

---

##### `Soc`<sup>Optional</sup> <a name="Soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.soc"></a>

```csharp
public object Soc { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}.

---

##### `SocRev2`<sup>Optional</sup> <a name="SocRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.socRev2"></a>

```csharp
public object SocRev2 { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc_rev2 ReportRule#soc_rev2}.

---

## Classes <a name="Classes" id="Classes"></a>

### ReportRuleAwsComplianceReportsOutputReference <a name="ReportRuleAwsComplianceReportsOutputReference" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new ReportRuleAwsComplianceReportsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetCisS3">ResetCisS3</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetHipaa">ResetHipaa</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetIso2700">ResetIso2700</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetNist800171Rev2">ResetNist800171Rev2</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetNist80053Rev4">ResetNist80053Rev4</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetPci">ResetPci</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetSoc">ResetSoc</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetSocRev2">ResetSocRev2</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCisS3` <a name="ResetCisS3" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetCisS3"></a>

```csharp
private void ResetCisS3()
```

##### `ResetHipaa` <a name="ResetHipaa" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetHipaa"></a>

```csharp
private void ResetHipaa()
```

##### `ResetIso2700` <a name="ResetIso2700" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetIso2700"></a>

```csharp
private void ResetIso2700()
```

##### `ResetNist800171Rev2` <a name="ResetNist800171Rev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetNist800171Rev2"></a>

```csharp
private void ResetNist800171Rev2()
```

##### `ResetNist80053Rev4` <a name="ResetNist80053Rev4" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetNist80053Rev4"></a>

```csharp
private void ResetNist80053Rev4()
```

##### `ResetPci` <a name="ResetPci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetPci"></a>

```csharp
private void ResetPci()
```

##### `ResetSoc` <a name="ResetSoc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetSoc"></a>

```csharp
private void ResetSoc()
```

##### `ResetSocRev2` <a name="ResetSocRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetSocRev2"></a>

```csharp
private void ResetSocRev2()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.cisS3Input">CisS3Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.hipaaInput">HipaaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.iso2700Input">Iso2700Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist800171Rev2Input">Nist800171Rev2Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist80053Rev4Input">Nist80053Rev4Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.pciInput">PciInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.socInput">SocInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.socRev2Input">SocRev2Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.cisS3">CisS3</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.hipaa">Hipaa</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.iso2700">Iso2700</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist800171Rev2">Nist800171Rev2</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist80053Rev4">Nist80053Rev4</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.pci">Pci</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.soc">Soc</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.socRev2">SocRev2</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CisS3Input`<sup>Optional</sup> <a name="CisS3Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.cisS3Input"></a>

```csharp
public object CisS3Input { get; }
```

- *Type:* object

---

##### `HipaaInput`<sup>Optional</sup> <a name="HipaaInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.hipaaInput"></a>

```csharp
public object HipaaInput { get; }
```

- *Type:* object

---

##### `Iso2700Input`<sup>Optional</sup> <a name="Iso2700Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.iso2700Input"></a>

```csharp
public object Iso2700Input { get; }
```

- *Type:* object

---

##### `Nist800171Rev2Input`<sup>Optional</sup> <a name="Nist800171Rev2Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist800171Rev2Input"></a>

```csharp
public object Nist800171Rev2Input { get; }
```

- *Type:* object

---

##### `Nist80053Rev4Input`<sup>Optional</sup> <a name="Nist80053Rev4Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist80053Rev4Input"></a>

```csharp
public object Nist80053Rev4Input { get; }
```

- *Type:* object

---

##### `PciInput`<sup>Optional</sup> <a name="PciInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.pciInput"></a>

```csharp
public object PciInput { get; }
```

- *Type:* object

---

##### `SocInput`<sup>Optional</sup> <a name="SocInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.socInput"></a>

```csharp
public object SocInput { get; }
```

- *Type:* object

---

##### `SocRev2Input`<sup>Optional</sup> <a name="SocRev2Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.socRev2Input"></a>

```csharp
public object SocRev2Input { get; }
```

- *Type:* object

---

##### `CisS3`<sup>Required</sup> <a name="CisS3" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.cisS3"></a>

```csharp
public object CisS3 { get; }
```

- *Type:* object

---

##### `Hipaa`<sup>Required</sup> <a name="Hipaa" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.hipaa"></a>

```csharp
public object Hipaa { get; }
```

- *Type:* object

---

##### `Iso2700`<sup>Required</sup> <a name="Iso2700" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.iso2700"></a>

```csharp
public object Iso2700 { get; }
```

- *Type:* object

---

##### `Nist800171Rev2`<sup>Required</sup> <a name="Nist800171Rev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist800171Rev2"></a>

```csharp
public object Nist800171Rev2 { get; }
```

- *Type:* object

---

##### `Nist80053Rev4`<sup>Required</sup> <a name="Nist80053Rev4" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist80053Rev4"></a>

```csharp
public object Nist80053Rev4 { get; }
```

- *Type:* object

---

##### `Pci`<sup>Required</sup> <a name="Pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.pci"></a>

```csharp
public object Pci { get; }
```

- *Type:* object

---

##### `Soc`<sup>Required</sup> <a name="Soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.soc"></a>

```csharp
public object Soc { get; }
```

- *Type:* object

---

##### `SocRev2`<sup>Required</sup> <a name="SocRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.socRev2"></a>

```csharp
public object SocRev2 { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.internalValue"></a>

```csharp
public ReportRuleAwsComplianceReports InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a>

---


### ReportRuleAzureComplianceReportsOutputReference <a name="ReportRuleAzureComplianceReportsOutputReference" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new ReportRuleAzureComplianceReportsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetCis">ResetCis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetCis131">ResetCis131</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetPci">ResetPci</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetSoc">ResetSoc</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCis` <a name="ResetCis" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetCis"></a>

```csharp
private void ResetCis()
```

##### `ResetCis131` <a name="ResetCis131" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetCis131"></a>

```csharp
private void ResetCis131()
```

##### `ResetPci` <a name="ResetPci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetPci"></a>

```csharp
private void ResetPci()
```

##### `ResetSoc` <a name="ResetSoc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetSoc"></a>

```csharp
private void ResetSoc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cis131Input">Cis131Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cisInput">CisInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.pciInput">PciInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.socInput">SocInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cis">Cis</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cis131">Cis131</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.pci">Pci</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.soc">Soc</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cis131Input`<sup>Optional</sup> <a name="Cis131Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cis131Input"></a>

```csharp
public object Cis131Input { get; }
```

- *Type:* object

---

##### `CisInput`<sup>Optional</sup> <a name="CisInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cisInput"></a>

```csharp
public object CisInput { get; }
```

- *Type:* object

---

##### `PciInput`<sup>Optional</sup> <a name="PciInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.pciInput"></a>

```csharp
public object PciInput { get; }
```

- *Type:* object

---

##### `SocInput`<sup>Optional</sup> <a name="SocInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.socInput"></a>

```csharp
public object SocInput { get; }
```

- *Type:* object

---

##### `Cis`<sup>Required</sup> <a name="Cis" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cis"></a>

```csharp
public object Cis { get; }
```

- *Type:* object

---

##### `Cis131`<sup>Required</sup> <a name="Cis131" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cis131"></a>

```csharp
public object Cis131 { get; }
```

- *Type:* object

---

##### `Pci`<sup>Required</sup> <a name="Pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.pci"></a>

```csharp
public object Pci { get; }
```

- *Type:* object

---

##### `Soc`<sup>Required</sup> <a name="Soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.soc"></a>

```csharp
public object Soc { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.internalValue"></a>

```csharp
public ReportRuleAzureComplianceReports InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a>

---


### ReportRuleDailyComplianceReportsOutputReference <a name="ReportRuleDailyComplianceReportsOutputReference" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new ReportRuleDailyComplianceReportsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAwsCloudtrail">ResetAwsCloudtrail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAwsCompliance">ResetAwsCompliance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAzureActivityLog">ResetAzureActivityLog</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAzureCompliance">ResetAzureCompliance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetGcpAuditTrail">ResetGcpAuditTrail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetGcpCompliance">ResetGcpCompliance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetHostSecurity">ResetHostSecurity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetOpenshiftCompliance">ResetOpenshiftCompliance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetOpenshiftComplianceEvents">ResetOpenshiftComplianceEvents</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetPlatform">ResetPlatform</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAwsCloudtrail` <a name="ResetAwsCloudtrail" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAwsCloudtrail"></a>

```csharp
private void ResetAwsCloudtrail()
```

##### `ResetAwsCompliance` <a name="ResetAwsCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAwsCompliance"></a>

```csharp
private void ResetAwsCompliance()
```

##### `ResetAzureActivityLog` <a name="ResetAzureActivityLog" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAzureActivityLog"></a>

```csharp
private void ResetAzureActivityLog()
```

##### `ResetAzureCompliance` <a name="ResetAzureCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAzureCompliance"></a>

```csharp
private void ResetAzureCompliance()
```

##### `ResetGcpAuditTrail` <a name="ResetGcpAuditTrail" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetGcpAuditTrail"></a>

```csharp
private void ResetGcpAuditTrail()
```

##### `ResetGcpCompliance` <a name="ResetGcpCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetGcpCompliance"></a>

```csharp
private void ResetGcpCompliance()
```

##### `ResetHostSecurity` <a name="ResetHostSecurity" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetHostSecurity"></a>

```csharp
private void ResetHostSecurity()
```

##### `ResetOpenshiftCompliance` <a name="ResetOpenshiftCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetOpenshiftCompliance"></a>

```csharp
private void ResetOpenshiftCompliance()
```

##### `ResetOpenshiftComplianceEvents` <a name="ResetOpenshiftComplianceEvents" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetOpenshiftComplianceEvents"></a>

```csharp
private void ResetOpenshiftComplianceEvents()
```

##### `ResetPlatform` <a name="ResetPlatform" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetPlatform"></a>

```csharp
private void ResetPlatform()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsCloudtrailInput">AwsCloudtrailInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsComplianceInput">AwsComplianceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureActivityLogInput">AzureActivityLogInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureComplianceInput">AzureComplianceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpAuditTrailInput">GcpAuditTrailInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpComplianceInput">GcpComplianceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.hostSecurityInput">HostSecurityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftComplianceEventsInput">OpenshiftComplianceEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftComplianceInput">OpenshiftComplianceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.platformInput">PlatformInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsCloudtrail">AwsCloudtrail</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsCompliance">AwsCompliance</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureActivityLog">AzureActivityLog</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureCompliance">AzureCompliance</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpAuditTrail">GcpAuditTrail</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpCompliance">GcpCompliance</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.hostSecurity">HostSecurity</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftCompliance">OpenshiftCompliance</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftComplianceEvents">OpenshiftComplianceEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.platform">Platform</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsCloudtrailInput`<sup>Optional</sup> <a name="AwsCloudtrailInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsCloudtrailInput"></a>

```csharp
public object AwsCloudtrailInput { get; }
```

- *Type:* object

---

##### `AwsComplianceInput`<sup>Optional</sup> <a name="AwsComplianceInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsComplianceInput"></a>

```csharp
public object AwsComplianceInput { get; }
```

- *Type:* object

---

##### `AzureActivityLogInput`<sup>Optional</sup> <a name="AzureActivityLogInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureActivityLogInput"></a>

```csharp
public object AzureActivityLogInput { get; }
```

- *Type:* object

---

##### `AzureComplianceInput`<sup>Optional</sup> <a name="AzureComplianceInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureComplianceInput"></a>

```csharp
public object AzureComplianceInput { get; }
```

- *Type:* object

---

##### `GcpAuditTrailInput`<sup>Optional</sup> <a name="GcpAuditTrailInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpAuditTrailInput"></a>

```csharp
public object GcpAuditTrailInput { get; }
```

- *Type:* object

---

##### `GcpComplianceInput`<sup>Optional</sup> <a name="GcpComplianceInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpComplianceInput"></a>

```csharp
public object GcpComplianceInput { get; }
```

- *Type:* object

---

##### `HostSecurityInput`<sup>Optional</sup> <a name="HostSecurityInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.hostSecurityInput"></a>

```csharp
public object HostSecurityInput { get; }
```

- *Type:* object

---

##### `OpenshiftComplianceEventsInput`<sup>Optional</sup> <a name="OpenshiftComplianceEventsInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftComplianceEventsInput"></a>

```csharp
public object OpenshiftComplianceEventsInput { get; }
```

- *Type:* object

---

##### `OpenshiftComplianceInput`<sup>Optional</sup> <a name="OpenshiftComplianceInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftComplianceInput"></a>

```csharp
public object OpenshiftComplianceInput { get; }
```

- *Type:* object

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.platformInput"></a>

```csharp
public object PlatformInput { get; }
```

- *Type:* object

---

##### `AwsCloudtrail`<sup>Required</sup> <a name="AwsCloudtrail" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsCloudtrail"></a>

```csharp
public object AwsCloudtrail { get; }
```

- *Type:* object

---

##### `AwsCompliance`<sup>Required</sup> <a name="AwsCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsCompliance"></a>

```csharp
public object AwsCompliance { get; }
```

- *Type:* object

---

##### `AzureActivityLog`<sup>Required</sup> <a name="AzureActivityLog" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureActivityLog"></a>

```csharp
public object AzureActivityLog { get; }
```

- *Type:* object

---

##### `AzureCompliance`<sup>Required</sup> <a name="AzureCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureCompliance"></a>

```csharp
public object AzureCompliance { get; }
```

- *Type:* object

---

##### `GcpAuditTrail`<sup>Required</sup> <a name="GcpAuditTrail" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpAuditTrail"></a>

```csharp
public object GcpAuditTrail { get; }
```

- *Type:* object

---

##### `GcpCompliance`<sup>Required</sup> <a name="GcpCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpCompliance"></a>

```csharp
public object GcpCompliance { get; }
```

- *Type:* object

---

##### `HostSecurity`<sup>Required</sup> <a name="HostSecurity" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.hostSecurity"></a>

```csharp
public object HostSecurity { get; }
```

- *Type:* object

---

##### `OpenshiftCompliance`<sup>Required</sup> <a name="OpenshiftCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftCompliance"></a>

```csharp
public object OpenshiftCompliance { get; }
```

- *Type:* object

---

##### `OpenshiftComplianceEvents`<sup>Required</sup> <a name="OpenshiftComplianceEvents" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftComplianceEvents"></a>

```csharp
public object OpenshiftComplianceEvents { get; }
```

- *Type:* object

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.platform"></a>

```csharp
public object Platform { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.internalValue"></a>

```csharp
public ReportRuleDailyComplianceReports InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a>

---


### ReportRuleGcpComplianceReportsOutputReference <a name="ReportRuleGcpComplianceReportsOutputReference" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new ReportRuleGcpComplianceReportsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetCis">ResetCis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetCis12">ResetCis12</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetHipaa">ResetHipaa</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetHipaaRev2">ResetHipaaRev2</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetIso27001">ResetIso27001</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetK8S">ResetK8S</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetPci">ResetPci</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetPciRev2">ResetPciRev2</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetSoc">ResetSoc</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetSocRev2">ResetSocRev2</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCis` <a name="ResetCis" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetCis"></a>

```csharp
private void ResetCis()
```

##### `ResetCis12` <a name="ResetCis12" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetCis12"></a>

```csharp
private void ResetCis12()
```

##### `ResetHipaa` <a name="ResetHipaa" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetHipaa"></a>

```csharp
private void ResetHipaa()
```

##### `ResetHipaaRev2` <a name="ResetHipaaRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetHipaaRev2"></a>

```csharp
private void ResetHipaaRev2()
```

##### `ResetIso27001` <a name="ResetIso27001" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetIso27001"></a>

```csharp
private void ResetIso27001()
```

##### `ResetK8S` <a name="ResetK8S" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetK8S"></a>

```csharp
private void ResetK8S()
```

##### `ResetPci` <a name="ResetPci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetPci"></a>

```csharp
private void ResetPci()
```

##### `ResetPciRev2` <a name="ResetPciRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetPciRev2"></a>

```csharp
private void ResetPciRev2()
```

##### `ResetSoc` <a name="ResetSoc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetSoc"></a>

```csharp
private void ResetSoc()
```

##### `ResetSocRev2` <a name="ResetSocRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetSocRev2"></a>

```csharp
private void ResetSocRev2()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cis12Input">Cis12Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cisInput">CisInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaaInput">HipaaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaaRev2Input">HipaaRev2Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.iso27001Input">Iso27001Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.k8SInput">K8SInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pciInput">PciInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pciRev2Input">PciRev2Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.socInput">SocInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.socRev2Input">SocRev2Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cis">Cis</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cis12">Cis12</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaa">Hipaa</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaaRev2">HipaaRev2</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.iso27001">Iso27001</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.k8S">K8S</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pci">Pci</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pciRev2">PciRev2</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.soc">Soc</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.socRev2">SocRev2</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cis12Input`<sup>Optional</sup> <a name="Cis12Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cis12Input"></a>

```csharp
public object Cis12Input { get; }
```

- *Type:* object

---

##### `CisInput`<sup>Optional</sup> <a name="CisInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cisInput"></a>

```csharp
public object CisInput { get; }
```

- *Type:* object

---

##### `HipaaInput`<sup>Optional</sup> <a name="HipaaInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaaInput"></a>

```csharp
public object HipaaInput { get; }
```

- *Type:* object

---

##### `HipaaRev2Input`<sup>Optional</sup> <a name="HipaaRev2Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaaRev2Input"></a>

```csharp
public object HipaaRev2Input { get; }
```

- *Type:* object

---

##### `Iso27001Input`<sup>Optional</sup> <a name="Iso27001Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.iso27001Input"></a>

```csharp
public object Iso27001Input { get; }
```

- *Type:* object

---

##### `K8SInput`<sup>Optional</sup> <a name="K8SInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.k8SInput"></a>

```csharp
public object K8SInput { get; }
```

- *Type:* object

---

##### `PciInput`<sup>Optional</sup> <a name="PciInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pciInput"></a>

```csharp
public object PciInput { get; }
```

- *Type:* object

---

##### `PciRev2Input`<sup>Optional</sup> <a name="PciRev2Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pciRev2Input"></a>

```csharp
public object PciRev2Input { get; }
```

- *Type:* object

---

##### `SocInput`<sup>Optional</sup> <a name="SocInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.socInput"></a>

```csharp
public object SocInput { get; }
```

- *Type:* object

---

##### `SocRev2Input`<sup>Optional</sup> <a name="SocRev2Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.socRev2Input"></a>

```csharp
public object SocRev2Input { get; }
```

- *Type:* object

---

##### `Cis`<sup>Required</sup> <a name="Cis" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cis"></a>

```csharp
public object Cis { get; }
```

- *Type:* object

---

##### `Cis12`<sup>Required</sup> <a name="Cis12" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cis12"></a>

```csharp
public object Cis12 { get; }
```

- *Type:* object

---

##### `Hipaa`<sup>Required</sup> <a name="Hipaa" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaa"></a>

```csharp
public object Hipaa { get; }
```

- *Type:* object

---

##### `HipaaRev2`<sup>Required</sup> <a name="HipaaRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaaRev2"></a>

```csharp
public object HipaaRev2 { get; }
```

- *Type:* object

---

##### `Iso27001`<sup>Required</sup> <a name="Iso27001" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.iso27001"></a>

```csharp
public object Iso27001 { get; }
```

- *Type:* object

---

##### `K8S`<sup>Required</sup> <a name="K8S" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.k8S"></a>

```csharp
public object K8S { get; }
```

- *Type:* object

---

##### `Pci`<sup>Required</sup> <a name="Pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pci"></a>

```csharp
public object Pci { get; }
```

- *Type:* object

---

##### `PciRev2`<sup>Required</sup> <a name="PciRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pciRev2"></a>

```csharp
public object PciRev2 { get; }
```

- *Type:* object

---

##### `Soc`<sup>Required</sup> <a name="Soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.soc"></a>

```csharp
public object Soc { get; }
```

- *Type:* object

---

##### `SocRev2`<sup>Required</sup> <a name="SocRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.socRev2"></a>

```csharp
public object SocRev2 { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.internalValue"></a>

```csharp
public ReportRuleGcpComplianceReports InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a>

---



