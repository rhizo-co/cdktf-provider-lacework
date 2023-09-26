# `lacework_integration_aws_govcloud_ct`

Refer to the Terraform Registory for docs: [`lacework_integration_aws_govcloud_ct`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct).

# `integrationAwsGovcloudCt` Submodule <a name="`integrationAwsGovcloudCt` Submodule" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsGovcloudCt <a name="IntegrationAwsGovcloudCt" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct lacework_integration_aws_govcloud_ct}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_govcloud_ct

integrationAwsGovcloudCt.IntegrationAwsGovcloudCt(
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
  credentials: IntegrationAwsGovcloudCtCredentials,
  name: str,
  queue_url: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  retries: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The AWS Account ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentials">IntegrationAwsGovcloudCtCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#name IntegrationAwsGovcloudCt#name}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.queueUrl">queue_url</a></code> | <code>str</code> | The SQS Queue URL. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#enabled IntegrationAwsGovcloudCt#enabled}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#id IntegrationAwsGovcloudCt#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.retries">retries</a></code> | <code>typing.Union[int, float]</code> | The number of attempts to create the external integration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.accountId"></a>

- *Type:* str

The AWS Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#account_id IntegrationAwsGovcloudCt#account_id}

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.credentials"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentials">IntegrationAwsGovcloudCtCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#credentials IntegrationAwsGovcloudCt#credentials}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#name IntegrationAwsGovcloudCt#name}.

---

##### `queue_url`<sup>Required</sup> <a name="queue_url" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.queueUrl"></a>

- *Type:* str

The SQS Queue URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#queue_url IntegrationAwsGovcloudCt#queue_url}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#enabled IntegrationAwsGovcloudCt#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#id IntegrationAwsGovcloudCt#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.retries"></a>

- *Type:* typing.Union[int, float]

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#retries IntegrationAwsGovcloudCt#retries}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.putCredentials">put_credentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.resetRetries">reset_retries</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_credentials` <a name="put_credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.putCredentials"></a>

```python
def put_credentials(
  access_key_id: str,
  secret_access_key: str
) -> None
```

###### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.putCredentials.parameter.accessKeyId"></a>

- *Type:* str

The AWS access key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#access_key_id IntegrationAwsGovcloudCt#access_key_id}

---

###### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.putCredentials.parameter.secretAccessKey"></a>

- *Type:* str

The AWS secret key for the specified AWS access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#secret_access_key IntegrationAwsGovcloudCt#secret_access_key}

---

##### `reset_enabled` <a name="reset_enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_retries` <a name="reset_retries" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.resetRetries"></a>

```python
def reset_retries() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_govcloud_ct

integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_govcloud_ct

integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_govcloud_ct

integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.createdOrUpdatedBy">created_or_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.createdOrUpdatedTime">created_or_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference">IntegrationAwsGovcloudCtCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.intgGuid">intg_guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.orgLevel">org_level</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.credentialsInput">credentials_input</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentials">IntegrationAwsGovcloudCtCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.queueUrlInput">queue_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.retriesInput">retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.queueUrl">queue_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_or_updated_by`<sup>Required</sup> <a name="created_or_updated_by" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.createdOrUpdatedBy"></a>

```python
created_or_updated_by: str
```

- *Type:* str

---

##### `created_or_updated_time`<sup>Required</sup> <a name="created_or_updated_time" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.createdOrUpdatedTime"></a>

```python
created_or_updated_time: str
```

- *Type:* str

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.credentials"></a>

```python
credentials: IntegrationAwsGovcloudCtCredentialsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference">IntegrationAwsGovcloudCtCredentialsOutputReference</a>

---

##### `intg_guid`<sup>Required</sup> <a name="intg_guid" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.intgGuid"></a>

```python
intg_guid: str
```

- *Type:* str

---

##### `org_level`<sup>Required</sup> <a name="org_level" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.orgLevel"></a>

```python
org_level: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.credentialsInput"></a>

```python
credentials_input: IntegrationAwsGovcloudCtCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentials">IntegrationAwsGovcloudCtCredentials</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `queue_url_input`<sup>Optional</sup> <a name="queue_url_input" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.queueUrlInput"></a>

```python
queue_url_input: str
```

- *Type:* str

---

##### `retries_input`<sup>Optional</sup> <a name="retries_input" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.retriesInput"></a>

```python
retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `queue_url`<sup>Required</sup> <a name="queue_url" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.queueUrl"></a>

```python
queue_url: str
```

- *Type:* str

---

##### `retries`<sup>Required</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsGovcloudCtConfig <a name="IntegrationAwsGovcloudCtConfig" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_govcloud_ct

integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  credentials: IntegrationAwsGovcloudCtCredentials,
  name: str,
  queue_url: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  retries: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.accountId">account_id</a></code> | <code>str</code> | The AWS Account ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentials">IntegrationAwsGovcloudCtCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#name IntegrationAwsGovcloudCt#name}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.queueUrl">queue_url</a></code> | <code>str</code> | The SQS Queue URL. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#enabled IntegrationAwsGovcloudCt#enabled}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#id IntegrationAwsGovcloudCt#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | The number of attempts to create the external integration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The AWS Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#account_id IntegrationAwsGovcloudCt#account_id}

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.credentials"></a>

```python
credentials: IntegrationAwsGovcloudCtCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentials">IntegrationAwsGovcloudCtCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#credentials IntegrationAwsGovcloudCt#credentials}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#name IntegrationAwsGovcloudCt#name}.

---

##### `queue_url`<sup>Required</sup> <a name="queue_url" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.queueUrl"></a>

```python
queue_url: str
```

- *Type:* str

The SQS Queue URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#queue_url IntegrationAwsGovcloudCt#queue_url}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#enabled IntegrationAwsGovcloudCt#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#id IntegrationAwsGovcloudCt#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#retries IntegrationAwsGovcloudCt#retries}

---

### IntegrationAwsGovcloudCtCredentials <a name="IntegrationAwsGovcloudCtCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_govcloud_ct

integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentials(
  access_key_id: str,
  secret_access_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentials.property.accessKeyId">access_key_id</a></code> | <code>str</code> | The AWS access key ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentials.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | The AWS secret key for the specified AWS access key. |

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentials.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

The AWS access key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#access_key_id IntegrationAwsGovcloudCt#access_key_id}

---

##### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentials.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

The AWS secret key for the specified AWS access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#secret_access_key IntegrationAwsGovcloudCt#secret_access_key}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationAwsGovcloudCtCredentialsOutputReference <a name="IntegrationAwsGovcloudCtCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_govcloud_ct

integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.property.accessKeyIdInput">access_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.property.secretAccessKeyInput">secret_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.property.accessKeyId">access_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentials">IntegrationAwsGovcloudCtCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_key_id_input`<sup>Optional</sup> <a name="access_key_id_input" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.property.accessKeyIdInput"></a>

```python
access_key_id_input: str
```

- *Type:* str

---

##### `secret_access_key_input`<sup>Optional</sup> <a name="secret_access_key_input" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.property.secretAccessKeyInput"></a>

```python
secret_access_key_input: str
```

- *Type:* str

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

---

##### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: IntegrationAwsGovcloudCtCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentials">IntegrationAwsGovcloudCtCredentials</a>

---



