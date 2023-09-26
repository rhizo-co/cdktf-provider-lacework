# `lacework_integration_docker_hub`

Refer to the Terraform Registory for docs: [`lacework_integration_docker_hub`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_hub).

# `integrationDockerHub` Submodule <a name="`integrationDockerHub` Submodule" id="rhizo-co-terraform-provider-lacework.integrationDockerHub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationDockerHub <a name="IntegrationDockerHub" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_hub lacework_integration_docker_hub}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_docker_hub.IntegrationDockerHub;

IntegrationDockerHub.Builder.create(Construct scope, java.lang.String id)
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
//  .limitByLabel(java.util.List<IntegrationDockerHubLimitByLabel>)
//  .limitByRepositories(java.util.List<java.lang.String>)
//  .limitByTags(java.util.List<java.lang.String>)
//  .limitNumImgs(java.lang.Number)
//  .nonOsPackageSupport(java.lang.Boolean)
//  .nonOsPackageSupport(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The Docker Hub integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | The password for the specified Docker Hub user. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | The Docker user that has at least read-only permissions to the Docker Hub container repositories. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_hub#id IntegrationDockerHub#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.limitByLabel">limitByLabel</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabel">IntegrationDockerHubLimitByLabel</a>></code> | limit_by_label block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.limitByRepositories">limitByRepositories</a></code> | <code>java.util.List<java.lang.String></code> | A list of repositories to assess. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.limitByTags">limitByTags</a></code> | <code>java.util.List<java.lang.String></code> | A list of image tags to limit the assessment of images with matching tags. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.limitNumImgs">limitNumImgs</a></code> | <code>java.lang.Number</code> | The maximum number of newest container images to assess per repository. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.nonOsPackageSupport">nonOsPackageSupport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable program language scanning. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The Docker Hub integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_hub#name IntegrationDockerHub#name}

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.password"></a>

- *Type:* java.lang.String

The password for the specified Docker Hub user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_hub#password IntegrationDockerHub#password}

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.username"></a>

- *Type:* java.lang.String

The Docker user that has at least read-only permissions to the Docker Hub container repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_hub#username IntegrationDockerHub#username}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_hub#enabled IntegrationDockerHub#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_hub#id IntegrationDockerHub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limitByLabel`<sup>Optional</sup> <a name="limitByLabel" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.limitByLabel"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabel">IntegrationDockerHubLimitByLabel</a>>

limit_by_label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_hub#limit_by_label IntegrationDockerHub#limit_by_label}

---

##### `limitByRepositories`<sup>Optional</sup> <a name="limitByRepositories" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.limitByRepositories"></a>

- *Type:* java.util.List<java.lang.String>

A list of repositories to assess.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_hub#limit_by_repositories IntegrationDockerHub#limit_by_repositories}

---

##### `limitByTags`<sup>Optional</sup> <a name="limitByTags" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.limitByTags"></a>

- *Type:* java.util.List<java.lang.String>

A list of image tags to limit the assessment of images with matching tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_hub#limit_by_tags IntegrationDockerHub#limit_by_tags}

---

##### `limitNumImgs`<sup>Optional</sup> <a name="limitNumImgs" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.limitNumImgs"></a>

- *Type:* java.lang.Number

The maximum number of newest container images to assess per repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_hub#limit_num_imgs IntegrationDockerHub#limit_num_imgs}

---

##### `nonOsPackageSupport`<sup>Optional</sup> <a name="nonOsPackageSupport" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.Initializer.parameter.nonOsPackageSupport"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable program language scanning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_hub#non_os_package_support IntegrationDockerHub#non_os_package_support}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.putLimitByLabel">putLimitByLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.resetLimitByLabel">resetLimitByLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.resetLimitByRepositories">resetLimitByRepositories</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.resetLimitByTags">resetLimitByTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.resetLimitNumImgs">resetLimitNumImgs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.resetNonOsPackageSupport">resetNonOsPackageSupport</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putLimitByLabel` <a name="putLimitByLabel" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.putLimitByLabel"></a>

```java
public void putLimitByLabel(IResolvable OR java.util.List<IntegrationDockerHubLimitByLabel> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.putLimitByLabel.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabel">IntegrationDockerHubLimitByLabel</a>>

---

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.resetId"></a>

```java
public void resetId()
```

##### `resetLimitByLabel` <a name="resetLimitByLabel" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.resetLimitByLabel"></a>

```java
public void resetLimitByLabel()
```

##### `resetLimitByRepositories` <a name="resetLimitByRepositories" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.resetLimitByRepositories"></a>

```java
public void resetLimitByRepositories()
```

##### `resetLimitByTags` <a name="resetLimitByTags" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.resetLimitByTags"></a>

```java
public void resetLimitByTags()
```

##### `resetLimitNumImgs` <a name="resetLimitNumImgs" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.resetLimitNumImgs"></a>

```java
public void resetLimitNumImgs()
```

##### `resetNonOsPackageSupport` <a name="resetNonOsPackageSupport" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.resetNonOsPackageSupport"></a>

```java
public void resetNonOsPackageSupport()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_docker_hub.IntegrationDockerHub;

IntegrationDockerHub.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_docker_hub.IntegrationDockerHub;

IntegrationDockerHub.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_docker_hub.IntegrationDockerHub;

IntegrationDockerHub.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.createdOrUpdatedBy">createdOrUpdatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.createdOrUpdatedTime">createdOrUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.intgGuid">intgGuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.limitByLabel">limitByLabel</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelList">IntegrationDockerHubLimitByLabelList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.orgLevel">orgLevel</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.typeName">typeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.limitByLabelInput">limitByLabelInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabel">IntegrationDockerHubLimitByLabel</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.limitByRepositoriesInput">limitByRepositoriesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.limitByTagsInput">limitByTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.limitNumImgsInput">limitNumImgsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.nonOsPackageSupportInput">nonOsPackageSupportInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.limitByRepositories">limitByRepositories</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.limitByTags">limitByTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.limitNumImgs">limitNumImgs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.nonOsPackageSupport">nonOsPackageSupport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdOrUpdatedBy`<sup>Required</sup> <a name="createdOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.createdOrUpdatedBy"></a>

```java
public java.lang.String getCreatedOrUpdatedBy();
```

- *Type:* java.lang.String

---

##### `createdOrUpdatedTime`<sup>Required</sup> <a name="createdOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.createdOrUpdatedTime"></a>

```java
public java.lang.String getCreatedOrUpdatedTime();
```

- *Type:* java.lang.String

---

##### `intgGuid`<sup>Required</sup> <a name="intgGuid" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.intgGuid"></a>

```java
public java.lang.String getIntgGuid();
```

- *Type:* java.lang.String

---

##### `limitByLabel`<sup>Required</sup> <a name="limitByLabel" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.limitByLabel"></a>

```java
public IntegrationDockerHubLimitByLabelList getLimitByLabel();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelList">IntegrationDockerHubLimitByLabelList</a>

---

##### `orgLevel`<sup>Required</sup> <a name="orgLevel" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.orgLevel"></a>

```java
public IResolvable getOrgLevel();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `limitByLabelInput`<sup>Optional</sup> <a name="limitByLabelInput" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.limitByLabelInput"></a>

```java
public java.lang.Object getLimitByLabelInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabel">IntegrationDockerHubLimitByLabel</a>>

---

##### `limitByRepositoriesInput`<sup>Optional</sup> <a name="limitByRepositoriesInput" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.limitByRepositoriesInput"></a>

```java
public java.util.List<java.lang.String> getLimitByRepositoriesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `limitByTagsInput`<sup>Optional</sup> <a name="limitByTagsInput" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.limitByTagsInput"></a>

```java
public java.util.List<java.lang.String> getLimitByTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `limitNumImgsInput`<sup>Optional</sup> <a name="limitNumImgsInput" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.limitNumImgsInput"></a>

```java
public java.lang.Number getLimitNumImgsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nonOsPackageSupportInput`<sup>Optional</sup> <a name="nonOsPackageSupportInput" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.nonOsPackageSupportInput"></a>

```java
public java.lang.Object getNonOsPackageSupportInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `limitByRepositories`<sup>Required</sup> <a name="limitByRepositories" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.limitByRepositories"></a>

```java
public java.util.List<java.lang.String> getLimitByRepositories();
```

- *Type:* java.util.List<java.lang.String>

---

##### `limitByTags`<sup>Required</sup> <a name="limitByTags" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.limitByTags"></a>

```java
public java.util.List<java.lang.String> getLimitByTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `limitNumImgs`<sup>Required</sup> <a name="limitNumImgs" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.limitNumImgs"></a>

```java
public java.lang.Number getLimitNumImgs();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nonOsPackageSupport`<sup>Required</sup> <a name="nonOsPackageSupport" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.nonOsPackageSupport"></a>

```java
public java.lang.Object getNonOsPackageSupport();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHub.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationDockerHubConfig <a name="IntegrationDockerHubConfig" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_docker_hub.IntegrationDockerHubConfig;

IntegrationDockerHubConfig.builder()
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
//  .limitByLabel(java.util.List<IntegrationDockerHubLimitByLabel>)
//  .limitByRepositories(java.util.List<java.lang.String>)
//  .limitByTags(java.util.List<java.lang.String>)
//  .limitNumImgs(java.lang.Number)
//  .nonOsPackageSupport(java.lang.Boolean)
//  .nonOsPackageSupport(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.name">name</a></code> | <code>java.lang.String</code> | The Docker Hub integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.password">password</a></code> | <code>java.lang.String</code> | The password for the specified Docker Hub user. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.username">username</a></code> | <code>java.lang.String</code> | The Docker user that has at least read-only permissions to the Docker Hub container repositories. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_hub#id IntegrationDockerHub#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.limitByLabel">limitByLabel</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabel">IntegrationDockerHubLimitByLabel</a>></code> | limit_by_label block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.limitByRepositories">limitByRepositories</a></code> | <code>java.util.List<java.lang.String></code> | A list of repositories to assess. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.limitByTags">limitByTags</a></code> | <code>java.util.List<java.lang.String></code> | A list of image tags to limit the assessment of images with matching tags. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.limitNumImgs">limitNumImgs</a></code> | <code>java.lang.Number</code> | The maximum number of newest container images to assess per repository. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.nonOsPackageSupport">nonOsPackageSupport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable program language scanning. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The Docker Hub integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_hub#name IntegrationDockerHub#name}

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The password for the specified Docker Hub user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_hub#password IntegrationDockerHub#password}

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The Docker user that has at least read-only permissions to the Docker Hub container repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_hub#username IntegrationDockerHub#username}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_hub#enabled IntegrationDockerHub#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_hub#id IntegrationDockerHub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limitByLabel`<sup>Optional</sup> <a name="limitByLabel" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.limitByLabel"></a>

```java
public java.lang.Object getLimitByLabel();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabel">IntegrationDockerHubLimitByLabel</a>>

limit_by_label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_hub#limit_by_label IntegrationDockerHub#limit_by_label}

---

##### `limitByRepositories`<sup>Optional</sup> <a name="limitByRepositories" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.limitByRepositories"></a>

```java
public java.util.List<java.lang.String> getLimitByRepositories();
```

- *Type:* java.util.List<java.lang.String>

A list of repositories to assess.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_hub#limit_by_repositories IntegrationDockerHub#limit_by_repositories}

---

##### `limitByTags`<sup>Optional</sup> <a name="limitByTags" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.limitByTags"></a>

```java
public java.util.List<java.lang.String> getLimitByTags();
```

- *Type:* java.util.List<java.lang.String>

A list of image tags to limit the assessment of images with matching tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_hub#limit_by_tags IntegrationDockerHub#limit_by_tags}

---

##### `limitNumImgs`<sup>Optional</sup> <a name="limitNumImgs" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.limitNumImgs"></a>

```java
public java.lang.Number getLimitNumImgs();
```

- *Type:* java.lang.Number

The maximum number of newest container images to assess per repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_hub#limit_num_imgs IntegrationDockerHub#limit_num_imgs}

---

##### `nonOsPackageSupport`<sup>Optional</sup> <a name="nonOsPackageSupport" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubConfig.property.nonOsPackageSupport"></a>

```java
public java.lang.Object getNonOsPackageSupport();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable program language scanning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_hub#non_os_package_support IntegrationDockerHub#non_os_package_support}

---

### IntegrationDockerHubLimitByLabel <a name="IntegrationDockerHubLimitByLabel" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabel"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_docker_hub.IntegrationDockerHubLimitByLabel;

IntegrationDockerHubLimitByLabel.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabel.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_hub#key IntegrationDockerHub#key}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabel.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_hub#value IntegrationDockerHub#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabel.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_hub#key IntegrationDockerHub#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabel.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_hub#value IntegrationDockerHub#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationDockerHubLimitByLabelList <a name="IntegrationDockerHubLimitByLabelList" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_docker_hub.IntegrationDockerHubLimitByLabelList;

new IntegrationDockerHubLimitByLabelList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelList.get"></a>

```java
public IntegrationDockerHubLimitByLabelOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabel">IntegrationDockerHubLimitByLabel</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabel">IntegrationDockerHubLimitByLabel</a>>

---


### IntegrationDockerHubLimitByLabelOutputReference <a name="IntegrationDockerHubLimitByLabelOutputReference" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_docker_hub.IntegrationDockerHubLimitByLabelOutputReference;

new IntegrationDockerHubLimitByLabelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabel">IntegrationDockerHubLimitByLabel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabelOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-lacework.integrationDockerHub.IntegrationDockerHubLimitByLabel">IntegrationDockerHubLimitByLabel</a>

---



