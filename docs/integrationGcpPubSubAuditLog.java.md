# `lacework_integration_gcp_pub_sub_audit_log`

Refer to the Terraform Registory for docs: [`lacework_integration_gcp_pub_sub_audit_log`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log).

# `integrationGcpPubSubAuditLog` Submodule <a name="`integrationGcpPubSubAuditLog` Submodule" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationGcpPubSubAuditLog <a name="IntegrationGcpPubSubAuditLog" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log lacework_integration_gcp_pub_sub_audit_log}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_gcp_pub_sub_audit_log.IntegrationGcpPubSubAuditLog;

IntegrationGcpPubSubAuditLog.Builder.create(Construct scope, java.lang.String id)
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
    .credentials(IntegrationGcpPubSubAuditLogCredentials)
    .integrationType(java.lang.String)
    .name(java.lang.String)
    .projectId(java.lang.String)
    .subscriptionId(java.lang.String)
    .topicId(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .organizationId(java.lang.String)
//  .retries(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials">IntegrationGcpPubSubAuditLogCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.integrationType">integrationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#integration_type IntegrationGcpPubSubAuditLog#integration_type}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | The GCP Project ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | The PubSub Subscription. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.topicId">topicId</a></code> | <code>java.lang.String</code> | The PubSub topic id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#id IntegrationGcpPubSubAuditLog#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.organizationId">organizationId</a></code> | <code>java.lang.String</code> | The GCP Organization ID (required when integration_type is organization). |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.retries">retries</a></code> | <code>java.lang.Number</code> | The number of attempts to create the external integration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.credentials"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials">IntegrationGcpPubSubAuditLogCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#credentials IntegrationGcpPubSubAuditLog#credentials}

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.integrationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#integration_type IntegrationGcpPubSubAuditLog#integration_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#name IntegrationGcpPubSubAuditLog#name}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

The GCP Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#project_id IntegrationGcpPubSubAuditLog#project_id}

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.subscriptionId"></a>

- *Type:* java.lang.String

The PubSub Subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#subscription_id IntegrationGcpPubSubAuditLog#subscription_id}

---

##### `topicId`<sup>Required</sup> <a name="topicId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.topicId"></a>

- *Type:* java.lang.String

The PubSub topic id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#topic_id IntegrationGcpPubSubAuditLog#topic_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#enabled IntegrationGcpPubSubAuditLog#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#id IntegrationGcpPubSubAuditLog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organizationId`<sup>Optional</sup> <a name="organizationId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.organizationId"></a>

- *Type:* java.lang.String

The GCP Organization ID (required when integration_type is organization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#organization_id IntegrationGcpPubSubAuditLog#organization_id}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.retries"></a>

- *Type:* java.lang.Number

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#retries IntegrationGcpPubSubAuditLog#retries}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetOrganizationId">resetOrganizationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetRetries">resetRetries</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCredentials` <a name="putCredentials" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.putCredentials"></a>

```java
public void putCredentials(IntegrationGcpPubSubAuditLogCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials">IntegrationGcpPubSubAuditLogCredentials</a>

---

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetId"></a>

```java
public void resetId()
```

##### `resetOrganizationId` <a name="resetOrganizationId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetOrganizationId"></a>

```java
public void resetOrganizationId()
```

##### `resetRetries` <a name="resetRetries" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetRetries"></a>

```java
public void resetRetries()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_gcp_pub_sub_audit_log.IntegrationGcpPubSubAuditLog;

IntegrationGcpPubSubAuditLog.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_gcp_pub_sub_audit_log.IntegrationGcpPubSubAuditLog;

IntegrationGcpPubSubAuditLog.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_gcp_pub_sub_audit_log.IntegrationGcpPubSubAuditLog;

IntegrationGcpPubSubAuditLog.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.createdOrUpdatedBy">createdOrUpdatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.createdOrUpdatedTime">createdOrUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference">IntegrationGcpPubSubAuditLogCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.intgGuid">intgGuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.isOrg">isOrg</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.credentialsInput">credentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials">IntegrationGcpPubSubAuditLogCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.integrationTypeInput">integrationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.organizationIdInput">organizationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.retriesInput">retriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.topicIdInput">topicIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.integrationType">integrationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.retries">retries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.topicId">topicId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdOrUpdatedBy`<sup>Required</sup> <a name="createdOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.createdOrUpdatedBy"></a>

```java
public java.lang.String getCreatedOrUpdatedBy();
```

- *Type:* java.lang.String

---

##### `createdOrUpdatedTime`<sup>Required</sup> <a name="createdOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.createdOrUpdatedTime"></a>

```java
public java.lang.String getCreatedOrUpdatedTime();
```

- *Type:* java.lang.String

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.credentials"></a>

```java
public IntegrationGcpPubSubAuditLogCredentialsOutputReference getCredentials();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference">IntegrationGcpPubSubAuditLogCredentialsOutputReference</a>

---

##### `intgGuid`<sup>Required</sup> <a name="intgGuid" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.intgGuid"></a>

```java
public java.lang.String getIntgGuid();
```

- *Type:* java.lang.String

---

##### `isOrg`<sup>Required</sup> <a name="isOrg" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.isOrg"></a>

```java
public IResolvable getIsOrg();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.credentialsInput"></a>

```java
public IntegrationGcpPubSubAuditLogCredentials getCredentialsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials">IntegrationGcpPubSubAuditLogCredentials</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `integrationTypeInput`<sup>Optional</sup> <a name="integrationTypeInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.integrationTypeInput"></a>

```java
public java.lang.String getIntegrationTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `organizationIdInput`<sup>Optional</sup> <a name="organizationIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.organizationIdInput"></a>

```java
public java.lang.String getOrganizationIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.retriesInput"></a>

```java
public java.lang.Number getRetriesInput();
```

- *Type:* java.lang.Number

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.subscriptionIdInput"></a>

```java
public java.lang.String getSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `topicIdInput`<sup>Optional</sup> <a name="topicIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.topicIdInput"></a>

```java
public java.lang.String getTopicIdInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.integrationType"></a>

```java
public java.lang.String getIntegrationType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `retries`<sup>Required</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

##### `topicId`<sup>Required</sup> <a name="topicId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.topicId"></a>

```java
public java.lang.String getTopicId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationGcpPubSubAuditLogConfig <a name="IntegrationGcpPubSubAuditLogConfig" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_gcp_pub_sub_audit_log.IntegrationGcpPubSubAuditLogConfig;

IntegrationGcpPubSubAuditLogConfig.builder()
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
    .credentials(IntegrationGcpPubSubAuditLogCredentials)
    .integrationType(java.lang.String)
    .name(java.lang.String)
    .projectId(java.lang.String)
    .subscriptionId(java.lang.String)
    .topicId(java.lang.String)
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
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials">IntegrationGcpPubSubAuditLogCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.integrationType">integrationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#integration_type IntegrationGcpPubSubAuditLog#integration_type}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.name">name</a></code> | <code>java.lang.String</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The GCP Project ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | The PubSub Subscription. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.topicId">topicId</a></code> | <code>java.lang.String</code> | The PubSub topic id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#id IntegrationGcpPubSubAuditLog#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | The GCP Organization ID (required when integration_type is organization). |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.retries">retries</a></code> | <code>java.lang.Number</code> | The number of attempts to create the external integration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.credentials"></a>

```java
public IntegrationGcpPubSubAuditLogCredentials getCredentials();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials">IntegrationGcpPubSubAuditLogCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#credentials IntegrationGcpPubSubAuditLog#credentials}

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.integrationType"></a>

```java
public java.lang.String getIntegrationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#integration_type IntegrationGcpPubSubAuditLog#integration_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#name IntegrationGcpPubSubAuditLog#name}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The GCP Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#project_id IntegrationGcpPubSubAuditLog#project_id}

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

The PubSub Subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#subscription_id IntegrationGcpPubSubAuditLog#subscription_id}

---

##### `topicId`<sup>Required</sup> <a name="topicId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.topicId"></a>

```java
public java.lang.String getTopicId();
```

- *Type:* java.lang.String

The PubSub topic id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#topic_id IntegrationGcpPubSubAuditLog#topic_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#enabled IntegrationGcpPubSubAuditLog#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#id IntegrationGcpPubSubAuditLog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organizationId`<sup>Optional</sup> <a name="organizationId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

The GCP Organization ID (required when integration_type is organization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#organization_id IntegrationGcpPubSubAuditLog#organization_id}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#retries IntegrationGcpPubSubAuditLog#retries}

---

### IntegrationGcpPubSubAuditLogCredentials <a name="IntegrationGcpPubSubAuditLogCredentials" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_gcp_pub_sub_audit_log.IntegrationGcpPubSubAuditLogCredentials;

IntegrationGcpPubSubAuditLogCredentials.builder()
    .clientEmail(java.lang.String)
    .clientId(java.lang.String)
    .privateKey(java.lang.String)
    .privateKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.property.clientEmail">clientEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#client_email IntegrationGcpPubSubAuditLog#client_email}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#client_id IntegrationGcpPubSubAuditLog#client_id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#private_key IntegrationGcpPubSubAuditLog#private_key}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.property.privateKeyId">privateKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#private_key_id IntegrationGcpPubSubAuditLog#private_key_id}. |

---

##### `clientEmail`<sup>Required</sup> <a name="clientEmail" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.property.clientEmail"></a>

```java
public java.lang.String getClientEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#client_email IntegrationGcpPubSubAuditLog#client_email}.

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#client_id IntegrationGcpPubSubAuditLog#client_id}.

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#private_key IntegrationGcpPubSubAuditLog#private_key}.

---

##### `privateKeyId`<sup>Required</sup> <a name="privateKeyId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.property.privateKeyId"></a>

```java
public java.lang.String getPrivateKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#private_key_id IntegrationGcpPubSubAuditLog#private_key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationGcpPubSubAuditLogCredentialsOutputReference <a name="IntegrationGcpPubSubAuditLogCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_gcp_pub_sub_audit_log.IntegrationGcpPubSubAuditLogCredentialsOutputReference;

new IntegrationGcpPubSubAuditLogCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.clientEmailInput">clientEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.privateKeyIdInput">privateKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.clientEmail">clientEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.privateKeyId">privateKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials">IntegrationGcpPubSubAuditLogCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientEmailInput`<sup>Optional</sup> <a name="clientEmailInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.clientEmailInput"></a>

```java
public java.lang.String getClientEmailInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `privateKeyIdInput`<sup>Optional</sup> <a name="privateKeyIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.privateKeyIdInput"></a>

```java
public java.lang.String getPrivateKeyIdInput();
```

- *Type:* java.lang.String

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `clientEmail`<sup>Required</sup> <a name="clientEmail" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.clientEmail"></a>

```java
public java.lang.String getClientEmail();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `privateKeyId`<sup>Required</sup> <a name="privateKeyId" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.privateKeyId"></a>

```java
public java.lang.String getPrivateKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.internalValue"></a>

```java
public IntegrationGcpPubSubAuditLogCredentials getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials">IntegrationGcpPubSubAuditLogCredentials</a>

---



