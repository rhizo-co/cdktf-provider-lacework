# `lacework_integration_aws_govcloud_cfg`

Refer to the Terraform Registory for docs: [`lacework_integration_aws_govcloud_cfg`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg).

# `integrationAwsGovcloudCfg` Submodule <a name="`integrationAwsGovcloudCfg` Submodule" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsGovcloudCfg <a name="IntegrationAwsGovcloudCfg" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg lacework_integration_aws_govcloud_cfg}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_govcloud_cfg

integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  credentials: IntegrationAwsGovcloudCfgCredentials,
  name: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  retries: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The AWS Account ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentials">IntegrationAwsGovcloudCfgCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#name IntegrationAwsGovcloudCfg#name}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#enabled IntegrationAwsGovcloudCfg#enabled}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#id IntegrationAwsGovcloudCfg#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.retries">retries</a></code> | <code>typing.Union[int, float]</code> | The number of attempts to create the external integration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.accountId"></a>

- *Type:* str

The AWS Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#account_id IntegrationAwsGovcloudCfg#account_id}

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.credentials"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentials">IntegrationAwsGovcloudCfgCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#credentials IntegrationAwsGovcloudCfg#credentials}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#name IntegrationAwsGovcloudCfg#name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#enabled IntegrationAwsGovcloudCfg#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#id IntegrationAwsGovcloudCfg#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.retries"></a>

- *Type:* typing.Union[int, float]

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#retries IntegrationAwsGovcloudCfg#retries}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.putCredentials">put_credentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.resetRetries">reset_retries</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_credentials` <a name="put_credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.putCredentials"></a>

```python
def put_credentials(
  access_key_id: str,
  secret_access_key: str
) -> None
```

###### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.putCredentials.parameter.accessKeyId"></a>

- *Type:* str

The AWS access key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#access_key_id IntegrationAwsGovcloudCfg#access_key_id}

---

###### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.putCredentials.parameter.secretAccessKey"></a>

- *Type:* str

The AWS secret key for the specified AWS access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#secret_access_key IntegrationAwsGovcloudCfg#secret_access_key}

---

##### `reset_enabled` <a name="reset_enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_retries` <a name="reset_retries" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.resetRetries"></a>

```python
def reset_retries() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_govcloud_cfg

integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_govcloud_cfg

integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_govcloud_cfg

integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.createdOrUpdatedBy">created_or_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.createdOrUpdatedTime">created_or_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference">IntegrationAwsGovcloudCfgCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.intgGuid">intg_guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.orgLevel">org_level</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.credentialsInput">credentials_input</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentials">IntegrationAwsGovcloudCfgCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.retriesInput">retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_or_updated_by`<sup>Required</sup> <a name="created_or_updated_by" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.createdOrUpdatedBy"></a>

```python
created_or_updated_by: str
```

- *Type:* str

---

##### `created_or_updated_time`<sup>Required</sup> <a name="created_or_updated_time" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.createdOrUpdatedTime"></a>

```python
created_or_updated_time: str
```

- *Type:* str

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.credentials"></a>

```python
credentials: IntegrationAwsGovcloudCfgCredentialsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference">IntegrationAwsGovcloudCfgCredentialsOutputReference</a>

---

##### `intg_guid`<sup>Required</sup> <a name="intg_guid" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.intgGuid"></a>

```python
intg_guid: str
```

- *Type:* str

---

##### `org_level`<sup>Required</sup> <a name="org_level" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.orgLevel"></a>

```python
org_level: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.credentialsInput"></a>

```python
credentials_input: IntegrationAwsGovcloudCfgCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentials">IntegrationAwsGovcloudCfgCredentials</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `retries_input`<sup>Optional</sup> <a name="retries_input" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.retriesInput"></a>

```python
retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `retries`<sup>Required</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsGovcloudCfgConfig <a name="IntegrationAwsGovcloudCfgConfig" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_govcloud_cfg

integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  credentials: IntegrationAwsGovcloudCfgCredentials,
  name: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  retries: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.accountId">account_id</a></code> | <code>str</code> | The AWS Account ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentials">IntegrationAwsGovcloudCfgCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#name IntegrationAwsGovcloudCfg#name}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#enabled IntegrationAwsGovcloudCfg#enabled}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#id IntegrationAwsGovcloudCfg#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | The number of attempts to create the external integration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The AWS Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#account_id IntegrationAwsGovcloudCfg#account_id}

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.credentials"></a>

```python
credentials: IntegrationAwsGovcloudCfgCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentials">IntegrationAwsGovcloudCfgCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#credentials IntegrationAwsGovcloudCfg#credentials}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#name IntegrationAwsGovcloudCfg#name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#enabled IntegrationAwsGovcloudCfg#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#id IntegrationAwsGovcloudCfg#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#retries IntegrationAwsGovcloudCfg#retries}

---

### IntegrationAwsGovcloudCfgCredentials <a name="IntegrationAwsGovcloudCfgCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_govcloud_cfg

integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentials(
  access_key_id: str,
  secret_access_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentials.property.accessKeyId">access_key_id</a></code> | <code>str</code> | The AWS access key ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentials.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | The AWS secret key for the specified AWS access key. |

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentials.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

The AWS access key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#access_key_id IntegrationAwsGovcloudCfg#access_key_id}

---

##### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentials.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

The AWS secret key for the specified AWS access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#secret_access_key IntegrationAwsGovcloudCfg#secret_access_key}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationAwsGovcloudCfgCredentialsOutputReference <a name="IntegrationAwsGovcloudCfgCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_govcloud_cfg

integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.property.accessKeyIdInput">access_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.property.secretAccessKeyInput">secret_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.property.accessKeyId">access_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentials">IntegrationAwsGovcloudCfgCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_key_id_input`<sup>Optional</sup> <a name="access_key_id_input" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.property.accessKeyIdInput"></a>

```python
access_key_id_input: str
```

- *Type:* str

---

##### `secret_access_key_input`<sup>Optional</sup> <a name="secret_access_key_input" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.property.secretAccessKeyInput"></a>

```python
secret_access_key_input: str
```

- *Type:* str

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

---

##### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: IntegrationAwsGovcloudCfgCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentials">IntegrationAwsGovcloudCfgCredentials</a>

---



