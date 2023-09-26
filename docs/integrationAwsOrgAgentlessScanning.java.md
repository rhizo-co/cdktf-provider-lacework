# `lacework_integration_aws_org_agentless_scanning`

Refer to the Terraform Registory for docs: [`lacework_integration_aws_org_agentless_scanning`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning).

# `integrationAwsOrgAgentlessScanning` Submodule <a name="`integrationAwsOrgAgentlessScanning` Submodule" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsOrgAgentlessScanning <a name="IntegrationAwsOrgAgentlessScanning" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning lacework_integration_aws_org_agentless_scanning}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_aws_org_agentless_scanning.IntegrationAwsOrgAgentlessScanning;

IntegrationAwsOrgAgentlessScanning.Builder.create(Construct scope, java.lang.String id)
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
    .monitoredAccounts(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .scanFrequency(java.lang.Number)
    .scanningAccount(java.lang.String)
//  .accountId(java.lang.String)
//  .bucketArn(java.lang.String)
//  .credentials(IntegrationAwsOrgAgentlessScanningCredentials)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .managementAccount(java.lang.String)
//  .orgAccountMappings(IResolvable)
//  .orgAccountMappings(java.util.List<IntegrationAwsOrgAgentlessScanningOrgAccountMappings>)
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
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.monitoredAccounts">monitoredAccounts</a></code> | <code>java.util.List<java.lang.String></code> | The list of monitored aws accounts ids or OUs. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scanFrequency">scanFrequency</a></code> | <code>java.lang.Number</code> | How often in hours the scan will run in hours. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scanningAccount">scanningAccount</a></code> | <code>java.lang.String</code> | The scanning aws account id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The aws account id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | The bucket arn. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#id IntegrationAwsOrgAgentlessScanning#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.managementAccount">managementAccount</a></code> | <code>java.lang.String</code> | The scanning aws account id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.orgAccountMappings">orgAccountMappings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings">IntegrationAwsOrgAgentlessScanningOrgAccountMappings</a>></code> | org_account_mappings block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.queryText">queryText</a></code> | <code>java.lang.String</code> | The LQL query text. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.retries">retries</a></code> | <code>java.lang.Number</code> | The number of attempts to create the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scanContainers">scanContainers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to includes scanning for containers. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scanHostVulnerabilities">scanHostVulnerabilities</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to includes scanning for host vulnerabilities. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scanMultiVolume">scanMultiVolume</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to scan secondary volumes (true) or only root volumes (false). |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scanStoppedInstances">scanStoppedInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to scan stopped instances (true). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `monitoredAccounts`<sup>Required</sup> <a name="monitoredAccounts" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.monitoredAccounts"></a>

- *Type:* java.util.List<java.lang.String>

The list of monitored aws accounts ids or OUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#monitored_accounts IntegrationAwsOrgAgentlessScanning#monitored_accounts}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#name IntegrationAwsOrgAgentlessScanning#name}

---

##### `scanFrequency`<sup>Required</sup> <a name="scanFrequency" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scanFrequency"></a>

- *Type:* java.lang.Number

How often in hours the scan will run in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_frequency IntegrationAwsOrgAgentlessScanning#scan_frequency}

---

##### `scanningAccount`<sup>Required</sup> <a name="scanningAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scanningAccount"></a>

- *Type:* java.lang.String

The scanning aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scanning_account IntegrationAwsOrgAgentlessScanning#scanning_account}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#account_id IntegrationAwsOrgAgentlessScanning#account_id}

---

##### `bucketArn`<sup>Optional</sup> <a name="bucketArn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.bucketArn"></a>

- *Type:* java.lang.String

The bucket arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#bucket_arn IntegrationAwsOrgAgentlessScanning#bucket_arn}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.credentials"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#credentials IntegrationAwsOrgAgentlessScanning#credentials}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#enabled IntegrationAwsOrgAgentlessScanning#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#id IntegrationAwsOrgAgentlessScanning#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managementAccount`<sup>Optional</sup> <a name="managementAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.managementAccount"></a>

- *Type:* java.lang.String

The scanning aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#management_account IntegrationAwsOrgAgentlessScanning#management_account}

---

##### `orgAccountMappings`<sup>Optional</sup> <a name="orgAccountMappings" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.orgAccountMappings"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings">IntegrationAwsOrgAgentlessScanningOrgAccountMappings</a>>

org_account_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#org_account_mappings IntegrationAwsOrgAgentlessScanning#org_account_mappings}

---

##### `queryText`<sup>Optional</sup> <a name="queryText" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.queryText"></a>

- *Type:* java.lang.String

The LQL query text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#query_text IntegrationAwsOrgAgentlessScanning#query_text}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.retries"></a>

- *Type:* java.lang.Number

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#retries IntegrationAwsOrgAgentlessScanning#retries}

---

##### `scanContainers`<sup>Optional</sup> <a name="scanContainers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scanContainers"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to includes scanning for containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_containers IntegrationAwsOrgAgentlessScanning#scan_containers}

---

##### `scanHostVulnerabilities`<sup>Optional</sup> <a name="scanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scanHostVulnerabilities"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to includes scanning for host vulnerabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_host_vulnerabilities IntegrationAwsOrgAgentlessScanning#scan_host_vulnerabilities}

---

##### `scanMultiVolume`<sup>Optional</sup> <a name="scanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scanMultiVolume"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to scan secondary volumes (true) or only root volumes (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_multi_volume IntegrationAwsOrgAgentlessScanning#scan_multi_volume}

---

##### `scanStoppedInstances`<sup>Optional</sup> <a name="scanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scanStoppedInstances"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to scan stopped instances (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_stopped_instances IntegrationAwsOrgAgentlessScanning#scan_stopped_instances}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.putOrgAccountMappings">putOrgAccountMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetBucketArn">resetBucketArn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetManagementAccount">resetManagementAccount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetOrgAccountMappings">resetOrgAccountMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetQueryText">resetQueryText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetRetries">resetRetries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanContainers">resetScanContainers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanHostVulnerabilities">resetScanHostVulnerabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanMultiVolume">resetScanMultiVolume</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanStoppedInstances">resetScanStoppedInstances</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCredentials` <a name="putCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.putCredentials"></a>

```java
public void putCredentials(IntegrationAwsOrgAgentlessScanningCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a>

---

##### `putOrgAccountMappings` <a name="putOrgAccountMappings" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.putOrgAccountMappings"></a>

```java
public void putOrgAccountMappings(IResolvable OR java.util.List<IntegrationAwsOrgAgentlessScanningOrgAccountMappings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.putOrgAccountMappings.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings">IntegrationAwsOrgAgentlessScanningOrgAccountMappings</a>>

---

##### `resetAccountId` <a name="resetAccountId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetBucketArn` <a name="resetBucketArn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetBucketArn"></a>

```java
public void resetBucketArn()
```

##### `resetCredentials` <a name="resetCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetCredentials"></a>

```java
public void resetCredentials()
```

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetId"></a>

```java
public void resetId()
```

##### `resetManagementAccount` <a name="resetManagementAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetManagementAccount"></a>

```java
public void resetManagementAccount()
```

##### `resetOrgAccountMappings` <a name="resetOrgAccountMappings" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetOrgAccountMappings"></a>

```java
public void resetOrgAccountMappings()
```

##### `resetQueryText` <a name="resetQueryText" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetQueryText"></a>

```java
public void resetQueryText()
```

##### `resetRetries` <a name="resetRetries" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetRetries"></a>

```java
public void resetRetries()
```

##### `resetScanContainers` <a name="resetScanContainers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanContainers"></a>

```java
public void resetScanContainers()
```

##### `resetScanHostVulnerabilities` <a name="resetScanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanHostVulnerabilities"></a>

```java
public void resetScanHostVulnerabilities()
```

##### `resetScanMultiVolume` <a name="resetScanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanMultiVolume"></a>

```java
public void resetScanMultiVolume()
```

##### `resetScanStoppedInstances` <a name="resetScanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanStoppedInstances"></a>

```java
public void resetScanStoppedInstances()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_aws_org_agentless_scanning.IntegrationAwsOrgAgentlessScanning;

IntegrationAwsOrgAgentlessScanning.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_aws_org_agentless_scanning.IntegrationAwsOrgAgentlessScanning;

IntegrationAwsOrgAgentlessScanning.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_aws_org_agentless_scanning.IntegrationAwsOrgAgentlessScanning;

IntegrationAwsOrgAgentlessScanning.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.createdOrUpdatedBy">createdOrUpdatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.createdOrUpdatedTime">createdOrUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference">IntegrationAwsOrgAgentlessScanningCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.intgGuid">intgGuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.orgAccountMappings">orgAccountMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.orgLevel">orgLevel</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.serverToken">serverToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.typeName">typeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.bucketArnInput">bucketArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.credentialsInput">credentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.managementAccountInput">managementAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.monitoredAccountsInput">monitoredAccountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.orgAccountMappingsInput">orgAccountMappingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings">IntegrationAwsOrgAgentlessScanningOrgAccountMappings</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.queryTextInput">queryTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.retriesInput">retriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanContainersInput">scanContainersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanFrequencyInput">scanFrequencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanHostVulnerabilitiesInput">scanHostVulnerabilitiesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanMultiVolumeInput">scanMultiVolumeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanningAccountInput">scanningAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanStoppedInstancesInput">scanStoppedInstancesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.managementAccount">managementAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.monitoredAccounts">monitoredAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.queryText">queryText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.retries">retries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanContainers">scanContainers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanFrequency">scanFrequency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanHostVulnerabilities">scanHostVulnerabilities</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanMultiVolume">scanMultiVolume</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanningAccount">scanningAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanStoppedInstances">scanStoppedInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdOrUpdatedBy`<sup>Required</sup> <a name="createdOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.createdOrUpdatedBy"></a>

```java
public java.lang.String getCreatedOrUpdatedBy();
```

- *Type:* java.lang.String

---

##### `createdOrUpdatedTime`<sup>Required</sup> <a name="createdOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.createdOrUpdatedTime"></a>

```java
public java.lang.String getCreatedOrUpdatedTime();
```

- *Type:* java.lang.String

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.credentials"></a>

```java
public IntegrationAwsOrgAgentlessScanningCredentialsOutputReference getCredentials();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference">IntegrationAwsOrgAgentlessScanningCredentialsOutputReference</a>

---

##### `intgGuid`<sup>Required</sup> <a name="intgGuid" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.intgGuid"></a>

```java
public java.lang.String getIntgGuid();
```

- *Type:* java.lang.String

---

##### `orgAccountMappings`<sup>Required</sup> <a name="orgAccountMappings" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.orgAccountMappings"></a>

```java
public IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList getOrgAccountMappings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList</a>

---

##### `orgLevel`<sup>Required</sup> <a name="orgLevel" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.orgLevel"></a>

```java
public IResolvable getOrgLevel();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `serverToken`<sup>Required</sup> <a name="serverToken" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.serverToken"></a>

```java
public java.lang.String getServerToken();
```

- *Type:* java.lang.String

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `bucketArnInput`<sup>Optional</sup> <a name="bucketArnInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.bucketArnInput"></a>

```java
public java.lang.String getBucketArnInput();
```

- *Type:* java.lang.String

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.credentialsInput"></a>

```java
public IntegrationAwsOrgAgentlessScanningCredentials getCredentialsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managementAccountInput`<sup>Optional</sup> <a name="managementAccountInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.managementAccountInput"></a>

```java
public java.lang.String getManagementAccountInput();
```

- *Type:* java.lang.String

---

##### `monitoredAccountsInput`<sup>Optional</sup> <a name="monitoredAccountsInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.monitoredAccountsInput"></a>

```java
public java.util.List<java.lang.String> getMonitoredAccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `orgAccountMappingsInput`<sup>Optional</sup> <a name="orgAccountMappingsInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.orgAccountMappingsInput"></a>

```java
public java.lang.Object getOrgAccountMappingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings">IntegrationAwsOrgAgentlessScanningOrgAccountMappings</a>>

---

##### `queryTextInput`<sup>Optional</sup> <a name="queryTextInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.queryTextInput"></a>

```java
public java.lang.String getQueryTextInput();
```

- *Type:* java.lang.String

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.retriesInput"></a>

```java
public java.lang.Number getRetriesInput();
```

- *Type:* java.lang.Number

---

##### `scanContainersInput`<sup>Optional</sup> <a name="scanContainersInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanContainersInput"></a>

```java
public java.lang.Object getScanContainersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scanFrequencyInput`<sup>Optional</sup> <a name="scanFrequencyInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanFrequencyInput"></a>

```java
public java.lang.Number getScanFrequencyInput();
```

- *Type:* java.lang.Number

---

##### `scanHostVulnerabilitiesInput`<sup>Optional</sup> <a name="scanHostVulnerabilitiesInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanHostVulnerabilitiesInput"></a>

```java
public java.lang.Object getScanHostVulnerabilitiesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scanMultiVolumeInput`<sup>Optional</sup> <a name="scanMultiVolumeInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanMultiVolumeInput"></a>

```java
public java.lang.Object getScanMultiVolumeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scanningAccountInput`<sup>Optional</sup> <a name="scanningAccountInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanningAccountInput"></a>

```java
public java.lang.String getScanningAccountInput();
```

- *Type:* java.lang.String

---

##### `scanStoppedInstancesInput`<sup>Optional</sup> <a name="scanStoppedInstancesInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanStoppedInstancesInput"></a>

```java
public java.lang.Object getScanStoppedInstancesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managementAccount`<sup>Required</sup> <a name="managementAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.managementAccount"></a>

```java
public java.lang.String getManagementAccount();
```

- *Type:* java.lang.String

---

##### `monitoredAccounts`<sup>Required</sup> <a name="monitoredAccounts" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.monitoredAccounts"></a>

```java
public java.util.List<java.lang.String> getMonitoredAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `queryText`<sup>Required</sup> <a name="queryText" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.queryText"></a>

```java
public java.lang.String getQueryText();
```

- *Type:* java.lang.String

---

##### `retries`<sup>Required</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

---

##### `scanContainers`<sup>Required</sup> <a name="scanContainers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanContainers"></a>

```java
public java.lang.Object getScanContainers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scanFrequency`<sup>Required</sup> <a name="scanFrequency" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanFrequency"></a>

```java
public java.lang.Number getScanFrequency();
```

- *Type:* java.lang.Number

---

##### `scanHostVulnerabilities`<sup>Required</sup> <a name="scanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanHostVulnerabilities"></a>

```java
public java.lang.Object getScanHostVulnerabilities();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scanMultiVolume`<sup>Required</sup> <a name="scanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanMultiVolume"></a>

```java
public java.lang.Object getScanMultiVolume();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scanningAccount`<sup>Required</sup> <a name="scanningAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanningAccount"></a>

```java
public java.lang.String getScanningAccount();
```

- *Type:* java.lang.String

---

##### `scanStoppedInstances`<sup>Required</sup> <a name="scanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanStoppedInstances"></a>

```java
public java.lang.Object getScanStoppedInstances();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsOrgAgentlessScanningConfig <a name="IntegrationAwsOrgAgentlessScanningConfig" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_aws_org_agentless_scanning.IntegrationAwsOrgAgentlessScanningConfig;

IntegrationAwsOrgAgentlessScanningConfig.builder()
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
    .monitoredAccounts(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .scanFrequency(java.lang.Number)
    .scanningAccount(java.lang.String)
//  .accountId(java.lang.String)
//  .bucketArn(java.lang.String)
//  .credentials(IntegrationAwsOrgAgentlessScanningCredentials)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .managementAccount(java.lang.String)
//  .orgAccountMappings(IResolvable)
//  .orgAccountMappings(java.util.List<IntegrationAwsOrgAgentlessScanningOrgAccountMappings>)
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
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.monitoredAccounts">monitoredAccounts</a></code> | <code>java.util.List<java.lang.String></code> | The list of monitored aws accounts ids or OUs. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.name">name</a></code> | <code>java.lang.String</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanFrequency">scanFrequency</a></code> | <code>java.lang.Number</code> | How often in hours the scan will run in hours. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanningAccount">scanningAccount</a></code> | <code>java.lang.String</code> | The scanning aws account id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The aws account id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | The bucket arn. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#id IntegrationAwsOrgAgentlessScanning#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.managementAccount">managementAccount</a></code> | <code>java.lang.String</code> | The scanning aws account id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.orgAccountMappings">orgAccountMappings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings">IntegrationAwsOrgAgentlessScanningOrgAccountMappings</a>></code> | org_account_mappings block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.queryText">queryText</a></code> | <code>java.lang.String</code> | The LQL query text. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.retries">retries</a></code> | <code>java.lang.Number</code> | The number of attempts to create the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanContainers">scanContainers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to includes scanning for containers. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanHostVulnerabilities">scanHostVulnerabilities</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to includes scanning for host vulnerabilities. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanMultiVolume">scanMultiVolume</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to scan secondary volumes (true) or only root volumes (false). |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanStoppedInstances">scanStoppedInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to scan stopped instances (true). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `monitoredAccounts`<sup>Required</sup> <a name="monitoredAccounts" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.monitoredAccounts"></a>

```java
public java.util.List<java.lang.String> getMonitoredAccounts();
```

- *Type:* java.util.List<java.lang.String>

The list of monitored aws accounts ids or OUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#monitored_accounts IntegrationAwsOrgAgentlessScanning#monitored_accounts}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#name IntegrationAwsOrgAgentlessScanning#name}

---

##### `scanFrequency`<sup>Required</sup> <a name="scanFrequency" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanFrequency"></a>

```java
public java.lang.Number getScanFrequency();
```

- *Type:* java.lang.Number

How often in hours the scan will run in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_frequency IntegrationAwsOrgAgentlessScanning#scan_frequency}

---

##### `scanningAccount`<sup>Required</sup> <a name="scanningAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanningAccount"></a>

```java
public java.lang.String getScanningAccount();
```

- *Type:* java.lang.String

The scanning aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scanning_account IntegrationAwsOrgAgentlessScanning#scanning_account}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#account_id IntegrationAwsOrgAgentlessScanning#account_id}

---

##### `bucketArn`<sup>Optional</sup> <a name="bucketArn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

The bucket arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#bucket_arn IntegrationAwsOrgAgentlessScanning#bucket_arn}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.credentials"></a>

```java
public IntegrationAwsOrgAgentlessScanningCredentials getCredentials();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#credentials IntegrationAwsOrgAgentlessScanning#credentials}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#enabled IntegrationAwsOrgAgentlessScanning#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#id IntegrationAwsOrgAgentlessScanning#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managementAccount`<sup>Optional</sup> <a name="managementAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.managementAccount"></a>

```java
public java.lang.String getManagementAccount();
```

- *Type:* java.lang.String

The scanning aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#management_account IntegrationAwsOrgAgentlessScanning#management_account}

---

##### `orgAccountMappings`<sup>Optional</sup> <a name="orgAccountMappings" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.orgAccountMappings"></a>

```java
public java.lang.Object getOrgAccountMappings();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings">IntegrationAwsOrgAgentlessScanningOrgAccountMappings</a>>

org_account_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#org_account_mappings IntegrationAwsOrgAgentlessScanning#org_account_mappings}

---

##### `queryText`<sup>Optional</sup> <a name="queryText" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.queryText"></a>

```java
public java.lang.String getQueryText();
```

- *Type:* java.lang.String

The LQL query text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#query_text IntegrationAwsOrgAgentlessScanning#query_text}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#retries IntegrationAwsOrgAgentlessScanning#retries}

---

##### `scanContainers`<sup>Optional</sup> <a name="scanContainers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanContainers"></a>

```java
public java.lang.Object getScanContainers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to includes scanning for containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_containers IntegrationAwsOrgAgentlessScanning#scan_containers}

---

##### `scanHostVulnerabilities`<sup>Optional</sup> <a name="scanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanHostVulnerabilities"></a>

```java
public java.lang.Object getScanHostVulnerabilities();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to includes scanning for host vulnerabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_host_vulnerabilities IntegrationAwsOrgAgentlessScanning#scan_host_vulnerabilities}

---

##### `scanMultiVolume`<sup>Optional</sup> <a name="scanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanMultiVolume"></a>

```java
public java.lang.Object getScanMultiVolume();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to scan secondary volumes (true) or only root volumes (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_multi_volume IntegrationAwsOrgAgentlessScanning#scan_multi_volume}

---

##### `scanStoppedInstances`<sup>Optional</sup> <a name="scanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanStoppedInstances"></a>

```java
public java.lang.Object getScanStoppedInstances();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to scan stopped instances (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_stopped_instances IntegrationAwsOrgAgentlessScanning#scan_stopped_instances}

---

### IntegrationAwsOrgAgentlessScanningCredentials <a name="IntegrationAwsOrgAgentlessScanningCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_aws_org_agentless_scanning.IntegrationAwsOrgAgentlessScanningCredentials;

IntegrationAwsOrgAgentlessScanningCredentials.builder()
    .externalId(java.lang.String)
    .roleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials.property.externalId">externalId</a></code> | <code>java.lang.String</code> | The external id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The role arn. |

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

The external id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#external_id IntegrationAwsOrgAgentlessScanning#external_id}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The role arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#role_arn IntegrationAwsOrgAgentlessScanning#role_arn}

---

### IntegrationAwsOrgAgentlessScanningOrgAccountMappings <a name="IntegrationAwsOrgAgentlessScanningOrgAccountMappings" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_aws_org_agentless_scanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings;

IntegrationAwsOrgAgentlessScanningOrgAccountMappings.builder()
    .defaultLaceworkAccount(java.lang.String)
    .mapping(IResolvable)
    .mapping(java.util.List<IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings.property.defaultLaceworkAccount">defaultLaceworkAccount</a></code> | <code>java.lang.String</code> | The default Lacework account name where any non-mapped AWS account will appear. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings.property.mapping">mapping</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping</a>></code> | mapping block. |

---

##### `defaultLaceworkAccount`<sup>Required</sup> <a name="defaultLaceworkAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings.property.defaultLaceworkAccount"></a>

```java
public java.lang.String getDefaultLaceworkAccount();
```

- *Type:* java.lang.String

The default Lacework account name where any non-mapped AWS account will appear.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#default_lacework_account IntegrationAwsOrgAgentlessScanning#default_lacework_account}

---

##### `mapping`<sup>Required</sup> <a name="mapping" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings.property.mapping"></a>

```java
public java.lang.Object getMapping();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping</a>>

mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#mapping IntegrationAwsOrgAgentlessScanning#mapping}

---

### IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping <a name="IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_aws_org_agentless_scanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping;

IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping.builder()
    .awsAccounts(java.util.List<java.lang.String>)
    .laceworkAccount(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping.property.awsAccounts">awsAccounts</a></code> | <code>java.util.List<java.lang.String></code> | The list of AWS account IDs to map. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping.property.laceworkAccount">laceworkAccount</a></code> | <code>java.lang.String</code> | The Lacework account name where the CloudTrail activity from the selected AWS accounts will appear. |

---

##### `awsAccounts`<sup>Required</sup> <a name="awsAccounts" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping.property.awsAccounts"></a>

```java
public java.util.List<java.lang.String> getAwsAccounts();
```

- *Type:* java.util.List<java.lang.String>

The list of AWS account IDs to map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#aws_accounts IntegrationAwsOrgAgentlessScanning#aws_accounts}

---

##### `laceworkAccount`<sup>Required</sup> <a name="laceworkAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping.property.laceworkAccount"></a>

```java
public java.lang.String getLaceworkAccount();
```

- *Type:* java.lang.String

The Lacework account name where the CloudTrail activity from the selected AWS accounts will appear.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#lacework_account IntegrationAwsOrgAgentlessScanning#lacework_account}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationAwsOrgAgentlessScanningCredentialsOutputReference <a name="IntegrationAwsOrgAgentlessScanningCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_aws_org_agentless_scanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference;

new IntegrationAwsOrgAgentlessScanningCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.externalIdInput"></a>

```java
public java.lang.String getExternalIdInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.internalValue"></a>

```java
public IntegrationAwsOrgAgentlessScanningCredentials getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a>

---


### IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList <a name="IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_aws_org_agentless_scanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList;

new IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.get"></a>

```java
public IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings">IntegrationAwsOrgAgentlessScanningOrgAccountMappings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings">IntegrationAwsOrgAgentlessScanningOrgAccountMappings</a>>

---


### IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList <a name="IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_aws_org_agentless_scanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList;

new IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.get"></a>

```java
public IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping</a>>

---


### IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference <a name="IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_aws_org_agentless_scanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference;

new IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.awsAccountsInput">awsAccountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.laceworkAccountInput">laceworkAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.awsAccounts">awsAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.laceworkAccount">laceworkAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsAccountsInput`<sup>Optional</sup> <a name="awsAccountsInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.awsAccountsInput"></a>

```java
public java.util.List<java.lang.String> getAwsAccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `laceworkAccountInput`<sup>Optional</sup> <a name="laceworkAccountInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.laceworkAccountInput"></a>

```java
public java.lang.String getLaceworkAccountInput();
```

- *Type:* java.lang.String

---

##### `awsAccounts`<sup>Required</sup> <a name="awsAccounts" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.awsAccounts"></a>

```java
public java.util.List<java.lang.String> getAwsAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `laceworkAccount`<sup>Required</sup> <a name="laceworkAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.laceworkAccount"></a>

```java
public java.lang.String getLaceworkAccount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping</a>

---


### IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference <a name="IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.integration_aws_org_agentless_scanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference;

new IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.putMapping">putMapping</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMapping` <a name="putMapping" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.putMapping"></a>

```java
public void putMapping(IResolvable OR java.util.List<IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.putMapping.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.mapping">mapping</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.defaultLaceworkAccountInput">defaultLaceworkAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.mappingInput">mappingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.defaultLaceworkAccount">defaultLaceworkAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings">IntegrationAwsOrgAgentlessScanningOrgAccountMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mapping`<sup>Required</sup> <a name="mapping" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.mapping"></a>

```java
public IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList getMapping();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList</a>

---

##### `defaultLaceworkAccountInput`<sup>Optional</sup> <a name="defaultLaceworkAccountInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.defaultLaceworkAccountInput"></a>

```java
public java.lang.String getDefaultLaceworkAccountInput();
```

- *Type:* java.lang.String

---

##### `mappingInput`<sup>Optional</sup> <a name="mappingInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.mappingInput"></a>

```java
public java.lang.Object getMappingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping</a>>

---

##### `defaultLaceworkAccount`<sup>Required</sup> <a name="defaultLaceworkAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.defaultLaceworkAccount"></a>

```java
public java.lang.String getDefaultLaceworkAccount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings">IntegrationAwsOrgAgentlessScanningOrgAccountMappings</a>

---



