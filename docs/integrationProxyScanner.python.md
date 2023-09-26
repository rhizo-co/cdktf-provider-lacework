# `lacework_integration_proxy_scanner`

Refer to the Terraform Registory for docs: [`lacework_integration_proxy_scanner`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_proxy_scanner).

# `integrationProxyScanner` Submodule <a name="`integrationProxyScanner` Submodule" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationProxyScanner <a name="IntegrationProxyScanner" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_proxy_scanner lacework_integration_proxy_scanner}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_proxy_scanner

integrationProxyScanner.IntegrationProxyScanner(
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
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  limit_by_label: typing.Union[IResolvable, typing.List[IntegrationProxyScannerLimitByLabel]] = None,
  limit_by_repositories: typing.List[str] = None,
  limit_by_tags: typing.List[str] = None,
  limit_num_imgs: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer.parameter.name">name</a></code> | <code>str</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_proxy_scanner#id IntegrationProxyScanner#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer.parameter.limitByLabel">limit_by_label</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabel">IntegrationProxyScannerLimitByLabel</a>]]</code> | limit_by_label block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer.parameter.limitByRepositories">limit_by_repositories</a></code> | <code>typing.List[str]</code> | A list of repositories to assess. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer.parameter.limitByTags">limit_by_tags</a></code> | <code>typing.List[str]</code> | A list of image tags to limit the assessment of images with matching tags. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer.parameter.limitNumImgs">limit_num_imgs</a></code> | <code>typing.Union[int, float]</code> | The maximum number of newest container images to assess per repository. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer.parameter.name"></a>

- *Type:* str

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_proxy_scanner#name IntegrationProxyScanner#name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_proxy_scanner#enabled IntegrationProxyScanner#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_proxy_scanner#id IntegrationProxyScanner#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit_by_label`<sup>Optional</sup> <a name="limit_by_label" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer.parameter.limitByLabel"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabel">IntegrationProxyScannerLimitByLabel</a>]]

limit_by_label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_proxy_scanner#limit_by_label IntegrationProxyScanner#limit_by_label}

---

##### `limit_by_repositories`<sup>Optional</sup> <a name="limit_by_repositories" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer.parameter.limitByRepositories"></a>

- *Type:* typing.List[str]

A list of repositories to assess.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_proxy_scanner#limit_by_repositories IntegrationProxyScanner#limit_by_repositories}

---

##### `limit_by_tags`<sup>Optional</sup> <a name="limit_by_tags" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer.parameter.limitByTags"></a>

- *Type:* typing.List[str]

A list of image tags to limit the assessment of images with matching tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_proxy_scanner#limit_by_tags IntegrationProxyScanner#limit_by_tags}

---

##### `limit_num_imgs`<sup>Optional</sup> <a name="limit_num_imgs" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.Initializer.parameter.limitNumImgs"></a>

- *Type:* typing.Union[int, float]

The maximum number of newest container images to assess per repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_proxy_scanner#limit_num_imgs IntegrationProxyScanner#limit_num_imgs}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.putLimitByLabel">put_limit_by_label</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.resetLimitByLabel">reset_limit_by_label</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.resetLimitByRepositories">reset_limit_by_repositories</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.resetLimitByTags">reset_limit_by_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.resetLimitNumImgs">reset_limit_num_imgs</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_limit_by_label` <a name="put_limit_by_label" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.putLimitByLabel"></a>

```python
def put_limit_by_label(
  value: typing.Union[IResolvable, typing.List[IntegrationProxyScannerLimitByLabel]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.putLimitByLabel.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabel">IntegrationProxyScannerLimitByLabel</a>]]

---

##### `reset_enabled` <a name="reset_enabled" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_limit_by_label` <a name="reset_limit_by_label" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.resetLimitByLabel"></a>

```python
def reset_limit_by_label() -> None
```

##### `reset_limit_by_repositories` <a name="reset_limit_by_repositories" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.resetLimitByRepositories"></a>

```python
def reset_limit_by_repositories() -> None
```

##### `reset_limit_by_tags` <a name="reset_limit_by_tags" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.resetLimitByTags"></a>

```python
def reset_limit_by_tags() -> None
```

##### `reset_limit_num_imgs` <a name="reset_limit_num_imgs" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.resetLimitNumImgs"></a>

```python
def reset_limit_num_imgs() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_proxy_scanner

integrationProxyScanner.IntegrationProxyScanner.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_proxy_scanner

integrationProxyScanner.IntegrationProxyScanner.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_proxy_scanner

integrationProxyScanner.IntegrationProxyScanner.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.createdOrUpdatedBy">created_or_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.createdOrUpdatedTime">created_or_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.intgGuid">intg_guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.limitByLabel">limit_by_label</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelList">IntegrationProxyScannerLimitByLabelList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.orgLevel">org_level</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.serverToken">server_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.serverUri">server_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.limitByLabelInput">limit_by_label_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabel">IntegrationProxyScannerLimitByLabel</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.limitByRepositoriesInput">limit_by_repositories_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.limitByTagsInput">limit_by_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.limitNumImgsInput">limit_num_imgs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.limitByRepositories">limit_by_repositories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.limitByTags">limit_by_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.limitNumImgs">limit_num_imgs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_or_updated_by`<sup>Required</sup> <a name="created_or_updated_by" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.createdOrUpdatedBy"></a>

```python
created_or_updated_by: str
```

- *Type:* str

---

##### `created_or_updated_time`<sup>Required</sup> <a name="created_or_updated_time" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.createdOrUpdatedTime"></a>

```python
created_or_updated_time: str
```

- *Type:* str

---

##### `intg_guid`<sup>Required</sup> <a name="intg_guid" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.intgGuid"></a>

```python
intg_guid: str
```

- *Type:* str

---

##### `limit_by_label`<sup>Required</sup> <a name="limit_by_label" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.limitByLabel"></a>

```python
limit_by_label: IntegrationProxyScannerLimitByLabelList
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelList">IntegrationProxyScannerLimitByLabelList</a>

---

##### `org_level`<sup>Required</sup> <a name="org_level" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.orgLevel"></a>

```python
org_level: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `server_token`<sup>Required</sup> <a name="server_token" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.serverToken"></a>

```python
server_token: str
```

- *Type:* str

---

##### `server_uri`<sup>Required</sup> <a name="server_uri" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.serverUri"></a>

```python
server_uri: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `limit_by_label_input`<sup>Optional</sup> <a name="limit_by_label_input" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.limitByLabelInput"></a>

```python
limit_by_label_input: typing.Union[IResolvable, typing.List[IntegrationProxyScannerLimitByLabel]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabel">IntegrationProxyScannerLimitByLabel</a>]]

---

##### `limit_by_repositories_input`<sup>Optional</sup> <a name="limit_by_repositories_input" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.limitByRepositoriesInput"></a>

```python
limit_by_repositories_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `limit_by_tags_input`<sup>Optional</sup> <a name="limit_by_tags_input" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.limitByTagsInput"></a>

```python
limit_by_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `limit_num_imgs_input`<sup>Optional</sup> <a name="limit_num_imgs_input" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.limitNumImgsInput"></a>

```python
limit_num_imgs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `limit_by_repositories`<sup>Required</sup> <a name="limit_by_repositories" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.limitByRepositories"></a>

```python
limit_by_repositories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `limit_by_tags`<sup>Required</sup> <a name="limit_by_tags" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.limitByTags"></a>

```python
limit_by_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `limit_num_imgs`<sup>Required</sup> <a name="limit_num_imgs" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.limitNumImgs"></a>

```python
limit_num_imgs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScanner.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationProxyScannerConfig <a name="IntegrationProxyScannerConfig" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_proxy_scanner

integrationProxyScanner.IntegrationProxyScannerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  limit_by_label: typing.Union[IResolvable, typing.List[IntegrationProxyScannerLimitByLabel]] = None,
  limit_by_repositories: typing.List[str] = None,
  limit_by_tags: typing.List[str] = None,
  limit_num_imgs: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerConfig.property.name">name</a></code> | <code>str</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_proxy_scanner#id IntegrationProxyScanner#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerConfig.property.limitByLabel">limit_by_label</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabel">IntegrationProxyScannerLimitByLabel</a>]]</code> | limit_by_label block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerConfig.property.limitByRepositories">limit_by_repositories</a></code> | <code>typing.List[str]</code> | A list of repositories to assess. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerConfig.property.limitByTags">limit_by_tags</a></code> | <code>typing.List[str]</code> | A list of image tags to limit the assessment of images with matching tags. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerConfig.property.limitNumImgs">limit_num_imgs</a></code> | <code>typing.Union[int, float]</code> | The maximum number of newest container images to assess per repository. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_proxy_scanner#name IntegrationProxyScanner#name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_proxy_scanner#enabled IntegrationProxyScanner#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_proxy_scanner#id IntegrationProxyScanner#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit_by_label`<sup>Optional</sup> <a name="limit_by_label" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerConfig.property.limitByLabel"></a>

```python
limit_by_label: typing.Union[IResolvable, typing.List[IntegrationProxyScannerLimitByLabel]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabel">IntegrationProxyScannerLimitByLabel</a>]]

limit_by_label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_proxy_scanner#limit_by_label IntegrationProxyScanner#limit_by_label}

---

##### `limit_by_repositories`<sup>Optional</sup> <a name="limit_by_repositories" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerConfig.property.limitByRepositories"></a>

```python
limit_by_repositories: typing.List[str]
```

- *Type:* typing.List[str]

A list of repositories to assess.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_proxy_scanner#limit_by_repositories IntegrationProxyScanner#limit_by_repositories}

---

##### `limit_by_tags`<sup>Optional</sup> <a name="limit_by_tags" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerConfig.property.limitByTags"></a>

```python
limit_by_tags: typing.List[str]
```

- *Type:* typing.List[str]

A list of image tags to limit the assessment of images with matching tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_proxy_scanner#limit_by_tags IntegrationProxyScanner#limit_by_tags}

---

##### `limit_num_imgs`<sup>Optional</sup> <a name="limit_num_imgs" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerConfig.property.limitNumImgs"></a>

```python
limit_num_imgs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of newest container images to assess per repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_proxy_scanner#limit_num_imgs IntegrationProxyScanner#limit_num_imgs}

---

### IntegrationProxyScannerLimitByLabel <a name="IntegrationProxyScannerLimitByLabel" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabel"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabel.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_proxy_scanner

integrationProxyScanner.IntegrationProxyScannerLimitByLabel(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabel.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_proxy_scanner#key IntegrationProxyScanner#key}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabel.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_proxy_scanner#value IntegrationProxyScanner#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabel.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_proxy_scanner#key IntegrationProxyScanner#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabel.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_proxy_scanner#value IntegrationProxyScanner#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationProxyScannerLimitByLabelList <a name="IntegrationProxyScannerLimitByLabelList" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_proxy_scanner

integrationProxyScanner.IntegrationProxyScannerLimitByLabelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IntegrationProxyScannerLimitByLabelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabel">IntegrationProxyScannerLimitByLabel</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IntegrationProxyScannerLimitByLabel]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabel">IntegrationProxyScannerLimitByLabel</a>]]

---


### IntegrationProxyScannerLimitByLabelOutputReference <a name="IntegrationProxyScannerLimitByLabelOutputReference" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_proxy_scanner

integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabel">IntegrationProxyScannerLimitByLabel</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabelOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IntegrationProxyScannerLimitByLabel]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-lacework.integrationProxyScanner.IntegrationProxyScannerLimitByLabel">IntegrationProxyScannerLimitByLabel</a>]

---



