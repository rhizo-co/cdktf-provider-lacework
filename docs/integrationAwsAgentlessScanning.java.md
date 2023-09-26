# `lacework_integration_aws_agentless_scanning`

Refer to the Terraform Registory for docs: [`lacework_integration_aws_agentless_scanning`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning).

# `integrationAwsAgentlessScanning` Submodule <a name="`integrationAwsAgentlessScanning` Submodule" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsAgentlessScanning <a name="IntegrationAwsAgentlessScanning" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning lacework_integration_aws_agentless_scanning}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_aws_agentless_scanning.IntegrationAwsAgentlessScanning;

IntegrationAwsAgentlessScanning.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .scanFrequency(java.lang.Number)
//  .accountId(java.lang.String)
//  .bucketArn(java.lang.String)
//  .credentials(IntegrationAwsAgentlessScanningCredentials)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .queryText(java.lang.String)
//  .retries(java.lang.Number)
//  .scanContainers(java.lang.Boolean)
//  .scanContainers(IResolvable)
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
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.scanFrequency">scanFrequency</a></code> | <code>java.lang.Number</code> | How often in hours the scan will run in hours. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The aws account id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | The bucket arn. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials">IntegrationAwsAgentlessScanningCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#id IntegrationAwsAgentlessScanning#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.queryText">queryText</a></code> | <code>java.lang.String</code> | The LQL query text. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.retries">retries</a></code> | <code>java.lang.Number</code> | The number of attempts to create the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.scanContainers">scanContainers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to includes scanning for containers. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.scanHostVulnerabilities">scanHostVulnerabilities</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to includes scanning for host vulnerabilities. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.scanMultiVolume">scanMultiVolume</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to scan secondary volumes (true) or only root volumes (false). |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.scanStoppedInstances">scanStoppedInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to scan stopped instances (true). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#name IntegrationAwsAgentlessScanning#name}

---

##### `scanFrequency`<sup>Required</sup> <a name="scanFrequency" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.scanFrequency"></a>

- *Type:* java.lang.Number

How often in hours the scan will run in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#scan_frequency IntegrationAwsAgentlessScanning#scan_frequency}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#account_id IntegrationAwsAgentlessScanning#account_id}

---

##### `bucketArn`<sup>Optional</sup> <a name="bucketArn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.bucketArn"></a>

- *Type:* java.lang.String

The bucket arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#bucket_arn IntegrationAwsAgentlessScanning#bucket_arn}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.credentials"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials">IntegrationAwsAgentlessScanningCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#credentials IntegrationAwsAgentlessScanning#credentials}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#enabled IntegrationAwsAgentlessScanning#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#id IntegrationAwsAgentlessScanning#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `queryText`<sup>Optional</sup> <a name="queryText" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.queryText"></a>

- *Type:* java.lang.String

The LQL query text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#query_text IntegrationAwsAgentlessScanning#query_text}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.retries"></a>

- *Type:* java.lang.Number

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#retries IntegrationAwsAgentlessScanning#retries}

---

##### `scanContainers`<sup>Optional</sup> <a name="scanContainers" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.scanContainers"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to includes scanning for containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#scan_containers IntegrationAwsAgentlessScanning#scan_containers}

---

##### `scanHostVulnerabilities`<sup>Optional</sup> <a name="scanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.scanHostVulnerabilities"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to includes scanning for host vulnerabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#scan_host_vulnerabilities IntegrationAwsAgentlessScanning#scan_host_vulnerabilities}

---

##### `scanMultiVolume`<sup>Optional</sup> <a name="scanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.scanMultiVolume"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to scan secondary volumes (true) or only root volumes (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#scan_multi_volume IntegrationAwsAgentlessScanning#scan_multi_volume}

---

##### `scanStoppedInstances`<sup>Optional</sup> <a name="scanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.scanStoppedInstances"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to scan stopped instances (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#scan_stopped_instances IntegrationAwsAgentlessScanning#scan_stopped_instances}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetBucketArn">resetBucketArn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetQueryText">resetQueryText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetRetries">resetRetries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetScanContainers">resetScanContainers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetScanHostVulnerabilities">resetScanHostVulnerabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetScanMultiVolume">resetScanMultiVolume</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetScanStoppedInstances">resetScanStoppedInstances</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCredentials` <a name="putCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.putCredentials"></a>

```java
public void putCredentials(IntegrationAwsAgentlessScanningCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials">IntegrationAwsAgentlessScanningCredentials</a>

---

##### `resetAccountId` <a name="resetAccountId" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetBucketArn` <a name="resetBucketArn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetBucketArn"></a>

```java
public void resetBucketArn()
```

##### `resetCredentials` <a name="resetCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetCredentials"></a>

```java
public void resetCredentials()
```

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetId"></a>

```java
public void resetId()
```

##### `resetQueryText` <a name="resetQueryText" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetQueryText"></a>

```java
public void resetQueryText()
```

##### `resetRetries` <a name="resetRetries" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetRetries"></a>

```java
public void resetRetries()
```

##### `resetScanContainers` <a name="resetScanContainers" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetScanContainers"></a>

```java
public void resetScanContainers()
```

##### `resetScanHostVulnerabilities` <a name="resetScanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetScanHostVulnerabilities"></a>

```java
public void resetScanHostVulnerabilities()
```

##### `resetScanMultiVolume` <a name="resetScanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetScanMultiVolume"></a>

```java
public void resetScanMultiVolume()
```

##### `resetScanStoppedInstances` <a name="resetScanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetScanStoppedInstances"></a>

```java
public void resetScanStoppedInstances()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_aws_agentless_scanning.IntegrationAwsAgentlessScanning;

IntegrationAwsAgentlessScanning.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_aws_agentless_scanning.IntegrationAwsAgentlessScanning;

IntegrationAwsAgentlessScanning.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_aws_agentless_scanning.IntegrationAwsAgentlessScanning;

IntegrationAwsAgentlessScanning.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.createdOrUpdatedBy">createdOrUpdatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.createdOrUpdatedTime">createdOrUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference">IntegrationAwsAgentlessScanningCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.intgGuid">intgGuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.orgLevel">orgLevel</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.serverToken">serverToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.typeName">typeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.bucketArnInput">bucketArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.credentialsInput">credentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials">IntegrationAwsAgentlessScanningCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.queryTextInput">queryTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.retriesInput">retriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanContainersInput">scanContainersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanFrequencyInput">scanFrequencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanHostVulnerabilitiesInput">scanHostVulnerabilitiesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanMultiVolumeInput">scanMultiVolumeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanStoppedInstancesInput">scanStoppedInstancesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.queryText">queryText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.retries">retries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanContainers">scanContainers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanFrequency">scanFrequency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanHostVulnerabilities">scanHostVulnerabilities</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanMultiVolume">scanMultiVolume</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanStoppedInstances">scanStoppedInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdOrUpdatedBy`<sup>Required</sup> <a name="createdOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.createdOrUpdatedBy"></a>

```java
public java.lang.String getCreatedOrUpdatedBy();
```

- *Type:* java.lang.String

---

##### `createdOrUpdatedTime`<sup>Required</sup> <a name="createdOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.createdOrUpdatedTime"></a>

```java
public java.lang.String getCreatedOrUpdatedTime();
```

- *Type:* java.lang.String

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.credentials"></a>

```java
public IntegrationAwsAgentlessScanningCredentialsOutputReference getCredentials();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference">IntegrationAwsAgentlessScanningCredentialsOutputReference</a>

---

##### `intgGuid`<sup>Required</sup> <a name="intgGuid" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.intgGuid"></a>

```java
public java.lang.String getIntgGuid();
```

- *Type:* java.lang.String

---

##### `orgLevel`<sup>Required</sup> <a name="orgLevel" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.orgLevel"></a>

```java
public IResolvable getOrgLevel();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `serverToken`<sup>Required</sup> <a name="serverToken" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.serverToken"></a>

```java
public java.lang.String getServerToken();
```

- *Type:* java.lang.String

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `bucketArnInput`<sup>Optional</sup> <a name="bucketArnInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.bucketArnInput"></a>

```java
public java.lang.String getBucketArnInput();
```

- *Type:* java.lang.String

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.credentialsInput"></a>

```java
public IntegrationAwsAgentlessScanningCredentials getCredentialsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials">IntegrationAwsAgentlessScanningCredentials</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `queryTextInput`<sup>Optional</sup> <a name="queryTextInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.queryTextInput"></a>

```java
public java.lang.String getQueryTextInput();
```

- *Type:* java.lang.String

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.retriesInput"></a>

```java
public java.lang.Number getRetriesInput();
```

- *Type:* java.lang.Number

---

##### `scanContainersInput`<sup>Optional</sup> <a name="scanContainersInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanContainersInput"></a>

```java
public java.lang.Object getScanContainersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scanFrequencyInput`<sup>Optional</sup> <a name="scanFrequencyInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanFrequencyInput"></a>

```java
public java.lang.Number getScanFrequencyInput();
```

- *Type:* java.lang.Number

---

##### `scanHostVulnerabilitiesInput`<sup>Optional</sup> <a name="scanHostVulnerabilitiesInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanHostVulnerabilitiesInput"></a>

```java
public java.lang.Object getScanHostVulnerabilitiesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scanMultiVolumeInput`<sup>Optional</sup> <a name="scanMultiVolumeInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanMultiVolumeInput"></a>

```java
public java.lang.Object getScanMultiVolumeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scanStoppedInstancesInput`<sup>Optional</sup> <a name="scanStoppedInstancesInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanStoppedInstancesInput"></a>

```java
public java.lang.Object getScanStoppedInstancesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `queryText`<sup>Required</sup> <a name="queryText" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.queryText"></a>

```java
public java.lang.String getQueryText();
```

- *Type:* java.lang.String

---

##### `retries`<sup>Required</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

---

##### `scanContainers`<sup>Required</sup> <a name="scanContainers" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanContainers"></a>

```java
public java.lang.Object getScanContainers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scanFrequency`<sup>Required</sup> <a name="scanFrequency" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanFrequency"></a>

```java
public java.lang.Number getScanFrequency();
```

- *Type:* java.lang.Number

---

##### `scanHostVulnerabilities`<sup>Required</sup> <a name="scanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanHostVulnerabilities"></a>

```java
public java.lang.Object getScanHostVulnerabilities();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scanMultiVolume`<sup>Required</sup> <a name="scanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanMultiVolume"></a>

```java
public java.lang.Object getScanMultiVolume();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scanStoppedInstances`<sup>Required</sup> <a name="scanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanStoppedInstances"></a>

```java
public java.lang.Object getScanStoppedInstances();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsAgentlessScanningConfig <a name="IntegrationAwsAgentlessScanningConfig" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_aws_agentless_scanning.IntegrationAwsAgentlessScanningConfig;

IntegrationAwsAgentlessScanningConfig.builder()
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
    .name(java.lang.String)
    .scanFrequency(java.lang.Number)
//  .accountId(java.lang.String)
//  .bucketArn(java.lang.String)
//  .credentials(IntegrationAwsAgentlessScanningCredentials)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .queryText(java.lang.String)
//  .retries(java.lang.Number)
//  .scanContainers(java.lang.Boolean)
//  .scanContainers(IResolvable)
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
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.name">name</a></code> | <code>java.lang.String</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanFrequency">scanFrequency</a></code> | <code>java.lang.Number</code> | How often in hours the scan will run in hours. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The aws account id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | The bucket arn. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials">IntegrationAwsAgentlessScanningCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#id IntegrationAwsAgentlessScanning#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.queryText">queryText</a></code> | <code>java.lang.String</code> | The LQL query text. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.retries">retries</a></code> | <code>java.lang.Number</code> | The number of attempts to create the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanContainers">scanContainers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to includes scanning for containers. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanHostVulnerabilities">scanHostVulnerabilities</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to includes scanning for host vulnerabilities. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanMultiVolume">scanMultiVolume</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to scan secondary volumes (true) or only root volumes (false). |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanStoppedInstances">scanStoppedInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to scan stopped instances (true). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#name IntegrationAwsAgentlessScanning#name}

---

##### `scanFrequency`<sup>Required</sup> <a name="scanFrequency" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanFrequency"></a>

```java
public java.lang.Number getScanFrequency();
```

- *Type:* java.lang.Number

How often in hours the scan will run in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#scan_frequency IntegrationAwsAgentlessScanning#scan_frequency}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#account_id IntegrationAwsAgentlessScanning#account_id}

---

##### `bucketArn`<sup>Optional</sup> <a name="bucketArn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

The bucket arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#bucket_arn IntegrationAwsAgentlessScanning#bucket_arn}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.credentials"></a>

```java
public IntegrationAwsAgentlessScanningCredentials getCredentials();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials">IntegrationAwsAgentlessScanningCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#credentials IntegrationAwsAgentlessScanning#credentials}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#enabled IntegrationAwsAgentlessScanning#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#id IntegrationAwsAgentlessScanning#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `queryText`<sup>Optional</sup> <a name="queryText" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.queryText"></a>

```java
public java.lang.String getQueryText();
```

- *Type:* java.lang.String

The LQL query text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#query_text IntegrationAwsAgentlessScanning#query_text}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#retries IntegrationAwsAgentlessScanning#retries}

---

##### `scanContainers`<sup>Optional</sup> <a name="scanContainers" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanContainers"></a>

```java
public java.lang.Object getScanContainers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to includes scanning for containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#scan_containers IntegrationAwsAgentlessScanning#scan_containers}

---

##### `scanHostVulnerabilities`<sup>Optional</sup> <a name="scanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanHostVulnerabilities"></a>

```java
public java.lang.Object getScanHostVulnerabilities();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to includes scanning for host vulnerabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#scan_host_vulnerabilities IntegrationAwsAgentlessScanning#scan_host_vulnerabilities}

---

##### `scanMultiVolume`<sup>Optional</sup> <a name="scanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanMultiVolume"></a>

```java
public java.lang.Object getScanMultiVolume();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to scan secondary volumes (true) or only root volumes (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#scan_multi_volume IntegrationAwsAgentlessScanning#scan_multi_volume}

---

##### `scanStoppedInstances`<sup>Optional</sup> <a name="scanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanStoppedInstances"></a>

```java
public java.lang.Object getScanStoppedInstances();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to scan stopped instances (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#scan_stopped_instances IntegrationAwsAgentlessScanning#scan_stopped_instances}

---

### IntegrationAwsAgentlessScanningCredentials <a name="IntegrationAwsAgentlessScanningCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_aws_agentless_scanning.IntegrationAwsAgentlessScanningCredentials;

IntegrationAwsAgentlessScanningCredentials.builder()
    .externalId(java.lang.String)
    .roleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials.property.externalId">externalId</a></code> | <code>java.lang.String</code> | The external id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The role arn. |

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

The external id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#external_id IntegrationAwsAgentlessScanning#external_id}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The role arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#role_arn IntegrationAwsAgentlessScanning#role_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationAwsAgentlessScanningCredentialsOutputReference <a name="IntegrationAwsAgentlessScanningCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_aws_agentless_scanning.IntegrationAwsAgentlessScanningCredentialsOutputReference;

new IntegrationAwsAgentlessScanningCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials">IntegrationAwsAgentlessScanningCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.externalIdInput"></a>

```java
public java.lang.String getExternalIdInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.internalValue"></a>

```java
public IntegrationAwsAgentlessScanningCredentials getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials">IntegrationAwsAgentlessScanningCredentials</a>

---



