  

import ApiClient from '../ApiClient';

/**
 * The GetStandingInstructionHistoryFromAccount model module.
 * @module model/GetStandingInstructionHistoryFromAccount
 * @version 1.0
 */
class GetStandingInstructionHistoryFromAccount {
    /**
     * Constructs a new <code>GetStandingInstructionHistoryFromAccount</code>.
     * @alias module:model/GetStandingInstructionHistoryFromAccount
     */
    constructor() { 
        
        GetStandingInstructionHistoryFromAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetStandingInstructionHistoryFromAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetStandingInstructionHistoryFromAccount} obj Optional instance to populate.
     * @return {module:model/GetStandingInstructionHistoryFromAccount} The populated <code>GetStandingInstructionHistoryFromAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetStandingInstructionHistoryFromAccount();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('accountNo')) {
                obj['accountNo'] = ApiClient.convertToType(data['accountNo'], 'Number');
            }
            if (data.hasOwnProperty('productId')) {
                obj['productId'] = ApiClient.convertToType(data['productId'], 'Number');
            }
            if (data.hasOwnProperty('productName')) {
                obj['productName'] = ApiClient.convertToType(data['productName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetStandingInstructionHistoryFromAccount.prototype['id'] = undefined;

/**
 * @member {Number} accountNo
 */
GetStandingInstructionHistoryFromAccount.prototype['accountNo'] = undefined;

/**
 * @member {Number} productId
 */
GetStandingInstructionHistoryFromAccount.prototype['productId'] = undefined;

/**
 * @member {String} productName
 */
GetStandingInstructionHistoryFromAccount.prototype['productName'] = undefined;






export default GetStandingInstructionHistoryFromAccount;

