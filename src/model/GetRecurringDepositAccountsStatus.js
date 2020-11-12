

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositAccountsStatus model module.
 * @module model/GetRecurringDepositAccountsStatus
 * @version 1.0
 */
class GetRecurringDepositAccountsStatus {
    /**
     * Constructs a new <code>GetRecurringDepositAccountsStatus</code>.
     * @alias module:model/GetRecurringDepositAccountsStatus
     */
    constructor() { 
        
        GetRecurringDepositAccountsStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositAccountsStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositAccountsStatus} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositAccountsStatus} The populated <code>GetRecurringDepositAccountsStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositAccountsStatus();

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
            if (data.hasOwnProperty('prematureClosed')) {
                obj['prematureClosed'] = ApiClient.convertToType(data['prematureClosed'], 'Boolean');
            }
            if (data.hasOwnProperty('transferInProgress')) {
                obj['transferInProgress'] = ApiClient.convertToType(data['transferInProgress'], 'Boolean');
            }
            if (data.hasOwnProperty('transferOnHold')) {
                obj['transferOnHold'] = ApiClient.convertToType(data['transferOnHold'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetRecurringDepositAccountsStatus.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetRecurringDepositAccountsStatus.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetRecurringDepositAccountsStatus.prototype['description'] = undefined;

/**
 * @member {Boolean} submittedAndPendingApproval
 */
GetRecurringDepositAccountsStatus.prototype['submittedAndPendingApproval'] = undefined;

/**
 * @member {Boolean} approved
 */
GetRecurringDepositAccountsStatus.prototype['approved'] = undefined;

/**
 * @member {Boolean} rejected
 */
GetRecurringDepositAccountsStatus.prototype['rejected'] = undefined;

/**
 * @member {Boolean} withdrawnByApplicant
 */
GetRecurringDepositAccountsStatus.prototype['withdrawnByApplicant'] = undefined;

/**
 * @member {Boolean} active
 */
GetRecurringDepositAccountsStatus.prototype['active'] = undefined;

/**
 * @member {Boolean} closed
 */
GetRecurringDepositAccountsStatus.prototype['closed'] = undefined;

/**
 * @member {Boolean} prematureClosed
 */
GetRecurringDepositAccountsStatus.prototype['prematureClosed'] = undefined;

/**
 * @member {Boolean} transferInProgress
 */
GetRecurringDepositAccountsStatus.prototype['transferInProgress'] = undefined;

/**
 * @member {Boolean} transferOnHold
 */
GetRecurringDepositAccountsStatus.prototype['transferOnHold'] = undefined;






export default GetRecurringDepositAccountsStatus;

