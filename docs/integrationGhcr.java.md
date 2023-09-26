# `lacework_integration_ghcr`

Refer to the Terraform Registory for docs: [`lacework_integration_ghcr`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr).

# `integrationGhcr` Submodule <a name="`integrationGhcr` Submodule" id="rhizo-co-terraform-provider-lacework.integrationGhcr"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationGhcr <a name="IntegrationGhcr" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr lacework_integration_ghcr}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_ghcr.IntegrationGhcr;

IntegrationGhcr.Builder.create(Construct scope, java.lang.String id)
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
    .username(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .limitByLabel(IResolvable)
//  .limitByLabel(java.util.List<IntegrationGhcrLimitByLabel>)
//  .limitByRepositories(java.util.List<java.lang.String>)
//  .limitByTags(java.util.List<java.lang.String>)
//  .limitNumImgs(java.lang.Number)
//  .nonOsPackageSupport(java.lang.Boolean)
//  .nonOsPackageSupport(IResolvable)
//  .registryNotifications(java.lang.Boolean)
//  .registryNotifications(IResolvable)
//  .ssl(java.lang.Boolean)
//  .ssl(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | The Github personal access token with read:packages. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | The username with permissions to pull the images from the container registry. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#id IntegrationGhcr#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.limitByLabel">limitByLabel</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel">IntegrationGhcrLimitByLabel</a>></code> | limit_by_label block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.limitByRepositories">limitByRepositories</a></code> | <code>java.util.List<java.lang.String></code> | A list of repositories to assess. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.limitByTags">limitByTags</a></code> | <code>java.util.List<java.lang.String></code> | A list of image tags to limit the assessment of images with matching tags. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.limitNumImgs">limitNumImgs</a></code> | <code>java.lang.Number</code> | The maximum number of newest container images to assess per repository. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.nonOsPackageSupport">nonOsPackageSupport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable program language scanning. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.registryNotifications">registryNotifications</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Subscribe to Registry Notifications. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.ssl">ssl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable or disable SSL communication. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#name IntegrationGhcr#name}

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.password"></a>

- *Type:* java.lang.String

The Github personal access token with read:packages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#password IntegrationGhcr#password}

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.username"></a>

- *Type:* java.lang.String

The username with permissions to pull the images from the container registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#username IntegrationGhcr#username}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#enabled IntegrationGhcr#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#id IntegrationGhcr#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limitByLabel`<sup>Optional</sup> <a name="limitByLabel" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.limitByLabel"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel">IntegrationGhcrLimitByLabel</a>>

limit_by_label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#limit_by_label IntegrationGhcr#limit_by_label}

---

##### `limitByRepositories`<sup>Optional</sup> <a name="limitByRepositories" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.limitByRepositories"></a>

- *Type:* java.util.List<java.lang.String>

A list of repositories to assess.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#limit_by_repositories IntegrationGhcr#limit_by_repositories}

---

##### `limitByTags`<sup>Optional</sup> <a name="limitByTags" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.limitByTags"></a>

- *Type:* java.util.List<java.lang.String>

A list of image tags to limit the assessment of images with matching tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#limit_by_tags IntegrationGhcr#limit_by_tags}

---

##### `limitNumImgs`<sup>Optional</sup> <a name="limitNumImgs" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.limitNumImgs"></a>

- *Type:* java.lang.Number

The maximum number of newest container images to assess per repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#limit_num_imgs IntegrationGhcr#limit_num_imgs}

---

##### `nonOsPackageSupport`<sup>Optional</sup> <a name="nonOsPackageSupport" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.nonOsPackageSupport"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable program language scanning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#non_os_package_support IntegrationGhcr#non_os_package_support}

---

##### `registryNotifications`<sup>Optional</sup> <a name="registryNotifications" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.registryNotifications"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Subscribe to Registry Notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#registry_notifications IntegrationGhcr#registry_notifications}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.ssl"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable or disable SSL communication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#ssl IntegrationGhcr#ssl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.putLimitByLabel">putLimitByLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetLimitByLabel">resetLimitByLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetLimitByRepositories">resetLimitByRepositories</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetLimitByTags">resetLimitByTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetLimitNumImgs">resetLimitNumImgs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetNonOsPackageSupport">resetNonOsPackageSupport</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetRegistryNotifications">resetRegistryNotifications</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetSsl">resetSsl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putLimitByLabel` <a name="putLimitByLabel" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.putLimitByLabel"></a>

```java
public void putLimitByLabel(IResolvable OR java.util.List<IntegrationGhcrLimitByLabel> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.putLimitByLabel.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel">IntegrationGhcrLimitByLabel</a>>

---

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetId"></a>

```java
public void resetId()
```

##### `resetLimitByLabel` <a name="resetLimitByLabel" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetLimitByLabel"></a>

```java
public void resetLimitByLabel()
```

##### `resetLimitByRepositories` <a name="resetLimitByRepositories" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetLimitByRepositories"></a>

```java
public void resetLimitByRepositories()
```

##### `resetLimitByTags` <a name="resetLimitByTags" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetLimitByTags"></a>

```java
public void resetLimitByTags()
```

##### `resetLimitNumImgs` <a name="resetLimitNumImgs" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetLimitNumImgs"></a>

```java
public void resetLimitNumImgs()
```

##### `resetNonOsPackageSupport` <a name="resetNonOsPackageSupport" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetNonOsPackageSupport"></a>

```java
public void resetNonOsPackageSupport()
```

##### `resetRegistryNotifications` <a name="resetRegistryNotifications" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetRegistryNotifications"></a>

```java
public void resetRegistryNotifications()
```

##### `resetSsl` <a name="resetSsl" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetSsl"></a>

```java
public void resetSsl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_ghcr.IntegrationGhcr;

IntegrationGhcr.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_ghcr.IntegrationGhcr;

IntegrationGhcr.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_ghcr.IntegrationGhcr;

IntegrationGhcr.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.createdOrUpdatedBy">createdOrUpdatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.createdOrUpdatedTime">createdOrUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.intgGuid">intgGuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.limitByLabel">limitByLabel</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList">IntegrationGhcrLimitByLabelList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.orgLevel">orgLevel</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.registryDomain">registryDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.typeName">typeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.limitByLabelInput">limitByLabelInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel">IntegrationGhcrLimitByLabel</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.limitByRepositoriesInput">limitByRepositoriesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.limitByTagsInput">limitByTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.limitNumImgsInput">limitNumImgsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.nonOsPackageSupportInput">nonOsPackageSupportInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.registryNotificationsInput">registryNotificationsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.sslInput">sslInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.limitByRepositories">limitByRepositories</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.limitByTags">limitByTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.limitNumImgs">limitNumImgs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.nonOsPackageSupport">nonOsPackageSupport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.registryNotifications">registryNotifications</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.ssl">ssl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdOrUpdatedBy`<sup>Required</sup> <a name="createdOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.createdOrUpdatedBy"></a>

```java
public java.lang.String getCreatedOrUpdatedBy();
```

- *Type:* java.lang.String

---

##### `createdOrUpdatedTime`<sup>Required</sup> <a name="createdOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.createdOrUpdatedTime"></a>

```java
public java.lang.String getCreatedOrUpdatedTime();
```

- *Type:* java.lang.String

---

##### `intgGuid`<sup>Required</sup> <a name="intgGuid" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.intgGuid"></a>

```java
public java.lang.String getIntgGuid();
```

- *Type:* java.lang.String

---

##### `limitByLabel`<sup>Required</sup> <a name="limitByLabel" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.limitByLabel"></a>

```java
public IntegrationGhcrLimitByLabelList getLimitByLabel();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList">IntegrationGhcrLimitByLabelList</a>

---

##### `orgLevel`<sup>Required</sup> <a name="orgLevel" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.orgLevel"></a>

```java
public IResolvable getOrgLevel();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `registryDomain`<sup>Required</sup> <a name="registryDomain" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.registryDomain"></a>

```java
public java.lang.String getRegistryDomain();
```

- *Type:* java.lang.String

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `limitByLabelInput`<sup>Optional</sup> <a name="limitByLabelInput" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.limitByLabelInput"></a>

```java
public java.lang.Object getLimitByLabelInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel">IntegrationGhcrLimitByLabel</a>>

---

##### `limitByRepositoriesInput`<sup>Optional</sup> <a name="limitByRepositoriesInput" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.limitByRepositoriesInput"></a>

```java
public java.util.List<java.lang.String> getLimitByRepositoriesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `limitByTagsInput`<sup>Optional</sup> <a name="limitByTagsInput" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.limitByTagsInput"></a>

```java
public java.util.List<java.lang.String> getLimitByTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `limitNumImgsInput`<sup>Optional</sup> <a name="limitNumImgsInput" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.limitNumImgsInput"></a>

```java
public java.lang.Number getLimitNumImgsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nonOsPackageSupportInput`<sup>Optional</sup> <a name="nonOsPackageSupportInput" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.nonOsPackageSupportInput"></a>

```java
public java.lang.Object getNonOsPackageSupportInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `registryNotificationsInput`<sup>Optional</sup> <a name="registryNotificationsInput" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.registryNotificationsInput"></a>

```java
public java.lang.Object getRegistryNotificationsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sslInput`<sup>Optional</sup> <a name="sslInput" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.sslInput"></a>

```java
public java.lang.Object getSslInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `limitByRepositories`<sup>Required</sup> <a name="limitByRepositories" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.limitByRepositories"></a>

```java
public java.util.List<java.lang.String> getLimitByRepositories();
```

- *Type:* java.util.List<java.lang.String>

---

##### `limitByTags`<sup>Required</sup> <a name="limitByTags" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.limitByTags"></a>

```java
public java.util.List<java.lang.String> getLimitByTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `limitNumImgs`<sup>Required</sup> <a name="limitNumImgs" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.limitNumImgs"></a>

```java
public java.lang.Number getLimitNumImgs();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nonOsPackageSupport`<sup>Required</sup> <a name="nonOsPackageSupport" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.nonOsPackageSupport"></a>

```java
public java.lang.Object getNonOsPackageSupport();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `registryNotifications`<sup>Required</sup> <a name="registryNotifications" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.registryNotifications"></a>

```java
public java.lang.Object getRegistryNotifications();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.ssl"></a>

```java
public java.lang.Object getSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationGhcrConfig <a name="IntegrationGhcrConfig" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_ghcr.IntegrationGhcrConfig;

IntegrationGhcrConfig.builder()
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
    .username(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .limitByLabel(IResolvable)
//  .limitByLabel(java.util.List<IntegrationGhcrLimitByLabel>)
//  .limitByRepositories(java.util.List<java.lang.String>)
//  .limitByTags(java.util.List<java.lang.String>)
//  .limitNumImgs(java.lang.Number)
//  .nonOsPackageSupport(java.lang.Boolean)
//  .nonOsPackageSupport(IResolvable)
//  .registryNotifications(java.lang.Boolean)
//  .registryNotifications(IResolvable)
//  .ssl(java.lang.Boolean)
//  .ssl(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.name">name</a></code> | <code>java.lang.String</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.password">password</a></code> | <code>java.lang.String</code> | The Github personal access token with read:packages. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.username">username</a></code> | <code>java.lang.String</code> | The username with permissions to pull the images from the container registry. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#id IntegrationGhcr#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.limitByLabel">limitByLabel</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel">IntegrationGhcrLimitByLabel</a>></code> | limit_by_label block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.limitByRepositories">limitByRepositories</a></code> | <code>java.util.List<java.lang.String></code> | A list of repositories to assess. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.limitByTags">limitByTags</a></code> | <code>java.util.List<java.lang.String></code> | A list of image tags to limit the assessment of images with matching tags. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.limitNumImgs">limitNumImgs</a></code> | <code>java.lang.Number</code> | The maximum number of newest container images to assess per repository. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.nonOsPackageSupport">nonOsPackageSupport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable program language scanning. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.registryNotifications">registryNotifications</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Subscribe to Registry Notifications. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.ssl">ssl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable or disable SSL communication. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#name IntegrationGhcr#name}

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The Github personal access token with read:packages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#password IntegrationGhcr#password}

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The username with permissions to pull the images from the container registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#username IntegrationGhcr#username}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#enabled IntegrationGhcr#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#id IntegrationGhcr#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limitByLabel`<sup>Optional</sup> <a name="limitByLabel" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.limitByLabel"></a>

```java
public java.lang.Object getLimitByLabel();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel">IntegrationGhcrLimitByLabel</a>>

limit_by_label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#limit_by_label IntegrationGhcr#limit_by_label}

---

##### `limitByRepositories`<sup>Optional</sup> <a name="limitByRepositories" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.limitByRepositories"></a>

```java
public java.util.List<java.lang.String> getLimitByRepositories();
```

- *Type:* java.util.List<java.lang.String>

A list of repositories to assess.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#limit_by_repositories IntegrationGhcr#limit_by_repositories}

---

##### `limitByTags`<sup>Optional</sup> <a name="limitByTags" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.limitByTags"></a>

```java
public java.util.List<java.lang.String> getLimitByTags();
```

- *Type:* java.util.List<java.lang.String>

A list of image tags to limit the assessment of images with matching tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#limit_by_tags IntegrationGhcr#limit_by_tags}

---

##### `limitNumImgs`<sup>Optional</sup> <a name="limitNumImgs" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.limitNumImgs"></a>

```java
public java.lang.Number getLimitNumImgs();
```

- *Type:* java.lang.Number

The maximum number of newest container images to assess per repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#limit_num_imgs IntegrationGhcr#limit_num_imgs}

---

##### `nonOsPackageSupport`<sup>Optional</sup> <a name="nonOsPackageSupport" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.nonOsPackageSupport"></a>

```java
public java.lang.Object getNonOsPackageSupport();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable program language scanning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#non_os_package_support IntegrationGhcr#non_os_package_support}

---

##### `registryNotifications`<sup>Optional</sup> <a name="registryNotifications" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.registryNotifications"></a>

```java
public java.lang.Object getRegistryNotifications();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Subscribe to Registry Notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#registry_notifications IntegrationGhcr#registry_notifications}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.ssl"></a>

```java
public java.lang.Object getSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable or disable SSL communication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#ssl IntegrationGhcr#ssl}

---

### IntegrationGhcrLimitByLabel <a name="IntegrationGhcrLimitByLabel" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_ghcr.IntegrationGhcrLimitByLabel;

IntegrationGhcrLimitByLabel.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#key IntegrationGhcr#key}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#value IntegrationGhcr#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#key IntegrationGhcr#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#value IntegrationGhcr#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationGhcrLimitByLabelList <a name="IntegrationGhcrLimitByLabelList" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_ghcr.IntegrationGhcrLimitByLabelList;

new IntegrationGhcrLimitByLabelList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.get"></a>

```java
public IntegrationGhcrLimitByLabelOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel">IntegrationGhcrLimitByLabel</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel">IntegrationGhcrLimitByLabel</a>>

---


### IntegrationGhcrLimitByLabelOutputReference <a name="IntegrationGhcrLimitByLabelOutputReference" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_ghcr.IntegrationGhcrLimitByLabelOutputReference;

new IntegrationGhcrLimitByLabelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel">IntegrationGhcrLimitByLabel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel">IntegrationGhcrLimitByLabel</a>

---



