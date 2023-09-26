// https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/resource_group_machine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceGroupMachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the resource group
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/resource_group_machine#description ResourceGroupMachine#description}
  */
  readonly description?: string;
  /**
  * The state of the resource group
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/resource_group_machine#enabled ResourceGroupMachine#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The resource group name
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/resource_group_machine#name ResourceGroupMachine#name}
  */
  readonly name: string;
  /**
  * machine_tags block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/resource_group_machine#machine_tags ResourceGroupMachine#machine_tags}
  */
  readonly machineTags: ResourceGroupMachineMachineTags[] | cdktf.IResolvable;
}
export interface ResourceGroupMachineMachineTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/resource_group_machine#key ResourceGroupMachine#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/resource_group_machine#value ResourceGroupMachine#value}
  */
  readonly value: string;
}

export function resourceGroupMachineMachineTagsToTerraform(struct?: ResourceGroupMachineMachineTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class ResourceGroupMachineMachineTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ResourceGroupMachineMachineTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceGroupMachineMachineTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ResourceGroupMachineMachineTagsList extends cdktf.ComplexList {
  public internalValue? : ResourceGroupMachineMachineTags[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ResourceGroupMachineMachineTagsOutputReference {
    return new ResourceGroupMachineMachineTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/resource_group_machine lacework_resource_group_machine}
*/
export class ResourceGroupMachine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lacework_resource_group_machine";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/resource_group_machine lacework_resource_group_machine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceGroupMachineConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceGroupMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'lacework_resource_group_machine',
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
    this._description = config.description;
    this._enabled = config.enabled;
    this._name = config.name;
    this._machineTags.internalValue = config.machineTags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
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

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // lacework_account_id - computed: true, optional: false, required: false
  public get laceworkAccountId() {
    return this.getStringAttribute('lacework_account_id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // machine_tags - computed: false, optional: false, required: true
  private _machineTags = new ResourceGroupMachineMachineTagsList(this, "machine_tags", true);
  public get machineTags() {
    return this._machineTags;
  }
  public putMachineTags(value: ResourceGroupMachineMachineTags[] | cdktf.IResolvable) {
    this._machineTags.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTagsInput() {
    return this._machineTags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      machine_tags: cdktf.listMapper(resourceGroupMachineMachineTagsToTerraform, true)(this._machineTags.internalValue),
    };
  }
}
