

import ApiClient from '../ApiClient';

/**
 * The GetStandingInstructionHistoryToAccount model module.
 * @module model/GetStandingInstructionHistoryToAccount
 * @version 1.0
 */
class GetStandingInstructionHistoryToAccount {
    /**
     * Constructs a new <code>GetStandingInstructionHistoryToAccount</code>.
     * @alias module:model/GetStandingInstructionHistoryToAccount
     */
    constructor() { 
        
        GetStandingInstructionHistoryToAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetStandingInstructionHistoryToAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetStandingInstructionHistoryToAccount} obj Optional instance to populate.
     * @return {module:model/GetStandingInstructionHistoryToAccount} The populated <code>GetStandingInstructionHistoryToAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetStandingInstructionHistoryToAccount();

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
GetStandingInstructionHistoryToAccount.prototype['id'] = undefined;

/**
 * @member {Number} accountNo
 */
GetStandingInstructionHistoryToAccount.prototype['accountNo'] = undefined;

/**
 * @member {Number} productId
 */
GetStandingInstructionHistoryToAccount.prototype['productId'] = undefined;

/**
 * @member {String} productName
 */
GetStandingInstructionHistoryToAccount.prototype['productName'] = undefined;






export default GetStandingInstructionHistoryToAccount;

