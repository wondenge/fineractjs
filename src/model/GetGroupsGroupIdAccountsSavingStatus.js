  

import ApiClient from '../ApiClient';

/**
 * The GetGroupsGroupIdAccountsSavingStatus model module.
 * @module model/GetGroupsGroupIdAccountsSavingStatus
 * @version 1.0
 */
class GetGroupsGroupIdAccountsSavingStatus {
    /**
     * Constructs a new <code>GetGroupsGroupIdAccountsSavingStatus</code>.
     * @alias module:model/GetGroupsGroupIdAccountsSavingStatus
     */
    constructor() { 
        
        GetGroupsGroupIdAccountsSavingStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetGroupsGroupIdAccountsSavingStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetGroupsGroupIdAccountsSavingStatus} obj Optional instance to populate.
     * @return {module:model/GetGroupsGroupIdAccountsSavingStatus} The populated <code>GetGroupsGroupIdAccountsSavingStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetGroupsGroupIdAccountsSavingStatus();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('submittedAndPendingApproval')) {
                obj['submittedAndPendingApproval'] = ApiClient.convertToType(data['submittedAndPendingApproval'], 'Boolean');
            }
            if (data.hasOwnProperty('approved')) {
                obj['approved'] = ApiClient.convertToType(data['approved'], 'Boolean');
            }
            if (data.hasOwnProperty('rejected')) {
                obj['rejected'] = ApiClient.convertToType(data['rejected'], 'Boolean');
            }
            if (data.hasOwnProperty('withdrawnByApplicant')) {
                obj['withdrawnByApplicant'] = ApiClient.convertToType(data['withdrawnByApplicant'], 'Boolean');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('closed')) {
                obj['closed'] = ApiClient.convertToType(data['closed'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetGroupsGroupIdAccountsSavingStatus.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetGroupsGroupIdAccountsSavingStatus.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetGroupsGroupIdAccountsSavingStatus.prototype['description'] = undefined;

/**
 * @member {Boolean} submittedAndPendingApproval
 */
GetGroupsGroupIdAccountsSavingStatus.prototype['submittedAndPendingApproval'] = undefined;

/**
 * @member {Boolean} approved
 */
GetGroupsGroupIdAccountsSavingStatus.prototype['approved'] = undefined;

/**
 * @member {Boolean} rejected
 */
GetGroupsGroupIdAccountsSavingStatus.prototype['rejected'] = undefined;

/**
 * @member {Boolean} withdrawnByApplicant
 */
GetGroupsGroupIdAccountsSavingStatus.prototype['withdrawnByApplicant'] = undefined;

/**
 * @member {Boolean} active
 */
GetGroupsGroupIdAccountsSavingStatus.prototype['active'] = undefined;

/**
 * @member {Boolean} closed
 */
GetGroupsGroupIdAccountsSavingStatus.prototype['closed'] = undefined;






export default GetGroupsGroupIdAccountsSavingStatus;

