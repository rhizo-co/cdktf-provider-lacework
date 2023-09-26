# `provider`

Refer to the Terraform Registory for docs: [`lacework`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="rhizo-co-terraform-provider-lacework.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LaceworkProvider <a name="LaceworkProvider" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs lacework}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import provider

provider.LaceworkProvider(
  scope: Construct,
  id: str,
  account: str = None,
  alias: str = None,
  api_key: str = None,
  api_secret: str = None,
  api_token: str = None,
  organization: typing.Union[bool, IResolvable] = None,
  profile: str = None,
  subaccount: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.account">account</a></code> | <code>str</code> | Lacework account subdomain of URL (i.e. <ACCOUNT>.lacework.net). |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.apiKey">api_key</a></code> | <code>str</code> | Lacework API access key. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.apiSecret">api_secret</a></code> | <code>str</code> | Lacework API access secret. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.apiToken">api_token</a></code> | <code>str</code> | Lacework API access token. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.organization">organization</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set it to true to access organization level data sets (org admins only). |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.profile">profile</a></code> | <code>str</code> | Lacework profile name to use, profiles are configured at $HOME/.lacework.toml via the Lacework CLI. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.subaccount">subaccount</a></code> | <code>str</code> | The sub-account name inside your organization (org admins only). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `account`<sup>Optional</sup> <a name="account" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.account"></a>

- *Type:* str

Lacework account subdomain of URL (i.e. <ACCOUNT>.lacework.net).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#account LaceworkProvider#account}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#alias LaceworkProvider#alias}

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.apiKey"></a>

- *Type:* str

Lacework API access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#api_key LaceworkProvider#api_key}

---

##### `api_secret`<sup>Optional</sup> <a name="api_secret" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.apiSecret"></a>

- *Type:* str

Lacework API access secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#api_secret LaceworkProvider#api_secret}

---

##### `api_token`<sup>Optional</sup> <a name="api_token" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.apiToken"></a>

- *Type:* str

Lacework API access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#api_token LaceworkProvider#api_token}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.organization"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set it to true to access organization level data sets (org admins only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#organization LaceworkProvider#organization}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.profile"></a>

- *Type:* str

Lacework profile name to use, profiles are configured at $HOME/.lacework.toml via the Lacework CLI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#profile LaceworkProvider#profile}

---

##### `subaccount`<sup>Optional</sup> <a name="subaccount" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.subaccount"></a>

- *Type:* str

The sub-account name inside your organization (org admins only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#subaccount LaceworkProvider#subaccount}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetAccount">reset_account</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetApiKey">reset_api_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetApiSecret">reset_api_secret</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetApiToken">reset_api_token</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetProfile">reset_profile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetSubaccount">reset_subaccount</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_account` <a name="reset_account" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetAccount"></a>

```python
def reset_account() -> None
```

##### `reset_alias` <a name="reset_alias" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_api_key` <a name="reset_api_key" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetApiKey"></a>

```python
def reset_api_key() -> None
```

##### `reset_api_secret` <a name="reset_api_secret" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetApiSecret"></a>

```python
def reset_api_secret() -> None
```

##### `reset_api_token` <a name="reset_api_token" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetApiToken"></a>

```python
def reset_api_token() -> None
```

##### `reset_organization` <a name="reset_organization" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_profile` <a name="reset_profile" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetProfile"></a>

```python
def reset_profile() -> None
```

##### `reset_subaccount` <a name="reset_subaccount" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetSubaccount"></a>

```python
def reset_subaccount() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_lacework import provider

provider.LaceworkProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_lacework import provider

provider.LaceworkProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isTerraformProvider"></a>

```python
from rhizo-co_cdktf_provider_lacework import provider

provider.LaceworkProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.accountInput">account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiKeyInput">api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiSecretInput">api_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiTokenInput">api_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.organizationInput">organization_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.profileInput">profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.subaccountInput">subaccount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.account">account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiSecret">api_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiToken">api_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.organization">organization</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.profile">profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.subaccount">subaccount</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `account_input`<sup>Optional</sup> <a name="account_input" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.accountInput"></a>

```python
account_input: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiKeyInput"></a>

```python
api_key_input: str
```

- *Type:* str

---

##### `api_secret_input`<sup>Optional</sup> <a name="api_secret_input" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiSecretInput"></a>

```python
api_secret_input: str
```

- *Type:* str

---

##### `api_token_input`<sup>Optional</sup> <a name="api_token_input" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiTokenInput"></a>

```python
api_token_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.organizationInput"></a>

```python
organization_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `profile_input`<sup>Optional</sup> <a name="profile_input" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.profileInput"></a>

```python
profile_input: str
```

- *Type:* str

---

##### `subaccount_input`<sup>Optional</sup> <a name="subaccount_input" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.subaccountInput"></a>

```python
subaccount_input: str
```

- *Type:* str

---

##### `account`<sup>Optional</sup> <a name="account" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.account"></a>

```python
account: str
```

- *Type:* str

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `api_secret`<sup>Optional</sup> <a name="api_secret" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiSecret"></a>

```python
api_secret: str
```

- *Type:* str

---

##### `api_token`<sup>Optional</sup> <a name="api_token" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiToken"></a>

```python
api_token: str
```

- *Type:* str

---

##### `organization`<sup>Optional</sup> <a name="organization" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.organization"></a>

```python
organization: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `profile`<sup>Optional</sup> <a name="profile" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.profile"></a>

```python
profile: str
```

- *Type:* str

---

##### `subaccount`<sup>Optional</sup> <a name="subaccount" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.subaccount"></a>

```python
subaccount: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LaceworkProviderConfig <a name="LaceworkProviderConfig" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import provider

provider.LaceworkProviderConfig(
  account: str = None,
  alias: str = None,
  api_key: str = None,
  api_secret: str = None,
  api_token: str = None,
  organization: typing.Union[bool, IResolvable] = None,
  profile: str = None,
  subaccount: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.account">account</a></code> | <code>str</code> | Lacework account subdomain of URL (i.e. <ACCOUNT>.lacework.net). |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.apiKey">api_key</a></code> | <code>str</code> | Lacework API access key. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.apiSecret">api_secret</a></code> | <code>str</code> | Lacework API access secret. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.apiToken">api_token</a></code> | <code>str</code> | Lacework API access token. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.organization">organization</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set it to true to access organization level data sets (org admins only). |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.profile">profile</a></code> | <code>str</code> | Lacework profile name to use, profiles are configured at $HOME/.lacework.toml via the Lacework CLI. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.subaccount">subaccount</a></code> | <code>str</code> | The sub-account name inside your organization (org admins only). |

---

##### `account`<sup>Optional</sup> <a name="account" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.account"></a>

```python
account: str
```

- *Type:* str

Lacework account subdomain of URL (i.e. <ACCOUNT>.lacework.net).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#account LaceworkProvider#account}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#alias LaceworkProvider#alias}

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

Lacework API access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#api_key LaceworkProvider#api_key}

---

##### `api_secret`<sup>Optional</sup> <a name="api_secret" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.apiSecret"></a>

```python
api_secret: str
```

- *Type:* str

Lacework API access secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#api_secret LaceworkProvider#api_secret}

---

##### `api_token`<sup>Optional</sup> <a name="api_token" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.apiToken"></a>

```python
api_token: str
```

- *Type:* str

Lacework API access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#api_token LaceworkProvider#api_token}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.organization"></a>

```python
organization: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set it to true to access organization level data sets (org admins only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#organization LaceworkProvider#organization}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.profile"></a>

```python
profile: str
```

- *Type:* str

Lacework profile name to use, profiles are configured at $HOME/.lacework.toml via the Lacework CLI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#profile LaceworkProvider#profile}

---

##### `subaccount`<sup>Optional</sup> <a name="subaccount" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.subaccount"></a>

```python
subaccount: str
```

- *Type:* str

The sub-account name inside your organization (org admins only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#subaccount LaceworkProvider#subaccount}

---



