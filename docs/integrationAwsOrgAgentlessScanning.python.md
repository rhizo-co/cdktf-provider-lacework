# `lacework_integration_aws_org_agentless_scanning`

Refer to the Terraform Registory for docs: [`lacework_integration_aws_org_agentless_scanning`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning).

# `integrationAwsOrgAgentlessScanning` Submodule <a name="`integrationAwsOrgAgentlessScanning` Submodule" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsOrgAgentlessScanning <a name="IntegrationAwsOrgAgentlessScanning" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning lacework_integration_aws_org_agentless_scanning}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_org_agentless_scanning

integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  monitored_accounts: typing.List[str],
  name: str,
  scan_frequency: typing.Union[int, float],
  scanning_account: str,
  account_id: str = None,
  bucket_arn: str = None,
  credentials: IntegrationAwsOrgAgentlessScanningCredentials = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  management_account: str = None,
  org_account_mappings: typing.Union[IResolvable, typing.List[IntegrationAwsOrgAgentlessScanningOrgAccountMappings]] = None,
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
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.monitoredAccounts">monitored_accounts</a></code> | <code>typing.List[str]</code> | The list of monitored aws accounts ids or OUs. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.name">name</a></code> | <code>str</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scanFrequency">scan_frequency</a></code> | <code>typing.Union[int, float]</code> | How often in hours the scan will run in hours. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scanningAccount">scanning_account</a></code> | <code>str</code> | The scanning aws account id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The aws account id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.bucketArn">bucket_arn</a></code> | <code>str</code> | The bucket arn. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#id IntegrationAwsOrgAgentlessScanning#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.managementAccount">management_account</a></code> | <code>str</code> | The scanning aws account id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.orgAccountMappings">org_account_mappings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings">IntegrationAwsOrgAgentlessScanningOrgAccountMappings</a>]]</code> | org_account_mappings block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.queryText">query_text</a></code> | <code>str</code> | The LQL query text. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.retries">retries</a></code> | <code>typing.Union[int, float]</code> | The number of attempts to create the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scanContainers">scan_containers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to includes scanning for containers. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scanHostVulnerabilities">scan_host_vulnerabilities</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to includes scanning for host vulnerabilities. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scanMultiVolume">scan_multi_volume</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to scan secondary volumes (true) or only root volumes (false). |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scanStoppedInstances">scan_stopped_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to scan stopped instances (true). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `monitored_accounts`<sup>Required</sup> <a name="monitored_accounts" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.monitoredAccounts"></a>

- *Type:* typing.List[str]

The list of monitored aws accounts ids or OUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#monitored_accounts IntegrationAwsOrgAgentlessScanning#monitored_accounts}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.name"></a>

- *Type:* str

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#name IntegrationAwsOrgAgentlessScanning#name}

---

##### `scan_frequency`<sup>Required</sup> <a name="scan_frequency" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scanFrequency"></a>

- *Type:* typing.Union[int, float]

How often in hours the scan will run in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_frequency IntegrationAwsOrgAgentlessScanning#scan_frequency}

---

##### `scanning_account`<sup>Required</sup> <a name="scanning_account" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scanningAccount"></a>

- *Type:* str

The scanning aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scanning_account IntegrationAwsOrgAgentlessScanning#scanning_account}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.accountId"></a>

- *Type:* str

The aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#account_id IntegrationAwsOrgAgentlessScanning#account_id}

---

##### `bucket_arn`<sup>Optional</sup> <a name="bucket_arn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.bucketArn"></a>

- *Type:* str

The bucket arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#bucket_arn IntegrationAwsOrgAgentlessScanning#bucket_arn}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.credentials"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#credentials IntegrationAwsOrgAgentlessScanning#credentials}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#enabled IntegrationAwsOrgAgentlessScanning#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#id IntegrationAwsOrgAgentlessScanning#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `management_account`<sup>Optional</sup> <a name="management_account" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.managementAccount"></a>

- *Type:* str

The scanning aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#management_account IntegrationAwsOrgAgentlessScanning#management_account}

---

##### `org_account_mappings`<sup>Optional</sup> <a name="org_account_mappings" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.orgAccountMappings"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings">IntegrationAwsOrgAgentlessScanningOrgAccountMappings</a>]]

org_account_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#org_account_mappings IntegrationAwsOrgAgentlessScanning#org_account_mappings}

---

##### `query_text`<sup>Optional</sup> <a name="query_text" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.queryText"></a>

- *Type:* str

The LQL query text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#query_text IntegrationAwsOrgAgentlessScanning#query_text}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.retries"></a>

- *Type:* typing.Union[int, float]

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#retries IntegrationAwsOrgAgentlessScanning#retries}

---

##### `scan_containers`<sup>Optional</sup> <a name="scan_containers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scanContainers"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to includes scanning for containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_containers IntegrationAwsOrgAgentlessScanning#scan_containers}

---

##### `scan_host_vulnerabilities`<sup>Optional</sup> <a name="scan_host_vulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scanHostVulnerabilities"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to includes scanning for host vulnerabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_host_vulnerabilities IntegrationAwsOrgAgentlessScanning#scan_host_vulnerabilities}

---

##### `scan_multi_volume`<sup>Optional</sup> <a name="scan_multi_volume" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scanMultiVolume"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to scan secondary volumes (true) or only root volumes (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_multi_volume IntegrationAwsOrgAgentlessScanning#scan_multi_volume}

---

##### `scan_stopped_instances`<sup>Optional</sup> <a name="scan_stopped_instances" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scanStoppedInstances"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to scan stopped instances (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_stopped_instances IntegrationAwsOrgAgentlessScanning#scan_stopped_instances}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.putCredentials">put_credentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.putOrgAccountMappings">put_org_account_mappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetBucketArn">reset_bucket_arn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetCredentials">reset_credentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetManagementAccount">reset_management_account</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetOrgAccountMappings">reset_org_account_mappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetQueryText">reset_query_text</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetRetries">reset_retries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanContainers">reset_scan_containers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanHostVulnerabilities">reset_scan_host_vulnerabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanMultiVolume">reset_scan_multi_volume</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanStoppedInstances">reset_scan_stopped_instances</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_credentials` <a name="put_credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.putCredentials"></a>

```python
def put_credentials(
  external_id: str,
  role_arn: str
) -> None
```

###### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.putCredentials.parameter.externalId"></a>

- *Type:* str

The external id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#external_id IntegrationAwsOrgAgentlessScanning#external_id}

---

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.putCredentials.parameter.roleArn"></a>

- *Type:* str

The role arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#role_arn IntegrationAwsOrgAgentlessScanning#role_arn}

---

##### `put_org_account_mappings` <a name="put_org_account_mappings" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.putOrgAccountMappings"></a>

```python
def put_org_account_mappings(
  value: typing.Union[IResolvable, typing.List[IntegrationAwsOrgAgentlessScanningOrgAccountMappings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.putOrgAccountMappings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings">IntegrationAwsOrgAgentlessScanningOrgAccountMappings</a>]]

---

##### `reset_account_id` <a name="reset_account_id" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_bucket_arn` <a name="reset_bucket_arn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetBucketArn"></a>

```python
def reset_bucket_arn() -> None
```

##### `reset_credentials` <a name="reset_credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetCredentials"></a>

```python
def reset_credentials() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_management_account` <a name="reset_management_account" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetManagementAccount"></a>

```python
def reset_management_account() -> None
```

##### `reset_org_account_mappings` <a name="reset_org_account_mappings" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetOrgAccountMappings"></a>

```python
def reset_org_account_mappings() -> None
```

##### `reset_query_text` <a name="reset_query_text" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetQueryText"></a>

```python
def reset_query_text() -> None
```

##### `reset_retries` <a name="reset_retries" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetRetries"></a>

```python
def reset_retries() -> None
```

##### `reset_scan_containers` <a name="reset_scan_containers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanContainers"></a>

```python
def reset_scan_containers() -> None
```

##### `reset_scan_host_vulnerabilities` <a name="reset_scan_host_vulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanHostVulnerabilities"></a>

```python
def reset_scan_host_vulnerabilities() -> None
```

##### `reset_scan_multi_volume` <a name="reset_scan_multi_volume" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanMultiVolume"></a>

```python
def reset_scan_multi_volume() -> None
```

##### `reset_scan_stopped_instances` <a name="reset_scan_stopped_instances" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanStoppedInstances"></a>

```python
def reset_scan_stopped_instances() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_org_agentless_scanning

integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_org_agentless_scanning

integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_org_agentless_scanning

integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.createdOrUpdatedBy">created_or_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.createdOrUpdatedTime">created_or_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference">IntegrationAwsOrgAgentlessScanningCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.intgGuid">intg_guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.orgAccountMappings">org_account_mappings</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.orgLevel">org_level</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.serverToken">server_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.bucketArnInput">bucket_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.credentialsInput">credentials_input</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.managementAccountInput">management_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.monitoredAccountsInput">monitored_accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.orgAccountMappingsInput">org_account_mappings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings">IntegrationAwsOrgAgentlessScanningOrgAccountMappings</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.queryTextInput">query_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.retriesInput">retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanContainersInput">scan_containers_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanFrequencyInput">scan_frequency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanHostVulnerabilitiesInput">scan_host_vulnerabilities_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanMultiVolumeInput">scan_multi_volume_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanningAccountInput">scanning_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanStoppedInstancesInput">scan_stopped_instances_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.bucketArn">bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.managementAccount">management_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.monitoredAccounts">monitored_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.queryText">query_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanContainers">scan_containers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanFrequency">scan_frequency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanHostVulnerabilities">scan_host_vulnerabilities</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanMultiVolume">scan_multi_volume</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanningAccount">scanning_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanStoppedInstances">scan_stopped_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_or_updated_by`<sup>Required</sup> <a name="created_or_updated_by" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.createdOrUpdatedBy"></a>

```python
created_or_updated_by: str
```

- *Type:* str

---

##### `created_or_updated_time`<sup>Required</sup> <a name="created_or_updated_time" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.createdOrUpdatedTime"></a>

```python
created_or_updated_time: str
```

- *Type:* str

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.credentials"></a>

```python
credentials: IntegrationAwsOrgAgentlessScanningCredentialsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference">IntegrationAwsOrgAgentlessScanningCredentialsOutputReference</a>

---

##### `intg_guid`<sup>Required</sup> <a name="intg_guid" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.intgGuid"></a>

```python
intg_guid: str
```

- *Type:* str

---

##### `org_account_mappings`<sup>Required</sup> <a name="org_account_mappings" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.orgAccountMappings"></a>

```python
org_account_mappings: IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList</a>

---

##### `org_level`<sup>Required</sup> <a name="org_level" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.orgLevel"></a>

```python
org_level: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `server_token`<sup>Required</sup> <a name="server_token" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.serverToken"></a>

```python
server_token: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `bucket_arn_input`<sup>Optional</sup> <a name="bucket_arn_input" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.bucketArnInput"></a>

```python
bucket_arn_input: str
```

- *Type:* str

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.credentialsInput"></a>

```python
credentials_input: IntegrationAwsOrgAgentlessScanningCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `management_account_input`<sup>Optional</sup> <a name="management_account_input" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.managementAccountInput"></a>

```python
management_account_input: str
```

- *Type:* str

---

##### `monitored_accounts_input`<sup>Optional</sup> <a name="monitored_accounts_input" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.monitoredAccountsInput"></a>

```python
monitored_accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `org_account_mappings_input`<sup>Optional</sup> <a name="org_account_mappings_input" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.orgAccountMappingsInput"></a>

```python
org_account_mappings_input: typing.Union[IResolvable, typing.List[IntegrationAwsOrgAgentlessScanningOrgAccountMappings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings">IntegrationAwsOrgAgentlessScanningOrgAccountMappings</a>]]

---

##### `query_text_input`<sup>Optional</sup> <a name="query_text_input" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.queryTextInput"></a>

```python
query_text_input: str
```

- *Type:* str

---

##### `retries_input`<sup>Optional</sup> <a name="retries_input" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.retriesInput"></a>

```python
retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_containers_input`<sup>Optional</sup> <a name="scan_containers_input" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanContainersInput"></a>

```python
scan_containers_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scan_frequency_input`<sup>Optional</sup> <a name="scan_frequency_input" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanFrequencyInput"></a>

```python
scan_frequency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_host_vulnerabilities_input`<sup>Optional</sup> <a name="scan_host_vulnerabilities_input" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanHostVulnerabilitiesInput"></a>

```python
scan_host_vulnerabilities_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scan_multi_volume_input`<sup>Optional</sup> <a name="scan_multi_volume_input" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanMultiVolumeInput"></a>

```python
scan_multi_volume_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scanning_account_input`<sup>Optional</sup> <a name="scanning_account_input" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanningAccountInput"></a>

```python
scanning_account_input: str
```

- *Type:* str

---

##### `scan_stopped_instances_input`<sup>Optional</sup> <a name="scan_stopped_instances_input" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanStoppedInstancesInput"></a>

```python
scan_stopped_instances_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `management_account`<sup>Required</sup> <a name="management_account" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.managementAccount"></a>

```python
management_account: str
```

- *Type:* str

---

##### `monitored_accounts`<sup>Required</sup> <a name="monitored_accounts" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.monitoredAccounts"></a>

```python
monitored_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `query_text`<sup>Required</sup> <a name="query_text" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.queryText"></a>

```python
query_text: str
```

- *Type:* str

---

##### `retries`<sup>Required</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_containers`<sup>Required</sup> <a name="scan_containers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanContainers"></a>

```python
scan_containers: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scan_frequency`<sup>Required</sup> <a name="scan_frequency" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanFrequency"></a>

```python
scan_frequency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_host_vulnerabilities`<sup>Required</sup> <a name="scan_host_vulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanHostVulnerabilities"></a>

```python
scan_host_vulnerabilities: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scan_multi_volume`<sup>Required</sup> <a name="scan_multi_volume" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanMultiVolume"></a>

```python
scan_multi_volume: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scanning_account`<sup>Required</sup> <a name="scanning_account" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanningAccount"></a>

```python
scanning_account: str
```

- *Type:* str

---

##### `scan_stopped_instances`<sup>Required</sup> <a name="scan_stopped_instances" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanStoppedInstances"></a>

```python
scan_stopped_instances: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsOrgAgentlessScanningConfig <a name="IntegrationAwsOrgAgentlessScanningConfig" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_org_agentless_scanning

integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  monitored_accounts: typing.List[str],
  name: str,
  scan_frequency: typing.Union[int, float],
  scanning_account: str,
  account_id: str = None,
  bucket_arn: str = None,
  credentials: IntegrationAwsOrgAgentlessScanningCredentials = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  management_account: str = None,
  org_account_mappings: typing.Union[IResolvable, typing.List[IntegrationAwsOrgAgentlessScanningOrgAccountMappings]] = None,
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
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.monitoredAccounts">monitored_accounts</a></code> | <code>typing.List[str]</code> | The list of monitored aws accounts ids or OUs. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.name">name</a></code> | <code>str</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanFrequency">scan_frequency</a></code> | <code>typing.Union[int, float]</code> | How often in hours the scan will run in hours. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanningAccount">scanning_account</a></code> | <code>str</code> | The scanning aws account id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.accountId">account_id</a></code> | <code>str</code> | The aws account id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.bucketArn">bucket_arn</a></code> | <code>str</code> | The bucket arn. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#id IntegrationAwsOrgAgentlessScanning#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.managementAccount">management_account</a></code> | <code>str</code> | The scanning aws account id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.orgAccountMappings">org_account_mappings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings">IntegrationAwsOrgAgentlessScanningOrgAccountMappings</a>]]</code> | org_account_mappings block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.queryText">query_text</a></code> | <code>str</code> | The LQL query text. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | The number of attempts to create the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanContainers">scan_containers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to includes scanning for containers. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanHostVulnerabilities">scan_host_vulnerabilities</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to includes scanning for host vulnerabilities. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanMultiVolume">scan_multi_volume</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to scan secondary volumes (true) or only root volumes (false). |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanStoppedInstances">scan_stopped_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to scan stopped instances (true). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `monitored_accounts`<sup>Required</sup> <a name="monitored_accounts" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.monitoredAccounts"></a>

```python
monitored_accounts: typing.List[str]
```

- *Type:* typing.List[str]

The list of monitored aws accounts ids or OUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#monitored_accounts IntegrationAwsOrgAgentlessScanning#monitored_accounts}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#name IntegrationAwsOrgAgentlessScanning#name}

---

##### `scan_frequency`<sup>Required</sup> <a name="scan_frequency" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanFrequency"></a>

```python
scan_frequency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How often in hours the scan will run in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_frequency IntegrationAwsOrgAgentlessScanning#scan_frequency}

---

##### `scanning_account`<sup>Required</sup> <a name="scanning_account" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanningAccount"></a>

```python
scanning_account: str
```

- *Type:* str

The scanning aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scanning_account IntegrationAwsOrgAgentlessScanning#scanning_account}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#account_id IntegrationAwsOrgAgentlessScanning#account_id}

---

##### `bucket_arn`<sup>Optional</sup> <a name="bucket_arn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

The bucket arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#bucket_arn IntegrationAwsOrgAgentlessScanning#bucket_arn}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.credentials"></a>

```python
credentials: IntegrationAwsOrgAgentlessScanningCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#credentials IntegrationAwsOrgAgentlessScanning#credentials}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#enabled IntegrationAwsOrgAgentlessScanning#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#id IntegrationAwsOrgAgentlessScanning#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `management_account`<sup>Optional</sup> <a name="management_account" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.managementAccount"></a>

```python
management_account: str
```

- *Type:* str

The scanning aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#management_account IntegrationAwsOrgAgentlessScanning#management_account}

---

##### `org_account_mappings`<sup>Optional</sup> <a name="org_account_mappings" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.orgAccountMappings"></a>

```python
org_account_mappings: typing.Union[IResolvable, typing.List[IntegrationAwsOrgAgentlessScanningOrgAccountMappings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings">IntegrationAwsOrgAgentlessScanningOrgAccountMappings</a>]]

org_account_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#org_account_mappings IntegrationAwsOrgAgentlessScanning#org_account_mappings}

---

##### `query_text`<sup>Optional</sup> <a name="query_text" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.queryText"></a>

```python
query_text: str
```

- *Type:* str

The LQL query text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#query_text IntegrationAwsOrgAgentlessScanning#query_text}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#retries IntegrationAwsOrgAgentlessScanning#retries}

---

##### `scan_containers`<sup>Optional</sup> <a name="scan_containers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanContainers"></a>

```python
scan_containers: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to includes scanning for containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_containers IntegrationAwsOrgAgentlessScanning#scan_containers}

---

##### `scan_host_vulnerabilities`<sup>Optional</sup> <a name="scan_host_vulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanHostVulnerabilities"></a>

```python
scan_host_vulnerabilities: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to includes scanning for host vulnerabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_host_vulnerabilities IntegrationAwsOrgAgentlessScanning#scan_host_vulnerabilities}

---

##### `scan_multi_volume`<sup>Optional</sup> <a name="scan_multi_volume" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanMultiVolume"></a>

```python
scan_multi_volume: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to scan secondary volumes (true) or only root volumes (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_multi_volume IntegrationAwsOrgAgentlessScanning#scan_multi_volume}

---

##### `scan_stopped_instances`<sup>Optional</sup> <a name="scan_stopped_instances" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanStoppedInstances"></a>

```python
scan_stopped_instances: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to scan stopped instances (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_stopped_instances IntegrationAwsOrgAgentlessScanning#scan_stopped_instances}

---

### IntegrationAwsOrgAgentlessScanningCredentials <a name="IntegrationAwsOrgAgentlessScanningCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_org_agentless_scanning

integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials(
  external_id: str,
  role_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials.property.externalId">external_id</a></code> | <code>str</code> | The external id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials.property.roleArn">role_arn</a></code> | <code>str</code> | The role arn. |

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

The external id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#external_id IntegrationAwsOrgAgentlessScanning#external_id}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The role arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#role_arn IntegrationAwsOrgAgentlessScanning#role_arn}

---

### IntegrationAwsOrgAgentlessScanningOrgAccountMappings <a name="IntegrationAwsOrgAgentlessScanningOrgAccountMappings" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_org_agentless_scanning

integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings(
  default_lacework_account: str,
  mapping: typing.Union[IResolvable, typing.List[IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings.property.defaultLaceworkAccount">default_lacework_account</a></code> | <code>str</code> | The default Lacework account name where any non-mapped AWS account will appear. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings.property.mapping">mapping</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping</a>]]</code> | mapping block. |

---

##### `default_lacework_account`<sup>Required</sup> <a name="default_lacework_account" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings.property.defaultLaceworkAccount"></a>

```python
default_lacework_account: str
```

- *Type:* str

The default Lacework account name where any non-mapped AWS account will appear.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#default_lacework_account IntegrationAwsOrgAgentlessScanning#default_lacework_account}

---

##### `mapping`<sup>Required</sup> <a name="mapping" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings.property.mapping"></a>

```python
mapping: typing.Union[IResolvable, typing.List[IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping</a>]]

mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#mapping IntegrationAwsOrgAgentlessScanning#mapping}

---

### IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping <a name="IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_org_agentless_scanning

integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping(
  aws_accounts: typing.List[str],
  lacework_account: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping.property.awsAccounts">aws_accounts</a></code> | <code>typing.List[str]</code> | The list of AWS account IDs to map. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping.property.laceworkAccount">lacework_account</a></code> | <code>str</code> | The Lacework account name where the CloudTrail activity from the selected AWS accounts will appear. |

---

##### `aws_accounts`<sup>Required</sup> <a name="aws_accounts" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping.property.awsAccounts"></a>

```python
aws_accounts: typing.List[str]
```

- *Type:* typing.List[str]

The list of AWS account IDs to map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#aws_accounts IntegrationAwsOrgAgentlessScanning#aws_accounts}

---

##### `lacework_account`<sup>Required</sup> <a name="lacework_account" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping.property.laceworkAccount"></a>

```python
lacework_account: str
```

- *Type:* str

The Lacework account name where the CloudTrail activity from the selected AWS accounts will appear.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#lacework_account IntegrationAwsOrgAgentlessScanning#lacework_account}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationAwsOrgAgentlessScanningCredentialsOutputReference <a name="IntegrationAwsOrgAgentlessScanningCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_org_agentless_scanning

integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: IntegrationAwsOrgAgentlessScanningCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a>

---


### IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList <a name="IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_org_agentless_scanning

integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings">IntegrationAwsOrgAgentlessScanningOrgAccountMappings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IntegrationAwsOrgAgentlessScanningOrgAccountMappings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings">IntegrationAwsOrgAgentlessScanningOrgAccountMappings</a>]]

---


### IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList <a name="IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_org_agentless_scanning

integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping</a>]]

---


### IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference <a name="IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_org_agentless_scanning

integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.awsAccountsInput">aws_accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.laceworkAccountInput">lacework_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.awsAccounts">aws_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.laceworkAccount">lacework_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_accounts_input`<sup>Optional</sup> <a name="aws_accounts_input" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.awsAccountsInput"></a>

```python
aws_accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lacework_account_input`<sup>Optional</sup> <a name="lacework_account_input" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.laceworkAccountInput"></a>

```python
lacework_account_input: str
```

- *Type:* str

---

##### `aws_accounts`<sup>Required</sup> <a name="aws_accounts" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.awsAccounts"></a>

```python
aws_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lacework_account`<sup>Required</sup> <a name="lacework_account" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.laceworkAccount"></a>

```python
lacework_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping</a>]

---


### IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference <a name="IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import integration_aws_org_agentless_scanning

integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.putMapping">put_mapping</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_mapping` <a name="put_mapping" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.putMapping"></a>

```python
def put_mapping(
  value: typing.Union[IResolvable, typing.List[IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.putMapping.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.mapping">mapping</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.defaultLaceworkAccountInput">default_lacework_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.mappingInput">mapping_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.defaultLaceworkAccount">default_lacework_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings">IntegrationAwsOrgAgentlessScanningOrgAccountMappings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mapping`<sup>Required</sup> <a name="mapping" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.mapping"></a>

```python
mapping: IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList</a>

---

##### `default_lacework_account_input`<sup>Optional</sup> <a name="default_lacework_account_input" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.defaultLaceworkAccountInput"></a>

```python
default_lacework_account_input: str
```

- *Type:* str

---

##### `mapping_input`<sup>Optional</sup> <a name="mapping_input" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.mappingInput"></a>

```python
mapping_input: typing.Union[IResolvable, typing.List[IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping</a>]]

---

##### `default_lacework_account`<sup>Required</sup> <a name="default_lacework_account" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.defaultLaceworkAccount"></a>

```python
default_lacework_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IntegrationAwsOrgAgentlessScanningOrgAccountMappings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings">IntegrationAwsOrgAgentlessScanningOrgAccountMappings</a>]

---



