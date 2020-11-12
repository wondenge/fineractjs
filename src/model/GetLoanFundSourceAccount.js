

import ApiClient from '../ApiClient';

/**
 * The GetLoanFundSourceAccount model module.
 * @module model/GetLoanFundSourceAccount
 * @version 1.0
 */
class GetLoanFundSourceAccount {
    /**
     * Constructs a new <code>GetLoanFundSourceAccount</code>.
     * @alias module:model/GetLoanFundSourceAccount
     */
    constructor() { 
        
        GetLoanFundSourceAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanFundSourceAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanFundSourceAccount} obj Optional instance to populate.
     * @return {module:model/GetLoanFundSourceAccount} The populated <code>GetLoanFundSourceAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanFundSourceAccount();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('glCode')) {
                obj['glCode'] = ApiClient.convertToType(data['glCode'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetLoanFundSourceAccount.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetLoanFundSourceAccount.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetLoanFundSourceAccount.prototype['glCode'] = undefined;






export default GetLoanFundSourceAccount;

