# `lacework_integration_docker_v2`

Refer to the Terraform Registory for docs: [`lacework_integration_docker_v2`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2).

# `integrationDockerV2` Submodule <a name="`integrationDockerV2` Submodule" id="rhizo-co-terraform-provider-lacework.integrationDockerV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationDockerV2 <a name="IntegrationDockerV2" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2 lacework_integration_docker_v2}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_docker_v2

integrationDockerV2.IntegrationDockerV2(
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
  registry_domain: str,
  username: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  limit_by_label: typing.Union[IResolvable, typing.List[IntegrationDockerV2LimitByLabel]] = None,
  limit_by_tags: typing.List[str] = None,
  non_os_package_support: typing.Union[bool, IResolvable] = None,
  notifications: typing.Union[bool, IResolvable] = None,
  ssl: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#name IntegrationDockerV2#name}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#password IntegrationDockerV2#password}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.registryDomain">registry_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#registry_domain IntegrationDockerV2#registry_domain}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#username IntegrationDockerV2#username}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#enabled IntegrationDockerV2#enabled}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#id IntegrationDockerV2#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.limitByLabel">limit_by_label</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel">IntegrationDockerV2LimitByLabel</a>]]</code> | limit_by_label block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.limitByTags">limit_by_tags</a></code> | <code>typing.List[str]</code> | A list of image tags to limit the assessment of images with matching tags. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.nonOsPackageSupport">non_os_package_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable program language scanning. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.notifications">notifications</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Subscribe to registry notifications. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.ssl">ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#ssl IntegrationDockerV2#ssl}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#name IntegrationDockerV2#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#password IntegrationDockerV2#password}.

---

##### `registry_domain`<sup>Required</sup> <a name="registry_domain" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.registryDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#registry_domain IntegrationDockerV2#registry_domain}.

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#username IntegrationDockerV2#username}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#enabled IntegrationDockerV2#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#id IntegrationDockerV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit_by_label`<sup>Optional</sup> <a name="limit_by_label" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.limitByLabel"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel">IntegrationDockerV2LimitByLabel</a>]]

limit_by_label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#limit_by_label IntegrationDockerV2#limit_by_label}

---

##### `limit_by_tags`<sup>Optional</sup> <a name="limit_by_tags" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.limitByTags"></a>

- *Type:* typing.List[str]

A list of image tags to limit the assessment of images with matching tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#limit_by_tags IntegrationDockerV2#limit_by_tags}

---

##### `non_os_package_support`<sup>Optional</sup> <a name="non_os_package_support" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.nonOsPackageSupport"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable program language scanning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#non_os_package_support IntegrationDockerV2#non_os_package_support}

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.notifications"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Subscribe to registry notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#notifications IntegrationDockerV2#notifications}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.Initializer.parameter.ssl"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#ssl IntegrationDockerV2#ssl}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.putLimitByLabel">put_limit_by_label</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.resetLimitByLabel">reset_limit_by_label</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.resetLimitByTags">reset_limit_by_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.resetNonOsPackageSupport">reset_non_os_package_support</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.resetNotifications">reset_notifications</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.resetSsl">reset_ssl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_limit_by_label` <a name="put_limit_by_label" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.putLimitByLabel"></a>

```python
def put_limit_by_label(
  value: typing.Union[IResolvable, typing.List[IntegrationDockerV2LimitByLabel]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.putLimitByLabel.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel">IntegrationDockerV2LimitByLabel</a>]]

---

##### `reset_enabled` <a name="reset_enabled" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_limit_by_label` <a name="reset_limit_by_label" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.resetLimitByLabel"></a>

```python
def reset_limit_by_label() -> None
```

##### `reset_limit_by_tags` <a name="reset_limit_by_tags" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.resetLimitByTags"></a>

```python
def reset_limit_by_tags() -> None
```

##### `reset_non_os_package_support` <a name="reset_non_os_package_support" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.resetNonOsPackageSupport"></a>

```python
def reset_non_os_package_support() -> None
```

##### `reset_notifications` <a name="reset_notifications" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.resetNotifications"></a>

```python
def reset_notifications() -> None
```

##### `reset_ssl` <a name="reset_ssl" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.resetSsl"></a>

```python
def reset_ssl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_docker_v2

integrationDockerV2.IntegrationDockerV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_docker_v2

integrationDockerV2.IntegrationDockerV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_docker_v2

integrationDockerV2.IntegrationDockerV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.createdOrUpdatedBy">created_or_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.createdOrUpdatedTime">created_or_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.intgGuid">intg_guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.limitByLabel">limit_by_label</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList">IntegrationDockerV2LimitByLabelList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.orgLevel">org_level</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.limitByLabelInput">limit_by_label_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel">IntegrationDockerV2LimitByLabel</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.limitByTagsInput">limit_by_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.nonOsPackageSupportInput">non_os_package_support_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.notificationsInput">notifications_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.registryDomainInput">registry_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.sslInput">ssl_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.limitByTags">limit_by_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.nonOsPackageSupport">non_os_package_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.notifications">notifications</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.registryDomain">registry_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.ssl">ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_or_updated_by`<sup>Required</sup> <a name="created_or_updated_by" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.createdOrUpdatedBy"></a>

```python
created_or_updated_by: str
```

- *Type:* str

---

##### `created_or_updated_time`<sup>Required</sup> <a name="created_or_updated_time" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.createdOrUpdatedTime"></a>

```python
created_or_updated_time: str
```

- *Type:* str

---

##### `intg_guid`<sup>Required</sup> <a name="intg_guid" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.intgGuid"></a>

```python
intg_guid: str
```

- *Type:* str

---

##### `limit_by_label`<sup>Required</sup> <a name="limit_by_label" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.limitByLabel"></a>

```python
limit_by_label: IntegrationDockerV2LimitByLabelList
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList">IntegrationDockerV2LimitByLabelList</a>

---

##### `org_level`<sup>Required</sup> <a name="org_level" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.orgLevel"></a>

```python
org_level: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `limit_by_label_input`<sup>Optional</sup> <a name="limit_by_label_input" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.limitByLabelInput"></a>

```python
limit_by_label_input: typing.Union[IResolvable, typing.List[IntegrationDockerV2LimitByLabel]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel">IntegrationDockerV2LimitByLabel</a>]]

---

##### `limit_by_tags_input`<sup>Optional</sup> <a name="limit_by_tags_input" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.limitByTagsInput"></a>

```python
limit_by_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `non_os_package_support_input`<sup>Optional</sup> <a name="non_os_package_support_input" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.nonOsPackageSupportInput"></a>

```python
non_os_package_support_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notifications_input`<sup>Optional</sup> <a name="notifications_input" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.notificationsInput"></a>

```python
notifications_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `registry_domain_input`<sup>Optional</sup> <a name="registry_domain_input" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.registryDomainInput"></a>

```python
registry_domain_input: str
```

- *Type:* str

---

##### `ssl_input`<sup>Optional</sup> <a name="ssl_input" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.sslInput"></a>

```python
ssl_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `limit_by_tags`<sup>Required</sup> <a name="limit_by_tags" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.limitByTags"></a>

```python
limit_by_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `non_os_package_support`<sup>Required</sup> <a name="non_os_package_support" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.nonOsPackageSupport"></a>

```python
non_os_package_support: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.notifications"></a>

```python
notifications: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `registry_domain`<sup>Required</sup> <a name="registry_domain" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.registryDomain"></a>

```python
registry_domain: str
```

- *Type:* str

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.ssl"></a>

```python
ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationDockerV2Config <a name="IntegrationDockerV2Config" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_docker_v2

integrationDockerV2.IntegrationDockerV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  password: str,
  registry_domain: str,
  username: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  limit_by_label: typing.Union[IResolvable, typing.List[IntegrationDockerV2LimitByLabel]] = None,
  limit_by_tags: typing.List[str] = None,
  non_os_package_support: typing.Union[bool, IResolvable] = None,
  notifications: typing.Union[bool, IResolvable] = None,
  ssl: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#name IntegrationDockerV2#name}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#password IntegrationDockerV2#password}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.registryDomain">registry_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#registry_domain IntegrationDockerV2#registry_domain}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#username IntegrationDockerV2#username}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#enabled IntegrationDockerV2#enabled}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#id IntegrationDockerV2#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.limitByLabel">limit_by_label</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel">IntegrationDockerV2LimitByLabel</a>]]</code> | limit_by_label block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.limitByTags">limit_by_tags</a></code> | <code>typing.List[str]</code> | A list of image tags to limit the assessment of images with matching tags. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.nonOsPackageSupport">non_os_package_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable program language scanning. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.notifications">notifications</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Subscribe to registry notifications. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.ssl">ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#ssl IntegrationDockerV2#ssl}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#name IntegrationDockerV2#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#password IntegrationDockerV2#password}.

---

##### `registry_domain`<sup>Required</sup> <a name="registry_domain" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.registryDomain"></a>

```python
registry_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#registry_domain IntegrationDockerV2#registry_domain}.

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#username IntegrationDockerV2#username}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#enabled IntegrationDockerV2#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#id IntegrationDockerV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit_by_label`<sup>Optional</sup> <a name="limit_by_label" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.limitByLabel"></a>

```python
limit_by_label: typing.Union[IResolvable, typing.List[IntegrationDockerV2LimitByLabel]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel">IntegrationDockerV2LimitByLabel</a>]]

limit_by_label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#limit_by_label IntegrationDockerV2#limit_by_label}

---

##### `limit_by_tags`<sup>Optional</sup> <a name="limit_by_tags" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.limitByTags"></a>

```python
limit_by_tags: typing.List[str]
```

- *Type:* typing.List[str]

A list of image tags to limit the assessment of images with matching tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#limit_by_tags IntegrationDockerV2#limit_by_tags}

---

##### `non_os_package_support`<sup>Optional</sup> <a name="non_os_package_support" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.nonOsPackageSupport"></a>

```python
non_os_package_support: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable program language scanning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#non_os_package_support IntegrationDockerV2#non_os_package_support}

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.notifications"></a>

```python
notifications: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Subscribe to registry notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#notifications IntegrationDockerV2#notifications}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2Config.property.ssl"></a>

```python
ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#ssl IntegrationDockerV2#ssl}.

---

### IntegrationDockerV2LimitByLabel <a name="IntegrationDockerV2LimitByLabel" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_docker_v2

integrationDockerV2.IntegrationDockerV2LimitByLabel(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#key IntegrationDockerV2#key}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#value IntegrationDockerV2#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#key IntegrationDockerV2#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_docker_v2#value IntegrationDockerV2#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationDockerV2LimitByLabelList <a name="IntegrationDockerV2LimitByLabelList" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_docker_v2

integrationDockerV2.IntegrationDockerV2LimitByLabelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IntegrationDockerV2LimitByLabelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel">IntegrationDockerV2LimitByLabel</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IntegrationDockerV2LimitByLabel]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel">IntegrationDockerV2LimitByLabel</a>]]

---


### IntegrationDockerV2LimitByLabelOutputReference <a name="IntegrationDockerV2LimitByLabelOutputReference" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_docker_v2

integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel">IntegrationDockerV2LimitByLabel</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabelOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IntegrationDockerV2LimitByLabel]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-lacework.integrationDockerV2.IntegrationDockerV2LimitByLabel">IntegrationDockerV2LimitByLabel</a>]

---



