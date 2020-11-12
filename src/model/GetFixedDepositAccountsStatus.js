

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositAccountsStatus model module.
 * @module model/GetFixedDepositAccountsStatus
 * @version 1.0
 */
class GetFixedDepositAccountsStatus {
    /**
     * Constructs a new <code>GetFixedDepositAccountsStatus</code>.
     * @alias module:model/GetFixedDepositAccountsStatus
     */
    constructor() { 
        
        GetFixedDepositAccountsStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositAccountsStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositAccountsStatus} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositAccountsStatus} The populated <code>GetFixedDepositAccountsStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositAccountsStatus();

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
GetFixedDepositAccountsStatus.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetFixedDepositAccountsStatus.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetFixedDepositAccountsStatus.prototype['description'] = undefined;

/**
 * @member {Boolean} submittedAndPendingApproval
 */
GetFixedDepositAccountsStatus.prototype['submittedAndPendingApproval'] = undefined;

/**
 * @member {Boolean} approved
 */
GetFixedDepositAccountsStatus.prototype['approved'] = undefined;

/**
 * @member {Boolean} rejected
 */
GetFixedDepositAccountsStatus.prototype['rejected'] = undefined;

/**
 * @member {Boolean} withdrawnByApplicant
 */
GetFixedDepositAccountsStatus.prototype['withdrawnByApplicant'] = undefined;

/**
 * @member {Boolean} active
 */
GetFixedDepositAccountsStatus.prototype['active'] = undefined;

/**
 * @member {Boolean} closed
 */
GetFixedDepositAccountsStatus.prototype['closed'] = undefined;

/**
 * @member {Boolean} prematureClosed
 */
GetFixedDepositAccountsStatus.prototype['prematureClosed'] = undefined;

/**
 * @member {Boolean} transferInProgress
 */
GetFixedDepositAccountsStatus.prototype['transferInProgress'] = undefined;

/**
 * @member {Boolean} transferOnHold
 */
GetFixedDepositAccountsStatus.prototype['transferOnHold'] = undefined;






export default GetFixedDepositAccountsStatus;

