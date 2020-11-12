

import ApiClient from '../ApiClient';
import GetClientsLoanAccountsStatus from './GetClientsLoanAccountsStatus';
import GetClientsLoanAccountsType from './GetClientsLoanAccountsType';

/**
 * The GetClientsLoanAccounts model module.
 * @module model/GetClientsLoanAccounts
 * @version 1.0
 */
class GetClientsLoanAccounts {
    /**
     * Constructs a new <code>GetClientsLoanAccounts</code>.
     * @alias module:model/GetClientsLoanAccounts
     */
    constructor() { 
        
        GetClientsLoanAccounts.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetClientsLoanAccounts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetClientsLoanAccounts} obj Optional instance to populate.
     * @return {module:model/GetClientsLoanAccounts} The populated <code>GetClientsLoanAccounts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetClientsLoanAccounts();

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
                obj['status'] = GetClientsLoanAccountsStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('loanType')) {
                obj['loanType'] = GetClientsLoanAccountsType.constructFromObject(data['loanType']);
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
GetClientsLoanAccounts.prototype['id'] = undefined;

/**
 * @member {Number} accountNo
 */
GetClientsLoanAccounts.prototype['accountNo'] = undefined;

/**
 * @member {Number} externalId
 */
GetClientsLoanAccounts.prototype['externalId'] = undefined;

/**
 * @member {Number} productId
 */
GetClientsLoanAccounts.prototype['productId'] = undefined;

/**
 * @member {String} productName
 */
GetClientsLoanAccounts.prototype['productName'] = undefined;

/**
 * @member {module:model/GetClientsLoanAccountsStatus} status
 */
GetClientsLoanAccounts.prototype['status'] = undefined;

/**
 * @member {module:model/GetClientsLoanAccountsType} loanType
 */
GetClientsLoanAccounts.prototype['loanType'] = undefined;

/**
 * @member {Number} loanCycle
 */
GetClientsLoanAccounts.prototype['loanCycle'] = undefined;






export default GetClientsLoanAccounts;

