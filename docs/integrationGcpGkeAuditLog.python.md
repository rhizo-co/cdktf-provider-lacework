# `lacework_integration_gcp_gke_audit_log`

Refer to the Terraform Registory for docs: [`lacework_integration_gcp_gke_audit_log`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log).

# `integrationGcpGkeAuditLog` Submodule <a name="`integrationGcpGkeAuditLog` Submodule" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationGcpGkeAuditLog <a name="IntegrationGcpGkeAuditLog" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log lacework_integration_gcp_gke_audit_log}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_gcp_gke_audit_log

integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  credentials: IntegrationGcpGkeAuditLogCredentials,
  integration_type: str,
  name: str,
  project_id: str,
  subscription: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  organization_id: str = None,
  retries: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials">IntegrationGcpGkeAuditLogCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.integrationType">integration_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#integration_type IntegrationGcpGkeAuditLog#integration_type}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.name">name</a></code> | <code>str</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The GCP Project ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.subscription">subscription</a></code> | <code>str</code> | The PubSub Subscription. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#id IntegrationGcpGkeAuditLog#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.organizationId">organization_id</a></code> | <code>str</code> | The GCP Organization ID (required when integration_type is organization). |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.retries">retries</a></code> | <code>typing.Union[int, float]</code> | The number of attempts to create the external integration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.credentials"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials">IntegrationGcpGkeAuditLogCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#credentials IntegrationGcpGkeAuditLog#credentials}

---

##### `integration_type`<sup>Required</sup> <a name="integration_type" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.integrationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#integration_type IntegrationGcpGkeAuditLog#integration_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.name"></a>

- *Type:* str

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#name IntegrationGcpGkeAuditLog#name}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.projectId"></a>

- *Type:* str

The GCP Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#project_id IntegrationGcpGkeAuditLog#project_id}

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.subscription"></a>

- *Type:* str

The PubSub Subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#subscription IntegrationGcpGkeAuditLog#subscription}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#enabled IntegrationGcpGkeAuditLog#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#id IntegrationGcpGkeAuditLog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organization_id`<sup>Optional</sup> <a name="organization_id" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.organizationId"></a>

- *Type:* str

The GCP Organization ID (required when integration_type is organization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#organization_id IntegrationGcpGkeAuditLog#organization_id}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.retries"></a>

- *Type:* typing.Union[int, float]

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#retries IntegrationGcpGkeAuditLog#retries}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.putCredentials">put_credentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetOrganizationId">reset_organization_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetRetries">reset_retries</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_credentials` <a name="put_credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.putCredentials"></a>

```python
def put_credentials(
  client_email: str,
  client_id: str,
  private_key: str,
  private_key_id: str
) -> None
```

###### `client_email`<sup>Required</sup> <a name="client_email" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.putCredentials.parameter.clientEmail"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#client_email IntegrationGcpGkeAuditLog#client_email}.

---

###### `client_id`<sup>Required</sup> <a name="client_id" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.putCredentials.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#client_id IntegrationGcpGkeAuditLog#client_id}.

---

###### `private_key`<sup>Required</sup> <a name="private_key" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.putCredentials.parameter.privateKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#private_key IntegrationGcpGkeAuditLog#private_key}.

---

###### `private_key_id`<sup>Required</sup> <a name="private_key_id" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.putCredentials.parameter.privateKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#private_key_id IntegrationGcpGkeAuditLog#private_key_id}.

---

##### `reset_enabled` <a name="reset_enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_organization_id` <a name="reset_organization_id" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetOrganizationId"></a>

```python
def reset_organization_id() -> None
```

##### `reset_retries` <a name="reset_retries" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetRetries"></a>

```python
def reset_retries() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_gcp_gke_audit_log

integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_gcp_gke_audit_log

integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_gcp_gke_audit_log

integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.createdOrUpdatedBy">created_or_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.createdOrUpdatedTime">created_or_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference">IntegrationGcpGkeAuditLogCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.intgGuid">intg_guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.isOrg">is_org</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.credentialsInput">credentials_input</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials">IntegrationGcpGkeAuditLogCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.integrationTypeInput">integration_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.organizationIdInput">organization_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.retriesInput">retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.subscriptionInput">subscription_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.integrationType">integration_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.subscription">subscription</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_or_updated_by`<sup>Required</sup> <a name="created_or_updated_by" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.createdOrUpdatedBy"></a>

```python
created_or_updated_by: str
```

- *Type:* str

---

##### `created_or_updated_time`<sup>Required</sup> <a name="created_or_updated_time" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.createdOrUpdatedTime"></a>

```python
created_or_updated_time: str
```

- *Type:* str

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.credentials"></a>

```python
credentials: IntegrationGcpGkeAuditLogCredentialsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference">IntegrationGcpGkeAuditLogCredentialsOutputReference</a>

---

##### `intg_guid`<sup>Required</sup> <a name="intg_guid" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.intgGuid"></a>

```python
intg_guid: str
```

- *Type:* str

---

##### `is_org`<sup>Required</sup> <a name="is_org" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.isOrg"></a>

```python
is_org: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.credentialsInput"></a>

```python
credentials_input: IntegrationGcpGkeAuditLogCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials">IntegrationGcpGkeAuditLogCredentials</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `integration_type_input`<sup>Optional</sup> <a name="integration_type_input" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.integrationTypeInput"></a>

```python
integration_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `organization_id_input`<sup>Optional</sup> <a name="organization_id_input" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.organizationIdInput"></a>

```python
organization_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `retries_input`<sup>Optional</sup> <a name="retries_input" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.retriesInput"></a>

```python
retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subscription_input`<sup>Optional</sup> <a name="subscription_input" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.subscriptionInput"></a>

```python
subscription_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integration_type`<sup>Required</sup> <a name="integration_type" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.integrationType"></a>

```python
integration_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `retries`<sup>Required</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.subscription"></a>

```python
subscription: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationGcpGkeAuditLogConfig <a name="IntegrationGcpGkeAuditLogConfig" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_gcp_gke_audit_log

integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  credentials: IntegrationGcpGkeAuditLogCredentials,
  integration_type: str,
  name: str,
  project_id: str,
  subscription: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  organization_id: str = None,
  retries: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials">IntegrationGcpGkeAuditLogCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.integrationType">integration_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#integration_type IntegrationGcpGkeAuditLog#integration_type}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.name">name</a></code> | <code>str</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.projectId">project_id</a></code> | <code>str</code> | The GCP Project ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.subscription">subscription</a></code> | <code>str</code> | The PubSub Subscription. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#id IntegrationGcpGkeAuditLog#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.organizationId">organization_id</a></code> | <code>str</code> | The GCP Organization ID (required when integration_type is organization). |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | The number of attempts to create the external integration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.credentials"></a>

```python
credentials: IntegrationGcpGkeAuditLogCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials">IntegrationGcpGkeAuditLogCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#credentials IntegrationGcpGkeAuditLog#credentials}

---

##### `integration_type`<sup>Required</sup> <a name="integration_type" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.integrationType"></a>

```python
integration_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#integration_type IntegrationGcpGkeAuditLog#integration_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#name IntegrationGcpGkeAuditLog#name}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The GCP Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#project_id IntegrationGcpGkeAuditLog#project_id}

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.subscription"></a>

```python
subscription: str
```

- *Type:* str

The PubSub Subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#subscription IntegrationGcpGkeAuditLog#subscription}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#enabled IntegrationGcpGkeAuditLog#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#id IntegrationGcpGkeAuditLog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organization_id`<sup>Optional</sup> <a name="organization_id" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

The GCP Organization ID (required when integration_type is organization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#organization_id IntegrationGcpGkeAuditLog#organization_id}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#retries IntegrationGcpGkeAuditLog#retries}

---

### IntegrationGcpGkeAuditLogCredentials <a name="IntegrationGcpGkeAuditLogCredentials" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_gcp_gke_audit_log

integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials(
  client_email: str,
  client_id: str,
  private_key: str,
  private_key_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.property.clientEmail">client_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#client_email IntegrationGcpGkeAuditLog#client_email}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#client_id IntegrationGcpGkeAuditLog#client_id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.property.privateKey">private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#private_key IntegrationGcpGkeAuditLog#private_key}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.property.privateKeyId">private_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#private_key_id IntegrationGcpGkeAuditLog#private_key_id}. |

---

##### `client_email`<sup>Required</sup> <a name="client_email" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.property.clientEmail"></a>

```python
client_email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#client_email IntegrationGcpGkeAuditLog#client_email}.

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#client_id IntegrationGcpGkeAuditLog#client_id}.

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#private_key IntegrationGcpGkeAuditLog#private_key}.

---

##### `private_key_id`<sup>Required</sup> <a name="private_key_id" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.property.privateKeyId"></a>

```python
private_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#private_key_id IntegrationGcpGkeAuditLog#private_key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationGcpGkeAuditLogCredentialsOutputReference <a name="IntegrationGcpGkeAuditLogCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_gcp_gke_audit_log

integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.clientEmailInput">client_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.privateKeyIdInput">private_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.clientEmail">client_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.privateKeyId">private_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials">IntegrationGcpGkeAuditLogCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_email_input`<sup>Optional</sup> <a name="client_email_input" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.clientEmailInput"></a>

```python
client_email_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `private_key_id_input`<sup>Optional</sup> <a name="private_key_id_input" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.privateKeyIdInput"></a>

```python
private_key_id_input: str
```

- *Type:* str

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `client_email`<sup>Required</sup> <a name="client_email" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.clientEmail"></a>

```python
client_email: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `private_key_id`<sup>Required</sup> <a name="private_key_id" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.privateKeyId"></a>

```python
private_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: IntegrationGcpGkeAuditLogCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials">IntegrationGcpGkeAuditLogCredentials</a>

---



