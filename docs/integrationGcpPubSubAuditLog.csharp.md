# `lacework_integration_gcp_pub_sub_audit_log`

Refer to the Terraform Registory for docs: [`lacework_integration_gcp_pub_sub_audit_log`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log).

# `integrationGcpPubSubAuditLog` Submodule <a name="`integrationGcpPubSubAuditLog` Submodule" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationGcpPubSubAuditLog <a name="IntegrationGcpPubSubAuditLog" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log lacework_integration_gcp_pub_sub_audit_log}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationGcpPubSubAuditLog(Construct Scope, string Id, IntegrationGcpPubSubAuditLogConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig">IntegrationGcpPubSubAuditLogConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig">IntegrationGcpPubSubAuditLogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetOrganizationId">ResetOrganizationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetRetries">ResetRetries</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCredentials` <a name="PutCredentials" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.putCredentials"></a>

```csharp
private void PutCredentials(IntegrationGcpPubSubAuditLogCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials">IntegrationGcpPubSubAuditLogCredentials</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOrganizationId` <a name="ResetOrganizationId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetOrganizationId"></a>

```csharp
private void ResetOrganizationId()
```

##### `ResetRetries` <a name="ResetRetries" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetRetries"></a>

```csharp
private void ResetRetries()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

IntegrationGcpPubSubAuditLog.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

IntegrationGcpPubSubAuditLog.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

IntegrationGcpPubSubAuditLog.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.createdOrUpdatedBy">CreatedOrUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.createdOrUpdatedTime">CreatedOrUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference">IntegrationGcpPubSubAuditLogCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.intgGuid">IntgGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.isOrg">IsOrg</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.credentialsInput">CredentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials">IntegrationGcpPubSubAuditLogCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.integrationTypeInput">IntegrationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.organizationIdInput">OrganizationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.retriesInput">RetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.topicIdInput">TopicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.integrationType">IntegrationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.retries">Retries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.topicId">TopicId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedOrUpdatedBy`<sup>Required</sup> <a name="CreatedOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.createdOrUpdatedBy"></a>

```csharp
public string CreatedOrUpdatedBy { get; }
```

- *Type:* string

---

##### `CreatedOrUpdatedTime`<sup>Required</sup> <a name="CreatedOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.createdOrUpdatedTime"></a>

```csharp
public string CreatedOrUpdatedTime { get; }
```

- *Type:* string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.credentials"></a>

```csharp
public IntegrationGcpPubSubAuditLogCredentialsOutputReference Credentials { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference">IntegrationGcpPubSubAuditLogCredentialsOutputReference</a>

---

##### `IntgGuid`<sup>Required</sup> <a name="IntgGuid" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.intgGuid"></a>

```csharp
public string IntgGuid { get; }
```

- *Type:* string

---

##### `IsOrg`<sup>Required</sup> <a name="IsOrg" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.isOrg"></a>

```csharp
public IResolvable IsOrg { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.credentialsInput"></a>

```csharp
public IntegrationGcpPubSubAuditLogCredentials CredentialsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials">IntegrationGcpPubSubAuditLogCredentials</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IntegrationTypeInput`<sup>Optional</sup> <a name="IntegrationTypeInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.integrationTypeInput"></a>

```csharp
public string IntegrationTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrganizationIdInput`<sup>Optional</sup> <a name="OrganizationIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.organizationIdInput"></a>

```csharp
public string OrganizationIdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.retriesInput"></a>

```csharp
public double RetriesInput { get; }
```

- *Type:* double

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.subscriptionIdInput"></a>

```csharp
public string SubscriptionIdInput { get; }
```

- *Type:* string

---

##### `TopicIdInput`<sup>Optional</sup> <a name="TopicIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.topicIdInput"></a>

```csharp
public string TopicIdInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IntegrationType`<sup>Required</sup> <a name="IntegrationType" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.integrationType"></a>

```csharp
public string IntegrationType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.retries"></a>

```csharp
public double Retries { get; }
```

- *Type:* double

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `TopicId`<sup>Required</sup> <a name="TopicId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.topicId"></a>

```csharp
public string TopicId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationGcpPubSubAuditLogConfig <a name="IntegrationGcpPubSubAuditLogConfig" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationGcpPubSubAuditLogConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    IntegrationGcpPubSubAuditLogCredentials Credentials,
    string IntegrationType,
    string Name,
    string ProjectId,
    string SubscriptionId,
    string TopicId,
    object Enabled = null,
    string Id = null,
    string OrganizationId = null,
    double Retries = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials">IntegrationGcpPubSubAuditLogCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.integrationType">IntegrationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#integration_type IntegrationGcpPubSubAuditLog#integration_type}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.name">Name</a></code> | <code>string</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.projectId">ProjectId</a></code> | <code>string</code> | The GCP Project ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | The PubSub Subscription. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.topicId">TopicId</a></code> | <code>string</code> | The PubSub topic id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.enabled">Enabled</a></code> | <code>object</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#id IntegrationGcpPubSubAuditLog#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.organizationId">OrganizationId</a></code> | <code>string</code> | The GCP Organization ID (required when integration_type is organization). |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.retries">Retries</a></code> | <code>double</code> | The number of attempts to create the external integration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.credentials"></a>

```csharp
public IntegrationGcpPubSubAuditLogCredentials Credentials { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials">IntegrationGcpPubSubAuditLogCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#credentials IntegrationGcpPubSubAuditLog#credentials}

---

##### `IntegrationType`<sup>Required</sup> <a name="IntegrationType" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.integrationType"></a>

```csharp
public string IntegrationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#integration_type IntegrationGcpPubSubAuditLog#integration_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#name IntegrationGcpPubSubAuditLog#name}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The GCP Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#project_id IntegrationGcpPubSubAuditLog#project_id}

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; set; }
```

- *Type:* string

The PubSub Subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#subscription_id IntegrationGcpPubSubAuditLog#subscription_id}

---

##### `TopicId`<sup>Required</sup> <a name="TopicId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.topicId"></a>

```csharp
public string TopicId { get; set; }
```

- *Type:* string

The PubSub topic id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#topic_id IntegrationGcpPubSubAuditLog#topic_id}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#enabled IntegrationGcpPubSubAuditLog#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#id IntegrationGcpPubSubAuditLog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OrganizationId`<sup>Optional</sup> <a name="OrganizationId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.organizationId"></a>

```csharp
public string OrganizationId { get; set; }
```

- *Type:* string

The GCP Organization ID (required when integration_type is organization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#organization_id IntegrationGcpPubSubAuditLog#organization_id}

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.retries"></a>

```csharp
public double Retries { get; set; }
```

- *Type:* double

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#retries IntegrationGcpPubSubAuditLog#retries}

---

### IntegrationGcpPubSubAuditLogCredentials <a name="IntegrationGcpPubSubAuditLogCredentials" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationGcpPubSubAuditLogCredentials {
    string ClientEmail,
    string ClientId,
    string PrivateKey,
    string PrivateKeyId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.property.clientEmail">ClientEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#client_email IntegrationGcpPubSubAuditLog#client_email}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#client_id IntegrationGcpPubSubAuditLog#client_id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.property.privateKey">PrivateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#private_key IntegrationGcpPubSubAuditLog#private_key}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.property.privateKeyId">PrivateKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#private_key_id IntegrationGcpPubSubAuditLog#private_key_id}. |

---

##### `ClientEmail`<sup>Required</sup> <a name="ClientEmail" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.property.clientEmail"></a>

```csharp
public string ClientEmail { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#client_email IntegrationGcpPubSubAuditLog#client_email}.

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#client_id IntegrationGcpPubSubAuditLog#client_id}.

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.property.privateKey"></a>

```csharp
public string PrivateKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#private_key IntegrationGcpPubSubAuditLog#private_key}.

---

##### `PrivateKeyId`<sup>Required</sup> <a name="PrivateKeyId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.property.privateKeyId"></a>

```csharp
public string PrivateKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#private_key_id IntegrationGcpPubSubAuditLog#private_key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationGcpPubSubAuditLogCredentialsOutputReference <a name="IntegrationGcpPubSubAuditLogCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationGcpPubSubAuditLogCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.clientEmailInput">ClientEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.privateKeyIdInput">PrivateKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.clientEmail">ClientEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.privateKeyId">PrivateKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials">IntegrationGcpPubSubAuditLogCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientEmailInput`<sup>Optional</sup> <a name="ClientEmailInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.clientEmailInput"></a>

```csharp
public string ClientEmailInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `PrivateKeyIdInput`<sup>Optional</sup> <a name="PrivateKeyIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.privateKeyIdInput"></a>

```csharp
public string PrivateKeyIdInput { get; }
```

- *Type:* string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.privateKeyInput"></a>

```csharp
public string PrivateKeyInput { get; }
```

- *Type:* string

---

##### `ClientEmail`<sup>Required</sup> <a name="ClientEmail" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.clientEmail"></a>

```csharp
public string ClientEmail { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `PrivateKeyId`<sup>Required</sup> <a name="PrivateKeyId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.privateKeyId"></a>

```csharp
public string PrivateKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.internalValue"></a>

```csharp
public IntegrationGcpPubSubAuditLogCredentials InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials">IntegrationGcpPubSubAuditLogCredentials</a>

---



