// https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyComplianceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether alerting is enabled or disabled
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#alerting_enabled PolicyCompliance#alerting_enabled}
  */
  readonly alertingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The description of the query
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#description PolicyCompliance#description}
  */
  readonly description: string;
  /**
  * The state of the policy
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#enabled PolicyCompliance#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The string appended to the end of the policy id
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#policy_id_suffix PolicyCompliance#policy_id_suffix}
  */
  readonly policyIdSuffix?: string;
  /**
  * The id of the query
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#query_id PolicyCompliance#query_id}
  */
  readonly queryId: string;
  /**
  * The remediation message to display
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#remediation PolicyCompliance#remediation}
  */
  readonly remediation?: string;
  /**
  * The severity for the policy. Valid severities are: Critical, High, Medium, Low, Info
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#severity PolicyCompliance#severity}
  */
  readonly severity: string;
  /**
  * A list of user specified policy tags
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#tags PolicyCompliance#tags}
  */
  readonly tags?: string[];
  /**
  * The title of the policy
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#title PolicyCompliance#title}
  */
  readonly title: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance lacework_policy_compliance}
*/
export class PolicyCompliance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lacework_policy_compliance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance lacework_policy_compliance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyComplianceConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyComplianceConfig) {
    super(scope, id, {
      terraformResourceType: 'lacework_policy_compliance',
      terraformGeneratorMetadata: {
        providerName: 'lacework',
        providerVersion: '1.15.0',
        providerVersionConstraint: '~> 1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertingEnabled = config.alertingEnabled;
    this._description = config.description;
    this._enabled = config.enabled;
    this._policyIdSuffix = config.policyIdSuffix;
    this._queryId = config.queryId;
    this._remediation = config.remediation;
    this._severity = config.severity;
    this._tags = config.tags;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerting_enabled - computed: false, optional: true, required: false
  private _alertingEnabled?: boolean | cdktf.IResolvable; 
  public get alertingEnabled() {
    return this.getBooleanAttribute('alerting_enabled');
  }
  public set alertingEnabled(value: boolean | cdktf.IResolvable) {
    this._alertingEnabled = value;
  }
  public resetAlertingEnabled() {
    this._alertingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingEnabledInput() {
    return this._alertingEnabled;
  }

  // computed_tags - computed: true, optional: false, required: false
  public get computedTags() {
    return this.getStringAttribute('computed_tags');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // policy_id_suffix - computed: false, optional: true, required: false
  private _policyIdSuffix?: string; 
  public get policyIdSuffix() {
    return this.getStringAttribute('policy_id_suffix');
  }
  public set policyIdSuffix(value: string) {
    this._policyIdSuffix = value;
  }
  public resetPolicyIdSuffix() {
    this._policyIdSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdSuffixInput() {
    return this._policyIdSuffix;
  }

  // query_id - computed: false, optional: false, required: true
  private _queryId?: string; 
  public get queryId() {
    return this.getStringAttribute('query_id');
  }
  public set queryId(value: string) {
    this._queryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIdInput() {
    return this._queryId;
  }

  // remediation - computed: false, optional: true, required: false
  private _remediation?: string; 
  public get remediation() {
    return this.getStringAttribute('remediation');
  }
  public set remediation(value: string) {
    this._remediation = value;
  }
  public resetRemediation() {
    this._remediation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationInput() {
    return this._remediation;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_time - computed: true, optional: false, required: false
  public get updatedTime() {
    return this.getStringAttribute('updated_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alerting_enabled: cdktf.booleanToTerraform(this._alertingEnabled),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      policy_id_suffix: cdktf.stringToTerraform(this._policyIdSuffix),
      query_id: cdktf.stringToTerraform(this._queryId),
      remediation: cdktf.stringToTerraform(this._remediation),
      severity: cdktf.stringToTerraform(this._severity),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      title: cdktf.stringToTerraform(this._title),
    };
  }
}
