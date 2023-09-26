# `lacework_integration_gcp_agentless_scanning`

Refer to the Terraform Registory for docs: [`lacework_integration_gcp_agentless_scanning`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning).

# `integrationGcpAgentlessScanning` Submodule <a name="`integrationGcpAgentlessScanning` Submodule" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationGcpAgentlessScanning <a name="IntegrationGcpAgentlessScanning" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning lacework_integration_gcp_agentless_scanning}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_gcp_agentless_scanning.IntegrationGcpAgentlessScanning;

IntegrationGcpAgentlessScanning.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .bucketName(java.lang.String)
    .credentials(IntegrationGcpAgentlessScanningCredentials)
    .name(java.lang.String)
    .resourceId(java.lang.String)
    .scanningProjectId(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .filterList(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .queryText(java.lang.String)
//  .resourceLevel(java.lang.String)
//  .retries(java.lang.Number)
//  .scanContainers(java.lang.Boolean)
//  .scanContainers(IResolvable)
//  .scanFrequency(java.lang.Number)
//  .scanHostVulnerabilities(java.lang.Boolean)
//  .scanHostVulnerabilities(IResolvable)
//  .scanMultiVolume(java.lang.Boolean)
//  .scanMultiVolume(IResolvable)
//  .scanStoppedInstances(java.lang.Boolean)
//  .scanStoppedInstances(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Bucket containing analysis results shared with Lacework platform. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Organization Id or Project Id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scanningProjectId">scanningProjectId</a></code> | <code>java.lang.String</code> | Project ID where scanner is deployed. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.filterList">filterList</a></code> | <code>java.util.List<java.lang.String></code> | List of Projects to specifically include/exclude. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#id IntegrationGcpAgentlessScanning#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.queryText">queryText</a></code> | <code>java.lang.String</code> | The LQL query text. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.resourceLevel">resourceLevel</a></code> | <code>java.lang.String</code> | Integration level - ORGANIZATION / PROJECT. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.retries">retries</a></code> | <code>java.lang.Number</code> | The number of attempts to create the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scanContainers">scanContainers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to includes scanning for containers. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scanFrequency">scanFrequency</a></code> | <code>java.lang.Number</code> | How often in hours the scan will run in hours. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scanHostVulnerabilities">scanHostVulnerabilities</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to includes scanning for host vulnerabilities. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scanMultiVolume">scanMultiVolume</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to scan secondary volumes (true) or only root volumes (false). |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scanStoppedInstances">scanStoppedInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to scan stopped instances (true). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.bucketName"></a>

- *Type:* java.lang.String

Bucket containing analysis results shared with Lacework platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#bucket_name IntegrationGcpAgentlessScanning#bucket_name}

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.credentials"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#credentials IntegrationGcpAgentlessScanning#credentials}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#name IntegrationGcpAgentlessScanning#name}

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.resourceId"></a>

- *Type:* java.lang.String

Organization Id or Project Id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#resource_id IntegrationGcpAgentlessScanning#resource_id}

---

##### `scanningProjectId`<sup>Required</sup> <a name="scanningProjectId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scanningProjectId"></a>

- *Type:* java.lang.String

Project ID where scanner is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scanning_project_id IntegrationGcpAgentlessScanning#scanning_project_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#enabled IntegrationGcpAgentlessScanning#enabled}

---

##### `filterList`<sup>Optional</sup> <a name="filterList" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.filterList"></a>

- *Type:* java.util.List<java.lang.String>

List of Projects to specifically include/exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#filter_list IntegrationGcpAgentlessScanning#filter_list}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#id IntegrationGcpAgentlessScanning#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `queryText`<sup>Optional</sup> <a name="queryText" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.queryText"></a>

- *Type:* java.lang.String

The LQL query text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#query_text IntegrationGcpAgentlessScanning#query_text}

---

##### `resourceLevel`<sup>Optional</sup> <a name="resourceLevel" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.resourceLevel"></a>

- *Type:* java.lang.String

Integration level - ORGANIZATION / PROJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#resource_level IntegrationGcpAgentlessScanning#resource_level}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.retries"></a>

- *Type:* java.lang.Number

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#retries IntegrationGcpAgentlessScanning#retries}

---

##### `scanContainers`<sup>Optional</sup> <a name="scanContainers" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scanContainers"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to includes scanning for containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_containers IntegrationGcpAgentlessScanning#scan_containers}

---

##### `scanFrequency`<sup>Optional</sup> <a name="scanFrequency" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scanFrequency"></a>

- *Type:* java.lang.Number

How often in hours the scan will run in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_frequency IntegrationGcpAgentlessScanning#scan_frequency}

---

##### `scanHostVulnerabilities`<sup>Optional</sup> <a name="scanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scanHostVulnerabilities"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to includes scanning for host vulnerabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_host_vulnerabilities IntegrationGcpAgentlessScanning#scan_host_vulnerabilities}

---

##### `scanMultiVolume`<sup>Optional</sup> <a name="scanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scanMultiVolume"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to scan secondary volumes (true) or only root volumes (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_multi_volume IntegrationGcpAgentlessScanning#scan_multi_volume}

---

##### `scanStoppedInstances`<sup>Optional</sup> <a name="scanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scanStoppedInstances"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to scan stopped instances (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_stopped_instances IntegrationGcpAgentlessScanning#scan_stopped_instances}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetFilterList">resetFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetQueryText">resetQueryText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetResourceLevel">resetResourceLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetRetries">resetRetries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanContainers">resetScanContainers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanFrequency">resetScanFrequency</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanHostVulnerabilities">resetScanHostVulnerabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanMultiVolume">resetScanMultiVolume</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanStoppedInstances">resetScanStoppedInstances</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCredentials` <a name="putCredentials" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.putCredentials"></a>

```java
public void putCredentials(IntegrationGcpAgentlessScanningCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a>

---

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetFilterList` <a name="resetFilterList" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetFilterList"></a>

```java
public void resetFilterList()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetId"></a>

```java
public void resetId()
```

##### `resetQueryText` <a name="resetQueryText" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetQueryText"></a>

```java
public void resetQueryText()
```

##### `resetResourceLevel` <a name="resetResourceLevel" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetResourceLevel"></a>

```java
public void resetResourceLevel()
```

##### `resetRetries` <a name="resetRetries" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetRetries"></a>

```java
public void resetRetries()
```

##### `resetScanContainers` <a name="resetScanContainers" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanContainers"></a>

```java
public void resetScanContainers()
```

##### `resetScanFrequency` <a name="resetScanFrequency" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanFrequency"></a>

```java
public void resetScanFrequency()
```

##### `resetScanHostVulnerabilities` <a name="resetScanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanHostVulnerabilities"></a>

```java
public void resetScanHostVulnerabilities()
```

##### `resetScanMultiVolume` <a name="resetScanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanMultiVolume"></a>

```java
public void resetScanMultiVolume()
```

##### `resetScanStoppedInstances` <a name="resetScanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanStoppedInstances"></a>

```java
public void resetScanStoppedInstances()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_gcp_agentless_scanning.IntegrationGcpAgentlessScanning;

IntegrationGcpAgentlessScanning.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_gcp_agentless_scanning.IntegrationGcpAgentlessScanning;

IntegrationGcpAgentlessScanning.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_gcp_agentless_scanning.IntegrationGcpAgentlessScanning;

IntegrationGcpAgentlessScanning.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.createdOrUpdatedBy">createdOrUpdatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.createdOrUpdatedTime">createdOrUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference">IntegrationGcpAgentlessScanningCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.intgGuid">intgGuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.orgLevel">orgLevel</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.serverToken">serverToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.typeName">typeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.credentialsInput">credentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.filterListInput">filterListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.queryTextInput">queryTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceLevelInput">resourceLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.retriesInput">retriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanContainersInput">scanContainersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanFrequencyInput">scanFrequencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanHostVulnerabilitiesInput">scanHostVulnerabilitiesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanMultiVolumeInput">scanMultiVolumeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanningProjectIdInput">scanningProjectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanStoppedInstancesInput">scanStoppedInstancesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.filterList">filterList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.queryText">queryText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceLevel">resourceLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.retries">retries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanContainers">scanContainers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanFrequency">scanFrequency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanHostVulnerabilities">scanHostVulnerabilities</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanMultiVolume">scanMultiVolume</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanningProjectId">scanningProjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanStoppedInstances">scanStoppedInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdOrUpdatedBy`<sup>Required</sup> <a name="createdOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.createdOrUpdatedBy"></a>

```java
public java.lang.String getCreatedOrUpdatedBy();
```

- *Type:* java.lang.String

---

##### `createdOrUpdatedTime`<sup>Required</sup> <a name="createdOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.createdOrUpdatedTime"></a>

```java
public java.lang.String getCreatedOrUpdatedTime();
```

- *Type:* java.lang.String

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.credentials"></a>

```java
public IntegrationGcpAgentlessScanningCredentialsOutputReference getCredentials();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference">IntegrationGcpAgentlessScanningCredentialsOutputReference</a>

---

##### `intgGuid`<sup>Required</sup> <a name="intgGuid" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.intgGuid"></a>

```java
public java.lang.String getIntgGuid();
```

- *Type:* java.lang.String

---

##### `orgLevel`<sup>Required</sup> <a name="orgLevel" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.orgLevel"></a>

```java
public IResolvable getOrgLevel();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `serverToken`<sup>Required</sup> <a name="serverToken" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.serverToken"></a>

```java
public java.lang.String getServerToken();
```

- *Type:* java.lang.String

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.credentialsInput"></a>

```java
public IntegrationGcpAgentlessScanningCredentials getCredentialsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filterListInput`<sup>Optional</sup> <a name="filterListInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.filterListInput"></a>

```java
public java.util.List<java.lang.String> getFilterListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `queryTextInput`<sup>Optional</sup> <a name="queryTextInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.queryTextInput"></a>

```java
public java.lang.String getQueryTextInput();
```

- *Type:* java.lang.String

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `resourceLevelInput`<sup>Optional</sup> <a name="resourceLevelInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceLevelInput"></a>

```java
public java.lang.String getResourceLevelInput();
```

- *Type:* java.lang.String

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.retriesInput"></a>

```java
public java.lang.Number getRetriesInput();
```

- *Type:* java.lang.Number

---

##### `scanContainersInput`<sup>Optional</sup> <a name="scanContainersInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanContainersInput"></a>

```java
public java.lang.Object getScanContainersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scanFrequencyInput`<sup>Optional</sup> <a name="scanFrequencyInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanFrequencyInput"></a>

```java
public java.lang.Number getScanFrequencyInput();
```

- *Type:* java.lang.Number

---

##### `scanHostVulnerabilitiesInput`<sup>Optional</sup> <a name="scanHostVulnerabilitiesInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanHostVulnerabilitiesInput"></a>

```java
public java.lang.Object getScanHostVulnerabilitiesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scanMultiVolumeInput`<sup>Optional</sup> <a name="scanMultiVolumeInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanMultiVolumeInput"></a>

```java
public java.lang.Object getScanMultiVolumeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scanningProjectIdInput`<sup>Optional</sup> <a name="scanningProjectIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanningProjectIdInput"></a>

```java
public java.lang.String getScanningProjectIdInput();
```

- *Type:* java.lang.String

---

##### `scanStoppedInstancesInput`<sup>Optional</sup> <a name="scanStoppedInstancesInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanStoppedInstancesInput"></a>

```java
public java.lang.Object getScanStoppedInstancesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filterList`<sup>Required</sup> <a name="filterList" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.filterList"></a>

```java
public java.util.List<java.lang.String> getFilterList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `queryText`<sup>Required</sup> <a name="queryText" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.queryText"></a>

```java
public java.lang.String getQueryText();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `resourceLevel`<sup>Required</sup> <a name="resourceLevel" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceLevel"></a>

```java
public java.lang.String getResourceLevel();
```

- *Type:* java.lang.String

---

##### `retries`<sup>Required</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

---

##### `scanContainers`<sup>Required</sup> <a name="scanContainers" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanContainers"></a>

```java
public java.lang.Object getScanContainers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scanFrequency`<sup>Required</sup> <a name="scanFrequency" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanFrequency"></a>

```java
public java.lang.Number getScanFrequency();
```

- *Type:* java.lang.Number

---

##### `scanHostVulnerabilities`<sup>Required</sup> <a name="scanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanHostVulnerabilities"></a>

```java
public java.lang.Object getScanHostVulnerabilities();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scanMultiVolume`<sup>Required</sup> <a name="scanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanMultiVolume"></a>

```java
public java.lang.Object getScanMultiVolume();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scanningProjectId`<sup>Required</sup> <a name="scanningProjectId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanningProjectId"></a>

```java
public java.lang.String getScanningProjectId();
```

- *Type:* java.lang.String

---

##### `scanStoppedInstances`<sup>Required</sup> <a name="scanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanStoppedInstances"></a>

```java
public java.lang.Object getScanStoppedInstances();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationGcpAgentlessScanningConfig <a name="IntegrationGcpAgentlessScanningConfig" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_gcp_agentless_scanning.IntegrationGcpAgentlessScanningConfig;

IntegrationGcpAgentlessScanningConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .bucketName(java.lang.String)
    .credentials(IntegrationGcpAgentlessScanningCredentials)
    .name(java.lang.String)
    .resourceId(java.lang.String)
    .scanningProjectId(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .filterList(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .queryText(java.lang.String)
//  .resourceLevel(java.lang.String)
//  .retries(java.lang.Number)
//  .scanContainers(java.lang.Boolean)
//  .scanContainers(IResolvable)
//  .scanFrequency(java.lang.Number)
//  .scanHostVulnerabilities(java.lang.Boolean)
//  .scanHostVulnerabilities(IResolvable)
//  .scanMultiVolume(java.lang.Boolean)
//  .scanMultiVolume(IResolvable)
//  .scanStoppedInstances(java.lang.Boolean)
//  .scanStoppedInstances(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Bucket containing analysis results shared with Lacework platform. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.name">name</a></code> | <code>java.lang.String</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Organization Id or Project Id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanningProjectId">scanningProjectId</a></code> | <code>java.lang.String</code> | Project ID where scanner is deployed. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.filterList">filterList</a></code> | <code>java.util.List<java.lang.String></code> | List of Projects to specifically include/exclude. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#id IntegrationGcpAgentlessScanning#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.queryText">queryText</a></code> | <code>java.lang.String</code> | The LQL query text. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.resourceLevel">resourceLevel</a></code> | <code>java.lang.String</code> | Integration level - ORGANIZATION / PROJECT. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.retries">retries</a></code> | <code>java.lang.Number</code> | The number of attempts to create the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanContainers">scanContainers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to includes scanning for containers. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanFrequency">scanFrequency</a></code> | <code>java.lang.Number</code> | How often in hours the scan will run in hours. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanHostVulnerabilities">scanHostVulnerabilities</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to includes scanning for host vulnerabilities. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanMultiVolume">scanMultiVolume</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to scan secondary volumes (true) or only root volumes (false). |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanStoppedInstances">scanStoppedInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to scan stopped instances (true). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

Bucket containing analysis results shared with Lacework platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#bucket_name IntegrationGcpAgentlessScanning#bucket_name}

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.credentials"></a>

```java
public IntegrationGcpAgentlessScanningCredentials getCredentials();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#credentials IntegrationGcpAgentlessScanning#credentials}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#name IntegrationGcpAgentlessScanning#name}

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

Organization Id or Project Id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#resource_id IntegrationGcpAgentlessScanning#resource_id}

---

##### `scanningProjectId`<sup>Required</sup> <a name="scanningProjectId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanningProjectId"></a>

```java
public java.lang.String getScanningProjectId();
```

- *Type:* java.lang.String

Project ID where scanner is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scanning_project_id IntegrationGcpAgentlessScanning#scanning_project_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#enabled IntegrationGcpAgentlessScanning#enabled}

---

##### `filterList`<sup>Optional</sup> <a name="filterList" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.filterList"></a>

```java
public java.util.List<java.lang.String> getFilterList();
```

- *Type:* java.util.List<java.lang.String>

List of Projects to specifically include/exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#filter_list IntegrationGcpAgentlessScanning#filter_list}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#id IntegrationGcpAgentlessScanning#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `queryText`<sup>Optional</sup> <a name="queryText" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.queryText"></a>

```java
public java.lang.String getQueryText();
```

- *Type:* java.lang.String

The LQL query text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#query_text IntegrationGcpAgentlessScanning#query_text}

---

##### `resourceLevel`<sup>Optional</sup> <a name="resourceLevel" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.resourceLevel"></a>

```java
public java.lang.String getResourceLevel();
```

- *Type:* java.lang.String

Integration level - ORGANIZATION / PROJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#resource_level IntegrationGcpAgentlessScanning#resource_level}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#retries IntegrationGcpAgentlessScanning#retries}

---

##### `scanContainers`<sup>Optional</sup> <a name="scanContainers" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanContainers"></a>

```java
public java.lang.Object getScanContainers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to includes scanning for containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_containers IntegrationGcpAgentlessScanning#scan_containers}

---

##### `scanFrequency`<sup>Optional</sup> <a name="scanFrequency" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanFrequency"></a>

```java
public java.lang.Number getScanFrequency();
```

- *Type:* java.lang.Number

How often in hours the scan will run in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_frequency IntegrationGcpAgentlessScanning#scan_frequency}

---

##### `scanHostVulnerabilities`<sup>Optional</sup> <a name="scanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanHostVulnerabilities"></a>

```java
public java.lang.Object getScanHostVulnerabilities();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to includes scanning for host vulnerabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_host_vulnerabilities IntegrationGcpAgentlessScanning#scan_host_vulnerabilities}

---

##### `scanMultiVolume`<sup>Optional</sup> <a name="scanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanMultiVolume"></a>

```java
public java.lang.Object getScanMultiVolume();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to scan secondary volumes (true) or only root volumes (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_multi_volume IntegrationGcpAgentlessScanning#scan_multi_volume}

---

##### `scanStoppedInstances`<sup>Optional</sup> <a name="scanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanStoppedInstances"></a>

```java
public java.lang.Object getScanStoppedInstances();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to scan stopped instances (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_stopped_instances IntegrationGcpAgentlessScanning#scan_stopped_instances}

---

### IntegrationGcpAgentlessScanningCredentials <a name="IntegrationGcpAgentlessScanningCredentials" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_gcp_agentless_scanning.IntegrationGcpAgentlessScanningCredentials;

IntegrationGcpAgentlessScanningCredentials.builder()
    .clientEmail(java.lang.String)
    .clientId(java.lang.String)
    .privateKey(java.lang.String)
    .privateKeyId(java.lang.String)
//  .tokenUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.clientEmail">clientEmail</a></code> | <code>java.lang.String</code> | Client email from credentials file. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Client Id from credentials file. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | Private Key from credentials file. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.privateKeyId">privateKeyId</a></code> | <code>java.lang.String</code> | Private Key Id from credentials file. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.tokenUri">tokenUri</a></code> | <code>java.lang.String</code> | Token URI from credentials file. |

---

##### `clientEmail`<sup>Required</sup> <a name="clientEmail" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.clientEmail"></a>

```java
public java.lang.String getClientEmail();
```

- *Type:* java.lang.String

Client email from credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#client_email IntegrationGcpAgentlessScanning#client_email}

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Client Id from credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#client_id IntegrationGcpAgentlessScanning#client_id}

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

Private Key from credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#private_key IntegrationGcpAgentlessScanning#private_key}

---

##### `privateKeyId`<sup>Required</sup> <a name="privateKeyId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.privateKeyId"></a>

```java
public java.lang.String getPrivateKeyId();
```

- *Type:* java.lang.String

Private Key Id from credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#private_key_id IntegrationGcpAgentlessScanning#private_key_id}

---

##### `tokenUri`<sup>Optional</sup> <a name="tokenUri" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.tokenUri"></a>

```java
public java.lang.String getTokenUri();
```

- *Type:* java.lang.String

Token URI from credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#token_uri IntegrationGcpAgentlessScanning#token_uri}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationGcpAgentlessScanningCredentialsOutputReference <a name="IntegrationGcpAgentlessScanningCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_gcp_agentless_scanning.IntegrationGcpAgentlessScanningCredentialsOutputReference;

new IntegrationGcpAgentlessScanningCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.resetTokenUri">resetTokenUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTokenUri` <a name="resetTokenUri" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.resetTokenUri"></a>

```java
public void resetTokenUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientEmailInput">clientEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKeyIdInput">privateKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.tokenUriInput">tokenUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientEmail">clientEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKeyId">privateKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.tokenUri">tokenUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientEmailInput`<sup>Optional</sup> <a name="clientEmailInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientEmailInput"></a>

```java
public java.lang.String getClientEmailInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `privateKeyIdInput`<sup>Optional</sup> <a name="privateKeyIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKeyIdInput"></a>

```java
public java.lang.String getPrivateKeyIdInput();
```

- *Type:* java.lang.String

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `tokenUriInput`<sup>Optional</sup> <a name="tokenUriInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.tokenUriInput"></a>

```java
public java.lang.String getTokenUriInput();
```

- *Type:* java.lang.String

---

##### `clientEmail`<sup>Required</sup> <a name="clientEmail" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientEmail"></a>

```java
public java.lang.String getClientEmail();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `privateKeyId`<sup>Required</sup> <a name="privateKeyId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKeyId"></a>

```java
public java.lang.String getPrivateKeyId();
```

- *Type:* java.lang.String

---

##### `tokenUri`<sup>Required</sup> <a name="tokenUri" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.tokenUri"></a>

```java
public java.lang.String getTokenUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.internalValue"></a>

```java
public IntegrationGcpAgentlessScanningCredentials getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a>

---



