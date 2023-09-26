// https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LaceworkProviderConfig {
  /**
  * Lacework account subdomain of URL (i.e. <ACCOUNT>.lacework.net)
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#account LaceworkProvider#account}
  */
  readonly account?: string;
  /**
  * Lacework API access key
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#api_key LaceworkProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * Lacework API access secret
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#api_secret LaceworkProvider#api_secret}
  */
  readonly apiSecret?: string;
  /**
  * Lacework API access token
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#api_token LaceworkProvider#api_token}
  */
  readonly apiToken?: string;
  /**
  * Set it to true to access organization level data sets (org admins only)
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#organization LaceworkProvider#organization}
  */
  readonly organization?: boolean | cdktf.IResolvable;
  /**
  * Lacework profile name to use, profiles are configured at $HOME/.lacework.toml via the Lacework CLI
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#profile LaceworkProvider#profile}
  */
  readonly profile?: string;
  /**
  * The sub-account name inside your organization (org admins only)
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#subaccount LaceworkProvider#subaccount}
  */
  readonly subaccount?: string;
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs#alias LaceworkProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs lacework}
*/
export class LaceworkProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lacework";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs lacework} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LaceworkProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LaceworkProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'lacework',
      terraformGeneratorMetadata: {
        providerName: 'lacework',
        providerVersion: '1.15.0',
        providerVersionConstraint: '~> 1.15.0'
      },
      terraformProviderSource: 'lacework/lacework'
    });
    this._account = config.account;
    this._apiKey = config.apiKey;
    this._apiSecret = config.apiSecret;
    this._apiToken = config.apiToken;
    this._organization = config.organization;
    this._profile = config.profile;
    this._subaccount = config.subaccount;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this._account;
  }
  public set account(value: string | undefined) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_secret - computed: false, optional: true, required: false
  private _apiSecret?: string; 
  public get apiSecret() {
    return this._apiSecret;
  }
  public set apiSecret(value: string | undefined) {
    this._apiSecret = value;
  }
  public resetApiSecret() {
    this._apiSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSecretInput() {
    return this._apiSecret;
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this._apiToken;
  }
  public set apiToken(value: string | undefined) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: boolean | cdktf.IResolvable; 
  public get organization() {
    return this._organization;
  }
  public set organization(value: boolean | cdktf.IResolvable | undefined) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this._profile;
  }
  public set profile(value: string | undefined) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // subaccount - computed: false, optional: true, required: false
  private _subaccount?: string; 
  public get subaccount() {
    return this._subaccount;
  }
  public set subaccount(value: string | undefined) {
    this._subaccount = value;
  }
  public resetSubaccount() {
    this._subaccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subaccountInput() {
    return this._subaccount;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account: cdktf.stringToTerraform(this._account),
      api_key: cdktf.stringToTerraform(this._apiKey),
      api_secret: cdktf.stringToTerraform(this._apiSecret),
      api_token: cdktf.stringToTerraform(this._apiToken),
      organization: cdktf.booleanToTerraform(this._organization),
      profile: cdktf.stringToTerraform(this._profile),
      subaccount: cdktf.stringToTerraform(this._subaccount),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
