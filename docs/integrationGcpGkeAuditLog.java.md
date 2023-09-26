# `lacework_integration_gcp_gke_audit_log`

Refer to the Terraform Registory for docs: [`lacework_integration_gcp_gke_audit_log`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log).

# `integrationGcpGkeAuditLog` Submodule <a name="`integrationGcpGkeAuditLog` Submodule" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationGcpGkeAuditLog <a name="IntegrationGcpGkeAuditLog" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log lacework_integration_gcp_gke_audit_log}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_gcp_gke_audit_log.IntegrationGcpGkeAuditLog;

IntegrationGcpGkeAuditLog.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .credentials(IntegrationGcpGkeAuditLogCredentials)
    .integrationType(java.lang.String)
    .name(java.lang.String)
    .projectId(java.lang.String)
    .subscription(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .organizationId(java.lang.String)
//  .retries(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials">IntegrationGcpGkeAuditLogCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.integrationType">integrationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#integration_type IntegrationGcpGkeAuditLog#integration_type}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | The GCP Project ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.subscription">subscription</a></code> | <code>java.lang.String</code> | The PubSub Subscription. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#id IntegrationGcpGkeAuditLog#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.organizationId">organizationId</a></code> | <code>java.lang.String</code> | The GCP Organization ID (required when integration_type is organization). |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.retries">retries</a></code> | <code>java.lang.Number</code> | The number of attempts to create the external integration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.credentials"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials">IntegrationGcpGkeAuditLogCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#credentials IntegrationGcpGkeAuditLog#credentials}

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.integrationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#integration_type IntegrationGcpGkeAuditLog#integration_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#name IntegrationGcpGkeAuditLog#name}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

The GCP Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#project_id IntegrationGcpGkeAuditLog#project_id}

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.subscription"></a>

- *Type:* java.lang.String

The PubSub Subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#subscription IntegrationGcpGkeAuditLog#subscription}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#enabled IntegrationGcpGkeAuditLog#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#id IntegrationGcpGkeAuditLog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organizationId`<sup>Optional</sup> <a name="organizationId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.organizationId"></a>

- *Type:* java.lang.String

The GCP Organization ID (required when integration_type is organization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#organization_id IntegrationGcpGkeAuditLog#organization_id}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.retries"></a>

- *Type:* java.lang.Number

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#retries IntegrationGcpGkeAuditLog#retries}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetOrganizationId">resetOrganizationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetRetries">resetRetries</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCredentials` <a name="putCredentials" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.putCredentials"></a>

```java
public void putCredentials(IntegrationGcpGkeAuditLogCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials">IntegrationGcpGkeAuditLogCredentials</a>

---

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetId"></a>

```java
public void resetId()
```

##### `resetOrganizationId` <a name="resetOrganizationId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetOrganizationId"></a>

```java
public void resetOrganizationId()
```

##### `resetRetries` <a name="resetRetries" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetRetries"></a>

```java
public void resetRetries()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_gcp_gke_audit_log.IntegrationGcpGkeAuditLog;

IntegrationGcpGkeAuditLog.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_gcp_gke_audit_log.IntegrationGcpGkeAuditLog;

IntegrationGcpGkeAuditLog.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_gcp_gke_audit_log.IntegrationGcpGkeAuditLog;

IntegrationGcpGkeAuditLog.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.createdOrUpdatedBy">createdOrUpdatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.createdOrUpdatedTime">createdOrUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference">IntegrationGcpGkeAuditLogCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.intgGuid">intgGuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.isOrg">isOrg</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.credentialsInput">credentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials">IntegrationGcpGkeAuditLogCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.integrationTypeInput">integrationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.organizationIdInput">organizationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.retriesInput">retriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.subscriptionInput">subscriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.integrationType">integrationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.retries">retries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.subscription">subscription</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdOrUpdatedBy`<sup>Required</sup> <a name="createdOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.createdOrUpdatedBy"></a>

```java
public java.lang.String getCreatedOrUpdatedBy();
```

- *Type:* java.lang.String

---

##### `createdOrUpdatedTime`<sup>Required</sup> <a name="createdOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.createdOrUpdatedTime"></a>

```java
public java.lang.String getCreatedOrUpdatedTime();
```

- *Type:* java.lang.String

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.credentials"></a>

```java
public IntegrationGcpGkeAuditLogCredentialsOutputReference getCredentials();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference">IntegrationGcpGkeAuditLogCredentialsOutputReference</a>

---

##### `intgGuid`<sup>Required</sup> <a name="intgGuid" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.intgGuid"></a>

```java
public java.lang.String getIntgGuid();
```

- *Type:* java.lang.String

---

##### `isOrg`<sup>Required</sup> <a name="isOrg" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.isOrg"></a>

```java
public IResolvable getIsOrg();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.credentialsInput"></a>

```java
public IntegrationGcpGkeAuditLogCredentials getCredentialsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials">IntegrationGcpGkeAuditLogCredentials</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `integrationTypeInput`<sup>Optional</sup> <a name="integrationTypeInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.integrationTypeInput"></a>

```java
public java.lang.String getIntegrationTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `organizationIdInput`<sup>Optional</sup> <a name="organizationIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.organizationIdInput"></a>

```java
public java.lang.String getOrganizationIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.retriesInput"></a>

```java
public java.lang.Number getRetriesInput();
```

- *Type:* java.lang.Number

---

##### `subscriptionInput`<sup>Optional</sup> <a name="subscriptionInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.subscriptionInput"></a>

```java
public java.lang.String getSubscriptionInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.integrationType"></a>

```java
public java.lang.String getIntegrationType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `retries`<sup>Required</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.subscription"></a>

```java
public java.lang.String getSubscription();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationGcpGkeAuditLogConfig <a name="IntegrationGcpGkeAuditLogConfig" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_gcp_gke_audit_log.IntegrationGcpGkeAuditLogConfig;

IntegrationGcpGkeAuditLogConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .credentials(IntegrationGcpGkeAuditLogCredentials)
    .integrationType(java.lang.String)
    .name(java.lang.String)
    .projectId(java.lang.String)
    .subscription(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .organizationId(java.lang.String)
//  .retries(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials">IntegrationGcpGkeAuditLogCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.integrationType">integrationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#integration_type IntegrationGcpGkeAuditLog#integration_type}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.name">name</a></code> | <code>java.lang.String</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The GCP Project ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.subscription">subscription</a></code> | <code>java.lang.String</code> | The PubSub Subscription. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#id IntegrationGcpGkeAuditLog#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | The GCP Organization ID (required when integration_type is organization). |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.retries">retries</a></code> | <code>java.lang.Number</code> | The number of attempts to create the external integration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.credentials"></a>

```java
public IntegrationGcpGkeAuditLogCredentials getCredentials();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials">IntegrationGcpGkeAuditLogCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#credentials IntegrationGcpGkeAuditLog#credentials}

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.integrationType"></a>

```java
public java.lang.String getIntegrationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#integration_type IntegrationGcpGkeAuditLog#integration_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#name IntegrationGcpGkeAuditLog#name}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The GCP Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#project_id IntegrationGcpGkeAuditLog#project_id}

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.subscription"></a>

```java
public java.lang.String getSubscription();
```

- *Type:* java.lang.String

The PubSub Subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#subscription IntegrationGcpGkeAuditLog#subscription}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#enabled IntegrationGcpGkeAuditLog#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#id IntegrationGcpGkeAuditLog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organizationId`<sup>Optional</sup> <a name="organizationId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

The GCP Organization ID (required when integration_type is organization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#organization_id IntegrationGcpGkeAuditLog#organization_id}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#retries IntegrationGcpGkeAuditLog#retries}

---

### IntegrationGcpGkeAuditLogCredentials <a name="IntegrationGcpGkeAuditLogCredentials" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_gcp_gke_audit_log.IntegrationGcpGkeAuditLogCredentials;

IntegrationGcpGkeAuditLogCredentials.builder()
    .clientEmail(java.lang.String)
    .clientId(java.lang.String)
    .privateKey(java.lang.String)
    .privateKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.property.clientEmail">clientEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#client_email IntegrationGcpGkeAuditLog#client_email}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#client_id IntegrationGcpGkeAuditLog#client_id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#private_key IntegrationGcpGkeAuditLog#private_key}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.property.privateKeyId">privateKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#private_key_id IntegrationGcpGkeAuditLog#private_key_id}. |

---

##### `clientEmail`<sup>Required</sup> <a name="clientEmail" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.property.clientEmail"></a>

```java
public java.lang.String getClientEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#client_email IntegrationGcpGkeAuditLog#client_email}.

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#client_id IntegrationGcpGkeAuditLog#client_id}.

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#private_key IntegrationGcpGkeAuditLog#private_key}.

---

##### `privateKeyId`<sup>Required</sup> <a name="privateKeyId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.property.privateKeyId"></a>

```java
public java.lang.String getPrivateKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#private_key_id IntegrationGcpGkeAuditLog#private_key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationGcpGkeAuditLogCredentialsOutputReference <a name="IntegrationGcpGkeAuditLogCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_gcp_gke_audit_log.IntegrationGcpGkeAuditLogCredentialsOutputReference;

new IntegrationGcpGkeAuditLogCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.clientEmailInput">clientEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.privateKeyIdInput">privateKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.clientEmail">clientEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.privateKeyId">privateKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials">IntegrationGcpGkeAuditLogCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientEmailInput`<sup>Optional</sup> <a name="clientEmailInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.clientEmailInput"></a>

```java
public java.lang.String getClientEmailInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `privateKeyIdInput`<sup>Optional</sup> <a name="privateKeyIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.privateKeyIdInput"></a>

```java
public java.lang.String getPrivateKeyIdInput();
```

- *Type:* java.lang.String

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `clientEmail`<sup>Required</sup> <a name="clientEmail" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.clientEmail"></a>

```java
public java.lang.String getClientEmail();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `privateKeyId`<sup>Required</sup> <a name="privateKeyId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.privateKeyId"></a>

```java
public java.lang.String getPrivateKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.internalValue"></a>

```java
public IntegrationGcpGkeAuditLogCredentials getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials">IntegrationGcpGkeAuditLogCredentials</a>

---



