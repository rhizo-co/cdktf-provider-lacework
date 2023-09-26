# `lacework_integration_ghcr`

Refer to the Terraform Registory for docs: [`lacework_integration_ghcr`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr).

# `integrationGhcr` Submodule <a name="`integrationGhcr` Submodule" id="rhizo-co-terraform-provider-lacework.integrationGhcr"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationGhcr <a name="IntegrationGhcr" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr lacework_integration_ghcr}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_ghcr

integrationGhcr.IntegrationGhcr(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  password: str,
  username: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  limit_by_label: typing.Union[IResolvable, typing.List[IntegrationGhcrLimitByLabel]] = None,
  limit_by_repositories: typing.List[str] = None,
  limit_by_tags: typing.List[str] = None,
  limit_num_imgs: typing.Union[int, float] = None,
  non_os_package_support: typing.Union[bool, IResolvable] = None,
  registry_notifications: typing.Union[bool, IResolvable] = None,
  ssl: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.name">name</a></code> | <code>str</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.password">password</a></code> | <code>str</code> | The Github personal access token with read:packages. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.username">username</a></code> | <code>str</code> | The username with permissions to pull the images from the container registry. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#id IntegrationGhcr#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.limitByLabel">limit_by_label</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel">IntegrationGhcrLimitByLabel</a>]]</code> | limit_by_label block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.limitByRepositories">limit_by_repositories</a></code> | <code>typing.List[str]</code> | A list of repositories to assess. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.limitByTags">limit_by_tags</a></code> | <code>typing.List[str]</code> | A list of image tags to limit the assessment of images with matching tags. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.limitNumImgs">limit_num_imgs</a></code> | <code>typing.Union[int, float]</code> | The maximum number of newest container images to assess per repository. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.nonOsPackageSupport">non_os_package_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable program language scanning. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.registryNotifications">registry_notifications</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Subscribe to Registry Notifications. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.ssl">ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable or disable SSL communication. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.name"></a>

- *Type:* str

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#name IntegrationGhcr#name}

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.password"></a>

- *Type:* str

The Github personal access token with read:packages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#password IntegrationGhcr#password}

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.username"></a>

- *Type:* str

The username with permissions to pull the images from the container registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#username IntegrationGhcr#username}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#enabled IntegrationGhcr#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#id IntegrationGhcr#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit_by_label`<sup>Optional</sup> <a name="limit_by_label" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.limitByLabel"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel">IntegrationGhcrLimitByLabel</a>]]

limit_by_label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#limit_by_label IntegrationGhcr#limit_by_label}

---

##### `limit_by_repositories`<sup>Optional</sup> <a name="limit_by_repositories" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.limitByRepositories"></a>

- *Type:* typing.List[str]

A list of repositories to assess.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#limit_by_repositories IntegrationGhcr#limit_by_repositories}

---

##### `limit_by_tags`<sup>Optional</sup> <a name="limit_by_tags" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.limitByTags"></a>

- *Type:* typing.List[str]

A list of image tags to limit the assessment of images with matching tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#limit_by_tags IntegrationGhcr#limit_by_tags}

---

##### `limit_num_imgs`<sup>Optional</sup> <a name="limit_num_imgs" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.limitNumImgs"></a>

- *Type:* typing.Union[int, float]

The maximum number of newest container images to assess per repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#limit_num_imgs IntegrationGhcr#limit_num_imgs}

---

##### `non_os_package_support`<sup>Optional</sup> <a name="non_os_package_support" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.nonOsPackageSupport"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable program language scanning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#non_os_package_support IntegrationGhcr#non_os_package_support}

---

##### `registry_notifications`<sup>Optional</sup> <a name="registry_notifications" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.registryNotifications"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Subscribe to Registry Notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#registry_notifications IntegrationGhcr#registry_notifications}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.Initializer.parameter.ssl"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable or disable SSL communication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#ssl IntegrationGhcr#ssl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.putLimitByLabel">put_limit_by_label</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetLimitByLabel">reset_limit_by_label</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetLimitByRepositories">reset_limit_by_repositories</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetLimitByTags">reset_limit_by_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetLimitNumImgs">reset_limit_num_imgs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetNonOsPackageSupport">reset_non_os_package_support</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetRegistryNotifications">reset_registry_notifications</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetSsl">reset_ssl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_limit_by_label` <a name="put_limit_by_label" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.putLimitByLabel"></a>

```python
def put_limit_by_label(
  value: typing.Union[IResolvable, typing.List[IntegrationGhcrLimitByLabel]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.putLimitByLabel.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel">IntegrationGhcrLimitByLabel</a>]]

---

##### `reset_enabled` <a name="reset_enabled" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_limit_by_label` <a name="reset_limit_by_label" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetLimitByLabel"></a>

```python
def reset_limit_by_label() -> None
```

##### `reset_limit_by_repositories` <a name="reset_limit_by_repositories" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetLimitByRepositories"></a>

```python
def reset_limit_by_repositories() -> None
```

##### `reset_limit_by_tags` <a name="reset_limit_by_tags" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetLimitByTags"></a>

```python
def reset_limit_by_tags() -> None
```

##### `reset_limit_num_imgs` <a name="reset_limit_num_imgs" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetLimitNumImgs"></a>

```python
def reset_limit_num_imgs() -> None
```

##### `reset_non_os_package_support` <a name="reset_non_os_package_support" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetNonOsPackageSupport"></a>

```python
def reset_non_os_package_support() -> None
```

##### `reset_registry_notifications` <a name="reset_registry_notifications" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetRegistryNotifications"></a>

```python
def reset_registry_notifications() -> None
```

##### `reset_ssl` <a name="reset_ssl" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.resetSsl"></a>

```python
def reset_ssl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_ghcr

integrationGhcr.IntegrationGhcr.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_ghcr

integrationGhcr.IntegrationGhcr.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_ghcr

integrationGhcr.IntegrationGhcr.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.createdOrUpdatedBy">created_or_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.createdOrUpdatedTime">created_or_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.intgGuid">intg_guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.limitByLabel">limit_by_label</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList">IntegrationGhcrLimitByLabelList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.orgLevel">org_level</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.registryDomain">registry_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.limitByLabelInput">limit_by_label_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel">IntegrationGhcrLimitByLabel</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.limitByRepositoriesInput">limit_by_repositories_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.limitByTagsInput">limit_by_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.limitNumImgsInput">limit_num_imgs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.nonOsPackageSupportInput">non_os_package_support_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.registryNotificationsInput">registry_notifications_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.sslInput">ssl_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.limitByRepositories">limit_by_repositories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.limitByTags">limit_by_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.limitNumImgs">limit_num_imgs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.nonOsPackageSupport">non_os_package_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.registryNotifications">registry_notifications</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.ssl">ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_or_updated_by`<sup>Required</sup> <a name="created_or_updated_by" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.createdOrUpdatedBy"></a>

```python
created_or_updated_by: str
```

- *Type:* str

---

##### `created_or_updated_time`<sup>Required</sup> <a name="created_or_updated_time" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.createdOrUpdatedTime"></a>

```python
created_or_updated_time: str
```

- *Type:* str

---

##### `intg_guid`<sup>Required</sup> <a name="intg_guid" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.intgGuid"></a>

```python
intg_guid: str
```

- *Type:* str

---

##### `limit_by_label`<sup>Required</sup> <a name="limit_by_label" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.limitByLabel"></a>

```python
limit_by_label: IntegrationGhcrLimitByLabelList
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList">IntegrationGhcrLimitByLabelList</a>

---

##### `org_level`<sup>Required</sup> <a name="org_level" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.orgLevel"></a>

```python
org_level: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `registry_domain`<sup>Required</sup> <a name="registry_domain" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.registryDomain"></a>

```python
registry_domain: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `limit_by_label_input`<sup>Optional</sup> <a name="limit_by_label_input" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.limitByLabelInput"></a>

```python
limit_by_label_input: typing.Union[IResolvable, typing.List[IntegrationGhcrLimitByLabel]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel">IntegrationGhcrLimitByLabel</a>]]

---

##### `limit_by_repositories_input`<sup>Optional</sup> <a name="limit_by_repositories_input" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.limitByRepositoriesInput"></a>

```python
limit_by_repositories_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `limit_by_tags_input`<sup>Optional</sup> <a name="limit_by_tags_input" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.limitByTagsInput"></a>

```python
limit_by_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `limit_num_imgs_input`<sup>Optional</sup> <a name="limit_num_imgs_input" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.limitNumImgsInput"></a>

```python
limit_num_imgs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `non_os_package_support_input`<sup>Optional</sup> <a name="non_os_package_support_input" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.nonOsPackageSupportInput"></a>

```python
non_os_package_support_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `registry_notifications_input`<sup>Optional</sup> <a name="registry_notifications_input" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.registryNotificationsInput"></a>

```python
registry_notifications_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssl_input`<sup>Optional</sup> <a name="ssl_input" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.sslInput"></a>

```python
ssl_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `limit_by_repositories`<sup>Required</sup> <a name="limit_by_repositories" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.limitByRepositories"></a>

```python
limit_by_repositories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `limit_by_tags`<sup>Required</sup> <a name="limit_by_tags" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.limitByTags"></a>

```python
limit_by_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `limit_num_imgs`<sup>Required</sup> <a name="limit_num_imgs" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.limitNumImgs"></a>

```python
limit_num_imgs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `non_os_package_support`<sup>Required</sup> <a name="non_os_package_support" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.nonOsPackageSupport"></a>

```python
non_os_package_support: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `registry_notifications`<sup>Required</sup> <a name="registry_notifications" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.registryNotifications"></a>

```python
registry_notifications: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.ssl"></a>

```python
ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcr.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationGhcrConfig <a name="IntegrationGhcrConfig" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_ghcr

integrationGhcr.IntegrationGhcrConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  password: str,
  username: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  limit_by_label: typing.Union[IResolvable, typing.List[IntegrationGhcrLimitByLabel]] = None,
  limit_by_repositories: typing.List[str] = None,
  limit_by_tags: typing.List[str] = None,
  limit_num_imgs: typing.Union[int, float] = None,
  non_os_package_support: typing.Union[bool, IResolvable] = None,
  registry_notifications: typing.Union[bool, IResolvable] = None,
  ssl: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.name">name</a></code> | <code>str</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.password">password</a></code> | <code>str</code> | The Github personal access token with read:packages. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.username">username</a></code> | <code>str</code> | The username with permissions to pull the images from the container registry. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#id IntegrationGhcr#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.limitByLabel">limit_by_label</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel">IntegrationGhcrLimitByLabel</a>]]</code> | limit_by_label block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.limitByRepositories">limit_by_repositories</a></code> | <code>typing.List[str]</code> | A list of repositories to assess. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.limitByTags">limit_by_tags</a></code> | <code>typing.List[str]</code> | A list of image tags to limit the assessment of images with matching tags. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.limitNumImgs">limit_num_imgs</a></code> | <code>typing.Union[int, float]</code> | The maximum number of newest container images to assess per repository. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.nonOsPackageSupport">non_os_package_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable program language scanning. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.registryNotifications">registry_notifications</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Subscribe to Registry Notifications. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.ssl">ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable or disable SSL communication. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#name IntegrationGhcr#name}

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.password"></a>

```python
password: str
```

- *Type:* str

The Github personal access token with read:packages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#password IntegrationGhcr#password}

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.username"></a>

```python
username: str
```

- *Type:* str

The username with permissions to pull the images from the container registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#username IntegrationGhcr#username}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#enabled IntegrationGhcr#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#id IntegrationGhcr#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit_by_label`<sup>Optional</sup> <a name="limit_by_label" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.limitByLabel"></a>

```python
limit_by_label: typing.Union[IResolvable, typing.List[IntegrationGhcrLimitByLabel]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel">IntegrationGhcrLimitByLabel</a>]]

limit_by_label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#limit_by_label IntegrationGhcr#limit_by_label}

---

##### `limit_by_repositories`<sup>Optional</sup> <a name="limit_by_repositories" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.limitByRepositories"></a>

```python
limit_by_repositories: typing.List[str]
```

- *Type:* typing.List[str]

A list of repositories to assess.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#limit_by_repositories IntegrationGhcr#limit_by_repositories}

---

##### `limit_by_tags`<sup>Optional</sup> <a name="limit_by_tags" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.limitByTags"></a>

```python
limit_by_tags: typing.List[str]
```

- *Type:* typing.List[str]

A list of image tags to limit the assessment of images with matching tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#limit_by_tags IntegrationGhcr#limit_by_tags}

---

##### `limit_num_imgs`<sup>Optional</sup> <a name="limit_num_imgs" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.limitNumImgs"></a>

```python
limit_num_imgs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of newest container images to assess per repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#limit_num_imgs IntegrationGhcr#limit_num_imgs}

---

##### `non_os_package_support`<sup>Optional</sup> <a name="non_os_package_support" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.nonOsPackageSupport"></a>

```python
non_os_package_support: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable program language scanning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#non_os_package_support IntegrationGhcr#non_os_package_support}

---

##### `registry_notifications`<sup>Optional</sup> <a name="registry_notifications" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.registryNotifications"></a>

```python
registry_notifications: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Subscribe to Registry Notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#registry_notifications IntegrationGhcr#registry_notifications}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrConfig.property.ssl"></a>

```python
ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable or disable SSL communication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#ssl IntegrationGhcr#ssl}

---

### IntegrationGhcrLimitByLabel <a name="IntegrationGhcrLimitByLabel" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_ghcr

integrationGhcr.IntegrationGhcrLimitByLabel(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#key IntegrationGhcr#key}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#value IntegrationGhcr#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#key IntegrationGhcr#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ghcr#value IntegrationGhcr#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationGhcrLimitByLabelList <a name="IntegrationGhcrLimitByLabelList" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_ghcr

integrationGhcr.IntegrationGhcrLimitByLabelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IntegrationGhcrLimitByLabelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel">IntegrationGhcrLimitByLabel</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IntegrationGhcrLimitByLabel]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel">IntegrationGhcrLimitByLabel</a>]]

---


### IntegrationGhcrLimitByLabelOutputReference <a name="IntegrationGhcrLimitByLabelOutputReference" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_ghcr

integrationGhcr.IntegrationGhcrLimitByLabelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel">IntegrationGhcrLimitByLabel</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabelOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IntegrationGhcrLimitByLabel]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-lacework.integrationGhcr.IntegrationGhcrLimitByLabel">IntegrationGhcrLimitByLabel</a>]

---



