# `lacework_alert_channel_jira_server`

Refer to the Terraform Registory for docs: [`lacework_alert_channel_jira_server`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server).

# `alertChannelJiraServer` Submodule <a name="`alertChannelJiraServer` Submodule" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertChannelJiraServer <a name="AlertChannelJiraServer" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server lacework_alert_channel_jira_server}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new AlertChannelJiraServer(Construct Scope, string Id, AlertChannelJiraServerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig">AlertChannelJiraServerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig">AlertChannelJiraServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetCustomTemplateFile">ResetCustomTemplateFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetGroupIssuesBy">ResetGroupIssuesBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetTestIntegration">ResetTestIntegration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetConfiguration` <a name="ResetConfiguration" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetConfiguration"></a>

```csharp
private void ResetConfiguration()
```

##### `ResetCustomTemplateFile` <a name="ResetCustomTemplateFile" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetCustomTemplateFile"></a>

```csharp
private void ResetCustomTemplateFile()
```

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetGroupIssuesBy` <a name="ResetGroupIssuesBy" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetGroupIssuesBy"></a>

```csharp
private void ResetGroupIssuesBy()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTestIntegration` <a name="ResetTestIntegration" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetTestIntegration"></a>

```csharp
private void ResetTestIntegration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

AlertChannelJiraServer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

AlertChannelJiraServer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

AlertChannelJiraServer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.createdOrUpdatedBy">CreatedOrUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.createdOrUpdatedTime">CreatedOrUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.intgGuid">IntgGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.orgLevel">OrgLevel</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.typeName">TypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.configurationInput">ConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.customTemplateFileInput">CustomTemplateFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.groupIssuesByInput">GroupIssuesByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.issueTypeInput">IssueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.jiraUrlInput">JiraUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.projectKeyInput">ProjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.testIntegrationInput">TestIntegrationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.configuration">Configuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.customTemplateFile">CustomTemplateFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.groupIssuesBy">GroupIssuesBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.issueType">IssueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.jiraUrl">JiraUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.projectKey">ProjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.testIntegration">TestIntegration</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedOrUpdatedBy`<sup>Required</sup> <a name="CreatedOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.createdOrUpdatedBy"></a>

```csharp
public string CreatedOrUpdatedBy { get; }
```

- *Type:* string

---

##### `CreatedOrUpdatedTime`<sup>Required</sup> <a name="CreatedOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.createdOrUpdatedTime"></a>

```csharp
public string CreatedOrUpdatedTime { get; }
```

- *Type:* string

---

##### `IntgGuid`<sup>Required</sup> <a name="IntgGuid" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.intgGuid"></a>

```csharp
public string IntgGuid { get; }
```

- *Type:* string

---

##### `OrgLevel`<sup>Required</sup> <a name="OrgLevel" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.orgLevel"></a>

```csharp
public IResolvable OrgLevel { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.typeName"></a>

```csharp
public string TypeName { get; }
```

- *Type:* string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.configurationInput"></a>

```csharp
public string ConfigurationInput { get; }
```

- *Type:* string

---

##### `CustomTemplateFileInput`<sup>Optional</sup> <a name="CustomTemplateFileInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.customTemplateFileInput"></a>

```csharp
public string CustomTemplateFileInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `GroupIssuesByInput`<sup>Optional</sup> <a name="GroupIssuesByInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.groupIssuesByInput"></a>

```csharp
public string GroupIssuesByInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IssueTypeInput`<sup>Optional</sup> <a name="IssueTypeInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.issueTypeInput"></a>

```csharp
public string IssueTypeInput { get; }
```

- *Type:* string

---

##### `JiraUrlInput`<sup>Optional</sup> <a name="JiraUrlInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.jiraUrlInput"></a>

```csharp
public string JiraUrlInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ProjectKeyInput`<sup>Optional</sup> <a name="ProjectKeyInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.projectKeyInput"></a>

```csharp
public string ProjectKeyInput { get; }
```

- *Type:* string

---

##### `TestIntegrationInput`<sup>Optional</sup> <a name="TestIntegrationInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.testIntegrationInput"></a>

```csharp
public object TestIntegrationInput { get; }
```

- *Type:* object

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.configuration"></a>

```csharp
public string Configuration { get; }
```

- *Type:* string

---

##### `CustomTemplateFile`<sup>Required</sup> <a name="CustomTemplateFile" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.customTemplateFile"></a>

```csharp
public string CustomTemplateFile { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `GroupIssuesBy`<sup>Required</sup> <a name="GroupIssuesBy" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.groupIssuesBy"></a>

```csharp
public string GroupIssuesBy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IssueType`<sup>Required</sup> <a name="IssueType" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.issueType"></a>

```csharp
public string IssueType { get; }
```

- *Type:* string

---

##### `JiraUrl`<sup>Required</sup> <a name="JiraUrl" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.jiraUrl"></a>

```csharp
public string JiraUrl { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.projectKey"></a>

```csharp
public string ProjectKey { get; }
```

- *Type:* string

---

##### `TestIntegration`<sup>Required</sup> <a name="TestIntegration" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.testIntegration"></a>

```csharp
public object TestIntegration { get; }
```

- *Type:* object

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AlertChannelJiraServerConfig <a name="AlertChannelJiraServerConfig" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new AlertChannelJiraServerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IssueType,
    string JiraUrl,
    string Name,
    string Password,
    string ProjectKey,
    string Username,
    string Configuration = null,
    string CustomTemplateFile = null,
    object Enabled = null,
    string GroupIssuesBy = null,
    string Id = null,
    object TestIntegration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.issueType">IssueType</a></code> | <code>string</code> | The Jira issue type (such as a Bug) to create when a new Jira issue is created. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.jiraUrl">JiraUrl</a></code> | <code>string</code> | The URL of your Jira implementation without https protocol. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.name">Name</a></code> | <code>string</code> | The alert channel integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.password">Password</a></code> | <code>string</code> | The password to the Jira user. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.projectKey">ProjectKey</a></code> | <code>string</code> | The project key for the Jira project where the new Jira issues should be created. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.username">Username</a></code> | <code>string</code> | The Jira user name. Lacework recommends a dedicated Jira user. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.configuration">Configuration</a></code> | <code>string</code> | Whether the integration is Unidirectional or Bidirectional. Defaults to Unidirectional. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.customTemplateFile">CustomTemplateFile</a></code> | <code>string</code> | A Custom Template JSON file to populate fields in the new Jira issues. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.enabled">Enabled</a></code> | <code>object</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.groupIssuesBy">GroupIssuesBy</a></code> | <code>string</code> | Defines how Lacework compliance events get grouped. Must be one of Events or Resources. Defaults to Events. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#id AlertChannelJiraServer#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.testIntegration">TestIntegration</a></code> | <code>object</code> | Whether to test the integration of an alert channel upon creation and modification. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IssueType`<sup>Required</sup> <a name="IssueType" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.issueType"></a>

```csharp
public string IssueType { get; set; }
```

- *Type:* string

The Jira issue type (such as a Bug) to create when a new Jira issue is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#issue_type AlertChannelJiraServer#issue_type}

---

##### `JiraUrl`<sup>Required</sup> <a name="JiraUrl" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.jiraUrl"></a>

```csharp
public string JiraUrl { get; set; }
```

- *Type:* string

The URL of your Jira implementation without https protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#jira_url AlertChannelJiraServer#jira_url}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The alert channel integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#name AlertChannelJiraServer#name}

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password to the Jira user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#password AlertChannelJiraServer#password}

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.projectKey"></a>

```csharp
public string ProjectKey { get; set; }
```

- *Type:* string

The project key for the Jira project where the new Jira issues should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#project_key AlertChannelJiraServer#project_key}

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The Jira user name. Lacework recommends a dedicated Jira user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#username AlertChannelJiraServer#username}

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.configuration"></a>

```csharp
public string Configuration { get; set; }
```

- *Type:* string

Whether the integration is Unidirectional or Bidirectional. Defaults to Unidirectional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#configuration AlertChannelJiraServer#configuration}

---

##### `CustomTemplateFile`<sup>Optional</sup> <a name="CustomTemplateFile" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.customTemplateFile"></a>

```csharp
public string CustomTemplateFile { get; set; }
```

- *Type:* string

A Custom Template JSON file to populate fields in the new Jira issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#custom_template_file AlertChannelJiraServer#custom_template_file}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#enabled AlertChannelJiraServer#enabled}

---

##### `GroupIssuesBy`<sup>Optional</sup> <a name="GroupIssuesBy" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.groupIssuesBy"></a>

```csharp
public string GroupIssuesBy { get; set; }
```

- *Type:* string

Defines how Lacework compliance events get grouped. Must be one of Events or Resources. Defaults to Events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#group_issues_by AlertChannelJiraServer#group_issues_by}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#id AlertChannelJiraServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TestIntegration`<sup>Optional</sup> <a name="TestIntegration" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.testIntegration"></a>

```csharp
public object TestIntegration { get; set; }
```

- *Type:* object

Whether to test the integration of an alert channel upon creation and modification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#test_integration AlertChannelJiraServer#test_integration}

---



