# `lacework_integration_gcp_agentless_scanning`

Refer to the Terraform Registory for docs: [`lacework_integration_gcp_agentless_scanning`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning).

# `integrationGcpAgentlessScanning` Submodule <a name="`integrationGcpAgentlessScanning` Submodule" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationGcpAgentlessScanning <a name="IntegrationGcpAgentlessScanning" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning lacework_integration_gcp_agentless_scanning}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_gcp_agentless_scanning

integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket_name: str,
  credentials: IntegrationGcpAgentlessScanningCredentials,
  name: str,
  resource_id: str,
  scanning_project_id: str,
  enabled: typing.Union[bool, IResolvable] = None,
  filter_list: typing.List[str] = None,
  id: str = None,
  query_text: str = None,
  resource_level: str = None,
  retries: typing.Union[int, float] = None,
  scan_containers: typing.Union[bool, IResolvable] = None,
  scan_frequency: typing.Union[int, float] = None,
  scan_host_vulnerabilities: typing.Union[bool, IResolvable] = None,
  scan_multi_volume: typing.Union[bool, IResolvable] = None,
  scan_stopped_instances: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.bucketName">bucket_name</a></code> | <code>str</code> | Bucket containing analysis results shared with Lacework platform. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.name">name</a></code> | <code>str</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.resourceId">resource_id</a></code> | <code>str</code> | Organization Id or Project Id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scanningProjectId">scanning_project_id</a></code> | <code>str</code> | Project ID where scanner is deployed. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.filterList">filter_list</a></code> | <code>typing.List[str]</code> | List of Projects to specifically include/exclude. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#id IntegrationGcpAgentlessScanning#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.queryText">query_text</a></code> | <code>str</code> | The LQL query text. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.resourceLevel">resource_level</a></code> | <code>str</code> | Integration level - ORGANIZATION / PROJECT. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.retries">retries</a></code> | <code>typing.Union[int, float]</code> | The number of attempts to create the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scanContainers">scan_containers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to includes scanning for containers. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scanFrequency">scan_frequency</a></code> | <code>typing.Union[int, float]</code> | How often in hours the scan will run in hours. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scanHostVulnerabilities">scan_host_vulnerabilities</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to includes scanning for host vulnerabilities. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scanMultiVolume">scan_multi_volume</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to scan secondary volumes (true) or only root volumes (false). |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scanStoppedInstances">scan_stopped_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to scan stopped instances (true). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.bucketName"></a>

- *Type:* str

Bucket containing analysis results shared with Lacework platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#bucket_name IntegrationGcpAgentlessScanning#bucket_name}

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.credentials"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#credentials IntegrationGcpAgentlessScanning#credentials}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.name"></a>

- *Type:* str

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#name IntegrationGcpAgentlessScanning#name}

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.resourceId"></a>

- *Type:* str

Organization Id or Project Id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#resource_id IntegrationGcpAgentlessScanning#resource_id}

---

##### `scanning_project_id`<sup>Required</sup> <a name="scanning_project_id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scanningProjectId"></a>

- *Type:* str

Project ID where scanner is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scanning_project_id IntegrationGcpAgentlessScanning#scanning_project_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#enabled IntegrationGcpAgentlessScanning#enabled}

---

##### `filter_list`<sup>Optional</sup> <a name="filter_list" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.filterList"></a>

- *Type:* typing.List[str]

List of Projects to specifically include/exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#filter_list IntegrationGcpAgentlessScanning#filter_list}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#id IntegrationGcpAgentlessScanning#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `query_text`<sup>Optional</sup> <a name="query_text" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.queryText"></a>

- *Type:* str

The LQL query text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#query_text IntegrationGcpAgentlessScanning#query_text}

---

##### `resource_level`<sup>Optional</sup> <a name="resource_level" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.resourceLevel"></a>

- *Type:* str

Integration level - ORGANIZATION / PROJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#resource_level IntegrationGcpAgentlessScanning#resource_level}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.retries"></a>

- *Type:* typing.Union[int, float]

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#retries IntegrationGcpAgentlessScanning#retries}

---

##### `scan_containers`<sup>Optional</sup> <a name="scan_containers" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scanContainers"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to includes scanning for containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_containers IntegrationGcpAgentlessScanning#scan_containers}

---

##### `scan_frequency`<sup>Optional</sup> <a name="scan_frequency" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scanFrequency"></a>

- *Type:* typing.Union[int, float]

How often in hours the scan will run in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_frequency IntegrationGcpAgentlessScanning#scan_frequency}

---

##### `scan_host_vulnerabilities`<sup>Optional</sup> <a name="scan_host_vulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scanHostVulnerabilities"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to includes scanning for host vulnerabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_host_vulnerabilities IntegrationGcpAgentlessScanning#scan_host_vulnerabilities}

---

##### `scan_multi_volume`<sup>Optional</sup> <a name="scan_multi_volume" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scanMultiVolume"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to scan secondary volumes (true) or only root volumes (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_multi_volume IntegrationGcpAgentlessScanning#scan_multi_volume}

---

##### `scan_stopped_instances`<sup>Optional</sup> <a name="scan_stopped_instances" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scanStoppedInstances"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to scan stopped instances (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_stopped_instances IntegrationGcpAgentlessScanning#scan_stopped_instances}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.putCredentials">put_credentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetFilterList">reset_filter_list</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetQueryText">reset_query_text</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetResourceLevel">reset_resource_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetRetries">reset_retries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanContainers">reset_scan_containers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanFrequency">reset_scan_frequency</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanHostVulnerabilities">reset_scan_host_vulnerabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanMultiVolume">reset_scan_multi_volume</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanStoppedInstances">reset_scan_stopped_instances</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_credentials` <a name="put_credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.putCredentials"></a>

```python
def put_credentials(
  client_email: str,
  client_id: str,
  private_key: str,
  private_key_id: str,
  token_uri: str = None
) -> None
```

###### `client_email`<sup>Required</sup> <a name="client_email" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.putCredentials.parameter.clientEmail"></a>

- *Type:* str

Client email from credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#client_email IntegrationGcpAgentlessScanning#client_email}

---

###### `client_id`<sup>Required</sup> <a name="client_id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.putCredentials.parameter.clientId"></a>

- *Type:* str

Client Id from credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#client_id IntegrationGcpAgentlessScanning#client_id}

---

###### `private_key`<sup>Required</sup> <a name="private_key" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.putCredentials.parameter.privateKey"></a>

- *Type:* str

Private Key from credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#private_key IntegrationGcpAgentlessScanning#private_key}

---

###### `private_key_id`<sup>Required</sup> <a name="private_key_id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.putCredentials.parameter.privateKeyId"></a>

- *Type:* str

Private Key Id from credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#private_key_id IntegrationGcpAgentlessScanning#private_key_id}

---

###### `token_uri`<sup>Optional</sup> <a name="token_uri" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.putCredentials.parameter.tokenUri"></a>

- *Type:* str

Token URI from credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#token_uri IntegrationGcpAgentlessScanning#token_uri}

---

##### `reset_enabled` <a name="reset_enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_filter_list` <a name="reset_filter_list" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetFilterList"></a>

```python
def reset_filter_list() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_query_text` <a name="reset_query_text" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetQueryText"></a>

```python
def reset_query_text() -> None
```

##### `reset_resource_level` <a name="reset_resource_level" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetResourceLevel"></a>

```python
def reset_resource_level() -> None
```

##### `reset_retries` <a name="reset_retries" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetRetries"></a>

```python
def reset_retries() -> None
```

##### `reset_scan_containers` <a name="reset_scan_containers" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanContainers"></a>

```python
def reset_scan_containers() -> None
```

##### `reset_scan_frequency` <a name="reset_scan_frequency" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanFrequency"></a>

```python
def reset_scan_frequency() -> None
```

##### `reset_scan_host_vulnerabilities` <a name="reset_scan_host_vulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanHostVulnerabilities"></a>

```python
def reset_scan_host_vulnerabilities() -> None
```

##### `reset_scan_multi_volume` <a name="reset_scan_multi_volume" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanMultiVolume"></a>

```python
def reset_scan_multi_volume() -> None
```

##### `reset_scan_stopped_instances` <a name="reset_scan_stopped_instances" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanStoppedInstances"></a>

```python
def reset_scan_stopped_instances() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_gcp_agentless_scanning

integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_gcp_agentless_scanning

integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_gcp_agentless_scanning

integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.createdOrUpdatedBy">created_or_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.createdOrUpdatedTime">created_or_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference">IntegrationGcpAgentlessScanningCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.intgGuid">intg_guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.orgLevel">org_level</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.serverToken">server_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.credentialsInput">credentials_input</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.filterListInput">filter_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.queryTextInput">query_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceLevelInput">resource_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.retriesInput">retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanContainersInput">scan_containers_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanFrequencyInput">scan_frequency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanHostVulnerabilitiesInput">scan_host_vulnerabilities_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanMultiVolumeInput">scan_multi_volume_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanningProjectIdInput">scanning_project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanStoppedInstancesInput">scan_stopped_instances_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.filterList">filter_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.queryText">query_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceLevel">resource_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanContainers">scan_containers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanFrequency">scan_frequency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanHostVulnerabilities">scan_host_vulnerabilities</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanMultiVolume">scan_multi_volume</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanningProjectId">scanning_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanStoppedInstances">scan_stopped_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_or_updated_by`<sup>Required</sup> <a name="created_or_updated_by" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.createdOrUpdatedBy"></a>

```python
created_or_updated_by: str
```

- *Type:* str

---

##### `created_or_updated_time`<sup>Required</sup> <a name="created_or_updated_time" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.createdOrUpdatedTime"></a>

```python
created_or_updated_time: str
```

- *Type:* str

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.credentials"></a>

```python
credentials: IntegrationGcpAgentlessScanningCredentialsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference">IntegrationGcpAgentlessScanningCredentialsOutputReference</a>

---

##### `intg_guid`<sup>Required</sup> <a name="intg_guid" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.intgGuid"></a>

```python
intg_guid: str
```

- *Type:* str

---

##### `org_level`<sup>Required</sup> <a name="org_level" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.orgLevel"></a>

```python
org_level: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `server_token`<sup>Required</sup> <a name="server_token" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.serverToken"></a>

```python
server_token: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.credentialsInput"></a>

```python
credentials_input: IntegrationGcpAgentlessScanningCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_list_input`<sup>Optional</sup> <a name="filter_list_input" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.filterListInput"></a>

```python
filter_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `query_text_input`<sup>Optional</sup> <a name="query_text_input" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.queryTextInput"></a>

```python
query_text_input: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `resource_level_input`<sup>Optional</sup> <a name="resource_level_input" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceLevelInput"></a>

```python
resource_level_input: str
```

- *Type:* str

---

##### `retries_input`<sup>Optional</sup> <a name="retries_input" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.retriesInput"></a>

```python
retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_containers_input`<sup>Optional</sup> <a name="scan_containers_input" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanContainersInput"></a>

```python
scan_containers_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scan_frequency_input`<sup>Optional</sup> <a name="scan_frequency_input" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanFrequencyInput"></a>

```python
scan_frequency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_host_vulnerabilities_input`<sup>Optional</sup> <a name="scan_host_vulnerabilities_input" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanHostVulnerabilitiesInput"></a>

```python
scan_host_vulnerabilities_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scan_multi_volume_input`<sup>Optional</sup> <a name="scan_multi_volume_input" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanMultiVolumeInput"></a>

```python
scan_multi_volume_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scanning_project_id_input`<sup>Optional</sup> <a name="scanning_project_id_input" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanningProjectIdInput"></a>

```python
scanning_project_id_input: str
```

- *Type:* str

---

##### `scan_stopped_instances_input`<sup>Optional</sup> <a name="scan_stopped_instances_input" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanStoppedInstancesInput"></a>

```python
scan_stopped_instances_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_list`<sup>Required</sup> <a name="filter_list" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.filterList"></a>

```python
filter_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `query_text`<sup>Required</sup> <a name="query_text" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.queryText"></a>

```python
query_text: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_level`<sup>Required</sup> <a name="resource_level" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceLevel"></a>

```python
resource_level: str
```

- *Type:* str

---

##### `retries`<sup>Required</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_containers`<sup>Required</sup> <a name="scan_containers" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanContainers"></a>

```python
scan_containers: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scan_frequency`<sup>Required</sup> <a name="scan_frequency" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanFrequency"></a>

```python
scan_frequency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_host_vulnerabilities`<sup>Required</sup> <a name="scan_host_vulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanHostVulnerabilities"></a>

```python
scan_host_vulnerabilities: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scan_multi_volume`<sup>Required</sup> <a name="scan_multi_volume" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanMultiVolume"></a>

```python
scan_multi_volume: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scanning_project_id`<sup>Required</sup> <a name="scanning_project_id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanningProjectId"></a>

```python
scanning_project_id: str
```

- *Type:* str

---

##### `scan_stopped_instances`<sup>Required</sup> <a name="scan_stopped_instances" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanStoppedInstances"></a>

```python
scan_stopped_instances: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationGcpAgentlessScanningConfig <a name="IntegrationGcpAgentlessScanningConfig" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_gcp_agentless_scanning

integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket_name: str,
  credentials: IntegrationGcpAgentlessScanningCredentials,
  name: str,
  resource_id: str,
  scanning_project_id: str,
  enabled: typing.Union[bool, IResolvable] = None,
  filter_list: typing.List[str] = None,
  id: str = None,
  query_text: str = None,
  resource_level: str = None,
  retries: typing.Union[int, float] = None,
  scan_containers: typing.Union[bool, IResolvable] = None,
  scan_frequency: typing.Union[int, float] = None,
  scan_host_vulnerabilities: typing.Union[bool, IResolvable] = None,
  scan_multi_volume: typing.Union[bool, IResolvable] = None,
  scan_stopped_instances: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.bucketName">bucket_name</a></code> | <code>str</code> | Bucket containing analysis results shared with Lacework platform. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.name">name</a></code> | <code>str</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.resourceId">resource_id</a></code> | <code>str</code> | Organization Id or Project Id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanningProjectId">scanning_project_id</a></code> | <code>str</code> | Project ID where scanner is deployed. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.filterList">filter_list</a></code> | <code>typing.List[str]</code> | List of Projects to specifically include/exclude. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#id IntegrationGcpAgentlessScanning#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.queryText">query_text</a></code> | <code>str</code> | The LQL query text. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.resourceLevel">resource_level</a></code> | <code>str</code> | Integration level - ORGANIZATION / PROJECT. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | The number of attempts to create the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanContainers">scan_containers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to includes scanning for containers. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanFrequency">scan_frequency</a></code> | <code>typing.Union[int, float]</code> | How often in hours the scan will run in hours. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanHostVulnerabilities">scan_host_vulnerabilities</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to includes scanning for host vulnerabilities. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanMultiVolume">scan_multi_volume</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to scan secondary volumes (true) or only root volumes (false). |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanStoppedInstances">scan_stopped_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to scan stopped instances (true). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Bucket containing analysis results shared with Lacework platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#bucket_name IntegrationGcpAgentlessScanning#bucket_name}

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.credentials"></a>

```python
credentials: IntegrationGcpAgentlessScanningCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#credentials IntegrationGcpAgentlessScanning#credentials}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#name IntegrationGcpAgentlessScanning#name}

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Organization Id or Project Id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#resource_id IntegrationGcpAgentlessScanning#resource_id}

---

##### `scanning_project_id`<sup>Required</sup> <a name="scanning_project_id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanningProjectId"></a>

```python
scanning_project_id: str
```

- *Type:* str

Project ID where scanner is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scanning_project_id IntegrationGcpAgentlessScanning#scanning_project_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#enabled IntegrationGcpAgentlessScanning#enabled}

---

##### `filter_list`<sup>Optional</sup> <a name="filter_list" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.filterList"></a>

```python
filter_list: typing.List[str]
```

- *Type:* typing.List[str]

List of Projects to specifically include/exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#filter_list IntegrationGcpAgentlessScanning#filter_list}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#id IntegrationGcpAgentlessScanning#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `query_text`<sup>Optional</sup> <a name="query_text" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.queryText"></a>

```python
query_text: str
```

- *Type:* str

The LQL query text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#query_text IntegrationGcpAgentlessScanning#query_text}

---

##### `resource_level`<sup>Optional</sup> <a name="resource_level" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.resourceLevel"></a>

```python
resource_level: str
```

- *Type:* str

Integration level - ORGANIZATION / PROJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#resource_level IntegrationGcpAgentlessScanning#resource_level}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#retries IntegrationGcpAgentlessScanning#retries}

---

##### `scan_containers`<sup>Optional</sup> <a name="scan_containers" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanContainers"></a>

```python
scan_containers: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to includes scanning for containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_containers IntegrationGcpAgentlessScanning#scan_containers}

---

##### `scan_frequency`<sup>Optional</sup> <a name="scan_frequency" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanFrequency"></a>

```python
scan_frequency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How often in hours the scan will run in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_frequency IntegrationGcpAgentlessScanning#scan_frequency}

---

##### `scan_host_vulnerabilities`<sup>Optional</sup> <a name="scan_host_vulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanHostVulnerabilities"></a>

```python
scan_host_vulnerabilities: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to includes scanning for host vulnerabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_host_vulnerabilities IntegrationGcpAgentlessScanning#scan_host_vulnerabilities}

---

##### `scan_multi_volume`<sup>Optional</sup> <a name="scan_multi_volume" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanMultiVolume"></a>

```python
scan_multi_volume: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to scan secondary volumes (true) or only root volumes (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_multi_volume IntegrationGcpAgentlessScanning#scan_multi_volume}

---

##### `scan_stopped_instances`<sup>Optional</sup> <a name="scan_stopped_instances" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanStoppedInstances"></a>

```python
scan_stopped_instances: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to scan stopped instances (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_stopped_instances IntegrationGcpAgentlessScanning#scan_stopped_instances}

---

### IntegrationGcpAgentlessScanningCredentials <a name="IntegrationGcpAgentlessScanningCredentials" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_gcp_agentless_scanning

integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials(
  client_email: str,
  client_id: str,
  private_key: str,
  private_key_id: str,
  token_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.clientEmail">client_email</a></code> | <code>str</code> | Client email from credentials file. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.clientId">client_id</a></code> | <code>str</code> | Client Id from credentials file. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.privateKey">private_key</a></code> | <code>str</code> | Private Key from credentials file. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.privateKeyId">private_key_id</a></code> | <code>str</code> | Private Key Id from credentials file. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.tokenUri">token_uri</a></code> | <code>str</code> | Token URI from credentials file. |

---

##### `client_email`<sup>Required</sup> <a name="client_email" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.clientEmail"></a>

```python
client_email: str
```

- *Type:* str

Client email from credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#client_email IntegrationGcpAgentlessScanning#client_email}

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Client Id from credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#client_id IntegrationGcpAgentlessScanning#client_id}

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

Private Key from credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#private_key IntegrationGcpAgentlessScanning#private_key}

---

##### `private_key_id`<sup>Required</sup> <a name="private_key_id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.privateKeyId"></a>

```python
private_key_id: str
```

- *Type:* str

Private Key Id from credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#private_key_id IntegrationGcpAgentlessScanning#private_key_id}

---

##### `token_uri`<sup>Optional</sup> <a name="token_uri" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.tokenUri"></a>

```python
token_uri: str
```

- *Type:* str

Token URI from credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#token_uri IntegrationGcpAgentlessScanning#token_uri}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationGcpAgentlessScanningCredentialsOutputReference <a name="IntegrationGcpAgentlessScanningCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_gcp_agentless_scanning

integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.resetTokenUri">reset_token_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_token_uri` <a name="reset_token_uri" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.resetTokenUri"></a>

```python
def reset_token_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientEmailInput">client_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKeyIdInput">private_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.tokenUriInput">token_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientEmail">client_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKeyId">private_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.tokenUri">token_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_email_input`<sup>Optional</sup> <a name="client_email_input" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientEmailInput"></a>

```python
client_email_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `private_key_id_input`<sup>Optional</sup> <a name="private_key_id_input" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKeyIdInput"></a>

```python
private_key_id_input: str
```

- *Type:* str

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `token_uri_input`<sup>Optional</sup> <a name="token_uri_input" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.tokenUriInput"></a>

```python
token_uri_input: str
```

- *Type:* str

---

##### `client_email`<sup>Required</sup> <a name="client_email" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientEmail"></a>

```python
client_email: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `private_key_id`<sup>Required</sup> <a name="private_key_id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKeyId"></a>

```python
private_key_id: str
```

- *Type:* str

---

##### `token_uri`<sup>Required</sup> <a name="token_uri" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.tokenUri"></a>

```python
token_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: IntegrationGcpAgentlessScanningCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a>

---



