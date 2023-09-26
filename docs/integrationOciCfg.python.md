# `lacework_integration_oci_cfg`

Refer to the Terraform Registory for docs: [`lacework_integration_oci_cfg`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg).

# `integrationOciCfg` Submodule <a name="`integrationOciCfg` Submodule" id="rhizo-co-terraform-provider-lacework.integrationOciCfg"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationOciCfg <a name="IntegrationOciCfg" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg lacework_integration_oci_cfg}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_oci_cfg

integrationOciCfg.IntegrationOciCfg(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  credentials: IntegrationOciCfgCredentials,
  home_region: str,
  name: str,
  tenant_id: str,
  tenant_name: str,
  user_ocid: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  retries: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentials">IntegrationOciCfgCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.homeRegion">home_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#home_region IntegrationOciCfg#home_region}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#name IntegrationOciCfg#name}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#tenant_id IntegrationOciCfg#tenant_id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.tenantName">tenant_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#tenant_name IntegrationOciCfg#tenant_name}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.userOcid">user_ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#user_ocid IntegrationOciCfg#user_ocid}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#enabled IntegrationOciCfg#enabled}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#id IntegrationOciCfg#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.retries">retries</a></code> | <code>typing.Union[int, float]</code> | The number of attempts to create the external integration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.credentials"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentials">IntegrationOciCfgCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#credentials IntegrationOciCfg#credentials}

---

##### `home_region`<sup>Required</sup> <a name="home_region" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.homeRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#home_region IntegrationOciCfg#home_region}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#name IntegrationOciCfg#name}.

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#tenant_id IntegrationOciCfg#tenant_id}.

---

##### `tenant_name`<sup>Required</sup> <a name="tenant_name" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.tenantName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#tenant_name IntegrationOciCfg#tenant_name}.

---

##### `user_ocid`<sup>Required</sup> <a name="user_ocid" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.userOcid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#user_ocid IntegrationOciCfg#user_ocid}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#enabled IntegrationOciCfg#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#id IntegrationOciCfg#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.Initializer.parameter.retries"></a>

- *Type:* typing.Union[int, float]

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#retries IntegrationOciCfg#retries}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.putCredentials">put_credentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.resetRetries">reset_retries</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_credentials` <a name="put_credentials" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.putCredentials"></a>

```python
def put_credentials(
  fingerprint: str,
  private_key: str
) -> None
```

###### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.putCredentials.parameter.fingerprint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#fingerprint IntegrationOciCfg#fingerprint}.

---

###### `private_key`<sup>Required</sup> <a name="private_key" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.putCredentials.parameter.privateKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#private_key IntegrationOciCfg#private_key}.

---

##### `reset_enabled` <a name="reset_enabled" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_retries` <a name="reset_retries" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.resetRetries"></a>

```python
def reset_retries() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_oci_cfg

integrationOciCfg.IntegrationOciCfg.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_oci_cfg

integrationOciCfg.IntegrationOciCfg.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_oci_cfg

integrationOciCfg.IntegrationOciCfg.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.createdOrUpdatedBy">created_or_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.createdOrUpdatedTime">created_or_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference">IntegrationOciCfgCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.intgGuid">intg_guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.orgLevel">org_level</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.credentialsInput">credentials_input</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentials">IntegrationOciCfgCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.homeRegionInput">home_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.retriesInput">retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.tenantNameInput">tenant_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.userOcidInput">user_ocid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.homeRegion">home_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.tenantName">tenant_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.userOcid">user_ocid</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_or_updated_by`<sup>Required</sup> <a name="created_or_updated_by" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.createdOrUpdatedBy"></a>

```python
created_or_updated_by: str
```

- *Type:* str

---

##### `created_or_updated_time`<sup>Required</sup> <a name="created_or_updated_time" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.createdOrUpdatedTime"></a>

```python
created_or_updated_time: str
```

- *Type:* str

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.credentials"></a>

```python
credentials: IntegrationOciCfgCredentialsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference">IntegrationOciCfgCredentialsOutputReference</a>

---

##### `intg_guid`<sup>Required</sup> <a name="intg_guid" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.intgGuid"></a>

```python
intg_guid: str
```

- *Type:* str

---

##### `org_level`<sup>Required</sup> <a name="org_level" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.orgLevel"></a>

```python
org_level: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.credentialsInput"></a>

```python
credentials_input: IntegrationOciCfgCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentials">IntegrationOciCfgCredentials</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `home_region_input`<sup>Optional</sup> <a name="home_region_input" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.homeRegionInput"></a>

```python
home_region_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `retries_input`<sup>Optional</sup> <a name="retries_input" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.retriesInput"></a>

```python
retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `tenant_name_input`<sup>Optional</sup> <a name="tenant_name_input" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.tenantNameInput"></a>

```python
tenant_name_input: str
```

- *Type:* str

---

##### `user_ocid_input`<sup>Optional</sup> <a name="user_ocid_input" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.userOcidInput"></a>

```python
user_ocid_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `home_region`<sup>Required</sup> <a name="home_region" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.homeRegion"></a>

```python
home_region: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `retries`<sup>Required</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `tenant_name`<sup>Required</sup> <a name="tenant_name" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.tenantName"></a>

```python
tenant_name: str
```

- *Type:* str

---

##### `user_ocid`<sup>Required</sup> <a name="user_ocid" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.userOcid"></a>

```python
user_ocid: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfg.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationOciCfgConfig <a name="IntegrationOciCfgConfig" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_oci_cfg

integrationOciCfg.IntegrationOciCfgConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  credentials: IntegrationOciCfgCredentials,
  home_region: str,
  name: str,
  tenant_id: str,
  tenant_name: str,
  user_ocid: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  retries: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentials">IntegrationOciCfgCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.property.homeRegion">home_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#home_region IntegrationOciCfg#home_region}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#name IntegrationOciCfg#name}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#tenant_id IntegrationOciCfg#tenant_id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.property.tenantName">tenant_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#tenant_name IntegrationOciCfg#tenant_name}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.property.userOcid">user_ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#user_ocid IntegrationOciCfg#user_ocid}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#enabled IntegrationOciCfg#enabled}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#id IntegrationOciCfg#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | The number of attempts to create the external integration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.property.credentials"></a>

```python
credentials: IntegrationOciCfgCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentials">IntegrationOciCfgCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#credentials IntegrationOciCfg#credentials}

---

##### `home_region`<sup>Required</sup> <a name="home_region" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.property.homeRegion"></a>

```python
home_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#home_region IntegrationOciCfg#home_region}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#name IntegrationOciCfg#name}.

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#tenant_id IntegrationOciCfg#tenant_id}.

---

##### `tenant_name`<sup>Required</sup> <a name="tenant_name" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.property.tenantName"></a>

```python
tenant_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#tenant_name IntegrationOciCfg#tenant_name}.

---

##### `user_ocid`<sup>Required</sup> <a name="user_ocid" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.property.userOcid"></a>

```python
user_ocid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#user_ocid IntegrationOciCfg#user_ocid}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#enabled IntegrationOciCfg#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#id IntegrationOciCfg#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgConfig.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#retries IntegrationOciCfg#retries}

---

### IntegrationOciCfgCredentials <a name="IntegrationOciCfgCredentials" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_oci_cfg

integrationOciCfg.IntegrationOciCfgCredentials(
  fingerprint: str,
  private_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentials.property.fingerprint">fingerprint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#fingerprint IntegrationOciCfg#fingerprint}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentials.property.privateKey">private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#private_key IntegrationOciCfg#private_key}. |

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentials.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#fingerprint IntegrationOciCfg#fingerprint}.

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentials.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_oci_cfg#private_key IntegrationOciCfg#private_key}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationOciCfgCredentialsOutputReference <a name="IntegrationOciCfgCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_oci_cfg

integrationOciCfg.IntegrationOciCfgCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.property.fingerprintInput">fingerprint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentials">IntegrationOciCfgCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fingerprint_input`<sup>Optional</sup> <a name="fingerprint_input" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.property.fingerprintInput"></a>

```python
fingerprint_input: str
```

- *Type:* str

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: IntegrationOciCfgCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationOciCfg.IntegrationOciCfgCredentials">IntegrationOciCfgCredentials</a>

---



