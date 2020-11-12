

import ApiClient from '../ApiClient';

/**
 * The GetSelfClientsSavingsAccountsStatus model module.
 * @module model/GetSelfClientsSavingsAccountsStatus
 * @version 1.0
 */
class GetSelfClientsSavingsAccountsStatus {
    /**
     * Constructs a new <code>GetSelfClientsSavingsAccountsStatus</code>.
     * @alias module:model/GetSelfClientsSavingsAccountsStatus
     */
    constructor() { 
        
        GetSelfClientsSavingsAccountsStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfClientsSavingsAccountsStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfClientsSavingsAccountsStatus} obj Optional instance to populate.
     * @return {module:model/GetSelfClientsSavingsAccountsStatus} The populated <code>GetSelfClientsSavingsAccountsStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfClientsSavingsAccountsStatus();

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
GetSelfClientsSavingsAccountsStatus.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSelfClientsSavingsAccountsStatus.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSelfClientsSavingsAccountsStatus.prototype['description'] = undefined;

/**
 * @member {Boolean} submittedAndPendingApproval
 */
GetSelfClientsSavingsAccountsStatus.prototype['submittedAndPendingApproval'] = undefined;

/**
 * @member {Boolean} approved
 */
GetSelfClientsSavingsAccountsStatus.prototype['approved'] = undefined;

/**
 * @member {Boolean} rejected
 */
GetSelfClientsSavingsAccountsStatus.prototype['rejected'] = undefined;

/**
 * @member {Boolean} withdrawnByApplicant
 */
GetSelfClientsSavingsAccountsStatus.prototype['withdrawnByApplicant'] = undefined;

/**
 * @member {Boolean} active
 */
GetSelfClientsSavingsAccountsStatus.prototype['active'] = undefined;

/**
 * @member {Boolean} closed
 */
GetSelfClientsSavingsAccountsStatus.prototype['closed'] = undefined;






export default GetSelfClientsSavingsAccountsStatus;

