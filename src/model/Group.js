

import ApiClient from '../ApiClient';
import Client from './Client';
import GroupLevel from './GroupLevel';
import Office from './Office';
import Staff from './Staff';

/**
 * The Group model module.
 * @module model/Group
 * @version 1.0
 */
class Group {
    /**
     * Constructs a new <code>Group</code>.
     * @alias module:model/Group
     */
    constructor() { 
        
        Group.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Group</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Group} obj Optional instance to populate.
     * @return {module:model/Group} The populated <code>Group</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Group();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('office')) {
                obj['office'] = Office.constructFromObject(data['office']);
            }
            if (data.hasOwnProperty('staff')) {
                obj['staff'] = Staff.constructFromObject(data['staff']);
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = Group.constructFromObject(data['parent']);
            }
            if (data.hasOwnProperty('groupLevel')) {
                obj['groupLevel'] = GroupLevel.constructFromObject(data['groupLevel']);
            }
            if (data.hasOwnProperty('groupMembers')) {
                obj['groupMembers'] = ApiClient.convertToType(data['groupMembers'], [Group]);
            }
            if (data.hasOwnProperty('clientMembers')) {
                obj['clientMembers'] = ApiClient.convertToType(data['clientMembers'], [Client]);
            }
            if (data.hasOwnProperty('submittedOnDate')) {
                obj['submittedOnDate'] = ApiClient.convertToType(data['submittedOnDate'], 'Date');
            }
            if (data.hasOwnProperty('accountNumberRequiresAutoGeneration')) {
                obj['accountNumberRequiresAutoGeneration'] = ApiClient.convertToType(data['accountNumberRequiresAutoGeneration'], 'Boolean');
            }
            if (data.hasOwnProperty('pending')) {
                obj['pending'] = ApiClient.convertToType(data['pending'], 'Boolean');
            }
            if (data.hasOwnProperty('group')) {
                obj['group'] = ApiClient.convertToType(data['group'], 'Boolean');
            }
            if (data.hasOwnProperty('notActive')) {
                obj['notActive'] = ApiClient.convertToType(data['notActive'], 'Boolean');
            }
            if (data.hasOwnProperty('center')) {
                obj['center'] = ApiClient.convertToType(data['center'], 'Boolean');
            }
            if (data.hasOwnProperty('transferInProgress')) {
                obj['transferInProgress'] = ApiClient.convertToType(data['transferInProgress'], 'Boolean');
            }
            if (data.hasOwnProperty('transferOnHold')) {
                obj['transferOnHold'] = ApiClient.convertToType(data['transferOnHold'], 'Boolean');
            }
            if (data.hasOwnProperty('notPending')) {
                obj['notPending'] = ApiClient.convertToType(data['notPending'], 'Boolean');
            }
            if (data.hasOwnProperty('activationLocalDate')) {
                obj['activationLocalDate'] = ApiClient.convertToType(data['activationLocalDate'], 'Date');
            }
            if (data.hasOwnProperty('transferInProgressOrOnHold')) {
                obj['transferInProgressOrOnHold'] = ApiClient.convertToType(data['transferInProgressOrOnHold'], 'Boolean');
            }
            if (data.hasOwnProperty('childGroup')) {
                obj['childGroup'] = ApiClient.convertToType(data['childGroup'], 'Boolean');
            }
            if (data.hasOwnProperty('activeClientMembers')) {
                obj['activeClientMembers'] = ApiClient.convertToType(data['activeClientMembers'], [Client]);
            }
            if (data.hasOwnProperty('closed')) {
                obj['closed'] = ApiClient.convertToType(data['closed'], 'Boolean');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('new')) {
                obj['new'] = ApiClient.convertToType(data['new'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Group.prototype['id'] = undefined;

/**
 * @member {module:model/Office} office
 */
Group.prototype['office'] = undefined;

/**
 * @member {module:model/Staff} staff
 */
Group.prototype['staff'] = undefined;

/**
 * @member {module:model/Group} parent
 */
Group.prototype['parent'] = undefined;

/**
 * @member {module:model/GroupLevel} groupLevel
 */
Group.prototype['groupLevel'] = undefined;

/**
 * @member {Array.<module:model/Group>} groupMembers
 */
Group.prototype['groupMembers'] = undefined;

/**
 * @member {Array.<module:model/Client>} clientMembers
 */
Group.prototype['clientMembers'] = undefined;

/**
 * @member {Date} submittedOnDate
 */
Group.prototype['submittedOnDate'] = undefined;

/**
 * @member {Boolean} accountNumberRequiresAutoGeneration
 */
Group.prototype['accountNumberRequiresAutoGeneration'] = undefined;

/**
 * @member {Boolean} pending
 */
Group.prototype['pending'] = undefined;

/**
 * @member {Boolean} group
 */
Group.prototype['group'] = undefined;

/**
 * @member {Boolean} notActive
 */
Group.prototype['notActive'] = undefined;

/**
 * @member {Boolean} center
 */
Group.prototype['center'] = undefined;

/**
 * @member {Boolean} transferInProgress
 */
Group.prototype['transferInProgress'] = undefined;

/**
 * @member {Boolean} transferOnHold
 */
Group.prototype['transferOnHold'] = undefined;

/**
 * @member {Boolean} notPending
 */
Group.prototype['notPending'] = undefined;

/**
 * @member {Date} activationLocalDate
 */
Group.prototype['activationLocalDate'] = undefined;

/**
 * @member {Boolean} transferInProgressOrOnHold
 */
Group.prototype['transferInProgressOrOnHold'] = undefined;

/**
 * @member {Boolean} childGroup
 */
Group.prototype['childGroup'] = undefined;

/**
 * @member {Array.<module:model/Client>} activeClientMembers
 */
Group.prototype['activeClientMembers'] = undefined;

/**
 * @member {Boolean} closed
 */
Group.prototype['closed'] = undefined;

/**
 * @member {Boolean} active
 */
Group.prototype['active'] = undefined;

/**
 * @member {Boolean} new
 */
Group.prototype['new'] = undefined;






export default Group;

