# `lacework_integration_gcp_gke_audit_log`

Refer to the Terraform Registory for docs: [`lacework_integration_gcp_gke_audit_log`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log).

# `integrationGcpGkeAuditLog` Submodule <a name="`integrationGcpGkeAuditLog` Submodule" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationGcpGkeAuditLog <a name="IntegrationGcpGkeAuditLog" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log lacework_integration_gcp_gke_audit_log}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationGcpGkeAuditLog(Construct Scope, string Id, IntegrationGcpGkeAuditLogConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig">IntegrationGcpGkeAuditLogConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig">IntegrationGcpGkeAuditLogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetOrganizationId">ResetOrganizationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetRetries">ResetRetries</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCredentials` <a name="PutCredentials" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.putCredentials"></a>

```csharp
private void PutCredentials(IntegrationGcpGkeAuditLogCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials">IntegrationGcpGkeAuditLogCredentials</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOrganizationId` <a name="ResetOrganizationId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetOrganizationId"></a>

```csharp
private void ResetOrganizationId()
```

##### `ResetRetries` <a name="ResetRetries" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetRetries"></a>

```csharp
private void ResetRetries()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

IntegrationGcpGkeAuditLog.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

IntegrationGcpGkeAuditLog.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

IntegrationGcpGkeAuditLog.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.createdOrUpdatedBy">CreatedOrUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.createdOrUpdatedTime">CreatedOrUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference">IntegrationGcpGkeAuditLogCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.intgGuid">IntgGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.isOrg">IsOrg</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.credentialsInput">CredentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials">IntegrationGcpGkeAuditLogCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.integrationTypeInput">IntegrationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.organizationIdInput">OrganizationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.retriesInput">RetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.subscriptionInput">SubscriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.integrationType">IntegrationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.retries">Retries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.subscription">Subscription</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedOrUpdatedBy`<sup>Required</sup> <a name="CreatedOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.createdOrUpdatedBy"></a>

```csharp
public string CreatedOrUpdatedBy { get; }
```

- *Type:* string

---

##### `CreatedOrUpdatedTime`<sup>Required</sup> <a name="CreatedOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.createdOrUpdatedTime"></a>

```csharp
public string CreatedOrUpdatedTime { get; }
```

- *Type:* string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.credentials"></a>

```csharp
public IntegrationGcpGkeAuditLogCredentialsOutputReference Credentials { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference">IntegrationGcpGkeAuditLogCredentialsOutputReference</a>

---

##### `IntgGuid`<sup>Required</sup> <a name="IntgGuid" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.intgGuid"></a>

```csharp
public string IntgGuid { get; }
```

- *Type:* string

---

##### `IsOrg`<sup>Required</sup> <a name="IsOrg" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.isOrg"></a>

```csharp
public IResolvable IsOrg { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.credentialsInput"></a>

```csharp
public IntegrationGcpGkeAuditLogCredentials CredentialsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials">IntegrationGcpGkeAuditLogCredentials</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IntegrationTypeInput`<sup>Optional</sup> <a name="IntegrationTypeInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.integrationTypeInput"></a>

```csharp
public string IntegrationTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrganizationIdInput`<sup>Optional</sup> <a name="OrganizationIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.organizationIdInput"></a>

```csharp
public string OrganizationIdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.retriesInput"></a>

```csharp
public double RetriesInput { get; }
```

- *Type:* double

---

##### `SubscriptionInput`<sup>Optional</sup> <a name="SubscriptionInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.subscriptionInput"></a>

```csharp
public string SubscriptionInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IntegrationType`<sup>Required</sup> <a name="IntegrationType" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.integrationType"></a>

```csharp
public string IntegrationType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.retries"></a>

```csharp
public double Retries { get; }
```

- *Type:* double

---

##### `Subscription`<sup>Required</sup> <a name="Subscription" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.subscription"></a>

```csharp
public string Subscription { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationGcpGkeAuditLogConfig <a name="IntegrationGcpGkeAuditLogConfig" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationGcpGkeAuditLogConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    IntegrationGcpGkeAuditLogCredentials Credentials,
    string IntegrationType,
    string Name,
    string ProjectId,
    string Subscription,
    object Enabled = null,
    string Id = null,
    string OrganizationId = null,
    double Retries = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials">IntegrationGcpGkeAuditLogCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.integrationType">IntegrationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#integration_type IntegrationGcpGkeAuditLog#integration_type}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.name">Name</a></code> | <code>string</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.projectId">ProjectId</a></code> | <code>string</code> | The GCP Project ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.subscription">Subscription</a></code> | <code>string</code> | The PubSub Subscription. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.enabled">Enabled</a></code> | <code>object</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#id IntegrationGcpGkeAuditLog#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.organizationId">OrganizationId</a></code> | <code>string</code> | The GCP Organization ID (required when integration_type is organization). |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.retries">Retries</a></code> | <code>double</code> | The number of attempts to create the external integration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.credentials"></a>

```csharp
public IntegrationGcpGkeAuditLogCredentials Credentials { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials">IntegrationGcpGkeAuditLogCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#credentials IntegrationGcpGkeAuditLog#credentials}

---

##### `IntegrationType`<sup>Required</sup> <a name="IntegrationType" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.integrationType"></a>

```csharp
public string IntegrationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#integration_type IntegrationGcpGkeAuditLog#integration_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#name IntegrationGcpGkeAuditLog#name}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The GCP Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#project_id IntegrationGcpGkeAuditLog#project_id}

---

##### `Subscription`<sup>Required</sup> <a name="Subscription" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.subscription"></a>

```csharp
public string Subscription { get; set; }
```

- *Type:* string

The PubSub Subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#subscription IntegrationGcpGkeAuditLog#subscription}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#enabled IntegrationGcpGkeAuditLog#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#id IntegrationGcpGkeAuditLog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OrganizationId`<sup>Optional</sup> <a name="OrganizationId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.organizationId"></a>

```csharp
public string OrganizationId { get; set; }
```

- *Type:* string

The GCP Organization ID (required when integration_type is organization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#organization_id IntegrationGcpGkeAuditLog#organization_id}

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.retries"></a>

```csharp
public double Retries { get; set; }
```

- *Type:* double

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#retries IntegrationGcpGkeAuditLog#retries}

---

### IntegrationGcpGkeAuditLogCredentials <a name="IntegrationGcpGkeAuditLogCredentials" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationGcpGkeAuditLogCredentials {
    string ClientEmail,
    string ClientId,
    string PrivateKey,
    string PrivateKeyId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.property.clientEmail">ClientEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#client_email IntegrationGcpGkeAuditLog#client_email}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#client_id IntegrationGcpGkeAuditLog#client_id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.property.privateKey">PrivateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#private_key IntegrationGcpGkeAuditLog#private_key}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.property.privateKeyId">PrivateKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#private_key_id IntegrationGcpGkeAuditLog#private_key_id}. |

---

##### `ClientEmail`<sup>Required</sup> <a name="ClientEmail" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.property.clientEmail"></a>

```csharp
public string ClientEmail { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#client_email IntegrationGcpGkeAuditLog#client_email}.

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#client_id IntegrationGcpGkeAuditLog#client_id}.

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.property.privateKey"></a>

```csharp
public string PrivateKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#private_key IntegrationGcpGkeAuditLog#private_key}.

---

##### `PrivateKeyId`<sup>Required</sup> <a name="PrivateKeyId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.property.privateKeyId"></a>

```csharp
public string PrivateKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#private_key_id IntegrationGcpGkeAuditLog#private_key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationGcpGkeAuditLogCredentialsOutputReference <a name="IntegrationGcpGkeAuditLogCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationGcpGkeAuditLogCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.clientEmailInput">ClientEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.privateKeyIdInput">PrivateKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.clientEmail">ClientEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.privateKeyId">PrivateKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials">IntegrationGcpGkeAuditLogCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientEmailInput`<sup>Optional</sup> <a name="ClientEmailInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.clientEmailInput"></a>

```csharp
public string ClientEmailInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `PrivateKeyIdInput`<sup>Optional</sup> <a name="PrivateKeyIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.privateKeyIdInput"></a>

```csharp
public string PrivateKeyIdInput { get; }
```

- *Type:* string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.privateKeyInput"></a>

```csharp
public string PrivateKeyInput { get; }
```

- *Type:* string

---

##### `ClientEmail`<sup>Required</sup> <a name="ClientEmail" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.clientEmail"></a>

```csharp
public string ClientEmail { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `PrivateKeyId`<sup>Required</sup> <a name="PrivateKeyId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.privateKeyId"></a>

```csharp
public string PrivateKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.internalValue"></a>

```csharp
public IntegrationGcpGkeAuditLogCredentials InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials">IntegrationGcpGkeAuditLogCredentials</a>

---



