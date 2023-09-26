# `lacework_integration_aws_agentless_scanning`

Refer to the Terraform Registory for docs: [`lacework_integration_aws_agentless_scanning`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning).

# `integrationAwsAgentlessScanning` Submodule <a name="`integrationAwsAgentlessScanning` Submodule" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsAgentlessScanning <a name="IntegrationAwsAgentlessScanning" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning lacework_integration_aws_agentless_scanning}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_agentless_scanning

integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning(
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
  scan_frequency: typing.Union[int, float],
  account_id: str = None,
  bucket_arn: str = None,
  credentials: IntegrationAwsAgentlessScanningCredentials = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  query_text: str = None,
  retries: typing.Union[int, float] = None,
  scan_containers: typing.Union[bool, IResolvable] = None,
  scan_host_vulnerabilities: typing.Union[bool, IResolvable] = None,
  scan_multi_volume: typing.Union[bool, IResolvable] = None,
  scan_stopped_instances: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.name">name</a></code> | <code>str</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.scanFrequency">scan_frequency</a></code> | <code>typing.Union[int, float]</code> | How often in hours the scan will run in hours. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The aws account id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.bucketArn">bucket_arn</a></code> | <code>str</code> | The bucket arn. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials">IntegrationAwsAgentlessScanningCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#id IntegrationAwsAgentlessScanning#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.queryText">query_text</a></code> | <code>str</code> | The LQL query text. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.retries">retries</a></code> | <code>typing.Union[int, float]</code> | The number of attempts to create the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.scanContainers">scan_containers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to includes scanning for containers. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.scanHostVulnerabilities">scan_host_vulnerabilities</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to includes scanning for host vulnerabilities. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.scanMultiVolume">scan_multi_volume</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to scan secondary volumes (true) or only root volumes (false). |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.scanStoppedInstances">scan_stopped_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to scan stopped instances (true). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.name"></a>

- *Type:* str

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#name IntegrationAwsAgentlessScanning#name}

---

##### `scan_frequency`<sup>Required</sup> <a name="scan_frequency" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.scanFrequency"></a>

- *Type:* typing.Union[int, float]

How often in hours the scan will run in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#scan_frequency IntegrationAwsAgentlessScanning#scan_frequency}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.accountId"></a>

- *Type:* str

The aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#account_id IntegrationAwsAgentlessScanning#account_id}

---

##### `bucket_arn`<sup>Optional</sup> <a name="bucket_arn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.bucketArn"></a>

- *Type:* str

The bucket arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#bucket_arn IntegrationAwsAgentlessScanning#bucket_arn}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.credentials"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials">IntegrationAwsAgentlessScanningCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#credentials IntegrationAwsAgentlessScanning#credentials}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#enabled IntegrationAwsAgentlessScanning#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#id IntegrationAwsAgentlessScanning#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `query_text`<sup>Optional</sup> <a name="query_text" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.queryText"></a>

- *Type:* str

The LQL query text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#query_text IntegrationAwsAgentlessScanning#query_text}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.retries"></a>

- *Type:* typing.Union[int, float]

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#retries IntegrationAwsAgentlessScanning#retries}

---

##### `scan_containers`<sup>Optional</sup> <a name="scan_containers" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.scanContainers"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to includes scanning for containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#scan_containers IntegrationAwsAgentlessScanning#scan_containers}

---

##### `scan_host_vulnerabilities`<sup>Optional</sup> <a name="scan_host_vulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.scanHostVulnerabilities"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to includes scanning for host vulnerabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#scan_host_vulnerabilities IntegrationAwsAgentlessScanning#scan_host_vulnerabilities}

---

##### `scan_multi_volume`<sup>Optional</sup> <a name="scan_multi_volume" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.scanMultiVolume"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to scan secondary volumes (true) or only root volumes (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#scan_multi_volume IntegrationAwsAgentlessScanning#scan_multi_volume}

---

##### `scan_stopped_instances`<sup>Optional</sup> <a name="scan_stopped_instances" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.scanStoppedInstances"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to scan stopped instances (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#scan_stopped_instances IntegrationAwsAgentlessScanning#scan_stopped_instances}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.putCredentials">put_credentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetBucketArn">reset_bucket_arn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetCredentials">reset_credentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetQueryText">reset_query_text</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetRetries">reset_retries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetScanContainers">reset_scan_containers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetScanHostVulnerabilities">reset_scan_host_vulnerabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetScanMultiVolume">reset_scan_multi_volume</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetScanStoppedInstances">reset_scan_stopped_instances</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_credentials` <a name="put_credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.putCredentials"></a>

```python
def put_credentials(
  external_id: str,
  role_arn: str
) -> None
```

###### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.putCredentials.parameter.externalId"></a>

- *Type:* str

The external id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#external_id IntegrationAwsAgentlessScanning#external_id}

---

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.putCredentials.parameter.roleArn"></a>

- *Type:* str

The role arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#role_arn IntegrationAwsAgentlessScanning#role_arn}

---

##### `reset_account_id` <a name="reset_account_id" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_bucket_arn` <a name="reset_bucket_arn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetBucketArn"></a>

```python
def reset_bucket_arn() -> None
```

##### `reset_credentials` <a name="reset_credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetCredentials"></a>

```python
def reset_credentials() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_query_text` <a name="reset_query_text" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetQueryText"></a>

```python
def reset_query_text() -> None
```

##### `reset_retries` <a name="reset_retries" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetRetries"></a>

```python
def reset_retries() -> None
```

##### `reset_scan_containers` <a name="reset_scan_containers" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetScanContainers"></a>

```python
def reset_scan_containers() -> None
```

##### `reset_scan_host_vulnerabilities` <a name="reset_scan_host_vulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetScanHostVulnerabilities"></a>

```python
def reset_scan_host_vulnerabilities() -> None
```

##### `reset_scan_multi_volume` <a name="reset_scan_multi_volume" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetScanMultiVolume"></a>

```python
def reset_scan_multi_volume() -> None
```

##### `reset_scan_stopped_instances` <a name="reset_scan_stopped_instances" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetScanStoppedInstances"></a>

```python
def reset_scan_stopped_instances() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_agentless_scanning

integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_agentless_scanning

integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_agentless_scanning

integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.createdOrUpdatedBy">created_or_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.createdOrUpdatedTime">created_or_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference">IntegrationAwsAgentlessScanningCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.intgGuid">intg_guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.orgLevel">org_level</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.serverToken">server_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.bucketArnInput">bucket_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.credentialsInput">credentials_input</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials">IntegrationAwsAgentlessScanningCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.queryTextInput">query_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.retriesInput">retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanContainersInput">scan_containers_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanFrequencyInput">scan_frequency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanHostVulnerabilitiesInput">scan_host_vulnerabilities_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanMultiVolumeInput">scan_multi_volume_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanStoppedInstancesInput">scan_stopped_instances_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.bucketArn">bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.queryText">query_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanContainers">scan_containers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanFrequency">scan_frequency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanHostVulnerabilities">scan_host_vulnerabilities</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanMultiVolume">scan_multi_volume</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanStoppedInstances">scan_stopped_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_or_updated_by`<sup>Required</sup> <a name="created_or_updated_by" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.createdOrUpdatedBy"></a>

```python
created_or_updated_by: str
```

- *Type:* str

---

##### `created_or_updated_time`<sup>Required</sup> <a name="created_or_updated_time" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.createdOrUpdatedTime"></a>

```python
created_or_updated_time: str
```

- *Type:* str

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.credentials"></a>

```python
credentials: IntegrationAwsAgentlessScanningCredentialsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference">IntegrationAwsAgentlessScanningCredentialsOutputReference</a>

---

##### `intg_guid`<sup>Required</sup> <a name="intg_guid" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.intgGuid"></a>

```python
intg_guid: str
```

- *Type:* str

---

##### `org_level`<sup>Required</sup> <a name="org_level" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.orgLevel"></a>

```python
org_level: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `server_token`<sup>Required</sup> <a name="server_token" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.serverToken"></a>

```python
server_token: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `bucket_arn_input`<sup>Optional</sup> <a name="bucket_arn_input" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.bucketArnInput"></a>

```python
bucket_arn_input: str
```

- *Type:* str

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.credentialsInput"></a>

```python
credentials_input: IntegrationAwsAgentlessScanningCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials">IntegrationAwsAgentlessScanningCredentials</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `query_text_input`<sup>Optional</sup> <a name="query_text_input" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.queryTextInput"></a>

```python
query_text_input: str
```

- *Type:* str

---

##### `retries_input`<sup>Optional</sup> <a name="retries_input" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.retriesInput"></a>

```python
retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_containers_input`<sup>Optional</sup> <a name="scan_containers_input" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanContainersInput"></a>

```python
scan_containers_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scan_frequency_input`<sup>Optional</sup> <a name="scan_frequency_input" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanFrequencyInput"></a>

```python
scan_frequency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_host_vulnerabilities_input`<sup>Optional</sup> <a name="scan_host_vulnerabilities_input" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanHostVulnerabilitiesInput"></a>

```python
scan_host_vulnerabilities_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scan_multi_volume_input`<sup>Optional</sup> <a name="scan_multi_volume_input" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanMultiVolumeInput"></a>

```python
scan_multi_volume_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scan_stopped_instances_input`<sup>Optional</sup> <a name="scan_stopped_instances_input" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanStoppedInstancesInput"></a>

```python
scan_stopped_instances_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `query_text`<sup>Required</sup> <a name="query_text" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.queryText"></a>

```python
query_text: str
```

- *Type:* str

---

##### `retries`<sup>Required</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_containers`<sup>Required</sup> <a name="scan_containers" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanContainers"></a>

```python
scan_containers: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scan_frequency`<sup>Required</sup> <a name="scan_frequency" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanFrequency"></a>

```python
scan_frequency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_host_vulnerabilities`<sup>Required</sup> <a name="scan_host_vulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanHostVulnerabilities"></a>

```python
scan_host_vulnerabilities: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scan_multi_volume`<sup>Required</sup> <a name="scan_multi_volume" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanMultiVolume"></a>

```python
scan_multi_volume: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scan_stopped_instances`<sup>Required</sup> <a name="scan_stopped_instances" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanStoppedInstances"></a>

```python
scan_stopped_instances: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsAgentlessScanningConfig <a name="IntegrationAwsAgentlessScanningConfig" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_agentless_scanning

integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  scan_frequency: typing.Union[int, float],
  account_id: str = None,
  bucket_arn: str = None,
  credentials: IntegrationAwsAgentlessScanningCredentials = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  query_text: str = None,
  retries: typing.Union[int, float] = None,
  scan_containers: typing.Union[bool, IResolvable] = None,
  scan_host_vulnerabilities: typing.Union[bool, IResolvable] = None,
  scan_multi_volume: typing.Union[bool, IResolvable] = None,
  scan_stopped_instances: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.name">name</a></code> | <code>str</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanFrequency">scan_frequency</a></code> | <code>typing.Union[int, float]</code> | How often in hours the scan will run in hours. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.accountId">account_id</a></code> | <code>str</code> | The aws account id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.bucketArn">bucket_arn</a></code> | <code>str</code> | The bucket arn. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials">IntegrationAwsAgentlessScanningCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#id IntegrationAwsAgentlessScanning#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.queryText">query_text</a></code> | <code>str</code> | The LQL query text. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | The number of attempts to create the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanContainers">scan_containers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to includes scanning for containers. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanHostVulnerabilities">scan_host_vulnerabilities</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to includes scanning for host vulnerabilities. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanMultiVolume">scan_multi_volume</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to scan secondary volumes (true) or only root volumes (false). |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanStoppedInstances">scan_stopped_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to scan stopped instances (true). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#name IntegrationAwsAgentlessScanning#name}

---

##### `scan_frequency`<sup>Required</sup> <a name="scan_frequency" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanFrequency"></a>

```python
scan_frequency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How often in hours the scan will run in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#scan_frequency IntegrationAwsAgentlessScanning#scan_frequency}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#account_id IntegrationAwsAgentlessScanning#account_id}

---

##### `bucket_arn`<sup>Optional</sup> <a name="bucket_arn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

The bucket arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#bucket_arn IntegrationAwsAgentlessScanning#bucket_arn}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.credentials"></a>

```python
credentials: IntegrationAwsAgentlessScanningCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials">IntegrationAwsAgentlessScanningCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#credentials IntegrationAwsAgentlessScanning#credentials}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#enabled IntegrationAwsAgentlessScanning#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#id IntegrationAwsAgentlessScanning#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `query_text`<sup>Optional</sup> <a name="query_text" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.queryText"></a>

```python
query_text: str
```

- *Type:* str

The LQL query text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#query_text IntegrationAwsAgentlessScanning#query_text}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#retries IntegrationAwsAgentlessScanning#retries}

---

##### `scan_containers`<sup>Optional</sup> <a name="scan_containers" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanContainers"></a>

```python
scan_containers: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to includes scanning for containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#scan_containers IntegrationAwsAgentlessScanning#scan_containers}

---

##### `scan_host_vulnerabilities`<sup>Optional</sup> <a name="scan_host_vulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanHostVulnerabilities"></a>

```python
scan_host_vulnerabilities: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to includes scanning for host vulnerabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#scan_host_vulnerabilities IntegrationAwsAgentlessScanning#scan_host_vulnerabilities}

---

##### `scan_multi_volume`<sup>Optional</sup> <a name="scan_multi_volume" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanMultiVolume"></a>

```python
scan_multi_volume: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to scan secondary volumes (true) or only root volumes (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#scan_multi_volume IntegrationAwsAgentlessScanning#scan_multi_volume}

---

##### `scan_stopped_instances`<sup>Optional</sup> <a name="scan_stopped_instances" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanStoppedInstances"></a>

```python
scan_stopped_instances: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to scan stopped instances (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#scan_stopped_instances IntegrationAwsAgentlessScanning#scan_stopped_instances}

---

### IntegrationAwsAgentlessScanningCredentials <a name="IntegrationAwsAgentlessScanningCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_agentless_scanning

integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials(
  external_id: str,
  role_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials.property.externalId">external_id</a></code> | <code>str</code> | The external id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials.property.roleArn">role_arn</a></code> | <code>str</code> | The role arn. |

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

The external id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#external_id IntegrationAwsAgentlessScanning#external_id}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The role arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#role_arn IntegrationAwsAgentlessScanning#role_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationAwsAgentlessScanningCredentialsOutputReference <a name="IntegrationAwsAgentlessScanningCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_agentless_scanning

integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials">IntegrationAwsAgentlessScanningCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: IntegrationAwsAgentlessScanningCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials">IntegrationAwsAgentlessScanningCredentials</a>

---



