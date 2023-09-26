# `lacework_integration_gcp_pub_sub_audit_log`

Refer to the Terraform Registory for docs: [`lacework_integration_gcp_pub_sub_audit_log`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log).

# `integrationGcpPubSubAuditLog` Submodule <a name="`integrationGcpPubSubAuditLog` Submodule" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationGcpPubSubAuditLog <a name="IntegrationGcpPubSubAuditLog" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log lacework_integration_gcp_pub_sub_audit_log}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_gcp_pub_sub_audit_log

integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  credentials: IntegrationGcpPubSubAuditLogCredentials,
  integration_type: str,
  name: str,
  project_id: str,
  subscription_id: str,
  topic_id: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  organization_id: str = None,
  retries: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials">IntegrationGcpPubSubAuditLogCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.integrationType">integration_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#integration_type IntegrationGcpPubSubAuditLog#integration_type}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.name">name</a></code> | <code>str</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The GCP Project ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | The PubSub Subscription. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.topicId">topic_id</a></code> | <code>str</code> | The PubSub topic id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#id IntegrationGcpPubSubAuditLog#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.organizationId">organization_id</a></code> | <code>str</code> | The GCP Organization ID (required when integration_type is organization). |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.retries">retries</a></code> | <code>typing.Union[int, float]</code> | The number of attempts to create the external integration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.credentials"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials">IntegrationGcpPubSubAuditLogCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#credentials IntegrationGcpPubSubAuditLog#credentials}

---

##### `integration_type`<sup>Required</sup> <a name="integration_type" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.integrationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#integration_type IntegrationGcpPubSubAuditLog#integration_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.name"></a>

- *Type:* str

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#name IntegrationGcpPubSubAuditLog#name}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.projectId"></a>

- *Type:* str

The GCP Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#project_id IntegrationGcpPubSubAuditLog#project_id}

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.subscriptionId"></a>

- *Type:* str

The PubSub Subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#subscription_id IntegrationGcpPubSubAuditLog#subscription_id}

---

##### `topic_id`<sup>Required</sup> <a name="topic_id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.topicId"></a>

- *Type:* str

The PubSub topic id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#topic_id IntegrationGcpPubSubAuditLog#topic_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#enabled IntegrationGcpPubSubAuditLog#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#id IntegrationGcpPubSubAuditLog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organization_id`<sup>Optional</sup> <a name="organization_id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.organizationId"></a>

- *Type:* str

The GCP Organization ID (required when integration_type is organization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#organization_id IntegrationGcpPubSubAuditLog#organization_id}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.Initializer.parameter.retries"></a>

- *Type:* typing.Union[int, float]

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#retries IntegrationGcpPubSubAuditLog#retries}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.putCredentials">put_credentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetOrganizationId">reset_organization_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetRetries">reset_retries</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_credentials` <a name="put_credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.putCredentials"></a>

```python
def put_credentials(
  client_email: str,
  client_id: str,
  private_key: str,
  private_key_id: str
) -> None
```

###### `client_email`<sup>Required</sup> <a name="client_email" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.putCredentials.parameter.clientEmail"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#client_email IntegrationGcpPubSubAuditLog#client_email}.

---

###### `client_id`<sup>Required</sup> <a name="client_id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.putCredentials.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#client_id IntegrationGcpPubSubAuditLog#client_id}.

---

###### `private_key`<sup>Required</sup> <a name="private_key" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.putCredentials.parameter.privateKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#private_key IntegrationGcpPubSubAuditLog#private_key}.

---

###### `private_key_id`<sup>Required</sup> <a name="private_key_id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.putCredentials.parameter.privateKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#private_key_id IntegrationGcpPubSubAuditLog#private_key_id}.

---

##### `reset_enabled` <a name="reset_enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_organization_id` <a name="reset_organization_id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetOrganizationId"></a>

```python
def reset_organization_id() -> None
```

##### `reset_retries` <a name="reset_retries" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.resetRetries"></a>

```python
def reset_retries() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_gcp_pub_sub_audit_log

integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_gcp_pub_sub_audit_log

integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_gcp_pub_sub_audit_log

integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.createdOrUpdatedBy">created_or_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.createdOrUpdatedTime">created_or_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference">IntegrationGcpPubSubAuditLogCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.intgGuid">intg_guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.isOrg">is_org</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.credentialsInput">credentials_input</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials">IntegrationGcpPubSubAuditLogCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.integrationTypeInput">integration_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.organizationIdInput">organization_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.retriesInput">retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.topicIdInput">topic_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.integrationType">integration_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.topicId">topic_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_or_updated_by`<sup>Required</sup> <a name="created_or_updated_by" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.createdOrUpdatedBy"></a>

```python
created_or_updated_by: str
```

- *Type:* str

---

##### `created_or_updated_time`<sup>Required</sup> <a name="created_or_updated_time" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.createdOrUpdatedTime"></a>

```python
created_or_updated_time: str
```

- *Type:* str

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.credentials"></a>

```python
credentials: IntegrationGcpPubSubAuditLogCredentialsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference">IntegrationGcpPubSubAuditLogCredentialsOutputReference</a>

---

##### `intg_guid`<sup>Required</sup> <a name="intg_guid" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.intgGuid"></a>

```python
intg_guid: str
```

- *Type:* str

---

##### `is_org`<sup>Required</sup> <a name="is_org" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.isOrg"></a>

```python
is_org: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.credentialsInput"></a>

```python
credentials_input: IntegrationGcpPubSubAuditLogCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials">IntegrationGcpPubSubAuditLogCredentials</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `integration_type_input`<sup>Optional</sup> <a name="integration_type_input" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.integrationTypeInput"></a>

```python
integration_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `organization_id_input`<sup>Optional</sup> <a name="organization_id_input" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.organizationIdInput"></a>

```python
organization_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `retries_input`<sup>Optional</sup> <a name="retries_input" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.retriesInput"></a>

```python
retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `topic_id_input`<sup>Optional</sup> <a name="topic_id_input" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.topicIdInput"></a>

```python
topic_id_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integration_type`<sup>Required</sup> <a name="integration_type" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.integrationType"></a>

```python
integration_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `retries`<sup>Required</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `topic_id`<sup>Required</sup> <a name="topic_id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.topicId"></a>

```python
topic_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLog.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationGcpPubSubAuditLogConfig <a name="IntegrationGcpPubSubAuditLogConfig" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_gcp_pub_sub_audit_log

integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  credentials: IntegrationGcpPubSubAuditLogCredentials,
  integration_type: str,
  name: str,
  project_id: str,
  subscription_id: str,
  topic_id: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  organization_id: str = None,
  retries: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials">IntegrationGcpPubSubAuditLogCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.integrationType">integration_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#integration_type IntegrationGcpPubSubAuditLog#integration_type}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.name">name</a></code> | <code>str</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.projectId">project_id</a></code> | <code>str</code> | The GCP Project ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | The PubSub Subscription. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.topicId">topic_id</a></code> | <code>str</code> | The PubSub topic id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#id IntegrationGcpPubSubAuditLog#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.organizationId">organization_id</a></code> | <code>str</code> | The GCP Organization ID (required when integration_type is organization). |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | The number of attempts to create the external integration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.credentials"></a>

```python
credentials: IntegrationGcpPubSubAuditLogCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials">IntegrationGcpPubSubAuditLogCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#credentials IntegrationGcpPubSubAuditLog#credentials}

---

##### `integration_type`<sup>Required</sup> <a name="integration_type" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.integrationType"></a>

```python
integration_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#integration_type IntegrationGcpPubSubAuditLog#integration_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#name IntegrationGcpPubSubAuditLog#name}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The GCP Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#project_id IntegrationGcpPubSubAuditLog#project_id}

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

The PubSub Subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#subscription_id IntegrationGcpPubSubAuditLog#subscription_id}

---

##### `topic_id`<sup>Required</sup> <a name="topic_id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.topicId"></a>

```python
topic_id: str
```

- *Type:* str

The PubSub topic id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#topic_id IntegrationGcpPubSubAuditLog#topic_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#enabled IntegrationGcpPubSubAuditLog#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#id IntegrationGcpPubSubAuditLog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organization_id`<sup>Optional</sup> <a name="organization_id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

The GCP Organization ID (required when integration_type is organization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#organization_id IntegrationGcpPubSubAuditLog#organization_id}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogConfig.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#retries IntegrationGcpPubSubAuditLog#retries}

---

### IntegrationGcpPubSubAuditLogCredentials <a name="IntegrationGcpPubSubAuditLogCredentials" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_gcp_pub_sub_audit_log

integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials(
  client_email: str,
  client_id: str,
  private_key: str,
  private_key_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.property.clientEmail">client_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#client_email IntegrationGcpPubSubAuditLog#client_email}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#client_id IntegrationGcpPubSubAuditLog#client_id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.property.privateKey">private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#private_key IntegrationGcpPubSubAuditLog#private_key}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.property.privateKeyId">private_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#private_key_id IntegrationGcpPubSubAuditLog#private_key_id}. |

---

##### `client_email`<sup>Required</sup> <a name="client_email" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.property.clientEmail"></a>

```python
client_email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#client_email IntegrationGcpPubSubAuditLog#client_email}.

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#client_id IntegrationGcpPubSubAuditLog#client_id}.

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#private_key IntegrationGcpPubSubAuditLog#private_key}.

---

##### `private_key_id`<sup>Required</sup> <a name="private_key_id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials.property.privateKeyId"></a>

```python
private_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_pub_sub_audit_log#private_key_id IntegrationGcpPubSubAuditLog#private_key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationGcpPubSubAuditLogCredentialsOutputReference <a name="IntegrationGcpPubSubAuditLogCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_gcp_pub_sub_audit_log

integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.clientEmailInput">client_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.privateKeyIdInput">private_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.clientEmail">client_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.privateKeyId">private_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials">IntegrationGcpPubSubAuditLogCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_email_input`<sup>Optional</sup> <a name="client_email_input" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.clientEmailInput"></a>

```python
client_email_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `private_key_id_input`<sup>Optional</sup> <a name="private_key_id_input" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.privateKeyIdInput"></a>

```python
private_key_id_input: str
```

- *Type:* str

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `client_email`<sup>Required</sup> <a name="client_email" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.clientEmail"></a>

```python
client_email: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `private_key_id`<sup>Required</sup> <a name="private_key_id" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.privateKeyId"></a>

```python
private_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: IntegrationGcpPubSubAuditLogCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpPubSubAuditLog.IntegrationGcpPubSubAuditLogCredentials">IntegrationGcpPubSubAuditLogCredentials</a>

---



