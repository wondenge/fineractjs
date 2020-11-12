

import ApiClient from '../ApiClient';

/**
 * The GetAccountsStatus model module.
 * @module model/GetAccountsStatus
 * @version 1.0
 */
class GetAccountsStatus {
    /**
     * Constructs a new <code>GetAccountsStatus</code>.
     * @alias module:model/GetAccountsStatus
     */
    constructor() { 
        
        GetAccountsStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountsStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountsStatus} obj Optional instance to populate.
     * @return {module:model/GetAccountsStatus} The populated <code>GetAccountsStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountsStatus();

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
GetAccountsStatus.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetAccountsStatus.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetAccountsStatus.prototype['description'] = undefined;

/**
 * @member {Boolean} submittedAndPendingApproval
 */
GetAccountsStatus.prototype['submittedAndPendingApproval'] = undefined;

/**
 * @member {Boolean} approved
 */
GetAccountsStatus.prototype['approved'] = undefined;

/**
 * @member {Boolean} rejected
 */
GetAccountsStatus.prototype['rejected'] = undefined;

/**
 * @member {Boolean} active
 */
GetAccountsStatus.prototype['active'] = undefined;

/**
 * @member {Boolean} closed
 */
GetAccountsStatus.prototype['closed'] = undefined;






export default GetAccountsStatus;

