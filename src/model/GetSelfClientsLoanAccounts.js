

import ApiClient from '../ApiClient';
import GetSelfClientsLoanAccountsStatus from './GetSelfClientsLoanAccountsStatus';
import GetSelfClientsLoanAccountsType from './GetSelfClientsLoanAccountsType';

/**
 * The GetSelfClientsLoanAccounts model module.
 * @module model/GetSelfClientsLoanAccounts
 * @version 1.0
 */
class GetSelfClientsLoanAccounts {
    /**
     * Constructs a new <code>GetSelfClientsLoanAccounts</code>.
     * @alias module:model/GetSelfClientsLoanAccounts
     */
    constructor() { 
        
        GetSelfClientsLoanAccounts.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfClientsLoanAccounts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfClientsLoanAccounts} obj Optional instance to populate.
     * @return {module:model/GetSelfClientsLoanAccounts} The populated <code>GetSelfClientsLoanAccounts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfClientsLoanAccounts();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('accountNo')) {
                obj['accountNo'] = ApiClient.convertToType(data['accountNo'], 'Number');
            }
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'Number');
            }
            if (data.hasOwnProperty('productId')) {
                obj['productId'] = ApiClient.convertToType(data['productId'], 'Number');
            }
            if (data.hasOwnProperty('productName')) {
                obj['productName'] = ApiClient.convertToType(data['productName'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = GetSelfClientsLoanAccountsStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('loanType')) {
                obj['loanType'] = GetSelfClientsLoanAccountsType.constructFromObject(data['loanType']);
            }
            if (data.hasOwnProperty('loanCycle')) {
                obj['loanCycle'] = ApiClient.convertToType(data['loanCycle'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetSelfClientsLoanAccounts.prototype['id'] = undefined;

/**
 * @member {Number} accountNo
 */
GetSelfClientsLoanAccounts.prototype['accountNo'] = undefined;

/**
 * @member {Number} externalId
 */
GetSelfClientsLoanAccounts.prototype['externalId'] = undefined;

/**
 * @member {Number} productId
 */
GetSelfClientsLoanAccounts.prototype['productId'] = undefined;

/**
 * @member {String} productName
 */
GetSelfClientsLoanAccounts.prototype['productName'] = undefined;

/**
 * @member {module:model/GetSelfClientsLoanAccountsStatus} status
 */
GetSelfClientsLoanAccounts.prototype['status'] = undefined;

/**
 * @member {module:model/GetSelfClientsLoanAccountsType} loanType
 */
GetSelfClientsLoanAccounts.prototype['loanType'] = undefined;

/**
 * @member {Number} loanCycle
 */
GetSelfClientsLoanAccounts.prototype['loanCycle'] = undefined;






export default GetSelfClientsLoanAccounts;

