# `lacework_integration_docker_v2`

Refer to the Terraform Registory for docs: [`lacework_integration_docker_v2`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2).

# `integrationDockerV2` Submodule <a name="`integrationDockerV2` Submodule" id="rhizo-co-terraform-provider-lacework.integrationDockerV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationDockerV2 <a name="IntegrationDockerV2" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2 lacework_integration_docker_v2}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_docker_v2.IntegrationDockerV2;

IntegrationDockerV2.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .password(java.lang.String)
    .registryDomain(java.lang.String)
    .username(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .limitByLabel(IResolvable)
//  .limitByLabel(java.util.List<IntegrationDockerV2LimitByLabel>)
//  .limitByTags(java.util.List<java.lang.String>)
//  .nonOsPackageSupport(java.lang.Boolean)
//  .nonOsPackageSupport(IResolvable)
//  .notifications(java.lang.Boolean)
//  .notifications(IResolvable)
//  .ssl(java.lang.Boolean)
//  .ssl(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#name IntegrationDockerV2#name}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#password IntegrationDockerV2#password}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.registryDomain">registryDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#registry_domain IntegrationDockerV2#registry_domain}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#username IntegrationDockerV2#username}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#enabled IntegrationDockerV2#enabled}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#id IntegrationDockerV2#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.limitByLabel">limitByLabel</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel">IntegrationDockerV2LimitByLabel</a>></code> | limit_by_label block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.limitByTags">limitByTags</a></code> | <code>java.util.List<java.lang.String></code> | A list of image tags to limit the assessment of images with matching tags. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.nonOsPackageSupport">nonOsPackageSupport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable program language scanning. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.notifications">notifications</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Subscribe to registry notifications. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.ssl">ssl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#ssl IntegrationDockerV2#ssl}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#name IntegrationDockerV2#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#password IntegrationDockerV2#password}.

---

##### `registryDomain`<sup>Required</sup> <a name="registryDomain" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.registryDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#registry_domain IntegrationDockerV2#registry_domain}.

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#username IntegrationDockerV2#username}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#enabled IntegrationDockerV2#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#id IntegrationDockerV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limitByLabel`<sup>Optional</sup> <a name="limitByLabel" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.limitByLabel"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel">IntegrationDockerV2LimitByLabel</a>>

limit_by_label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#limit_by_label IntegrationDockerV2#limit_by_label}

---

##### `limitByTags`<sup>Optional</sup> <a name="limitByTags" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.limitByTags"></a>

- *Type:* java.util.List<java.lang.String>

A list of image tags to limit the assessment of images with matching tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#limit_by_tags IntegrationDockerV2#limit_by_tags}

---

##### `nonOsPackageSupport`<sup>Optional</sup> <a name="nonOsPackageSupport" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.nonOsPackageSupport"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable program language scanning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#non_os_package_support IntegrationDockerV2#non_os_package_support}

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.notifications"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Subscribe to registry notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#notifications IntegrationDockerV2#notifications}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.ssl"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#ssl IntegrationDockerV2#ssl}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.putLimitByLabel">putLimitByLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.resetLimitByLabel">resetLimitByLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.resetLimitByTags">resetLimitByTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.resetNonOsPackageSupport">resetNonOsPackageSupport</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.resetNotifications">resetNotifications</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.resetSsl">resetSsl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putLimitByLabel` <a name="putLimitByLabel" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.putLimitByLabel"></a>

```java
public void putLimitByLabel(IResolvable OR java.util.List<IntegrationDockerV2LimitByLabel> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.putLimitByLabel.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel">IntegrationDockerV2LimitByLabel</a>>

---

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.resetId"></a>

```java
public void resetId()
```

##### `resetLimitByLabel` <a name="resetLimitByLabel" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.resetLimitByLabel"></a>

```java
public void resetLimitByLabel()
```

##### `resetLimitByTags` <a name="resetLimitByTags" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.resetLimitByTags"></a>

```java
public void resetLimitByTags()
```

##### `resetNonOsPackageSupport` <a name="resetNonOsPackageSupport" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.resetNonOsPackageSupport"></a>

```java
public void resetNonOsPackageSupport()
```

##### `resetNotifications` <a name="resetNotifications" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.resetNotifications"></a>

```java
public void resetNotifications()
```

##### `resetSsl` <a name="resetSsl" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.resetSsl"></a>

```java
public void resetSsl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_docker_v2.IntegrationDockerV2;

IntegrationDockerV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_docker_v2.IntegrationDockerV2;

IntegrationDockerV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_docker_v2.IntegrationDockerV2;

IntegrationDockerV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.createdOrUpdatedBy">createdOrUpdatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.createdOrUpdatedTime">createdOrUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.intgGuid">intgGuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.limitByLabel">limitByLabel</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList">IntegrationDockerV2LimitByLabelList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.orgLevel">orgLevel</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.typeName">typeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.limitByLabelInput">limitByLabelInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel">IntegrationDockerV2LimitByLabel</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.limitByTagsInput">limitByTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.nonOsPackageSupportInput">nonOsPackageSupportInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.notificationsInput">notificationsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.registryDomainInput">registryDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.sslInput">sslInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.limitByTags">limitByTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.nonOsPackageSupport">nonOsPackageSupport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.notifications">notifications</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.registryDomain">registryDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.ssl">ssl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdOrUpdatedBy`<sup>Required</sup> <a name="createdOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.createdOrUpdatedBy"></a>

```java
public java.lang.String getCreatedOrUpdatedBy();
```

- *Type:* java.lang.String

---

##### `createdOrUpdatedTime`<sup>Required</sup> <a name="createdOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.createdOrUpdatedTime"></a>

```java
public java.lang.String getCreatedOrUpdatedTime();
```

- *Type:* java.lang.String

---

##### `intgGuid`<sup>Required</sup> <a name="intgGuid" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.intgGuid"></a>

```java
public java.lang.String getIntgGuid();
```

- *Type:* java.lang.String

---

##### `limitByLabel`<sup>Required</sup> <a name="limitByLabel" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.limitByLabel"></a>

```java
public IntegrationDockerV2LimitByLabelList getLimitByLabel();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList">IntegrationDockerV2LimitByLabelList</a>

---

##### `orgLevel`<sup>Required</sup> <a name="orgLevel" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.orgLevel"></a>

```java
public IResolvable getOrgLevel();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `limitByLabelInput`<sup>Optional</sup> <a name="limitByLabelInput" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.limitByLabelInput"></a>

```java
public java.lang.Object getLimitByLabelInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel">IntegrationDockerV2LimitByLabel</a>>

---

##### `limitByTagsInput`<sup>Optional</sup> <a name="limitByTagsInput" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.limitByTagsInput"></a>

```java
public java.util.List<java.lang.String> getLimitByTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nonOsPackageSupportInput`<sup>Optional</sup> <a name="nonOsPackageSupportInput" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.nonOsPackageSupportInput"></a>

```java
public java.lang.Object getNonOsPackageSupportInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `notificationsInput`<sup>Optional</sup> <a name="notificationsInput" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.notificationsInput"></a>

```java
public java.lang.Object getNotificationsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `registryDomainInput`<sup>Optional</sup> <a name="registryDomainInput" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.registryDomainInput"></a>

```java
public java.lang.String getRegistryDomainInput();
```

- *Type:* java.lang.String

---

##### `sslInput`<sup>Optional</sup> <a name="sslInput" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.sslInput"></a>

```java
public java.lang.Object getSslInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `limitByTags`<sup>Required</sup> <a name="limitByTags" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.limitByTags"></a>

```java
public java.util.List<java.lang.String> getLimitByTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nonOsPackageSupport`<sup>Required</sup> <a name="nonOsPackageSupport" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.nonOsPackageSupport"></a>

```java
public java.lang.Object getNonOsPackageSupport();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.notifications"></a>

```java
public java.lang.Object getNotifications();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `registryDomain`<sup>Required</sup> <a name="registryDomain" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.registryDomain"></a>

```java
public java.lang.String getRegistryDomain();
```

- *Type:* java.lang.String

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.ssl"></a>

```java
public java.lang.Object getSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationDockerV2Config <a name="IntegrationDockerV2Config" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_docker_v2.IntegrationDockerV2Config;

IntegrationDockerV2Config.builder()
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
    .name(java.lang.String)
    .password(java.lang.String)
    .registryDomain(java.lang.String)
    .username(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .limitByLabel(IResolvable)
//  .limitByLabel(java.util.List<IntegrationDockerV2LimitByLabel>)
//  .limitByTags(java.util.List<java.lang.String>)
//  .nonOsPackageSupport(java.lang.Boolean)
//  .nonOsPackageSupport(IResolvable)
//  .notifications(java.lang.Boolean)
//  .notifications(IResolvable)
//  .ssl(java.lang.Boolean)
//  .ssl(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#name IntegrationDockerV2#name}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#password IntegrationDockerV2#password}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.registryDomain">registryDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#registry_domain IntegrationDockerV2#registry_domain}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#username IntegrationDockerV2#username}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#enabled IntegrationDockerV2#enabled}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#id IntegrationDockerV2#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.limitByLabel">limitByLabel</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel">IntegrationDockerV2LimitByLabel</a>></code> | limit_by_label block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.limitByTags">limitByTags</a></code> | <code>java.util.List<java.lang.String></code> | A list of image tags to limit the assessment of images with matching tags. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.nonOsPackageSupport">nonOsPackageSupport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable program language scanning. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.notifications">notifications</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Subscribe to registry notifications. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.ssl">ssl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#ssl IntegrationDockerV2#ssl}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#name IntegrationDockerV2#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#password IntegrationDockerV2#password}.

---

##### `registryDomain`<sup>Required</sup> <a name="registryDomain" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.registryDomain"></a>

```java
public java.lang.String getRegistryDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#registry_domain IntegrationDockerV2#registry_domain}.

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#username IntegrationDockerV2#username}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#enabled IntegrationDockerV2#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#id IntegrationDockerV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limitByLabel`<sup>Optional</sup> <a name="limitByLabel" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.limitByLabel"></a>

```java
public java.lang.Object getLimitByLabel();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel">IntegrationDockerV2LimitByLabel</a>>

limit_by_label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#limit_by_label IntegrationDockerV2#limit_by_label}

---

##### `limitByTags`<sup>Optional</sup> <a name="limitByTags" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.limitByTags"></a>

```java
public java.util.List<java.lang.String> getLimitByTags();
```

- *Type:* java.util.List<java.lang.String>

A list of image tags to limit the assessment of images with matching tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#limit_by_tags IntegrationDockerV2#limit_by_tags}

---

##### `nonOsPackageSupport`<sup>Optional</sup> <a name="nonOsPackageSupport" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.nonOsPackageSupport"></a>

```java
public java.lang.Object getNonOsPackageSupport();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable program language scanning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#non_os_package_support IntegrationDockerV2#non_os_package_support}

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.notifications"></a>

```java
public java.lang.Object getNotifications();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Subscribe to registry notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#notifications IntegrationDockerV2#notifications}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.ssl"></a>

```java
public java.lang.Object getSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#ssl IntegrationDockerV2#ssl}.

---

### IntegrationDockerV2LimitByLabel <a name="IntegrationDockerV2LimitByLabel" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_docker_v2.IntegrationDockerV2LimitByLabel;

IntegrationDockerV2LimitByLabel.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#key IntegrationDockerV2#key}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#value IntegrationDockerV2#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#key IntegrationDockerV2#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#value IntegrationDockerV2#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationDockerV2LimitByLabelList <a name="IntegrationDockerV2LimitByLabelList" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_docker_v2.IntegrationDockerV2LimitByLabelList;

new IntegrationDockerV2LimitByLabelList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.get"></a>

```java
public IntegrationDockerV2LimitByLabelOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel">IntegrationDockerV2LimitByLabel</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel">IntegrationDockerV2LimitByLabel</a>>

---


### IntegrationDockerV2LimitByLabelOutputReference <a name="IntegrationDockerV2LimitByLabelOutputReference" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_docker_v2.IntegrationDockerV2LimitByLabelOutputReference;

new IntegrationDockerV2LimitByLabelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel">IntegrationDockerV2LimitByLabel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel">IntegrationDockerV2LimitByLabel</a>

---



