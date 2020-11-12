

import ApiClient from '../ApiClient';

/**
 * The GetAccountsTypeStatus model module.
 * @module model/GetAccountsTypeStatus
 * @version 1.0
 */
class GetAccountsTypeStatus {
    /**
     * Constructs a new <code>GetAccountsTypeStatus</code>.
     * @alias module:model/GetAccountsTypeStatus
     */
    constructor() { 
        
        GetAccountsTypeStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountsTypeStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountsTypeStatus} obj Optional instance to populate.
     * @return {module:model/GetAccountsTypeStatus} The populated <code>GetAccountsTypeStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountsTypeStatus();

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
GetAccountsTypeStatus.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetAccountsTypeStatus.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetAccountsTypeStatus.prototype['description'] = undefined;

/**
 * @member {Boolean} submittedAndPendingApproval
 */
GetAccountsTypeStatus.prototype['submittedAndPendingApproval'] = undefined;

/**
 * @member {Boolean} approved
 */
GetAccountsTypeStatus.prototype['approved'] = undefined;

/**
 * @member {Boolean} rejected
 */
GetAccountsTypeStatus.prototype['rejected'] = undefined;

/**
 * @member {Boolean} active
 */
GetAccountsTypeStatus.prototype['active'] = undefined;

/**
 * @member {Boolean} closed
 */
GetAccountsTypeStatus.prototype['closed'] = undefined;






export default GetAccountsTypeStatus;

