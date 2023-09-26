# `provider`

Refer to the Terraform Registory for docs: [`lacework`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="rhizo-co-terraform-provider-lacework.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LaceworkProvider <a name="LaceworkProvider" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs lacework}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.provider.LaceworkProvider;

LaceworkProvider.Builder.create(Construct scope, java.lang.String id)
//  .account(java.lang.String)
//  .alias(java.lang.String)
//  .apiKey(java.lang.String)
//  .apiSecret(java.lang.String)
//  .apiToken(java.lang.String)
//  .organization(java.lang.Boolean)
//  .organization(IResolvable)
//  .profile(java.lang.String)
//  .subaccount(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.account">account</a></code> | <code>java.lang.String</code> | Lacework account subdomain of URL (i.e. <ACCOUNT>.lacework.net). |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.apiKey">apiKey</a></code> | <code>java.lang.String</code> | Lacework API access key. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.apiSecret">apiSecret</a></code> | <code>java.lang.String</code> | Lacework API access secret. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.apiToken">apiToken</a></code> | <code>java.lang.String</code> | Lacework API access token. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.organization">organization</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set it to true to access organization level data sets (org admins only). |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.profile">profile</a></code> | <code>java.lang.String</code> | Lacework profile name to use, profiles are configured at $HOME/.lacework.toml via the Lacework CLI. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.subaccount">subaccount</a></code> | <code>java.lang.String</code> | The sub-account name inside your organization (org admins only). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `account`<sup>Optional</sup> <a name="account" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.account"></a>

- *Type:* java.lang.String

Lacework account subdomain of URL (i.e. <ACCOUNT>.lacework.net).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#account LaceworkProvider#account}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#alias LaceworkProvider#alias}

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.apiKey"></a>

- *Type:* java.lang.String

Lacework API access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#api_key LaceworkProvider#api_key}

---

##### `apiSecret`<sup>Optional</sup> <a name="apiSecret" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.apiSecret"></a>

- *Type:* java.lang.String

Lacework API access secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#api_secret LaceworkProvider#api_secret}

---

##### `apiToken`<sup>Optional</sup> <a name="apiToken" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.apiToken"></a>

- *Type:* java.lang.String

Lacework API access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#api_token LaceworkProvider#api_token}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.organization"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set it to true to access organization level data sets (org admins only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#organization LaceworkProvider#organization}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.profile"></a>

- *Type:* java.lang.String

Lacework profile name to use, profiles are configured at $HOME/.lacework.toml via the Lacework CLI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#profile LaceworkProvider#profile}

---

##### `subaccount`<sup>Optional</sup> <a name="subaccount" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.Initializer.parameter.subaccount"></a>

- *Type:* java.lang.String

The sub-account name inside your organization (org admins only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#subaccount LaceworkProvider#subaccount}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetApiSecret">resetApiSecret</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetApiToken">resetApiToken</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetProfile">resetProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetSubaccount">resetSubaccount</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAccount` <a name="resetAccount" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetAccount"></a>

```java
public void resetAccount()
```

##### `resetAlias` <a name="resetAlias" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetApiKey` <a name="resetApiKey" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetApiKey"></a>

```java
public void resetApiKey()
```

##### `resetApiSecret` <a name="resetApiSecret" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetApiSecret"></a>

```java
public void resetApiSecret()
```

##### `resetApiToken` <a name="resetApiToken" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetApiToken"></a>

```java
public void resetApiToken()
```

##### `resetOrganization` <a name="resetOrganization" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetOrganization"></a>

```java
public void resetOrganization()
```

##### `resetProfile` <a name="resetProfile" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetProfile"></a>

```java
public void resetProfile()
```

##### `resetSubaccount` <a name="resetSubaccount" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.resetSubaccount"></a>

```java
public void resetSubaccount()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.lacework.provider.LaceworkProvider;

LaceworkProvider.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.lacework.provider.LaceworkProvider;

LaceworkProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.lacework.provider.LaceworkProvider;

LaceworkProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.accountInput">accountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiKeyInput">apiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiSecretInput">apiSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiTokenInput">apiTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.organizationInput">organizationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.profileInput">profileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.subaccountInput">subaccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.account">account</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiSecret">apiSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiToken">apiToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.organization">organization</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.profile">profile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.subaccount">subaccount</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.accountInput"></a>

```java
public java.lang.String getAccountInput();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiKeyInput"></a>

```java
public java.lang.String getApiKeyInput();
```

- *Type:* java.lang.String

---

##### `apiSecretInput`<sup>Optional</sup> <a name="apiSecretInput" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiSecretInput"></a>

```java
public java.lang.String getApiSecretInput();
```

- *Type:* java.lang.String

---

##### `apiTokenInput`<sup>Optional</sup> <a name="apiTokenInput" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiTokenInput"></a>

```java
public java.lang.String getApiTokenInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.organizationInput"></a>

```java
public java.lang.Object getOrganizationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.profileInput"></a>

```java
public java.lang.String getProfileInput();
```

- *Type:* java.lang.String

---

##### `subaccountInput`<sup>Optional</sup> <a name="subaccountInput" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.subaccountInput"></a>

```java
public java.lang.String getSubaccountInput();
```

- *Type:* java.lang.String

---

##### `account`<sup>Optional</sup> <a name="account" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.account"></a>

```java
public java.lang.String getAccount();
```

- *Type:* java.lang.String

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

---

##### `apiSecret`<sup>Optional</sup> <a name="apiSecret" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiSecret"></a>

```java
public java.lang.String getApiSecret();
```

- *Type:* java.lang.String

---

##### `apiToken`<sup>Optional</sup> <a name="apiToken" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.apiToken"></a>

```java
public java.lang.String getApiToken();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Optional</sup> <a name="organization" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.organization"></a>

```java
public java.lang.Object getOrganization();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `profile`<sup>Optional</sup> <a name="profile" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.profile"></a>

```java
public java.lang.String getProfile();
```

- *Type:* java.lang.String

---

##### `subaccount`<sup>Optional</sup> <a name="subaccount" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.subaccount"></a>

```java
public java.lang.String getSubaccount();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LaceworkProviderConfig <a name="LaceworkProviderConfig" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.provider.LaceworkProviderConfig;

LaceworkProviderConfig.builder()
//  .account(java.lang.String)
//  .alias(java.lang.String)
//  .apiKey(java.lang.String)
//  .apiSecret(java.lang.String)
//  .apiToken(java.lang.String)
//  .organization(java.lang.Boolean)
//  .organization(IResolvable)
//  .profile(java.lang.String)
//  .subaccount(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.account">account</a></code> | <code>java.lang.String</code> | Lacework account subdomain of URL (i.e. <ACCOUNT>.lacework.net). |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | Lacework API access key. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.apiSecret">apiSecret</a></code> | <code>java.lang.String</code> | Lacework API access secret. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.apiToken">apiToken</a></code> | <code>java.lang.String</code> | Lacework API access token. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.organization">organization</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set it to true to access organization level data sets (org admins only). |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.profile">profile</a></code> | <code>java.lang.String</code> | Lacework profile name to use, profiles are configured at $HOME/.lacework.toml via the Lacework CLI. |
| <code><a href="#rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.subaccount">subaccount</a></code> | <code>java.lang.String</code> | The sub-account name inside your organization (org admins only). |

---

##### `account`<sup>Optional</sup> <a name="account" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.account"></a>

```java
public java.lang.String getAccount();
```

- *Type:* java.lang.String

Lacework account subdomain of URL (i.e. <ACCOUNT>.lacework.net).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#account LaceworkProvider#account}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#alias LaceworkProvider#alias}

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

Lacework API access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#api_key LaceworkProvider#api_key}

---

##### `apiSecret`<sup>Optional</sup> <a name="apiSecret" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.apiSecret"></a>

```java
public java.lang.String getApiSecret();
```

- *Type:* java.lang.String

Lacework API access secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#api_secret LaceworkProvider#api_secret}

---

##### `apiToken`<sup>Optional</sup> <a name="apiToken" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.apiToken"></a>

```java
public java.lang.String getApiToken();
```

- *Type:* java.lang.String

Lacework API access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#api_token LaceworkProvider#api_token}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.organization"></a>

```java
public java.lang.Object getOrganization();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set it to true to access organization level data sets (org admins only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#organization LaceworkProvider#organization}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.profile"></a>

```java
public java.lang.String getProfile();
```

- *Type:* java.lang.String

Lacework profile name to use, profiles are configured at $HOME/.lacework.toml via the Lacework CLI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#profile LaceworkProvider#profile}

---

##### `subaccount`<sup>Optional</sup> <a name="subaccount" id="rhizo-co-terraform-provider-lacework.provider.LaceworkProviderConfig.property.subaccount"></a>

```java
public java.lang.String getSubaccount();
```

- *Type:* java.lang.String

The sub-account name inside your organization (org admins only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#subaccount LaceworkProvider#subaccount}

---



