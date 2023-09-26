# `lacework_integration_aws_eks_audit_log`

Refer to the Terraform Registory for docs: [`lacework_integration_aws_eks_audit_log`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_eks_audit_log).

# `integrationAwsEksAuditLog` Submodule <a name="`integrationAwsEksAuditLog` Submodule" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsEksAuditLog <a name="IntegrationAwsEksAuditLog" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_eks_audit_log lacework_integration_aws_eks_audit_log}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationAwsEksAuditLog(Construct Scope, string Id, IntegrationAwsEksAuditLogConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig">IntegrationAwsEksAuditLogConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig">IntegrationAwsEksAuditLogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.resetRetries">ResetRetries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.resetS3BucketArn">ResetS3BucketArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCredentials` <a name="PutCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.putCredentials"></a>

```csharp
private void PutCredentials(IntegrationAwsEksAuditLogCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentials">IntegrationAwsEksAuditLogCredentials</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRetries` <a name="ResetRetries" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.resetRetries"></a>

```csharp
private void ResetRetries()
```

##### `ResetS3BucketArn` <a name="ResetS3BucketArn" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.resetS3BucketArn"></a>

```csharp
private void ResetS3BucketArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

IntegrationAwsEksAuditLog.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

IntegrationAwsEksAuditLog.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

IntegrationAwsEksAuditLog.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.createdOrUpdatedBy">CreatedOrUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.createdOrUpdatedTime">CreatedOrUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference">IntegrationAwsEksAuditLogCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.intgGuid">IntgGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.isOrg">IsOrg</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.typeName">TypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.credentialsInput">CredentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentials">IntegrationAwsEksAuditLogCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.retriesInput">RetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.s3BucketArnInput">S3BucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.snsArnInput">SnsArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.retries">Retries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.s3BucketArn">S3BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.snsArn">SnsArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedOrUpdatedBy`<sup>Required</sup> <a name="CreatedOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.createdOrUpdatedBy"></a>

```csharp
public string CreatedOrUpdatedBy { get; }
```

- *Type:* string

---

##### `CreatedOrUpdatedTime`<sup>Required</sup> <a name="CreatedOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.createdOrUpdatedTime"></a>

```csharp
public string CreatedOrUpdatedTime { get; }
```

- *Type:* string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.credentials"></a>

```csharp
public IntegrationAwsEksAuditLogCredentialsOutputReference Credentials { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference">IntegrationAwsEksAuditLogCredentialsOutputReference</a>

---

##### `IntgGuid`<sup>Required</sup> <a name="IntgGuid" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.intgGuid"></a>

```csharp
public string IntgGuid { get; }
```

- *Type:* string

---

##### `IsOrg`<sup>Required</sup> <a name="IsOrg" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.isOrg"></a>

```csharp
public IResolvable IsOrg { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.typeName"></a>

```csharp
public string TypeName { get; }
```

- *Type:* string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.credentialsInput"></a>

```csharp
public IntegrationAwsEksAuditLogCredentials CredentialsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentials">IntegrationAwsEksAuditLogCredentials</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.retriesInput"></a>

```csharp
public double RetriesInput { get; }
```

- *Type:* double

---

##### `S3BucketArnInput`<sup>Optional</sup> <a name="S3BucketArnInput" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.s3BucketArnInput"></a>

```csharp
public string S3BucketArnInput { get; }
```

- *Type:* string

---

##### `SnsArnInput`<sup>Optional</sup> <a name="SnsArnInput" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.snsArnInput"></a>

```csharp
public string SnsArnInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.retries"></a>

```csharp
public double Retries { get; }
```

- *Type:* double

---

##### `S3BucketArn`<sup>Required</sup> <a name="S3BucketArn" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.s3BucketArn"></a>

```csharp
public string S3BucketArn { get; }
```

- *Type:* string

---

##### `SnsArn`<sup>Required</sup> <a name="SnsArn" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.snsArn"></a>

```csharp
public string SnsArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLog.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsEksAuditLogConfig <a name="IntegrationAwsEksAuditLogConfig" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationAwsEksAuditLogConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    IntegrationAwsEksAuditLogCredentials Credentials,
    string Name,
    string SnsArn,
    object Enabled = null,
    string Id = null,
    double Retries = null,
    string S3BucketArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentials">IntegrationAwsEksAuditLogCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.name">Name</a></code> | <code>string</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.snsArn">SnsArn</a></code> | <code>string</code> | The SNS ARN. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.enabled">Enabled</a></code> | <code>object</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_eks_audit_log#id IntegrationAwsEksAuditLog#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.retries">Retries</a></code> | <code>double</code> | The number of attempts to create the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.s3BucketArn">S3BucketArn</a></code> | <code>string</code> | The optional S3 Bucket ARN. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.credentials"></a>

```csharp
public IntegrationAwsEksAuditLogCredentials Credentials { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentials">IntegrationAwsEksAuditLogCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_eks_audit_log#credentials IntegrationAwsEksAuditLog#credentials}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_eks_audit_log#name IntegrationAwsEksAuditLog#name}

---

##### `SnsArn`<sup>Required</sup> <a name="SnsArn" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.snsArn"></a>

```csharp
public string SnsArn { get; set; }
```

- *Type:* string

The SNS ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_eks_audit_log#sns_arn IntegrationAwsEksAuditLog#sns_arn}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_eks_audit_log#enabled IntegrationAwsEksAuditLog#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_eks_audit_log#id IntegrationAwsEksAuditLog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.retries"></a>

```csharp
public double Retries { get; set; }
```

- *Type:* double

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_eks_audit_log#retries IntegrationAwsEksAuditLog#retries}

---

##### `S3BucketArn`<sup>Optional</sup> <a name="S3BucketArn" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogConfig.property.s3BucketArn"></a>

```csharp
public string S3BucketArn { get; set; }
```

- *Type:* string

The optional S3 Bucket ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_eks_audit_log#s3_bucket_arn IntegrationAwsEksAuditLog#s3_bucket_arn}

---

### IntegrationAwsEksAuditLogCredentials <a name="IntegrationAwsEksAuditLogCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationAwsEksAuditLogCredentials {
    string ExternalId,
    string RoleArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentials.property.externalId">ExternalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_eks_audit_log#external_id IntegrationAwsEksAuditLog#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentials.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_eks_audit_log#role_arn IntegrationAwsEksAuditLog#role_arn}. |

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentials.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_eks_audit_log#external_id IntegrationAwsEksAuditLog#external_id}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentials.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_eks_audit_log#role_arn IntegrationAwsEksAuditLog#role_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationAwsEksAuditLogCredentialsOutputReference <a name="IntegrationAwsEksAuditLogCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Lacework;

new IntegrationAwsEksAuditLogCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentials">IntegrationAwsEksAuditLogCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentialsOutputReference.property.internalValue"></a>

```csharp
public IntegrationAwsEksAuditLogCredentials InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsEksAuditLog.IntegrationAwsEksAuditLogCredentials">IntegrationAwsEksAuditLogCredentials</a>

---



